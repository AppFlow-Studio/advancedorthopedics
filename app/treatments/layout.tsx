import type { Metadata } from 'next'
import { buildCanonical, srOnly } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import { TreatmentsItemListSchema } from '@/components/TreatmentsItemListSchema';

export const metadata: Metadata = {
  title: 'Orthopedic Treatments & Procedures | Spine & Joint Care',
  description: 'Explore orthopedic treatments and procedures for spine, joint, and nerve conditions. Learn non-surgical and advanced care options available.',
  openGraph: {
    title: 'Orthopedic Treatments & Procedures | Spine & Joint Care',
    description: 'Explore orthopedic treatments and procedures for spine, joint, and nerve conditions. Learn non-surgical and advanced care options available.',
    url: buildCanonical('/treatments'),
    siteName: 'Mountain Spine & Orthopedics',
    type: 'website',
    images: [
      {
        url: getOgImageForPath('/treatments'),
        width: 1200,
        height: 630,
        alt: 'Orthopedic treatments and procedures',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orthopedic Treatments & Procedures | Spine & Joint Care',
    description: 'Explore orthopedic treatments and procedures for spine, joint, and nerve conditions. Learn non-surgical and advanced care options available.',
    images: [getOgImageForPath('/treatments')],
  },
  alternates: {
    canonical: buildCanonical('/treatments'),
  },
  robots: { index: true, follow: true, maxSnippet: -1, maxImagePreview: "large", maxVideoPreview: -1 },
}

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TreatmentsItemListSchema />
      {children}
    </div>
  );
}
