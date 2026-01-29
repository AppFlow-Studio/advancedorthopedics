'use client';

import React from 'react';
import { treatmentFAQs } from '@/components/data/treatmentFAQs';

interface TreatmentFAQProps {
  slug: string;
}

export default function TreatmentFAQ({ slug }: TreatmentFAQProps) {
  const faqs = treatmentFAQs[slug];

  if (!faqs || faqs.length === 0) {
    return null;
  }

  // Helper for processing markdown bold syntax
  const processText = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <section 
      className="w-full flex flex-col space-y-[40px] mt-10"
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
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => {
          const answerId = `faq-answer-${index}`;
          const questionId = `faq-question-${index}`;

          return (
            <article
              key={index}
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
              >
                <div
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                  }}
                  className="text-[#424959] sm:text-xl text-sm leading-relaxed [&_strong]:font-semibold [&_strong]:text-[#111315] [&_a]:underline [&_a]:text-[#252932] [&_a:hover]:text-[#2358AC]"
                  dangerouslySetInnerHTML={{
                    __html: processText(faq.answer)
                  }}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
