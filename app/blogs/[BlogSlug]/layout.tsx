import { ReactNode } from 'react';
import { GetBlogInfo } from '../api/get-blog-info'
import type { Metadata, ResolvingMetadata } from "next";
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import StaticNav from "@/components/StaticNav.server";
import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

export async function generateMetadata(
  { params }: { params: Promise<{ BlogSlug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = await GetBlogInfo(resolvedParams.BlogSlug);

  if (!blog) {
    const canonicalUrl = buildCanonical(`/blogs/${resolvedParams.BlogSlug}`);
    return {
      title: "Blog Not Found | Mountain Spine & Orthopedics",
      description: "This blog post may have been deleted or is not available.",
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  const info = blog.blog_info;
  const canonicalUrl = buildCanonical(`/blogs/${blog.slug}`);
  const ogImage = getOgImageForPath('/blogs');
  
  return {
    title: info.metaTitle || `${info.title} | Mountain Spine & Orthopedics`,
    description: info.metaDescription || info.desc,
    keywords: info.keywords || [],
    openGraph: {
      title: info.metaTitle || `${info.title} | Mountain Spine & Orthopedics`,
      description: info.metaDescription || info.desc,
      type: "article",
      url: canonicalUrl,
      publishedTime: blog.created_at,
      modifiedTime: blog.modified_at,
      authors: info.author,
      tags: info.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: info.title,
          type: "image/png"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: info.metaTitle || info.title,
      description: info.metaDescription || info.desc,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl
    }
  };
}

export default async function BlogLayout({
  children,
  params
}: {
  children: ReactNode,
  params: Promise<{ BlogSlug: string }>
}) {
  const resolvedParams = await params;
  const blog = await GetBlogInfo(resolvedParams.BlogSlug);
  if (!blog) return notFound();
  const info = blog.blog_info;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": info.metaTitle || info.title,
    "description": info.metaDescription || info.desc,
    "image": info.img,
    "author": {
      "@type": "Person",
      "name": info.author
    },
    "datePublished": blog.created_at,
    "dateModified": blog.modified_at,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mountainspineorthopedics.com/blogs/${blog.slug}`
    },
    "keywords": info.keywords?.join(", ") || undefined,
    "articleSection": info.tags?.join(", ") || undefined
  };
  return (
    <>
      <StaticNav />
      {children}
    </>
  );
}
