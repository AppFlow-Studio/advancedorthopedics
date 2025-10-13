import type { Metadata } from 'next'
import { buildCanonical, srOnly } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import { TreatmentsItemListSchema } from '@/components/TreatmentsItemListSchema';

export const metadata: Metadata = {
  title: 'Orthopedic Treatments & Procedures | Mountain Spine & Orthopedics',
  description: 'Explore our comprehensive range of minimally invasive orthopedic treatments and spine procedures. From pain management to advanced surgical techniques.',
  openGraph: {
    title: 'Orthopedic Treatments & Procedures | Mountain Spine & Orthopedics',
    description: 'Explore our comprehensive range of minimally invasive orthopedic treatments and spine procedures. From pain management to advanced surgical techniques.',
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
    title: 'Orthopedic Treatments & Procedures | Mountain Spine & Orthopedics',
    description: 'Explore our comprehensive range of minimally invasive orthopedic treatments and spine procedures. From pain management to advanced surgical techniques.',
    images: [getOgImageForPath('/treatments')],
  },
  alternates: {
    canonical: buildCanonical('/treatments'),
  },
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
