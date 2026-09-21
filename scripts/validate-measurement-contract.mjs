#!/usr/bin/env node
/**
 * Measurement-contract build gate.
 *
 * Runs in `prebuild`, so a build fails rather than shipping a regression in the
 * accepted-lead measurement path. This complements tests/measurement-*.test.ts:
 * the tests prove runtime behaviour, this proves structural invariants that a
 * well-meaning refactor could quietly break.
 *
 * Checks are deliberately tolerant of formatting — comments are stripped and
 * whitespace is normalised before matching — so reformatting the source never
 * fails the build, but a real change in meaning does.
 */
import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const TRACKING_MODULE = 'utils/enhancedConversions.ts';
const CONTRACT_MODULE = 'lib/lead-contract.ts';
const CANONICAL_EVENT = 'lead_form_submit_success';

const failures = [];
const fail = (check, detail) => failures.push({ check, detail });

const read = (relative) => readFile(path.join(ROOT, relative), 'utf8');

/** Removes line and block comments so prose can never satisfy or trip a check. */
function stripComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/.*$/gm, '$1');
}

/**
 * Extracts a function body by brace matching, so nesting is handled correctly.
 *
 * The parameter list is skipped by paren-matching first: these functions take a
 * destructured object, so the first `{` after the name belongs to the params,
 * not the body.
 */
function extractFunctionBody(source, fnName) {
  const signature = new RegExp(`function\\s+${fnName}\\s*\\(`);
  const match = signature.exec(source);
  if (!match) return null;

  const openParen = source.indexOf('(', match.index);
  let parenDepth = 0;
  let closeParen = -1;
  for (let i = openParen; i < source.length; i += 1) {
    if (source[i] === '(') parenDepth += 1;
    else if (source[i] === ')') {
      parenDepth -= 1;
      if (parenDepth === 0) { closeParen = i; break; }
    }
  }
  if (closeParen === -1) return null;

  const openBrace = source.indexOf('{', closeParen);
  if (openBrace === -1) return null;

  let depth = 0;
  for (let i = openBrace; i < source.length; i += 1) {
    const char = source[i];
    if (char === '{') depth += 1;
    else if (char === '}') {
      depth -= 1;
      if (depth === 0) return source.slice(openBrace + 1, i);
    }
  }
  return null;
}

const CONSENT_GUARDS = /\b(hasMeasurementConsent|hasAnalyticsConsent|hasMarketingConsent|consentGranted|getConsentState|hasFunctionalConsent)\s*\(/;

async function checkAcceptedLeadIsConsentIndependent() {
  const source = stripComments(await read(TRACKING_MODULE));
  const body = extractFunctionBody(source, 'pushFormSubmit');

  if (!body) {
    fail('accepted-lead push is reachable',
      `could not locate pushFormSubmit in ${TRACKING_MODULE}; the gate cannot verify the contract`);
    return;
  }

  const pushIndex = body.search(/dataLayer\s*\.\s*push\s*\(\s*buildCanonicalLeadEvent/);
  if (pushIndex === -1) {
    fail('accepted-lead push exists',
      `pushFormSubmit no longer pushes buildCanonicalLeadEvent(...) to dataLayer`);
    return;
  }

  // Nothing consent-shaped may stand between entering the function and emitting
  // the business event. That gate is exactly the defect this file guards against.
  const beforePush = body.slice(0, pushIndex);
  const guard = CONSENT_GUARDS.exec(beforePush);
  if (guard) {
    fail('accepted-lead push is NOT gated behind consent',
      `${guard[1]}() is evaluated before the ${CANONICAL_EVENT} push in pushFormSubmit. ` +
      `The business event carries no PII and must fire for every server-accepted lead; ` +
      `consent governs tag behaviour via Google Consent Mode, not event creation.`);
  }

  // Enhanced identity, by contrast, MUST be consent-gated.
  const afterPush = body.slice(pushIndex);
  const identityCall = /\b(pushEC|persistEC|pushECSilent|captureAndPersistEC)\s*\(/.exec(afterPush);
  if (identityCall) {
    const beforeIdentity = afterPush.slice(0, identityCall.index);
    if (!/hasMarketingConsent\s*\(/.test(beforeIdentity)) {
      fail('enhanced user data requires marketing consent',
        `${identityCall[1]}() runs in pushFormSubmit without a hasMarketingConsent() guard ahead of it`);
    }
  }
}

async function checkSingleCanonicalPush() {
  const source = stripComments(await read(TRACKING_MODULE));
  const pushes = source.match(/dataLayer\s*\.\s*push\s*\(\s*buildCanonicalLeadEvent/g) || [];
  if (pushes.length !== 1) {
    fail('exactly one canonical accepted-lead push exists',
      `found ${pushes.length} canonical pushes in ${TRACKING_MODULE}; a submission path must emit through one place only`);
  }
}

async function checkEventShape() {
  const source = stripComments(await read(CONTRACT_MODULE));
  const body = extractFunctionBody(source, 'buildCanonicalLeadEvent');
  if (!body) {
    fail('canonical event builder exists', `could not locate buildCanonicalLeadEvent in ${CONTRACT_MODULE}`);
    return;
  }

  for (const required of ['market', 'submission_id', 'form_id', 'form_source', 'page_path']) {
    if (!new RegExp(`\\b${required}\\s*:`).test(body)) {
      fail('canonical event carries its required fields',
        `buildCanonicalLeadEvent does not set "${required}"`);
    }
  }

  // The market value must go through the uppercase-code normaliser. Assigning a
  // raw slug here is the regression that silently splits every market report.
  if (!/\bmarket\s*:\s*normalizeStateCode\s*\(/.test(body)) {
    fail('market uses the uppercase state-code contract',
      `market must be produced by normalizeStateCode(...) so it is FL/NJ/NY/PA/GA, never a slug like "new-jersey"`);
  }

  if (!/\bsubmission_id\s*:\s*\w/.test(body)) {
    fail('submission_id is server-issued',
      'submission_id must be assigned from the server-issued acceptance value');
  }

  const PHI_FIELDS = [
    'email', 'phone', 'phone_number', 'first_name', 'firstName', 'last_name', 'lastName',
    'name', 'dob', 'date_of_birth', 'reason', 'symptom', 'symptoms', 'diagnosis',
    'treatment', 'condition', 'insurance', 'payer', 'message', 'notes', 'comments',
    'landing_path',
  ];
  for (const field of PHI_FIELDS) {
    if (new RegExp(`\\b${field}\\s*:`).test(body)) {
      fail('no PHI-like field in the advertising payload',
        `buildCanonicalLeadEvent sets "${field}", which must never reach GA4 / Google Ads`);
    }
  }
}

async function checkLegacyEventNotRestored() {
  const files = await collectClientFiles();
  for (const { relative, source } of files) {
    const stripped = stripComments(source);
    if (/event\s*:\s*['"`]form_submit['"`]/.test(stripped) ||
        /push(Event|MarketingEvent)\s*\(\s*['"`]form_submit['"`]/.test(stripped)) {
      fail('obsolete form_submit is not restored',
        `${relative} pushes the retired "form_submit" event; ${CANONICAL_EVENT} is the single accepted-lead event`);
    }
  }
}

async function checkThankYouIsNotTheConversionSource() {
  const candidates = ['app/thank-you/page.tsx'];
  for (const relative of candidates) {
    let source;
    try {
      source = stripComments(await read(relative));
    } catch {
      continue;
    }
    const emitters = ['pushAcceptedLead', 'pushFormSubmit', CANONICAL_EVENT, 'restoreECFromSession'];
    for (const emitter of emitters) {
      if (source.includes(emitter)) {
        fail('thank-you navigation is not the conversion source',
          `${relative} references "${emitter}"; arriving at the page is not proof a lead was accepted ` +
          `(it is reachable by direct link, reload and back/forward)`);
      }
    }
  }
}

async function checkFormsShareOneSuccessPath() {
  const files = await collectClientFiles();
  const forms = files.filter(({ source }) => /\/api\/forms\//.test(source));

  if (forms.length < 10) {
    fail('the form inventory is discoverable',
      `expected at least 10 lead forms, found ${forms.length}; the gate may be scanning the wrong tree`);
  }

  for (const { relative, source } of forms) {
    const stripped = stripComments(source);
    if (!/pushAcceptedLead\s*\(/.test(stripped)) {
      fail('every form uses the shared success path',
        `${relative} posts a lead but never calls pushAcceptedLead`);
    }
    if (stripped.includes(CANONICAL_EVENT)) {
      fail('no form builds the canonical event itself',
        `${relative} references "${CANONICAL_EVENT}" directly instead of delegating to the shared helper`);
    }
    if (/dataLayer\s*\.\s*push/.test(stripped)) {
      fail('no form pushes to dataLayer directly',
        `${relative} pushes to dataLayer directly, creating a second success path`);
    }
  }
}

async function checkConsentModeDefaultsStayDenied() {
  const source = await read('app/layout.tsx');
  const defaultBlock = /gtag\s*\(\s*['"]consent['"]\s*,\s*['"]default['"]\s*,\s*\{([\s\S]*?)\}\s*\)/.exec(source);

  if (!defaultBlock) {
    fail('Consent Mode defaults are declared before GTM',
      'app/layout.tsx no longer declares a gtag("consent", "default", {...}) block');
    return;
  }

  const block = defaultBlock[1];
  for (const signal of ['ad_storage', 'analytics_storage', 'ad_user_data', 'ad_personalization']) {
    const setting = new RegExp(`${signal}\\s*:\\s*['"](\\w+)['"]`).exec(block);
    if (!setting) {
      fail('Consent Mode denies advertising signals by default', `${signal} is missing from the consent default block`);
    } else if (setting[1] !== 'denied') {
      fail('Consent Mode denies advertising signals by default',
        `${signal} defaults to "${setting[1]}"; it must be "denied" until the visitor chooses`);
    }
  }
}

let cachedFiles = null;
async function collectClientFiles() {
  if (cachedFiles) return cachedFiles;
  const out = [];

  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (/\.(ts|tsx)$/.test(entry.name)) {
        out.push({ relative: path.relative(ROOT, full).replace(/\\/g, '/'), source: await readFile(full, 'utf8') });
      }
    }
  }

  for (const dir of ['components', 'app', 'lib', 'utils']) {
    await walk(path.join(ROOT, dir));
  }
  cachedFiles = out;
  return out;
}

/**
 * Meta form-source triage.
 *
 * isMetaEligibleFormSource fails OPEN so a new generic contact form is measured
 * from day one rather than silently losing paid signal. The safety net for that
 * choice lives here: every source in FORM_SOURCES must be explicitly triaged, so
 * adding a new CLINICAL workflow fails the build until somebody decides whether
 * it may become an advertising conversion.
 */
const TRIAGED_META_FORM_SOURCES = new Set([
  // Clinical workflows — denied in lib/route-privacy.ts
  'condition-check', 'candidacy-check', 'free-mri-review',
  // Marketing lead workflows — allowed
  'book-appointment', 'doctor-contact', 'location-contact', 'general-contact',
  'homepage-consultation', 'state-consultation', 'location-consultation',
  'body-part-consultation', 'modal-appointment', 'patient-advocate',
  'attorney-coordination', 'car-accident', 'personal-injury', 'slip-and-fall',
  'work-injury', 'paid-landing',
]);

async function checkMetaFormSourceTriage() {
  const contract = stripComments(await read(CONTRACT_MODULE));
  const block = /FORM_SOURCES\s*=\s*\[([\s\S]*?)\]\s*as const/.exec(contract);
  if (!block) {
    fail('every form source is triaged for Meta', 'could not read FORM_SOURCES from lib/lead-contract.ts');
    return;
  }
  const sources = [...block[1].matchAll(/['"]([a-z0-9-]+)['"]/g)].map((m) => m[1]);
  if (sources.length === 0) {
    fail('every form source is triaged for Meta', 'FORM_SOURCES parsed as empty');
    return;
  }
  for (const source of sources) {
    if (!TRIAGED_META_FORM_SOURCES.has(source)) {
      fail('every form source is triaged for Meta',
        `form source "${source}" has not been triaged. Decide whether its SUBMISSION ` +
        `carries patient-specific clinical answers. If it does, add it to ` +
        `META_INELIGIBLE_FORM_SOURCES in lib/route-privacy.ts. Either way, add it to ` +
        `TRIAGED_META_FORM_SOURCES in this file.`);
    }
  }

  // And the deny list must not drift from what was triaged as clinical.
  const privacy = stripComments(await read('lib/route-privacy.ts'));
  const denyBlock = /META_INELIGIBLE_FORM_SOURCES\s*=\s*\[([\s\S]*?)\]\s*as const/.exec(privacy);
  if (!denyBlock) {
    fail('clinical form sources stay denied', 'could not read META_INELIGIBLE_FORM_SOURCES');
    return;
  }
  for (const required of ['condition-check', 'candidacy-check', 'free-mri-review']) {
    if (!denyBlock[1].includes(required)) {
      fail('clinical form sources stay denied',
        `"${required}" collects patient-specific clinical answers and must never produce a Meta Lead`);
    }
  }
}

const CHECKS = [
  ['accepted-lead event is consent-independent', checkAcceptedLeadIsConsentIndependent],
  ['exactly one canonical push per submission path', checkSingleCanonicalPush],
  ['canonical event shape and market contract', checkEventShape],
  ['obsolete form_submit stays retired', checkLegacyEventNotRestored],
  ['thank-you navigation is not the conversion source', checkThankYouIsNotTheConversionSource],
  ['all forms share one success path', checkFormsShareOneSuccessPath],
  ['Consent Mode defaults stay denied', checkConsentModeDefaultsStayDenied],
  ['every form source is triaged for Meta', checkMetaFormSourceTriage],
];

async function main() {
  for (const [, check] of CHECKS) {
    await check();
  }

  if (failures.length === 0) {
    console.log(`measurement-contract: ${CHECKS.length} checks passed.`);
    return;
  }

  console.error(`\nmeasurement-contract: ${failures.length} violation(s).\n`);
  for (const { check, detail } of failures) {
    console.error(`  x ${check}`);
    console.error(`    ${detail}\n`);
  }
  process.exit(1);
}

main().catch((error) => {
  console.error('measurement-contract: validator crashed', error);
  process.exit(1);
});
