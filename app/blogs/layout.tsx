import { ReactNode } from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import StaticNav from "@/components/StaticNav.server";
import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import { GetBlogsPaginated } from "./api/get-blogs";

// Define tag → metadata mapping (optional, you can expand with descriptions)
const TAG_METADATA: Record<string, { title: string; desc: string }> = {
  "Back Pain": {
    title: "Back Pain Blogs | Mountain Spine & Orthopedics",
    desc: "Read expert articles and recovery advice on back pain, spinal health, and orthopedic treatments."
  },
  "Neck Pain": {
    title: "Neck Pain Blogs | Mountain Spine & Orthopedics",
    desc: "Learn about causes, treatments, and prevention strategies for neck pain from our orthopedic specialists."
  },
  "Joint Care": {
    title: "Joint Care Blogs | Mountain Spine & Orthopedics",
    desc: "Explore orthopedic tips, joint care insights, and minimally invasive treatment updates."
  },
  "Spinal Surgery": {
    title: "Spinal Surgery Blogs | Mountain Spine & Orthopedics",
    desc: "Discover the latest news and patient education on spinal surgery techniques and recovery."
  },
  "Sports Injury": {
    title: "Sports Injury Blogs | Mountain Spine & Orthopedics",
    desc: "Articles on prevention, diagnosis, and treatment of common orthopedic sports injuries."
  },
  "Recovery": {
    title: "Recovery Blogs | Mountain Spine & Orthopedics",
    desc: "Guides and advice for safe recovery from orthopedic surgery and minimally invasive treatments."
  },
  "Minimally Invasive": {
    title: "Minimally Invasive Orthopedic Blogs | Mountain Spine & Orthopedics",
    desc: "Learn about minimally invasive orthopedic procedures, benefits, and patient outcomes."
  }
};

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const url = new URL(headersList.get("x-url") || "https://mountainspineorthopedics.com/blogs");
  const tag = url.searchParams.get("tag");
  const page = parseInt(url.searchParams.get("page") || "1", 10);

  let title = "Orthopedic Blog | Mountain Spine & Orthopedics";
  let description =
    "Stay updated with the latest orthopedic articles, spine health insights, and minimally invasive treatment updates from Mountain Spine & Orthopedics.";
  
  if (tag && TAG_METADATA[tag]) {
    title = TAG_METADATA[tag].title;
    description = TAG_METADATA[tag].desc;
  } else if (tag) {
    title = `${tag} Blogs | Mountain Spine & Orthopedics`;
    description = `Read expert blog posts and resources about ${tag} from our orthopedic specialists in Florida.`;
  }

  // Canonical is now page-specific
  const canonicalUrl = buildCanonical(`/blogs${tag ? `?tag=${encodeURIComponent(tag)}` : ""}${page > 1 ? `&page=${page}` : ""}`);
  const ogImage = getOgImageForPath("/blogs");

  // Build pagination links
  const baseUrl = `/blogs${tag ? `?tag=${encodeURIComponent(tag)}` : ""}`;
  const alternates: any = {
    canonical: canonicalUrl
  };

  // Add prev/next links for pagination
  if (page > 1) {
    alternates.prev = buildCanonical(`${baseUrl}${page === 2 ? "" : `&page=${page - 1}`}`);
  }
  
  // Check if there are more pages by fetching total count
  try {
    const { total } = await GetBlogsPaginated(page, 6, tag || undefined);
    const totalPages = Math.ceil((total || 0) / 6);
    
    if (page < totalPages) {
      alternates.next = buildCanonical(`${baseUrl}&page=${page + 1}`);
    }
  } catch (error) {
    console.error("Error fetching blog count for pagination:", error);
    // Continue without next link if there's an error
  }

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      siteName: "Mountain Spine & Orthopedics",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    }
  };
}

export default async function BlogLayout({ children }: { children: ReactNode }) {
  const headersList = await headers();
  const url = new URL(headersList.get("x-url") || "https://mountainspineorthopedics.com/blogs");
  const tag = url.searchParams.get("tag");
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const perPage = 6;

  const canonicalUrl = `https://mountainspineorthopedics.com/blogs${tag ? `?tag=${encodeURIComponent(tag)}` : ""}${page > 1 ? `&page=${page}` : ""}`;

  // --- Blog schema ---
  const blogSchema: any = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": tag ? `${tag} Blogs` : "Orthopedic Blog",
    "description": tag
      ? `Collection of expert blog posts about ${tag} from Mountain Spine & Orthopedics.`
      : "Official orthopedic blog from Mountain Spine & Orthopedics with updates on treatments, spine health, and recovery.",
    "url": canonicalUrl,
    "inLanguage": "en-US",
    "dateModified": new Date().toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "Mountain Spine & Orthopedics",
      "url": "https://mountainspineorthopedics.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mountainspineortho.b-cdn.net/logoSearch.png"
      }
    }
  };

  if (tag) {
    blogSchema.about = {
      "@type": "MedicalSpecialty",
      "name": tag
    };
  }

  // --- Breadcrumb schema ---
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
      }
    ]
  };

  if (tag) {
    breadcrumbSchema.itemListElement.push({
      "@type": "ListItem",
      "position": 3,
      "name": tag,
      "item": canonicalUrl
    });
  }

  if (page > 1) {
    breadcrumbSchema.itemListElement.push({
      "@type": "ListItem",
      "position": tag ? 4 : 3,
      "name": `Page ${page}`,
      "item": canonicalUrl
    });
  }

  // --- ItemList schema with pagination context ---
  let blogs: any[] = [];
  let total = 0;
  
  try {
    const result = await GetBlogsPaginated(page, perPage, tag || undefined);
    blogs = result.data || [];
    total = result.total || 0;
  } catch (error) {
    console.error("Error fetching blogs for schema:", error);
    // Use empty arrays as fallback
  }
  
  const startIndex = (page - 1) * perPage + 1;

  const itemListSchema: any = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "url": canonicalUrl,
    "numberOfItems": blogs?.length || 0,   // items on this page
    "totalItems": total || 0,              // total blog posts
    "startIndex": startIndex,
    "itemListOrder": "Descending",
    "itemListElement": blogs?.map((post: any, idx: number) => ({
      "@type": "ListItem",
      "position": startIndex + idx,
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
          "name": post.blog_info?.author || "Mountain Spine & Orthopedics",
          "jobTitle": "Orthopedic Surgeon"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Mountain Spine & Orthopedics",
          "url": "https://mountainspineorthopedics.com"
        },
        "image": post.blog_info?.img,
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2"],
          "xpath": ["/html/head/title", "//h1", "//h2"]
        }
      }
    }))
  };

  return (
    <>
      <StaticNav />
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
