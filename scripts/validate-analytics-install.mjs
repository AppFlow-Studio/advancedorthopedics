// Enforces the measurement architecture of the app shell: exactly one GTM
// container, no second GA4 installation by any route, and exactly one Consent
// Mode default that runs before the container.
//
// Why this exists: a hardcoded `gtag('config', 'G-…')` in the root layout is
// invisible at the script-load level. The page still loads one gtag.js, the
// console stays clean, and GTM Preview looks correct — but GA4 receives two
// `page_view` hits per page load, because the container also holds a Google
// Tag for the same measurement ID. That doubles sessions, halves engagement
// rate, and corrupts every landing-page report. Only request-level inspection
// of `/g/collect` catches it, which nobody does on a routine PR.
//
// That duplicate shipped once already and was removed in bdcf3bb (2026-08-29).
// This check is what makes a second occurrence a build failure rather than a
// month of bad data.
//
// The rules are architectural, not advisory — each one fails the build:
//
//   1. GTM-T57SB8NQ must be installed exactly once.
//   2. No other GTM container may appear in the shell.
//   3. No raw GA4 gtag.js loader (`gtag/js?id=G-…`).
//   4. No GA4 `gtag('config', 'G-…')` call.
//   5. No rendered <GoogleAnalytics> from @next/third-parties/google — that is
//      a second GA4 installation path. An unused *import* is not a failure.
//   6. Exactly one Consent Mode `default` call.
//   7. That call must sit in the same file as the container and run before it.
//
// Deliberately allowed: `gtag('config', 'AW-…')` (Google Ads conversion and
// user-provided-data tags depend on it) and `gtag('consent', 'update', …)`
// (lib/consent.ts issues this after the user chooses — it is not a `default`).
//
// Usage: node scripts/validate-analytics-install.mjs      (exit 1 on any error)
//        node scripts/validate-analytics-install.mjs --self-test

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));

// The container this site is required to run. Changing it here is a deliberate
// act; changing it in a component is what this check is meant to catch.
const REQUIRED_GTM_ID = 'GTM-T57SB8NQ';

// Runtime source that renders on the page. `lib/` is out of scope by design:
// lib/consent.ts issues gtag('consent','update',…), which rule 6 must never
// treat as a `default` — and the patterns below already distinguish the two.
const SCAN_ROOTS = ['app', 'components'];
const SCAN_EXTS = ['.ts', '.tsx', '.js', '.jsx'];

const SKIP_DIRS = new Set([
  'node_modules', '.next', '.git', 'out', 'dist', 'build', 'coverage',
  '__tests__', '__mocks__', '__fixtures__', 'fixtures', '__snapshots__',
]);
// The validator's own probe strings live in this file, under scripts/, which is
// not a scan root — but exclude test/story files inside the roots too.
const SKIP_FILE = (f) => /\.(test|spec|stories)\.[tj]sx?$/.test(f) || /\.d\.ts$/.test(f);

// ---------------------------------------------------------------------------
// Detection — tolerant of quote style, a `window.` prefix and reformatting, so
// a prettier run cannot slip an installation past the check.
// ---------------------------------------------------------------------------

const RE_GTM_ID = /(GTM-[A-Z0-9]{5,})/g;
const RE_GA4_CONFIG = /(?:window\.)?gtag\s*\(\s*(['"`])config\1\s*,\s*(['"`])(G-[A-Z0-9]+)\2/g;
const RE_ADS_CONFIG = /(?:window\.)?gtag\s*\(\s*(['"`])config\1\s*,\s*(['"`])(AW-[A-Z0-9-]+)\2/g;
const RE_GTAG_JS_LOAD = /googletagmanager\.com\/gtag\/js\?id=(G-[A-Z0-9]+)/g;
const RE_GA_COMPONENT = /<GoogleAnalytics\b([^>]*)>/g;
const RE_CONSENT_DEFAULT = /(?:window\.)?gtag\s*\(\s*(['"`])consent\1\s*,\s*(['"`])default\2/g;
const RE_CONSENT_UPDATE = /(?:window\.)?gtag\s*\(\s*(['"`])consent\1\s*,\s*(['"`])update\2/g;

const scan = (src, re, pick) => {
  const out = [];
  re.lastIndex = 0;
  let m;
  while ((m = re.exec(src)) !== null) out.push({ index: m.index, value: pick ? pick(m) : undefined });
  return out;
};

const lineOf = (src, index) => src.slice(0, index).split('\n').length;

export function inspect(src) {
  return {
    gtmIds: scan(src, RE_GTM_ID, (m) => m[1]),
    ga4Configs: scan(src, RE_GA4_CONFIG, (m) => m[3]),
    adsConfigs: scan(src, RE_ADS_CONFIG, (m) => m[3]),
    gtagJsLoads: scan(src, RE_GTAG_JS_LOAD, (m) => m[1]),
    gaComponents: scan(src, RE_GA_COMPONENT, (m) => {
      const attrs = m[1] || '';
      const id = attrs.match(/gaId\s*=\s*["'{]?\s*["']?(G-[A-Z0-9]+)/);
      return id ? id[1] : 'unknown id';
    }),
    consentDefaults: scan(src, RE_CONSENT_DEFAULT),
    consentUpdates: scan(src, RE_CONSENT_UPDATE),
  };
}

// ---------------------------------------------------------------------------
// Rules — pure over a [{ path, src }] list so the self-test can drive every
// cross-file rule without touching the filesystem.
// ---------------------------------------------------------------------------

export function evaluate(files) {
  const errors = [];
  const at = (path, src, index, msg) => errors.push(`${path}:${lineOf(src, index)} ${msg}`);

  const all = files.map((f) => ({ ...f, found: inspect(f.src) }));

  const requiredHits = [];
  const foreignHits = [];
  for (const f of all) {
    for (const hit of f.found.gtmIds) {
      (hit.value === REQUIRED_GTM_ID ? requiredHits : foreignHits).push({ f, hit });
    }
  }

  // 1 — the required container, exactly once.
  if (requiredHits.length === 0) {
    errors.push(`(app shell) required GTM container ${REQUIRED_GTM_ID} is not installed anywhere in ${SCAN_ROOTS.join('/ and ')}/ — the site would ship with no tag manager.`);
  } else if (requiredHits.length > 1) {
    for (const { f, hit } of requiredHits) {
      at(f.path, f.src, hit.index, `GTM container ${REQUIRED_GTM_ID} is installed ${requiredHits.length} times across the app shell — exactly one installation is required, or every tag fires twice.`);
    }
  }

  // 2 — no other container.
  for (const { f, hit } of foreignHits) {
    at(f.path, f.src, hit.index, `unexpected GTM container ${hit.value} in the app shell — only ${REQUIRED_GTM_ID} may be installed.`);
  }

  // 3 — no raw GA4 loader.
  for (const f of all) {
    for (const hit of f.found.gtagJsLoads) {
      at(f.path, f.src, hit.index, `raw gtag.js loader for ${hit.value} in runtime source. The GTM container injects gtag.js itself; this second loader is what precedes a duplicate GA4 config.`);
    }
  }

  // 4 — no direct GA4 config.
  for (const f of all) {
    for (const hit of f.found.ga4Configs) {
      at(f.path, f.src, hit.index, `hardcoded gtag('config', '${hit.value}') in runtime source. GA4 must be configured only by the Google Tag inside ${REQUIRED_GTM_ID}; two configs of one measurement ID send two page_view hits per page load.`);
    }
  }

  // 5 — no rendered <GoogleAnalytics>. Importing it without rendering is fine.
  for (const f of all) {
    for (const hit of f.found.gaComponents) {
      at(f.path, f.src, hit.index, `<GoogleAnalytics> from @next/third-parties/google is rendered here (${hit.value}). That is a second GA4 installation path alongside ${REQUIRED_GTM_ID} — remove it and configure GA4 in the container.`);
    }
  }

  // 6 — exactly one Consent Mode default.
  const consentHits = all.flatMap((f) => f.found.consentDefaults.map((hit) => ({ f, hit })));
  if (consentHits.length === 0) {
    errors.push(`(app shell) no Consent Mode 'default' call found — GTM would load before consent state is established.`);
  } else if (consentHits.length > 1) {
    for (const { f, hit } of consentHits) {
      at(f.path, f.src, hit.index, `Consent Mode 'default' is declared ${consentHits.length} times across the app shell — there must be exactly one.`);
    }
  }

  // 7 — that default must run before the container.
  if (consentHits.length === 1 && requiredHits.length === 1) {
    const consent = consentHits[0];
    const gtm = requiredHits[0];
    if (consent.f.path !== gtm.f.path) {
      at(consent.f.path, consent.f.src, consent.hit.index,
        `Consent Mode 'default' is in a different file from the ${REQUIRED_GTM_ID} install (${gtm.f.path}), so execution order cannot be verified statically. Keep both in the same shell file, consent first.`);
    } else if (consent.hit.index > gtm.hit.index) {
      at(consent.f.path, consent.f.src, consent.hit.index,
        `Consent Mode 'default' appears after the ${REQUIRED_GTM_ID} snippet — it must run before gtm.js loads, or the container fires against un-defaulted consent state.`);
    }
  }

  const summary = {
    files: files.length,
    gtm: requiredHits.length,
    foreignGtm: foreignHits.length,
    ga4Configs: all.reduce((n, f) => n + f.found.ga4Configs.length, 0),
    gtagJsLoads: all.reduce((n, f) => n + f.found.gtagJsLoads.length, 0),
    gaComponents: all.reduce((n, f) => n + f.found.gaComponents.length, 0),
    consentDefaults: consentHits.length,
    consentUpdates: all.reduce((n, f) => n + f.found.consentUpdates.length, 0),
    adsConfigs: all.reduce((n, f) => n + f.found.adsConfigs.length, 0),
  };

  return { errors, summary };
}

// ---------------------------------------------------------------------------
// Self-test
// ---------------------------------------------------------------------------

if (process.argv.includes('--self-test')) {
  const GTM = (id = REQUIRED_GTM_ID) =>
    `<Script id="gtm-head" strategy="afterInteractive">{\`(function(w,d,s,l,i){})(window,document,'script','dataLayer','${id}');\`}</Script>`;
  const CONSENT = `<Script id="google-consent-default" strategy="beforeInteractive">{\`gtag('consent', 'default', { ad_storage: 'denied' });\`}</Script>`;
  const shell = (body) => [{ path: 'app/layout.tsx', src: body }];
  const production = shell(CONSENT + '\n' + GTM());

  const errorsFor = (files) => evaluate(files).errors;
  const failsWith = (files, needle) => errorsFor(files).some((e) => e.includes(needle));

  const probes = [
    ['current production architecture passes',
      errorsFor(production).length === 0],

    ['missing required GTM container fails',
      failsWith(shell(CONSENT), 'is not installed anywhere')],

    ['a second copy of the required container fails',
      failsWith(shell(CONSENT + GTM() + GTM()), 'is installed 2 times')],

    ['an additional/foreign container fails',
      failsWith(shell(CONSENT + GTM() + GTM('GTM-WRONG99')), 'unexpected GTM container GTM-WRONG99')],

    ['raw GA4 gtag.js loader fails',
      failsWith(shell(CONSENT + GTM() + `<script src="https://www.googletagmanager.com/gtag/js?id=G-XXHSYV3NMD" />`), 'raw gtag.js loader for G-XXHSYV3NMD')],

    ['direct GA4 config fails',
      failsWith(shell(CONSENT + GTM() + `gtag('config', 'G-XXHSYV3NMD');`), `hardcoded gtag('config', 'G-XXHSYV3NMD')`)],

    ['rendered <GoogleAnalytics gaId="G-..."> fails',
      failsWith(shell(CONSENT + GTM() + `<GoogleAnalytics gaId="G-XXHSYV3NMD" />`), '<GoogleAnalytics> from @next/third-parties/google is rendered here (G-XXHSYV3NMD)')],

    ['unused GoogleAnalytics import alone does NOT fail',
      errorsFor(shell(`import { GoogleAnalytics } from '@next/third-parties/google';\n` + CONSENT + GTM())).length === 0],

    ['duplicate consent defaults fail',
      failsWith(shell(CONSENT + CONSENT + GTM()), "'default' is declared 2 times")],

    ['consent default after GTM fails',
      failsWith(shell(GTM() + '\n' + CONSENT), 'appears after the ' + REQUIRED_GTM_ID + ' snippet')],

    ['consent default in a different file fails (order unverifiable)',
      failsWith([{ path: 'app/layout.tsx', src: GTM() }, { path: 'components/Consent.tsx', src: CONSENT }], 'execution order cannot be verified statically')],

    ['missing consent default fails',
      failsWith(shell(GTM()), "no Consent Mode 'default' call found")],

    ['valid AW-* Ads config remains allowed',
      errorsFor(shell(CONSENT + GTM() + `gtag('config', 'AW-123456789');`)).length === 0],

    ['AW-* gtag.js loader remains allowed',
      errorsFor(shell(CONSENT + GTM() + `<script src="https://www.googletagmanager.com/gtag/js?id=AW-123456789" />`)).length === 0],

    ['valid consent update remains allowed',
      errorsFor(shell(CONSENT + GTM() + `gtag("consent", "update", { ad_storage: 'granted' });`)).length === 0],

    ['consent update is never counted as a default',
      evaluate(shell(CONSENT + GTM() + `gtag("consent","update",{})`)).summary.consentDefaults === 1],

    ['window. prefix and odd whitespace still caught',
      failsWith(shell(CONSENT + GTM() + `window.gtag (\n 'config' ,\n 'G-ABC123' )`), 'G-ABC123')],
  ];

  let failed = 0;
  for (const [name, pass] of probes) {
    console.log(`${pass ? 'ok  ' : 'FAIL'}  ${name}`);
    if (!pass) failed++;
  }
  console.log(failed ? `\nself-test FAILED (${failed}/${probes.length})` : `\nself-test OK (${probes.length} probes)`);
  process.exit(failed ? 1 : 0);
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

function walk(dir, acc = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return acc;
  }
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) walk(full, acc);
    else if (SCAN_EXTS.some((e) => entry.endsWith(e)) && !SKIP_FILE(entry)) acc.push(full);
  }
  return acc;
}

const files = SCAN_ROOTS.flatMap((r) => walk(join(ROOT, r))).map((full) => ({
  path: relative(ROOT, full).split(sep).join('/'),
  src: readFileSync(full, 'utf8'),
}));

const { errors, summary } = evaluate(files);

if (errors.length) {
  console.error(`\nAnalytics install validation FAILED (${errors.length} error${errors.length === 1 ? '' : 's'}):`);
  for (const e of errors) console.error(`  error ${e}`);
  console.error(`\nScanned ${summary.files} runtime files under ${SCAN_ROOTS.map((r) => r + '/').join(' and ')}.`);
  process.exit(1);
}

console.log(
  `Analytics install OK — ${REQUIRED_GTM_ID} installed once; ` +
  `${summary.ga4Configs} hardcoded GA4 config(s), ${summary.gtagJsLoads} raw gtag.js loader(s), ${summary.gaComponents} rendered <GoogleAnalytics>; ` +
  `${summary.consentDefaults} consent default, ${summary.consentUpdates} consent update(s), ${summary.adsConfigs} AW-* config(s) allowed ` +
  `(${summary.files} runtime files scanned).`
);
