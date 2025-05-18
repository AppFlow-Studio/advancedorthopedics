import type { Metadata, ResolvingMetadata } from "next";
import { AllTreatments } from "@/components/data/treatments";
export async function generateMetadata({ params }: { params: Promise<{ TreatmentDetails : string }> }, parent: ResolvingMetadata) {
    const resolvedParams = await params
    const treatment = AllTreatments.filter(x => x.slug === resolvedParams.TreatmentDetails)[0]
    return {
      title: treatment.title,
      description: treatment.body,
      openGraph: {
        title: `${treatment.title} | Mountain Spine & Orthopedics`,
        description: treatment.body,
        type: "article",
        url: `https://mountainspineorthopedics.com/treatments/${treatment.slug}`,
        publishedTime: '2025-05-18',
        modifiedTime: '2025-05-18',
        authors: ["https://mountainspineorthopedics.com/about"],
        tags: [ treatment.title,  "Back Pain", "Orthopedics", "Spine Orthopedics", "Neck Pain", "Leg Pain", "Shoulder Pain", "Knee Pain", "Hip Pain", "Ankle Pain", "Foot Pain", "Elbow Pain", "Wrist Pain", "Hand Pain", "Thumb Pain", "Finger Pain", "Toe Pain", "Ankle Pain", "Foot Pain", "Elbow Pain", "Wrist Pain", "Hand Pain", "Thumb Pain", "Finger Pain"],
        images: [
          {
            url: 'https://mountainspineortho.b-cdn.net/public/AboutUsLanding.jpeg',
            width: 1024,
            height: 576,
            alt: treatment.title,
            type: "image/png"
          }
        ]
      },
      alternates: {
        canonical: `https://mountainspineorthopedics.com/treatments/${treatment.slug}`
      }
    };
}

export default function TreatmentLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
} 