import { conditions, conditionContentPlaceholders } from "@/components/data/conditions";
import { AllTreatmentsCombined } from "@/components/data/treatments";
import { BODY_PARTS } from "@/components/data/bodyParts";

/**
 * Resolve a bare content slug to a real URL, or to null when no page exists.
 *
 * Why this is shared and why it can return null. Two call sites in ConditionPage
 * built this URL by hand and both defaulted an unrecognised slug to
 * `/treatments/<slug>`: the internalLinks list fell through to it in an else
 * branch, and the surgeryOption button hardcoded it outright. A slug naming
 * something that is not a treatment therefore rendered a link to a page that has
 * never existed, silently, with no build error and no runtime warning.
 *
 * Measured against the production build on 2026-09-06, that fallback alone
 * produced 52 broken internal links: /treatments/free-mri-review and
 * /treatments/second-opinion on 23 pages each (both are /find-care/ pages),
 * /treatments/tingling-numbness on 2, and /treatments/osteoporosis,
 * /treatments/concussion, /treatments/cervical-herniated-disc and
 * /treatments/minimally-invasive-spine-surgery on 1 each.
 *
 * Returning null rather than guessing is the point. A caller that cannot resolve
 * a slug should render plain text, because no link at all is strictly better than
 * a link to a 404: the 404 wastes crawl budget, leaks authority into nothing, and
 * dead-ends a reader who trusted it.
 */

const FIND_CARE_SLUGS = new Set(
  // Mirrors app/find-care/. Verified exhaustive against that directory.
  ["book-an-appointment", "candidacy-check", "find-a-doctor", "free-mri-review", "second-opinion"]
);

/**
 * Slugs that exist in BOTH the conditions and treatments data, where the treatments
 * page is canonical and /conditions/<slug> is a permanent redirect to it.
 *
 * Exactly these two, derived by intersecting the built route sets rather than by
 * reading the data files, and confirmed against next.config.ts lines 84 and 90.
 * Live: /conditions/<slug> returns 308, /treatments/<slug> returns 200 for both.
 *
 * Without this, the conditions branch below wins on precedence and emits the
 * redirect source, converting a direct link into an extra crawl hop.
 */
const CANONICAL_TREATMENT_SLUGS = new Set([
  "degenerative-disc-disease-surgery",
  "aging-management",
]);

export function resolveContentHref(slug: string | undefined | null): string | null {
  if (!slug) return null;

  // Before the conditions branch: these two are in both datasets and the
  // conditions form is a 308 to the treatments form.
  if (CANONICAL_TREATMENT_SLUGS.has(slug)) return `/treatments/${slug}`;

  if (BODY_PARTS.some((bp) => bp.slug === slug)) return `/conditions/${slug}`;

  if (
    conditions.some((c) => c.slug === slug) ||
    conditionContentPlaceholders.some((c) => c.slug === slug)
  ) {
    return `/conditions/${slug}`;
  }

  // AllTreatmentsCombined, not AllTreatments + allTreatmentContent. An earlier
  // version checked only those two and missed orthopedic-injections, which lives
  // solely in the combined list and is served by the static route
  // app/treatments/orthopedic-injections/. That deleted the only internal link to a
  // live 200 commercial page from eight condition pages: sacroiliac-joint-dysfunction,
  // back-pain, facet-joint-disease, lower-back-pain, sciatica, neck-pain,
  // spinal-stenosis and herniated-disc. The combined list is also what the hub and
  // sitemap.xml use, so this now matches what the rest of the site considers real.
  if (AllTreatmentsCombined.some((t) => t.slug === slug)) {
    return `/treatments/${slug}`;
  }

  if (FIND_CARE_SLUGS.has(slug)) return `/find-care/${slug}`;

  return null;
}
