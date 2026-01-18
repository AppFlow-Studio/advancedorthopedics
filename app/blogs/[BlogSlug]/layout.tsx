import { ReactNode } from 'react';
import { GetBlogInfo } from '../api/get-blog-info'
import type { Metadata, ResolvingMetadata } from "next";
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import { detectFAQContent, generateFAQPageSchema } from "@/lib/faq-utils";
import { calculateContentStats } from "@/lib/blog-utils";

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
  // Use specific blog post image for social sharing (better CTR)
  const blogImage = info.img || getOgImageForPath('/blogs');
  
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
          url: blogImage,
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
      images: [blogImage],
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
  const canonicalUrl = buildCanonical(`/blogs/${blog.slug}`);
  const blogHubUrl = buildCanonical('/blogs');
  
  // Detect FAQ content
  const faqs = detectFAQContent(blog);
  
  // Calculate word count and reading time for schema
  const contentStats = calculateContentStats(blog);
  
  // Normalize author name to "Mountain Spine Orthopedics" (consistent, no ampersand)
  const normalizedAuthorName = "Mountain Spine Orthopedics";
  
  // Ensure dateModified is full ISO timestamp format for optimal SEO
  // If modified_at is just a date (no time), convert to full ISO timestamp
  let dateModified = blog.modified_at || blog.created_at;
  if (dateModified && !dateModified.includes('T')) {
    // If it's just a date like "2026-01-11", append time component
    dateModified = `${dateModified}T00:00:00.000Z`;
  }
  // Ensure datePublished is also full ISO timestamp
  let datePublished = blog.created_at;
  if (datePublished && !datePublished.includes('T')) {
    datePublished = `${datePublished}T00:00:00.000Z`;
  }
  
  // BlogPosting schema with enhanced properties
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": info.metaTitle || info.title,
    "description": info.metaDescription || info.desc,
    "image": info.img,
    "author": {
      "@type": "Organization",
      "name": normalizedAuthorName,
      "url": "https://mountainspineorthopedics.com",
      "sameAs": [
        "https://mountainspineorthopedics.com/about",
        "https://mountainspineorthopedics.com/about/meetourdoctors"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mountain Spine & Orthopedics",
      "url": "https://mountainspineorthopedics.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mountainspineortho.b-cdn.net/logoSearch.png",
        "width": 500,
        "height": 500
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "inLanguage": "en-US",
    "wordCount": contentStats.wordCount,
    "timeRequired": contentStats.timeRequired,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "isPartOf": {
      "@type": "Blog",
      "@id": blogHubUrl,
      "name": "Orthopedic Blog",
      "url": blogHubUrl
    },
    "keywords": info.keywords?.join(", ") || undefined,
    "articleSection": info.tags?.join(", ") || undefined,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2"],
      "xpath": ["/html/head/title", "//h1", "//h2"]
    }
  };
  
  // BreadcrumbList schema for individual blog posts
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mountainspineorthopedics.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": blogHubUrl
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": info.title,
        "item": canonicalUrl
      }
    ]
  };
  
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQPageSchema(faqs, canonicalUrl)) }}
        />
      )}
    </>
  );
}
