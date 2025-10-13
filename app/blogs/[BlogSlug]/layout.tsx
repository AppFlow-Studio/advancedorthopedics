import { ReactNode } from 'react';
import { GetBlogInfo } from '../api/get-blog-info'
import type { Metadata, ResolvingMetadata } from "next";
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import { detectFAQContent, generateFAQPageSchema } from "@/lib/faq-utils";

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
  
  // Detect FAQ content
  const faqs = detectFAQContent(blog);
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": info.metaTitle || info.title,
    "description": info.metaDescription || info.desc,
    "image": info.img,
    "author": info.author && info.author !== "Mountain Spine & Orthopedics" ? {
      "@type": "Person",
      "name": info.author,
      "jobTitle": "Orthopedic Surgeon"
    } : {
      "@type": "Organization",
      "name": "Mountain Spine & Orthopedics",
      "url": "https://mountainspineorthopedics.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mountain Spine & Orthopedics",
      "url": "https://mountainspineorthopedics.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mountainspineortho.b-cdn.net/logoSearch.png"
      }
    },
    "datePublished": blog.created_at,
    "dateModified": blog.modified_at || blog.created_at,
    "inLanguage": "en-US",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "keywords": info.keywords?.join(", ") || undefined,
    "articleSection": info.tags?.join(", ") || undefined,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2"],
      "xpath": ["/html/head/title", "//h1", "//h2"]
    }
  };
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
