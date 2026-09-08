import puppeteer from 'puppeteer';
import { readFile } from 'node:fs/promises';
const out = process.env.AUDIT_OUT || `${process.env.TEMP}/specialist-visual-final`;
const results = JSON.parse(await readFile(`${out}/results.json`, 'utf8'));
const browser = await puppeteer.launch({headless:true});
try {
 const page = await browser.newPage();
 await page.setViewport({width:1400,height:900});
 for (const width of [390,1440]) {
  const cards = await Promise.all(results.filter(r=>r.width===width).map(async r=>`<figure><figcaption>${r.slug}</figcaption><img src="data:image/png;base64,${(await readFile(`${out}/${r.slug}-${width}-explorer.png`)).toString('base64')}"/></figure>`));
  await page.setContent(`<style>body{margin:12px;background:#eee;font:16px Arial;display:grid;grid-template-columns:repeat(${width===390?4:2},1fr);gap:12px}figure{margin:0}img{width:100%}figcaption{padding:10px}</style>${cards.join('')}`);
  await page.screenshot({path:`${out}/contact-${width}.png`,fullPage:true});
 }
} finally {await browser.close();}
