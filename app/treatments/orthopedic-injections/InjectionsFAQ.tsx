'use client';

import React, { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface InjectionsFAQProps {
  faqs: FAQItem[];
}

export default function InjectionsFAQ({ faqs }: InjectionsFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const processText = (text: string) =>
    text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <article
            key={index}
            className="border border-[#DCDEE1] rounded-[16px] overflow-hidden"
            itemScope
            itemType="https://schema.org/Question"
          >
            <button
              type="button"
              className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#FAFAFA] transition-colors"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <h3
                style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }}
                className="text-[#111315] text-base sm:text-lg pr-4"
                itemProp="name"
              >
                {faq.question}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`flex-shrink-0 text-[#424959] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {/*
              Answer is ALWAYS present in the DOM (for SSR / Googlebot crawlability).
              Only the visual display changes via `hidden` class.
              This ensures all FAQ answer text appears in the server-rendered HTML
              and is fully indexable without JavaScript execution.
            */}
            <div
              id={`faq-answer-${index}`}
              className={isOpen ? 'px-5 pb-5 border-t border-[#DCDEE1]' : 'hidden'}
              itemScope
              itemType="https://schema.org/Answer"
            >
              <div
                style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
                className="text-[#424959] sm:text-xl text-sm leading-relaxed pt-4 [&_strong]:font-semibold [&_strong]:text-[#111315]"
                itemProp="text"
                dangerouslySetInnerHTML={{ __html: processText(faq.answer) }}
              />
            </div>
          </article>
        );
      })}
    </div>
  );
}
