import type { Metadata } from 'next';
import StaticNav from "@/components/StaticNav.server";

export const metadata = {
    title: 'Orthopedic Treatments | Mountain Spine & Orthopedics',
    description: 'Discover advanced orthopedic and spine treatments at Mountain Spine & Orthopedics. Learn about minimally invasive procedures, pain management, and recovery options.',
    openGraph: {
      title: 'Orthopedic Treatments | Mountain Spine & Orthopedics',
      description: 'Discover advanced orthopedic and spine treatments at Mountain Spine & Orthopedics. Learn about minimally invasive procedures, pain management, and recovery options.',
      type: 'website',
      url: 'https://mountainspineorthopedics.com/treatments',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Orthopedic Treatments | Mountain Spine & Orthopedics',
      description: 'Discover advanced orthopedic and spine treatments at Mountain Spine & Orthopedics. Learn about minimally invasive procedures, pain management, and recovery options.',
    },
    keywords: [
      'orthopedic treatments',
      'spine surgery',
      'pain management',
      'minimally invasive procedures',
      'joint replacement',
      'orthopedic care Florida',
      'Mountain Spine & Orthopedics',
      'treatment options'
    ]
  };

export default function TreatmentsLayout({
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