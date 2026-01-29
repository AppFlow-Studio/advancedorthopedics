import { Metadata, ResolvingMetadata } from "next";
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import { getClinicsByState, isValidStateSlug, STATE_METADATA, VALID_STATE_SLUGS } from "@/lib/locationRedirects";
import { STATE_FAQS } from "@/lib/state-faqs";
import { generateFAQPageSchema } from "@/lib/faq-utils";
import { MAIN_PHONE_E164 } from "@/lib/locationConstants";

// Generate static params for all valid states
export async function generateStaticParams() {
  return VALID_STATE_SLUGS.map(state => ({ state }));
}

// Ensure dynamic params are allowed (for runtime validation)
export const dynamicParams = true;

// This function dynamically generates metadata for each state hub page.
export async function generateMetadata(
    { params }: { params: Promise<{ state: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const resolvedParams = await params;
    const { state } = resolvedParams;
    
    // Validate state slug
    if (!isValidStateSlug(state)) {
        const canonicalUrl = buildCanonical(`/locations/${state}`);
        return {
            title: 'Locations Not Found | Mountain Spine & Orthopedics',
            description: 'The requested state locations could not be found. Please check the URL or navigate to our locations page to find a clinic.',
            alternates: {
                canonical: canonicalUrl,
            },
        };
    }
    
    const stateInfo = STATE_METADATA[state];
    const stateClinics = getClinicsByState(state);
    
    const canonicalUrl = buildCanonical(`/locations/${state}`);
    const ogImage = getOgImageForPath('/locations');
    
    // Generate top cities list for meta description (first 4-8 location names)
    const topCities = stateClinics
      .slice(0, 8)
      .map(clinic => clinic.region.split(',')[0].trim())
      .join(', ');
    
    // New meta title format
    const title = `Spine & Orthopedic Surgeons in ${stateInfo.name} | Mountain Spine & Orthopedics`;
    
    // New meta description format (~150-160 chars)
    const description = `Board-certified spine and orthopedic surgeons across ${stateInfo.name}. Locations in ${topCities}. Same-day and next-day appointments available.`;
    
    return {
      title: safeTitle(undefined, title),
      description: safeDescription(undefined, description),
      keywords: [
        `${stateInfo.name.toLowerCase()} orthopedic surgeon`,
        `${stateInfo.name.toLowerCase()} spine surgeon`,
        `orthopedic doctor ${stateInfo.name.toLowerCase()}`,
        `spine specialist ${stateInfo.name.toLowerCase()}`,
        `back pain treatment ${stateInfo.name.toLowerCase()}`,
        `minimally invasive spine surgery ${stateInfo.name.toLowerCase()}`,
        `orthopedic clinic ${stateInfo.name.toLowerCase()}`,
        `orthopedic surgeon near me`,
        `spine surgeon near me`,
      ],

      alternates: {
        canonical: canonicalUrl,
      },

      openGraph: {
        title: safeTitle(undefined, title),
        description: safeDescription(undefined, description),
        url: canonicalUrl,
        siteName: 'Mountain Spine & Orthopedics',
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: `Mountain Spine & Orthopedics ${stateInfo.name} clinic locations`,
          },
        ],
        locale: 'en_US',
        type: 'website',
      },

      twitter: {
        card: 'summary_large_image',
        title: safeTitle(undefined, title),
        description: safeDescription(undefined, description),
        images: [ogImage],
      },
    };
}

// State hub JSON-LD Schema removed - moved to page.tsx to avoid duplication on sub-pages

export default async function StateHubLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ state: string }>;
}) {
    return (
        <>
            {children}
        </>
    );
}
