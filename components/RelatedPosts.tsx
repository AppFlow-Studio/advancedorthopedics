// components/RelatedPosts.tsx
'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GetBlogsPaginated } from '@/app/blogs/api/get-blogs'

interface RelatedPostsProps {
  currentSlug: string
  currentTags: string[]
}

export default function RelatedPosts({ currentSlug, currentTags }: RelatedPostsProps) {
  const [relatedPosts, setRelatedPosts] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        // Get posts with similar tags
        const { data } = await GetBlogsPaginated(1, 10)
        
        // Filter out current post and find posts with matching tags
        const filtered = data
          ?.filter((post: any) => post.slug !== currentSlug)
          ?.filter((post: any) => {
            const postTags = post.blog_info?.tags || []
            const currentTagsLower = currentTags.map(t => t.toLowerCase())
            
            // Check for exact matches
            const exactMatches = postTags.some((tag: string) => 
              currentTagsLower.includes(tag.toLowerCase())
            )
            
            // Check for anatomical tag matches (e.g., "Back Pain" matches "Spine", "Lower Spine")
            const anatomicalMatches = postTags.some((tag: string) => {
              const tagLower = tag.toLowerCase()
              return currentTagsLower.some(currentTag => {
                // Back Pain -> Spine, Lower Spine
                if (currentTag.includes('back') && (tagLower.includes('spine') || tagLower.includes('lumbar'))) return true
                // Neck Pain -> Neck, Cervical
                if (currentTag.includes('neck') && (tagLower.includes('neck') || tagLower.includes('cervical'))) return true
                // Joint Care -> Knee, Shoulder, Hand, Foot
                if (currentTag.includes('joint') && (tagLower.includes('knee') || tagLower.includes('shoulder') || tagLower.includes('hand') || tagLower.includes('foot'))) return true
                // Sports Injury -> Shoulder, Knee, Hand, Foot
                if (currentTag.includes('sports') && (tagLower.includes('shoulder') || tagLower.includes('knee') || tagLower.includes('hand') || tagLower.includes('foot'))) return true
                return false
              })
            })
            
            return exactMatches || anatomicalMatches
          })
          ?.slice(0, 3) || []

        setRelatedPosts(filtered)
      } catch (error) {
        console.error('Error fetching related posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRelatedPosts()
  }, [currentSlug, currentTags])

  if (loading) {
    return (
      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-[#111315] mb-6">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="bg-gray-100 animate-pulse rounded-lg h-32" />
          ))}
        </div>
      </section>
    )
  }

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="mt-12">
      <h3 className="text-2xl font-semibold text-[#111315] mb-6">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedPosts.map((post: any) => (
          <article key={post.id} className="bg-white rounded-lg border border-[#EAEDF1] overflow-hidden hover:border-[#C7D7FF] transition-colors">
            <Link href={`/blogs/${post.slug}`} className="block">
              <div className="relative h-24">
                <Image
                  src={post.blog_info.img}
                  alt={post.blog_info.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h4 className="text-sm font-semibold text-[#111315] line-clamp-2 mb-2">
                  {post.blog_info.title}
                </h4>
                <p className="text-xs text-gray-500">
                  {new Date(post.created_at).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
