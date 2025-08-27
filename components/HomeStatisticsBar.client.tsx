'use client';

import React from 'react';
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Testimonials } from '@/components/data/homepage-data';

export default function HomeStatisticsBar() {
  return (
    <section className="bg-white w-full py-[50px]">
      <div className="w-full max-w-[1440px] flex flex-col space-y-10 md:space-y-0 md:flex-row mx-auto px-[40px] items-center justify-evenly overflow-hidden">
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
    </section>
  );
} 
