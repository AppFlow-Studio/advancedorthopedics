// Import required types for metadata handling
import type { Metadata, ResolvingMetadata } from "next";
import type { StaticImageData } from "next/image";
import React from "react";

// Import the list of all treatments
import { AllTreatments } from "@/components/data/treatments";

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
  { params }: { params: { TreatmentDetails: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const treatment = AllTreatments.find(
    (treatment) => treatment.slug === params.TreatmentDetails
  );

  if (!treatment) {
    const readableSlug = params.TreatmentDetails.replace(/-/g, " ");
    return {
      title: `${capitalizeWords(readableSlug)} | Mountain Spine & Orthopedics`,
      description: "Learn about orthopedic care and treatments with our specialists in Florida."
    };
  }

  const imageSource = getImageSource(treatment.card_img);
  const treatmentUrl = `https://mountainspineorthopedics.com/treatments/${treatment.slug}`;

  return {
    metadataBase: new URL('https://mountainspineorthopedics.com'),
    title: treatment.metaTitle || `${treatment.title} | Mountain Spine & Orthopedics`,
    description: treatment.metaDesc || treatment.detail || treatment.body?.slice(0, 160),
    keywords: treatment.keywords || [treatment.title, "orthopedic treatment", "spine surgery"],
    
    openGraph: {
      title: treatment.metaTitle || `${treatment.title} | Mountain Spine & Orthopedics`,
      description: treatment.metaDesc || treatment.detail || treatment.body?.slice(0, 160),
      type: "article",
      url: treatmentUrl,
      images: [
        {
          url: imageSource,
          width: 1200,
          height: 630,
          alt: treatment.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: treatment.metaTitle || `${treatment.title} | Mountain Spine & Orthopedics`,
      description: treatment.metaDesc || treatment.detail || treatment.body?.slice(0, 160),
      images: [imageSource],
    },

    alternates: {
      canonical: treatmentUrl,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
