/**
 * Meta Pixel adapter contract.
 *
 * Proves the advertising layer stays subordinate to the application layer:
 * Meta fires only on a confirmed server acceptance, only with advertising
 * consent, only on eligible routes and form sources, only once, and never with
 * identity or clinical data attached.
 */
import assert from 'node:assert/strict';
import test, { beforeEach } from 'node:test';
import { JSDOM } from 'jsdom';

import { CANONICAL_LEAD_EVENT } from '../lib/lead-contract';
import { CONSENT_STORAGE_KEY, CONSENT_VERSION } from '../lib/consent';
import {
  isMetaEligibleRoute,
  isSensitivePath,
  hasSensitiveQuery,
  isMetaEligibleFormSource,
} from '../lib/route-privacy';

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'https://mountainspineorthopedics.com/',
});
Object.defineProperty(globalThis, 'window', { value: dom.window, configurable: true });
Object.defineProperty(globalThis, 'document', { value: dom.window.document, configurable: true });

type FbqCall = unknown[];
type TestWindow = typeof window & {
  fbq?: ((...a: unknown[]) => void) & { queue?: unknown[] };
  __msoMetaInitialized?: boolean;
  dataLayer: Array<Record<string, unknown>>;
  __fbqCalls: FbqCall[];
};

const w = () => window as TestWindow;
const fbqCalls = () => w().__fbqCalls;
const metaEvents = (name: string) =>
  fbqCalls().filter((c) => c[0] === 'track' && c[1] === name);
const dataLayer = () => w().dataLayer;
const canonical = () => dataLayer().filter((e) => e.event === CANONICAL_LEAD_EVENT);

function setConsent(analytics: boolean, marketing: boolean) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify({
    version: CONSENT_VERSION,
    timestamp: '2026-09-20T00:00:00.000Z',
    categories: { necessary: true, analytics, marketing, functional: false },
  }));
}

/** Stands in for a loaded fbevents.js, recording every call. */
function installFakeFbq() {
  w().__fbqCalls = [];
  const fn = (...args: unknown[]) => { w().__fbqCalls.push(args); };
  w().fbq = fn as TestWindow['fbq'];
}

function goto(path: string, search = '') {
  window.history.replaceState({}, '', `${path}${search}`);
}

let seq = 0;
const uniqueId = (p: string) => `${p}-${++seq}`;

const IDENTITY = {
  email: 'patient@example.com',
  phone: '5615551212',
  firstName: 'Pat',
  lastName: 'Example',
};

beforeEach(() => {
  window.localStorage.clear();
  window.sessionStorage.clear();
  w().dataLayer = [];
  w().__msoMetaInitialized = false;
  installFakeFbq();
  goto('/');
});

// ---------------------------------------------------------------------------
// Route + query privacy policy
// ---------------------------------------------------------------------------

test('patient-specific clinical routes are never Meta-eligible', () => {
  const blocked = [
    '/condition-check',
    '/condition-check/',
    '/find-care/candidacy-check',
    '/find-care/free-mri-review',
    '/patient-forms',
    '/internal/review-links',
  ];
  for (const path of blocked) {
    assert.equal(isSensitivePath(path), true, `${path} must be sensitive`);
    assert.equal(isMetaEligibleRoute(path, ''), false, `${path} must be ineligible`);
  }
});

test('public marketing and content routes remain eligible', () => {
  const allowed = [
    '/',
    '/locations/new-jersey/paramus-orthopedics',
    '/lp/adult-scoliosis-treatment',
    '/conditions/sciatica',
    '/treatments/orthopedic-injections',
    '/find-care/book-an-appointment',
    '/about/meetourdoctors/john-doe',
  ];
  for (const path of allowed) {
    assert.equal(isMetaEligibleRoute(path, ''), true, `${path} should stay eligible`);
  }
});

test('the live ?data= condition filter makes a URL ineligible', () => {
  // HomePageUI / NavBar / ServicesAndExpertiseSection link like this.
  const search = `?data=${encodeURIComponent(JSON.stringify({ tags: ['Spine'] }))}`;
  assert.equal(hasSensitiveQuery(search), true);
  assert.equal(isMetaEligibleRoute('/conditions', search), false);
  assert.equal(isMetaEligibleRoute('/treatments', `?data=${encodeURIComponent('{"key":"knee"}')}`), false);
  // Same path without the parameter is fine.
  assert.equal(isMetaEligibleRoute('/conditions', ''), true);
});

test('other health-shaped query keys are blocked defensively', () => {
  for (const key of ['condition', 'symptom', 'diagnosis', 'treatment', 'insurance', 'reason', 'mri']) {
    assert.equal(isMetaEligibleRoute('/conditions', `?${key}=anything`), false, key);
  }
  // A harmless campaign parameter must NOT block tracking.
  assert.equal(isMetaEligibleRoute('/', '?utm_source=meta&utm_medium=paid_social&fbclid=abc'), true);
});

// ---------------------------------------------------------------------------
// Form-source policy
// ---------------------------------------------------------------------------

test('clinical assessment form sources can never produce a Meta Lead', () => {
  for (const source of ['free-mri-review', 'candidacy-check', 'condition-check']) {
    assert.equal(isMetaEligibleFormSource(source), false, source);
  }
});

test('generic contact and consultation sources are Meta-eligible', () => {
  for (const source of [
    'book-appointment', 'general-contact', 'location-contact', 'doctor-contact',
    'state-consultation', 'modal-appointment', 'paid-landing',
  ]) {
    assert.equal(isMetaEligibleFormSource(source), true, source);
  }
});

test('an unknown or missing form source fails closed', () => {
  assert.equal(isMetaEligibleFormSource(undefined), false);
  assert.equal(isMetaEligibleFormSource(''), false);
  assert.equal(isMetaEligibleFormSource('some-new-form'), false);
});

// ---------------------------------------------------------------------------
// Adapter guards
// ---------------------------------------------------------------------------

test('no advertising consent means no init and no events', async () => {
  const meta = await import('../lib/meta-pixel');
  // Banner ignored: nothing stored.
  assert.equal(meta.isMetaAllowed(), false);
  assert.equal(meta.initMetaPixel(), false);
  assert.equal(meta.trackMetaLead('lead-1'), false);
  assert.equal(meta.trackMetaContact('contact-1'), false);
  assert.equal(fbqCalls().length, 0, 'nothing may be dispatched to Meta');

  setConsent(false, false); // explicit rejection
  assert.equal(meta.isMetaAllowed(), false);
  assert.equal(meta.initMetaPixel(), false);
  assert.equal(fbqCalls().length, 0);
});

test('analytics-only consent does not enable Meta', async () => {
  const meta = await import('../lib/meta-pixel');
  setConsent(true, false);
  assert.equal(meta.isMetaAllowed(), false);
  assert.equal(meta.initMetaPixel(), false);
  assert.equal(fbqCalls().length, 0);
});

test('marketing consent initializes once and fires exactly one PageView', async () => {
  const meta = await import('../lib/meta-pixel');
  setConsent(true, true);

  assert.equal(meta.initMetaPixel(), true);
  // Repeated calls (Strict Mode, rerender, Script onLoad) must be no-ops.
  assert.equal(meta.initMetaPixel(), true);
  assert.equal(meta.initMetaPixel(), true);

  const inits = fbqCalls().filter((c) => c[0] === 'init');
  assert.equal(inits.length, 1, 'exactly one init');
  assert.equal(inits[0][1], '1114353070995808', 'correct pixel id');
  assert.equal(inits[0].length, 2, 'init must carry NO advanced-matching object');
  assert.equal(metaEvents('PageView').length, 1, 'exactly one PageView');
});

test('init is suppressed entirely on a sensitive route', async () => {
  const meta = await import('../lib/meta-pixel');
  setConsent(true, true);
  goto('/find-care/free-mri-review');
  assert.equal(meta.isMetaAllowed(), false);
  assert.equal(meta.initMetaPixel(), false);

  // No pixel initialization and no tracking event may occur. A
  // `consent revoke` IS expected and desirable here once the history guard is
  // installed — navigating into a clinical route must actively tell an
  // already-resident fbevents.js to stop, not merely stay quiet.
  assert.equal(fbqCalls().filter((c) => c[0] === 'init').length, 0, 'no init');
  assert.equal(fbqCalls().filter((c) => c[0] === 'track').length, 0, 'no tracking event');
  const nonConsent = fbqCalls().filter((c) => c[0] !== 'consent');
  assert.equal(nonConsent.length, 0, `only consent calls allowed, saw ${JSON.stringify(nonConsent)}`);
});

test('revoking consent stops dispatch and allows a clean re-init later', async () => {
  const meta = await import('../lib/meta-pixel');
  setConsent(true, true);
  meta.initMetaPixel();
  assert.equal(metaEvents('PageView').length, 1);

  setConsent(true, false);
  meta.revokeMetaConsent();
  assert.deepEqual(fbqCalls().at(-1), ['consent', 'revoke']);
  assert.equal(meta.trackMetaLead('lead-after-revoke'), false, 'no events after revoke');
  assert.equal(metaEvents('Lead').length, 0);
});

test('a missing pixel never throws — ad blocker safety', async () => {
  const meta = await import('../lib/meta-pixel');
  setConsent(true, true);
  delete w().fbq;
  w().__msoMetaInitialized = false;
  // Must not throw, must report failure honestly.
  assert.doesNotThrow(() => meta.trackMetaLead('lead-x'));
  assert.doesNotThrow(() => meta.trackMetaContact('contact-x'));
  assert.equal(meta.trackMetaLead('lead-x'), false);
});

test('opaque event ids carry no PII and are unique', async () => {
  const meta = await import('../lib/meta-pixel');
  const ids = new Set(Array.from({ length: 50 }, () => meta.createOpaqueEventId('contact')));
  assert.equal(ids.size, 50, 'ids must be unique');
  for (const id of ids) {
    for (const pii of Object.values(IDENTITY)) {
      assert.equal(id.includes(pii), false);
    }
    assert.match(id, /^contact_[A-Za-z0-9-]+$/);
  }
});

// ---------------------------------------------------------------------------
// End-to-end through the real canonical funnel
// ---------------------------------------------------------------------------

test('an accepted generic lead produces exactly one Meta Lead with no PII', async () => {
  const { pushAcceptedLead } = await import('../utils/enhancedConversions');
  const meta = await import('../lib/meta-pixel');
  setConsent(true, true);
  goto('/find-care/book-an-appointment');
  meta.initMetaPixel();

  const submissionId = uniqueId('meta-lead');
  const lead = {
    acceptance: { ok: true, submissionId },
    form_name: 'DoctorContactForm',
    form_source: 'book-appointment' as const,
    state: 'florida',
    ...IDENTITY,
  };

  assert.equal(await pushAcceptedLead(lead), true);
  // Rerender / double-click replay of the same accepted submission.
  await pushAcceptedLead(lead);
  await pushAcceptedLead(lead);

  const leads = metaEvents('Lead');
  assert.equal(leads.length, 1, 'exactly one Meta Lead per accepted submission');

  const [, , customData, options] = leads[0] as [string, string, Record<string, unknown>, Record<string, unknown>];
  assert.deepEqual(customData, {}, 'custom_data must be empty');
  assert.deepEqual(options, { eventID: submissionId }, 'eventID must be the server submission id');

  // Nothing identifying or clinical anywhere in what Meta received.
  const serialized = JSON.stringify(fbqCalls());
  for (const value of Object.values(IDENTITY)) {
    assert.equal(serialized.includes(value), false, `plaintext ${value} must not reach Meta`);
  }
  for (const word of ['florida', 'FL', 'DoctorContactForm', 'book-appointment', 'market', 'reason']) {
    assert.equal(serialized.includes(word), false, `"${word}" must not reach Meta`);
  }
});

test('clinical form submissions produce zero Meta Leads but still convert first-party', async () => {
  const { pushAcceptedLead } = await import('../utils/enhancedConversions');
  const meta = await import('../lib/meta-pixel');
  setConsent(true, true);
  goto('/');            // eligible route, so only the form source can block it
  meta.initMetaPixel();

  for (const form_source of ['free-mri-review', 'candidacy-check', 'condition-check'] as const) {
    await pushAcceptedLead({
      acceptance: { ok: true, submissionId: uniqueId(form_source) },
      form_name: 'ClinicalForm',
      form_source,
      state: 'new-jersey',
      ...IDENTITY,
    });
  }

  assert.equal(metaEvents('Lead').length, 0, 'no clinical assessment may reach Meta');
  // ...but the business still measures them internally.
  assert.equal(canonical().length, 3, 'first-party conversion is unaffected');
});

test('a rejected submission produces no Meta Lead', async () => {
  const { pushAcceptedLead } = await import('../utils/enhancedConversions');
  const meta = await import('../lib/meta-pixel');
  setConsent(true, true);
  meta.initMetaPixel();

  await pushAcceptedLead({ acceptance: null, form_name: 'ContactForm', form_source: 'general-contact', state: 'FL' });
  await pushAcceptedLead({
    acceptance: new Response(JSON.stringify({ ok: false }), { status: 500, headers: { 'content-type': 'application/json' } }),
    form_name: 'ContactForm', form_source: 'general-contact', state: 'FL',
  });

  assert.equal(metaEvents('Lead').length, 0);
  assert.equal(canonical().length, 0);
});

test('the canonical Google event is unaffected by Meta consent state', async () => {
  const { pushAcceptedLead } = await import('../utils/enhancedConversions');
  // Banner ignored — Meta must stay silent, the business event must not.
  const submissionId = uniqueId('google-regression');
  await pushAcceptedLead({
    acceptance: { ok: true, submissionId },
    form_name: 'ContactForm',
    form_source: 'general-contact',
    state: 'georgia',
    ...IDENTITY,
  });

  assert.equal(canonical().length, 1, 'Google/GA4 base event still fires');
  assert.equal(canonical()[0].market, 'GA');
  assert.equal(canonical()[0].submission_id, submissionId);
  assert.equal(fbqCalls().length, 0, 'Meta stays silent without advertising consent');
});

test('a Meta failure cannot break the lead or the canonical event', async () => {
  const { pushAcceptedLead } = await import('../utils/enhancedConversions');
  const meta = await import('../lib/meta-pixel');
  setConsent(true, true);
  meta.initMetaPixel();

  // Simulate fbevents.js throwing on every call.
  w().fbq = (() => { throw new Error('pixel exploded'); }) as TestWindow['fbq'];

  const submissionId = uniqueId('meta-throws');
  const accepted = await pushAcceptedLead({
    acceptance: { ok: true, submissionId },
    form_name: 'ContactForm',
    form_source: 'general-contact',
    state: 'pennsylvania',
    ...IDENTITY,
  });

  assert.equal(accepted, true, 'the form must still see success');
  assert.equal(canonical().length, 1, 'the canonical event must still fire');
  assert.equal(canonical()[0].market, 'PA');
});

test('phone clicks emit one Meta Contact with no number attached', async () => {
  const { pushPhoneClickEvent } = await import('../utils/enhancedConversions');
  const meta = await import('../lib/meta-pixel');
  setConsent(true, true);
  meta.initMetaPixel();

  pushPhoneClickEvent({ market: 'NJ', business_number: '+19732596756', page_path: '/locations/new-jersey' });

  const contacts = metaEvents('Contact');
  assert.equal(contacts.length, 1, 'one Contact per phone click');
  const [, , customData] = contacts[0] as [string, string, Record<string, unknown>];
  assert.deepEqual(customData, {}, 'no parameters on Contact');

  const serialized = JSON.stringify(fbqCalls());
  assert.equal(serialized.includes('9732596756'), false, 'the business number must not reach Meta');
  assert.equal(serialized.includes('NJ'), false, 'market must not reach Meta');
});

// ---------------------------------------------------------------------------
// Route-level suspension of Meta's OWN automatic PageView.
//
// Verified in a real browser: once fbevents.js is resident it fires a PageView
// on history changes by itself, with no fbq() call from this codebase, and
// unmounting the <Script> does not stop it. fbq('consent','revoke') does.
// ---------------------------------------------------------------------------

test('entering a sensitive route revokes Meta dispatch, leaving it restores', async () => {
  const meta = await import('../lib/meta-pixel');
  meta.__resetMetaRouteSuspension();
  setConsent(true, true);
  meta.initMetaPixel();
  assert.equal(metaEvents('PageView').length, 1);

  // Navigate into a clinical route.
  goto('/patient-forms');
  meta.suspendMetaForRoute();
  assert.deepEqual(fbqCalls().at(-1), ['consent', 'revoke'], 'Meta must be told to stop');

  // Repeat suspension is a no-op, not a second revoke.
  const afterFirst = fbqCalls().length;
  meta.suspendMetaForRoute();
  assert.equal(fbqCalls().length, afterFirst, 'suspension is latched');

  // Back to an eligible route.
  goto('/locations/florida');
  meta.resumeMetaForRoute();
  assert.deepEqual(fbqCalls().at(-1), ['consent', 'grant']);
});

test('route suspension never re-grants against a withdrawn consent choice', async () => {
  const meta = await import('../lib/meta-pixel');
  meta.__resetMetaRouteSuspension();
  setConsent(true, true);
  meta.initMetaPixel();

  goto('/condition-check');
  meta.suspendMetaForRoute();

  // Visitor withdraws marketing consent while on the sensitive route.
  setConsent(true, false);
  goto('/');
  meta.resumeMetaForRoute();

  assert.notDeepEqual(fbqCalls().at(-1), ['consent', 'grant'],
    'must not re-grant when the visitor has withdrawn advertising consent');
});
