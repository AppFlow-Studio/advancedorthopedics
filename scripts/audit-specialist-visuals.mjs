import puppeteer from 'puppeteer';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const root = process.env.AUDIT_URL || 'http://127.0.0.1:3000';
const out = process.env.AUDIT_OUT || `${process.env.TEMP}/specialist-visual-audit`;
const slugs = ['spine-specialist','back-pain-doctor','scoliosis-doctor','sciatica-doctor','spinal-stenosis-specialist','herniated-disc-specialist','pinched-nerve-doctor'];
await mkdir(out,{recursive:true});
const browser=await puppeteer.launch({headless:true});
const results=[];
try {
 for(const width of [390,1440]) {
  const page=await browser.newPage(); await page.setViewport({width,height:900});
  for(const slug of slugs){
   const response=await page.goto(`${root}/find-care/${slug}`,{waitUntil:'networkidle2',timeout:90000});
   await new Promise(r=>setTimeout(r,1000));
   await page.evaluate(()=>[...document.querySelectorAll('button')].find(b=>b.textContent.trim()==='Reject All')?.click());
   await new Promise(r=>setTimeout(r,2000));
   const choices=await page.$$('button[aria-pressed]');
   const interaction=[];
   for(const choice of choices){await choice.evaluate(e=>e.click());await page.waitForFunction(e=>e.getAttribute('aria-pressed')==='true',{},choice);await new Promise(r=>setTimeout(r,850));interaction.push(await choice.evaluate(e=>e.getAttribute('aria-pressed')==='true'));}
   const before=await page.evaluate(()=>({h1:document.querySelector('h1')?.textContent,width:innerWidth,scrollWidth:document.body.scrollWidth,ctaY:[...document.querySelectorAll('main a')].find(a=>a.getAttribute('href')==='/find-care/book-an-appointment')?.getBoundingClientRect().top}));
   await page.screenshot({path:`${out}/${slug}-${width}-hero.png`});
   const illustration=await page.$('main svg[role="img"]');
   if(illustration){await illustration.evaluate(e=>e.closest('div')?.parentElement?.scrollIntoView({block:'center'}));await new Promise(r=>setTimeout(r,500));await page.screenshot({path:`${out}/${slug}-${width}-explorer.png`});}
   await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){scrollTo(0,y);await new Promise(r=>setTimeout(r,60));}scrollTo(0,0);});
   await page.$eval('#specialists',e=>e.scrollIntoView());
   await page.waitForFunction(()=>[...document.querySelectorAll('#specialists img')].every(img=>img.complete&&img.naturalWidth>0),{timeout:30000}).catch(()=>{});
   const imagesLoaded=await page.$$eval('#specialists img',es=>es.every(e=>e.complete&&e.naturalWidth>0));
   await page.evaluate(()=>scrollTo(0,0));
   await new Promise(r=>setTimeout(r,2000));
   await page.screenshot({path:`${out}/${slug}-${width}-full.png`,fullPage:true});
   results.push({slug,width,status:response.status(),interaction,imagesLoaded,...before});
   assert.equal(response.status(),200);assert.equal(before.scrollWidth,width);assert.equal(interaction.length,3);assert.ok(interaction.every(Boolean));
   console.log(`${slug} ${width}px: ${response.status()}, ${before.scrollWidth}px document, ${interaction.length} controls`);
  }
  await page.close();
 }
} finally {await browser.close();}
await writeFile(`${out}/results.json`,JSON.stringify(results,null,2));
console.log(JSON.stringify({out,results},null,2));
