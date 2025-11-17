'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import BookAnAppoitmentButton from "@/components/BookAnAppoitmentButton";
import { DoctorContactForm } from "@/components/DoctorContactForm";
import SlidingDiv from "@/components/SlidingAnimation";
import { Marquee } from "@/components/magicui/marquee";

// Image Asset Imports
import AAOS from '@/public/AAOS.png';
import ACP from '@/public/ACP.png';
import AOA from '@/public/AOA.png';
import NASS from '@/public/NASS.png';
import Serpent from '@/public/Serpent.png';
import SMIS from '@/public/SMIS.png';

// Professional association logo alt text mapping
const associationLogoAlt: Record<string, string> = {
  'AAOS': 'American Academy of Orthopaedic Surgeons (AAOS) member logo',
  'ACP': 'American College of Physicians (ACP) certification',
  'AOA': 'American Osteopathic Association (AOA) accreditation',
  'NASS': 'North American Spine Society (NASS) membership badge',
  'Serpent': 'Medical caduceus symbol representing healthcare excellence',
  'SMIS': 'Society for Minimally Invasive Spine Surgery (SMISS) member'
};
import Reveal from './RevealAnimation';
import { Clock } from 'lucide-react';

type TimePeriod = 'day' | 'sunset' | 'night';

export default function HomeHeroSection() {
  const [hasMounted, setHasMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [currentTime, setCurrentTime] = useState<string>('');
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('day');
  const [fadeKey, setFadeKey] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);
  const [initialFadeIn, setInitialFadeIn] = useState(false);

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

    // Preload sunset and night images for smooth transitions
    const preloadImages = () => {
      const sunsetImg = new window.Image();
      sunsetImg.src = '/homemountain2.png';
      const nightImg = new window.Image();
      nightImg.src = '/homemountain3.png';
    };
    preloadImages();

    // Trigger initial fade-in after a brief delay
    const fadeInTimeout = setTimeout(() => {
      setInitialFadeIn(true);
    }, 100);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(fadeInTimeout);
    };
  }, []);

  // Determine time period based on current hour
  const getTimePeriod = (hour: number): TimePeriod => {
    // Sunset: 5 PM - 6:59 PM (17:00 - 18:59)
    if (hour >= 17 && hour < 19) {
      return 'sunset';
    }
    // Night: 7 PM - 5:59 AM (19:00 - 5:59)
    if (hour >= 19 || hour < 6) {
      return 'night';
    }
    // Day: 6 AM - 4:59 PM (6:00 - 16:59)
    return 'day';
  };

  // // Update current time and time period every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hour = now.getHours();

      const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      setCurrentTime(timeString);

      // Update time period and trigger fade if changed
      const newPeriod = getTimePeriod(hour);
      if (newPeriod !== timePeriod) {
        setTimePeriod(newPeriod);
        // Don't change fadeKey - keep images mounted for smooth crossfade
      }
    };

    // Set initial time immediately
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    setCurrentTime(timeString);

    // On initial load, show homemountain1.png first, then fade to appropriate image after delay
    if (initialLoad) {
      // Wait for initial fade-in to complete (1500ms) plus a brief pause, then transition to correct time period
      const transitionTimeout = setTimeout(() => {
        const hour = new Date().getHours();
        const actualPeriod = getTimePeriod(hour);
        if (actualPeriod !== 'day') {
          setTimePeriod(actualPeriod);
          // Don't change fadeKey - keep images mounted for smooth crossfade
        }
        setInitialLoad(false);
      }, 2000); // Wait for initial fade-in (1500ms) + 500ms pause for smooth transition

      // Start regular updates after initial transition
      const interval = setInterval(() => {
        updateTime();
      }, 1000);

      return () => {
        clearTimeout(transitionTimeout);
        clearInterval(interval);
      };
    } else {
      // Regular updates after initial load
      updateTime();
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    }
  }, [timePeriod, initialLoad]);

  return (
    <section className={`w-full h-full flex flex-col relative overflow-hidden  justify-between ${timePeriod === 'day' ? '[mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_6rem)]' : '[mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_2rem)]'}`}>
      <div
        style={{
          filter: 'blur(30px)'
        }}
        className="w-full h-[120px] absolute top-0 z-[1]"
      />
      {/* Time-based background images with smooth transitions */}
      <div className="absolute inset-0 w-full h-full">
        {/* Daytime image - homemountain1.png */}
        <Image
          key="day-image"
          src={'/homemountain1.png'}
          priority={true}
          fetchPriority="high"
          fill
          className={`absolute inset-0 object-cover object-center md:object-center transition-opacity duration-[1500ms] ease-in-out ${timePeriod === 'day' && initialFadeIn
            ? 'opacity-100'
            : timePeriod === 'day' && !initialFadeIn
              ? 'opacity-0'
              : 'opacity-0'
            }`}
          style={{
            pointerEvents: 'none',
            zIndex: timePeriod === 'day' ? 1 : 0
          }}
          alt="Board-certified spine and orthopedic surgeons consulting with Florida patients at Mountain Spine & Orthopedics - Daytime"
        />
        {/* Sunset image - homemountain2.png */}
        <Image
          key="sunset-image"
          src={'/homemountain2.png'}
          fill
          className={`absolute inset-0 object-cover object-center md:object-center transition-opacity duration-[1500ms] ease-in-out ${timePeriod === 'sunset' ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            pointerEvents: 'none',
            zIndex: timePeriod === 'sunset' ? 1 : 0
          }}
          alt="Board-certified spine and orthopedic surgeons consulting with Florida patients at Mountain Spine & Orthopedics - Sunset"
        />
        {/* Night image - homemountain3.png */}
        <Image
          key="night-image"
          src={'/homemountain3.png'}
          fill
          className={`absolute inset-0 object-cover object-center md:object-center transition-opacity duration-[1500ms] ease-in-out ${timePeriod === 'night' ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            pointerEvents: 'none',
            zIndex: timePeriod === 'night' ? 1 : 0
          }}
          alt="Board-certified spine and orthopedic surgeons consulting with Florida patients at Mountain Spine & Orthopedics - Night"
        />
      </div>
      <div
        className="lg:w-[100%] z-[1] h-full absolute left-0 top-0 md:w-[100%] w-full backdrop-blur-[2px]"
        style={{
          background: 'linear-gradient(180deg, rgba(10, 80, 236, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)',
        }}
      />
      {/* <div
        className="lg:w-[100%] z-[1] h-full absolute left-0 top-0 md:w-[85%] w-full"
        style={{
          background: '#5FBBEC',
        }}
      /> */}

      <div className="w-full h-full flex flex-row relative overflow-hidden justify-between  xl:pb-[160px]">
        <div className="z-[2] flex flex-col xl:w-[50%] sm:w-[70%] w-full h-full text-left xl:px-6 xl:py-8 relative">
          <SlidingDiv position="left" className="z-[2] sm:mt-30 mt-16">
            <div className="xl:px-[80px] px-8 my-[24px] xl:w-[90%]">
              {/* SEO-Optimized H1 - Hidden but accessible */}
              <h1 className="sr-only">
                Leading Spine & Orthopedic Specialists in Florida - Mountain Spine & Orthopedics
              </h1>

              {/* Visual Header - User-Friendly */}
              <p
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 500,
                }}
                className={`${timePeriod !== 'night' ? 'text-[#252932]' : 'text-white'} text-4xl sm:text-6xl xl:text-6xl sm:text-left text-center`}
              >
                Welcome to<br /> Mountain <br /> Spine & Orthopedics
              </p>

            </div>
          </SlidingDiv>
          <div className="z-[2] sm:hidden block px-4 mb-4">
            <div className="rounded-2xl">
              <DoctorContactForm backgroundcolor={'#0xFF'} buttonText="Get Your Free Consultation" header="" timePeriod={timePeriod}/>
            </div>
          </div>
          <SlidingDiv position="left" className="z-[2]">
            <div className="xl:px-[80px] px-8 mb-[24px] xl:w-full md:w-[80%] lg:w-full md:text-left sm:text-center">
              <p
                style={{
                  fontWeight: 400,
                }}
                className={`${timePeriod !== 'night' ? 'text-[#424959]' : 'text-white'} text-xl lg:text-2xl sm:text-left text-center`}
              >
                Experience expert orthopedic surgeon specialists providing minimally invasive spine surgery, joint replacement surgery, and advanced back pain treatment in Orlando, Hollywood, Boca Raton, and South Florida. Book your orthopedic surgery consultation today.
              </p>
            </div>
          </SlidingDiv>

          <SlidingDiv position="left" className="z-[2]">
            <div className="xl:px-[80px] px-8 my-[24px] xl:w-full md:flex-row sm:flex hidden flex-col md:space-y-0 space-y-4 md:space-x-[16px]">
              <div className="">
                <BookAnAppoitmentButton />
              </div>
              <a
                href="tel:5612239959"
                className="h-full max-h-[56px] group flex-row hover:cursor-pointer lg:flex hidden px-[32px] py-[16px] rounded-[62px] relative items-center justify-center md:justify-between bg-[transparent] text-[#0A50EC] border-[1px] border-[#0A50EC] w-full md:w-fit font-[500] text-[14px]"
              >
                <p className="group-hover:scale-[1.1] transition-all duration-300 ease-in-out">Contact Us</p>
                <div className='pl-[10px] group-hover:translate-x-1 transition-all duration-300 ease-in-out'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                    <path d="M12.3982 0.768483C12.0402 0.410504 11.4598 0.410506 11.1018 0.768488C10.7438 1.12647 10.7438 1.70687 11.1018 2.06485L14.1203 5.08333H1.66667C1.16041 5.08333 0.75 5.49374 0.75 6C0.75 6.50626 1.16041 6.91667 1.66667 6.91667H14.1203L11.1018 9.93516C10.7439 10.2931 10.7439 10.8735 11.1019 11.2315C11.4598 11.5895 12.0402 11.5895 12.3982 11.2315L16.9766 6.65303C16.9935 6.63637 17.0098 6.61905 17.0254 6.60112C17.0873 6.52997 17.1365 6.45154 17.1728 6.36885C17.2221 6.25677 17.2496 6.13294 17.25 6.00273L17.25 6C17.25 5.99717 17.25 5.99434 17.25 5.99152C17.2489 5.87623 17.2266 5.76602 17.1867 5.66463C17.142 5.55068 17.0736 5.44387 16.9815 5.35178L12.3982 0.768483Z" fill="#0A50EC" />
                  </svg>
                </div>
              </a>
            </div>
          </SlidingDiv>
        </div>

        <div className="w-[50%] self-end h-full sm:flex hidden flex-col z-[2] mb-20">
          <div className="xl:w-[65%] w-[95%] rounded-2xl mx-auto">
            <div className="text-center mb-4">
              <div
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 500,
                }}
                className={`text-[#252932] text-sm sm:text-sm text-end mr-4 ${timePeriod !== 'night' ? 'text-[#252932]' : 'text-gray-300'} flex items-center justify-end gap-x-2`}
              >
                <p className="font-semibold">{currentTime}</p> <span><Clock className='w-4 h-4' /></span>
              </div>
            </div>
            <DoctorContactForm backgroundcolor={'rgba(255,255,255,0.00)'} buttonText="Get Your Free Consultation" header="" timePeriod={timePeriod} />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row items-center justify-evenly pb-10 "
      >
        {hasMounted && dimensions.width > 0 && (
          <div className="w-full z-20">
            <Marquee pauseOnHover className="w-full grayscale ">
              {[
                { img: AAOS, name: 'AAOS' },
                { img: ACP, name: 'ACP' },
                { img: AOA, name: 'AOA' },
                { img: NASS, name: 'NASS' },
                { img: Serpent, name: 'Serpent' },
                { img: SMIS, name: 'SMIS' }
              ].map((item, index) => (
                <Image
                  key={index}
                  src={item.img}
                  alt={associationLogoAlt[item.name]}
                  className="lg:h-[40px] h-10 md:h-8 object-contain mx-[20px]"
                  draggable={false}
                />
              ))}
            </Marquee>
          </div>
        )}
      </div>
    </section>
  );
} 
