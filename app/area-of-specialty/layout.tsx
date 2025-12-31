import type { Metadata } from 'next'
import { buildCanonical, canonicalForOg } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import { ConditionsItemListSchema } from '@/components/ConditionsItemListSchema';

export const metadata: Metadata = {
  title: 'Orthopedic Conditions We Treat | Spine & Joint Specialists',
  description: 'Explore orthopedic conditions we treat, including spine, joint, and nerve-related pain. Learn symptoms, causes, and treatment pathways guided by specialists.',
  openGraph: {
    title: 'Orthopedic Conditions We Treat | Spine & Joint Specialists',
    description: 'Explore orthopedic conditions we treat, including spine, joint, and nerve-related pain. Learn symptoms, causes, and treatment pathways guided by specialists.',
    url: canonicalForOg('/area-of-specialty'),
    siteName: 'Mountain Spine & Orthopedics',
    type: 'website',
    images: [
      {
        url: getOgImageForPath('/area-of-specialty'),
        width: 1200,
        height: 630,
        alt: 'Orthopedic conditions we treat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orthopedic Conditions We Treat | Spine & Joint Specialists',
    description: 'Explore orthopedic conditions we treat, including spine, joint, and nerve-related pain. Learn symptoms, causes, and treatment pathways guided by specialists.',
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
      <ConditionsItemListSchema />
      {children}
    </div>
  );
}
