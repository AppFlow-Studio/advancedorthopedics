'use client';
import React from 'react';

interface PhoneLinkProps {
  phone: string;
  className?: string;
  children?: React.ReactNode;
  trackLocation?: string;
}

export function PhoneLink({ phone, className = '', children, trackLocation = 'Unknown' }: PhoneLinkProps) {
  // Clean the phone number for tel: link
  const cleanPhone = phone.replace(/[^\d]/g, '');
  const displayPhone = children || phone;

  const handleClick = () => {
    // Track the phone click event
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: 'call_click',
        phone_number: cleanPhone,
        location: trackLocation
      });
    }
  };

  return (
    <a 
      href={`tel:${cleanPhone}`}
      className={`hover:text-[#0A50EC] hover:underline transition-colors duration-200 ${className}`}
      onClick={handleClick}
      style={{
        fontFamily: "var(--font-inter)",
      }}
    >
      {displayPhone}
    </a>
  );
}
