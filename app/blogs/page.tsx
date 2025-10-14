'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import ContactUsSection from '@/components/ContactUsSection'
import BlogPostCard from '@/components/BlogPostCard'
import BlogSearchBar from '@/components/BlogSearchBar'
import BlogCardSkeleton from '@/components/BlogCardSkeleton'
import FadeInCard from '@/components/FadeInCard'
import SkipLinks from '@/components/SkipLinks'
import EmptyState from '@/components/EmptyState'
import { GetBlogSearchIndex, GetBlogsPaginated, type BlogSearchItem } from './api/get-blogs'

const PER_PAGE = 6


export default function Blogs() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentPage = Math.max(1, parseInt(searchParams.get('page') || '1', 10))

  const [blogs, setBlogs] = useState<any[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [searchIndex, setSearchIndex] = useState<BlogSearchItem[]>([])

  // Fetch paginated blogs
    useEffect(() => {
    let mounted = true
        setLoading(true)
    ;(async () => {
      const { data, total } = await GetBlogsPaginated(currentPage, PER_PAGE)
      if (!mounted) return
      setBlogs(data)
      setTotal(total)
            setLoading(false)
    })()
    return () => { mounted = false }
  }, [currentPage])

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
    router.push(`/blogs?${qp.toString()}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSearchSelect = (item: BlogSearchItem) => {
    router.push(`/blogs/${item.slug}`)
  }

  const handleSearchClear = () => {}

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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/30 to-white z-10" />
        <div className="z-20 relative text-center py-20">
          <h1 className="text-3xl sm:text-6xl font-public-sans font-semibold text-[#252932]">Spine Wellness Blog</h1>
          <p className="mt-4 text-lg sm:text-xl text-[#424959] max-w-2xl mx-auto">
            Expert orthopedic insights, recovery tips, and minimally invasive treatment news
          </p>
                </div>
            </section>

      {/* Blog Hub Content */}
      <section id="main-content" className='w-full max-w-[1440px] flex flex-col py-[50px] h-full px-6 xl:px-[40px]'>

        {/* Search + Tag Filters */}
        <div className='flex flex-col lg:flex-row justify-between items-start gap-4'>
          <h2 className='text-[#111315] text-4xl font-public-sans font-medium'>
            Our Latest Blogs
          </h2>
          <div id="search" className="w-full lg:w-1/3">
            <BlogSearchBar blogs={searchIndex} onSelect={handleSearchSelect} onClear={handleSearchClear} />
                </div>
                </div>


        {/* Blog Grid - Mobile Optimized */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8'>
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

        {/* Pagination - Mobile Optimized */}
        {totalPages > 1 && (
          <div className="mt-8 md:mt-10 flex flex-col items-center px-4 md:px-0">
            <p className="text-sm text-[#6B7280] mb-4 text-center leading-relaxed">
              Showing {(currentPage - 1) * PER_PAGE + 1}–
              {Math.min(currentPage * PER_PAGE, total)} of {total} blogs
            </p>
            <nav className="flex items-center gap-2 md:gap-3 flex-wrap justify-center" aria-label="Pagination">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage <= 1}
                className="px-4 py-3 h-12 min-w-[60px] rounded-full border border-[#D6DAE1] disabled:opacity-40 text-sm font-medium touch-manipulation"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1
                return (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`w-12 h-12 min-w-[48px] rounded-full border text-sm font-medium touch-manipulation ${
                      p === currentPage ? "border-[#2358AC] text-[#2358AC] bg-blue-50" : "border-[#D6DAE1] text-[#2A2F3A] hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </button>
                )
              })}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="px-4 py-3 h-12 min-w-[60px] rounded-full border border-[#D6DAE1] disabled:opacity-40 text-sm font-medium touch-manipulation"
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