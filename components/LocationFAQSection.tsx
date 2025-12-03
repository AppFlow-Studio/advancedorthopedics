import React from 'react';
import { generateFAQPageSchema } from '@/lib/faq-utils';

interface LocationFAQSectionProps {
  faqs: { question: string; answer: string }[];
  locationName: string;
  pageUrl: string;
}

/**
 * Server component for location page FAQ rendering with SEO-optimized structure
 * Includes FAQPage schema markup for search engines
 * All FAQs in a single container for compact design
 */
export default function LocationFAQSection({ faqs, locationName, pageUrl }: LocationFAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  const faqSchema = generateFAQPageSchema(faqs, pageUrl);

  return (
    <>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <section 
        className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-2 md:px-[40px]"
        aria-labelledby="location-faq-heading"
      >
        <h2 
          id="location-faq-heading"
          style={{ 
            fontFamily: 'var(--font-public-sans)'
          }} 
          className="text-[#111315] text-lg sm:text-xl mb-6 font-bold"
        >
          Frequently Asked Questions About Our {locationName} Location
        </h2>
        
        <div className="rounded-[20px] border border-[#DCDEE1] bg-[#FAFAFA] p-6 sm:p-8">
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
                      fontFamily: 'var(--font-public-sans)',
                      fontWeight: 400,
                    }}
                    className="text-[#424959] text-base leading-relaxed"
                  >
                    <div 
                      className="[&_p]:mb-2 [&_p:last-child]:mb-0"
                    >
                      {faq.answer}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

