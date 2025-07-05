import { GetBlogInfo } from '../api/get-blog-info'
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ BlogSlug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = await GetBlogInfo(resolvedParams.BlogSlug);

  if (!blog) {
    return {
      title: "Blog Not Found | Mountain Spine & Orthopedics",
      description: "This blog post may have been deleted or is not available.",
    };
  }

  const info = blog.blog_info;
  return {
    title: info.metaTitle || `${info.title} | Mountain Spine & Orthopedics`,
    description: info.metaDescription || info.desc,
    keywords: blog.keywords || [],
    openGraph: {
      title: info.metaTitle || `${info.title} | Mountain Spine & Orthopedics`,
      description: info.metaDescription || info.desc,
      type: "article",
      url: `https://mountainspineorthopedics.com/blogs/${blog.slug}`,
      publishedTime: blog.created_at,
      modifiedTime: blog.modified_at,
      authors: info.author,
      tags: info.tags,
      images: [
        {
          url: info.img,
          width: 1024,
          height: 576,
          alt: info.title,
          type: "image/png"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: info.metaTitle || info.title,
      description: info.metaDescription || info.desc,
      images: [info.img],
    },
    alternates: {
      canonical: `https://mountainspineorthopedics.com/blogs/${blog.slug}`
    }
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
