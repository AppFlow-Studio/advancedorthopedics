import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

export const metadata = {
  title: 'Orthopedic Clinic Locations in FL, NJ, NY & PA | Mountain Spine & Orthopedics',
  description: 'Find all Mountain Spine & Orthopedics clinic locations across Florida, New Jersey, New York, and Pennsylvania. Expert spine and joint care near you.',
  keywords: [
    'orthopedic clinic locations',
    'orthopedic surgeon near me',
    'spine surgeon near me',
    'Florida orthopedic clinic',
    'New Jersey orthopedic clinic',
    'New York orthopedic clinic',
    'Pennsylvania orthopedic clinic',
    'orthopedic specialist Florida',
    'spine clinic Florida',
    'joint pain doctor',
    'back pain clinic',
    'sports injury doctor',
    'orthopedic same-day appointments',
    'orthopedic doctor near me',
    'orthopedic clinic near me',
    'joint replacement',
    'spine surgery',
    'Mountain Spine & Orthopedics locations',
    'best orthopedic clinic',
    'orthopedic specialist near me'
  ],
  openGraph: {
    title: 'Orthopedic Clinic Locations in FL, NJ, NY & PA | Mountain Spine & Orthopedics',
    description: 'Find all Mountain Spine & Orthopedics clinic locations across Florida, New Jersey, New York, and Pennsylvania. Expert spine and joint care near you.',
    url: buildCanonical('/locations'),
    siteName: 'Mountain Spine & Orthopedics',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: getOgImageForPath('/locations'),
        width: 1200,
        height: 630,
        alt: 'Mountain Spine & Orthopedics clinic locations across FL, NJ, NY and PA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orthopedic Clinic Locations in FL, NJ, NY & PA | Mountain Spine & Orthopedics',
    description: 'Find all Mountain Spine & Orthopedics clinic locations across Florida, New Jersey, New York, and Pennsylvania. Expert spine and joint care near you.',
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
