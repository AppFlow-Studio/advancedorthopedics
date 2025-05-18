import type { Metadata, ResolvingMetadata } from "next";
import { AllTreatments } from "@/components/data/treatments";
export async function generateMetadata({ params }: { params: { TreatmentDetails: string } }, parent: ResolvingMetadata) {
    const treatment = AllTreatments.filter(x => x.slug === params.TreatmentDetails)[0]
    return {
      title: treatment.title,
      description: treatment.body,
      openGraph: {
        title: `${treatment.title} | Mountain Spine & Orthopedics`,
        description: treatment.body,
        type: "article",
        url: `https://mountainspineorthopedics.com/blogs/${treatment.slug}`,
        publishedTime: '2025-05-18',
        modifiedTime: '2025-05-18',
        authors: ["https://mountainspineorthopedics.com/about"],
        tags: [ treatment.title,  "Back Pain", "Orthopedics", "Spine Orthopedics", "Neck Pain", "Leg Pain", "Shoulder Pain", "Knee Pain", "Hip Pain", "Ankle Pain", "Foot Pain", "Elbow Pain", "Wrist Pain", "Hand Pain", "Thumb Pain", "Finger Pain", "Toe Pain", "Ankle Pain", "Foot Pain", "Elbow Pain", "Wrist Pain", "Hand Pain", "Thumb Pain", "Finger Pain"],
        images: [
          {
            url: treatment.card_img,
            width: 1024,
            height: 576,
            alt: treatment.title,
            type: "image/png"
          }
        ]
      },
      alternates: {
        canonical: `https://mountainspineorthopedics.com/area-of-speciality/${treatment.slug}`
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