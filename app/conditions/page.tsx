import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { buildCanonical, canonicalForOg, srOnly } from '@/lib/seo';
import { getOgImageForPath } from '@/lib/og';
import ConditionsHubClient from '@/components/ConditionsHubClient';
import ContentHubIndex, { REDIRECTED_CONDITION_SLUGS } from '@/components/ContentHubIndex';
import { conditions, conditionContentPlaceholders } from '@/components/data/conditions';
import { BODY_PARTS } from '@/components/data/bodyParts';
import { getVisibleReviews, isProviderVisible, providerIds } from '@/lib/providers/providerVisibility';
import { sitewideReviews } from '@/components/data/socialProofReviews';

export async function generateMetadata(): Promise<Metadata> {
  const url = buildCanonical('/conditions');
  const ogImage = getOgImageForPath('/conditions');

  return {
    title: "Orthopedic & Podiatric Conditions | Mountain Spine & Orthopedics",
    description: "Comprehensive guide to orthopedic and podiatric conditions. Expert diagnosis for back pain, neck pain, joint conditions, and foot/ankle problems. Board-certified specialists in FL, NJ, NY, PA, and GA. Book a consultation today.",
    keywords: ["orthopedic conditions", "podiatric conditions", "spine conditions", "back pain", "neck pain", "joint conditions", "orthopedic specialists FL NJ NY PA"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Orthopedic & Podiatric Conditions | Mountain Spine & Orthopedics",
      description: "Comprehensive guide to orthopedic and podiatric conditions. Expert diagnosis for back pain, neck pain, joint conditions, and more.",
      url: canonicalForOg('/conditions'),
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

export default function ConditionsPage() {
  return (
    <>
      {/* Server-rendered H1. The visible hero heading lives inside
          ConditionsHubClient, which calls useSearchParams() and therefore bails
          out of prerendering entirely — so the hub shipped with no H1 in its
          initial HTML at all. The animated hero keeps the exact same styling but
          is no longer the heading element; this carries the same text and is
          exposed to assistive tech, matching the srOnly h2 pattern already used
          in the app/injuries layouts. */}
      <h1 className={srOnly}>Orthopedic Conditions & Treatments</h1>
      <Suspense fallback={
      <main className="w-full flex flex-col items-center justify-center bg-white h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-48 bg-gray-200 rounded"></div>
        </div>
      </main>
    }>
      <ConditionsHubClient reviews={getVisibleReviews(sitewideReviews)} showFeaturedDoctor={isProviderVisible({ slug: providerIds.scottKatzman })} />
      </Suspense>
      {/* Outside the Suspense boundary on purpose. ConditionsHubClient calls
          useSearchParams(), so anything inside that boundary is skipped during
          prerender and never reaches the served HTML. That is the bug this fixes. */}
      <ContentHubIndex
        items={[
          // Body-part hubs carry no tag of their own, so they get their own group.
          ...BODY_PARTS.map((bp) => ({
            title: bp.title,
            slug: bp.slug,
            tag: 'Browse by body region',
          })),
          ...conditions,
          ...conditionContentPlaceholders,
        ]}
        exclude={REDIRECTED_CONDITION_SLUGS}
        basePath="/conditions"
        heading="All conditions we treat"
        blurb="Every condition covered on this site, grouped by body region."
        headingId="all-conditions-heading"
      />
    </>
  );
}
