import type { Metadata } from 'next'
import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import StaticNav from "@/components/StaticNav.server";

export const metadata: Metadata = {
  title: 'Orthopedic Conditions & Treatments | Mountain Spine & Orthopedics',
  description: 'Comprehensive guide to orthopedic conditions, spine disorders, and joint problems. Expert diagnosis and treatment options from board-certified specialists.',
  openGraph: {
    title: 'Orthopedic Conditions & Treatments | Mountain Spine & Orthopedics',
    description: 'Comprehensive guide to orthopedic conditions, spine disorders, and joint problems. Expert diagnosis and treatment options from board-certified specialists.',
    url: buildCanonical('/area-of-speciality'),
    siteName: 'Mountain Spine & Orthopedics',
    type: 'website',
    images: [
      {
        url: getOgImageForPath('/area-of-speciality'),
        width: 1200,
        height: 630,
        alt: 'Orthopedic conditions and treatments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orthopedic Conditions & Treatments | Mountain Spine & Orthopedics',
    description: 'Comprehensive guide to orthopedic conditions, spine disorders, and joint problems. Expert diagnosis and treatment options from board-certified specialists.',
    images: [getOgImageForPath('/area-of-speciality')],
  },
  alternates: {
    canonical: buildCanonical('/area-of-speciality'),
  },
}

export default function AreaOfSpecialityLayout({
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