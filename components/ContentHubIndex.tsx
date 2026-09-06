import Link from "next/link";
/**
 * Structural, not BaseContentProp. The three arrays this renders (conditions,
 * conditionContentPlaceholders, AllTreatmentsCombined) do not share one interface:
 * ConditionContent has no `body`, so requiring BaseContentProp fails to typecheck.
 * A link needs a title, a slug and a group, and nothing else.
 */
export type HubItem = { title: string; slug: string; tag?: string };

/**
 * Server-rendered index of every page under a content hub, SHARED-10 P1.
 *
 * Why this exists. The conditions and treatments hubs render their card grids in
 * client components that call useSearchParams(), so Next bails out of prerendering
 * that Suspense subtree and only the fallback reaches the HTML. Measured against
 * the live site on 2026-09-06: /conditions served zero links to any of its 125
 * condition pages and /treatments served zero links to any of its 122. The only
 * internal link to any of them anywhere on the site was from /sitemap.
 *
 * What that cost, from Search Console over 2026-08-06 to 2026-09-03:
 *   - 181 of 334 sitemap URLs earned no impression at all, 158 of them here.
 *   - Of 16 sampled silent pages, 1 was indexed. Of 9 sampled pages that do earn
 *     impressions, 7 were indexed. Three came back "URL is unknown to Google"
 *     despite sitting in a sitemap submitted in July and re-downloaded on Sep 1.
 *
 * A sitemap gets a URL crawled. Internal links are what pass authority and tell
 * Google the site itself considers a page worth reading. These pages had the first
 * and not the second, which is what "Crawled - currently not indexed" means at
 * this scale. Content was ruled out first: the pages are server-rendered, average
 * roughly 1,300 words, and share only 10 to 27 percent of their phrasing with each
 * other, so they are neither thin nor near-duplicates.
 *
 * This must sit OUTSIDE the hub's Suspense boundary. Inside it, it inherits the
 * same prerender bail-out and renders to nothing, which is the bug being fixed.
 *
 * Deliberately visible rather than hidden. A concealed block of links is a cloaking
 * risk, and a grouped A-Z index is genuinely useful to a reader who would otherwise
 * page through nine at a time.
 */

type Props = {
  items: HubItem[];
  basePath: string;
  heading: string;
  blurb: string;
  headingId: string;
  /** Slugs present in the data whose page does not render. See EXCLUDED_CONDITION_SLUGS. */
  exclude?: readonly string[];
};

export default function ContentHubIndex({
  items,
  basePath,
  heading,
  blurb,
  headingId,
  exclude = [],
}: Props) {
  if (!items || items.length === 0) return null;

  const blocked = new Set(exclude);

  // One link per slug. Several lists are concatenated upstream and a duplicate
  // href would split the signal this component exists to concentrate.
  const seen = new Set<string>();
  const unique = items.filter((i) => {
    if (!i?.slug || seen.has(i.slug) || blocked.has(i.slug)) return false;
    seen.add(i.slug);
    return true;
  });

  const groups = new Map<string, HubItem[]>();
  for (const item of unique) {
    const key = item.tag?.trim() || "Other";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(item);
  }

  const ordered = [...groups.entries()]
    .map(([tag, list]) => [tag, list.sort((a, b) => a.title.localeCompare(b.title))] as const)
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

  return (
    <section
      aria-labelledby={headingId}
      className="w-full flex justify-center bg-white"
    >
      <div className="w-full max-w-[1440px] px-6 xl:px-[40px] pb-[60px]">
        <div className="border-t border-[#E5E7EB] pt-10">
          <h2
            id={headingId}
            className="text-[#111315] text-2xl sm:text-3xl font-public-sans font-medium"
          >
            {heading}
          </h2>
          <p className="mt-2 text-[#424959] font-public-sans">
            {blurb} {unique.length} in total.
          </p>

          {ordered.map(([tag, list]) => (
            <div key={tag} className="mt-8">
              <h3 className="text-[#111315] text-lg font-public-sans font-medium">
                {tag}
              </h3>
              <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-2">
                {list.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`${basePath}/${item.slug}`}
                      className="text-[#0A50EC] hover:underline font-public-sans leading-relaxed"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * conditionContentPlaceholders mixes genuine conditions with entries whose real
 * page lives under /treatments. Every slug below is in that array, so it reaches
 * generateStaticParams and would be linked by this component, but the page renders
 * 404: each was requested against the live site on 2026-09-06 and returned 404.
 * The live sitemap.xml already omits all twelve, so this list restores that same
 * boundary to internal links. Linking a 404 would make this change worse than the
 * bug it fixes, which is the failure mode a review caught on the previous PR.
 *
 * The underlying data problem is worth its own ticket: these entries should either
 * move to the treatments data or be dropped from the conditions placeholders.
 */
export const EXCLUDED_CONDITION_SLUGS = [
  "acdf-surgery",
  "artificial-disc-replacement-surgery",
  "coccygectomy-tailbone-removal-surgery",
  "endoscopic-foraminotomy-surgery",
  "kyphoplasty",
  "lumbar-fusion-surgery",
  "lumbar-laminectomy-surgery",
  "lumbar-microdiscectomy-surgery",
  "minimally-invasive-spine-surgery",
  "revision-spinal-surgery",
  "si-joint-fusion",
  "spinal-fusion",
] as const;
