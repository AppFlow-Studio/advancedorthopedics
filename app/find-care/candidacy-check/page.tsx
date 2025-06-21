import { Metadata } from 'next'
import CandidacyCheckClient from '@/components/CandidacyCheckClient'

export const metadata: Metadata = {
  title: 'Free Spine Surgery Candidacy Check | Mountain Spine & Orthopedics',
  description: 'Get a free spine surgery candidacy evaluation from our expert team. Determine which treatments may be right for your condition with our comprehensive assessment tool.',
  openGraph: {
    title: 'Free Spine Surgery Candidacy Check | Mountain Spine & Orthopedics',
    description: 'Get a free spine surgery candidacy evaluation from our expert team. Determine which treatments may be right for your condition with our comprehensive assessment tool.',
    type: 'website',
    url: 'https://mountainspineorthopedics.com/find-care/candidacy-check',
  },
  twitter: {
    card: 'summary',
    title: 'Free Spine Surgery Candidacy Check | Mountain Spine & Orthopedics',
    description: 'Get a free spine surgery candidacy evaluation from our expert team. Determine which treatments may be right for your condition with our comprehensive assessment tool.',
  },
  alternates: {
    canonical: '/find-care/candidacy-check',
  },
}

export default function CandidacyCheckPage() {
  return <CandidacyCheckClient />
}