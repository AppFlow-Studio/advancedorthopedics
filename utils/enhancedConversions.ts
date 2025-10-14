// utils/enhancedConversions.ts
type ECIn = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
};

type ECOut = {
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
};

export function normalizeEC(v: ECIn): ECOut {
  const email = (v.email ?? '').trim().toLowerCase();
  const phone_number = (v.phone ?? '').replace(/\D/g, '');
  const first_name = (v.firstName ?? '').trim();
  const last_name = (v.lastName ?? '').trim();
  return { email, phone_number, first_name, last_name };
}

export function persistEC(v: ECIn) {
  if (typeof window === 'undefined') return;
  const n = normalizeEC(v);
  try {
    sessionStorage.setItem('ec_email', n.email || '');
    sessionStorage.setItem('ec_phone', n.phone_number || '');
    sessionStorage.setItem('ec_first', n.first_name || '');
    sessionStorage.setItem('ec_last', n.last_name || '');
  } catch {}
}

export function pushEC(v: ECIn, eventName: string = 'ec_capture') {
  if (typeof window === 'undefined') return;
  const n = normalizeEC(v);
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({
    event: eventName,
    enhanced_conversion_data: n,
  });
}

/**
 * Re-push EC data from sessionStorage on the thank-you page.
 * Call this in a useEffect so the Ads pageview tag sees the data.
 */
export function restoreECFromSession(eventName: string = 'ec_restore') {
  if (typeof window === 'undefined') return;
  try {
    const ec = {
      email: (sessionStorage.getItem('ec_email') || '').trim().toLowerCase(),
      phone_number: (sessionStorage.getItem('ec_phone') || '').replace(/\D/g, ''),
      first_name: (sessionStorage.getItem('ec_first') || '').trim(),
      last_name: (sessionStorage.getItem('ec_last') || '').trim(),
    };
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: eventName, enhanced_conversion_data: ec });
  } catch {}
}

/** Generic custom event push helper (keeps analytics code tidy) */
export function pushEvent(name: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({ event: name, ...params });
}
