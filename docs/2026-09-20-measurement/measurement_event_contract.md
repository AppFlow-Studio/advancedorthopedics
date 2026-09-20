# Measurement event contract

**Effective:** 2026-09-20 · **Enforced by:** `scripts/validate-measurement-contract.mjs` (runs in `prebuild`)

## The canonical accepted-lead event

Exactly one event represents an accepted lead sitewide:

```js
{
  event:         "lead_form_submit_success",
  form_id:       "BodyPartHeroForm",        // component identity
  form_source:   "paid-landing",            // channel bucket, never a condition
  page_path:     "/lp/adult-scoliosis-treatment",
  market:        "FL",                      // FL | NJ | NY | PA | GA
  submission_id: "8f3c9a12-..."             // server-issued, unique
}
```

This is a **closed set of six keys**. The build gate fails if a seventh appears.

### Emission rule

> Emitted **after and only after** the server confirms a real accepted
> submission — and then **always**, regardless of consent state.

Fires when, and only when, the lead API returns a body parsing to
`{ ok: true, submissionId: <non-empty> }` on a non-redirected `res.ok` response.

Does **not** fire on: page load · form start · step one of a two-step form ·
invalid input · failed or non-JSON API response · a `200` without a
`submissionId` · direct `/thank-you` navigation · thank-you reload ·
back/forward navigation · React rerender · double-click · client-side button
clicks alone.

### Deduplication

An in-memory `Set` of emitted submission ids guards the push. One accepted
submission yields exactly one event, no matter how many times a rerender or a
concurrent double-click replays the callback. Both callers still receive
`true`, so form UX is unaffected.

### Market contract

`market` is produced by `normalizeStateCode()` and is always an uppercase code:

| Selected slug | Emitted `market` |
|---|---|
| `florida` | `FL` |
| `new-jersey` | `NJ` |
| `new-york` | `NY` |
| `pennsylvania` | `PA` |
| `georgia` | `GA` |

Abbreviations, full names and casing variants all resolve to the same code. An
unresolvable value yields `''` rather than a guess. The build gate fails if
`market` is ever assigned a raw slug.

## The three separated layers

| Layer | Consent requirement | dataLayer surface |
|---|---|---|
| **1. Business event** | **None** — always emitted | `lead_form_submit_success` |
| **2. Tag / cookie behaviour** | Google Consent Mode | `gtag('consent', ...)` |
| **3. Enhanced identity** | `marketing` / `ad_user_data` | `ec_capture` (separate push) |

Layers 1 and 3 never share a push. Layer 3 failing can never affect layer 1.

### Layer 1 — business event

Consent-independent by design. Carries no identity and no clinical field, so it
is not advertising data. Consent governs what the tags do with it via Consent
Mode, not whether it is created. **Runs first**, before any enrichment.

### Layer 2 — Consent Mode

Defaults declared in `app/layout.tsx` with `strategy="beforeInteractive"`, so
they land before GTM loads:

```js
ad_storage: 'denied', analytics_storage: 'denied',
ad_user_data: 'denied', ad_personalization: 'denied',
functionality_storage: 'denied', personalization_storage: 'denied',
security_storage: 'granted'
```

**Unchanged by this work, and now guarded** — the build gate fails if any
advertising signal defaults to anything but `denied`. On a banner choice,
`setConsentState()` issues the corresponding `gtag('consent', 'update', ...)`.
Under denied consent, GTM/Google's built-in cookieless behaviour applies.

### Layer 3 — enhanced conversions

Emitted only when `hasMarketingConsent()` is true. Email, phone, first and last
name are normalized then **SHA-256 hashed client-side** before touching
dataLayer, under `sha256_`-prefixed field names. `postal_code` and `country`
stay unhashed per Google's spec. At most one enhanced push per accepted lead.

Wrapped in `try/catch`: identity enrichment is an optimisation on top of an
already-recorded lead and must never cost the business event.

## Click identifiers

`gclid` / `gbraid` / `wbraid` (plus `fbclid`, `msclkid`) are validated against
`^[A-Za-z0-9._~-]{1,256}$` and stored as first-party cookies for 90 days —
**only when marketing consent is granted**. A new Google click replaces the
previous Google click-id set; a legitimate id is never deleted by a later grant,
and never replaced by a placeholder. No hardcoded test value exists in source,
fixtures or environment config, and the gate fails if one is introduced.

Click-id presence is **entirely independent** of whether the business event
fires. An organic lead with no click id is still a conversion.

## Retired

`form_submit` is retired and must never be pushed. The gate fails on any
reintroduction as an event name.

## Single success path

All 16 lead forms route through `pushAcceptedLead()` → `pushFormSubmit()`. No
component may build the canonical event or touch `dataLayer` directly; the gate
enforces this across `components/` and `app/`.

Covered forms: main appointment · modal appointment (`BookAnAppoitmentButton`,
`BookAnAppointmentPopup`) · location & doctor contact (`DoctorContactForm`) ·
general contact (`ContactForm`) · state hero (`StateHeroForm`) · body-part hero
(`BodyPartHeroForm`, incl. the two-step scoliosis LP) · mobile hero
(`MobileHeroMiniForm`) · mini contact (`MiniContactForm`) · condition check ·
candidacy check · patient advocate · free MRI review · lawyer contact · the four
injury lead-capture forms.

## Not in scope of this contract

GTM container configuration and Google Ads conversion-action routing are
server-side of the tag manager and cannot be verified from this repository.
The website now emits a correct, consent-independent event; whether GTM maps it
to the right Ads conversion action is the next verification phase.
