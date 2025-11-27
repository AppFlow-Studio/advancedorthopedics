// Import required types for metadata handling
import type { Metadata, ResolvingMetadata } from "next";
import type { StaticImageData } from "next/image";
import React from "react";

// Import the list of all treatments
import { AllTreatments } from "@/components/data/treatments";
import { buildCanonical, safeTitle, safeDescription, normalizeUTF8 } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

// Helper function to safely get the image source URL as a string
const getImageSource = (image: string | StaticImageData | undefined): string => {
  if (!image) return "https://mountainspineortho.b-cdn.net/public/default-treatment-image.jpg"; // Provide a default fallback image
  return typeof image === "string" ? image : image.src;
};

function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

// This function dynamically generates metadata for each treatment page
export async function generateMetadata(
  { params }: { params: Promise<{ TreatmentDetails: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const treatment = AllTreatments.find(
    (treatment) => treatment.slug === resolvedParams.TreatmentDetails
  );

  if (!treatment) {
    const readableSlug = resolvedParams.TreatmentDetails.replace(/-/g, " ");
    const canonicalUrl = buildCanonical(`/treatments/${resolvedParams.TreatmentDetails}`);
    return {
      title: "Treatment Not Found | Mountain Spine & Orthopedics",
      description: "Learn about orthopedic care and treatments with our specialists in Florida.",
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  const canonicalUrl = buildCanonical(`/treatments/${treatment.slug}`);
  
  // Use the specific image for the treatment, with a fallback
  const ogImage = typeof treatment.inTxt_img === 'string' 
    ? treatment.inTxt_img 
    : treatment.inTxt_img?.src || getOgImageForPath('/treatments');

  // Robust, trimmed, non-empty title/description
  const title = safeTitle(treatment.metaTitle, `${treatment.title} | Mountain Spine & Orthopedics`);
  const description = safeDescription(treatment.metaDesc, treatment.detail || treatment.body || `Learn about ${treatment.title}, offered by our specialists at Mountain Spine & Orthopedics.`);

  return {
    title,
    description,
    keywords: treatment.keywords || [treatment.title, "orthopedic treatment", "spine surgery"],
    openGraph: {
      title,
      description,
      type: "article",
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: treatment.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// --- SEO ENHANCEMENT: Combined JSON-LD Schema Component ---
const TreatmentSchemas = async ({ params }: { params: Promise<{ TreatmentDetails: string }> }) => {
    const resolvedParams = await params;
    const treatment = AllTreatments.find(t => t.slug === resolvedParams.TreatmentDetails);

    if (!treatment) {
        return null;
    }
    
    const treatmentUrl = `https://mountainspineorthopedics.com/treatments/${treatment.slug}`;
    const imageUrl = typeof treatment.inTxt_img === 'string' 
        ? treatment.inTxt_img 
        : treatment.inTxt_img?.src || '';

    // 1. MedicalProcedure Schema
    const medicalProcedureSchema = {
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        'name': treatment.title,
        'description': treatment.body,
        'url': treatmentUrl,
        'image': imageUrl,
        'bodyLocation': treatment.tag,
        'howPerformed': treatment.procedure_info,
        'preparation': treatment.detail,
        'followup': treatment.recovery_info,
        'author': {
            '@type': 'Organization',
            'name': 'Mountain Spine & Orthopedics'
        },
        'recognizingAuthority': {
            '@type': 'Organization',
            'name': 'Mountain Spine & Orthopedics',
            'url': 'https://mountainspineorthopedics.com'
        },
        'provider': {
            '@type': 'MedicalOrganization',
            'name': 'Mountain Spine & Orthopedics',
            'url': 'https://mountainspineorthopedics.com'
        }
    };

    // 2. FAQPage Schema
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': `What are the benefits of ${treatment.title}?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': typeof treatment.benefits === 'string' 
                        ? treatment.benefits 
                        : "Relieves spine and joint pain and improves mobility."
                }
            },
            {
                '@type': 'Question',
                'name': `What conditions does ${treatment.title} treat?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': treatment.conditions_treated || "Treats orthopedic and spinal conditions."
                }
            },
            {
                '@type': 'Question',
                'name': 'What is the recovery process like?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': treatment.recovery_info || "Recovery may include referral to a licensed physical therapist and a gradual return to activities, depending on your specific treatment plan."
                }
            }
        ]
    };

    // 3. BreadcrumbList Schema
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

    // Render all schemas
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
};

export default async function Layout({ 
    children,
    params 
}: { 
    children: React.ReactNode;
    params: Promise<{ TreatmentDetails: string }>;
}) {
  return (
    <>
      {await TreatmentSchemas({ params })}
      {children}
    </>
  );
}
