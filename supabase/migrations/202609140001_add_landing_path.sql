-- Restore lead persistence after a schema drift outage.
--
-- Application code (components/email/sendcontactemail.ts -> logLeadToSupabase)
-- began writing a `landing_path` column on 2026-09-03/09-06 (commits 86b5feb,
-- e90fcb6), but no migration ever added the column. Once that code reached
-- production `main` (~2026-09-10) every INSERT into public.forms was rejected by
-- PostgREST ("column landing_path does not exist"), so lead capture, patient
-- confirmation emails, and offline-conversion reconciliation all silently broke
-- and the last successful row was 2026-09-10 13:25 UTC.
--
-- Adding the column is sufficient to restore inserts: the RLS insert policy
-- "Public website can submit leads" (anon/authenticated, with check true) and the
-- existing forms_submission_id_key unique index are unaffected by a new column.
--
-- Rollback (only if something depends on the column being absent):
--   alter table public.forms drop column if exists landing_path;

alter table public.forms
  add column if not exists landing_path text;

comment on column public.forms.landing_path is
  'Pathname of the paid landing page a lead arrived on. Server-side only (never in the GA4 payload); one bucket per LP so per-landing-page conversion rate is computable.';
