import type { Metadata } from 'next'
import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import StaticNav from "@/components/StaticNav.server";

export const metadata: Metadata = {
  title: 'Orthopedic Health Blog | Mountain Spine & Orthopedics',
  description: 'Stay informed with expert insights on spine health, orthopedic treatments, and pain management from our board-certified specialists.',
  openGraph: {
    title: 'Orthopedic Health Blog | Mountain Spine & Orthopedics',
    description: 'Stay informed with expert insights on spine health, orthopedic treatments, and pain management from our board-certified specialists.',
    url: buildCanonical('/blogs'),
    siteName: 'Mountain Spine & Orthopedics',
    type: 'website',
    images: [
      {
        url: getOgImageForPath('/blogs'),
        width: 1200,
        height: 630,
        alt: 'Orthopedic health blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orthopedic Health Blog | Mountain Spine & Orthopedics',
    description: 'Stay informed with expert insights on spine health, orthopedic treatments, and pain management from our board-certified specialists.',
    images: [getOgImageForPath('/blogs')],
  },
  alternates: {
    canonical: buildCanonical('/blogs'),
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StaticNav />
      {children}
    </>
  )
} 