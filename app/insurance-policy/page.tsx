import { Metadata } from 'next';
import InsurancePolicyClient from './InsurancePolicyClient'
// Remove 'use client' from this file.
// Move all JSX and client logic to InsurancePolicyClient.tsx.
// Keep only metadata and a default export that renders <InsurancePolicyClient />.

export const generateMetadata = (): Metadata => ({
  title: 'Insurance Policy | Mountain Spine & Orthopedics',
  description: 'Learn about insurance coverage options for spine surgery at Mountain Spine & Orthopedics. We accept a wide range of flexible, comprehensive insurance providers to help patients throughout Florida.',
  openGraph: {
    title: 'Insurance Policy | Mountain Spine & Orthopedics',
    description: 'Learn about insurance coverage options for spine surgery at Mountain Spine & Orthopedics. We accept a wide range of flexible, comprehensive insurance providers to help patients throughout Florida.',
    url: '/insurance-policy',
    siteName: 'Mountain Spine & Orthopedics',
    type: 'website',
    images: [
      {
        url: '/InsuranceLanding.png',
        width: 1200,
        height: 630,
        alt: 'Insurance Policy at Mountain Spine & Orthopedics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insurance Policy | Mountain Spine & Orthopedics',
    description: 'Learn about insurance coverage options for spine surgery at Mountain Spine & Orthopedics. We accept a wide range of flexible, comprehensive insurance providers to help patients throughout Florida.',
    images: ['/InsuranceLanding.png'],
  },
})

export default function InsurancePolicy() {
  return (
    <InsurancePolicyClient />
  )
}
