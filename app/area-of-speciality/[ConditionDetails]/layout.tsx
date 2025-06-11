import type { Metadata, ResolvingMetadata } from "next";
import { conditions } from "@/components/data/conditions";

// This function dynamically generates metadata for each condition page on the server.
export async function generateMetadata(
    { params }: { params: { ConditionDetails: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {

    // Find the specific condition data based on the URL slug
    const condition = conditions.find(c => c.slug === params.ConditionDetails);

    // If no matching condition is found, return default metadata.
    if (!condition) {
        return {
            title: "Condition Not Found | Mountain Spine & Orthopedics",
            description: "The requested medical condition was not found. Please browse our list of conditions.",
        };
    }

    const conditionUrl = `https://mountainspineorthopedics.com/conditions/${condition.slug}`;

    // --- FINAL SEO IMPLEMENTATION FOR CONDITIONS ---
    return {
      metadataBase: new URL('https://mountainspineorthopedics.com'),
      title: `${condition.title} | Symptoms & Treatments | Mountain Spine`,
      description: condition.body, // The 'body' field serves as a good meta description.
      keywords: condition.keywords,

      alternates: {
        canonical: conditionUrl, // Use the correct canonical URL structure
      },

      openGraph: {
        title: `${condition.title} | Mountain Spine & Orthopedics`,
        description: condition.body,
        url: conditionUrl,
        siteName: 'Mountain Spine & Orthopedics',
        type: "article", // 'article' is perfect for a detailed condition page
        publishedTime: new Date().toISOString(), // Or use a static date like '2025-06-11'
        authors: ["https://mountainspineorthopedics.com"],
        images: [
          {
            url: condition.card_img?.toString() || '', // Convert to string and provide fallback
            width: 1200,
            height: 630,
            alt: `Illustration of ${condition.title}`,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: `${condition.title} | Symptoms & Treatments`,
        description: condition.body,
        images: [{
          url: condition.card_img?.toString() || '',
          width: 1200,
          height: 630,
          alt: `Illustration of ${condition.title}`
        }],
      },
    };
}

// --- SEO ENHANCEMENT: DYNAMIC JSON-LD SCHEMA FOR EACH CONDITION ---
const ConditionJsonLdSchema = ({ params }: { params: { ConditionDetails: string } }) => {
    const condition = conditions.find(c => c.slug === params.ConditionDetails);

    if (!condition) {
        return null;
    }

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage', // A specific schema for a medical-related web page
        'headline': condition.title,
        'description': condition.body,
        'url': `https://mountainspineorthopedics.com/conditions/${condition.slug}`,
        'keywords': condition.keywords?.join(', '),
        'image': condition.card_img,
        'publisher': {
            '@type': 'Organization',
            'name': 'Mountain Spine & Orthopedics',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://mountainspineortho.b-cdn.net/logoSearch.png'
            }
        },
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': `https://mountainspineorthopedics.com/conditions/${condition.slug}`
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};


// This is the final layout component. It renders the JSON-LD schema
// and then renders the page content.
export default function ConditionLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { ConditionDetails: string };
}) {
    return (
        <>
            <ConditionJsonLdSchema params={params} />
            {children}
        </>
    );
}