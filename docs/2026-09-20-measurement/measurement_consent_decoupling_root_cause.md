# Root cause — accepted-lead events suppressed by consent state

**Date:** 2026-09-20
**Scope:** Mountain Spine & Orthopedics website form measurement, FL / NJ / NY / PA / GA
**Branch:** `fix/measurement-consent-decoupling` (from `upstream/main` @ `bdd7a8a`)

## Summary

Every server-accepted lead was being recorded only if the visitor had already
accepted analytics or marketing cookies. Visitors who **ignored** or **rejected**
the cookie banner produced **no business event at all** — not a cookieless one,
not a denied one, none. Google Tag Manager never received the event, so Google
Consent Mode never got the chance to degrade it to a cookieless ping.

The site was not under-measuring these leads. It was blind to them.

## The defective code

`utils/enhancedConversions.ts`, in `pushFormSubmit()` — the single funnel every
one of the site's lead forms calls after a successful server response:

```ts
if (hasMarketingConsent()) {
  persistEC(ecData);
  await pushEC(ecData);          // enhanced identity — correctly consent-gated
}

if (hasMeasurementConsent()) {   // <-- THE DEFECT
  measurementWindow.dataLayer.push(buildCanonicalLeadEvent({ ... }));
}
```

`hasMeasurementConsent()` resolves to `analytics || marketing`. The stored
defaults are:

```ts
necessary: true, analytics: false, marketing: false, functional: false
```

and `getConsentState()` returns `null` outright when nothing is stored — the
state of a visitor who never touched the banner. So for both the ignore case and
the reject case, `hasMeasurementConsent()` is `false` and the canonical
`lead_form_submit_success` push never executes.

## Why this is the wrong gate

The canonical event is a **closed set of six operational keys**:

```
event, form_id, form_source, page_path, market, submission_id
```

There is no identity in it, no contact detail, and no clinical field. It is a
record that a real, server-accepted lead exists — a business fact, not
advertising data.

Consent is supposed to govern **what the tags do with an event**, not **whether
the event is created**. That separation is exactly what Google Consent Mode
exists to provide: with `ad_storage` / `analytics_storage` denied, Google's own
tags fall back to cookieless pings and modelled conversions. By gating the
*push* instead of the *tag behaviour*, the site removed GTM's ability to make
that decision at all.

The two concepts had been collapsed into one:

| Concept | Correct owner | What the code did |
|---|---|---|
| Business-event creation | Application | Gated on consent |
| Tag / cookie behaviour | Google Consent Mode | Correct (deny-by-default) |
| Enhanced-conversion identity | `ad_user_data` consent | Correct |

Only the first row was wrong, but it was the row that decided whether anything
was measured at all.

## Secondary defect found while fixing

The enhanced-conversions step ran **before** the business event and was awaited
bare:

```ts
if (hasMarketingConsent()) {
  persistEC(ecData);
  await pushEC(ecData);   // if this throws...
}
if (hasMeasurementConsent()) {
  ...push canonical event   // ...this never runs
}
```

`pushEC` → `buildHashedEC` → `crypto.subtle.digest`. If Web Crypto is
unavailable or throws (non-secure context, hardened browser, restrictive
enterprise policy), the rejection propagated out of `pushFormSubmit` and:

1. the canonical event was never pushed, and
2. the calling form caught the rejection and showed the visitor
   *"Something went wrong. Please try again."* — for a lead the server had
   **already persisted**, inviting a duplicate submission.

The submission id was also added to the dedupe set *before* the pushes, so the
retry would then be silently dropped.

This is covered by the test *"a failing enhanced-data step does not prevent the
base conversion event"*, which failed before the fix.

## Why the existing test suite did not catch it

`tests/measurement-contract.test.ts` granted full consent in `beforeEach`:

```ts
beforeEach(() => {
  ...
  grantMeasurementConsent();   // analytics: true, marketing: true
});
```

Every assertion therefore ran as a fully-consented visitor — the one state in
which the bug is invisible. The suite passed 11/11 against defective code.

The new suites (`measurement-consent-decoupling`, `measurement-event-contract`,
`measurement-form-flow`) default to **no consent stored** and grant it only
where a test is specifically about the granted case.

## What was NOT the cause

Ruled out by inspection during the forensic pass:

- **Market normalization** — `normalizeStateCode()` already produced the correct
  `FL / NJ / NY / PA / GA` contract. Unchanged.
- **Consent Mode defaults** — `app/layout.tsx` already declared all advertising
  signals `denied` before GTM loads. Unchanged, and now guarded.
- **Divergent form paths** — all lead forms already routed through the single
  `pushAcceptedLead` helper. Verified, and now guarded.
- **Legacy `form_submit`** — already fully retired; no occurrence in source.
- **Hardcoded test click IDs** — none in source, fixtures, or environment config.
- **Thank-you navigation as conversion source** — `app/thank-you/page.tsx`
  contains no emitter and never did.
- **Two-step scoliosis LP form** — step one only opens the modal; the event
  already fired solely after the server response.

The architecture was sound. One gate was in the wrong place.

## Fix

`utils/enhancedConversions.ts` only. The business event is emitted first and
unconditionally; enhanced identity is consent-gated, isolated in its own push,
and wrapped so it can never suppress the business event.

See `measurement_event_contract.md` for the resulting contract and
`measurement_privacy_review.md` for the privacy analysis.
