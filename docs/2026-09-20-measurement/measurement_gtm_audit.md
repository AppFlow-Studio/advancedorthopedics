# GTM container audit — GTM-T57SB8NQ

**Date:** 2026-09-20 · **Auditor account:** `seo@appflowstudio.io`
**Container:** GTM-T57SB8NQ · account `6301349322` · container `223492636` · workspace `36`
**Live version at audit time:** not yet changed by this session — **Workspace Changes: 8**, unpublished
**Nothing in this container was modified during this audit.** All reads were read-only; the
change count was 8 before and 8 after.

## Headline finding

**Most of the GTM repair described in the task was already staged** by
`seo@appflowstudio.io` a day before this audit. The market triggers, the
FL+GA / NJ+NY+PA routing split, and the transaction-ID mapping are already
correct in workspace 36. They do not need to be redone.

**The blocker is not GTM — it is the website.** Production still serves the
defective bundle in which `lead_form_submit_success` is gated behind consent, so
publishing this workspace now would fix nothing for banner-ignoring visitors and
would leave a half-deployed state. GTM publication must follow the website
deploy, not precede it.

## The eight pending changes

| # | Item | Type | Change |
|---|---|---|---|
| 1 | `DLV - submission_id` | Variable | Added |
| 2 | `Lead Submit Form Enhanced For NJ/NY` | Tag | Modified |
| 3 | `lead_form_submit_success_GA` | Trigger | Modified |
| 4 | `lead_form_submit_success_NJ` | Trigger | Modified |
| 5 | `lead_form_submit_success_NY` | Trigger | Modified |
| 6 | `lead_form_submit_success_PA` | Trigger | Modified |
| 7 | `Thank You Page` | Tag | Modified |
| 8 | `Thank You Page For NJ/NY GA` | Tag | Modified |

All eight edited by `seo@appflowstudio.io`, "a day ago".

## Market triggers — already on the uppercase-code contract

| Trigger | Condition | Status |
|---|---|---|
| `lead_form_submit_success_FL` | `DLV - market` equals `FL` | correct (unchanged, as required) |
| `lead_form_submit_success_NJ` | `DLV - market` equals `NJ` | **already repaired** |
| `lead_form_submit_success_NY` | `DLV - market` equals `NY` | **already repaired** |
| `lead_form_submit_success_PA` | `DLV - market` equals `PA` | **already repaired** |
| `lead_form_submit_success_GA` | `DLV - market` equals `GA` | **already repaired** |

`DLV - market` → Data Layer Variable Name **`market`**, Version 2, referenced by
exactly those five triggers. This matches the website contract
(`market: "FL" | "NJ" | "NY" | "PA" | "GA"`) exactly.

## Market → account routing — already correct

| Tag | Conversion ID | Label | Triggers | Markets |
|---|---|---|---|---|
| `Thank You Page` | `17270956371` (AW-17270956371) | `soPPCPay3ucaENPCt6tA` | `lead_form_submit_success_FL`, `_GA` | **FL, GA** |
| `Thank You Page For NJ/NY GA` | `17988324873` (AW-17988324873) | `m2yGCJfJ5YEcEImcwIFD` | `lead_form_submit_success_NJ`, `_NY`, `_PA` | **NJ, NY, PA** |

This is exactly the routing the task specifies: FL to the Florida destination,
GA to the same Florida/GA destination, NJ+NY to the NJ/NY destination, and PA to
the NJ/NY destination.

Because each tag's triggers are mutually exclusive on `DLV - market`, **no market
can fire both accounts** — structurally verified, still to be confirmed
empirically in Preview.

> **Naming risk (cosmetic but real):** both tags are still called "Thank You
> Page". They no longer fire on thank-you page views — they fire on
> `lead_form_submit_success_*` — but the names invite a future editor to
> re-attach a page-view trigger. Recommend renaming to
> `Ads Conversion — Lead (FL/GA)` and `Ads Conversion — Lead (NJ/NY/PA)`.

## Transaction ID — already mapped

Both conversion tags set **Transaction ID = `{{DLV - submission_id}}`**.

`DLV - submission_id` → Data Layer Variable Name **`submission_id`**, Version 2,
referenced by exactly those two tags. This is the server-issued id from the
website contract, so Google Ads de-duplication keys on the same identifier the
CRM row uses — which is what makes 1:1 reconciliation possible.

## Enhanced conversions — wired as setup tags

| Conversion tag | Setup tag (fires first) |
|---|---|
| `Thank You Page` | `Lead Submit Form Enhanced` |
| `Thank You Page For NJ/NY GA` | `Lead Submit Form Enhanced For NJ/NY` |

Both enhanced tags are type **Google Ads User-provided Data Event** and have **no
firing trigger of their own** — they run only via tag sequencing ahead of their
conversion tag. That is the correct shape: one enhanced payload per accepted
lead, scoped to the one destination that lead routes to, and incapable of firing
on its own.

## Obsolete and duplicate firing paths still present

| Item | Type | Tags attached | Assessment |
|---|---|---|---|
| `form_submit` | Custom Event trigger | **1** | Still wired to `GA4 - Form Submit Event` |
| `form_submit_FL` | Custom Event, `DLV - state` equals `florida` | 0 | Slug-based, orphaned — remove |
| `form_submit_NJ` | Custom Event, `DLV - state` equals `new-jersey` | 0 | Slug-based, orphaned — remove |
| `form_submit_NY` | Custom Event, `DLV - state` equals `new-york` | 0 | Slug-based, orphaned — remove |
| `History Change` | History Change, URL contains `/thank-you` | 0 | Thank-you-navigation path — remove |
| `Form Subm` | Form Submission | 0 | Orphaned — remove |
| `Form Submission` | Form Submission | 0 | Orphaned — remove |

`GA4 - Form Submit Event` currently fires on **both** `form_submit` **and**
`lead_form_submit_success`. The website no longer emits `form_submit` at all (a
build gate now fails if it returns), so this is dormant rather than actively
double-counting — but it should be reduced to the canonical trigger only.

**None of these orphaned triggers feed a Google Ads conversion tag**, so none is
currently causing a duplicate or wrong-market conversion. Removing them is
hygiene that prevents future misuse, not an active defect fix.

## Not yet verified — requires Preview

These could not be established from read-only configuration and need Tag
Assistant Preview evidence:

1. **"Additional Consent Checks"** on both Ads conversion tags (task step 13).
   The read-only tag view does not render consent settings; the edit view is
   needed, or better, Preview, which reports each tag's consent status directly.
   **Until this is checked, do not assume the base conversion is free of a
   custom consent gate.**
2. **Automatic user-provided-data collection** on the Google tag
   `mountainspinestream` (task step 14) — whether broad auto-detection is on,
   and whether it can capture identity outside the approved success event or
   without `ad_user_data`.
3. **Conversion Linker "Conversion Linker All Clicks"** and
   **"Click in Phone Number"** appear greyed/flagged in the tag list (likely
   paused, or with a configuration warning). Worth confirming.
4. Container quality banner reads **"Container quality: Urgent — Container
   issues are likely impacting your measurement" (1 issue)**. Not yet opened.
5. Whether either conversion tag also carries any *additional* trigger beyond
   those listed (the read view showed only the market triggers, which is good,
   but an exception/blocking trigger would not necessarily surface there).

## Empirical testing still outstanding

No Preview run, no five-market matrix, no network-request evidence, and no
publication. All of that is gated on the website fix reaching production first.

A local production build of the fixed commit (`07226cb`) was served on
`localhost:3111` and loaded the **real** `GTM-T57SB8NQ` container, which
confirmed, in a real browser:

- page load emits **zero** `lead_form_submit_success` and **zero** `form_submit`
- Consent Mode defaults are **denied** for `ad_storage`, `analytics_storage`,
  `ad_user_data`, `ad_personalization`, `functionality_storage`,
  `personalization_storage`; `security_storage` granted
- no consent record stored (the banner-ignored state)

Outgoing Google Ads/Analytics requests were intercepted and **blocked** during
this work so that no test conversion could reach either Ads account. No test
lead was submitted anywhere, and the local server ran with neutered Supabase and
Resend credentials so no lead row or email could be written even accidentally.

## Recommended order of operations

1. Merge PR #97 and deploy the website (**blocked — needs a maintainer**).
2. Confirm the production bundle contains the consent-independent push.
3. Open GTM Preview against production; resolve items 1–5 above.
4. Run the five-market × consent-state matrix with network evidence.
5. Remove the orphaned triggers and reduce `GA4 - Form Submit Event` to the
   canonical trigger.
6. Rename the two "Thank You Page" tags.
7. Publish one controlled version; confirm Live = Latest and Workspace
   Changes = 0.
8. Start the clean measurement window; reconcile the first paid lead per
   destination.
