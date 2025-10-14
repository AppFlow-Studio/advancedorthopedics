import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

export const metadata: Metadata = {
  title: safeTitle("About Mountain Spine & Orthopedics | Expert Spine & Joint Care"),
  description: safeDescription("Learn about our board-certified orthopedic specialists, advanced facilities, and commitment to comprehensive spine and joint care across Florida."),
  keywords: [
    'about Mountain Spine & Orthopedics',
    'spine experts Florida',
    'orthopedic care team',
    'comprehensive spine surgery',
    'orthopedic doctors Florida',
    'spine specialists',
    'orthopedic credentials',
    'Florida orthopedic team'
  ],
  alternates: {
    canonical: buildCanonical("/about"),
  },
  openGraph: {
    title: safeTitle("About Mountain Spine & Orthopedics | Expert Spine & Joint Care"),
    description: safeDescription("Learn about our board-certified orthopedic specialists, advanced facilities, and commitment to comprehensive spine and joint care across Florida."),
    url: buildCanonical("/about"),
    siteName: "Mountain Spine & Orthopedics",
    type: "website",
    images: [
      {
        url: getOgImageForPath("/"),
        width: 1200,
        height: 630,
        alt: "Mountain Spine & Orthopedics team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: safeTitle("About Mountain Spine & Orthopedics | Expert Spine & Joint Care"),
    description: safeDescription("Learn about our board-certified orthopedic specialists, advanced facilities, and commitment to comprehensive spine and joint care across Florida."),
    images: [getOgImageForPath("/")],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
