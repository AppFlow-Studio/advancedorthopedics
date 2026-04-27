'use client';

import React from 'react';
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Testimonials } from '@/components/data/homepage-data';

export default function HomeStatisticsBar() {
  const mobileLabelMap: Record<string, string> = {
    'Successful Treatments': 'Treatments',
    'Years of Experience': 'Years Experience',
    'Patient Satasfaction Rate': 'Satisfaction Rate',
    'Customer Support': 'Support',
  };

  return (
    <section className="bg-white w-full py-6 md:py-[50px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[40px]">
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {Testimonials.map((item) => (
            <div className="rounded-2xl bg-[#F8FAFC] border border-[#E8EEF7] px-3 py-4 text-center shadow-sm" key={item.desc}>
              <strong style={{ fontFamily: "var(--font-public-sans)", fontWeight: 500 }} className="text-3xl tracking-wide leading-none text-[#111315]">
                <NumberTicker value={item.value} className="text-[#111315]" />
                {item.stat}
              </strong>
              <p style={{ fontFamily: "var(--font-public-sans)", fontWeight: 400 }} className="mt-2 text-xs leading-snug text-[#424959]">
                {mobileLabelMap[item.desc] ?? item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden md:flex w-full flex-col space-y-10 md:space-y-0 md:flex-row items-center justify-evenly overflow-hidden">
          {Testimonials.map((item) => (
            <div className="flex flex-col space-y-[12px] p-[18px] max-h-[190px] lg:h-[190px] items-center justify-center" key={item.desc}>
              <strong style={{ fontFamily: "var(--font-public-sans)", fontWeight: 400 }} className="text-black lg:text-6xl md:text-4xl text-6xl">
                <NumberTicker value={item.value} className="text-black" />
                {item.stat}
              </strong>
              <p style={{ fontFamily: "var(--font-public-sans)", fontWeight: 400 }} className="text-[#424959] text-xl md:text-lg text-center lg:text-start">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
