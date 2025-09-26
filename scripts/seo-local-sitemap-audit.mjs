#!/usr/bin/env node

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer';
import { writeFileSync } from 'fs';
import { createWriteStream } from 'fs';
import { mkdir } from 'fs/promises';
import csv from 'fast-csv';
import { parseString } from 'xml2js';
import { promisify } from 'util';

const parseXML = promisify(parseString);

// Configuration
const CONFIG = {
  SITEMAP_URL: 'https://mountainspineorthopedics.com/sitemap.xml',
  LOCAL_BASE: 'http://localhost:3000',
  PROD_BASE: 'https://mountainspineorthopedics.com',
  CONCURRENCY: 4,
  TIMEOUT: 25000,
  HEADLESS: true,
  OUTPUT_DIR: 'reports'
};

// CLI arguments parsing
const args = process.argv.slice(2);
const options = {
  only: args.find(arg => arg.startsWith('--only='))?.split('=')[1],
  concurrency: parseInt(args.find(arg => arg.startsWith('--concurrency='))?.split('=')[1] || CONFIG.CONCURRENCY),
  timeout: parseInt(args.find(arg => arg.startsWith('--timeout='))?.split('=')[1] || CONFIG.TIMEOUT),
  headless: args.includes('--headless'),
  debug: args.includes('--debug')
};

if (options.debug) {
  console.log('🔧 Debug mode enabled');
  console.log('Options:', options);
}

// Utility functions
function log(message, level = 'info') {
  const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
  const prefix = level === 'error' ? '❌' : level === 'warn' ? '⚠️' : level === 'debug' ? '🔍' : '✅';
  console.log(`[${timestamp}] ${prefix} ${message}`);
}

function extractText(element) {
  return element ? element.text().trim() : '';
}

function extractAttr(element, attr) {
  return element ? element.attr(attr) : null;
}

function validateTitle(title) {
  if (!title) return { valid: false, issue: 'Missing title' };
  const len = title.length;
  if (len < 30) return { valid: false, issue: `Too short (${len} chars)` };
  if (len > 65) return { valid: false, issue: `Too long (${len} chars)` };
  return { valid: true, issue: null };
}

function validateDescription(desc) {
  if (!desc) return { valid: false, issue: 'Missing description' };
  const len = desc.length;
  if (len < 80) return { valid: false, issue: `Too short (${len} chars)` };
  if (len > 170) return { valid: false, issue: `Too long (${len} chars)` };
  return { valid: true, issue: null };
}

function validateCanonical(canonical) {
  if (!canonical) return { valid: false, issue: 'Missing canonical' };
  if (!canonical.startsWith(CONFIG.PROD_BASE)) {
    return { valid: false, issue: `Wrong domain: ${canonical}` };
  }
  return { valid: true, issue: null };
}

function validateH1(h1) {
  if (!h1) return { valid: false, issue: 'Missing H1' };
  return { valid: true, issue: null };
}

function validateH2(h2Count) {
  if (h2Count === 0) return { valid: false, issue: 'No H2 tags found' };
  return { valid: true, issue: null };
}

// Fetch and parse sitemap
async function loadSitemap() {
  try {
    log(`Loading sitemap from ${CONFIG.SITEMAP_URL}`);
    const response = await fetch(CONFIG.SITEMAP_URL);
    const xml = await response.text();
    const result = await parseXML(xml);
    
    const urls = result.urlset.url
      .map(url => url.loc[0])
      .filter(url => !url.includes('/blogs/')) // Exclude blog URLs
      .map(url => url.replace(CONFIG.PROD_BASE, CONFIG.LOCAL_BASE));
    
    if (options.only) {
      const filtered = urls.filter(url => url.includes(options.only));
      log(`Filtered to ${filtered.length} URLs matching "${options.only}"`);
      return filtered;
    }
    
    log(`Loaded ${urls.length} URLs from sitemap (excluding blogs)`);
    return urls;
  } catch (error) {
    log(`Failed to load sitemap: ${error.message}`, 'error');
    throw error;
  }
}

// Audit single URL
async function auditUrl(url, browser) {
  const result = {
    url,
    http_status: null,
    ssr_title: '',
    ssr_title_len: 0,
    ssr_meta_desc: '',
    ssr_meta_desc_len: 0,
    ssr_canonical: '',
    ssr_h1: '',
    ssr_h2_count: 0,
    ssr_schema_types: '',
    csr_title: '',
    csr_meta_desc: '',
    csr_meta_desc_len: 0,
    csr_canonical: '',
    csr_h1: '',
    csr_h2_count: 0,
    csr_schema_types: '',
    canonical_ok: false,
    title_ok: false,
    meta_ok: false,
    h1_ok: false,
    h2_ok: false,
    ssr_vs_csr_warnings: '',
    outlinks_localhost_count: 0,
    notes: ''
  };

  try {
    // SSR fetch with Puppeteer (to handle streaming metadata)
    log(`Auditing SSR: ${url}`, 'debug');
    const ssrPage = await browser.newPage();
    await ssrPage.setUserAgent('Mozilla/5.0 (compatible; SEO-Audit/1.0)');
    
    try {
      await ssrPage.goto(url, { 
        waitUntil: 'networkidle2', 
        timeout: options.timeout 
      });
      
      result.http_status = 200; // Assume success if no error
      
      // Extract SSR data using Puppeteer
      const ssrData = await ssrPage.evaluate(() => {
        const getText = (selector) => {
          const el = document.querySelector(selector);
          return el ? el.textContent.trim() : '';
        };
        
        const getAttr = (selector, attr) => {
          const el = document.querySelector(selector);
          return el ? el.getAttribute(attr) : '';
        };
        
        const schemas = [];
        document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
          try {
            const json = JSON.parse(script.textContent);
            if (json['@type']) {
              schemas.push(json['@type']);
            }
          } catch (e) {
            // Invalid JSON
          }
        });
        
        return {
          title: getText('title'),
          metaDesc: getAttr('meta[name="description"]', 'content') || '',
          canonical: getAttr('link[rel="canonical"]', 'href') || '',
          h1: getText('h1'),
          h2Count: document.querySelectorAll('h2').length,
          schemas: schemas.join(', '),
          localhostLinks: document.querySelectorAll('a[href*="localhost"]').length
        };
      });
      
      // Set SSR results
      result.ssr_title = ssrData.title;
      result.ssr_title_len = ssrData.title.length;
      result.ssr_meta_desc = ssrData.metaDesc;
      result.ssr_meta_desc_len = ssrData.metaDesc.length;
      result.ssr_canonical = ssrData.canonical;
      result.ssr_h1 = ssrData.h1;
      result.ssr_h2_count = ssrData.h2Count;
      result.ssr_schema_types = ssrData.schemas;
      result.outlinks_localhost_count = ssrData.localhostLinks;
      
      // Validate SSR data
      const titleValidation = validateTitle(result.ssr_title);
      const descValidation = validateDescription(result.ssr_meta_desc);
      const canonicalValidation = validateCanonical(result.ssr_canonical);
      const h1Validation = validateH1(result.ssr_h1);
      const h2Validation = validateH2(result.ssr_h2_count);
      
      result.title_ok = titleValidation.valid;
      result.meta_ok = descValidation.valid;
      result.canonical_ok = canonicalValidation.valid;
      result.h1_ok = h1Validation.valid;
      result.h2_ok = h2Validation.valid;
      
      // Collect validation issues
      const issues = [];
      if (!titleValidation.valid) issues.push(`SSR Title: ${titleValidation.issue}`);
      if (!descValidation.valid) issues.push(`SSR Meta: ${descValidation.issue}`);
      if (!canonicalValidation.valid) issues.push(`SSR Canonical: ${canonicalValidation.issue}`);
      if (!h1Validation.valid) issues.push(`SSR H1: ${h1Validation.issue}`);
      if (!h2Validation.valid) issues.push(`SSR H2: ${h2Validation.issue}`);
      
      if (issues.length > 0) {
        result.notes = issues.join('; ');
      }
      
    } finally {
      await ssrPage.close();
    }

    // CSR render with puppeteer
    log(`Auditing CSR: ${url}`, 'debug');
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');
    
    try {
      await page.goto(url, { 
        waitUntil: 'networkidle2', 
        timeout: options.timeout 
      });
      
      // Extract CSR data
      const csrData = await page.evaluate(() => {
        const getText = (selector) => {
          const el = document.querySelector(selector);
          return el ? el.textContent.trim() : '';
        };
        
        const getAttr = (selector, attr) => {
          const el = document.querySelector(selector);
          return el ? el.getAttribute(attr) : '';
        };
        
        const schemas = [];
        document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
          try {
            const json = JSON.parse(script.textContent);
            if (json['@type']) {
              schemas.push(json['@type']);
            }
          } catch (e) {
            // Invalid JSON
          }
        });
        
        return {
          title: getText('title'),
          metaDesc: getAttr('meta[name="description"]', 'content'),
          canonical: getAttr('link[rel="canonical"]', 'href'),
          h1: getText('h1'),
          h2Count: document.querySelectorAll('h2').length,
          schemaTypes: schemas.join(', ')
        };
      });
      
      result.csr_title = csrData.title;
      result.csr_meta_desc = csrData.metaDesc;
      result.csr_meta_desc_len = csrData.metaDesc.length;
      result.csr_canonical = csrData.canonical;
      result.csr_h1 = csrData.h1;
      result.csr_h2_count = csrData.h2Count;
      result.csr_schema_types = csrData.schemaTypes;
      
      // Compare SSR vs CSR
      const ssrVsCsrWarnings = [];
      if (result.ssr_title !== result.csr_title) {
        ssrVsCsrWarnings.push('Title mismatch');
      }
      if (result.ssr_meta_desc !== result.csr_meta_desc) {
        ssrVsCsrWarnings.push('Meta description mismatch');
      }
      if (result.ssr_canonical !== result.csr_canonical) {
        ssrVsCsrWarnings.push('Canonical mismatch');
      }
      if (result.ssr_h1 !== result.csr_h1) {
        ssrVsCsrWarnings.push('H1 mismatch');
      }
      if (result.ssr_h2_count !== result.csr_h2_count) {
        ssrVsCsrWarnings.push('H2 count mismatch');
      }
      
      if (ssrVsCsrWarnings.length > 0) {
        result.ssr_vs_csr_warnings = ssrVsCsrWarnings.join(', ');
      }
      
    } catch (csrError) {
      log(`CSR audit failed for ${url}: ${csrError.message}`, 'warn');
      result.notes += (result.notes ? '; ' : '') + `CSR Error: ${csrError.message}`;
    } finally {
      await page.close();
    }
    
    log(`✅ Completed audit for ${url}`, 'debug');
    
  } catch (error) {
    log(`❌ Failed to audit ${url}: ${error.message}`, 'error');
    result.notes = `Error: ${error.message}`;
  }
  
  return result;
}

// Process URLs in batches
async function processBatch(urls, browser, startIndex) {
  const batch = urls.slice(startIndex, startIndex + options.concurrency);
  const promises = batch.map(url => auditUrl(url, browser));
  return Promise.all(promises);
}

// Generate summary report
function generateSummary(results) {
  const total = results.length;
  const successful = results.filter(r => r.http_status === 200).length;
  const failed = total - successful;
  
  const missingCanonical = results.filter(r => !r.canonical_ok).length;
  const missingTitle = results.filter(r => !r.title_ok).length;
  const missingMeta = results.filter(r => !r.meta_ok).length;
  const missingH1 = results.filter(r => !r.h1_ok).length;
  const missingH2 = results.filter(r => !r.h2_ok).length;
  
  const ssrVsCsrIssues = results.filter(r => r.ssr_vs_csr_warnings).length;
  const localhostOutlinks = results.filter(r => r.outlinks_localhost_count > 0).length;
  
  return {
    total,
    successful,
    failed,
    missingCanonical,
    missingTitle,
    missingMeta,
    missingH1,
    missingH2,
    ssrVsCsrIssues,
    localhostOutlinks
  };
}

// Main execution
async function main() {
  try {
    // Create output directory
    await mkdir(CONFIG.OUTPUT_DIR, { recursive: true });
    
    // Load sitemap
    const urls = await loadSitemap();
    
    if (urls.length === 0) {
      log('No URLs to audit', 'warn');
      return;
    }
    
    // Launch browser
    log(`Launching browser (headless: ${options.headless})`);
    const browser = await puppeteer.launch({
      headless: options.headless,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    try {
      const results = [];
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
      
      // Process URLs in batches
      for (let i = 0; i < urls.length; i += options.concurrency) {
        const batchResults = await processBatch(urls, browser, i);
        results.push(...batchResults);
        
        const progress = Math.min(i + options.concurrency, urls.length);
        log(`Progress: ${progress}/${urls.length} URLs audited`);
      }
      
      // Generate summary
      const summary = generateSummary(results);
      
      // Save results
      const csvPath = `${CONFIG.OUTPUT_DIR}/seo-local-${timestamp}.csv`;
      const jsonPath = `${CONFIG.OUTPUT_DIR}/seo-local-${timestamp}.json`;
      
      // Write CSV
      const csvStream = csv.format({ headers: true });
      const writeStream = createWriteStream(csvPath);
      csvStream.pipe(writeStream);
      
      results.forEach(result => csvStream.write(result));
      csvStream.end();
      
      // Write JSON
      writeFileSync(jsonPath, JSON.stringify({
        summary,
        timestamp: new Date().toISOString(),
        results
      }, null, 2));
      
      // Console summary
      log('\n🎯 SEO AUDIT SUMMARY');
      log('='.repeat(50));
      log(`Total URLs audited: ${summary.total}`);
      log(`Successful requests: ${summary.successful}`);
      log(`Failed requests: ${summary.failed}`);
      log('');
      log('📊 SEO Issues Found:');
      log(`  Missing canonicals: ${summary.missingCanonical}`);
      log(`  Missing/invalid titles: ${summary.missingTitle}`);
      log(`  Missing/invalid descriptions: ${summary.missingMeta}`);
      log(`  Missing H1 tags: ${summary.missingH1}`);
      log(`  Missing H2 tags: ${summary.missingH2}`);
      log('');
      log('⚠️  Technical Issues:');
      log(`  SSR vs CSR mismatches: ${summary.ssrVsCsrIssues}`);
      log(`  Localhost outlinks: ${summary.localhostOutlinks}`);
      log('');
      log(`📁 Reports saved:`);
      log(`  CSV: ${csvPath}`);
      log(`  JSON: ${jsonPath}`);
      
      if (summary.missingCanonical > 0 || summary.missingTitle > 0 || summary.ssrVsCsrIssues > 0) {
        log('\n🚨 Critical issues detected! Review the detailed reports.', 'warn');
      } else {
        log('\n✅ All SEO elements are properly configured!', 'info');
      }
      
    } finally {
      await browser.close();
    }
    
  } catch (error) {
    log(`Fatal error: ${error.message}`, 'error');
    process.exit(1);
  }
}

// Run the script
main();
