/**
 * Canonical accepted-lead event contract.
 *
 * Covers the market-code contract for all five states, the lifecycle rules
 * (only a server acceptance emits — never a page view, reload, or history move),
 * deduplication, and the closed shape of the advertising payload.
 *
 * Every test runs with NO consent stored unless it explicitly grants some, so
 * the contract is proven for the visitor who ignored the banner.
 */
import assert from 'node:assert/strict';
import test, { beforeEach } from 'node:test';
import { JSDOM } from 'jsdom';

import { CANONICAL_LEAD_EVENT } from '../lib/lead-contract';
import { CONSENT_STORAGE_KEY, CONSENT_VERSION } from '../lib/consent';
import { pushAcceptedLead } from '../utils/enhancedConversions';

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'https://mountainspineorthopedics.com/',
});
Object.defineProperty(globalThis, 'window', { value: dom.window, configurable: true });
Object.defineProperty(globalThis, 'document', { value: dom.window.document, configurable: true });

type DataLayerWindow = typeof window & { dataLayer: Array<Record<string, unknown>> };
const dataLayer = () => (window as DataLayerWindow).dataLayer;
const canonical = () => dataLayer().filter((e) => e.event === CANONICAL_LEAD_EVENT);

function setConsent(analytics: boolean, marketing: boolean) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify({
    version: CONSENT_VERSION,
    timestamp: '2026-09-20T00:00:00.000Z',
    categories: { necessary: true, analytics, marketing, functional: false },
  }));
}

let seq = 0;
const uniqueId = (prefix: string) => `${prefix}-${++seq}`;

const IDENTITY = {
  email: 'patient@example.com',
  phone: '5615551212',
  firstName: 'Pat',
  lastName: 'Example',
};

beforeEach(() => {
  window.localStorage.clear();
  window.sessionStorage.clear();
  (window as DataLayerWindow).dataLayer = [];
  window.history.replaceState({}, '', '/');
});

// ---------------------------------------------------------------------------
// Market-code contract across all five states, under NO consent.
// ---------------------------------------------------------------------------

const MARKETS: Array<[string, string, string]> = [
  ['florida', 'FL', '/locations/florida'],
  ['new-jersey', 'NJ', '/locations/new-jersey'],
  ['new-york', 'NY', '/locations/new-york'],
  ['pennsylvania', 'PA', '/locations/pennsylvania'],
  ['georgia', 'GA', '/locations/georgia'],
];

for (const [slug, code, path] of MARKETS) {
  test(`valid ${code} submission emits exactly one event with the uppercase market code`, async () => {
    window.history.replaceState({}, '', path);
    const submissionId = uniqueId(`market-${code}`);

    await pushAcceptedLead({
      acceptance: { ok: true, submissionId },
      form_name: 'StateHeroForm',
      form_source: 'state-consultation',
      state: slug,
      ...IDENTITY,
    });

    assert.equal(canonical().length, 1);
    assert.equal(canonical()[0].market, code, `${slug} must map to ${code}, never a slug`);
    assert.equal(canonical()[0].page_path, path);
    assert.equal(canonical()[0].submission_id, submissionId);
  });
}

// ---------------------------------------------------------------------------
// Negative paths — nothing but a server-accepted lead may emit.
// ---------------------------------------------------------------------------

test('invalid form (no acceptance) emits zero success events', async () => {
  assert.equal(
    await pushAcceptedLead({ acceptance: null, form_name: 'ConsultationForm', state: 'florida' }),
    false,
  );
  assert.equal(
    await pushAcceptedLead({ acceptance: { ok: false }, form_name: 'ConsultationForm', state: 'florida' }),
    false,
  );
  assert.equal(canonical().length, 0);
});

test('failed API responses emit zero success events', async () => {
  const failures = [
    new Response(JSON.stringify({ ok: false }), { status: 500, headers: { 'content-type': 'application/json' } }),
    new Response('gateway timeout', { status: 504 }),
    // A 200 that carries no submission id is not an acceptance either.
    new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'content-type': 'application/json' } }),
  ];

  for (const acceptance of failures) {
    assert.equal(
      await pushAcceptedLead({ acceptance, form_name: 'ConsultationForm', state: 'florida' }),
      false,
    );
  }
  assert.equal(canonical().length, 0);
});

test('an accepted response with a blank submission id does not emit', async () => {
  const blankId = new Response(JSON.stringify({ ok: true, submissionId: '   ' }), {
    status: 200, headers: { 'content-type': 'application/json' },
  });
  assert.equal(await pushAcceptedLead({ acceptance: blankId, form_name: 'ConsultationForm', state: 'GA' }), false);
  assert.equal(canonical().length, 0);
});

// ---------------------------------------------------------------------------
// Lifecycle — the event is tied to an acceptance, not to a page view.
// ---------------------------------------------------------------------------

test('direct thank-you navigation emits zero success events', () => {
  window.history.replaceState({}, '', '/thank-you');
  assert.equal(canonical().length, 0, 'arriving at /thank-you is not a conversion');
});

test('reload, back/forward navigation and rerenders emit no additional events', async () => {
  const lead = {
    acceptance: { ok: true, submissionId: uniqueId('lifecycle') },
    form_name: 'ContactForm',
    form_source: 'general-contact' as const,
    state: 'new-jersey',
  };

  await pushAcceptedLead(lead);
  assert.equal(canonical().length, 1);

  // A React rerender / effect re-run replays the same callback with the same id.
  await pushAcceptedLead(lead);
  await pushAcceptedLead(lead);
  assert.equal(canonical().length, 1, 'rerender must not duplicate the event');

  // Navigating away to /thank-you and back does not re-emit.
  window.history.pushState({}, '', '/thank-you');
  window.history.back();
  window.history.forward();
  assert.equal(canonical().length, 1, 'history navigation must not emit');

  // A reload restarts the page: dataLayer is empty and nothing replays it.
  (window as DataLayerWindow).dataLayer = [];
  window.history.replaceState({}, '', '/thank-you');
  assert.equal(canonical().length, 0, 'a reloaded thank-you page emits nothing on its own');
});

test('double-click submission yields exactly one accepted event', async () => {
  const lead = {
    acceptance: { ok: true, submissionId: uniqueId('doubleclick') },
    form_name: 'BookAnAppoitmentButton',
    form_source: 'modal-appointment' as const,
    state: 'florida',
  };

  const [first, second] = await Promise.all([pushAcceptedLead(lead), pushAcceptedLead(lead)]);
  assert.equal(first, true);
  assert.equal(second, true, 'both callers see success; only one event is emitted');
  assert.equal(canonical().length, 1);
});

test('submission_id is stable, unique per lead, and always a non-empty string', async () => {
  const ids: Array<string | number> = ['lead-alpha', 'lead-beta', 424242];
  for (const submissionId of ids) {
    await pushAcceptedLead({
      acceptance: { ok: true, submissionId },
      form_name: 'ContactForm', form_source: 'general-contact', state: 'PA',
    });
  }

  const emitted = canonical().map((e) => e.submission_id);
  assert.deepEqual(emitted, ['lead-alpha', 'lead-beta', '424242']);
  assert.equal(new Set(emitted).size, emitted.length, 'one event per distinct submission');
  emitted.forEach((id) => assert.equal(typeof id === 'string' && id.length > 0, true));
});

// ---------------------------------------------------------------------------
// Payload shape — exactly the agreed keys, no PHI, no legacy event.
// ---------------------------------------------------------------------------

test('clinical and free-text fields never enter the advertising payload', async () => {
  // Worst case for leakage: marketing consent granted, so the enhanced-identity
  // push also lands in dataLayer and is inspected alongside the base event.
  setConsent(true, true);
  await pushAcceptedLead({
    acceptance: { ok: true, submissionId: uniqueId('phi') },
    form_name: 'BodyPartHeroForm',
    form_source: 'paid-landing',
    state: 'florida',
    ...IDENTITY,
  });

  const serialized = JSON.stringify(dataLayer());
  for (const value of Object.values(IDENTITY)) {
    assert.equal(serialized.includes(value), false, `plaintext "${value}" must never reach dataLayer`);
  }

  const forbiddenKeys = [
    'reason', 'symptom', 'symptoms', 'diagnosis', 'treatment', 'condition',
    'insurance', 'payer', 'message', 'notes', 'comments', 'email', 'phone',
    'firstName', 'lastName', 'name', 'dob', 'landing_path',
  ];
  const event = canonical()[0];
  for (const key of forbiddenKeys) {
    assert.equal(key in event, false, `advertising payload must not carry "${key}"`);
  }

  assert.deepEqual(
    Object.keys(event).sort(),
    ['event', 'form_id', 'form_source', 'market', 'page_path', 'submission_id'],
    'the canonical event is a closed set of keys',
  );
});

test('the obsolete form_submit event is never pushed', async () => {
  setConsent(true, true);
  await pushAcceptedLead({
    acceptance: { ok: true, submissionId: uniqueId('legacy') },
    form_name: 'ContactForm', form_source: 'general-contact', state: 'NY', ...IDENTITY,
  });
  assert.equal(dataLayer().filter((e) => e.event === 'form_submit').length, 0);
});
