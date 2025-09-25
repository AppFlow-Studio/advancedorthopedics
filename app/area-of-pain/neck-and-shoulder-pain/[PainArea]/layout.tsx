import type { Metadata, ResolvingMetadata } from "next";
import { conditions } from "@/components/data/conditions";
import { conditions as painconditions } from "@/components/data/painconditions";
import { PainAreaTreatments } from "@/components/data/painareatreatments";
import StaticNav from "@/components/StaticNav.server";
import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

export async function generateMetadata(
  { params }: { params: Promise<{ PainArea: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const conditionSlug = resolvedParams.PainArea;
  let data;

  // *** SELF-CANONICALIZATION FOR ALL PAIN PAGES ***
  const canonicalPath = `/area-of-pain/neck-and-shoulder-pain/${conditionSlug}`;

  if (conditionSlug === "neck-and-shoulder-pain-treatment") {
    data = PainAreaTreatments.find((x) => x.slug === conditionSlug);
  } else {
    // Prefer painconditions for pain pages, fallback to conditions
    data = painconditions.find((x) => x.slug === conditionSlug);
    if (!data) {
      data = conditions.find((x) => x.slug === conditionSlug);
    }
  }

  if (!data) {
    const readableSlug = conditionSlug.replace(/-/g, " ");
    const title = `${readableSlug.replace(/\b\w/g, (l) => l.toUpperCase())} | Mountain Spine & Orthopedics`;
    const description = "Learn about orthopedic care and treatments.";
    
    return {
      title,
      description,
      alternates: { 
        canonical: buildCanonical(canonicalPath)
      },
      openGraph: {
        title,
        description,
        type: "article",
        url: buildCanonical(canonicalPath),
        images: [
          {
            url: getOgImageForPath('/area-of-pain'),
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [getOgImageForPath('/area-of-pain')],
      },
    };
  }

  // Compute pain area in Title-Case
  const painArea = conditionSlug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  
  // Title pattern - prefer data.metaTitle if available
  const title = data.metaTitle ?? `${painArea} | Orthopedic Pain Treatment in Florida | Mountain Spine & Orthopedics`;
  
  // Description - prefer data.metaDesc if available
  const description = data.metaDesc ?? `Learn causes, symptoms & minimally invasive treatments for ${painArea.toLowerCase()} at Mountain Spine & Orthopedics. Same-day appointments across Florida.`;

  return {
    title,
    description,
    keywords: data.keywords || [],
    alternates: { 
      canonical: buildCanonical(canonicalPath) 
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: buildCanonical(canonicalPath),
      images: [
        {
          url: getOgImageForPath('/area-of-pain'),
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
      images: [getOgImageForPath('/area-of-pain')],
    },
  };
}

export default function NeckAndShoulderPainAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StaticNav />
      {children}
    </>
  );
} 