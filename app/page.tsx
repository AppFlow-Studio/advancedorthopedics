import { Metadata } from 'next';
import HomePageUI from '@/app/ui/HomePageUI'; // Assuming your UI code is in this component

// ✅ Server-Rendered Metadata for Homepage SEO (This part is correct)
export const metadata: Metadata = {
  title: ' Mountain Spine & Orthopedics | Top Florida Orthopedic Surgeons',
  description: 'Mountain Spine & Orthopedics offers expert care in minimally invasive spine surgery, joint pain relief, herniated disc treatment, and nerve pain therapy. Book your free MRI review or second opinion today across multiple Florida locations.',
  alternates: {
    canonical: 'https://mountainspineorthopedics.com/',
  },
  openGraph: {
    title: 'Top Florida Orthopedic Spine Surgeons | Mountain Spine & Orthopedics',
    description: 'Discover world-class orthopedic care in Florida. Specializing in minimally invasive back surgery, cervical disc herniation relief, sciatica treatments, and joint preservation procedures.',
    url: 'https://mountainspineorthopedics.com/',
    siteName: 'Mountain Spine & Orthopedics',
    images: [
      {
        url: 'https://mountainspineorthopedics.com/og-image-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Patient and doctor consultation at Mountain Spine & Orthopedics Florida clinic.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mountain Spine & Orthopedics | Advanced Spine, Neck, and Joint Pain Relief in Florida',
    description: 'Florida’s leader in orthopedic care. Book a consultation for spinal stenosis, sciatica, herniated disc, and joint pain treatments. Now accepting new patients in all locations.',
    images: ['https://mountainspineorthopedics.com/og-image-homepage.jpg'],
  },
  keywords: [
    "minimally invasive spine surgery Florida",
    "orthopedic surgeon near me",
    "back pain doctor Florida",
    "herniated disc specialist Florida",
    "cervical disc replacement expert",
    "spinal stenosis treatment Florida",
    "sciatica pain relief Florida",
    "orthopedic clinic Altamonte Springs",
    "free MRI review orthopedic",
    "Florida spine specialist"
  ],
};

// ✅ JSON-LD Schema for Search Engine Rich Results (This part is also correct)
const HomePageJsonLdSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    'name': 'Mountain Spine & Orthopedics',
    'url': 'https://mountainspineorthopedics.com/',
    'logo': 'https://mountainspineorthopedics.com/logo.png',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+1-833-931-4888',
      'contactType': 'Customer Service',
      'areaServed': 'Florida',
      'availableLanguage': ['en']
    },
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Altamonte Springs',
      'addressRegion': 'FL',
      'postalCode': '32701',
      'addressCountry': 'US'
    },
    'sameAs': [
      'https://www.facebook.com/mountainspineorthopedics',
      'https://www.instagram.com/mountainspineorthopedics',
      'https://www.linkedin.com/company/mountainspineorthopedics',
      'https://www.youtube.com/@mountainspineorthopedics'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// --- FIX: Separating the UI into a Client Component ---
// Your `HomePageUI` component contains all the interactive JSX.
// Ensure that the file (`app/ui/HomePageUI.tsx`) begins with the line: 'use client';
// This `page.tsx` file remains a clean Server Component.

export default function Home() {
  return (
    <>
      <HomePageJsonLdSchema />
      <HomePageUI />
    </>
  );
}