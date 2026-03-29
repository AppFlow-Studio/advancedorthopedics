import { Suspense } from 'react'
import BlogsPageClient from '@/components/BlogsPageClient.client'

export default function BlogsPage() {
  return (
    <Suspense>
      <BlogsPageClient />
    </Suspense>
  )
}
