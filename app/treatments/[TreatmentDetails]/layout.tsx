// Import required types for metadata handling
import type { Metadata, ResolvingMetadata } from "next";
import type { StaticImageData } from "next/image";
import React from "react";

// Import the list of all treatments
import { AllTreatments, treatmentContentPlaceholders, allTreatmentContent, TreatmentContent } from "@/components/data/treatments";
import { treatmentFAQs } from "@/components/data/treatmentFAQs";
import { generateFAQPageSchema } from "@/lib/faq-utils";
import { buildCanonical, safeTitle, safeDescription, normalizeUTF8 } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import { getTreatmentMetadata, generateTreatmentMetadataFallback } from "@/lib/metadata-seo";

// Helper function to safely get the image source URL as a string
const getImageSource = (image: string | StaticImageData | undefined): string => {
  if (!image) return "https://mountainspineortho.b-cdn.net/public/default-treatment-image.jpg"; // Provide a default fallback image
  return typeof image === "string" ? image : image.src;
};

function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

// Helper to strip HTML and markdown from text for schema
function stripHtmlAndMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove markdown bold
    .replace(/<[^>]*>/g, ' ') // Remove HTML tags
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// This function dynamically generates metadata for each treatment page
export async function generateMetadata(
  { params }: { params: Promise<{ TreatmentDetails: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  
  // Check for new TreatmentContent format first (includes all batches)
  const treatmentContent = allTreatmentContent.find(
    (x: TreatmentContent) => x.slug === resolvedParams.TreatmentDetails
  );
  
  // Fall back to old TreatmentsCardProp format
  const treatment = treatmentContent 
    ? null 
    : AllTreatments.find(t => t.slug === resolvedParams.TreatmentDetails);

  if (!treatmentContent && !treatment) {
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

  const isNewFormat = !!treatmentContent;
  const canonicalUrl = buildCanonical(`/treatments/${isNewFormat ? treatmentContent!.slug : treatment!.slug}`);
  
  // Use the specific image for the treatment, with a fallback
  const ogImage = isNewFormat
    ? (typeof treatmentContent!.heroImage === 'string' ? treatmentContent!.heroImage : treatmentContent!.heroImage.src)
    : (typeof treatment!.inTxt_img === 'string' 
      ? treatment!.inTxt_img 
      : treatment!.inTxt_img?.src || getOgImageForPath('/treatments'));

  // Get SEO-optimized metadata from centralized helper
  const slug = isNewFormat ? treatmentContent!.slug : treatment!.slug;
  const treatmentTitle = isNewFormat ? treatmentContent!.title : treatment!.title;
  const seoMetadata = getTreatmentMetadata(slug) || generateTreatmentMetadataFallback(treatmentTitle);
  
  // Use SEO metadata with normalization
  const title = normalizeUTF8(seoMetadata.metaTitle);
  const description = normalizeUTF8(seoMetadata.metaDescription);

  return {
    title,
    description,
    keywords: isNewFormat ? treatmentContent!.keywords : (treatment!.keywords || [treatment!.title, "orthopedic treatment", "spine surgery"]),
    openGraph: {
      title,
      description,
      type: "article",
      url: canonicalUrl,
      siteName: 'Mountain Spine & Orthopedics',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: isNewFormat ? treatmentContent!.title : treatment!.title,
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
    
    // Check for new TreatmentContent format first (includes all batches)
    const treatmentContent = allTreatmentContent.find((x: TreatmentContent) => x.slug === resolvedParams.TreatmentDetails);
    
    // Fall back to old TreatmentsCardProp format
    const treatment = treatmentContent 
        ? null 
        : AllTreatments.find(t => t.slug === resolvedParams.TreatmentDetails);

    if (!treatmentContent && !treatment) {
        return null;
    }
    
    const isNewFormat = !!treatmentContent;
    const baseUrl = 'https://mountainspineorthopedics.com';
    const treatmentSlug = isNewFormat ? treatmentContent!.slug : treatment!.slug;
    const treatmentTitle = isNewFormat ? treatmentContent!.title : treatment!.title;
    const treatmentUrl = `${baseUrl}/treatments/${treatmentSlug}`;
    const treatmentDescription = stripHtmlAndMarkdown(isNewFormat ? treatmentContent!.overview.body : treatment!.body);
    const imageUrl = isNewFormat
        ? (typeof treatmentContent!.heroImage === 'string' ? treatmentContent!.heroImage : treatmentContent!.heroImage.src)
        : (typeof treatment!.inTxt_img === 'string' 
            ? treatment!.inTxt_img 
            : treatment!.inTxt_img?.src || '');

    // Unique IDs for cross-referencing
    const organizationId = `${baseUrl}#medicalorganization`;
    const medicalProcedureId = `${treatmentUrl}#medicalprocedure`;
    const webpageId = `${treatmentUrl}#webpage`;
    const breadcrumbId = `${treatmentUrl}#breadcrumb`;
    const serviceId = `${treatmentUrl}#service`;

    // 1. MedicalOrganization Schema
    const medicalOrganizationSchema = {
        '@type': 'MedicalOrganization',
        '@id': organizationId,
        'name': 'Mountain Spine & Orthopedics',
        'url': baseUrl,
        'logo': `${baseUrl}/newlogo4.png`,
        'image': `${baseUrl}/herosectionimg.jpg`,
        'telephone': [
            '(561) 223-9959',
            '(754) 212-8736',
            '(407) 565-7598',
            '(407) 960-1717',
            '(863) 777-5805',
            '(561) 556-1802',
            '(954) 987-2047',
            '(561) 544-5501'
        ],
        'medicalSpecialty': [
            'Orthopedic Surgery',
            'Spine Surgery',
            'Sports Medicine',
            'Pain Management',
            'Minimally Invasive Surgery',
            'Joint Replacement',
            'Spinal Fusion',
            'Discectomy',
            'Arthroscopy'
        ],
        'areaServed': [
            {
                '@type': 'State',
                'name': 'Florida',
                'sameAs': 'https://en.wikipedia.org/wiki/Florida'
            },
            {
                '@type': 'State',
                'name': 'New Jersey',
                'sameAs': 'https://en.wikipedia.org/wiki/New_Jersey'
            },
            {
                '@type': 'State',
                'name': 'New York',
                'sameAs': 'https://en.wikipedia.org/wiki/New_York_(state)'
            }
        ]
    };

    // 2. MedicalProcedure Schema (Enhanced with @id)
    const medicalProcedureSchema: any = {
        '@type': 'MedicalProcedure',
        '@id': medicalProcedureId,
        'name': treatmentTitle,
        'description': treatmentDescription,
        'url': treatmentUrl,
        'bodyLocation': isNewFormat ? 'Spine' : treatment!.tag,
        'howPerformed': isNewFormat 
            ? stripHtmlAndMarkdown(treatmentContent!.procedure.steps.join(' ')) 
            : (treatment!.procedure_info ? stripHtmlAndMarkdown(treatment!.procedure_info) : ''),
        'preparation': isNewFormat 
            ? stripHtmlAndMarkdown(treatmentContent!.overview.body) 
            : (treatment!.detail ? stripHtmlAndMarkdown(treatment!.detail) : ''),
        'followup': isNewFormat 
            ? stripHtmlAndMarkdown(treatmentContent!.recovery.details) 
            : (treatment!.recovery_info ? stripHtmlAndMarkdown(treatment!.recovery_info) : ''),
        'author': {
            '@id': organizationId
        },
        'provider': {
            '@id': organizationId
        }
    };

    // Add image only if it exists
    if (imageUrl) {
        medicalProcedureSchema.image = imageUrl;
    }

    // 3. WebPage Schema
    const webpageSchema: any = {
        '@type': 'WebPage',
        '@id': webpageId,
        'url': treatmentUrl,
        'name': treatmentTitle,
        'description': treatmentDescription,
        'isPartOf': {
            '@id': `${baseUrl}#website`
        },
        'breadcrumb': {
            '@id': breadcrumbId
        },
        'mainEntity': {
            '@id': medicalProcedureId
        },
        'about': {
            '@id': medicalProcedureId
        },
        'publisher': {
            '@id': organizationId
        }
    };

    // Add image only if it exists
    if (imageUrl) {
        webpageSchema.image = imageUrl;
    }

    // 4. Service Schema
    const serviceSchema = {
        '@type': 'Service',
        '@id': serviceId,
        'name': treatmentTitle,
        'description': `Expert ${treatmentTitle} performed by board-certified orthopedic specialists at Mountain Spine & Orthopedics. Comprehensive care with advanced minimally invasive techniques.`,
        'url': treatmentUrl,
        'provider': {
            '@id': organizationId
        },
        'serviceType': [
            'Medical Treatment',
            'Orthopedic Care',
            'Spine Care',
            'Pain Management'
        ],
        'areaServed': [
            {
                '@type': 'State',
                'name': 'Florida',
                'sameAs': 'https://en.wikipedia.org/wiki/Florida'
            },
            {
                '@type': 'State',
                'name': 'New Jersey',
                'sameAs': 'https://en.wikipedia.org/wiki/New_Jersey'
            },
            {
                '@type': 'State',
                'name': 'New York',
                'sameAs': 'https://en.wikipedia.org/wiki/New_York_(state)'
            }
        ],
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': `${treatmentTitle} Services`,
            'itemListElement': {
                '@type': 'Offer',
                'itemOffered': {
                    '@id': medicalProcedureId
                }
            }
        }
    };

    // 5. BreadcrumbList Schema
    const breadcrumbSchema = {
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': `${baseUrl}/`
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Treatments',
                'item': `${baseUrl}/treatments`
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': treatmentTitle,
                'item': treatmentUrl
            }
        ]
    };

    // 6. FAQPage Schema - Prioritize dedicated FAQ data file, then fallback to content FAQs or generic
    let faqSchema: any = null;
    const specificFAQs = treatmentFAQs[treatmentSlug];
    
    if (specificFAQs && specificFAQs.length > 0) {
        faqSchema = {
            '@type': 'FAQPage',
            '@id': `${treatmentUrl}#faqpage`,
            'url': treatmentUrl,
            'mainEntity': specificFAQs.map(faq => ({
                '@type': 'Question',
                'name': faq.question,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': stripHtmlAndMarkdown(faq.answer)
                }
            })),
            'about': {
                '@id': medicalProcedureId
            },
            'isPartOf': {
                '@id': webpageId
            }
        };
    } else if (isNewFormat && treatmentContent!.faqs && treatmentContent!.faqs.length > 0) {
        const faqData = generateFAQPageSchema(treatmentContent!.faqs, treatmentUrl);
        faqSchema = {
            '@type': 'FAQPage',
            '@id': `${treatmentUrl}#faqpage`,
            'url': treatmentUrl,
            'mainEntity': faqData.mainEntity,
            'about': {
                '@id': medicalProcedureId
            },
            'isPartOf': {
                '@id': webpageId
            }
        };
    } else if (isNewFormat) {
        faqSchema = {
            '@type': 'FAQPage',
            '@id': `${treatmentUrl}#faqpage`,
            'url': treatmentUrl,
            'mainEntity': [
                {
                    '@type': 'Question',
                    'name': `What are the benefits of ${treatmentTitle}?`,
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': treatmentContent!.benefits.length > 0 
                            ? stripHtmlAndMarkdown(treatmentContent!.benefits.join(' '))
                            : "Relieves spine and joint pain and improves mobility."
                    }
                },
                {
                    '@type': 'Question',
                    'name': `Who is a candidate for ${treatmentTitle}?`,
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': treatmentContent!.candidates.list.length > 0
                            ? stripHtmlAndMarkdown(treatmentContent!.candidates.list.join(' '))
                            : "Patients with orthopedic or spinal conditions that have not responded to conservative treatments."
                    }
                },
                {
                    '@type': 'Question',
                    'name': 'What is the recovery process like?',
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': treatmentContent!.recovery.details 
                            ? stripHtmlAndMarkdown(treatmentContent!.recovery.details)
                            : "Recovery may include referral to a licensed physical therapist and a gradual return to activities, depending on your specific treatment plan."
                    }
                }
            ],
            'about': {
                '@id': medicalProcedureId
            },
            'isPartOf': {
                '@id': webpageId
            }
        };
    } else if (treatment) {
        faqSchema = {
            '@type': 'FAQPage',
            '@id': `${treatmentUrl}#faqpage`,
            'url': treatmentUrl,
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
            ],
            'about': {
                '@id': medicalProcedureId
            },
            'isPartOf': {
                '@id': webpageId
            }
        };
    }

    // Build consolidated @graph array
    const graphSchemas: any[] = [
        medicalOrganizationSchema,
        medicalProcedureSchema,
        webpageSchema,
        serviceSchema,
        breadcrumbSchema
    ];

    // Add FAQPage if it exists
    if (faqSchema) {
        graphSchemas.push(faqSchema);
    }

    // Return single consolidated @graph schema
    const consolidatedSchema = {
        '@context': 'https://schema.org',
        '@graph': graphSchemas
    };

    // Render single consolidated schema
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
        />
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
