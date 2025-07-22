import StaticNav from "@/components/StaticNav.server";

export const metadata = {
  title: 'Spine Wellness Blog | Mountain Spine & Orthopedics',
  description: 'Explore expert-written articles on spine health, orthopedic care, and pain management from Mountain Spine & Orthopedics. Stay informed and take control of your recovery journey.',
  openGraph: {
    title: 'Spine Wellness Blog | Mountain Spine & Orthopedics',
    description: 'Explore expert-written articles on spine health, orthopedic care, and pain management from Mountain Spine & Orthopedics. Stay informed and take control of your recovery journey.',
    type: 'website',
    url: 'https://mountainspineorthopedics.com/blogs',
  },
  twitter: {
    card: 'summary',
    title: 'Spine Wellness Blog | Mountain Spine & Orthopedics',
    description: 'Explore expert-written articles on spine health, orthopedic care, and pain management from Mountain Spine & Orthopedics. Stay informed and take control of your recovery journey.',
  },
  alternates: {
    canonical: 'https://mountainspineorthopedics.com/blogs',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StaticNav />
      {children}
    </>
  );
} 