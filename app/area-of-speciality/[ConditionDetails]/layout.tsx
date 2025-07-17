import type { Metadata, ResolvingMetadata } from "next";
import { conditions } from "@/components/data/conditions";
import StaticNav from "@/components/StaticNav.server";
import OrphanLinksFooter from '@/components/OrphanLinksFooter';

function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

// This function dynamically generates metadata for each condition page.
export async function generateMetadata(
    { params }: { params: { ConditionDetails: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {

    const condition = conditions.find(c => c.slug === params.ConditionDetails);

    if (!condition) {
        const readableSlug = params.ConditionDetails.replace(/-/g, " ");
        return {
            title: `${capitalizeWords(readableSlug)} | Mountain Spine & Orthopedics`,
            description: "Learn about orthopedic care and treatments with our specialists in Florida."
        };
    }

    // Ensure image URL is a string
    const imageUrl = typeof condition.card_img === 'string' ? condition.card_img : condition.card_img?.src || '';
    const conditionUrl = `https://mountainspineorthopedics.com/area-of-speciality/${condition.slug}`;

    return {
      metadataBase: new URL('https://mountainspineorthopedics.com'),
      title: condition.metaTitle || `${condition.title} | Mountain Spine & Orthopedics`,
      description: condition.metaDesc || condition.body,
      keywords: condition.keywords || [condition.title, "orthopedic condition", "spine condition"],
      alternates: {
        canonical: conditionUrl,
      },
      openGraph: {
        title: condition.metaTitle || `${condition.title} | Mountain Spine & Orthopedics`,
        description: condition.metaDesc || condition.body,
        url: conditionUrl,
        siteName: 'Mountain Spine & Orthopedics',
        type: "article",
        images: [{
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: `Illustration of ${condition.title}`,
        }],
      },
      twitter: {
        card: "summary_large_image",
        title: condition.metaTitle || `${condition.title} | Mountain Spine & Orthopedics`,
        description: condition.metaDesc || condition.body,
        images: [imageUrl],
      },
    };
}

// --- SEO ENHANCEMENT: Combined JSON-LD Schema Component ---
const CombinedSchema = ({ params }: { params: { ConditionDetails: string } }) => {
    const condition = conditions.find(c => c.slug === params.ConditionDetails);

    if (!condition) {
        return null;
    }
    
    const conditionUrl = `https://mountainspineorthopedics.com/area-of-speciality/${condition.slug}`;
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
                "name": "Area of Speciality",
                "item": "https://mountainspineorthopedics.com/area-of-speciality" 
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
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
};


// Main layout component that injects the schemas and renders the page
export default function ConditionLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { ConditionDetails: string };
}) {
    return (
        <>
            {/* Hidden crawler nav */}
            <StaticNav />
            <CombinedSchema params={params} />
            {children}
            <OrphanLinksFooter /> {/* sr-only, zero visual impact */}
        </>
    );
}