import { GetBlogInfo } from '../api/get-blog-info'
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ BlogId: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = await GetBlogInfo(resolvedParams.BlogId);

  if (!blog) {
    return {
      title: "Blog Not Found | Mountain Spine & Orthopedics",
      description: "This blog post may have been deleted or is not available.",
    };
  }

  const info = blog.blog_info;

  return {
    title: `${info.title} | Mountain Spine & Orthopedics`,
    description: info.desc,
    keywords: blog.keywords || [],
    openGraph: {
      title: `${info.title} | Mountain Spine & Orthopedics`,
      description: info.desc,
      type: "article",
      url: `https://mountainspineorthopedics.com/blogs/${blog.id}`,
      publishedTime: blog.created_at,
      modifiedTime: blog.modified_at,
      authors: ["https://mountainspineorthopedics.com/about"],
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
      title: info.title,
      description: info.desc,
      images: [info.img],
    },
    alternates: {
      canonical: `https://mountainspineorthopedics.com/blogs/${blog.id}`
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
