import { GetBlogInfo } from '../api/get-blog-info'
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({ params }: { params: { BlogId: string } }, parent: ResolvingMetadata) {
    const blogDetails = await GetBlogInfo(params.BlogId);
    
    return {
      title: blogDetails?.blog_info.title,
      description: blogDetails?.blog_info.desc,
      openGraph: {
        title: `${blogDetails?.blog_info.title} | Mountain Spine & Orthopedics`,
        description: blogDetails?.blog_info.desc,
        type: "article",
        url: `https://mountainspineorthopedics.com/blogs/${blogDetails?.blog_info.slug}`,
        publishedTime: blogDetails?.created_at,
        modifiedTime: blogDetails?.modified_at,
        authors: ["https://mountainspineorthopedics.com/about"],
        tags: blogDetails?.blog_info.tags,
        images: [
          {
            url: blogDetails?.blog_info.img,
            width: 1024,
            height: 576,
            alt: blogDetails?.blog_info.title,
            type: "image/png"
          }
        ]
      },
      alternates: {
        canonical: `https://mountainspineorthopedics.com/blogs/${blogDetails?.id}`
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