'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { PainToProgress } from '@/components/data/homepage-data';

export default function HomePainToProgress() {
  const [hasMounted, setHasMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setHasMounted(true);
    // Calculate initial dimensions
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initial calculation
    updateDimensions();

    // Add resize listener
    window.addEventListener('resize', updateDimensions);

    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-2 md:px-[40px]">
      <div
        style={{
          background: 'linear-gradient(246deg, #FAFBFC 13.17%, #E0F5FF 52.92%, #E1ECFE 99.53%)'
        }}
        className="w-full p-[40px] rounded-[24px] items-center justify-center flex flex-col space-y-[0px]"
      >
        <div className="w-full flex items-center justify-center flex-col">
          <div className="bg-white px-[14px] py-[7px] flex items-center justify-center max-w-[150px] rounded-[62px] self-center">
            <p
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
                background: 'linear-gradient(177deg, #022968 -13.59%, #0094E0 109.86%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              className="text-xl"
            >
              Our Process
            </p>
          </div>
          <div>
            <h2
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-5xl text-black mt-[20px]"
            >
              From Pain to Progress
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <p
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
              }}
              className="text-lg text-[#5B5F67] mt-[20px] text-center w-full md:w-[55%] self-center"
            >
              Trust Mountain Spine & Orthopedics for expert care, compassionate service, and results
              that make a difference. Your mobility and well-being are our top priority!
            </p>
          </div>
        </div>
        <div className="w-full md:mt-[60px] mt-4">
          {hasMounted && dimensions.width > 0 && (
            <div className="w-full">
              <Carousel className="w-full h-full">
                <CarouselContent className="-ml-4 md:gap-x-4" minusOffset={2}>
                  {PainToProgress.map((item, index) => (
                    <CarouselItem className="xl:basis-1/3 md:basis-1/2 pl-6 relative" key={index}>
                      <div className="bg-[#EFF5FF] flex flex-col p-4 rounded-[24px] space-y-[32px]" key={item.title}>
                        <div>
                          <Image
                            src={item.img}
                            alt={item.title}
                            className="w-full max-h-[240px] h-[240px] object-cover rounded-[24px] lg:h-[240px]"
                            draggable={false}
                          />
                        </div>
                        <div className="flex flex-col space-y-[16px]">
                          <h3
                            style={{
                              fontFamily: "var(--font-reem-kufi)",
                              fontWeight: 500,
                              color: '#022968',
                            }}
                            className="text-xl"
                          >
                            {item.title}
                          </h3>
                          <p
                            style={{
                              fontFamily: "var(--font-reem-kufi)",
                              fontWeight: 500,
                              color: '#5B5F67',
                            }}
                            className="text-lg"
                          >
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 