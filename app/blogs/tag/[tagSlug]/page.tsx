// app/blogs/tag/[tagSlug]/page.tsx
import { Suspense } from 'react'
import TagBlogPageClient from '@/components/TagBlogPageClient.client'

const VALID_TAG_SLUGS = [
  "back-pain", "neck-pain", "joint-care", "spinal-surgery",
  "sports-injury", "recovery", "minimally-invasive",
  "spine", "lower-spine", "neck", "shoulder", "knee", "hand", "foot"
]

export async function generateStaticParams() {
  return VALID_TAG_SLUGS.map((tagSlug) => ({ tagSlug }))
}

export default async function TagBlogPage({
  params,
}: {
  params: Promise<{ tagSlug: string }>
}) {
  const { tagSlug } = await params
  return (
    <Suspense>
      <TagBlogPageClient tagSlug={tagSlug} />
    </Suspense>
  )
}
