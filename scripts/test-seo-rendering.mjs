#!/usr/bin/env node

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

// Test a few key URLs to verify SSR metadata is working
const testUrls = [
  'http://localhost:3000/about',
  'http://localhost:3000/privacy-policy', 
  'http://localhost:3000/insurance-policy',
  'http://localhost:3000/area-of-specialty',
  'http://localhost:3000/treatments',
  'http://localhost:3000/locations'
];

async function testUrl(url) {
  try {
    console.log(`\n🔍 Testing: ${url}`);
    const response = await fetch(url);
    
    if (!response.ok) {
      console.log(`❌ HTTP ${response.status}`);
      return;
    }
    
    const html = await response.text();
    const $ = cheerio.load(html);
    
    // Extract SEO elements
    const title = $('title').text().trim();
    const metaDesc = $('meta[name="description"]').attr('content') || '';
    const canonical = $('link[rel="canonical"]').attr('href') || '';
    const h1 = $('h1').first().text().trim();
    const h2Count = $('h2').length;
    
    // Check if elements exist
    const hasTitle = title.length > 0;
    const hasMetaDesc = metaDesc.length > 0;
    const hasCanonical = canonical.length > 0;
    const hasH1 = h1.length > 0;
    const hasH2 = h2Count > 0;
    
    // Validation
    const titleValid = hasTitle && title.length >= 30 && title.length <= 65;
    const metaValid = hasMetaDesc && metaDesc.length >= 80 && metaDesc.length <= 170;
    const canonicalValid = hasCanonical && canonical.startsWith('https://mountainspineorthopedics.com');
    
    console.log(`📄 Title: ${hasTitle ? '✅' : '❌'} ${title}`);
    console.log(`📝 Meta: ${hasMetaDesc ? '✅' : '❌'} ${metaDesc.substring(0, 60)}...`);
    console.log(`🔗 Canonical: ${hasCanonical ? '✅' : '❌'} ${canonical}`);
    console.log(`🏷️  H1: ${hasH1 ? '✅' : '❌'} ${h1}`);
    console.log(`🏷️  H2 Count: ${hasH2 ? '✅' : '❌'} ${h2Count}`);
    
    console.log(`\n📊 Validation:`);
    console.log(`  Title Length: ${titleValid ? '✅' : '❌'} (${title.length} chars)`);
    console.log(`  Meta Length: ${metaValid ? '✅' : '❌'} (${metaDesc.length} chars)`);
    console.log(`  Canonical Domain: ${canonicalValid ? '✅' : '❌'}`);
    
    const allValid = titleValid && metaValid && canonicalValid && hasH1 && hasH2;
    console.log(`\n🎯 Overall: ${allValid ? '✅ PASS' : '❌ FAIL'}`);
    
    return {
      url,
      hasTitle,
      hasMetaDesc, 
      hasCanonical,
      hasH1,
      hasH2,
      titleValid,
      metaValid,
      canonicalValid,
      allValid
    };
    
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
    return {
      url,
      error: error.message,
      allValid: false
    };
  }
}

async function main() {
  console.log('🚀 Testing SEO SSR Rendering');
  console.log('Make sure your dev server is running: npm run dev\n');
  
  const results = [];
  
  for (const url of testUrls) {
    const result = await testUrl(url);
    results.push(result);
  }
  
  // Summary
  const total = results.length;
  const passed = results.filter(r => r.allValid).length;
  const failed = total - passed;
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total URLs tested: ${total}`);
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  
  if (failed > 0) {
    console.log('\n❌ Failed URLs:');
    results.filter(r => !r.allValid).forEach(r => {
      console.log(`  ${r.url} - ${r.error || 'SEO elements missing/invalid'}`);
    });
  }
  
  if (passed === total) {
    console.log('\n🎉 All pages have proper SSR SEO metadata!');
  } else {
    console.log('\n⚠️  Some pages need SEO fixes. Check the details above.');
  }
}

main().catch(console.error);
