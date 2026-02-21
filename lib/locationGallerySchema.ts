import type { ClinicsProps, LocationGalleryImage } from '@/components/data/clinics';
import { buildCanonical } from '@/lib/seo';

// Same address parsing as generateLocationSchema (aligned for schema consistency)
function parseAddress(fullAddress: string, defaultStateAbbr: string = 'FL') {
  const addressParts = fullAddress.split(', ');
  let streetAddress = fullAddress;
  let addressLocality = '';
  let addressRegion = defaultStateAbbr;
  let postalCode = '';

  if (addressParts.length >= 2) {
    streetAddress = addressParts[0];
    addressLocality = addressParts[1];
    if (addressParts.length === 3) {
      const stateZip = addressParts[2].split(' ');
      addressRegion = stateZip[0];
      postalCode = stateZip[1] ?? '';
    }
  } else if (addressParts.length === 1) {
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
}

export interface BuildLocationImageItemListParams {
  clinic: ClinicsProps;
  images: LocationGalleryImage[];
  pageUrl: string;
}

/**
 * Builds ItemList JSON-LD for location gallery images (ImageObject per item).
 * contentLocation Place uses same address/geo as MedicalBusiness in generateLocationSchema.
 */
export function buildLocationImageItemListJsonLd({
  clinic,
  images,
  pageUrl,
}: BuildLocationImageItemListParams): Record<string, unknown> {
  const addressToParse = clinic.formattedAddress ?? clinic.address;
  const { streetAddress, addressLocality, addressRegion, postalCode } = parseAddress(
    addressToParse,
    clinic.stateAbbr
  );
  const hasMapUrl = clinic.hasMap ?? clinic.placeUrl ?? clinic.link ?? undefined;

  const contentLocation: Record<string, unknown> = {
    '@type': 'Place',
    name: clinic.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress,
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: clinic.lat,
      longitude: clinic.lng,
    },
  };
  if (hasMapUrl) {
    contentLocation.hasMap = hasMapUrl;
  }

  const itemListElement = images.map((img, index) => {
    const item: Record<string, unknown> = {
      '@type': 'ImageObject',
      contentUrl: img.src,
      name: img.caption ?? img.alt,
      caption: img.caption,
      representativeOfPage: index < 2,
      publisher: {
        '@type': 'Organization',
        name: 'Mountain Spine & Orthopedics',
        url: buildCanonical('/'),
      },
      contentLocation,
    };
    return {
      '@type': 'ListItem',
      position: index + 1,
      item,
    };
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Photo gallery for ${clinic.name}`,
    itemListElement,
  };
}

export interface BuildLocationBreadcrumbParams {
  clinic: ClinicsProps;
  stateSlug: string;
  pageUrl: string;
  stateName?: string;
}

/**
 * Builds BreadcrumbList JSON-LD: Home → Locations → State → Clinic.
 * Uses buildCanonical for absolute URLs.
 */
export function buildLocationBreadcrumbJsonLd({
  clinic,
  stateSlug,
  pageUrl,
  stateName,
}: BuildLocationBreadcrumbParams): Record<string, unknown> {
  const stateItemUrl = buildCanonical(`/locations/${stateSlug}`);
  const clinicItemUrl = pageUrl.startsWith('http') ? pageUrl : buildCanonical(pageUrl);

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: buildCanonical('/') },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: buildCanonical('/locations') },
      { '@type': 'ListItem', position: 3, name: stateName ?? stateSlug, item: stateItemUrl },
      { '@type': 'ListItem', position: 4, name: clinic.name, item: clinicItemUrl },
    ],
  };
}
