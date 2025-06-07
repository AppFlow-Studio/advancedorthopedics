import type { Metadata, ResolvingMetadata } from "next";
import { conditions } from "@/components/data/conditions";
import { PainAreaTreatments } from "@/components/data/painareatreatments";
export async function generateMetadata({ params }: { params: { PainArea: string } }, parent: ResolvingMetadata) {
    let condition 
    if ( params.PainArea == 'neckandshoulderpaintreatments' ) {
      condition = PainAreaTreatments.find( x => x.slug === params.PainArea)
    }else{
      condition = conditions.find( x => x.slug === params.PainArea)
    }
    if (!condition) {
      return {
        title: "Condition not found",
        description: "Condition not found",
      }
    }
    return {
      title: condition.title,
      description: condition.body.replaceAll('<br/>', ' '),
      keywords: condition.keywords,
      openGraph: {
        title: `${condition.title} | Mountain Spine & Orthopedics`,
        description: condition.body.replaceAll('<br/>', ' '),
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
            canonical: `https://mountainspineorthopedics.com/area-of-pain/neck-and-shoulder-pain/${condition.slug}`
      } 
    };
}

export default function NeckAndShoulderPainAreaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
} 