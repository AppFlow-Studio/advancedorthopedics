import { Suspense } from 'react'
import type { Metadata } from 'next'
import BlogsPageClient from '@/components/BlogsPageClient.client'
import BlogArchiveIndex from '@/components/BlogArchiveIndex'

// The archive index below is fetched on the server. Revalidate hourly so new posts
// appear without a redeploy, while still serving cached HTML to crawlers.
export const revalidate = 3600

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  return resolvedSearchParams.search !== undefined
    ? { robots: { index: false, follow: true } }
    : {};
}

export default function BlogsPage() {
  return (
    <>
      <Suspense>
        <BlogsPageClient />
      </Suspense>
      {/* Server-rendered links to every post. The grid above is client-side and
          paginated, so without this the served HTML contains no post links at all.
          See components/BlogArchiveIndex.tsx for the measurements behind it. */}
      <div className="w-full flex justify-center bg-white">
        <Suspense fallback={null}>
          <BlogArchiveIndex />
        </Suspense>
      </div>
    </>
  )
}
