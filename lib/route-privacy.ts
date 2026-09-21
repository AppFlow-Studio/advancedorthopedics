/**
 * Route and query-string privacy policy for advertising pixels.
 *
 * Mountain Spine is a healthcare provider, so this is deny-by-default for any
 * surface where a *patient-specific* medical signal could be exposed. It is the
 * single gate that decides whether an advertising pixel may run at all on the
 * current URL.
 *
 * The distinction this file draws, deliberately:
 *
 *   PUBLIC CONTENT  — /conditions/herniated-disc, /lp/adult-scoliosis-treatment
 *                     The path names the *page's topic*, not a claim about the
 *                     visitor. These are the pages paid campaigns land on, so
 *                     they stay eligible. No medical value is ever attached as
 *                     an event parameter (see lib/meta-pixel.ts).
 *
 *   PATIENT-SPECIFIC — /condition-check, /find-care/candidacy-check,
 *                     /find-care/free-mri-review, /patient-forms
 *                     Here the visitor supplies their own symptoms, imaging,
 *                     candidacy answers or intake details. Blocked outright.
 *
 *   SENSITIVE QUERY — /conditions?data={"tags":["Spine"]}
 *                     The site encodes body-area/condition filters as a JSON
 *                     `data` query parameter. Meta's pixel transmits the full
 *                     document location with every event, so any URL carrying
 *                     one of these keys is blocked rather than sanitised — we
 *                     cannot rewrite what the pixel reads from location.
 */

/** Path prefixes where no advertising pixel may run. Matched case-insensitively. */
export const SENSITIVE_PATH_PREFIXES = [
  "/condition-check",
  "/find-care/candidacy-check",
  "/find-care/free-mri-review",
  "/patient-forms",
  "/internal",
] as const;

/**
 * Query keys that can carry a health topic, symptom, payer or reason.
 *
 * `data` is the live one: HomePageUI, NavBar, ServicesAndExpertiseSection and
 * HomeInteractiveAnatomy all link to /conditions and /treatments with
 * `?data=<url-encoded JSON>` describing a body area or condition tag. The rest
 * are defensive — they cost nothing and stop a future link from leaking.
 */
export const SENSITIVE_QUERY_KEYS = [
  "data",
  "condition",
  "conditions",
  "symptom",
  "symptoms",
  "diagnosis",
  "treatment",
  "procedure",
  "insurance",
  "payer",
  "reason",
  "bodypart",
  "body_part",
  "painarea",
  "pain_area",
  "mri",
] as const;

function normalizePath(pathname: string): string {
  if (!pathname) return "/";
  const lower = pathname.toLowerCase();
  // Treat /foo and /foo/ identically, but never collapse "/" itself.
  return lower.length > 1 && lower.endsWith("/") ? lower.slice(0, -1) : lower;
}

export function isSensitivePath(pathname: string): boolean {
  const path = normalizePath(pathname);
  return SENSITIVE_PATH_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
}

/**
 * Accepts a raw query string ("?a=1", "a=1", or ""), a URLSearchParams, or null.
 * Returns true when any sensitive key is present, regardless of its value.
 */
export function hasSensitiveQuery(search: string | URLSearchParams | null | undefined): boolean {
  if (!search) return false;

  let params: URLSearchParams;
  try {
    params = typeof search === "string" ? new URLSearchParams(search.replace(/^\?/, "")) : search;
  } catch {
    // An unparseable query string is treated as unsafe rather than ignored.
    return true;
  }

  for (const key of params.keys()) {
    if ((SENSITIVE_QUERY_KEYS as readonly string[]).includes(key.toLowerCase())) return true;
  }
  return false;
}

/**
 * The single question every advertising pixel must ask before doing anything.
 */
export function isMetaEligibleRoute(
  pathname: string,
  search?: string | URLSearchParams | null,
): boolean {
  if (!pathname) return false;
  if (isSensitivePath(pathname)) return false;
  if (hasSensitiveQuery(search)) return false;
  return true;
}

/**
 * Lead sources that may produce a Meta `Lead` event.
 *
 * Deny-by-default: a form source must be listed here explicitly. Values are the
 * FormSource union from lib/lead-contract.ts. The three clinical assessment
 * tools are deliberately absent —
 *
 *   free-mri-review  — imaging upload and review request
 *   candidacy-check  — surgical candidacy questionnaire
 *   condition-check  — symptom questionnaire
 *
 * — because a conversion from those surfaces would tell Meta that a specific
 * person completed a clinical assessment. Those leads are still measured
 * first-party (Supabase + the canonical dataLayer event); they simply do not
 * reach an advertising platform.
 *
 * Note the source name itself is NEVER transmitted to Meta. This list only
 * decides whether a bare, parameterless `Lead` fires.
 */
export const META_ELIGIBLE_FORM_SOURCES = [
  "book-appointment",
  "doctor-contact",
  "location-contact",
  "general-contact",
  "homepage-consultation",
  "state-consultation",
  "location-consultation",
  "body-part-consultation",
  "modal-appointment",
  "patient-advocate",
  "attorney-coordination",
  "car-accident",
  "personal-injury",
  "slip-and-fall",
  "work-injury",
  "paid-landing",
] as const;

export function isMetaEligibleFormSource(formSource: string | undefined | null): boolean {
  if (!formSource) return false;
  return (META_ELIGIBLE_FORM_SOURCES as readonly string[]).includes(formSource.trim().toLowerCase());
}
