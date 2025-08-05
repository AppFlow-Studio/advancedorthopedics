// Import required types for metadata handling
import type { Metadata, ResolvingMetadata } from "next";
import type { StaticImageData } from "next/image";
import React from "react";

// Import the list of all treatments
import { AllTreatments } from "@/components/data/treatments";
import StaticNav from "@/components/StaticNav.server";
import OrphanLinksFooter from '@/components/OrphanLinksFooter';
import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

// Helper function to safely get the image source URL as a string
const getImageSource = (image: string | StaticImageData | undefined): string => {
  if (!image) return "https://mountainspineortho.b-cdn.net/public/default-treatment-image.jpg"; // Provide a default fallback image
  return typeof image === "string" ? image : image.src;
};

function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

// This function dynamically generates metadata for each treatment page
export async function generateMetadata(
  { params }: { params: Promise<{ TreatmentDetails: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const treatment = AllTreatments.find(
    (treatment) => treatment.slug === resolvedParams.TreatmentDetails
  );

  if (!treatment) {
    const readableSlug = resolvedParams.TreatmentDetails.replace(/-/g, " ");
    return {
      title: "Treatment Not Found | Mountain Spine & Orthopedics",
      description: "Learn about orthopedic care and treatments with our specialists in Florida."
    };
  }

  const canonicalUrl = buildCanonical(`/treatments/${treatment.slug}`);
  const ogImage = getOgImageForPath('/treatments');

  // Robust, trimmed, non-empty title/description
  const title = (treatment.metaTitle && treatment.metaTitle.trim()) || `${treatment.title} | Mountain Spine & Orthopedics`;
  const description = (treatment.metaDesc && treatment.metaDesc.trim()) || (treatment.detail && typeof treatment.detail === 'string' && treatment.detail.trim()) || (treatment.body && treatment.body.slice(0, 160).trim()) || `Learn about ${treatment.title}, offered by our specialists at Mountain Spine & Orthopedics.`;

  return {
    title,
    description,
    keywords: treatment.keywords || [treatment.title, "orthopedic treatment", "spine surgery"],
    openGraph: {
      title,
      description,
      type: "article",
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: treatment.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Hidden crawler nav */}
      <StaticNav />
      {children}
      <OrphanLinksFooter /> {/* sr-only, zero visual impact */}
    </>
  );
}
