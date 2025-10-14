// app/blogs/tag/[tagSlug]/layout.tsx
import { ReactNode } from "react";
import type { Metadata } from "next";
import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import { GetBlogsPaginated } from "../../api/get-blogs";

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

// Tag-specific metadata
const TAG_METADATA: Record<string, { title: string; desc: string }> = {
  // Blog-specific tags
  "Back Pain": {
    title: "Back Pain Blogs | Mountain Spine & Orthopedics",
    desc: "Expert Florida orthopedic insights about Back Pain treatments, recovery, and care."
  },
  "Neck Pain": {
    title: "Neck Pain Blogs | Mountain Spine & Orthopedics", 
    desc: "Expert Florida orthopedic insights about Neck Pain treatments, recovery, and care."
  },
  "Joint Care": {
    title: "Joint Care Blogs | Mountain Spine & Orthopedics",
    desc: "Expert Florida orthopedic insights about Joint Care treatments, recovery, and care."
  },
  "Spinal Surgery": {
    title: "Spinal Surgery Blogs | Mountain Spine & Orthopedics",
    desc: "Expert Florida orthopedic insights about Spinal Surgery treatments, recovery, and care."
  },
  "Sports Injury": {
    title: "Sports Injury Blogs | Mountain Spine & Orthopedics",
    desc: "Expert Florida orthopedic insights about Sports Injury treatments, recovery, and care."
  },
  "Recovery": {
    title: "Recovery Blogs | Mountain Spine & Orthopedics",
    desc: "Expert Florida orthopedic insights about Recovery treatments, recovery, and care."
  },
  "Minimally Invasive": {
    title: "Minimally Invasive Orthopedic Blogs | Mountain Spine & Orthopedics",
    desc: "Expert Florida orthopedic insights about Minimally Invasive treatments, recovery, and care."
  },
  // Anatomical tags from conditions/treatments
  "Spine": {
    title: "Spine Condition Blogs | Mountain Spine & Orthopedics",
    desc: "Expert Florida orthopedic insights about Spine conditions, treatments, and care."
  },
  "Lower Spine": {
    title: "Lower Spine Blogs | Mountain Spine & Orthopedics",
    desc: "Expert Florida orthopedic insights about Lower Spine conditions, treatments, and care."
  },
  "Neck": {
    title: "Neck Condition Blogs | Mountain Spine & Orthopedics",
    desc: "Expert Florida orthopedic insights about Neck conditions, treatments, and care."
  },
  "Shoulder": {
    title: "Shoulder Condition Blogs | Mountain Spine & Orthopedics",
    desc: "Expert Florida orthopedic insights about Shoulder conditions, treatments, and care."
  },
  "Knee": {
    title: "Knee Condition Blogs | Mountain Spine & Orthopedics",
    desc: "Expert Florida orthopedic insights about Knee conditions, treatments, and care."
  },
  "Hand": {
    title: "Hand Condition Blogs | Mountain Spine & Orthopedics",
    desc: "Expert Florida orthopedic insights about Hand conditions, treatments, and care."
  },
  "Foot": {
    title: "Foot Condition Blogs | Mountain Spine & Orthopedics",
    desc: "Expert Florida orthopedic insights about Foot conditions, treatments, and care."
  }
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ tagSlug: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const tagDisplayName = TAG_SLUG_MAP[resolvedParams.tagSlug];
  
  if (!tagDisplayName) {
    return {
      title: "Tag Not Found | Mountain Spine & Orthopedics",
      description: "This tag page could not be found.",
    };
  }

  const tagMetadata = TAG_METADATA[tagDisplayName];
  const canonicalUrl = buildCanonical(`/blogs/tag/${resolvedParams.tagSlug}`);
  const ogImage = getOgImageForPath("/blogs");

  return {
    title: tagMetadata.title,
    description: tagMetadata.desc,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: tagMetadata.title,
      description: tagMetadata.desc,
      url: canonicalUrl,
      type: "website",
      siteName: "Mountain Spine & Orthopedics",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: tagMetadata.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: tagMetadata.title,
      description: tagMetadata.desc,
      images: [ogImage]
    }
  };
}

export default async function TagBlogLayout({ 
  children, 
  params 
}: { 
  children: ReactNode,
  params: Promise<{ tagSlug: string }>
}) {
  const resolvedParams = await params;
  const tagDisplayName = TAG_SLUG_MAP[resolvedParams.tagSlug];
  
  if (!tagDisplayName) {
    return (
      <>
        {children}
      </>
    );
  }

  const canonicalUrl = `https://mountainspineorthopedics.com/blogs/tag/${resolvedParams.tagSlug}`;

  // Blog schema for tag page
  const blogSchema: any = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": `${tagDisplayName} Blogs`,
    "description": `Collection of expert blog posts about ${tagDisplayName} from Mountain Spine & Orthopedics.`,
    "url": canonicalUrl,
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Organization",
      "name": "Mountain Spine & Orthopedics",
      "url": "https://mountainspineorthopedics.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mountainspineortho.b-cdn.net/logoSearch.png"
      }
    },
    "about": {
      "@type": "MedicalSpecialty",
      "name": tagDisplayName
    }
  };

  // Breadcrumb schema
  const breadcrumbSchema: any = {
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
        "item": "https://mountainspineorthopedics.com/blogs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": tagDisplayName,
        "item": canonicalUrl
      }
    ]
  };

  // ItemList schema
  const { data: blogs, total } = await GetBlogsPaginated(1, 6, tagDisplayName);
  const itemListSchema: any = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "url": canonicalUrl,
    "numberOfItems": blogs?.length || 0,
    "totalItems": total || 0,
    "startIndex": 1,
    "itemListOrder": "Descending",
    "itemListElement": blogs?.map((post: any, idx: number) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://mountainspineorthopedics.com/blogs/${post.slug}`,
      "item": {
        "@type": "BlogPosting",
        "headline": post.blog_info?.title,
        "description": post.blog_info?.desc,
        "url": `https://mountainspineorthopedics.com/blogs/${post.slug}`,
        "datePublished": post.created_at,
        "dateModified": post.modified_at || post.created_at,
        "author": {
          "@type": "Person",
          "name": post.blog_info?.author || "Mountain Spine & Orthopedics"
        },
        "image": post.blog_info?.img
      }
    }))
  };

  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}
