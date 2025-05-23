import type { Metadata, ResolvingMetadata } from "next";
import { AllTreatments } from "@/components/data/treatments";

export async function generateMetadata(
  { params }: { params: Promise<{ TreatmentDetails: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const treatment = AllTreatments.find(
    (x) => x.slug === resolvedParams.TreatmentDetails
  );

  if (!treatment) {
    return {
      title: "Treatment Not Found | Mountain Spine & Orthopedics",
      description: "This treatment may have been removed or does not exist.",
    };
  }

  return {
    title: `${treatment.title} | Mountain Spine & Orthopedics`,
    description: treatment.body,
    keywords: [
      treatment.title,
      treatment.conditions_treated,
      "spine treatment",
      "orthopedic surgery",
      "Florida orthopedic care",
      "back pain relief",
      "joint pain specialist",
    ],
    openGraph: {
      title: `${treatment.title} | Mountain Spine & Orthopedics`,
      description: treatment.body,
      type: "article",
      url: `https://mountainspineorthopedics.com/treatments/${treatment.slug}`,
      publishedTime: "2025-05-18",
      modifiedTime: "2025-05-18",
      authors: ["https://mountainspineorthopedics.com/about"],
      tags: [treatment.title, "Back Pain", "Orthopedics", "Spine Surgery"],
      images: [
        {
          url:
            treatment.card_img?.src ||
            "https://mountainspineortho.b-cdn.net/public/AboutUsLanding.jpeg",
          width: 1024,
          height: 576,
          alt: treatment.title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: treatment.title,
      description: treatment.body,
      images: [
        treatment.card_img?.src ||
          "https://mountainspineortho.b-cdn.net/public/AboutUsLanding.jpeg",
      ],
    },
    alternates: {
      canonical: `https://mountainspineorthopedics.com/treatments/${treatment.slug}`,
    },
  };
}

export default function TreatmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
