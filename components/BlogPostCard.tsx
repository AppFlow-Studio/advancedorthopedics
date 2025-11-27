import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

export interface BlogFAQItem {
    question: string
    answer: string
}

export interface BlogPostProp {
    title: string
    desc: string
    img: string
    tags: string[]
    id: string
    keywords: string[]
    author: string
    date: string
    metaTitle?: string
    metaDescription?: string
    slug: string
    modified_at?: string
    featured?: boolean
    faqs?: BlogFAQItem[]
    blog_info: {
        header: string,
        body: string,
        video: string | undefined,
        sub_stories: {
            header: string,
            body: string,
            video: string | undefined,
            img: string | undefined,
        }[]
    }[]
}

export interface supabaseBlogPostProp {
    created_at: string
    modified_at: string
    id: string
    blog_info: BlogPostProp
    slug: string
}

function truncateString(str: string, maxLength = 120) {
    if (!str) return ''
    if (str.length <= maxLength) return str
    return str.slice(0, maxLength) + '…'
}

// Internal link mapping based on anatomical tags from conditions/treatments
function getInternalLinks(tags: string[]): { url: string; text: string }[] {
    const linkMap: Record<string, { url: string; text: string }[]> = {
        // Blog tags mapped to anatomical conditions/treatments (ONLY VERIFIED PAGES)
        "Back Pain": [
            { url: "/area-of-specialty/degenerative-disc-disease", text: "Degenerative Disc Disease" },
            { url: "/area-of-specialty/lumbar-herniated-disc", text: "Herniated Disc Treatment" },
            { url: "/treatments/back-pain-treatment", text: "Back Pain Treatment" }
        ],
        "Neck Pain": [
            { url: "/area-of-specialty/cervical-spinal-stenosis", text: "Cervical Stenosis" },
            { url: "/area-of-specialty/cervical-herniated-disc", text: "Cervical Disc Treatment" },
            { url: "/treatments/acdf-surgery", text: "ACDF Surgery" }
        ],
        "Joint Care": [
            { url: "/area-of-specialty/arthritis", text: "Arthritis Treatment" },
            { url: "/treatments/total-knee-replacement", text: "Knee Replacement" },
            { url: "/treatments/total-hip-replacement", text: "Hip Replacement" }
        ],
        "Spinal Surgery": [
            { url: "/treatments/spinal-fusion", text: "Spinal Fusion Surgery" },
            { url: "/treatments/motion-preservation-spine-surgery", text: "Motion Preservation" },
            { url: "/area-of-specialty/spinal-stenosis", text: "Spinal Stenosis" }
        ],
        "Sports Injury": [
            { url: "/area-of-specialty/rotator-cuff-tear", text: "Rotator Cuff Repair" },
            { url: "/treatments/arthroscopic-knee-surgery", text: "Arthroscopic Surgery" },
            { url: "/area-of-specialty/acl-injury", text: "ACL Injury Treatment" }
        ],
        "Recovery": [
            { url: "/treatments/non-surgical-treatments-for-pain-management", text: "Pain Management" },
            { url: "/treatments/back-pain-treatment", text: "Back Pain Treatment" }
        ],
        "Minimally Invasive": [
            { url: "/treatments/endoscopic-discectomy-surgery", text: "Endoscopic Discectomy" },
            { url: "/treatments/motion-preservation-spine-surgery", text: "Motion Preservation" },
            { url: "/treatments/lumbar-microendoscopic-discectomy-surgery", text: "Microendoscopic Surgery" }
        ],
        // Direct anatomical tag mappings (from conditions/treatments data) - ONLY VERIFIED PAGES
        "Spine": [
            { url: "/area-of-specialty/spinal-stenosis", text: "Spinal Stenosis" },
            { url: "/treatments/spinal-fusion", text: "Spinal Fusion" },
            { url: "/area-of-specialty/degenerative-disc-disease", text: "Disc Disease" }
        ],
        "Lower Spine": [
            { url: "/area-of-specialty/spinal-stenosis", text: "Spinal Stenosis" },
            { url: "/area-of-specialty/sciatica", text: "Sciatica Treatment" },
            { url: "/treatments/lumbar-fusion-surgery", text: "Lumbar Fusion" }
        ],
        "Neck": [
            { url: "/area-of-specialty/cervical-spinal-stenosis", text: "Cervical Stenosis" },
            { url: "/area-of-specialty/cervical-herniated-disc", text: "Cervical Disc" },
            { url: "/treatments/acdf-surgery", text: "ACDF Surgery" }
        ],
        "Shoulder": [
            { url: "/area-of-specialty/rotator-cuff-tear", text: "Rotator Cuff Repair" },
            { url: "/area-of-specialty/shoulder-arthritis", text: "Shoulder Arthritis" },
            { url: "/treatments/resurfacing-shoulder-replacement", text: "Shoulder Replacement" }
        ],
        "Knee": [
            { url: "/area-of-specialty/torn-meniscus", text: "Torn Meniscus" },
            { url: "/treatments/total-knee-replacement", text: "Knee Replacement" },
            { url: "/area-of-specialty/acl-injury", text: "ACL Injury" }
        ],
        "Hand": [
            { url: "/area-of-specialty/carpal-tunnel-syndrome", text: "Carpal Tunnel" },
            { url: "/area-of-specialty/tennis-elbow", text: "Tennis Elbow" },
            { url: "/treatments/carpal-tunnel-release", text: "Carpal Tunnel Surgery" }
        ],
        "Foot": [
            { url: "/area-of-specialty/plantar-fasciitis", text: "Plantar Fasciitis" },
            { url: "/area-of-specialty/bunions-hallux-valgus", text: "Bunion Treatment" },
            { url: "/area-of-specialty/achilles-tendonitis", text: "Achilles Tendonitis" }
        ]
    }

    const links: { url: string; text: string }[] = []
    
    // Find matching links based on tags (prioritize exact matches, then partial matches)
    tags.forEach(tag => {
        // Direct match
        if (linkMap[tag]) {
            links.push(...linkMap[tag].slice(0, 2))
        } else {
            // Partial match for blog tags that might map to anatomical tags
            const partialMatches = Object.keys(linkMap).filter(key => 
                tag.toLowerCase().includes(key.toLowerCase()) || 
                key.toLowerCase().includes(tag.toLowerCase())
            )
            if (partialMatches.length > 0) {
                links.push(...linkMap[partialMatches[0]].slice(0, 1))
            }
        }
    })

    // Remove duplicates and limit to 3 total
    const uniqueLinks = links.filter((link, index, self) => 
        index === self.findIndex(l => l.url === link.url)
    ).slice(0, 3)

    return uniqueLinks
}

// Convert image URL to WebP if available
function getOptimizedImageUrl(originalUrl: string): string {
    if (!originalUrl) return '/placeholder-blog.jpg'
    
    // If it's already a CDN URL or external URL, return as-is
    if (originalUrl.startsWith('http') || originalUrl.startsWith('https')) {
        return originalUrl
    }
    
    // For local images, try WebP first, fallback to original
    if (originalUrl.includes('.')) {
        const baseUrl = originalUrl.split('.')[0]
        const extension = originalUrl.split('.').pop()
        return `${baseUrl}.webp`
    }
    
    return originalUrl
}

export default function BlogPostCard({
    BlogInfo,
    backgroundcolor = "white",
    id,
    slug
}: { BlogInfo: BlogPostProp, backgroundcolor: string, id: string, slug: string }) {
    const [isHover, setIsHover] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "100px" })
    
    const displayTags = Array.isArray(BlogInfo.tags) ? BlogInfo.tags.slice(0, 2) : []
    const internalLinks = getInternalLinks(BlogInfo.tags || [])
    const optimizedImageUrl = getOptimizedImageUrl(BlogInfo.img)
    
    // Format dates
    const publishedDate = BlogInfo.date ? new Date(BlogInfo.date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    }) : ''
    
    const updatedDate = BlogInfo.modified_at ? new Date(BlogInfo.modified_at).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    }) : ''

    return (
        <motion.article
            ref={ref}
            className="w-full h-full rounded-xl md:rounded-2xl bg-white border border-[#EAEDF1] hover:border-[#C7D7FF] transition-colors relative overflow-hidden flex flex-col"
            whileHover={{ scale: 1.005 }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 z-10 pointer-events-none ${
                isHover ? 'opacity-100' : 'opacity-0'
            }`} style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(255, 255, 255, 0.8) 100%)'
            }} />
            
            {id && (
                <div className="flex flex-col h-full p-3 md:p-4 relative z-20">
                    {/* Image - Fixed height */}
                    <Link href={`/blogs/${slug}`} aria-label={BlogInfo.title} className="block">
                        <div className="w-full h-[160px] md:h-[180px] xl:h-[200px] rounded-xl md:rounded-2xl overflow-hidden bg-[#FAFAFA]">
                            <Image
                                src={optimizedImageUrl}
                                alt={BlogInfo.title}
                                width={800}
                                height={450}
                                className="w-full h-full object-cover"
                                loading={isInView ? "eager" : "lazy"}
                                onLoad={() => setIsLoaded(true)}
                                onError={(e) => {
                                    // Fallback to original image if WebP fails
                                    const target = e.target as HTMLImageElement
                                    if (target.src !== BlogInfo.img) {
                                        target.src = BlogInfo.img
                                    }
                                }}
                            />
                        </div>
                    </Link>

                    {/* Content area with fixed heights for symmetry */}
                    <div className="flex-1 flex flex-col mt-3 md:mt-4">
                        {/* Title - Fixed height */}
                        <div className="h-[48px] md:h-[52px] flex items-start">
                            <Link href={`/blogs/${slug}`} aria-label={BlogInfo.title} className="block w-full">
                                <h3
                                    style={{ fontFamily: "var(--font-public-sans)", fontWeight: 600 }}
                                    className="text-base md:text-[1.1rem] leading-relaxed text-[#111315] line-clamp-2"
                                >
                                    {BlogInfo.title}
                                </h3>
                            </Link>
                        </div>

                        {/* Description - Fixed height */}
                        <div className="h-[60px] md:h-[66px] flex items-start mt-2">
                            <Link href={`/blogs/${slug}`} aria-label={BlogInfo.title} className="block w-full">
                                <p
                                    className={`text-sm md:text-[0.95rem] leading-relaxed ${isHover ? 'text-[#2A2F3A]' : 'text-[#424959]'} line-clamp-3`}
                                    style={{
                                        fontFamily: "var(--font-inter)",
                                        fontWeight: 400
                                    }}
                                >
                                    {BlogInfo.desc}
                                </p>
                            </Link>
                        </div>

                        {/* Internal Links - Fixed height */}
                        <div className="h-[32px] flex items-center mt-2">
                            {internalLinks.length > 0 ? (
                                <div className="text-sm text-blue-700">
                                    <span className="text-gray-600">Related: </span>
                                    {internalLinks.map((link, index) => (
                                        <React.Fragment key={link.url}>
                                            <Link 
                                                href={link.url} 
                                                className="underline hover:text-blue-900 transition-colors"
                                            >
                                                {link.text}
                                            </Link>
                                            {index < internalLinks.length - 1 && <span>, </span>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>

                        {/* Tags - Fixed height */}
                        <div className="h-[40px] flex items-start mt-2">
                            {displayTags.length > 0 && (
                                <div className="flex gap-2 overflow-x-auto flex-nowrap pb-2 scrollbar-hide">
                                    {displayTags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full text-xs bg-[#F3F5F9] text-[#25314B] whitespace-nowrap flex-shrink-0"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Date Information - Fixed height */}
                        <div className="h-[48px] flex items-start mt-2">
                            <div className="text-xs text-gray-500 space-y-1">
                                {publishedDate && (
                                    <div>Published: {publishedDate}</div>
                                )}
                                {updatedDate && updatedDate !== publishedDate && (
                                    <div>Updated: {updatedDate}</div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Read More Button - Always at bottom */}
                    <div className="mt-auto pt-3 md:pt-4">
                        <Link href={`/blogs/${slug}`} className="block">
                            <div className="flex items-center justify-center rounded-full border border-[#252932] text-[#252932] text-sm h-11 md:h-10 touch-manipulation">
                                Read More
                                <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
                                    <path d="M12.3982 0.268483C12.0402 -0.0894963 11.4598 -0.089494 11.1018 0.268488C10.7438 0.62647 10.7438 1.20687 11.1018 1.56485L14.1203 4.58333H1.66667C1.16041 4.58333 0.75 4.99374 0.75 5.5C0.75 6.00626 1.16041 6.41667 1.66667 6.41667H14.1203L11.1018 9.43516C10.7439 9.79314 10.7439 10.3735 11.1019 10.7315C11.4598 11.0895 12.0402 11.0895 12.3982 10.7315L16.9766 6.15303C17.0098 6.11905 17.0254 6.10112 17.0254 6.10112C17.0873 6.02997 17.1365 5.95154 17.1728 5.86885C17.2221 5.75677 17.2496 5.63294 17.25 5.50273L17.25 5.5C17.2489 5.37622 17.2266 5.26602 17.1867 5.16463C17.142 5.05068 17.0736 4.94387 16.9815 4.85178L12.3982 0.268483Z" fill="#252932"/>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </motion.article>
    )
}
