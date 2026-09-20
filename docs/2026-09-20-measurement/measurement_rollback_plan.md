# Rollback plan — measurement consent decoupling

**Change:** business-event creation decoupled from consent state
**Branch:** `fix/measurement-consent-decoupling`
**Blast radius:** client-side measurement only

## Risk assessment

| Property | Assessment |
|---|---|
| Server behaviour | **Unchanged** — no API route, schema, or persistence touched |
| Lead capture / delivery | **Unchanged** — no form submission logic altered |
| Rendering / routing | **Unchanged** — no page or component modified |
| Consent Mode defaults | **Unchanged** — still deny-by-default |
| Data added to any payload | **None** |
| Net effect | Strictly *more* `lead_form_submit_success` events |

The change cannot lose leads: it only adds events that were previously
suppressed. A visitor's lead was always persisted server-side; only the
measurement event was missing.

### Expected, non-defective side effect

Reported website conversions will **rise**, likely materially, because leads
from banner-ignoring and banner-rejecting visitors are counted for the first
time. This is the fix working, not a double-count. Verify against Supabase lead
volume before treating any increase as a defect — `submission_id` makes the two
directly reconcilable.

Compare `count(lead_form_submit_success)` against accepted rows in Supabase over
the same window. They should converge; previously the event count was a fraction
of the row count.

## Triggers for rollback

Roll back if any is observed post-deploy:

1. Events fire **without** a server-accepted submission (event count exceeds
   accepted Supabase rows for the same window).
2. Duplicate events for one `submission_id`.
3. Identity or clinical fields observed in a `dataLayer` advertising payload.
4. Enhanced-conversion data appearing under denied or absent consent.
5. Any consent signal observed as `granted` before a visitor chooses.
6. Form submission UX regression (errors on successful submits).

Triggers 3–5 are privacy-affecting: roll back immediately, do not wait for a fix
forward.

## Rollback options

### Option 1 — revert the merge commit (preferred)

```bash
git checkout main
git pull upstream main
git revert -m 1 <merge-commit-sha>
git push upstream main
```

Vercel redeploys automatically. Restores the exact prior behaviour: the base
event becomes consent-gated again and under-reporting resumes.

### Option 2 — instant redeploy of the previous build (fastest)

Vercel Dashboard → Deployments → the last deployment whose commit is
`bdd7a8a` (or any earlier production deployment) → **Promote to Production**.

No rebuild; effective in seconds. Use this if a privacy trigger fires. Follow up
with Option 1 so `main` matches production.

### Option 3 — targeted revert of the tracking module only

If the tests and the build gate are worth keeping while the runtime change is
reverted:

```bash
git checkout <merge-commit-sha>^ -- utils/enhancedConversions.ts
git commit -m "revert(measurement): restore consent gate on accepted-lead push"
```

Note this will **fail the build**: `scripts/validate-measurement-contract.mjs`
rejects a consent-gated accepted-lead push by design. Remove
`node scripts/validate-measurement-contract.mjs` from the `prebuild` chain in
`package.json` in the same commit if this route is taken.

## Files to restore

| File | Change | Revert risk |
|---|---|---|
| `utils/enhancedConversions.ts` | Push order + consent gate moved | None — self-contained |
| `package.json` | Added gate to `prebuild`, widened `test:measurement` glob | None |
| `scripts/validate-measurement-contract.mjs` | New | Delete; remove from `prebuild` |
| `tests/measurement-consent-decoupling.test.ts` | New | Delete |
| `tests/measurement-event-contract.test.ts` | New | Delete |
| `tests/measurement-form-flow.test.ts` | New | Delete |
| `docs/2026-09-20-measurement/*` | New docs | No runtime impact |

No database migration, no environment variable, no GTM container change is part
of this deploy — so there is nothing to unwind outside the repository.

## Verification after rollback

```bash
npm run test:measurement     # decoupling tests will now FAIL — expected post-revert
npm run build                # must succeed (remove the gate first if kept)
```

In the browser, confirm `lead_form_submit_success` is absent under an ignored
banner — the pre-fix behaviour.

## Recovery path

The fix is one function in one file. If rolled back for an unrelated reason,
re-apply by reverting the revert; the test suite and build gate will confirm the
contract is intact before it ships again.
