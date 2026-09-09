import HubStaticShell, { type HubLink } from "@/components/HubStaticShell";
import { AllTreatmentsCombined } from "@/components/data/treatments";
import { SITEMAP_EXCLUDED_PATHS } from "@/lib/sitemap-exclusions";
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { buildCanonical, canonicalForOg } from '@/lib/seo';
import { getOgImageForPath } from '@/lib/og';
import TreatmentsHubClient from '@/components/TreatmentsHubClient';
import ContentHubIndex from '@/components/ContentHubIndex';
import { AllTreatmentsCombined } from '@/components/data/treatments';
import { getVisibleReviews, isProviderVisible, providerIds } from '@/lib/providers/providerVisibility';
import { sitewideReviews } from '@/components/data/socialProofReviews';

export async function generateMetadata(): Promise<Metadata> {
  const url = buildCanonical('/treatments');
  const ogImage = getOgImageForPath('/treatments');

  return {
    title: "Orthopedic Surgeries & Procedures | Mountain Spine & Orthopedics",
    description: "Advanced orthopedic surgeries, minimally invasive procedures, and comprehensive treatments. Expert care for back pain, joint replacement, sports injuries, and spine conditions. Board-certified surgeons in FL, NJ, NY, PA, and GA.",
    keywords: ["orthopedic surgeries", "minimally invasive procedures", "spine surgery", "joint replacement", "sports medicine treatments", "orthopedic surgeons FL NJ NY PA"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Orthopedic Surgeries & Procedures | Mountain Spine & Orthopedics",
      description: "Advanced orthopedic surgeries, minimally invasive procedures, and comprehensive treatments. Expert care for spine and joint health.",
      url: canonicalForOg('/treatments'),
      siteName: "Mountain Spine & Orthopedics",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Orthopedic Conditions & Treatments at Mountain Spine & Orthopedics",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Orthopedic Conditions & Treatments | Mountain Spine & Orthopedics",
      description: "Comprehensive guide to orthopedic and spine conditions. Expert diagnosis and treatment for back pain, neck pain, joint conditions, and more.",
      images: [ogImage],
    },
  };
}

function treatmentHubLinks(): HubLink[] {
  const seen = new Set<string>();
  return AllTreatmentsCombined
    .filter((t) => t.slug && t.slug !== "undefined")
    .map((t) => ({ href: `/treatments/${t.slug}`, label: t.title, group: t.tag || "Other" }))
    .filter((l) => !SITEMAP_EXCLUDED_PATHS.has(l.href) && !seen.has(l.href) && seen.add(l.href));
}

export default function TreatmentsPage() {
  return (
    <>
      <Suspense>
        <TreatmentsHubClient reviews={getVisibleReviews(sitewideReviews)} showFeaturedDoctor={isProviderVisible({ slug: providerIds.scottKatzman })} />
      </Suspense>
      {/* Outside the Suspense boundary on purpose. TreatmentsHubClient calls
          useSearchParams(), so anything inside that boundary is skipped during
          prerender and never reaches the served HTML. That is the bug this fixes. */}
      <ContentHubIndex
        items={AllTreatmentsCombined}
        basePath="/treatments"
        heading="All treatments and procedures"
        blurb="Every treatment covered on this site, grouped by body region."
        headingId="all-treatments-heading"
      />
    </>
  );
}
