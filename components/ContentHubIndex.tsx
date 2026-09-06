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
 * that Suspense subtree and only the fallback reaches the HTML. Verified live and in
 * the production build on 2026-09-06: /conditions served zero anchors to any of its
 * 124 condition pages and /treatments zero to any of its 121, both carrying
 * BAILOUT_TO_CLIENT_SIDE_RENDERING. The hubs are the highest-authority internal
 * linkers on the site and they vouched for nothing.
 *
 * What is NOT claimed here. These pages are not orphans. Scanning all 245 built
 * detail pages, every single one already has inbound links from other detail pages
 * (/conditions/arthritis has 97). An earlier version of this comment said the only
 * internal link came from /sitemap; that was measured across hub pages only and was
 * wrong. So this fixes a real gap in the hub pages, but it is not established as the
 * cause of the indexing problem below, and should not be sold as one.
 *
 * The indexing problem itself, Search Console 2026-08-06 to 2026-09-03: 181 of 334
 * sitemap URLs earned no impression at all. URL Inspection sampling found 1 of 16
 * silent pages indexed against 7 of 9 pages that do earn impressions. Cause unproven.
 *
 * Content was ruled out: the detail pages are server-rendered and average roughly
 * 1,300 words, so they are not thin and not JS shells.
 *
 * This must sit OUTSIDE the hub's Suspense boundary. Inside it, it inherits the same
 * prerender bail-out and renders to nothing, which is the bug being fixed. It is an
 * <aside> because the hub client owns the page's <main>, and a bare <section> after
 * </main> sits in no landmark at all.
 *
 * Deliberately visible rather than hidden. A concealed block of links is a cloaking
 * risk, and a grouped index is genuinely useful to a reader who would otherwise page
 * through nine at a time.
 */

type Props = {
  items: HubItem[];
  basePath: string;
  heading: string;
  blurb: string;
  headingId: string;
  /** Slugs to skip, e.g. redirect sources. See REDIRECTED_CONDITION_SLUGS. */
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
    <aside
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
    </aside>
  );
}

/**
 * Condition slugs that are 308 permanent redirects to a /treatments page, verified
 * live on 2026-09-06 with redirect following DISABLED:
 *
 *   /conditions/aging-management                  -> /treatments/aging-management
 *   /conditions/ankle-arthroscopy                 -> /treatments/ankle-arthroscopy-minimally-invasive-surgery
 *   /conditions/ankle-replacement                 -> /treatments/ankle-replacement-surgery
 *   /conditions/degenerative-disc-disease-surgery -> /treatments/degenerative-disc-disease-surgery
 *
 * All four sources are in next.config.ts redirects(), and all four destinations are
 * already linked directly from the treatments index in this same component. Linking
 * the condition form would route a crawler through a redirect to a page it can
 * already reach in one hop, so link the destination and skip the source.
 *
 * This list replaces an earlier one that named twelve slugs said to 404. Those were
 * a false reading: a `^\s*slug:` regex matched slugs nested inside surgeryOptions
 * and internalLinks objects, none of which are top-level entries in any array this
 * component renders. The build proves it, 124 condition pages and not one of the
 * twelve among them, so that list filtered nothing.
 *
 * Kept as a list rather than a redirect-map import because next.config.ts holds 200+
 * rules and only these four collide with what this component links.
 */
export const REDIRECTED_CONDITION_SLUGS = [
  "aging-management",
  "ankle-arthroscopy",
  "ankle-replacement",
  "degenerative-disc-disease-surgery",
] as const;
