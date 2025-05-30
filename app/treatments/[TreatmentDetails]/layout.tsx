// Import required types for metadata handling
import type { Metadata, ResolvingMetadata } from "next";
import type { StaticImageData } from "next/image";

// Import the list of all treatments with their metadata fields
import { AllTreatments } from "@/components/data/treatments";

// Helper function to safely get image source
const getImageSource = (image: string | StaticImageData | undefined): string => {
  if (!image) return "https://mountainspineortho.b-cdn.net/public/AboutUsLanding.jpeg";
  return typeof image === "string" ? image : image.src;
};

// This function dynamically generates metadata for each treatment page
export async function generateMetadata(
  { params }: { params: Promise<{ TreatmentDetails: string }> }, // Extract route parameter
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Resolve route params (e.g., slug = 'totalkneereplacement')
  const resolvedParams = await params;

  // Find the matching treatment in the list based on the slug
  const treatment = AllTreatments.find(
    (x) => x.slug === resolvedParams.TreatmentDetails
  );

  // If no treatment is found, return a default error page metadata
  if (!treatment) {
    return {
      title: "Treatment Not Found | Mountain Spine & Orthopedics",
      description: "This treatment may have been removed or does not exist.",
    };
  }

  // Get the safe image source
  const imageSource = getImageSource(treatment.card_img);

  // ✅ Primary Metadata Definition (For SEO & social)
  return {
    title: `${treatment.title} | Mountain Spine & Orthopedics`, // SEO Page Title
    description: treatment.body, // Meta Description
    keywords: [
      treatment.title, // Keyword: exact treatment name
      "Artificial Disc Replacement is an option for patients with chronic neck or back pain and neurological symptoms caused by: Symptomatic degenerative disc disease affecting a single spinal level (or two levels in the cervical spine). Large or contained disc herniations causing significant nerve compression. Disc collapse leading to loss of disc height and nerve root impingement. Pain and dysfunction unresponsive to conservative treatments like physical therapy, medication, or injections. Ideal candidates typically have healthy facet joints at the affected level, no significant spinal instability beyond the damaged disc, and no history of prior spinal surgery or infection at that level.", // Keyword: condition treated
      "spine treatment",
      "orthopedic surgery",
      "Florida orthopedic care",
      "back pain relief",
      "joint pain specialist",
    ], // Meta Keywords (for reference only, not a ranking factor)

    // Open Graph metadata for social sharing
    openGraph: {
      title: `${treatment.title} | Mountain Spine & Orthopedics`,
      description: treatment.body,
      type: "article",
      url: `https://mountainspineorthopedics.com/treatments/${treatment.slug}`,
      publishedTime: "2025-05-18",
      modifiedTime: "2025-05-18",
      authors: ["https://mountainspineorthopedics.com/about"],
      tags: [treatment.title, "Back Pain", "Orthopedics", "Spine Surgery"], // Add related topics
      images: [
        {
          url: imageSource,
          width: 1024,
          height: 576,
          alt: treatment.title,
          type: "image/png",
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: treatment.title,
      description: treatment.body,
      images: [imageSource],
    },

    // Canonical link to avoid duplicate content issues
    alternates: {
      canonical: `https://mountainspineorthopedics.com/treatments/${treatment.slug}`,
    },
  };
}

// Layout wrapper for individual treatment page content
export default function TreatmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
