import type { Metadata } from 'next'
import { buildCanonical, canonicalForOg, safeTitle, safeDescription, srOnly } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import StaticNav from "@/components/StaticNav.server";

export const metadata: Metadata = {
  title: 'Orthopedic Conditions & Treatments | Mountain Spine & Orthopedics',
  description: 'Comprehensive guide to orthopedic conditions, spine disorders, and joint problems. Expert diagnosis and treatment options from board-certified specialists.',
  openGraph: {
    title: 'Orthopedic Conditions & Treatments | Mountain Spine & Orthopedics',
    description: 'Comprehensive guide to orthopedic conditions, spine disorders, and joint problems. Expert diagnosis and treatment options from board-certified specialists.',
    url: canonicalForOg('/area-of-specialty'),
    siteName: 'Mountain Spine & Orthopedics',
    type: 'website',
    images: [
      {
        url: getOgImageForPath('/area-of-specialty'),
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
    images: [getOgImageForPath('/area-of-specialty')],
  },
  alternates: {
    canonical: buildCanonical('/area-of-specialty'),
  },
  robots: { index: true, follow: true, maxSnippet: -1, maxImagePreview: "large", maxVideoPreview: -1 },
}

export default function AreaOfSpecialtyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className={srOnly}>Orthopedic Conditions & Treatments</h1>
      <h2 className={srOnly}>Comprehensive Care Guide</h2>
      <StaticNav />
      {children}
    </div>
  );
}
