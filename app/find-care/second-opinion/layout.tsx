import type { Metadata } from "next";
import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

export const metadata: Metadata = {
  title: 'Get a Second Opinion From Spine Experts | Mountain Spine & Orthopedics',
  description: 'Upload your MRI or X-ray and receive a board-certified orthopedic surgeon\'s second opinion within 24 hours — 100% free.',
  alternates: { 
    canonical: buildCanonical('/find-care/second-opinion') 
  },
  openGraph: {
    title: 'Get a Second Opinion From Spine Experts | Mountain Spine & Orthopedics',
    description: 'Upload your MRI or X-ray and receive a board-certified orthopedic surgeon\'s second opinion within 24 hours — 100% free.',
    url: buildCanonical('/find-care/second-opinion'),
    siteName: 'Mountain Spine & Orthopedics',
    type: 'website',
    images: [
      {
        url: getOgImageForPath('/find-care/free-mri-review'),
        width: 1200,
        height: 630,
        alt: 'Board-certified orthopedic spine specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get a Second Opinion From Spine Experts | Mountain Spine & Orthopedics',
    description: 'Upload your MRI or X-ray and receive a board-certified orthopedic surgeon\'s second opinion within 24 hours — 100% free.',
    images: [getOgImageForPath('/find-care/free-mri-review')],
  },
};

export default function SecondOpinionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
} 
