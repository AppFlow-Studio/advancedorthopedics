'use client';

import { PhoneCall } from 'lucide-react';
import { pushPhoneClickEvent } from '@/utils/enhancedConversions';

/**
 * Secondary hero CTA: a tracked, dialable phone button that pairs with the
 * primary "Book an appointment" button in specialist page heroes.
 */
export default function HeroPhoneCTA({
  phoneDisplay,
  phoneHref,
  trackLocation,
}: {
  phoneDisplay: string;
  phoneHref: string;
  trackLocation: string;
}) {
  return (
    <a
      href={phoneHref}
      onClick={() =>
        pushPhoneClickEvent({
          location: trackLocation,
          page_path: typeof window !== 'undefined' ? window.location.pathname : '',
        })
      }
      className="group max-h-[56px] h-full px-[18px] sm:px-[24px] py-[15px] rounded-[62px] flex items-center justify-center gap-2 border border-[#0A50EC] bg-white/75 backdrop-blur-sm text-[#0A50EC] text-[14px] font-semibold w-fit hover:bg-white hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
    >
      <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>Call {phoneDisplay}</span>
    </a>
  );
}
