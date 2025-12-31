import type { Metadata, ResolvingMetadata } from "next";
import { conditions, conditionContentPlaceholders, ConditionContent } from "@/components/data/conditions";
import { buildCanonical, safeTitle, safeDescription, normalizeUTF8 } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import { generateFAQPageSchema } from "@/lib/faq-utils";
import { conditionFAQs } from "@/components/data/conditionFAQs";

// Helper to strip HTML and markdown from text for schema
function stripHtmlAndMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove markdown bold
    .replace(/<[^>]*>/g, ' ') // Remove HTML tags
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

// This function dynamically generates metadata for each condition page.
export async function generateMetadata(
    { params }: { params: Promise<{ ConditionDetails: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const resolvedParams = await params;
    
    // Check conditionContentPlaceholders first for new ConditionContent format
    const conditionContent = conditionContentPlaceholders.find((c: ConditionContent) => c.slug === resolvedParams.ConditionDetails);
    
    // Legacy fallback - check conditions array for old ConditionInfoProp format
    const condition = conditionContent 
        ? null 
        : conditions.find(c => c.slug === resolvedParams.ConditionDetails);

    if (!conditionContent && !condition) {
        const readableSlug = resolvedParams.ConditionDetails.replace(/-/g, " ");
        const canonicalUrl = buildCanonical(`/area-of-specialty/${resolvedParams.ConditionDetails}`);
        return {
            title: `${capitalizeWords(readableSlug)} | Mountain Spine & Orthopedics`,
            description: "Learn about orthopedic care and treatments with our specialists in Florida.",
            alternates: {
                canonical: canonicalUrl,
            },
        };
    }

    const isNewFormat = !!conditionContent;
    const canonicalUrl = buildCanonical(`/area-of-specialty/${isNewFormat ? conditionContent!.slug : condition!.slug}`);
    
    // Use cardImage for OpenGraph (better for social sharing - unique per condition)
    // Falls back to heroImage if cardImage not available
    const ogImage = isNewFormat
        ? (conditionContent!.cardImage || 
           (conditionContent!.heroImage 
               ? (typeof conditionContent!.heroImage === 'string' ? conditionContent!.heroImage : conditionContent!.heroImage.src)
               : getOgImageForPath('/area-of-specialty')))
        : (typeof condition!.card_img === 'string' 
            ? condition!.card_img 
            : condition!.card_img?.src || getOgImageForPath('/area-of-specialty'));

    // Normalize and clean metadata
    const normalizedTitle = isNewFormat
        ? (conditionContent!.metaTitle ? normalizeUTF8(conditionContent!.metaTitle) : `${conditionContent!.title} | Mountain Spine Orthopedics`)
        : (condition!.metaTitle 
            ? normalizeUTF8(condition!.metaTitle)
            : `${condition!.title} | Mountain Spine Orthopedics`);
    const normalizedDesc = isNewFormat
        ? (conditionContent!.metaDescription ? normalizeUTF8(conditionContent!.metaDescription) : conditionContent!.overview.body)
        : (condition!.metaDesc 
            ? normalizeUTF8(condition!.metaDesc)
            : condition!.body);

    const finalTitle = safeTitle(normalizedTitle, `${isNewFormat ? conditionContent!.title : condition!.title} | Mountain Spine Orthopedics`);
    const finalDescription = safeDescription(normalizedDesc, isNewFormat ? conditionContent!.overview.body : condition!.body);

    return {
      title: finalTitle,
      description: finalDescription,
      keywords: isNewFormat ? conditionContent!.keywords : (condition!.keywords || [condition!.title, "orthopedic condition", "spine condition"]),
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: finalTitle,
        description: finalDescription,
        url: canonicalUrl,
        siteName: 'Mountain Spine & Orthopedics',
        type: "article",
        images: [{
            url: ogImage,
            width: 1200,
            height: 630,
            alt: `Illustration of ${isNewFormat ? conditionContent!.title : condition!.title}`,
        }],
      },
      twitter: {
        card: "summary_large_image",
        title: finalTitle,
        description: finalDescription,
        images: [ogImage],
      },
    };
}

// --- SEO ENHANCEMENT: Consolidated JSON-LD Schema Component with @graph ---
// This component generates comprehensive schemas: MedicalCondition, WebPage, Service, MedicalOrganization, FAQPage, and BreadcrumbList
const ConditionSchemas = async ({ params }: { params: Promise<{ ConditionDetails: string }> }) => {
    const resolvedParams = await params;
    
    // Check conditionContentPlaceholders first for new ConditionContent format
    const conditionContent = conditionContentPlaceholders.find((c: ConditionContent) => c.slug === resolvedParams.ConditionDetails);
    
    // Legacy fallback - check conditions array for old ConditionInfoProp format
    const condition = conditionContent 
        ? null 
        : conditions.find(c => c.slug === resolvedParams.ConditionDetails);

    if (!conditionContent && !condition) {
        return null;
    }
    
    const isNewFormat = !!conditionContent;
    const conditionTitle = isNewFormat ? conditionContent!.title : condition!.title;
    const conditionDescription = stripHtmlAndMarkdown(isNewFormat ? conditionContent!.overview.body : condition!.body);
    const conditionUrl = buildCanonical(`/area-of-specialty/${isNewFormat ? conditionContent!.slug : condition!.slug}`);
    const imageUrl = isNewFormat
        ? (conditionContent!.heroImage 
            ? (typeof conditionContent!.heroImage === 'string' ? conditionContent!.heroImage : conditionContent!.heroImage.src)
            : '')
        : (typeof condition!.card_img === 'string' ? condition!.card_img : condition!.card_img?.src || '');

    // Get meta description for WebPage schema
    const metaDescription = isNewFormat
        ? (conditionContent!.metaDesc ? normalizeUTF8(conditionContent!.metaDesc) : conditionDescription)
        : (condition!.metaDesc ? normalizeUTF8(condition!.metaDesc) : conditionDescription);

    // Helper function to clean symptom text (remove markdown bold, extract clean text)
    const cleanSymptomText = (text: string): string => {
      return text.replace(/\*\*(.*?)\*\*/g, '$1').trim();
    };

    // Helper function to extract risk factors from causes body text
    const extractRiskFactors = (text: string): string[] => {
      // Split by common separators and clean
      const factors = text
        .split(/[,;]|and|or/)
        .map(f => f.trim().replace(/\*\*(.*?)\*\*/g, '$1'))
        .filter(f => f.length > 0 && !f.match(/^(the|a|an|is|are|can|may)$/i));
      return factors.length > 0 ? factors : [text.replace(/\*\*(.*?)\*\*/g, '$1')];
    };

    const baseUrl = 'https://mountainspineorthopedics.com';
    const organizationId = `${baseUrl}#medicalorganization`;
    const webpageId = `${conditionUrl}#webpage`;
    const medicalConditionId = `${conditionUrl}#medicalcondition`;
    const breadcrumbId = `${conditionUrl}#breadcrumb`;
    const serviceId = `${conditionUrl}#service`;

    // 1. MedicalOrganization Schema (Full reference, not just author)
    const medicalOrganizationSchema = {
        '@type': 'MedicalOrganization',
        '@id': organizationId,
        'name': 'Mountain Spine & Orthopedics',
        'description': 'Leading spine and orthopedic specialists in Florida providing advanced minimally invasive treatments, including Band-Aid Back Surgery, laser spine procedures, and comprehensive pain management.',
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
        'serviceArea': {
            '@type': 'GeoCircle',
            'geoMidpoint': {
                '@type': 'GeoCoordinates',
                'latitude': 27.7663,
                'longitude': -82.6404
            },
            'geoRadius': '300000'
        },
        'areaServed': [
            'Florida',
            'Hollywood, FL',
            'Orlando, FL',
            'Altamonte Springs, FL',
            'Davenport, FL',
            'Fort Pierce, FL',
            'Palm Beach Gardens, FL',
            'Miami Beach, FL',
            'Boca Raton, FL'
        ]
    };

    // 2. MedicalCondition Schema (Enhanced with @id and proper references)
    const medicalConditionSchema: any = {
        '@type': 'MedicalCondition',
        '@id': medicalConditionId,
        'name': conditionTitle,
        'description': conditionDescription,
        'url': conditionUrl,
        'author': {
            '@id': organizationId
        },
        'provider': {
            '@id': organizationId
        }
    };

    // Add optional fields only if they exist
    const alternateName = isNewFormat ? conditionContent!.keywords?.[0] : condition!.keywords?.[0];
    if (alternateName) {
        medicalConditionSchema.alternateName = alternateName;
    }
    if (imageUrl) {
        medicalConditionSchema.image = imageUrl;
    }

    // Add signOrSymptom as array (Google prefers arrays)
    if (isNewFormat && conditionContent!.symptoms.list.length > 0) {
        medicalConditionSchema.signOrSymptom = conditionContent!.symptoms.list.map((symptom: string) => ({
            '@type': 'MedicalSymptom',
            'name': cleanSymptomText(symptom)
        }));
    } else if (condition!.what_sym) {
        // For old format, try to split if it contains commas
        const symptoms = condition!.what_sym.includes(',') 
            ? condition!.what_sym.split(',').map(s => s.trim())
            : [condition!.what_sym];
        medicalConditionSchema.signOrSymptom = symptoms.map((symptom: string) => ({
            '@type': 'MedicalSymptom',
            'name': symptom.trim()
        }));
    }

    // Add riskFactor as array (Google prefers arrays)
    if (isNewFormat && conditionContent!.causes.body) {
        const riskFactors = extractRiskFactors(conditionContent!.causes.body);
        medicalConditionSchema.riskFactor = riskFactors.map((factor: string) => ({
            '@type': 'MedicalRiskFactor',
            'name': factor
        }));
    } else if (condition!.risk_fac) {
        const riskFactors = condition!.risk_fac.includes(',')
            ? condition!.risk_fac.split(',').map(f => f.trim())
            : [condition!.risk_fac];
        medicalConditionSchema.riskFactor = riskFactors.map((factor: string) => ({
            '@type': 'MedicalRiskFactor',
            'name': factor.trim()
        }));
    }

    // Add possibleTreatment
    if (isNewFormat && conditionContent!.conservativeCare.body) {
        medicalConditionSchema.possibleTreatment = {
            '@type': 'MedicalTherapy',
            'name': stripHtmlAndMarkdown(conditionContent!.conservativeCare.body)
        };
    } else if (condition!.treatment) {
        medicalConditionSchema.possibleTreatment = {
            '@type': 'MedicalTherapy',
            'name': stripHtmlAndMarkdown(condition!.treatment)
        };
    }

    // 3. WebPage Schema (Describes the page itself)
    const webpageSchema: any = {
        '@type': 'WebPage',
        '@id': webpageId,
        'url': conditionUrl,
        'name': conditionTitle,
        'description': metaDescription,
        'isPartOf': {
            '@id': `${baseUrl}#website`
        },
        'breadcrumb': {
            '@id': breadcrumbId
        },
        'mainEntity': {
            '@id': medicalConditionId
        },
        'about': {
            '@id': medicalConditionId
        },
        'publisher': {
            '@id': organizationId
        }
    };

    // Add image only if it exists
    if (imageUrl) {
        webpageSchema.image = imageUrl;
    }

    // 4. Service Schema (Indicates this is a service offered)
    const serviceSchema = {
        '@type': 'Service',
        '@id': serviceId,
        'name': `Treatment for ${conditionTitle}`,
        'description': `Expert diagnosis and treatment of ${conditionTitle} by board-certified orthopedic specialists at Mountain Spine & Orthopedics. Comprehensive care including conservative treatments and advanced minimally invasive surgical options.`,
        'url': conditionUrl,
        'provider': {
            '@id': organizationId
        },
        'serviceType': [
            'Medical Treatment',
            'Orthopedic Care',
            'Spine Care',
            'Pain Management'
        ],
        'areaServed': {
            '@type': 'State',
            'name': 'Florida'
        },
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': `${conditionTitle} Treatment Services`,
            'itemListElement': {
                '@type': 'Offer',
                'itemOffered': {
                    '@id': medicalConditionId
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
                'name': 'Area of Specialty',
                'item': `${baseUrl}/area-of-specialty` 
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': conditionTitle,
                'item': conditionUrl
            }
        ]
    };

    // 6. FAQPage Schema - Prioritize dedicated FAQ data file, then fallback to conditionContent.faqs
    let faqSchema = null;
    
    // First check if FAQs exist in the dedicated data file (Priority)
    const conditionSlug = isNewFormat ? conditionContent!.slug : condition!.slug;
    const specificFAQs = conditionFAQs[conditionSlug];
    
    if (specificFAQs && specificFAQs.length > 0) {
        faqSchema = {
            '@type': 'FAQPage',
            '@id': `${conditionUrl}#faqpage`,
            'url': conditionUrl,
            'mainEntity': specificFAQs.map(faq => ({
                '@type': 'Question',
                'name': faq.question,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': faq.answer
                }
            })),
            'about': {
                '@id': medicalConditionId
            },
            'isPartOf': {
                '@id': webpageId
            }
        };
    } else if (isNewFormat && conditionContent!.faqs && conditionContent!.faqs.length > 0) {
        // Fallback to internal content FAQs if no external file match
        const faqData = generateFAQPageSchema(conditionContent!.faqs, conditionUrl);
        faqSchema = {
            '@type': 'FAQPage',
            '@id': `${conditionUrl}#faqpage`,
            'url': conditionUrl,
            'mainEntity': faqData.mainEntity,
            'about': {
                '@id': medicalConditionId
            },
            'isPartOf': {
                '@id': webpageId
            }
        };
    }

    // Build consolidated @graph array
    const graphSchemas: any[] = [
        medicalOrganizationSchema,
        medicalConditionSchema,
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

    // Render single consolidated schema (server-side, included in initial HTML)
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
        />
    );
};


// Main layout component that injects the schemas and renders the page
export default async function ConditionLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ ConditionDetails: string }>;
}) {
    return (
        <>
            {await ConditionSchemas({ params })}
            {children}
        </>
    );
}