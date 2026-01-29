import React from 'react';
import { FAQItem, conditions, conditionContentPlaceholders } from './data/conditions';
import { AllTreatments, allTreatmentContent } from './data/treatments';

interface ConditionTreatmentFAQSectionProps {
  faqs: FAQItem[];
  pageTitle: string;
  currentSlug: string;
}

// Helper function to process text with bold markdown and internal linking
function processTextWithBoldAndLinks(text: string, currentSlug: string) {
  if (!text || typeof text !== 'string') return text;
  
  // Step 0: Remove bold formatting from "Physical Therapy" / "physical therapy" (not a service we offer)
  let processed = text.replace(/\*\*Physical Therapy\*\*/gi, 'Physical Therapy');
  processed = processed.replace(/\*\*physical therapy\*\*/gi, 'physical therapy');
  
  // Step 1: ALWAYS convert **bold** markdown to <strong> tags first (even if HTML links exist)
  // This handles cases where markdown is inside HTML links like <a>**text**</a>
  processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  
  // Step 2: Clean up Physical Therapy links/bold that might have been created
  processed = processed.replace(/<a[^>]*>Physical Therapy<\/a>/gi, 'Physical Therapy')
                       .replace(/<a[^>]*>physical therapy<\/a>/gi, 'physical therapy')
                       .replace(/<strong>Physical Therapy<\/strong>/gi, 'Physical Therapy')
                       .replace(/<strong>physical therapy<\/strong>/gi, 'physical therapy');
  
  // Step 3: If text already contains HTML links, we're done (don't add more links)
  if (processed.includes('<a href=')) {
    return processed;
  }
  
  // Step 2: Build maps from conditions and treatments (include both old and new format)
  const conditionMap = Object.fromEntries([
    ...conditions.map(c => [c.title.toLowerCase(), { slug: c.slug, type: 'condition' }]),
    ...conditionContentPlaceholders.map(c => [c.title.toLowerCase(), { slug: c.slug, type: 'condition' }])
  ]);
  const treatmentMap = Object.fromEntries([
    ...AllTreatments.map(t => [t.title.toLowerCase(), { slug: t.slug, type: 'treatment' }]),
    ...allTreatmentContent.map(t => [t.title.toLowerCase(), { slug: t.slug, type: 'treatment' }])
  ]);
  const allTitles = [
    ...conditions.map(c => c.title),
    ...conditionContentPlaceholders.map(c => c.title),
    ...AllTreatments.map(t => t.title),
    ...allTreatmentContent.map(t => t.title)
  ];
  
  // Step 4: Linkify text that doesn't already have links
  // Sort titles by length descending to avoid partial matches
  const sortedTitles = allTitles.slice().sort((a, b) => b.length - a.length);
  
  // Track which slugs have already been linked
  const linkedSlugs = new Set<string>();
  
  // Split into segments to avoid linking inside existing HTML tags
  const segments: Array<{ type: 'text' | 'html'; content: string }> = [];
  let lastIndex = 0;
  const tagRegex = /<[^>]+>/g;
  let tagMatch;
  
  while ((tagMatch = tagRegex.exec(processed)) !== null) {
    if (tagMatch.index > lastIndex) {
      segments.push({
        type: 'text',
        content: processed.substring(lastIndex, tagMatch.index)
      });
    }
    segments.push({
      type: 'html',
      content: tagMatch[0]
    });
    lastIndex = tagMatch.index + tagMatch[0].length;
  }
  
  if (lastIndex < processed.length) {
    segments.push({
      type: 'text',
      content: processed.substring(lastIndex)
    });
  }
  
  // Process only text segments for linking
  const processedSegments = segments.map(segment => {
    if (segment.type === 'html') {
      return segment.content;
    }
    
    let textContent = segment.content;
    
    sortedTitles.forEach(title => {
      const lowerTitle = title.toLowerCase();
      const cond = conditionMap[lowerTitle];
      const treat = treatmentMap[lowerTitle];
      const slug = cond ? cond.slug : treat ? treat.slug : null;
      const type = cond ? 'condition' : treat ? 'treatment' : null;
      
      if (!slug || slug === currentSlug) return;
      if (lowerTitle === 'physical therapy') return;
      if (linkedSlugs.has(slug)) return;
      
      const escapedTitle = title.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
      const titleRegex = new RegExp(`(?<![\\w-])${escapedTitle}(?![\\w-])`, 'gi');
      
      let hasMatched = false;
      textContent = textContent.replace(titleRegex, (match) => {
        if (hasMatched) return match;
        hasMatched = true;
        linkedSlugs.add(slug);
        const href = type === 'condition' ? `/conditions/${slug}` : `/treatments/${slug}`;
        return `<a href="${href}" class="underline text-[#252932] hover:text-[#2358AC]">${match}</a>`;
      });
    });
    
    return textContent;
  });
  
  processed = processedSegments.join('');
  
  // Step 5: Final cleanup - remove any Physical Therapy links
  processed = processed.replace(/<a[^>]*>Physical Therapy<\/a>/gi, 'Physical Therapy')
                       .replace(/<a[^>]*>physical therapy<\/a>/gi, 'physical therapy');
  
  return processed;
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

