import { ClinicsProps } from '@/components/data/clinics';
import { MAIN_PHONE_E164, LOCATION_OPENING_HOURS } from '@/lib/locationConstants';

// Expected GBP addresses for validation (development mode only)
const GBP_ADDRESSES: Record<string, string> = {
  'miami-beach-orthopedics': '8000 SW 67th Ave 2nd Floor, Miami, FL 33143',
  'hollywood-fl-orthopedics': '3500 Tyler St, Hollywood, FL 33021',
  'palm-beach-gardens-orthopedics': '3355 Burns Rd STE 304, Palm Beach Gardens, FL 33410',
  'fort-pierce-orthopedics': '2215 Nebraska Ave Suite 1C, Fort Pierce, FL 34950',
  'jacksonville-orthopedics': '1205 Monument Rd, Suite 202, Jacksonville, FL 32225',
  'altamonte-springs-orthopedics': '499 E Central Pkwy, Suite 130, Altamonte Springs, FL 32701', // Note: Two locations share slug
  'orlando-orthopedics': '6150 Metrowest Blvd STE 102, Orlando, FL 32835',
  'boca-raton-orthopedics': '1905 Clint Moore Rd #300, Boca Raton, FL 33496'
};

// Map GBP categories to schema.org medicalSpecialty values
const mapCategoryToMedicalSpecialty = (category: string): string | null => {
  const categoryMap: Record<string, string> = {
    'Orthopedic surgeon': 'OrthopedicSurgery',
    'Orthopedic clinic': 'Orthopedic',
    'Pain management physician': 'PainManagement',
    'Physiatrist': 'PhysicalMedicine',
    'Podiatrist': 'Podiatry',
    'Sports medicine clinic': 'SportsMedicine',
    'Medical clinic': 'GeneralMedicine'
  };
  return categoryMap[category] || null;
};

// Robust address parsing for schema
const parseAddress = (fullAddress: string, defaultStateAbbr: string = 'FL') => {
  const addressParts = fullAddress.split(', ');
  
  let streetAddress = fullAddress;
  let addressLocality = '';
  let addressRegion = defaultStateAbbr;
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

// Validate address against GBP data (development mode only)
const validateAddress = (clinic: ClinicsProps) => {
  if (process.env.NODE_ENV === 'development' && clinic.formattedAddress) {
    const expectedAddress = GBP_ADDRESSES[clinic.slug];
    if (expectedAddress && clinic.formattedAddress !== expectedAddress) {
      console.warn(
        `[GBP Address Validation] Mismatch for ${clinic.slug}:\n` +
        `  Expected: ${expectedAddress}\n` +
        `  Found: ${clinic.formattedAddress}`
      );
    }
  }
};

/**
 * Generates enhanced JSON-LD schema for a clinic location with GBP data
 * @param clinic - The clinic location data
 * @returns Enhanced schema object with GBP-specific fields
 */
export function generateLocationSchema(clinic: ClinicsProps): Record<string, any> {
  // Validate address in development mode
  validateAddress(clinic);

  // Use formattedAddress if available, otherwise fall back to address
  const addressToParse = clinic.formattedAddress || clinic.address;
  const { streetAddress, addressLocality, addressRegion, postalCode } = parseAddress(addressToParse, clinic.stateAbbr);

  // Extract iframe src from mapEmbed
  const extractMapSrc = (mapEmbed?: string): string | undefined => {
    if (!mapEmbed) return undefined;
    const srcMatch = mapEmbed.match(/src="([^"]+)"/);
    return srcMatch ? srcMatch[1] : undefined;
  };

  // hasMap must be a valid URL string for schema.org
  const mapSrc = clinic.hasMap || extractMapSrc(clinic.mapEmbed) || clinic.placeUrl || clinic.link;
  // Ensure we always have a valid URL - if none provided, generate a Google Maps search URL from address
  const hasMapUrl = mapSrc || (clinic.address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.address)}` : undefined);

  // Build identifier array from GBP data
  const identifiers: Array<{ '@type': string; propertyID: string; value: string }> = [];
  if (clinic.placeId) {
    identifiers.push({
      '@type': 'PropertyValue',
      propertyID: 'placeId',
      value: clinic.placeId
    });
  }
  if (clinic.cid) {
    identifiers.push({
      '@type': 'PropertyValue',
      propertyID: 'cid',
      value: clinic.cid
    });
  }
  if (clinic.businessProfileId) {
    identifiers.push({
      '@type': 'PropertyValue',
      propertyID: 'businessProfileId',
      value: clinic.businessProfileId
    });
  }

  // Build sameAs array - merge existing link with GBP URLs
  const sameAs: string[] = [];
  if (clinic.link) {
    sameAs.push(clinic.link);
  }
  // placeUrl is now a CID URL, so use it if available; otherwise generate CID URL
  if (clinic.placeUrl) {
    sameAs.push(clinic.placeUrl);
  } else if (clinic.cid) {
    // Only generate CID URL if placeUrl doesn't exist
    sameAs.push(`https://www.google.com/maps?cid=${clinic.cid}`);
  }
  if (clinic.kgId) {
    sameAs.push(`https://www.google.com/search?kgmid=${clinic.kgId}`);
  }

  // Build medicalSpecialty array - merge existing hardcoded specialties with GBP categories
  const existingSpecialties = [
    'Orthopedic Surgery',
    'Spine Surgery',
    'Minimally Invasive Surgery',
    'Joint Replacement',
    'Sports Medicine'
  ];
  
  const gbpSpecialties: string[] = [];
  if (clinic.categories) {
    clinic.categories.forEach(category => {
      const mapped = mapCategoryToMedicalSpecialty(category);
      if (mapped && !gbpSpecialties.includes(mapped)) {
        gbpSpecialties.push(mapped);
      }
    });
  }

  // Combine and deduplicate (convert to set, then back to array)
  const allSpecialties = [...existingSpecialties, ...gbpSpecialties];
  const uniqueSpecialties = Array.from(new Set(allSpecialties));

  // Build the canonical URL using state-first structure
  const canonicalUrl = `https://mountainspineorthopedics.com/locations/${clinic.stateSlug}/${clinic.locationSlug}`;

  // Build the enhanced schema
  const enhancedSchema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': canonicalUrl,
    'name': clinic.name,
    'description': clinic.metaDescription,
    'url': canonicalUrl,
    'telephone': MAIN_PHONE_E164,
    'identifier': identifiers.length > 0 ? identifiers : undefined,
    'sameAs': sameAs.length > 0 ? sameAs : undefined,
    'hasMap': hasMapUrl,
    'map': hasMapUrl,
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
      'latitude': clinic.lat,
      'longitude': clinic.lng
    },
    'location': {
      '@type': 'Place',
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': clinic.lat,
        'longitude': clinic.lng
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
    'medicalSpecialty': uniqueSpecialties,
    'areaServed': clinic.neighborhoodsWeServe && clinic.neighborhoodsWeServe.length > 0
      ? [
          ...clinic.neighborhoodsWeServe.map((neighborhood: string) => ({
            '@type': 'AdministrativeArea',
            'name': neighborhood
          })),
          {
            '@type': 'AdministrativeArea',
            'name': `${addressLocality}, ${addressRegion}`
          },
          {
            '@type': 'AdministrativeArea',
            'name': addressRegion
          }
        ]
      : [
          {
            '@type': 'AdministrativeArea',
            'name': `${addressLocality}, ${addressRegion}`
          },
          {
            '@type': 'AdministrativeArea',
            'name': addressRegion
          }
        ],
    'openingHours': LOCATION_OPENING_HOURS,
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
      'opens': '08:00',
      'closes': '20:00'
    }],
    'priceRange': '$$',
    'parentOrganization': 'Mountain Spine & Orthopedics',
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
    'image': clinic.ogImage ? `https://mountainspineorthopedics.com${clinic.ogImage}` : 'https://mountainspineorthopedics.com/locations_og.png',
    'aggregateRating': clinic.rating && clinic.reviewCount ? {
      '@type': 'AggregateRating',
      'ratingValue': clinic.rating.toString(),
      'bestRating': '5',
      'worstRating': '1',
      'reviewCount': clinic.reviewCount.toString()
    } : undefined,
    'review': clinic.reviews && clinic.reviews.length > 0 ? clinic.reviews.map((r) => ({
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

  // @id is already set to location URL above
  // If CID exists, also add it as a sameAs URL (already included in sameAs array)

  // Remove undefined values
  const cleanSchema = Object.fromEntries(
    Object.entries(enhancedSchema).filter(([_, value]) => value !== undefined)
  );

  return cleanSchema;
}

