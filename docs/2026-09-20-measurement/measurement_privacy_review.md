# Privacy review — accepted-lead measurement

**Date:** 2026-09-20 · **Context:** healthcare (orthopedic/spine practice), five US states

## Question this review answers

Does emitting `lead_form_submit_success` regardless of consent state weaken
privacy? **No.** The change moves *where* consent is enforced, and tightens
what leaves the browser under denied consent. Nothing is newly exposed.

## What the always-emitted event contains

```
event, form_id, form_source, page_path, market, submission_id
```

| Field | Value | Personal data? | Health signal? |
|---|---|---|---|
| `event` | fixed literal | No | No |
| `form_id` | component name | No | No |
| `form_source` | channel bucket | No | No — guarded, see below |
| `page_path` | pathname of the submitting page | No | Contextual only |
| `market` | `FL`/`NJ`/`NY`/`PA`/`GA` | No — state-level | No |
| `submission_id` | opaque server-issued id | Pseudonymous key | No |

No name, email, phone, address, DOB, IP, symptom, diagnosis, treatment reason,
insurance status, or free-text message. Enforced three ways:

1. A test asserts the payload is **exactly** those six keys and that no
   plaintext identity value appears anywhere in `dataLayer`.
2. The build gate fails if any PHI-shaped key is added to the builder.
3. A pre-existing test asserts no `form_source` value contains a condition,
   symptom, or payer token.

### On `page_path` and `form_source`

The practice runs condition-specific paid landing pages, so a pathname such as
`/lp/adult-scoliosis-treatment` is *contextual* information about the page — not
an assertion about the visitor. This is the same signal any pageview already
carries, and `page_path` was part of the contract before this change.

`form_source` is deliberately channel-shaped: the scoliosis LP reports
`paid-landing`, **not** `scoliosis`. Condition-level qualification stays
first-party in Supabase via `landing_path`, which is written server-side and is
explicitly barred from the client payload (asserted by test, and the client
tracking module must not reference it at all).

### On `submission_id`

Pseudonymous: opaque outside the practice's own systems, with no contact detail
or clinical value derivable from it. It exists so one accepted lead maps to one
conversion and to make deduplication and exclusion possible. It is the field
that makes a *test lead removable* — see the deployment verification doc.

## Consent behaviour — before vs after

| Visitor action | `ad_storage` etc. | Base event | Enhanced identity | Ad cookies |
|---|---|---|---|---|
| **Ignores banner** | denied (default) | **now emitted** (was: none) | none | none |
| **Rejects all** | denied | **now emitted** (was: none) | none | none, existing expired |
| **Accepts analytics only** | `analytics_storage` granted | emitted | none | analytics only |
| **Accepts marketing** | granted | emitted | hashed, one push | gclid/UTM stored |

Unchanged by this work:

- Consent Mode defaults **all advertising signals denied** before GTM loads, and
  the build gate now fails if any is flipped to `granted`.
- No consent category defaults to granted. No auto-grant anywhere.
- Rejecting marketing still expires `_gcl*`, `_fbp/_fbc`, CallRail and stored
  click-id cookies, and clears the `ec_*` sessionStorage keys.
- Click identifiers are stored **only** under marketing consent.

## Why emitting under denied consent is the correct posture

Under ePrivacy/GDPR-style analysis, consent attaches to **storing or reading
information on the device** and to **processing personal data**. The base event
does neither: it writes nothing to the device and carries no personal data. It
is an application-internal signal handed to a tag manager.

Google Consent Mode is designed for exactly this: receive the event, observe
that `ad_storage`/`analytics_storage` are denied, and send a **cookieless,
non-identifying ping** — or nothing — accordingly. Suppressing the push
upstream removed Google's ability to apply that policy, which did not increase
privacy; it just destroyed the business's view of its own leads.

Under HIPAA, the relevant hazard is transmitting individually identifiable
health information to a third party. The base event transmits neither identity
nor health information, and the enhanced-identity layer — the only layer that
carries identity — remains strictly consent-gated and hashed.

## Enhanced conversions

- Only when `hasMarketingConsent()` (`ad_user_data` granted).
- Email, phone, first/last name normalized then **SHA-256 hashed in the browser**
  before touching `dataLayer`. No plaintext PII is readable by page scripts.
- `sha256_`-prefixed field names so GTM does not double-hash.
- Never includes clinical fields.
- At most one enhanced push per accepted lead.
- Now wrapped in `try/catch` — a hashing failure no longer propagates. This is
  also a small privacy improvement: the previous behaviour surfaced an error to
  a visitor whose lead had in fact been saved, prompting resubmission and a
  duplicate record.

## Residual considerations

1. **GTM container is out of scope.** This repository controls what is pushed;
   it cannot prove what GTM forwards. If a tag is configured to fire on
   `lead_form_submit_success` *without* respecting Consent Mode, that is a
   container-side misconfiguration to verify in the browser phase. The website
   contract is now correct and does not itself send anything to an ad platform.
2. **`submission_id` in GA4.** Pseudonymous and intentionally present for
   dedup/exclusion. It should not be promoted into an Ads audience key.
3. **No new data flows** were introduced. No field was added to any payload.

## Verdict

The change **improves** the privacy posture: it removes a false safeguard that
was destroying business data while protecting nothing, keeps every real
safeguard (deny-by-default Consent Mode, consent-gated identity, client-side
hashing, cookie cleanup on rejection), and adds a build gate that fails if any
of those safeguards is weakened.
