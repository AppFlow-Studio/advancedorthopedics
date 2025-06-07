import type { Metadata, ResolvingMetadata } from "next";
import { conditions } from "@/components/data/conditions";
export async function generateMetadata({ params }: { params: { FootSlug: string } }, parent: ResolvingMetadata) {
    const condition = conditions.filter(x => x.slug === params.FootSlug)[0]
    return {
      title: condition.title,
      description: condition.body,
      keywords: condition.keywords,
      openGraph: {
        title: `${condition.title} | Mountain Spine & Orthopedics`,
        description: condition.body,
        type: "article",
        url: `https://mountainspineorthopedics.com/blogs/${condition.slug}`,
        publishedTime: '2025-05-18',
        modifiedTime: '2025-05-18',
        authors: ["https://mountainspineorthopedics.com/about"],
        tags: condition.keywords,
        images: [
          {
            url: condition.card_img,
            width: 1024,
            height: 576,
            alt: condition.title,
            type: "image/png"
          }
        ]
      },
      alternates: {
        canonical: `https://mountainspineorthopedics.com/area-of-pain/foot-pain/${condition.slug}`
      } 
    };
}

export default function FootPainAreaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
} 