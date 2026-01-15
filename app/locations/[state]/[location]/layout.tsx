import { Metadata, ResolvingMetadata } from "next";
import { clinics } from "@/components/data/clinics";
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import { generateLocationSchema } from "@/lib/generateLocationSchema";
import { generateFAQPageSchema } from "@/lib/faq-utils";
import { findClinicByStateAndLocation, isValidStateSlug, STATE_METADATA } from "@/lib/locationRedirects";

// This function dynamically generates metadata for each location page.
export async function generateMetadata(
    { params }: { params: Promise<{ state: string; location: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    // Await params in case it's a Promise (Next.js 14+ dynamic route requirement)
    const resolvedParams = await params;
    const { state, location: locationSlug } = resolvedParams;
    
    // Validate state slug
    if (!isValidStateSlug(state)) {
        const canonicalUrl = buildCanonical(`/locations/${state}/${locationSlug}`);
        return {
            title: 'Location Not Found | Mountain Spine & Orthopedics',
            description: 'The requested location could not be found. Please check the URL or navigate to our locations page to find a clinic.',
            alternates: {
                canonical: canonicalUrl,
            },
        };
    }
    
    // Find the specific clinic data based on state and location slugs
    const location = findClinicByStateAndLocation(state, locationSlug);

    // If no matching location is found, return default metadata.
    if (!location) {
        const canonicalUrl = buildCanonical(`/locations/${state}/${locationSlug}`);
        return {
            title: 'Location Not Found | Mountain Spine & Orthopedics',
            description: 'The requested location could not be found. Please check the URL or navigate to our locations page to find a clinic.',
            alternates: {
                canonical: canonicalUrl,
            },
        };
    }

    // Use new canonical URL structure
    const canonicalUrl = buildCanonical(`/locations/${location.stateSlug}/${location.locationSlug}`);
    const ogImage = getOgImageForPath('/locations');

    // Extract city name from location data
    const cityName = location.region.split(',')[0].trim();
    const stateInfo = STATE_METADATA[state];
    
    // Create consistent title format: "Top Orthopedic Surgeons & Spine Specialists in [City] | Mountain Spine & Orthopedics"
    const standardizedTitle = `Top Orthopedic Surgeons & Spine Specialists in ${cityName} | Mountain Spine & Orthopedics`;
    const consistentTitle = safeTitle(location.metaTitle, standardizedTitle);
    
    // Standardized description format with rating mention
    const standardizedDescription = location.rating && location.reviewCount 
      ? `Top-rated orthopedic and spine specialists in ${cityName}, ${stateInfo?.abbr || state.toUpperCase()}. Mountain Spine Orthopedics offers back pain, neck pain treatment, minimally invasive spine surgery, and joint pain treatment. Rated ${location.rating} stars by over ${location.reviewCount} patients. Book an appointment today.`
      : `Visit our orthopedic and spine clinic in ${cityName}, ${stateInfo?.abbr || state.toUpperCase()}. Our specialists provide back pain, neck pain treatment, minimally invasive spine surgery, and joint pain treatment. Book an appointment today.`;
    const consistentDescription = safeDescription(location.metaDescription, standardizedDescription);
    
    // --- SEO ENHANCEMENT: Integrating Homepage SEO Structure ---
    return {
      title: consistentTitle,
      description: consistentDescription,
      keywords: location.keywords,

      alternates: {
        canonical: canonicalUrl,
      },

      openGraph: {
        title: consistentTitle,
        description: consistentDescription,
        url: canonicalUrl,
        siteName: 'Mountain Spine & Orthopedics',
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: `A view of the Mountain Spine & Orthopedics clinic in ${cityName}`,
          },
        ],
        locale: 'en_US',
        type: 'website', // or 'MedicalClinic' could also be appropriate
      },

      twitter: {
        card: 'summary_large_image',
        title: consistentTitle,
        description: consistentDescription,
        images: [ogImage],
      },
    };
}

// --- SEO ENHANCEMENT: DYNAMIC JSON-LD SCHEMA FOR EACH CLINIC ---
// This component generates a unique schema for each medical clinic location using GBP data.
const LocationJsonLdSchema = async ({ params }: { params: Promise<{ state: string; location: string }> }) => {
    const resolvedParams = await params;
    const { state, location: locationSlug } = resolvedParams;
    
    if (!isValidStateSlug(state)) {
        return null;
    }
    
    const location = findClinicByStateAndLocation(state, locationSlug);

    if (!location) {
        return null;
    }

    // Generate enhanced schema using utility function (includes GBP data)
    const schema = generateLocationSchema(location);
    
    // Get state info for breadcrumbs
    const stateInfo = STATE_METADATA[state];
  
    // Breadcrumb Schema for navigation - Updated with state level
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://mountainspineorthopedics.com/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Locations',
          'item': 'https://mountainspineorthopedics.com/locations'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': stateInfo?.name || state.toUpperCase(),
          'item': `https://mountainspineorthopedics.com/locations/${state}`
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': location.name,
          'item': `https://mountainspineorthopedics.com/locations/${location.stateSlug}/${location.locationSlug}`
        }
      ]
    };

    // FAQPage Schema (if FAQs exist)
    const faqSchema = location.faqs && location.faqs.length > 0
      ? generateFAQPageSchema(location.faqs, `https://mountainspineorthopedics.com/locations/${location.stateSlug}/${location.locationSlug}`)
      : null;

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </>
    );
  };

// This is the layout component that will wrap the page.
// We inject the JSON-LD schema here.
export default async function LocationLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ state: string; location: string }>;
}) {
    return (
        <>
            {/* Await the async LocationJsonLdSchema and render it */}
            {/* @ts-expect-error Async Server Component */}
            <LocationJsonLdSchema params={params} />
            {children}
        </>
    );
}
