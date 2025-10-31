import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

export const metadata = {
  title: 'Florida Clinic Locations | Mountain Spine & Orthopedics',
  description: 'Find all Mountain Spine & Orthopedics clinic locations across Florida. Expert spine and joint care near you.',
  keywords: [
    'Florida orthopedic clinic',
    'orthopedic locations Florida',
    'orthopedic specialist Florida',
    'spine clinic Florida',
    'joint pain doctor Florida',
    'orthopedic surgeon near me',
    'back pain clinic Florida',
    'sports injury doctor Florida',
    'orthopedic same-day appointments',
    'orthopedic care Florida',
    'orthopedic center Florida',
    'orthopedic doctor near me',
    'orthopedic clinic near me',
    'joint replacement Florida',
    'spine surgery Florida',
    'orthopedic appointment Florida',
    'orthopedic urgent care Florida',
    'Mountain Spine & Orthopedics locations',
    'best orthopedic clinic Florida',
    'orthopedic specialist near me'
  ],
  openGraph: {
    title: 'Florida Clinic Locations | Mountain Spine & Orthopedics',
    description: 'Find all Mountain Spine & Orthopedics clinic locations across Florida. Expert spine and joint care near you.',
    url: buildCanonical('/locations'),
    siteName: 'Mountain Spine & Orthopedics',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: getOgImageForPath('/locations'),
        width: 1200,
        height: 630,
        alt: 'Mountain Spine & Orthopedics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Clinic Locations | Mountain Spine & Orthopedics',
    description: 'Find all Mountain Spine & Orthopedics clinic locations across Florida. Expert spine and joint care near you.',
    images: [getOgImageForPath('/locations')],
  },
  alternates: {
    canonical: buildCanonical('/locations'),
  },
};

import LocationsClient from './LocationsClient';
import { clinics } from '@/components/data/clinics';
import { LocationItemListSchema } from '@/components/LocationItemListSchema';

export default function LocationsPage() {
  return (
    <>
      <LocationItemListSchema clinics={clinics} />
      <LocationsClient />
    </>
  );
}
