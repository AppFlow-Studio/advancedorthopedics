import { Metadata, ResolvingMetadata } from "next";
import { clinics } from "@/components/data/clinics";
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

// This function dynamically generates metadata for each location page.
export async function generateMetadata(
    { params }: { params: Promise<{ locationname: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    // Await params in case it's a Promise (Next.js 14+ dynamic route requirement)
    const resolvedParams = await params;
    // Find the specific clinic data based on the URL slug
    const location = clinics.find(clinic => clinic.slug === resolvedParams.locationname);

    // If no matching location is found, return default metadata.
    if (!location) {
        const canonicalUrl = buildCanonical(`/locations/${resolvedParams.locationname}`);
        return {
            title: 'Location Not Found | Mountain Spine & Orthopedics',
            description: 'The requested location could not be found. Please check the URL or navigate to our locations page to find a clinic.',
            alternates: {
                canonical: canonicalUrl,
            },
        };
    }

    const canonicalUrl = buildCanonical(`/locations/${location.slug}`);
    const ogImage = getOgImageForPath('/locations');

    // Extract city name from location data
    const cityName = location.region.split(',')[0].trim();
    
    // Create consistent title format: "Orthopedic & Spine Specialists in [City], FL | Mountain Spine Orthopedics"
    const standardizedTitle = `Orthopedic & Spine Specialists in ${cityName}, FL | Mountain Spine Orthopedics`;
    const consistentTitle = safeTitle(location.metaTitle, standardizedTitle);
    
    // Standardized description format with rating mention
    const standardizedDescription = location.rating && location.reviewCount 
      ? `Top-rated orthopedic and spine specialists in ${cityName}, FL. Mountain Spine Orthopedics offers minimally invasive spine surgery, joint care, and advanced treatments. Rated ${location.rating} stars by over ${location.reviewCount} patients. Book an appointment today.`
      : `Visit our orthopedic and spine clinic in ${cityName}, FL. Our specialists provide minimally invasive spine surgery, joint pain care, and advanced orthopedic treatments. Book an appointment today.`;
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
            alt: `A view of the Mountain Spine & Orthopedics clinic in ${location.region}`,
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
// This component generates a unique schema for each medical clinic location.
const LocationJsonLdSchema = async ({ params }: { params: Promise<{ locationname: string }> }) => {
    const resolvedParams = await params;
    const location = clinics.find(clinic => clinic.slug === resolvedParams.locationname);

    if (!location) {
        return null;
    }

    // Robust address parsing for schema
    // This function reliably parses US addresses into schema components.
    const parseAddress = (fullAddress: string) => {
        const addressParts = fullAddress.split(', ');
        
        let streetAddress = fullAddress;
        let addressLocality = '';
        let addressRegion = 'FL';
        let postalCode = '';

        if (addressParts.length >= 2) {
            // Handles formats like "Street, City, State ZIP" or "Street, City"
            streetAddress = addressParts[0];
            addressLocality = addressParts[1];

            if (addressParts.length === 3) {
                const stateZip = addressParts[2].split(' ');
                addressRegion = stateZip[0];
                postalCode = stateZip[1];
            }
        } else if (addressParts.length === 1) {
            // Fallback for formats like "Street City State ZIP" without commas
            const stateMatch = fullAddress.match(/\b([A-Z]{2})\s+(\d{5}(?:-\d{4})?)\s*$/);
            if (stateMatch) {
                addressRegion = stateMatch[1];
                postalCode = stateMatch[2];
                const cityAndStreet = fullAddress.substring(0, stateMatch.index).trim();
                const lastSpaceIndex = cityAndStreet.lastIndexOf(' ');
                
                if (lastSpaceIndex > -1) {
                    streetAddress = cityAndStreet.substring(0, lastSpaceIndex);
                    addressLocality = cityAndStreet.substring(lastSpaceIndex + 1);
                }
            }
        }

        return { streetAddress, addressLocality, addressRegion, postalCode };
    };
    
    const { streetAddress, addressLocality, addressRegion, postalCode } = parseAddress(location.address);

    // Extract iframe src from mapEmbed
    const extractMapSrc = (mapEmbed?: string): string | undefined => {
      if (!mapEmbed) return undefined;
      const srcMatch = mapEmbed.match(/src="([^"]+)"/);
      return srcMatch ? srcMatch[1] : undefined;
    };

    const mapSrc = extractMapSrc(location.mapEmbed) || location.placeUrl || location.link;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic', // More specific than MedicalOrganization for a location page
      'name': location.name,
      'description': location.metaDescription,
      'url': `https://mountainspineorthopedics.com/locations/${location.slug}`,
      'telephone': location.phone,
      'sameAs': [location.link].filter(Boolean),
      'hasMap': mapSrc,
      'map': mapSrc,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': streetAddress,
        'addressLocality': addressLocality,
        'addressRegion': addressRegion,
        'postalCode': postalCode,
        'addressCountry': 'US'
      },
      'geo': {
          '@type': 'GeoCoordinates',
          'latitude': location.lat,
          'longitude': location.lng
      },
      'location': {
        '@type': 'Place',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': location.lat,
          'longitude': location.lng
        },
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': streetAddress,
          'addressLocality': addressLocality,
          'addressRegion': addressRegion,
          'postalCode': postalCode,
          'addressCountry': 'US'
        }
      },
      // Enhanced medical specialties
      'medicalSpecialty': [
        'Orthopedic Surgery',
        'Spine Surgery',
        'Minimally Invasive Surgery',
        'Joint Replacement',
        'Sports Medicine'
      ],
      // Service area definition
      'serviceArea': {
        '@type': 'GeoCircle',
        'geoMidpoint': {
          '@type': 'GeoCoordinates',
          'latitude': location.lat,
          'longitude': location.lng
        },
        'geoRadius': '50000' // 50km radius
      },
      // Operating hours
      'openingHours': [
        'Mo-Fr 08:00-20:00',
        'Sa 08:00-20:00',
        'Su 08:00-20:00'
      ],
      'openingHoursSpecification': [{
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        'opens': '09:00',
        'closes': '17:00'
      }],
      'priceRange': '$$',
      // This links each clinic back to the main organization
      'parentOrganization': 'Mountain Spine & Orthopedics',
      // Enhanced services offered
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Orthopedic & Spine Surgery Services',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'MedicalProcedure',
              'name': 'Minimally Invasive Spine Surgery'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'MedicalProcedure',
              'name': 'Band-Aid Back Surgery'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'MedicalProcedure',
              'name': 'Microdiscectomy'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'MedicalProcedure',
              'name': 'Laminectomy'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'MedicalProcedure',
              'name': 'Spinal Fusion'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'MedicalProcedure',
              'name': 'Artificial Disc Replacement'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'MedicalProcedure',
              'name': 'Kyphoplasty'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'MedicalProcedure',
              'name': 'Vertebroplasty'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'MedicalProcedure',
              'name': 'Endoscopic Spine Surgery'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'MedicalProcedure',
              'name': 'Joint Replacement Surgery'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'MedicalProcedure',
              'name': 'Orthopedic Consultation'
            }
          }
        ]
      },
      // Add a generic image or create a location-specific one
      'image': location.ogImage ? `https://mountainspineorthopedics.com${location.ogImage}` : 'https://mountainspineorthopedics.com/locations_og.png',
      // AggregateRating for 5-star rating
      'aggregateRating': location.rating && location.reviewCount ? {
        '@type': 'AggregateRating',
        'ratingValue': location.rating,
        'bestRating': 5,
        'worstRating': 1,
        'reviewCount': location.reviewCount
      } : undefined,
      // Review array for patient reviews
      'review': location.reviews && location.reviews.length > 0 ? location.reviews.map((r) => ({
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': r.author
        },
        'reviewBody': r.reviewBody,
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': r.reviewRating,
          'bestRating': 5,
          'worstRating': 1
        }
      })) : undefined,
    };
  
    // FAQ Schema for location-specific questions
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': `What orthopedic services are available at ${location.name}?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `${location.name} offers comprehensive orthopedic care including minimally invasive spine surgery, Band-Aid Back Surgery, joint replacement, and orthopedic consultations. Our board-certified specialists provide same-day appointments for urgent orthopedic needs.`
          }
        },
        {
          '@type': 'Question',
          'name': `Do you offer same-day appointments at ${location.name}?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `Yes, ${location.name} offers same-day appointments for orthopedic consultations and urgent care. Our board-certified specialists are available to provide immediate evaluation and treatment for orthopedic conditions.`
          }
        },
        {
          '@type': 'Question',
          'name': `What makes ${location.name} different from other orthopedic clinics?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `${location.name} specializes in minimally invasive spine surgery and Band-Aid Back Surgery techniques. Our board-certified orthopedic surgeons use advanced technology to provide faster recovery times and reduced downtime for patients.`
          }
        },
        {
          '@type': 'Question',
          'name': `How do I schedule an appointment at ${location.name}?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `You can schedule an appointment at ${location.name} by calling ${location.phone} or visiting our website. We offer same-day appointments and accept most major insurance plans. Our team will help you find the earliest available appointment time.`
          }
        }
      ]
    };

    // Breadcrumb Schema for navigation
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
          'name': location.name,
          'item': `https://mountainspineorthopedics.com/locations/${location.slug}`
        }
      ]
    };


    // Remove undefined values from schema before stringifying
    const cleanSchema = Object.fromEntries(
      Object.entries(schema).filter(([_, value]) => value !== undefined)
    );

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema) }}
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

// This is the layout component that will wrap the page.
// We inject the JSON-LD schema here.
export default async function LocationLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locationname: string }>;
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

