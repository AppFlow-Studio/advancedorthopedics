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
  first_name: string;
  last_name: string;
  address?: {
    street_address?: string;
    city?: string;
    region?: string;
    postal_code?: string;
    country?: string;
  };
};

/**
 * Normalizes user input data to match Google's enhanced conversions format
 */
export function normalizeEC(v: ECIn): ECOut {
  const email = (v.email ?? '').trim().toLowerCase();
  const phone_number = (v.phone ?? '').replace(/\D/g, '');
  const first_name = (v.firstName ?? '').trim();
  const last_name = (v.lastName ?? '').trim();
  
  const result: ECOut = {
    email,
    phone_number,
    first_name,
    last_name,
  };

  // Add address data if provided
  if (v.address) {
    result.address = {
      street_address: v.address.street?.trim() || '',
      city: v.address.city?.trim() || '',
      region: v.address.region?.trim() || '',
      postal_code: v.address.postalCode?.replace(/\D/g, '') || '',
      country: v.address.country?.trim() || '',
    };
    
    // Remove empty address fields
    if (!result.address.street_address && !result.address.city && 
        !result.address.region && !result.address.postal_code && !result.address.country) {
      delete result.address;
    }
  }

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
    sessionStorage.setItem('ec_first', n.first_name || '');
    sessionStorage.setItem('ec_last', n.last_name || '');
    if (n.address) {
      sessionStorage.setItem('ec_address', JSON.stringify(n.address));
    }
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
    enhanced_conversion_data: n,
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
    enhanced_conversion_data: n,
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
    const ec: ECOut = {
      email: (sessionStorage.getItem('ec_email') || '').trim().toLowerCase(),
      phone_number: (sessionStorage.getItem('ec_phone') || '').replace(/\D/g, ''),
      first_name: (sessionStorage.getItem('ec_first') || '').trim(),
      last_name: (sessionStorage.getItem('ec_last') || '').trim(),
    };

    // Restore address if available
    const addressStr = sessionStorage.getItem('ec_address');
    if (addressStr) {
      try {
        ec.address = JSON.parse(addressStr);
      } catch {}
    }

    (window as any).dataLayer = (window as any).dataLayer || [];
    
    // Push the data to dataLayer so conversion tags can access it
    (window as any).dataLayer.push({
      event: eventName,
      enhanced_conversion_data: ec,
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
