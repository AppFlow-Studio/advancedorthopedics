import type { Metadata, ResolvingMetadata } from "next";
import { Conditions } from "@/components/data/conditions";
export async function generateMetadata({ params }: { params: { ConditionDetails: string } }, parent: ResolvingMetadata) {
    const condition = Conditions.filter(x => x.slug === params.ConditionDetails)[0]
    return {
      title: condition.title,
      description: condition.body,
      openGraph: {
        title: `${condition.title} | Mountain Spine & Orthopedics`,
        description: condition.body,
        type: "article",
        url: `https://mountainspineorthopedics.com/blogs/${condition.slug}`,
        publishedTime: '2025-05-18',
        modifiedTime: '2025-05-18',
        authors: ["https://mountainspineorthopedics.com/about"],
        tags: ["Back Pain", "Orthopedics", "Spine Orthopedics", "Neck Pain", "Leg Pain", "Shoulder Pain", "Knee Pain", "Hip Pain", "Ankle Pain", "Foot Pain", "Elbow Pain", "Wrist Pain", "Hand Pain", "Thumb Pain", "Finger Pain", "Toe Pain", "Ankle Pain", "Foot Pain", "Elbow Pain", "Wrist Pain", "Hand Pain", "Thumb Pain", "Finger Pain"],
        images: [
          {
            url: 'https://mountainspineortho.b-cdn.net/public/AboutUsLanding.jpeg',
            width: 1024,
            height: 576,
            alt: condition.title,
            type: "image/png"
          }
        ]
      },
      alternates: {
        canonical: `https://mountainspineorthopedics.com/area-of-speciality/${condition.slug}`
      }
    };
}

export default function ConditionLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
} 