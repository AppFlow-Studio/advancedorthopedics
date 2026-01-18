// utils/enhancedConversions.ts
/**
 * Enhanced Conversions for Google Ads
 * 
 * This utility helps implement enhanced conversions by pushing user-provided data
 * to the dataLayer in a format that Google Tag Manager can use for enhanced conversions.
 * 
 * According to Google's documentation:
 * - Data should be pushed to dataLayer before conversion tags fire
 * - Data should be available on the thank-you page when conversion tags load
 * - Data structure must match Google's expected format
 */

type ECIn = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  postalCode?: string;
  country?: string;
  address?: {
    street?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
  };
};

type ECOut = {
  email: string;
  phone_number: string;
  address: {
    first_name: string;
    last_name: string;
    country: string;
    postal_code: string;
  };
};

/**
 * Formats a phone number to E.164 international format required by Google Ads.
 * Google Enhanced Conversions require phone numbers in E.164 format (e.g., +15551234567 for US).
 * 
 * @param phone - Raw phone number string
 * @param country - Country code (default: US)
 * @returns Phone number in E.164 format or empty string if invalid
 */
function formatPhoneToE164(phone: string, country: string = 'US'): string {
  const rawPhone = phone.replace(/\D/g, '');
  
  if (!rawPhone || rawPhone.length === 0) {
    return '';
  }

  // Handle US/Canada numbers (country code +1)
  if (country === 'US' || country === 'CA' || !country) {
    if (rawPhone.length === 10) {
      // Standard 10-digit US number → add +1 prefix
      return `+1${rawPhone}`;
    } else if (rawPhone.length === 11 && rawPhone.startsWith('1')) {
      // 11-digit with leading 1 → add + prefix
      return `+${rawPhone}`;
    }
  }

  // For other countries or formats, return with + if not already present
  // This handles cases where the number might already include country code
  if (rawPhone.length >= 10) {
    return `+${rawPhone}`;
  }

  // Return empty for invalid/too-short numbers
  return '';
}

/**
 * Normalizes user input data to match Google's enhanced conversions format
 */
export function normalizeEC(v: ECIn): ECOut {
  const email = (v.email ?? '').trim().toLowerCase();
  const normalizedCountry = (v.country || "US").trim().toUpperCase();
  const phone_number = formatPhoneToE164(v.phone ?? '', normalizedCountry);
  const normalizedFirstName = (v.firstName ?? '').trim();
  const normalizedLastName = (v.lastName ?? '').trim();
  const normalizedPostal = (v.postalCode || '').replace(/\D/g, '').slice(0, 10);

  const result: ECOut = {
    email,
    phone_number,
    address: {
      first_name: normalizedFirstName,
      last_name: normalizedLastName,
      country: normalizedCountry || "US",
      postal_code: normalizedPostal,
    },
  };

  return result;
}

/**
 * Persists enhanced conversion data to sessionStorage for use on thank-you page
 */
export function persistEC(v: ECIn) {
  if (typeof window === 'undefined') return;
  const n = normalizeEC(v);
  try {
    sessionStorage.setItem('ec_email', n.email || '');
    sessionStorage.setItem('ec_phone', n.phone_number || '');
    sessionStorage.setItem('ec_first', n.address.first_name || '');
    sessionStorage.setItem('ec_last', n.address.last_name || '');
    sessionStorage.setItem('ec_postal', n.address.postal_code || '');
    sessionStorage.setItem('ec_country', n.address.country || 'US');
  } catch {}
}

/**
 * Pushes enhanced conversion data to dataLayer for Google Tag Manager
 * 
 * This should be called BEFORE navigation to the thank-you page to ensure
 * the data is available when conversion tags fire.
 * 
 * @param v - User input data (email, phone, name, etc.)
 * @param eventName - Optional event name (default: 'ec_capture')
 */
export function pushEC(v: ECIn, eventName: string = 'ec_capture') {
  if (typeof window === 'undefined') return;
  const n = normalizeEC(v);
  
  // Initialize dataLayer if it doesn't exist
  (window as any).dataLayer = (window as any).dataLayer || [];
  
  // Push enhanced conversion data to dataLayer
  // Google Tag Manager will automatically hash this data before sending to Google Ads
  (window as any).dataLayer.push({
    event: eventName,
    enhanced_conversion_data: {
      email: n.email || undefined,
      phone_number: n.phone_number || undefined,
      address: {
        first_name: n.address.first_name || undefined,
        last_name: n.address.last_name || undefined,
        country: n.address.country || "US",
        postal_code: n.address.postal_code || undefined,
      },
    },
  });
}

/**
 * Pushes enhanced conversion data to dataLayer without an event
 * This is useful when you want the data available for the next conversion tag
 * without triggering any additional events
 */
export function pushECSilent(v: ECIn) {
  if (typeof window === 'undefined') return;
  const n = normalizeEC(v);
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({
    enhanced_conversion_data: {
      email: n.email || undefined,
      phone_number: n.phone_number || undefined,
      address: {
        first_name: n.address.first_name || undefined,
        last_name: n.address.last_name || undefined,
        country: n.address.country || "US",
        postal_code: n.address.postal_code || undefined,
      },
    },
  });
}

/**
 * Re-push EC data from sessionStorage on the thank-you page.
 * 
 * This ensures enhanced conversion data is available when conversion tags load.
 * Call this in a useEffect on the thank-you page so the Ads conversion tag sees the data.
 * 
 * @param eventName - Optional event name (default: 'ec_restore')
 */
export function restoreECFromSession(eventName: string = 'ec_restore') {
  if (typeof window === 'undefined') return;
  try {
    const country = (sessionStorage.getItem('ec_country') || 'US').trim().toUpperCase();
    const rawPhone = sessionStorage.getItem('ec_phone') || '';
    
    const ec: ECOut = {
      email: (sessionStorage.getItem('ec_email') || '').trim().toLowerCase(),
      phone_number: formatPhoneToE164(rawPhone, country),
      address: {
        first_name: (sessionStorage.getItem('ec_first') || '').trim(),
        last_name: (sessionStorage.getItem('ec_last') || '').trim(),
        country: country,
        postal_code: (sessionStorage.getItem('ec_postal') || '').trim(),
      },
    };

    (window as any).dataLayer = (window as any).dataLayer || [];
    
    // Push the data to dataLayer so conversion tags can access it
    (window as any).dataLayer.push({
      event: eventName,
      enhanced_conversion_data: {
        email: ec.email || undefined,
        phone_number: ec.phone_number || undefined,
        address: {
          first_name: ec.address.first_name || undefined,
          last_name: ec.address.last_name || undefined,
          country: ec.address.country || "US",
          postal_code: ec.address.postal_code || undefined,
        },
      },
    });
  } catch {}
}

/**
 * Pushes enhanced conversion data and persists it in one call
 * This is a convenience function that combines persistEC and pushEC
 */
export function captureAndPersistEC(v: ECIn, eventName: string = 'ec_capture') {
  persistEC(v);
  pushEC(v, eventName);
}

/** Generic custom event push helper (keeps analytics code tidy) */
export function pushEvent(name: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({ event: name, ...params });
}

/**
 * Debug helper: Check if enhanced conversion data is in dataLayer
 * Useful for troubleshooting in browser console
 * 
 * Usage in browser console:
 *   import { verifyECData } from '@/utils/enhancedConversions';
 *   verifyECData();
 */
export function verifyECData(): boolean {
  if (typeof window === 'undefined') {
    console.warn('verifyECData: Not available in server-side context');
    return false;
  }

  const dataLayer = (window as any).dataLayer || [];
  let found = false;

  console.log('Checking dataLayer for enhanced_conversion_data...');
  
  for (let i = dataLayer.length - 1; i >= 0; i--) {
    const item = dataLayer[i];
    if (item && item.enhanced_conversion_data) {
      found = true;
      console.log('✓ Found enhanced_conversion_data:', item.enhanced_conversion_data);
      return true;
    }
  }

  if (!found) {
    console.warn('✗ No enhanced_conversion_data found in dataLayer');
    console.log('Current dataLayer:', dataLayer);
  }

  return found;
}
