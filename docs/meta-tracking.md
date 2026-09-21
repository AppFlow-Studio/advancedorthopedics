# Meta conversion tracking — Mountain Spine & Orthopedics

**Pixel / Dataset ID:** `1114353070995808`
**Implemented:** 2026-09-21 · branch `feat/meta-pixel-conversion-tracking`
**Status:** website implementation complete and tested locally. Meta Events Manager
verification is still outstanding — see *Manual checks required*.

---

## 1. Architecture

The application is the source of truth. Ad platforms do not decide what a lead is.

```
         FORM SUBMITTED
               │
      server validates + persists
               │
        { ok: true, submissionId }          ← the only trigger that counts
               │
   utils/enhancedConversions.ts  pushFormSubmit()
               │
    ┌──────────┴───────────┬────────────────────┐
    │                      │                    │
STEP 1 (always)      STEP 2 (consent)     STEP 3 (consent)
dataLayer.push        Meta `Lead`          Google Enhanced
lead_form_submit_     eventID =            Conversions
success               submission_id        (hashed, separate push)
{form_id, form_source,   custom_data: {}
 page_path, market,
 submission_id}
    │                      │
 GA4 / GTM /            Meta Pixel
 Google Ads             (+ Meta-managed CAPI)
```

Two distinct layers, deliberately:

| Layer | Contents | Consent |
|---|---|---|
| **A — first-party** | market, location, form id, campaign IDs, submission_id, lead quality | site's existing policy |
| **B — Meta signal** | `Lead` / `Contact` / `PageView` + `eventID`, empty `custom_data` | marketing consent required |

Everything the business needs for reporting stays in Layer A. Meta gets the
minimum that makes optimisation work.

## 2. Files

| File | Purpose |
|---|---|
| `lib/meta-pixel.ts` | Typed adapter. init, PageView, Lead, Contact, consent, route suspension. Every export no-ops safely and never throws. |
| `lib/route-privacy.ts` | Deny-by-default route, query-string and form-source policy. |
| `components/MetaPixel.tsx` | Loader (`next/script`) + SPA route tracker. |
| `components/CookieConsentManager.tsx` | *(modified)* renders `<MetaPixel />` under the marketing gate; calls `revokeMetaConsent()` on withdrawal. |
| `utils/enhancedConversions.ts` | *(modified)* fires Meta `Lead` after the canonical success event; Meta `Contact` on phone clicks. |
| `tests/measurement-meta-pixel.test.ts` | 22 deterministic tests. |

## 3. Consent

Meta is classified as **Advertising/Marketing**, alongside CallRail and Google Ads —
not Functional (which covers embedded maps) and not Analytics. The existing
banner, categories, storage key (`mso_cookie_consent_v1`) and state machine were
reused unchanged. No second banner, no new category, no altered defaults.

| Visitor state | Meta behaviour |
|---|---|
| No decision (banner ignored) | Nothing. No `connect.facebook.net` request at all. |
| Reject all | Nothing. |
| Analytics only | Nothing — `marketing` is what gates Meta. |
| Accept marketing | Loads, inits once, fires one PageView for the current page. No refresh needed. |
| Revoked after acceptance | `fbq('consent','revoke')`, component unmounts, `_fbp`/`_fbc` expired by `lib/consent.ts`. |

Google Consent Mode defaults (`ad_storage`, `analytics_storage`, `ad_user_data`,
`ad_personalization` = denied) were **not touched**. Verified still denied-by-default
after this change.

## 4. Route and query privacy

**Blocked outright** (`SENSITIVE_PATH_PREFIXES`):
`/condition-check` · `/find-care/candidacy-check` · `/find-care/free-mri-review` ·
`/patient-forms` · `/internal`

**Blocked by query key** (`SENSITIVE_QUERY_KEYS`): `data`, `condition`, `symptom`,
`diagnosis`, `treatment`, `procedure`, `insurance`, `payer`, `reason`, `mri`, …

`data` is the live one. The site links to `/conditions?data={"tags":["Neck","Spine"]}`
from HomePageUI, NavBar, ServicesAndExpertiseSection and HomeInteractiveAnatomy.
Meta transmits the full document location with every event, and the pixel reads
`location` itself — it cannot be rewritten — so such URLs are suppressed entirely
rather than sanitised.

### The automatic-PageView finding (important)

**VERIFIED in-browser.** Once `fbevents.js` is resident, Meta fires its **own**
PageView on `history` changes, with **no `fbq()` call from this codebase**.
Unmounting the `<Script>` does not stop it — the script has already executed.

Measured before the fix: navigating from an eligible page to `/patient-forms`
transmitted a PageView for that clinical URL while our adapter was provably
silent (fbq call spy recorded zero calls).

**Fix:** `lib/meta-pixel.ts` wraps `history.pushState`/`replaceState` *after*
fbevents installs its own hook, so our wrapper is the outer function and runs
first. It evaluates the **target** URL and calls `fbq('consent','revoke')` before
delegating, then `grant` when an eligible route returns.

Measured after the fix — 0 PageViews on every clinical route including the first
entry, and normal tracking resumed afterwards.

## 5. Event taxonomy

Deliberately small.

| Meta event | When | Payload |
|---|---|---|
| `PageView` | one per eligible page load + one per eligible SPA path transition | none |
| `Lead` | server-confirmed accepted submission from an eligible form source | `{}` + `eventID` = `submission_id` |
| `Contact` | click on a `tel:` CTA | `{}` + opaque random `eventID` |

**Not implemented, deliberately:** `Schedule` (a callback request is not a booked
appointment), `ViewContent` (would encode condition interest), and any custom
event naming a condition, procedure or payer.

### Form inventory → Meta mapping

All 16 lead forms route through the single `pushAcceptedLead()` funnel. Each passes
an explicit `form_source`.

| Form source | Meta `Lead`? |
|---|---|
| book-appointment, doctor-contact, location-contact, general-contact, homepage-consultation, state-consultation, location-consultation, body-part-consultation, modal-appointment, patient-advocate, attorney-coordination, car-accident, personal-injury, slip-and-fall, work-injury, paid-landing | **Yes** |
| **free-mri-review** | **No** — imaging review request |
| **candidacy-check** | **No** — surgical candidacy questionnaire |
| **condition-check** | **No** — symptom questionnaire |

The three clinical surfaces are still measured first-party (Supabase + canonical
dataLayer event). They simply never reach an ad platform. Unknown/missing sources
**fail closed**.

## 6. What Meta never receives

Verified at the network layer on a real `Lead` request: `ud[...]` params **empty**,
`cd[...]` params **empty**, `aems=0;0` (Automatic Advanced Matching off).

Never sent, hashed or unhashed: email · phone · first/last name · postal code ·
patient identifiers · insurance carrier/type/PPO status · diagnosis · symptoms ·
consultation reason · condition · treatment interest · procedure · doctor selected ·
MRI or imaging data · uploaded files · medical history · candidacy results ·
questionnaire answers · market · clinic · form name.

`fbq('init', ...)` is called with **no** second argument, so Advanced Matching
cannot be enabled from code.

## 7. Deduplication

| Risk | Control |
|---|---|
| Double-click / rapid resubmit | `emittedSubmissionIds` Set in `pushFormSubmit` — one accepted submission, one dispatch |
| React rerender / Strict Mode | `window.__msoMetaInitialized` guard + `lastTrackedPath` ref |
| Duplicate init | idempotent `initMetaPixel()` — verified exactly one `init` |
| Duplicate first PageView | vendor inline `track('PageView')` deliberately NOT used; init owns the initial PageView, the effect owns transitions only |
| Browser vs Meta-managed CAPI | shared `eventID` = server `submission_id` |
| Two loader scripts | one `<Script id="meta-pixel-base">` — verified exactly one `fbevents.js` in DOM |

## 8. Conversions API

**UNVERIFIED from code — requires Events Manager.** The brief states Meta-managed
("Set up with Meta") web-events CAPI may already be mirroring pixel events. No
custom server-side CAPI was built, deliberately: a second pipeline would risk
Browser + Meta-managed Server + Custom Server for one lead.

Because every browser `Lead` carries `eventID = submission_id`, a mirrored server
event will deduplicate against it automatically.

Consider custom CAPI **only** if a proven gap appears — CRM qualified-lead events,
appointment outcomes, or Meta-managed CAPI demonstrably not mirroring `Lead`.

## 9. noscript pixel — intentionally omitted

The vendor `<noscript><img src="...facebook.com/tr..."></noscript>` is **not**
included. It would render server-side and fire before any consent check, since
consent lives in `localStorage` and is only readable client-side. There is no
server-side consent mechanism to gate it. Omitting it loses a very small
no-JavaScript segment; including it would transmit to Meta regardless of the
visitor's choice.

## 10. Attribution (first-party)

`lib/gclid.ts` already captures and persists, under marketing consent only:
`gclid`, `gbraid`, `wbraid`, **`fbclid`**, `msclkid`, and `utm_source/medium/campaign/term/content`.
`fbclid` support already existed. Meta campaign IDs (`meta_campaign_id`,
`meta_adset_id`, `meta_ad_id`) are **not yet captured** — see Next phase.

### Recommended Meta ad URL template

```
utm_source=meta&utm_medium=paid_social
&utm_campaign={{campaign.id}}&utm_content={{ad.id}}&utm_term={{adset.id}}&utm_id={{campaign.id}}
&meta_campaign_id={{campaign.id}}&meta_adset_id={{adset.id}}&meta_ad_id={{ad.id}}
```

Numeric IDs only. A campaign named "NJ Herniated Disc Surgery PPO" must never
become a URL parameter on a healthcare site.

## 11. Market / location

`market` (`FL|NJ|NY|PA|GA`) via `normalizeStateCode()` and `location_slug` remain
**first-party only**, in the canonical dataLayer event. They are deliberately not
sent to Meta. One pixel for all five states — never fragment by market.

## 12. Manual checks required (cannot be done from code)

1. **Events Manager → Data sources → Dataset `1114353070995808` → Settings**
   confirm Automatic Advanced Matching is **Off**.
2. **Settings → Data Source Category** — confirm whether the dataset is flagged
   for restricted/health data, and record any event or parameter restrictions.
3. **Test Events** — submit one test lead; confirm exactly one `Lead`, whether a
   Server row appears, and whether it shows **Deduplicated**.
4. **Diagnostics** — review every warning; classify each as real problem /
   expected healthcare restriction / test artifact / Meta-side change.
5. **Automatic advanced matching & automatic events** — confirm what the pixel
   config at `connect.facebook.net/signals/config/1114353070995808` enables. The
   automatic PageView behaviour documented in §4 comes from there.
6. **Pixel Helper** on production: homepage 1 PageView; location page 1 PageView;
   `/patient-forms`, `/condition-check`, `/find-care/free-mri-review` — none.

## 13. Known limitations

- Meta's own automatic events are controlled Meta-side; §4's history guard
  suppresses them on sensitive routes but the setting should still be reviewed.
- The loader script remains in the DOM after consent withdrawal; dispatch is
  revoked but the script is not unloaded (browsers cannot unload an executed script).
- A `PageView` on a public condition page transmits that page's URL, which names
  the page topic. This is standard for any pixel and is how paid landing pages are
  measured; it is not a patient-specific signal. Flagged for policy review.
- `?data=` URLs get no Meta PageView at all. This is an intentional trade.
