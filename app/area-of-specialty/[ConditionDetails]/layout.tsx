import type { Metadata, ResolvingMetadata } from "next";
import { conditions } from "@/components/data/conditions";
import { posthog } from "posthog-js";
import StaticNav from "@/components/StaticNav.server";
import OrphanLinksFooter from '@/components/OrphanLinksFooter';
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";
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
    const ogImage = getOgImageForPath('/area-of-specialty');

    return {
      title: safeTitle(condition.metaTitle, `${condition.title} | Mountain Spine & Orthopedics`),
      description: safeDescription(condition.metaDesc, condition.body),
      keywords: condition.keywords || [condition.title, "orthopedic condition", "spine condition"],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: safeTitle(condition.metaTitle, `${condition.title} | Mountain Spine & Orthopedics`),
        description: safeDescription(condition.metaDesc, condition.body),
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
        title: safeTitle(condition.metaTitle, `${condition.title} | Mountain Spine & Orthopedics`),
        description: safeDescription(condition.metaDesc, condition.body),
        images: [ogImage],
      },
    };
}

// --- SEO ENHANCEMENT: Combined JSON-LD Schema Component ---
const CombinedSchema = async ({ params }: { params: Promise<{ ConditionDetails: string }> }) => {
    const resolvedParams = await params;
    const condition = conditions.find(c => c.slug === resolvedParams.ConditionDetails);

    if (!condition) {
        return null;
    }
    
    const conditionUrl = `https://mountainspineorthopedics.com/area-of-specialty/${condition.slug}`;
    const imageUrl = typeof condition.card_img === 'string' ? condition.card_img : condition.card_img?.src || '';

    // Schema for the specific medical condition page
    const medicalPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        'headline': condition.title,
        'description': condition.body,
        'url': conditionUrl,
        'keywords': condition.keywords?.join(', '),
        'image': imageUrl,
        'publisher': {
            '@type': 'Organization',
            'name': 'Mountain Spine & Orthopedics',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://mountainspineortho.b-cdn.net/logoSearch.png'
            }
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

    // Render both schemas
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </div>
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
    const resolvedParams = await params;
    posthog.capture("view_condition", {
        condition: resolvedParams.ConditionDetails
    });
    return (
        <>
            {/* Hidden crawler nav */}
            <StaticNav />
            {await CombinedSchema({ params })}
            {children}
            <OrphanLinksFooter /> {/* sr-only, zero visual impact */}
        </>
    );
}