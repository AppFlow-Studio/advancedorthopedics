'use client';
import React from 'react';
import { PhoneLink } from './PhoneLink';

interface PhoneTextProps {
  text: string | React.ReactNode;
  className?: string;
  trackLocation?: string;
}

export function PhoneText({ text, className = '', trackLocation = 'Unknown' }: PhoneTextProps) {
  // If text is not a string, render it directly
  if (typeof text !== 'string') {
    return <span className={className}>{text}</span>;
  }

  // Regex to match phone numbers in various formats
  const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
  
  const parts = text.split(phoneRegex);
  const matches = text.match(phoneRegex) || [];
  
  const elements: React.ReactNode[] = [];
  
  parts.forEach((part, index) => {
    if (part) {
      elements.push(part);
    }
    if (matches[index]) {
      elements.push(
        <PhoneLink 
          key={index} 
          phone={matches[index]} 
          trackLocation={trackLocation}
          className="font-medium"
        />
      );
    }
  });
  
  return (
    <span className={className}>
      {elements}
    </span>
  );
}