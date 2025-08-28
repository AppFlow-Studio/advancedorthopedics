'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import type { BlogPostProp } from './BlogPostCard'

type Props = {
    blog: BlogPostProp
    slug: string
    onClick?: () => void
}

export default function NavCompactBlogCard({ blog, slug, onClick }: Props) {
    return (
        <Link
            href={`/blogs/${slug}`}
            onClick={onClick}
            className="group block w-full rounded-2xl overflow-hidden border border-black/10 bg-white hover:shadow-md transition-shadow duration-200"
        >
            {/* Image */}
            <div className="relative h-[140px] w-full overflow-hidden">
                <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute right-3 bottom-3 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7" stroke="#0A50EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 7H17V15" stroke="#0A50EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
            </div>

            {/* Text */}
            <div className="p-3">
                <h4
                    className="text-[15px] leading-snug text-[#0C1420] line-clamp-2"
                    style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 600 }}
                >
                    {blog.title}
                </h4>
                <p
                    className="mt-1 text-xs text-[#424959] line-clamp-2"
                    style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
                >
                    {blog.desc}
                </p>
            </div>
        </Link>
    )
}


