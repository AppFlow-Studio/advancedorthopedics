import type { Metadata, ResolvingMetadata } from "next";
import { conditions } from "@/components/data/conditions";
import { PainAreaTreatments } from "@/components/data/painareatreatments";

function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, (l) => l.toUpperCase());
}

export async function generateMetadata(
  { params }: { params: { PainArea: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const conditionSlug = resolvedParams.PainArea;
  let data;

  if (conditionSlug === "neckandshoulderpaintreatments") {
    data = PainAreaTreatments.find((x) => x.slug === conditionSlug);
  } else {
    data = conditions.find((x) => x.slug === conditionSlug);
  }

  if (!data) {
    const readableSlug = conditionSlug.replace(/-/g, " ");
    return {
      title: `${capitalizeWords(readableSlug)} | Mountain Spine & Orthopedics`,
      description: "Learn about orthopedic care and treatments.",
    };
  }

  const painAreaUrl = `https://mountainspineorthopedics.com/area-of-pain/neck-and-shoulder-pain/${data.slug}`;
  
  const imageUrl =
    typeof data.card_img === "string"
      ? data.card_img
      : (data.card_img as any)?.src || (data as any).img?.src || "";

  return {
    metadataBase: new URL("https://mountainspineorthopedics.com"),
    title: data.metaTitle || `${capitalizeWords(data.title)} | Mountain Spine & Orthopedics`,
    description: data.metaDesc || data.body,
    keywords: data.keywords || [],

    openGraph: {
      title: data.metaTitle || data.title,
      description: data.metaDesc || data.body,
      type: "article",
      url: painAreaUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: data.metaTitle || data.title,
      description: data.metaDesc || data.body,
      images: [imageUrl],
    },

    alternates: {
      canonical: painAreaUrl,
    },
  };
}

export default function NeckAndShoulderPainAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 