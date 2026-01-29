import React from 'react';
import { Metadata } from 'next';
import { buildCanonical, canonicalForOg } from '@/lib/seo';
import { getOgImageForPath } from '@/lib/og';
import ConditionsHubClient from '@/components/ConditionsHubClient';

export async function generateMetadata(): Promise<Metadata> {
  const url = buildCanonical('/conditions');
  const ogImage = getOgImageForPath('/conditions');

  return {
    title: "Orthopedic & Podiatric Conditions | Mountain Spine & Orthopedics",
    description: "Comprehensive guide to orthopedic and podiatric conditions. Expert diagnosis for back pain, neck pain, joint conditions, and foot/ankle problems. Board-certified specialists in FL, NJ, NY, and PA. Book a consultation today.",
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
  return <ConditionsHubClient />;
}
