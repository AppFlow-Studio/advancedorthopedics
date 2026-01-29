"use client";

import React from "react";

interface RichTextContentProps {
  html: string;
  className?: string;
  processHtml?: (html: string) => string;
}

/**
 * RichTextContent - A wrapper component for rendering HTML content with proper typography.
 * 
 * This component ensures consistent styling for:
 * - Paragraphs with proper spacing
 * - Lists (ul/ol) with bullets, numbers, and indentation
 * - H3 subsection headings
 * - Bold text emphasis
 * - Links with underline styling
 * 
 * Usage:
 * <RichTextContent html={contentString} />
 */
export function RichTextContent({ 
  html, 
  className = '',
  processHtml 
}: RichTextContentProps) {
  // Apply any processing function if provided
  const processedHtml = processHtml ? processHtml(html) : html;

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .rich-text-content-wrapper p {
            margin-bottom: 2.5rem !important;
            margin-top: 0 !important;
          }
          .rich-text-content-wrapper p:last-child {
            margin-bottom: 0 !important;
          }
        `
      }} />
      <div
        style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
        className={`rich-text-content-wrapper ${`
          text-[#424959] sm:text-xl text-sm leading-relaxed
          [&_p]:leading-relaxed
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_ul]:space-y-2
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4 [&_ol]:space-y-2
          [&_li]:leading-relaxed [&_li]:pl-1
          [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-[#111315] [&_h3]:text-lg [&_h3]:sm:text-xl [&_h3]:font-medium
          [&_strong]:font-semibold [&_strong]:text-[#111315]
          [&_a]:underline [&_a]:text-[#252932] [&_a:hover]:text-[#2358AC]
          ${className}
        `.trim()}`}
        dangerouslySetInnerHTML={{ __html: processedHtml }}
      />
    </>
  );
}

export default RichTextContent;
