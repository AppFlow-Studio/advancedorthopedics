import type { Metadata, ResolvingMetadata } from "next";
import { conditions } from "@/components/data/conditions";
import { PainAreaTreatments } from "@/components/data/painareatreatments";
import StaticNav from "@/components/StaticNav.server";
import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

export async function generateMetadata(
  { params }: { params: { PainArea: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const conditionSlug = resolvedParams.PainArea;
  let data;
  let isSpecialTreatmentPage = false; // Flag to track the page type

  // Check if the slug is our special case from PainAreaTreatments
  if (conditionSlug === "back-pain-treatment-options") {
    data = PainAreaTreatments.find((x) => x.slug === conditionSlug);
    isSpecialTreatmentPage = true; // Set the flag to true
  } else {
    // Otherwise, find it in the main conditions data
    data = conditions.find((x) => x.slug === conditionSlug);
  }

  if (!data) {
    const readableSlug = conditionSlug.replace(/-/g, " ");
    return {
      title: `${readableSlug.replace(/\b\w/g, (l) => l.toUpperCase())} | Mountain Spine & Orthopedics`,
      description: "Learn about orthopedic care and treatments.",
    };
  }

  // Compute pain area in Title-Case
  const painArea = conditionSlug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  
  // Title pattern
  const title = data.metaTitle ?? `${painArea} | Orthopedic Pain Treatment in Florida | Mountain Spine & Orthopedics`;
  
  // Description
  const description = `Learn causes, symptoms & minimally invasive treatments for ${painArea.toLowerCase()} at Mountain Spine & Orthopedics. Same-day appointments across Florida.`;
  
  // *** NEW CONDITIONAL CANONICAL LOGIC ***
  let canonicalPath;
  if (isSpecialTreatmentPage) {
    // If it's the special treatment options page, it is its own canonical version.
    canonicalPath = `/area-of-pain/back-pain/${conditionSlug}`;
  } else {
    // For all other regular conditions, the canonical version is under /area-of-specialty/
canonicalPath = `/area-of-specialty/${conditionSlug}`;
  }

  return {
    title,
    description,
    keywords: data.keywords || [],
    alternates: { 
      canonical: buildCanonical(canonicalPath) // Use the correct canonical path
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: buildCanonical(canonicalPath), // Also update the Open Graph URL
      images: [
        {
          url: getOgImageForPath('/area-of-specialty'),
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [getOgImageForPath('/area-of-specialty')],
    },
  };
}

export default function BackPainAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <StaticNav />
      {children}
    </div>
  );
} 