import type { Metadata, ResolvingMetadata } from "next";
import { conditions } from "@/components/data/conditions";
import { PainAreaTreatments } from "@/components/data/painareatreatments";
import StaticNav from "@/components/StaticNav.server";
import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

export async function generateMetadata(
  { params }: { params: Promise<{ FootSlug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const conditionSlug = resolvedParams.FootSlug;
  let data;

  if (conditionSlug === "footpaintreatmentoptions") {
    data = PainAreaTreatments.find((x) => x.slug === conditionSlug);
  } else {
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
  
  // Canonical & OG
  const path = `/area-of-pain/foot-pain/${conditionSlug}`;

  return {
    title,
    description,
    keywords: data.keywords || [],
    alternates: { 
      canonical: buildCanonical(path) 
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: buildCanonical(path),
      images: [
        {
          url: getOgImageForPath('/area-of-speciality'),
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
      images: [getOgImageForPath('/area-of-speciality')],
    },
  };
}

export default function FootPainAreaLayout({
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