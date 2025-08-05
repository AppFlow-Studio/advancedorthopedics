import { Metadata } from 'next'
import CandidacyCheckClient from '@/components/CandidacyCheckClient'
import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

export const metadata: Metadata = {
  title: 'Free Spine Surgery Candidacy Check | Mountain Spine & Orthopedics',
  description: 'Get a free spine surgery candidacy evaluation from our expert team. Determine which treatments may be right for your condition with our comprehensive assessment tool.',
  openGraph: {
    title: 'Free Spine Surgery Candidacy Check | Mountain Spine & Orthopedics',
    description: 'Get a free spine surgery candidacy evaluation from our expert team. Determine which treatments may be right for your condition with our comprehensive assessment tool.',
    type: 'website',
    url: buildCanonical('/find-care/candidacy-check'),
    images: [
      {
        url: getOgImageForPath('/find-care'),
        width: 1200,
        height: 630,
        alt: 'Free Spine Surgery Candidacy Check at Mountain Spine & Orthopedics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Spine Surgery Candidacy Check | Mountain Spine & Orthopedics',
    description: 'Get a free spine surgery candidacy evaluation from our expert team. Determine which treatments may be right for your condition with our comprehensive assessment tool.',
    images: [getOgImageForPath('/find-care')],
  },
  alternates: {
    canonical: buildCanonical('/find-care/candidacy-check'),
  },
}

export default function CandidacyCheckPage() {
  return <CandidacyCheckClient />
}