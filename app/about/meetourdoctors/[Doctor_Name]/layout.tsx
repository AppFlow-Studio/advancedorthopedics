import type { Metadata } from "next";
import { Doctors } from "@/components/data/doctors";

export async function generateMetadata(
  { params }: { params: { Doctor_Name: string } }
): Promise<Metadata> {
  const doctor = Doctors.find((d) => d.slug === params.Doctor_Name);

  if (!doctor) {
    return {
      title: "Doctor Not Found | Mountain Spine & Orthopedics",
      description: "The requested doctor profile could not be found.",
    };
  }

  return {
    title: `${doctor.name} | Mountain Spine & Orthopedics`,
    description: doctor.desc,
    alternates: {
      canonical: `https://mountainspineorthopedics.com/about/meetourdoctors/${doctor.slug}`,
    },
    openGraph: {
      title: doctor.name,
      description: doctor.desc,
      url: `https://mountainspineorthopedics.com/about/meetourdoctors/${doctor.slug}`,
      type: "profile",
      images: [
        {
          url: `https://mountainspineorthopedics.com${doctor.img?.src || "/default-doctor.png"}`,
          alt: doctor.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doctor.name,
      description: doctor.desc,
      images: [`https://mountainspineorthopedics.com${doctor.img?.src || "/default-doctor.png"}`],
    },
  };
}

export default function DoctorLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { Doctor_Name: string };
}) {
  const doctor = Doctors.find(d => d.slug === params.Doctor_Name);

  return (
    <>
      {doctor && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: doctor.name,
              jobTitle: doctor.practice,
              description: doctor.desc,
              image: `https://mountainspineorthopedics.com${doctor.img?.src || "/default-doctor.png"}`,
              worksFor: {
                "@type": "Organization",
                name: "Mountain Spine and Orthopedics",
                url: "https://mountainspineorthopedics.com",
              },
              url: `https://mountainspineorthopedics.com/about/meetourdoctors/${doctor.slug}`,
            }),
          }}
        />
      )}
      {children}
    </>
  );
}

