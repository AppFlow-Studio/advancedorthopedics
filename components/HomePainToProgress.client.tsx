'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PainToProgress } from '@/components/data/homepage-data';

export default function HomePainToProgress() {
  const [hasMounted, setHasMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-2 md:px-[40px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          background: 'linear-gradient(246deg, #FAFBFC 13.17%, #E0F5FF 52.92%, #E1ECFE 99.53%)'
        }}
        className="w-full p-[40px] rounded-[24px] items-center justify-center flex flex-col space-y-[0px] relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#0A50EC] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#252932] rounded-full blur-3xl"></div>
        </div>

        <div className="w-full flex items-center justify-center flex-col relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white px-[14px] py-[7px] flex items-center justify-center max-w-[150px] rounded-[62px] self-center shadow-lg"
          >
            <p
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 500,
                background: 'linear-gradient(177deg, #252932 -13.59%, #0A50EC 109.86%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              className="text-xl"
            >
              Our Process
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 500,
              }}
              className="text-5xl text-black mt-[20px] text-center"
            >
              From Pain to Progress
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <p
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 500,
              }}
              className="text-lg text-[#424959] mt-[20px] text-center w-full md:w-[55%] self-center"
            >
              Trust Mountain Spine & Orthopedics for expert care, compassionate service, and results
              that make a difference. Your mobility and well-being are our top priority!
            </p>
          </motion.div>
        </div>

        <div className="w-full md:mt-[60px] mt-4 relative z-10">
          {hasMounted && dimensions.width > 0 && (
            <div className="w-full">
              <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                  align: "center",
                }}
              >
                <CarouselContent>
                  {PainToProgress.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 py-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white/80 backdrop-blur-sm flex flex-col p-6 rounded-[24px] space-y-[24px] shadow-md hover:shadow-lg transition-all duration-300 border border-white/50 h-full"
                      >
                        <div className="relative overflow-hidden rounded-[20px]">
                          <Image
                            src={item.img}
                            alt={item.title}
                            className="w-full max-h-[240px] h-[240px] object-cover rounded-[20px] lg:h-[240px] transition-transform duration-300 hover:scale-105"
                            draggable={false}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="flex flex-col space-y-[16px] flex-grow">
                          <h3
                            style={{
                              fontFamily: "var(--font-public-sans)",
                              fontWeight: 600,
                              color: '#252932',
                            }}
                            className="text-xl"
                          >
                            {item.title}
                          </h3>
                          <p
                            style={{
                              fontFamily: "var(--font-public-sans)",
                              fontWeight: 400,
                              color: '#424959',
                            }}
                            className="text-base leading-relaxed"
                          >
                            {item.body}
                          </p>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-white/90 backdrop-blur-sm border border-[#0A50EC]/20 hover:bg-white hover:shadow-xl transition-all duration-300 absolute -left-5 top-1/2 -translate-y-1/2" />
                <CarouselNext className="bg-white/90 backdrop-blur-sm border border-[#0A50EC]/20 hover:bg-white hover:shadow-xl transition-all duration-300 absolute -right-5 top-1/2 -translate-y-1/2" />
              </Carousel>
              <div className="mt-4 flex items-center justify-center gap-3">
                <div className="flex items-center gap-2">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${index === current
                        ? 'bg-[#0A50EC] w-6'
                        : 'bg-[#0A50EC]/30 w-2 hover:bg-[#0A50EC]/50'
                        }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
} 
