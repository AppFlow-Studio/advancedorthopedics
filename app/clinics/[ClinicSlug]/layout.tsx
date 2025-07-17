import { Metadata, ResolvingMetadata } from 'next';
import { clinics } from '@/components/data/clinics';

function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

export async function generateMetadata(
  { params }: { params: { ClinicSlug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const clinic = clinics.find(
    (clinic) => clinic.slug === params.ClinicSlug
  );

  if (!clinic) {
    const readableSlug = params.ClinicSlug.replace(/-/g, " ");
    return {
      title: `${capitalizeWords(readableSlug)} | Mountain Spine & Orthopedics`,
      description: "Learn about orthopedic care and treatments with our specialists in Florida."
    };
  }

  const clinicUrl = `https://mountainspineorthopedics.com/clinics/${clinic.slug}`;

  return {
    metadataBase: new URL('https://mountainspineorthopedics.com'),
    title: clinic.metaTitle || `${clinic.name} | Mountain Spine & Orthopedics`,
    description: clinic.metaDescription || clinic.paragraph,
    keywords: clinic.keywords || [clinic.name, "orthopedic clinic", "spine center"],
    
    openGraph: {
      title: clinic.metaTitle || `${clinic.name} | Mountain Spine & Orthopedics`,
      description: clinic.metaDescription || clinic.paragraph,
      type: "business.business",
      url: clinicUrl,
      images: [
        {
          url: "https://mountainspineorthopedics.com/newlogo4.png",
          width: 1200,
          height: 630,
          alt: clinic.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: clinic.metaTitle || `${clinic.name} | Mountain Spine & Orthopedics`,
      description: clinic.metaDescription || clinic.paragraph,
      images: ["https://mountainspineorthopedics.com/newlogo4.png"],
    },

    alternates: {
      canonical: clinicUrl,
    },
  };
} 