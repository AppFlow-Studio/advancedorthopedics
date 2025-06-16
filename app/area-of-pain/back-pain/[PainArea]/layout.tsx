import type { Metadata, ResolvingMetadata } from "next";
import { conditions } from "@/components/data/conditions";
import { PainAreaTreatments } from "@/components/data/painareatreatments";

function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

export async function generateMetadata(
  { params }: { params: { PainArea: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const painArea = PainAreaTreatments.find(
    (area) => area.slug === params.PainArea
  );

  if (!painArea) {
    const readableSlug = params.PainArea.replace(/-/g, " ");
    return {
      title: `${capitalizeWords(readableSlug)} | Mountain Spine & Orthopedics`,
      description: "Learn about orthopedic care and treatments with our specialists in Florida."
    };
  }

  const painAreaUrl = `https://mountainspineorthopedics.com/area-of-pain/back-pain/${painArea.slug}`;

  return {
    metadataBase: new URL('https://mountainspineorthopedics.com'),
    title: painArea.metaTitle || `${painArea.title} | Mountain Spine & Orthopedics`,
    description: painArea.metaDescription || painArea.desc,
    keywords: painArea.keywords || [painArea.title, "back pain", "spine treatment"],
    
    openGraph: {
      title: painArea.metaTitle || `${painArea.title} | Mountain Spine & Orthopedics`,
      description: painArea.metaDescription || painArea.desc,
      type: "article",
      url: painAreaUrl,
      images: [
        {
          url: painArea.img.src,
          width: 1200,
          height: 630,
          alt: painArea.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: painArea.metaTitle || `${painArea.title} | Mountain Spine & Orthopedics`,
      description: painArea.metaDescription || painArea.desc,
      images: [painArea.img.src],
    },

    alternates: {
      canonical: painAreaUrl,
    },
  };
}

export default function BackPainAreaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
} 