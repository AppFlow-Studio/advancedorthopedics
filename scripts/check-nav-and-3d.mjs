/**
 * Visual verification for the compact navbar and the 3D vertebra viewer.
 * Screenshots go to %TEMP%/nav-3d-audit. Run against a production server:
 *   AUDIT_URL=http://127.0.0.1:3002 node scripts/check-nav-and-3d.mjs
 */
import puppeteer from 'puppeteer';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';

const root = process.env.AUDIT_URL || 'http://127.0.0.1:3002';
const out = `${process.env.TEMP}/nav-3d-audit`;
await mkdir(out, { recursive: true });
const browser = await puppeteer.launch({ headless: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

try {
  // ---------- Desktop: header + FIND CARE menu ----------
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${root}/find-care/spine-specialist`, { waitUntil: 'networkidle2', timeout: 90000 });
  await page.evaluate(() => [...document.querySelectorAll('button')].find((b) => b.textContent.trim() === 'Reject All')?.click());
  await sleep(600);

  const header = await page.evaluate(() => {
    const h = document.querySelector('header');
    const r = h.getBoundingClientRect();
    return { height: r.height };
  });
  console.log(`desktop header height: ${header.height}px`);
  assert.ok(header.height <= 64, `header too tall: ${header.height}`);
  await page.screenshot({ path: `${out}/desktop-header-closed.png` });

  // open FIND CARE
  const findCare = (await page.$$('button'))[await page.$$eval('button', (bs) => bs.findIndex((b) => b.textContent.trim() === 'FIND CARE'))];
  await findCare.hover();
  await sleep(900);
  const menu = await page.evaluate(() => {
    const c = document.querySelector('[data-slot="navigation-menu-viewport"]') || document.querySelector('[data-radix-navigation-menu-viewport]');
    if (!c) return null;
    const r = c.getBoundingClientRect();
    return { w: Math.round(r.width), h: Math.round(r.height) };
  });
  console.log(`FIND CARE menu: ${JSON.stringify(menu)}`);
  assert.ok(menu && menu.h < 620, `menu too tall: ${JSON.stringify(menu)}`);
  const specialistLinks = await page.$$eval('[data-slot="navigation-menu-viewport"] a[href^="/find-care/"], [data-radix-navigation-menu-viewport] a[href^="/find-care/"]', (as) => as.length).catch(() => 0);
  console.log(`specialist+care links visible in menu: ${specialistLinks}`);
  await page.screenshot({ path: `${out}/desktop-findcare-open.png` });
  await page.keyboard.press('Escape');

  // ---------- Desktop: 3D viewer ----------
  await page.evaluate(() => document.querySelector('model-viewer, [class*="VertebraViewer"], [class*="panel"]'));
  await page.evaluate(() => {
    const el = [...document.querySelectorAll('p')].find((p) => p.textContent.includes('Drag to rotate'));
    el?.scrollIntoView({ block: 'center' });
  });
  await sleep(1000);
  // wait for model-viewer to exist and load
  await page.waitForSelector('model-viewer', { timeout: 30000 });
  await page.waitForFunction(() => {
    const mv = document.querySelector('model-viewer');
    return mv && mv.loaded;
  }, { timeout: 60000 });
  await sleep(1500);
  const mvBox = await page.evaluate(() => {
    const mv = document.querySelector('model-viewer');
    const r = mv.getBoundingClientRect();
    return { w: Math.round(r.width), h: Math.round(r.height), loaded: mv.loaded };
  });
  console.log(`desktop model-viewer: ${JSON.stringify(mvBox)}`);
  assert.ok(mvBox.loaded, '3D model failed to load');
  await page.screenshot({ path: `${out}/desktop-3d-section.png` });
  await page.close();

  // ---------- Mobile ----------
  const m = await browser.newPage();
  await m.setViewport({ width: 390, height: 844 });
  await m.goto(`${root}/find-care/herniated-disc-specialist`, { waitUntil: 'networkidle2', timeout: 90000 });
  await m.evaluate(() => [...document.querySelectorAll('button')].find((b) => b.textContent.trim() === 'Reject All')?.click());
  await sleep(600);

  const mobileChecks = await m.evaluate(() => ({
    overflow: document.documentElement.scrollWidth > innerWidth,
    headerH: document.querySelector('header').getBoundingClientRect().height,
    ctaY: [...document.querySelectorAll('main a')].find((a) => a.getAttribute('href') === '/find-care/book-an-appointment')?.getBoundingClientRect().top,
  }));
  console.log(`mobile: ${JSON.stringify(mobileChecks)}`);
  assert.equal(mobileChecks.overflow, false, 'mobile horizontal overflow');
  assert.ok(mobileChecks.ctaY < 844, `booking CTA below fold at ${mobileChecks.ctaY}px`);
  await m.screenshot({ path: `${out}/mobile-hero.png` });

  // hamburger menu
  await m.click('button[aria-controls="mobile-sidebar"]');
  await sleep(900);
  await m.screenshot({ path: `${out}/mobile-menu-open.png` });
  await m.click('button[aria-controls="mobile-sidebar"]');
  await sleep(500);

  // mobile 3D
  await m.evaluate(() => {
    const el = [...document.querySelectorAll('p')].find((p) => p.textContent.includes('Drag to rotate'));
    el?.scrollIntoView({ block: 'center' });
  });
  await m.waitForSelector('model-viewer', { timeout: 30000 });
  await m.waitForFunction(() => document.querySelector('model-viewer')?.loaded, { timeout: 60000 });
  await sleep(1500);
  const mobileOverflowAfter3d = await m.evaluate(() => document.documentElement.scrollWidth > innerWidth);
  assert.equal(mobileOverflowAfter3d, false, 'mobile overflow after 3D load');
  await m.screenshot({ path: `${out}/mobile-3d-section.png` });
  await m.close();

  console.log(`PASS — screenshots in ${out}`);
} finally {
  await browser.close();
}
