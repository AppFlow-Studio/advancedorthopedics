import React from 'react';
import type { BlogFAQItem } from '@/components/BlogPostCard';
import { processBlogHTML } from '@/lib/process-blog-html';

interface BlogFAQSectionProps {
  faqs: BlogFAQItem[];
}

/**
 * Server component for FAQ rendering with SEO-optimized structure
 * Uses dangerouslySetInnerHTML for rich text since HTML is from trusted Supabase source
 * Processes HTML to ensure links have proper styling
 */
export default function BlogFAQSection({ faqs }: BlogFAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section 
      className="rounded-[24px] border border-blue-100 bg-blue-50/60 px-4 sm:px-6 py-6 sm:py-8 shadow-sm"
    >
      <div className="flex flex-col gap-2 mb-6 sm:mb-8">
        <h2 
          style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }} 
          className="text-[#111315] text-2xl sm:text-3xl"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-[#394257]">
          Answers to the most common patient questions about this topic.
        </p>
      </div>
      <div className="space-y-4 sm:space-y-6">
        {faqs.map((faq, index) => {
          const answerId = `faq-answer-${index}`;
          const questionId = `faq-question-${index}`;

          return (
            <article
              key={`${faq.question}-${index}`}
              className="rounded-2xl border border-blue-100 bg-white/95 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="px-4 sm:px-6 py-4 sm:py-5">
                <h3 
                  id={questionId}
                  className="text-base sm:text-lg font-semibold text-[#1C2340] mb-3 sm:mb-4"
                >
                  {faq.question}
                </h3>
                <div
                  id={answerId}
                  className="text-sm sm:text-base leading-relaxed text-[#424959] space-y-2 [&_p]:mb-4 [&_br]:block"
                >
                  <div 
                    dangerouslySetInnerHTML={{ __html: processBlogHTML(faq.answer) }}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

