// Import required types for metadata handling
import type { Metadata, ResolvingMetadata } from "next";
import type { StaticImageData } from "next/image";
import React from "react";

// Import the list of all treatments
import { AllTreatments } from "@/components/data/treatments";

// Helper function to safely get the image source URL as a string
const getImageSource = (image: string | StaticImageData | undefined): string => {
  if (!image) return "https://mountainspineortho.b-cdn.net/public/default-treatment-image.jpg"; // Provide a default fallback image
  return typeof image === "string" ? image : image.src;
};

// This function dynamically generates metadata for each treatment page
export async function generateMetadata(
  { params }: { params: { TreatmentDetails: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  
  // Find the matching treatment in the list based on the slug
  const treatment = AllTreatments.find(
    (x) => x.slug === params.TreatmentDetails
  );

  // If no treatment is found, return default metadata for a 404 page
  if (!treatment) {
    return {
      title: "Treatment Not Found | Mountain Spine & Orthopedics",
      description: "This treatment may have been removed or does not exist.",
    };
  }

  const imageSource = getImageSource(treatment.card_img);
  const treatmentUrl = `https://mountainspineorthopedics.com/treatments/${treatment.slug}`;

  return {
    metadataBase: new URL('https://mountainspineorthopedics.com'),
    // --- SEO OPTIMIZATION: Using a more effective title and description logic ---
    title: `${treatment.title} | Mountain Spine & Orthopedics`, // SEO Page Title
    description: treatment.body, // Meta Description using the body field
    keywords: treatment.keywords || [treatment.title, "orthopedic treatment", "spine surgery"],
    
    // Open Graph metadata for social sharing
    openGraph: {
      title: `${treatment.title} | Mountain Spine & Orthopedics`,
      description: treatment.body,
      type: "article",
      url: treatmentUrl,
      images: [
        {
          url: imageSource,
          width: 1200, // Standard OG image width
          height: 630, // Standard OG image height
          alt: treatment.title,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: `${treatment.title} | Mountain Spine & Orthopedics`,
      description: treatment.body,
      images: [imageSource],
    },

    // Canonical link to avoid duplicate content issues
    alternates: {
      canonical: treatmentUrl,
    },
  };
}

// --- SEO ENHANCEMENT: Combined JSON-LD Schema for Procedure and Breadcrumbs ---
const CombinedSchema = ({ params }: { params: { TreatmentDetails: string } }) => {
    const treatment = AllTreatments.find(t => t.slug === params.TreatmentDetails);

    if (!treatment) {
        return null;
    }

    const treatmentUrl = `https://mountainspineorthopedics.com/treatments/${treatment.slug}`;

    // Schema for the Medical Procedure
    const procedureSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": treatment.title,
        "description": treatment.body,
        "body": treatment.detail, // A short summary of the procedure
        "procedureType": "SurgicalProcedure", // This can be adjusted if some are non-surgical
        "followup": treatment.recovery_info,
        "howPerformed": treatment.procedure_info,
        "indication": {
            "@type": "MedicalIndication",
            "name": treatment.conditions_treated
        }
    };

    // Schema for the breadcrumb trail
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://mountainspineorthopedics.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Treatments",
                "item": "https://mountainspineorthopedics.com/treatments"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": treatment.title,
                "item": treatmentUrl
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
};


// Main layout component that injects the schemas and renders the page
export default function TreatmentLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { TreatmentDetails: string };
}) {
    return (
      <>
        <CombinedSchema params={params} />
        {children}
      </>
    );
}
