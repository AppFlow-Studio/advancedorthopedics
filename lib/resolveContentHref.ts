import { conditions, conditionContentPlaceholders } from "@/components/data/conditions";
import { AllTreatments, allTreatmentContent } from "@/components/data/treatments";
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
  // Directory-backed, so adding a page under app/find-care/ is all it takes.
  ["book-an-appointment", "candidacy-check", "find-a-doctor", "free-mri-review", "second-opinion"]
);

export function resolveContentHref(slug: string | undefined | null): string | null {
  if (!slug) return null;

  if (BODY_PARTS.some((bp) => bp.slug === slug)) return `/conditions/${slug}`;

  if (
    conditions.some((c) => c.slug === slug) ||
    conditionContentPlaceholders.some((c) => c.slug === slug)
  ) {
    return `/conditions/${slug}`;
  }

  if (
    AllTreatments.some((t) => t.slug === slug) ||
    allTreatmentContent.some((t) => t.slug === slug)
  ) {
    return `/treatments/${slug}`;
  }

  if (FIND_CARE_SLUGS.has(slug)) return `/find-care/${slug}`;

  return null;
}
