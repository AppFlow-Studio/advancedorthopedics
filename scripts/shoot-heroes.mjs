/**
 * Captures every specialist hero explorer panel (all 3 views) plus the full
 * hero at desktop and mobile widths, and asserts the CRO fold contract:
 * Book CTA, phone CTA, review proof, and the five-state line all above the
 * fold on both breakpoints. Contact sheets per width for fast review.
 *   AUDIT_URL=http://127.0.0.1:3002 node scripts/shoot-heroes.mjs [viewIndex]
 */
import puppeteer from 'puppeteer';
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const root = process.env.AUDIT_URL || 'http://127.0.0.1:3002';
const out = `${process.env.TEMP}/hero-audit`;
const view = Number(process.argv[2] ?? 0);
const slugs = ['spine-specialist', 'back-pain-doctor', 'scoliosis-doctor', 'sciatica-doctor', 'spinal-stenosis-specialist', 'herniated-disc-specialist', 'pinched-nerve-doctor'];
await mkdir(out, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const browser = await puppeteer.launch({ headless: true });

try {
  for (const width of [390, 1440]) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: width === 390 ? 844 : 900 });
    for (const slug of slugs) {
      await page.goto(`${root}/find-care/${slug}`, { waitUntil: 'networkidle2', timeout: 90000 });
      await page.evaluate(() => [...document.querySelectorAll('button')].find((b) => b.textContent.trim() === 'Reject All')?.click());
      await sleep(400);
      // fold contract
      const fold = await page.evaluate(() => {
        const y = (el) => (el ? el.getBoundingClientRect().top : 99999);
        const links = [...document.querySelectorAll('main a')];
        const texts = [...document.querySelectorAll('main span, main p')];
        return {
          book: y(links.find((a) => a.getAttribute('href') === '/find-care/book-an-appointment')),
          call: y(links.find((a) => (a.getAttribute('href') || '').startsWith('tel:'))),
          reviews: y(texts.find((t) => t.textContent.includes('Google reviews'))),
          states: y(texts.find((t) => t.textContent.includes('FL · NJ · NY · PA · GA'))),
          overflow: document.documentElement.scrollWidth > innerWidth,
        };
      });
      const foldLine = width === 390 ? 844 : 900;
      for (const [k, v] of Object.entries(fold)) {
        if (k === 'overflow') assert.equal(v, false, `${slug}@${width} overflow`);
        else assert.ok(v < foldLine, `${slug}@${width}: ${k} below fold (${Math.round(v)})`);
      }
      // select the requested explorer view, then screenshot the panel
      const choices = await page.$$('button[aria-pressed]');
      if (choices[view]) { await choices[view].evaluate((e) => e.click()); await sleep(1200); }
      const panel = await page.$('div[class*="explorer"]');
      await panel.evaluate((e) => e.scrollIntoView({ block: 'center' }));
      await sleep(600);
      await panel.screenshot({ path: `${out}/${slug}-${width}-v${view}.png` });
      if (view === 0) {
        await page.evaluate(() => scrollTo(0, 0));
        await sleep(400);
        await page.screenshot({ path: `${out}/${slug}-${width}-hero.png` });
      }
      console.log(`${slug}@${width}: book=${Math.round(fold.book)} call=${Math.round(fold.call)} reviews=${Math.round(fold.reviews)} states=${Math.round(fold.states)}`);
    }
    await page.close();
  }
  // contact sheets of the explorer panels
  const sheet = await browser.newPage();
  for (const width of [390, 1440]) {
    const cards = await Promise.all(
      slugs.map(async (s) => `<figure><figcaption>${s}</figcaption><img src="data:image/png;base64,${(await readFile(`${out}/${s}-${width}-v${view}.png`)).toString('base64')}"/></figure>`),
    );
    await sheet.setViewport({ width: 1500, height: 900 });
    await sheet.setContent(`<style>body{margin:10px;background:#e8e8e8;font:13px Arial;display:grid;grid-template-columns:repeat(4,1fr);gap:10px}figure{margin:0}img{width:100%}figcaption{padding:6px}</style>${cards.join('')}`);
    await sheet.screenshot({ path: `${out}/sheet-${width}-v${view}.png`, fullPage: true });
  }
  console.log(`PASS — sheets at ${out}/sheet-390-v${view}.png and sheet-1440-v${view}.png`);
} finally {
  await browser.close();
}
