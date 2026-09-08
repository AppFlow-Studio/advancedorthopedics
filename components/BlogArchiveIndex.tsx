import Link from "next/link";
import { GetBlogsPublic } from "@/app/blogs/api/get-blogs";

/**
 * Server-rendered index of every blog post, SHARED-10 P1.
 *
 * The blog hub renders its post grid client-side and paginates 6 at a time, so the
 * served HTML contained zero links to any post. Measured 2026-08-30 and still true
 * on 2026-09-06: 35 of 36 posts were unreachable from the homepage by following
 * links, and 25 had no inbound link anywhere on the site. A sitemap gets a URL
 * crawled; internal links are what pass authority and signal that a page matters.
 * These posts had the first and not the second.
 *
 * This renders on the server, so the links exist in the HTML for a crawler that does
 * not execute JavaScript. It is deliberately visible rather than hidden: a concealed
 * block of links is a cloaking risk, and an archive index is useful to readers who
 * would otherwise have to page through six at a time.
 *
 * Fails soft. GetBlogsPublic returns [] on any Supabase error and uses the static
 * client, so this never blocks the page and never needs request cookies.
 */
export default async function BlogArchiveIndex() {
  const posts = await GetBlogsPublic();

  if (!posts || posts.length === 0) return null;

  const sorted = [...posts].sort((a: any, b: any) => {
    const at = a?.blog_info?.title ?? "";
    const bt = b?.blog_info?.title ?? "";
    return at.localeCompare(bt);
  });

  return (
    <section
      aria-labelledby="all-articles-heading"
      className="w-full max-w-[1440px] px-6 xl:px-[40px] pb-[60px]"
    >
      <div className="border-t border-[#E5E7EB] pt-10">
        <h2
          id="all-articles-heading"
          className="text-[#111315] text-2xl sm:text-3xl font-public-sans font-medium"
        >
          All articles
        </h2>
        <p className="mt-2 text-[#424959] font-public-sans">
          Every post on the Spine Wellness Blog, {sorted.length} in total.
        </p>

        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-3">
          {sorted.map((post: any) => (
            <li key={post.id}>
              <Link
                href={`/blogs/${post.slug}`}
                className="text-[#0A50EC] hover:underline font-public-sans leading-relaxed"
              >
                {post?.blog_info?.title ?? post.slug}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
