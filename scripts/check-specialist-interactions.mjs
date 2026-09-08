import assert from 'node:assert/strict';
import puppeteer from 'puppeteer';
const root=process.env.AUDIT_URL || 'http://127.0.0.1:3002';
const slugs=['spine-specialist','back-pain-doctor','scoliosis-doctor','sciatica-doctor','spinal-stenosis-specialist','herniated-disc-specialist','pinched-nerve-doctor'];
const browser=await puppeteer.launch({headless:true});
try {
 const page=await browser.newPage();
 await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);
 for(const width of [320,768]) {
  await page.setViewport({width,height:900});
  for(const slug of slugs) {
   const response=await page.goto(`${root}/find-care/${slug}`,{waitUntil:'networkidle2',timeout:90000});
   assert.equal(response.status(),200);
   const checks=await page.evaluate(()=>({
    overflow:document.documentElement.scrollWidth>innerWidth,
    h1:document.querySelectorAll('h1').length,
    title:document.title.length,
    description:document.querySelector('meta[name="description"]')?.content.length,
    canonical:document.querySelector('link[rel="canonical"]')?.href,
    schemas:[...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(s=>{const data=JSON.parse(s.textContent);return data['@graph'] || [data];}).map(n=>n['@type']),
    badHeadings:[...document.querySelectorAll('main h2')].some(h=>/what (is|are|causes)/i.test(h.textContent)),
    choices:document.querySelectorAll('button[aria-pressed]').length,
    locations:document.querySelectorAll('#locations details').length,
   }));
   assert.equal(checks.overflow,false,`${slug} overflow at ${width}`);
   assert.equal(checks.h1,1);assert.ok(checks.title<=60);assert.ok(checks.description<=155);
   assert.equal(checks.canonical,`https://mountainspineorthopedics.com/find-care/${slug}`);
   assert.equal(checks.badHeadings,false);assert.equal(checks.choices,3);assert.equal(checks.locations,4);
   for(const type of ['MedicalWebPage','Physician','FAQPage','BreadcrumbList'])assert.ok(checks.schemas.includes(type));
   await page.evaluate(()=>[...document.querySelectorAll('button')].find(b=>b.textContent.trim()==='Reject All')?.click());
   let keyboardOk=false;
   for(let attempt=0;attempt<2&&!keyboardOk;attempt++){
    await page.focus('button[aria-pressed]');
    await page.keyboard.press('Tab');await page.keyboard.press('Enter');
    keyboardOk=await page.waitForFunction(()=>document.querySelectorAll('button[aria-pressed]')[1]?.getAttribute('aria-pressed')==='true',{timeout:15000}).then(()=>true,()=>false);
   }
   assert.ok(keyboardOk,`${slug} keyboard selection at ${width}`);
   assert.equal(await page.$eval('button[aria-pressed="true"]',e=>e.textContent),await page.$$eval('button[aria-pressed]',es=>es[1].textContent));
   await page.$eval('#locations summary',e=>e.click());
   assert.equal(await page.$eval('#locations details',e=>e.open),true);
   assert.ok(await page.$('#locations details a[href^="/locations/"]'));
   const faq=await page.$('main button[aria-expanded="false"]');
   if(faq){await faq.evaluate(e=>e.click());await page.waitForFunction(e=>e.getAttribute('aria-expanded')==='true',{},faq);}
   console.log(`PASS ${slug} ${width}px: SEO, keyboard, reduced-motion mode, locations${faq?', FAQ':''}`);
  }
 }
 for(const path of ['/find-care/second-opinion','/conditions']){
  assert.equal((await page.goto(`${root}${path}`,{waitUntil:'domcontentloaded',timeout:90000})).status(),200);
 }
 assert.equal((await page.goto(`${root}/find-care/not-a-specialist-page`,{waitUntil:'domcontentloaded',timeout:90000})).status(),404);
 console.log('PASS existing routes and unknown specialist 404');
} finally {await browser.close();}
