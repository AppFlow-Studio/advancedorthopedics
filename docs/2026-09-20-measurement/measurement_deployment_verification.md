# Deployment verification — measurement consent decoupling

**Date:** 2026-09-20
**PR:** [AppFlow-Studio/advancedorthopedics#97](https://github.com/AppFlow-Studio/advancedorthopedics/pull/97)
**Branch:** `fix/measurement-consent-decoupling` (fork: `BilalA99`)
**Base:** `upstream/main` @ `bdd7a8a`
**Commit:** `8096703`

**Status: READY — PRODUCTION APPROVAL REQUIRED.** The fix is complete, tested and
built, but cannot be deployed from this account. See *Blockers* below.

## Local verification (complete)

| Check | Command | Result |
|---|---|---|
| Measurement suites | `npm run test:measurement` | **40 pass / 0 fail** |
| Build gate | `npm run validate:measurement` | **7 checks passed** |
| Production build | `npm run build` | **Success** (all prebuild validators green) |
| Location data | via `prebuild` | 24 clinics validated, 0 warnings |
| Entity graph audit | via `prebuild` | 136 conditions, 122 treatments, 0 notes |
| Specialist cannibalization | via `prebuild` | passed, 7 pages |
| Clinics-map / taxonomy generators | via `prebuild` | up to date |
| Whitespace | `git diff --check` | clean |
| Typecheck | `npx tsc --noEmit` | identical before/after; **0 errors in changed files** |
| Lint | `npx eslint` on changed files | 20 pre-existing `no-explicit-any`, identical before/after |

### Defect reproduced before the fix

The new suites were written first and run against unmodified code:

```
not ok 1 - banner ignored ... still emits the canonical accepted-lead event   expected: 1  actual: 0
not ok 2 - all categories rejected ... still emits the canonical event        expected: 1  actual: 0
not ok 5 - a failing enhanced-data step does not prevent the base conversion event
# pass 2  # fail 3
```

After the fix: `# pass 5  # fail 0`, and 40/40 across all four suites.

### Build gate mutation-tested

The defect was reintroduced four ways; the gate caught all four and the source
was restored clean each time (`git diff --stat` showed only the intended files).

| Mutation | Gate result |
|---|---|
| `hasMeasurementConsent()` reinserted before the push | **FAILED the build** |
| `market: state.toLowerCase()` (slug instead of code) | **FAILED the build** |
| `reason: "back pain"` added to the payload | **FAILED the build** |
| `ad_storage: 'granted'` in the consent default block | **FAILED the build** |

### Local bundle inspection

`.next/static/chunks/6726-2e4da69b583e759c.js` — the canonical push is
unconditional and the consent gate sits after it:

```js
g.add(w.submissionId);                                               // dedupe
_.dataLayer.push(tV({formId:t, ..., submissionId:w.submissionId})),  // UNCONDITIONAL
!(0,a.RW)()) return;                                                 // hasMarketingConsent, AFTER
try{ persistEC(h); await l(h) }catch(e){}                            // isolated
```

## Current production state (defect confirmed live)

Verified non-invasively against `https://mountainspineorthopedics.com` — **no
test lead was submitted**.

- Consent Mode defaults are correctly live: `ad_storage: 'denied'` (and the rest denied).
- GTM container live: `GTM-T57SB8NQ`.
- Live bundle `/_next/static/chunks/6726-20ace6573b1d4169.js` contains the
  **defective** order and gate:

```js
if( (0,a.RW)() && (persistEC(_), await l(_)), (0,a.nv)() ){
  e.dataLayer.push((0,o.tV)({ formId:t, ..., submissionId:w.submissionId }))
}
// a.RW = hasMarketingConsent   a.nv = hasMeasurementConsent
```

The canonical push is inside `if (a.nv())`, so production today emits **nothing**
for a visitor who ignored or rejected the banner. Enhanced conversions also still
run **before** the business event and are awaited bare.

## Blockers — exact external approvals required

### 1. Vercel preview deployment — BLOCKED

The Vercel check on PR #97 reports `FAILURE` pointing at:

```
https://vercel.com/git/authorize?team=Appflow-studios&slug=temur-3996s-projects&teamId=team_bx9UtfyUO4dF4AWElVhJfaz0
```

PR #97 is **cross-repository** (`BilalA99` fork → `AppFlow-Studio`). Vercel does
not build preview deployments for fork PRs without explicit authorization from a
member of the **`Appflow-studios`** Vercel team.

> **Required action:** a member of the `Appflow-studios` Vercel team opens that
> authorize link and approves builds for this fork PR.

Direct push to `AppFlow-Studio/advancedorthopedics` (which would let Vercel build
it as a same-repo branch) was attempted and refused:
`Permission to AppFlow-Studio/advancedorthopedics.git denied to BilalA99` (HTTP 403).

Consequently **five-market verification on Preview (Phase 6/7) and production
browser verification (Phase 8) could not be performed.** They remain outstanding
and should be run once a preview exists.

### 2. Merge to production — BLOCKED

No write access to `AppFlow-Studio/advancedorthopedics`. A maintainer must review
and merge PR #97, exactly as with the previously merged PRs #93 and #95.

### 3. CI `Typecheck` — pre-existing failure, not a blocker introduced here

The `Typecheck` workflow fails on this PR with:

```
Error: supabaseUrl is required.
[Error: Failed to collect page data for /sitemap.xml]
```

This is a **missing GitHub Actions secret** (`NEXT_PUBLIC_SUPABASE_URL`), not a
type error. Proven pre-existing: the identical failure occurs on clean
`upstream/main` @ `bdd7a8a` (run `35345238344`), and on every recent run of this
workflow across `main`, `TemurDev`, and prior feature branches. The workflow has
not gone green on any branch in the visible history.

The job never reaches its `tsc` step, so the 49-error ceiling was not evaluated
for this PR. Notably the build phase of that job **did** run this change's new
gate successfully:

```
measurement-contract: 7 checks passed.
```

> **Optional follow-up, separate from this PR:** add the Supabase environment
> variables to the repository's Actions secrets so `Typecheck` can reach its
> `tsc` step again.

## Outstanding verification once deployed

To be completed after a preview or production deployment exists:

1. Submit one labelled test lead per market (FL, NJ, NY, PA, GA) on Preview and
   confirm exactly one `lead_form_submit_success` with the correct uppercase code.
2. Repeat the accepted / rejected / ignored consent matrix in a clean profile.
3. Confirm direct `/thank-you` navigation and invalid submissions push nothing.
4. Confirm enhanced identity appears only under marketing consent, hashed.
5. Confirm no clinical data in any advertising `dataLayer` event.
6. Confirm the deployed production SHA matches the merged commit.
7. Confirm production is not left pointing at a branch deployment.

## Test records created

**None.** No test lead was submitted to production or to any environment during
this work. All verification was performed through automated tests, build-output
inspection, and non-invasive fetches of already-public production JavaScript.

When the post-deployment checks above are run, label each test lead clearly (e.g.
first name `ZZTest`, email `qa+measurement-2026-09-20@…`) and record its
`submission_id` here so the rows can be excluded from reporting and from any
Google Ads offline conversion upload.

| Market | Environment | submission_id | Submitted at | Excluded |
|---|---|---|---|---|
| _(none yet)_ | | | | |

## Production SHA

| | |
|---|---|
| Current production SHA | `bdd7a8a` (pre-fix — defect confirmed live, see above) |
| Candidate SHA | `8096703` |
| Merged SHA | _pending maintainer merge_ |
| Verified deployed SHA | _pending_ |
