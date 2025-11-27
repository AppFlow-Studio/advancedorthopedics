import type { Metadata, ResolvingMetadata } from "next";
import { conditions } from "@/components/data/conditions";
import { buildCanonical, safeTitle, safeDescription, normalizeUTF8 } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

// This function dynamically generates metadata for each condition page.
export async function generateMetadata(
    { params }: { params: Promise<{ ConditionDetails: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const resolvedParams = await params;
    const condition = conditions.find(c => c.slug === resolvedParams.ConditionDetails);

    if (!condition) {
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

    const canonicalUrl = buildCanonical(`/area-of-specialty/${condition.slug}`);
    
    // Use the specific image for the condition, with a fallback
    const ogImage = typeof condition.card_img === 'string' 
        ? condition.card_img 
        : condition.card_img?.src || getOgImageForPath('/area-of-specialty');

    // Normalize and clean metadata
    const normalizedTitle = condition.metaTitle 
      ? normalizeUTF8(condition.metaTitle)
      : `${condition.title} | Mountain Spine Orthopedics`;
    const normalizedDesc = condition.metaDesc 
      ? normalizeUTF8(condition.metaDesc)
      : condition.body;

    const finalTitle = safeTitle(normalizedTitle, `${condition.title} | Mountain Spine Orthopedics`);
    const finalDescription = safeDescription(normalizedDesc, condition.body);

    return {
      title: finalTitle,
      description: finalDescription,
      keywords: condition.keywords || [condition.title, "orthopedic condition", "spine condition"],
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
            alt: `Illustration of ${condition.title}`,
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

// --- SEO ENHANCEMENT: Combined JSON-LD Schema Component ---
// This component generates MedicalCondition and BreadcrumbList schemas
const ConditionSchemas = async ({ params }: { params: Promise<{ ConditionDetails: string }> }) => {
    const resolvedParams = await params;
    const condition = conditions.find(c => c.slug === resolvedParams.ConditionDetails);

    if (!condition) {
        return null;
    }
    
    const conditionUrl = `https://mountainspineorthopedics.com/area-of-specialty/${condition.slug}`;
    const imageUrl = typeof condition.card_img === 'string' ? condition.card_img : condition.card_img?.src || '';

    // 1. MedicalCondition Schema (More specific than MedicalWebPage)
    const medicalConditionSchema = {
        '@context': 'https://schema.org',
        '@type': 'MedicalCondition',
        'name': condition.title,
        'description': condition.body,
        'url': conditionUrl,
        'image': imageUrl,
        'alternateName': condition.keywords?.[0],
        'signOrSymptom': condition.what_sym ? {
            '@type': 'MedicalSymptom',
            'name': condition.what_sym
        } : undefined,
        'riskFactor': condition.risk_fac ? {
            '@type': 'MedicalRiskFactor',
            'name': condition.risk_fac
        } : undefined,
        'possibleTreatment': condition.treatment ? {
            '@type': 'MedicalTherapy',
            'name': condition.treatment
        } : undefined,
        'author': {
            '@type': 'Organization',
            'name': 'Mountain Spine & Orthopedics',
            'url': 'https://mountainspineorthopedics.com'
        }
    };

    // 2. BreadcrumbList Schema
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
                "name": "Area of Specialty",
                "item": "https://mountainspineorthopedics.com/area-of-specialty" 
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": condition.title,
                "item": conditionUrl
            }
        ]
    };

    // Render both schemas (server-side, included in initial HTML)
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
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