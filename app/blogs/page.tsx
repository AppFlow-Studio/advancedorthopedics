import { Suspense } from 'react'
import type { Metadata } from 'next'
import BlogsPageClient from '@/components/BlogsPageClient.client'

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
    <Suspense>
      <BlogsPageClient />
    </Suspense>
  )
}
