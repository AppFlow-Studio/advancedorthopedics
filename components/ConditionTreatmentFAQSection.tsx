import React from 'react';
import { FAQItem, conditions, conditionContentPlaceholders } from './data/conditions';
import { AllTreatments, treatmentContentPlaceholders } from './data/treatments';

interface ConditionTreatmentFAQSectionProps {
  faqs: FAQItem[];
  pageTitle: string;
  currentSlug: string;
}

// Helper function to process text with bold markdown and internal linking
function processTextWithBoldAndLinks(text: string, currentSlug: string) {
  if (!text || typeof text !== 'string') return text;
  
  // Step 1: Convert **bold** markdown to <strong> tags first
  let processed = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Step 2: Build maps from conditions and treatments (include both old and new format)
  const conditionMap = Object.fromEntries([
    ...conditions.map(c => [c.title.toLowerCase(), { slug: c.slug, type: 'condition' }]),
    ...conditionContentPlaceholders.map(c => [c.title.toLowerCase(), { slug: c.slug, type: 'condition' }])
  ]);
  const treatmentMap = Object.fromEntries([
    ...AllTreatments.map(t => [t.title.toLowerCase(), { slug: t.slug, type: 'treatment' }]),
    ...treatmentContentPlaceholders.map(t => [t.title.toLowerCase(), { slug: t.slug, type: 'treatment' }])
  ]);
  const allTitles = [
    ...conditions.map(c => c.title),
    ...conditionContentPlaceholders.map(c => c.title),
    ...AllTreatments.map(t => t.title),
    ...treatmentContentPlaceholders.map(t => t.title)
  ];
  
  // Step 3: Split text into segments (text and HTML tags) to avoid linking inside HTML
  const segments: Array<{ type: 'text' | 'html'; content: string }> = [];
  let lastIndex = 0;
  const tagRegex = /<[^>]+>/g;
  let tagMatch;
  
  while ((tagMatch = tagRegex.exec(processed)) !== null) {
    // Add text before tag
    if (tagMatch.index > lastIndex) {
      segments.push({
        type: 'text',
        content: processed.substring(lastIndex, tagMatch.index)
      });
    }
    // Add HTML tag
    segments.push({
      type: 'html',
      content: tagMatch[0]
    });
    lastIndex = tagMatch.index + tagMatch[0].length;
  }
  
  // Add remaining text
  if (lastIndex < processed.length) {
    segments.push({
      type: 'text',
      content: processed.substring(lastIndex)
    });
  }
  
  // Step 4: Process only text segments for linking
  const sortedTitles = allTitles.slice().sort((a, b) => b.length - a.length);
  
  const processedSegments = segments.map(segment => {
    if (segment.type === 'html') {
      return segment.content; // Keep HTML as-is
    }
    
    let textContent = segment.content;
    
    // Linkify condition and treatment names in text segments
    sortedTitles.forEach(title => {
      const lowerTitle = title.toLowerCase();
      const cond = conditionMap[lowerTitle];
      const treat = treatmentMap[lowerTitle];
      const slug = cond ? cond.slug : treat ? treat.slug : null;
      const type = cond ? 'condition' : treat ? 'treatment' : null;
      
      if (!slug || slug === currentSlug) return;
      
      // Escape special regex characters
      const escapedTitle = title.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
      // Match as whole word, case-insensitive
      const titleRegex = new RegExp(`(?<![\\w-])${escapedTitle}(?![\\w-])`, 'gi');
      
      textContent = textContent.replace(titleRegex, (match) => {
        const href = type === 'condition' ? `/area-of-specialty/${slug}` : `/treatments/${slug}`;
        return `<a href="${href}" class="underline text-[#252932] hover:text-[#2358AC]">${match}</a>`;
      });
    });
    
    return textContent;
  });
  
  return processedSegments.join('');
}

/**
 * Server component for condition/treatment page FAQ rendering with SEO-optimized structure
 * Uses article-based layout (always visible, not accordion) for better SEO
 * Note: FAQPage schema is handled in layout.tsx to avoid duplicates
 */
export default function ConditionTreatmentFAQSection({ 
  faqs, 
  pageTitle,
  currentSlug 
}: ConditionTreatmentFAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  // Import condition and treatment maps for linkification
  // Note: In a real implementation, these would be passed as props or imported
  // For now, we'll use empty maps and let the parent handle linkification if needed
  const conditionMap = new Map<string, string>();
  const treatmentMap = new Map<string, string>();

  return (
    <section 
      className="w-full flex flex-col space-y-[40px]"
      aria-labelledby="faq-heading"
    >
      <h2 
        id="faq-heading"
        style={{ 
          fontFamily: 'var(--font-public-sans)',
          fontWeight: 500,
        }} 
        className="text-[#111315] sm:text-4xl text-2xl"
      >
        Frequently Asked Questions About {pageTitle}
      </h2>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => {
          const answerId = `faq-answer-${index}`;
          const questionId = `faq-question-${index}`;

          return (
            <article
              key={`${faq.question}-${index}`}
              className={index !== faqs.length - 1 ? "pb-6 border-b border-[#DCDEE1]" : ""}
            >
              <h3 
                id={questionId}
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className="text-[#111315] text-base sm:text-lg mb-3"
              >
                {faq.question}
              </h3>
              <div
                id={answerId}
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                }}
                className="text-[#424959] sm:text-xl text-sm leading-relaxed [&_strong]:font-semibold [&_strong]:text-[#111315] [&_a]:underline [&_a]:text-[#252932] [&_a:hover]:text-[#2358AC]"
                dangerouslySetInnerHTML={{
                  __html: processTextWithBoldAndLinks(faq.answer, currentSlug)
                }}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}

