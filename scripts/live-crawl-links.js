/**
 *  Run locally (default → port 3000):
 *      node scripts/live-crawl-links.js
 *
 *  OR choose a different port / host:
 *      APP_ORIGIN=http://localhost:4000 node scripts/live-crawl-links.js
 */

import fs     from 'fs';
import fetch  from 'node-fetch';
import * as cheerio from 'cheerio';

/**
 * Crawl origin:
 * – Reads process.env.APP_ORIGIN first
 * – otherwise defaults to the local Next port (3000)
 */
const ORIGIN = process.env.APP_ORIGIN || 'http://localhost:3000';

const paths = fs.readFileSync('orphan_pages.clean.txt','utf8')
  .split(/\r?\n/).filter(Boolean)
  .map(u => u.replace(/^https?:\/\/[^/]+/, '').replace(/\/$/,'') || '/')
  .map(href => {
    if (href !== '/' && !href.startsWith('/')) href = '/' + href;
    if (href === '') href = '/';
    return href;
  });

const linked = new Set();

async function fetchWithRetry(url, retries = 1) {
  try {
    return await fetch(url);
  } catch (err) {
    if (retries > 0 && err.code === 'ECONNREFUSED') {
      await new Promise(res => setTimeout(res, 1000));
      return fetchWithRetry(url, retries - 1);
    }
    throw err;
  }
}

for (const p of paths){
  const res = await fetchWithRetry(ORIGIN + (p === '/' ? '/' : p));
  if (!res.ok) continue;                 // 404 etc.

  const html = await res.text();
  const $ = cheerio.load(html);
  $('a[href]').each((_,el)=>{
    let href = ($(el).attr('href')||'').trim();
    if (!href || href.startsWith('#')) return;
    href = href.replace(/^https?:\/\/[^/]+/, '').split('#')[0].replace(/\/$/,'') || '/';
    // ─ Patch start
    if (href !== '/' && !href.startsWith('/')) href = '/' + href;
    if (href === '') href = '/';
    // ─ Patch end
    linked.add(href);
  });
  process.stdout.write('.');             // progress indicator
}

const linkedList = paths.filter(p=>linked.has(p));
const orphanList = paths.filter(p=>!linked.has(p));

fs.writeFileSync('linked_orphans.txt', linkedList.join('\n'));
fs.writeFileSync('still_orphan.txt',  orphanList.join('\n'));

console.log(`\nTotal checked : ${paths.length}`);
console.log(`Linked        : ${linkedList.length}`);
console.log(`Still orphan  : ${orphanList.length}`);

process.exit(0); 