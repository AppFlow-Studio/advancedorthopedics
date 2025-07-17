import type { Metadata } from 'next';
import StaticNav from "@/components/StaticNav.server";

export const metadata: Metadata = {
    title: 'Orthopedic Conditions | Mountain Spine & Orthopedics',
    description: 'Explore all spine, joint, and orthopedic conditions treated at Mountain Spine & Orthopedics. Find expert information and personalized care for your pain.',
    openGraph: {
      title: 'Orthopedic Conditions | Mountain Spine & Orthopedics',
      description: 'Explore all spine, joint, and orthopedic conditions treated at Mountain Spine & Orthopedics. Find expert information and personalized care for your pain.',
      type: 'website',
      url: 'https://mountainspineorthopedics.com/area-of-speciality',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Orthopedic Conditions | Mountain Spine & Orthopedics',
      description: 'Explore all spine, joint, and orthopedic conditions treated at Mountain Spine & Orthopedics. Find expert information and personalized care for your pain.',
    },
    keywords: [
      'orthopedic conditions',
      'spine conditions',
      'joint pain',
      'back pain',
      'neck pain',
      'orthopedic care Florida',
      'Mountain Spine & Orthopedics',
      'condition checker'
    ]
  };

export default function AreaOfSpecialityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StaticNav />
      {children}
    </>
  );
}