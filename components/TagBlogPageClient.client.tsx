'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import ContactUsSection from '@/components/ContactUsSection'
import BlogPostCard from '@/components/BlogPostCard'
import BlogSearchBar from '@/components/BlogSearchBar'
import BlogCardSkeleton from '@/components/BlogCardSkeleton'
import FadeInCard from '@/components/FadeInCard'
import SkipLinks from '@/components/SkipLinks'
import EmptyState from '@/components/EmptyState'
import { GetBlogSearchIndex, GetBlogsPaginated, type BlogSearchItem } from '@/app/blogs/api/get-blogs'

const PER_PAGE = 6

// Tag slug to display name mapping (including anatomical tags)
const TAG_SLUG_MAP: Record<string, string> = {
  // Blog-specific tags
  "back-pain": "Back Pain",
  "neck-pain": "Neck Pain",
  "joint-care": "Joint Care",
  "spinal-surgery": "Spinal Surgery",
  "sports-injury": "Sports Injury",
  "recovery": "Recovery",
  "minimally-invasive": "Minimally Invasive",
  // Anatomical tags from conditions/treatments
  "spine": "Spine",
  "lower-spine": "Lower Spine",
  "neck": "Neck",
  "shoulder": "Shoulder",
  "knee": "Knee",
  "hand": "Hand",
  "foot": "Foot"
}

interface Props {
  tagSlug: string
}

export default function TagBlogPageClient({ tagSlug }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentPage = Math.max(1, parseInt(searchParams.get('page') || '1', 10))

  const tagDisplayName = TAG_SLUG_MAP[tagSlug]
  const currentTag = tagDisplayName || undefined

  const [blogs, setBlogs] = useState<any[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [searchIndex, setSearchIndex] = useState<BlogSearchItem[]>([])

  // Redirect if invalid tag slug
  useEffect(() => {
    if (!tagDisplayName) {
      router.push('/blogs')
      return
    }
  }, [tagDisplayName, router])

  // Fetch paginated blogs with tag filter
  useEffect(() => {
    if (!tagDisplayName) return

    let mounted = true
    setLoading(true)
    ;(async () => {
      const { data, total } = await GetBlogsPaginated(currentPage, PER_PAGE, currentTag)
      if (!mounted) return
      setBlogs(data)
      setTotal(total)
      setLoading(false)
    })()
    return () => { mounted = false }
  }, [currentPage, currentTag, tagDisplayName])

  // Load lightweight search index
  useEffect(() => {
    let mounted = true
    ;(async () => {
      const idx = await GetBlogSearchIndex(120)
      if (!mounted) return
      setSearchIndex(idx)
    })()
    return () => { mounted = false }
  }, [])

  const totalPages = useMemo(() => Math.max(1, Math.ceil(total / PER_PAGE)), [total])

  const goToPage = (p: number) => {
    const clamped = Math.min(Math.max(p, 1), totalPages)
    const qp = new URLSearchParams(searchParams)
    qp.set('page', String(clamped))
    router.push(`/blogs/tag/${tagSlug}?${qp.toString()}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSearchSelect = (item: BlogSearchItem) => {
    router.push(`/blogs/${item.slug}`)
  }

  const handleSearchClear = () => {}

  if (!tagDisplayName) {
    return null // Will redirect
  }

  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
      <SkipLinks />

      {/* Hero */}
      <section className="w-full relative overflow-hidden">
        <Image
          src={'/herosectionimg.jpg'}
          priority
          fill
          className="h-full absolute top-0 object-cover w-full"
          alt="Mountain Spine & Orthopedics"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 to-white/20 z-10" />
        <div className="z-20 relative text-center py-20">
          <h1 className="text-3xl sm:text-6xl font-public-sans font-semibold text-[#252932]">
            {tagDisplayName} Blog
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[#424959] max-w-2xl mx-auto">
            Expert orthopedic insights, recovery tips, and treatment news about {tagDisplayName.toLowerCase()}
          </p>
        </div>
      </section>

      {/* Blog Hub Content */}
      <section className='w-full max-w-[1440px] flex flex-col py-[50px] h-full px-6 xl:px-[40px]'>

        {/* Search */}
        <div className='flex flex-col lg:flex-row justify-between items-start gap-4'>
          <h2 className='text-[#111315] text-4xl font-public-sans font-medium'>
            {tagDisplayName} Articles
          </h2>
          <div className="w-full lg:w-1/3">
            <BlogSearchBar blogs={searchIndex} onSelect={handleSearchSelect} onClear={handleSearchClear} />
          </div>
        </div>

        {/* Back to All Blogs */}
        <div className="mt-6">
          <a
            href="/blogs"
            className="text-blue-600 hover:text-blue-800 underline text-sm"
          >
            ← Back to All Blogs
          </a>
        </div>

        {/* Blog Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8'>
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
              <BlogCardSkeleton key={idx} />
            ))
            : blogs.length === 0 ? (
              <div className="col-span-full">
                <EmptyState type="no-blogs" />
              </div>
            ) : blogs.map((item: any, index: number) => (
              <FadeInCard key={item.id} delay={index * 0.1}>
                <BlogPostCard
                  BlogInfo={item.blog_info}
                  backgroundcolor="white"
                  id={item.id}
                  slug={item.slug}
                />
              </FadeInCard>
            ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex flex-col items-center">
            <p className="text-sm text-[#6B7280] mb-3">
              Showing {(currentPage - 1) * PER_PAGE + 1}–
              {Math.min(currentPage * PER_PAGE, total)} of {total} blogs
              {currentTag ? ` for "${currentTag}"` : ""}
            </p>
            <nav className="flex items-center gap-2" aria-label="Pagination">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage <= 1}
                className="px-3 h-10 rounded-full border border-[#D6DAE1] disabled:opacity-40"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1
                return (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`w-10 h-10 rounded-full border ${
                      p === currentPage ? "border-[#2358AC] text-[#2358AC]" : "border-[#D6DAE1] text-[#2A2F3A]"
                    }`}
                  >
                    {p}
                  </button>
                )
              })}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="px-3 h-10 rounded-full border border-[#D6DAE1] disabled:opacity-40"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </section>

      <ContactUsSection />
    </main>
  )
}
