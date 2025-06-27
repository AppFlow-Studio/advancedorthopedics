'use client';

import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Data Imports from the centralized file
import {
  ServicesAndExpertise,
  OurSpecialtyItems,
  Testimonials,
  Amenities,
  PainToProgress,
  OrthoConditionsWeTreat
} from '@/components/data/homepage-data';

// Component Imports
import BookAnAppoitmentButton from "@/components/BookAnAppoitmentButton";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import DoctorCard from "@/components/DoctorCard";
import ClinicsMap from "@/components/ClinicsMap";
import ContactUsSection from "@/components/ContactUsSection";
import RatingsAndReviews from "@/components/RatingsAndReviews";
import { DoctorContactForm } from "@/components/DoctorContactForm";
import { Doctors } from "@/components/data/doctors";

// Animation & UI Imports
import { motion } from "framer-motion";
import Reveal from "@/components/RevealAnimation";
import { NumberTicker } from "@/components/magicui/number-ticker";
import SlidingDiv from "@/components/SlidingAnimation";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Marquee } from "@/components/magicui/marquee";

// Image Asset Imports
import AAOS from '../../public/AAOS.png';
import ACP from '../../public/ACP.png';
import AOA from '../../public/AOA.png';
import NASS from '../../public/NASS.png';
import Serpent from '../../public/Serpent.png';
import SMIS from '../../public/SMIS.png';
import HomeWhyAO from '../../public/HomeWhyAO-min.jpeg';
import MRI1 from '../../public/MRI1.png';
import MRI2 from '../../public/MRI2.png';
import MRI3 from '../../public/MRI3.png';

export default function HomePageUI() {
  const [selectedService, setSelectedService] = useState('Neck & Spine');
  const [selectedOrthoCondition, setSelectedOrthoCondition] = useState(OrthoConditionsWeTreat[0]);
  const router = useRouter();
  const [treatmentFilter, setTreatmentFilter] = useState<string>('');
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

  const SendTreatmentFilterData = (treatmentfilter: string) => {
    setTreatmentFilter(treatmentfilter);
    router.push(`/treatments?filter=${treatmentfilter}`);
  };

  return (
    <main className=" w-full flex flex-col items-center justify-center bg-white h-full" >
      <section className="w-full h-full flex flex-col relative overflow-hidden  justify-between" >
        <div
          style={{
            background: 'white',
            filter: 'blur(30px)'
          }}
          className="w-full h-[120px] absolute top-0 z-[1]"
        />
        <Image src={'https://mountainspineortho.b-cdn.net/public/home-landing-min.jpeg'} priority={true} layout='fill' className="h-full absolute top-0 object-cover  object-center md:object-top pt-16 self-end w-full md:pl-[100px] pl-8" alt="Doctor Diagnosing a Old Patient" />
        <div className="lg:w-[60%] z-[1] h-full absolute left-0 top-0 md:w-[85%] w-full"
          style={{
            background: 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
          }}
        />

        <div className="w-full h-full flex flex-row relative overflow-hidden  justify-between">
          <div className="z-[2] flex flex-col xl:w-[50%] sm:w-[70%] w-full h-full  text-left xl:px-6 xl:py-8 relative xl:pb-[160px]">
            <SlidingDiv position="left" className="z-[2] sm:mt-30 mt-16">
              <div className="xl:px-[80px] px-8 my-[24px] xl:w-[90%]  ">
                <h1
                  style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 500,
                  }}
                  className="text-white text-5xl sm:text-6xl xl:text-6xl text-shadow-sm"
                >
                  Welcome to<br /> Mountain <br /> Spine & Orthopedics
                </h1>
              </div>
            </SlidingDiv>
            <SlidingDiv position="left" className="z-[2] sm:hidden block px-4 mb-4">
              <div className="rounded-2xl bg-[rgba(255,255,255,0.50)]"><DoctorContactForm backgroundcolor={'#0xFF'} buttonText="Get Your Free Consultation" header="" /></div>
            </SlidingDiv>
            <SlidingDiv position="left" className="z-[2]">
              <div className="xl:px-[80px] px-8 mb-[24px] xl:w-full md:w-[80%] lg:w-full md:text-left sm:text-center">
                <p
                  style={{
                    fontWeight: 400,
                  }}
                  className="text-white text-xl lg:text-2xl text-shadow-sm"
                >
                  Experience the future of orthopedic care at our modern facility, where our expert team combines advanced technology with personalized treatment plans to deliver fast, effective minimally invasive procedures.
                </p>
              </div>
            </SlidingDiv>

            <SlidingDiv position="left" className="z-[2]">
              <div className="xl:px-[80px] px-8 my-[24px] xl:w-full flex md:flex-row flex-col md:space-y-0 space-y-4 md:space-x-[16px]">
                <div className=""><BookAnAppoitmentButton /></div>
                <a href="tel:5612239959"
                  className="h-full max-h-[56px] group flex-row hover:cursor-pointer lg:flex hidden  px-[32px] py-[16px] rounded-[62px] relative items-center  justify-center `md:justify-between bg-[white] text-[#0094E0]  w-full md:w-fit font-[500] text-[14px] "
                >
                  <p className="group-hover:scale-[1.1] transition-all duration-300 ease-in-out">Contact Us</p>
                  <div className='pl-[10px] group-hover:translate-x-1 transition-all duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                      <path d="M12.3982 0.768483C12.0402 0.410504 11.4598 0.410506 11.1018 0.768488C10.7438 1.12647 10.7438 1.70687 11.1018 2.06485L14.1203 5.08333H1.66667C1.16041 5.08333 0.75 5.49374 0.75 6C0.75 6.50626 1.16041 6.91667 1.66667 6.91667H14.1203L11.1018 9.93516C10.7439 10.2931 10.7439 10.8735 11.1019 11.2315C11.4598 11.5895 12.0402 11.5895 12.3982 11.2315L16.9766 6.65303C16.9935 6.63637 17.0098 6.61905 17.0254 6.60112C17.0873 6.52997 17.1365 6.45154 17.1728 6.36885C17.2221 6.25677 17.2496 6.13294 17.25 6.00273L17.25 6C17.25 5.99717 17.25 5.99434 17.25 5.99152C17.2489 5.87623 17.2266 5.76602 17.1867 5.66463C17.142 5.55068 17.0736 5.44387 16.9815 5.35178L12.3982 0.768483Z" fill="#0094E0" />
                    </svg>
                  </div>
                </a>
              </div>
            </SlidingDiv>
          </div>

          <div className="w-[50%] self-end h-full sm:flex hidden flex-col z-[2] xl:mb-32" >
            <div className="xl:w-[65%] w-[95%] rounded-2xl bg-[rgba(255,255,255,0.50)] mx-auto"><DoctorContactForm backgroundcolor={'#0xFF'} buttonText="Get Your Free Consultation" header="" /></div>
          </div>
        </div>

        <div className="z-[2] w-full flex flex-row items-center justify-evenly xl:absolute xl:bottom-0 xl:left-0 xl:right-0 bg-white py-12 pt-[32px] pb-[50px]"
          style={{
            background: 'linear-gradient(0deg, #6FC2ED 47.98%, rgba(118, 197, 238, 0.00) 100%)'
          }}
        >
          {hasMounted && dimensions.width > 0 && (
            <div className="w-full">
              <Marquee pauseOnHover className="w-full">
                {[AAOS, ACP, AOA, NASS, Serpent, SMIS].map((item, index) => (
                  <Image
                    key={index}
                    src={item}
                    alt="Logo of a professional medical association"
                    className="lg:h-[40px] h-10 md:h-8 object-contain mx-[20px]"
                    draggable={false}
                  />
                ))}
              </Marquee>
            </div>
          )}
        </div>
      </section>

      {/* Services & Expertise */}
      <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-3 md:px-[40px]">
        <div className=" xl:grid xl:grid-cols-3 flex flex-col gap-[32px]">
          <div className=" rounded-[24px] bg-[#FAFAFA] p-[40px] flex flex-col col-span-1">
            <div className=" bg-white rounded-[32px] px-[14px] py-[7px] w-fit ">
              <p
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                  background: 'linear-gradient(270deg, #D4ABE5 0%, #9596EC 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
                className=" text-sm text-center"
              >The Future of Spine & Orthopedic Care
              </p>
            </div>

            <div className="mt-[12px]">
              <h2
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                  color: '#022968',
                }}
                className="text-5xl text-left"
              >Services & Expertise</h2>
            </div>

            <div className="sm:grid hidden grid-cols-2 gap-[10px] mt-[40px]">
              {
                ServicesAndExpertise.map((item) => (
                  <Link
                    href={`/area-of-speciality?data=${encodeURIComponent(JSON.stringify({ tags: item.link }))}`}
                    key={item.title} className={`flex flex-row px-[15px] py-[10px] space-x-[10px] bg-[#EFF5FF] rounded-2xl items-center justify-center hover:cursor-pointer `} onClick={() => setSelectedService(item.title)}>
                    <Image src={item.img} alt={item.title} className="h-[22px] w-[22px] " />
                    <span className={`text-[#5B5F67]`}>{item.title}</span>
                  </Link>
                ))
              }
            </div>
          </div>
          <div className=" rounded-[24px] bg-[#FAFAFA] p-10 flex-col col-span-2 sm:flex hidden">
            <div className="">
              <p
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                  color: 'black',
                  lineHeight: 1.5
                }}
                className="md:px-6 sm:text-2xl text-lg"
              >
                We combine cutting-edge orthopedic innovations with compassionate care to treat spine disorders, fractures, arthritis,
                sports injuries, and joint pain. Using minimally invasive techniques
                and evidence-based treatments, our specialists provide personalised solutions for faster recovery and lasting mobility.
              </p>
            </div>

            <div className=" mt-[40px] md:w-[45%] ">
              <BookAnAppoitmentButton />
            </div>
          </div>
        </div>

        <Reveal className="w-full" width="100%">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] mt-[32px]">
            {
              ServicesAndExpertise.map((item, index) => (
                <Link href={`/area-of-speciality?data=${encodeURIComponent(JSON.stringify({ tags: item.link }))}`} className={`flex flex-col p-4 rounded-[24px] space-y-[24px] hover:cursor-pointer ${`sm:bg-[#FAFAFA] ${index % 2 === 1 ? 'bg-[#EFF5FF]' : 'bg-[#E5F6FF]'} `}`} key={item.title}
                  onClick={() => setSelectedService(item.title)}
                >
                  <div className=" flex flex-row items-center justify-between">
                    <div className=" rounded-full border border-[#EFF5FF] h-12 w-12 items-center justify-center flex">
                      <span
                        style={{
                          fontFamily: "var(--font-reem-kufi)",
                          fontWeight: 500,
                        }}
                        className={`text-lg self-center text-[#022968]`}
                      >0{index + 1}</span>
                    </div>

                    <div className={`sm:bg-[#EFF5FF] ${index % 2 === 1 ? 'bg-[#E5F6FF]' : 'bg-[#EFF5FF]'}   rounded-full border border-[#EFF5FF] py-3 px-6`}> <Image src={item.img} alt={item.title} className="h-[22px] w-[22px] " /> </div>

                  </div>

                  <div className=" flex flex-col space-y-[16px]">
                    <h3
                      style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 500,
                      }}
                      className={`text-3xl  'text-[#022968]`}
                    >{item.title}</h3>

                    <p
                      style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 500,
                      }}
                      className={`text-lg  text-[#022967]`}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <div className="w-full max-h-[240px] h-full relative" >
                    <Image src={item.anatomy} alt={item.title} height={240} width={240} layout="responsive" className="w-full sm:flex hidden max-h-[240px] h-full object-cover aspect-square rounded-[24px] lg:h-[240px]" />
                  </div>
                </Link>
              ))
            }
          </div>
        </Reveal>
      </section>

      {/* Expert Orthopedic Conditions We Treat */}
      <section className=" w-full max-w-[1440px] flex flex-col py-[50px] h-full px-2 md:px-[40px] items-center justify-center">
        <div className=" bg-[#EBF2FA] rounded-[40px] flex items-center justify-center w-full py-10 md:py-[60px] px-2 md:px-[60px] space-y-[60px] relative flex-col">

          <div className=" flex flex-col space-y-[16px]">
            <h2
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
                color: '#022968',
                lineHeight: 1.3
              }}
              className="text-5xl sm:text-6xl text-center"
            >
              Expert Orthopedic<br /> Conditions We Treat
            </h2>
            <p
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
                color: '#5B5F67',
                lineHeight: 1.3
              }}
              className="text-xl text-center lg:w-[60%] self-center"
            >
              We combine cutting-edge orthopedic innovations with compassionate care to treat spine disorders, fractures, arthritis, sports injuries, and joint pain.
            </p>
          </div>

          <div className=" flex xl:flex-row flex-col justify-between w-full relative">
            <div className=" xl:py-24  z-20 xl:max-w-[30%] xl:w-[20%] w-full">
              <h3
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                  color: '#022968',
                }}
                className=" text-2xl  xl:text-start text-center"
              >
                See Our Treatment Category
              </h3>

              <div className=" space-y-[20px] flex flex-col mt-[24px]">
                {
                  selectedOrthoCondition.treatment_categories.map((item, index) => (
                    <Link key={index} href={`/treatments/${item.slug}`} className=" px-[28px] py-[14px] hover:bg-[#e8f0ff] bg-white rounded-[62px] hover:cursor-pointer hover:scale-[1.01] text-center">
                      <p className=" font-[500] text-black text-lg">{item.name}</p>
                    </Link>
                  ))
                }
              </div>
            </div>

            <div className="relative z-10 lg:overflow-visible overflow-hidden h-fit">
              <div className="absolute left-1/2 top-90 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full h-[90%] sm:w-[730px] z-0 lg:max-h-[705px] xl:h-[705px] lg:h-[750px] pointer-events-none sm:flex hidden" />
              <div className="absolute left-1/2 top-90 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full w-[500px] bg-[#F5F8FD] h-[60%] lg:h-[480px] items-center justify-center z-0  pointer-events-none sm:flex hidden">
                <div className="bg-white h-[70%] w-[70%] rounded-full z-0" />
              </div>
              {/* Interactive dots and image */}
              <div className="relative z-10">
                <Image
                  src={'https://mountainspineortho.b-cdn.net/public/HumanModel.png'}
                  alt="Human Anatomy Model"
                  height={705}
                  width={1440}
                  layout="responsive"
                  className="w-full max-h-[750px] max-h-sm  xl:max-h-[705px] h-full object-contain xl:object-cover py-4"
                />
                {/* Dots - use exact positions from original */}
                {/* Neck */}
                <motion.div
                  className="rounded-[50px] absolute p-[10px] top-[18%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hover:cursor-pointer"
                  style={{ background: 'rgba(255, 255, 255, 0.40)', boxShadow: '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)', backdropFilter: 'blur(2.95px)' }}
                  animate={selectedOrthoCondition.area === 'Neck' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 1.5, repeat: selectedOrthoCondition.area === 'Neck' ? Infinity : 0, ease: "easeInOut" }}
                  onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[0])}
                >
                  <div className={`h-5 w-5 sm:h-7 sm:w-7 rounded-full ${selectedOrthoCondition.area === 'Neck' ? 'bg-[#5E96F0]' : 'bg-white'}`} />
                </motion.div>
                {/* Right Shoulder */}
                <motion.div
                  className="rounded-[50px] absolute p-[10px] top-[20%] sm:top-38 z-20 xl:left-[60%] left-[60%] md:left-[55%] hover:cursor-pointer"
                  style={{ background: "rgba(255, 255, 255, 0.40)", boxShadow: "0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)", backdropFilter: "blur(2.95px)" }}
                  animate={selectedOrthoCondition.area === 'Shoulder' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 1.5, repeat: selectedOrthoCondition.area === 'Shoulder' ? Infinity : 0, ease: "easeInOut" }}
                  onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[1])}
                >
                  <div className={`h-5 w-5 sm:h-7 sm:w-7 rounded-full ${selectedOrthoCondition.area === 'Shoulder' ? 'bg-[#5E96F0]' : 'bg-white'}`} />
                </motion.div>
                {/* Hand */}
                <motion.div
                  className="rounded-[50px] absolute p-[10px] top-[50%] z-20 transform -translate-x-1/3 xl:-translate-x-1/2 -translate-y-1/2 xl:left-14 lg:left-1/3 md:left-[calc(1/3.6*100%)] sm:left-[calc(1/3.5*100%)] left-[calc(1/6*100%)] hover:cursor-pointer"
                  style={{ background: 'rgba(255, 255, 255, 0.40)', boxShadow: '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)', backdropFilter: 'blur(2.95px)' }}
                  animate={selectedOrthoCondition.area === 'Hand' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 1.5, repeat: selectedOrthoCondition.area === 'Hand' ? Infinity : 0, ease: "easeInOut" }}
                  onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[2])}
                >
                  <div className={`h-5 w-5 sm:h-7 sm:w-7 rounded-full ${selectedOrthoCondition.area === 'Hand' ? 'bg-[#5E96F0]' : 'bg-white'}`} />
                </motion.div>
                {/* Spine */}
                <motion.div
                  className="rounded-[50px] absolute p-[10px] top-[30%] z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
                  style={{ background: 'rgba(255, 255, 255, 0.40)', boxShadow: '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)', backdropFilter: 'blur(2.95px)' }}
                  animate={selectedOrthoCondition.area === 'Spine' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 1.5, repeat: selectedOrthoCondition.area === 'Spine' ? Infinity : 0, ease: "easeInOut" }}
                  onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[3])}
                >
                  <div className={`h-5 w-5 sm:h-7 sm:w-7 rounded-full ${selectedOrthoCondition.area === 'Spine' ? 'bg-[#5E96F0]' : 'bg-white'}`} />
                </motion.div>
                {/* Lower Spine */}
                <motion.div
                  className="rounded-[50px] absolute p-[10px] top-[42%] z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
                  style={{ background: 'rgba(255, 255, 255, 0.40)', boxShadow: '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)', backdropFilter: 'blur(2.95px)' }}
                  animate={selectedOrthoCondition.area === 'Lower Spine' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 1.5, repeat: selectedOrthoCondition.area === 'Lower Spine' ? Infinity : 0, ease: "easeInOut" }}
                  onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[4])}
                >
                  <div className={`h-5 w-5 sm:h-7 sm:w-7 rounded-full ${selectedOrthoCondition.area === 'Lower Spine' ? 'bg-[#5E96F0]' : 'bg-white'}`} />
                </motion.div>
                {/* Knee */}
                <motion.div
                  className="rounded-[50px] absolute p-[10px] xl:top-110 top-[65%] sm:top-120 z-20 xl:right-[53%] right-[54%] hover:cursor-pointer"
                  style={{ background: 'rgba(255, 255, 255, 0.40)', boxShadow: '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)', backdropFilter: 'blur(2.95px)' }}
                  animate={selectedOrthoCondition.area === 'Knee' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 1.5, repeat: selectedOrthoCondition.area === 'Knee' ? Infinity : 0, ease: "easeInOut" }}
                  onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[5])}
                >
                  <div className={`h-5 w-5 sm:h-7 sm:w-7 rounded-full ${selectedOrthoCondition.area === 'Knee' ? 'bg-[#5E96F0]' : 'bg-white'}`} />
                </motion.div>
                {/* Foot */}
                <motion.div
                  className="rounded-[50px] absolute p-[10px] xl:top-150 top-[85%] xs:top-132 sm:top-160 z-20 left-[55%] hover:cursor-pointer"
                  style={{ background: 'rgba(255, 255, 255, 0.40)', boxShadow: '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)', backdropFilter: 'blur(2.95px)' }}
                  animate={selectedOrthoCondition.area === 'Foot' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 1.5, repeat: selectedOrthoCondition.area === 'Foot' ? Infinity : 0, ease: "easeInOut" }}
                  onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[6])}
                >
                  <div className={`h-5 w-5 sm:h-7 sm:w-7 rounded-full ${selectedOrthoCondition.area === 'Foot' ? 'bg-[#5E96F0]' : 'bg-white'}`} />
                </motion.div>
              </div>
            </div>

            <div className=" flex flex-col space-y-[10px] xl:w-[20%] w-full  xl:pt-50 z-20">
              <TextAnimate
                animation="blurInUp"
                by="character"
                once
                as="h3"
                style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 500,
                  color: '#022968',
                }}
                className=" xl:text-2xl lg:text-3xl">
                {selectedOrthoCondition.area_procedures.title}
              </TextAnimate>
              <p>
                {selectedOrthoCondition.area_procedures.desc}
              </p>
              <Link
                className=" mt-[12px] max-h-[56px] h-full  rounded-[62px] space-x-[10px] relative flex p-8 bg-[#0094E0] text-white text-[14px] font-[500] w-fit xl:w-full justify-center items-center hover:cursor-pointer"
                href={`/treatments?data=${encodeURIComponent(JSON.stringify({ key: selectedOrthoCondition.area }))}`}
              >
                <TextAnimate
                  animation="blurInUp"
                  by="word"
                  once
                  as="span"
                  style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 500,
                  }}
                >{selectedOrthoCondition.view_all_treatments.text}</TextAnimate>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                  <path d="M12.9985 1.46524C12.752 1.23664 12.4267 1.10984 12.1498 1.03007C11.8544 0.944969 11.5165 0.886948 11.1686 0.84632C10.4713 0.764898 9.65365 0.744548 8.88838 0.751159C8.11878 0.757808 7.38161 0.791999 6.83826 0.824347C6.56612 0.840548 6.34152 0.856353 6.18445 0.868151C6.1059 0.874051 6.04417 0.878953 6.00177 0.882408L5.95295 0.88645L5.93999 0.887552L5.93495 0.887986C5.5223 0.923934 5.21693 1.2876 5.25287 1.70025C5.28882 2.11288 5.65303 2.4182 6.06565 2.38228L6.06817 2.38207L6.07907 2.38114L6.12358 2.37745C6.16303 2.37424 6.2216 2.36959 6.2968 2.36394C6.44725 2.35264 6.66405 2.33737 6.92741 2.3217C7.45506 2.29028 8.16529 2.25746 8.90134 2.2511C9.64171 2.24471 10.3879 2.26536 10.9946 2.3362C11.0287 2.34017 11.062 2.34428 11.0947 2.34852L0.46967 12.9736C0.176777 13.2665 0.176777 13.7413 0.46967 14.0342C0.762563 14.3271 1.23744 14.3271 1.53033 14.0342L12.1578 3.40672C12.1596 3.42107 12.1614 3.43557 12.1631 3.45021C12.2334 4.05004 12.2544 4.80047 12.2486 5.55046C12.2429 6.29576 12.211 7.01955 12.1803 7.55855C12.1651 7.82757 12.1501 8.04947 12.1391 8.20364C12.1336 8.2807 12.129 8.34078 12.1258 8.3813L12.1222 8.42705L12.121 8.44154C12.0868 8.85431 12.3936 9.21673 12.8063 9.25104C13.2191 9.28536 13.5816 8.97805 13.6159 8.56526L13.6163 8.56067L13.6174 8.54746L13.6213 8.49761C13.6247 7.95428 13.6295 7.89119 13.6352 7.81094C13.6467 7.65046 13.6622 7.4211 13.6779 7.14367C13.7094 6.58976 13.7426 5.83985 13.7485 5.06198C13.7545 4.2888 13.7338 3.46659 13.6529 2.77563C13.6125 2.43136 13.5547 2.09687 13.4689 1.80777C13.3907 1.54431 13.258 1.20593 12.9985 0.965242Z" fill="#E5F6FF" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mountain Spine & Orthopedics */}
      <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-2 md:px-[40px] items-center justify-center space-y-[60px]">
        <Reveal className="w-full" width="100%">
          <div className="flex xl:flex-row space-x-[60px] flex-col xl:space-y-0 space-y-8 w-full">
            <h2 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, color: '#111315' }} className="text-6xl w-[100%]">
              Why Choose<br /> Mountain Spine & Orthopedics
            </h2>
            <div>
              <p style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 400, color: '#5B5F67' }} className="text-lg ">
                Trust Mountain Spine & Orthopedics for expert care, compassionate service, and results that make a difference. Your mobility and well-being are our top priority!
              </p>
              <div className="mt-[40px] xl:w-[50%] w-full md:w-fit"><BookAnAppoitmentButton /></div>
            </div>
          </div>
        </Reveal>
        <div className="flex xl:flex-row flex-col w-full gap-[32px] xl:items-stretch">
          <div className="xl:w-[50%] w-full rounded-[20px] overflow-hidden"><Image src={HomeWhyAO} className="w-full h-full md:aspect-video aspect-square object-cover" alt="Doctor Diagnosing Patient " /></div>
          <div className="xl:w-[50%] w-full flex flex-col space-y-[32px] ">
            <Reveal className="w-full" width="100%">
              <div className="flex flex-col w-full space-y-[16px]">
                <h3 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, color: '#111315' }} className="text-4xl">Our Specialty</h3>
                <p style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, color: '#5B5F67' }} className="text-lg">
                  At Mountain Spine & Orthopedics, we are dedicated to providing exceptional care with cutting-edge treatments and a patient-first approach. Here's why we stand out:
                </p>
              </div>
            </Reveal>
            <Reveal className="w-full" width="100%">
              <div className="grid grid-cols-1 md:grid-cols-2 rounded-[20px] overflow-hidden w-full">
                {OurSpecialtyItems.map((item, index) => (
                  <div key={index} className={`flex flex-col space-y-[16px] ${index == 1 || index == 2 ? 'bg-[#EFF5FF]' : 'bg-[#E5F6FF]'} p-6`}>
                    <div className="rounded-full bg-white p-1 items-center justify-center flex w-[20%] px-[12px] py-[15px] "><item.icon /></div>
                    <h4 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, color: '#022968' }} className="text-xl">{item.title}</h4>
                    <p style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: '#5B5F67' }} className="text-md">{item.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Statistics/Testimonials Bar */}
      <section className="bg-[#022968] w-full py-[50px]">
        <div className="w-full max-w-[1440px] flex flex-col space-y-10 md:space-y-0 md:flex-row mx-auto px-[40px] items-center justify-evenly overflow-hidden">
          {Testimonials.map((item) => (
            <div className="flex flex-col space-y-[12px] p-[18px] max-h-[190px] lg:h-[190px] items-center justify-center" key={item.desc}>
              <strong style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 400 }} className="text-white lg:text-6xl md:text-4xl text-6xl">
                <NumberTicker value={item.value} className="text-white" />{item.stat}
              </strong>
              <p style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 400 }} className="text-white text-xl md:text-lg text-center lg:text-start">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Our Patients Say */}
      <RatingsAndReviews />

      {/* Meet Our Experts */}
      <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-[40px]">
        <div className="flex md:flex-row flex-col">
          <div className="flex flex-col space-y-[24px] md:w-[50%] w-full">
            <h2 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-black text-5xl text-left w-full">Meet Our Experts</h2>
            <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }} className="text-[#54535C] md:w-[50%] w-full">Highly skilled and compassionate professionals ready to care for you</p>
          </div>
          <div className="md:w-[50%] flex items-center md:justify-end w-full md:mt-0 mt-4">
            <Link href={'/about/meetourdoctors'} className="bg-white border hover:cursor-pointer border-[#022968] px-[20px] py-[10px] space-x-[10px] flex flex-row items-center justify-center rounded-[62px]">
              <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }} className="text-[#022968]">View all</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none"><path d="M12.3982 0.268483C12.0402 -0.0894963 11.4598 -0.089494 11.1018 0.268488C10.7438 0.62647 10.7438 1.20687 11.1018 1.56485L14.1203 4.58333H1.66667C1.16041 4.58333 0.75 4.99374 0.75 5.5C0.75 6.00626 1.16041 6.41667 1.66667 6.41667H14.1203L11.1018 9.43516C10.7439 9.79314 10.7439 10.3735 11.1019 10.7315C11.4598 11.0895 12.0402 11.0895 12.3982 10.7315L16.9766 6.15303C16.9935 6.13637 17.0098 6.11905 17.0254 6.10112C17.0873 6.02997 17.1365 5.95154 17.1728 5.86885C17.2221 5.75677 17.2496 5.63294 17.25 5.50273L17.25 5.5C17.25 5.49717 17.25 5.49434 17.25 5.49152C17.2489 5.37622 17.2266 5.26602 17.1867 5.16463C17.142 5.05068 17.0736 4.94387 16.9815 4.85178L12.3982 0.268483Z" fill="#022968" /></svg>
            </Link>
          </div>
        </div>
        <div className="mt-[60px] grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-[32px]">
          {Doctors.slice(0, 3).map((item) => (<DoctorCard key={item.name} doctor={item} />))}
        </div>
      </section>

      {/* Complimentary Perks */}
      <section className="w-full max-w-[1440px] flex xl:flex-row flex-col py-[50px] h-full px-2 md:px-[40px] space-x-[32px]">
        <div className="rounded-[24px] bg-[#FAFAFA] p-[24px] flex flex-col xl:w-[50%] w-full h-full">
          <div className="flex flex-col space-y-[24px]">
            <h2 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, color: 'black' }} className="text-5xl ">Top Florida Clinic Free Second Opinion & MRI Reading</h2>
            <p style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: '#5B5F67', lineHeight: 1.5 }} className="">
              <span className="text-[#0094E0]">Free Second Opinion.</span>Still suffering from pain-despite multiple treatments? At Mountain Spine & Orthopedics we <span className="text-[#0094E0]">offer a free second opinion</span> and cutting-edge, minimally invasive procedures to relieve pain, restore mobility, and enhance your quality of life.
            </p>
            <div className="flex md:flex-row flex-col w-full md:space-x-[11px] md:space-y-0 space-y-4 justify-center items-center">
              <div className="md:w-[45%] w-full "><BookAnAppoitmentButton /></div>
              <Link href={'/about'} className="bg-white border hover:cursor-pointer border-[#022968] px-[32px] py-[16px] space-x-[10px] max-h-[56px] flex flex-row items-center justify-center rounded-[62px] w-full md:w-[45%] group">
                <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }} className="text-[#022968]">Learn More</span>
                <div className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none"><path d="M13.4985 0.965242C13.252 0.736636 12.9267 0.609835 12.6498 0.530065C12.3544 0.444969 12.0165 0.386948 11.6686 0.34632C10.9713 0.264898 10.1536 0.244548 9.38838 0.251159C8.61878 0.257808 7.88161 0.291999 7.33826 0.324347C7.06612 0.340548 6.84152 0.356353 6.68445 0.368151C6.6059 0.374051 6.54417 0.378953 6.50177 0.382408L6.45295 0.38645L6.43999 0.387552L6.43495 0.387986C6.0223 0.423934 5.71693 0.787596 5.75287 1.20025C5.78882 1.61288 6.15303 1.9182 6.56565 1.88228L6.56817 1.88207L6.57907 1.88114L6.62358 1.87745C6.66303 1.87424 6.7216 1.86959 6.7968 1.86394C6.94725 1.85264 7.16405 1.83737 7.42741 1.8217C7.95506 1.79028 8.66529 1.75746 9.40134 1.7511C10.1417 1.74471 10.8879 1.76536 11.4946 1.8362C11.5287 1.84017 11.562 1.84428 11.5947 1.84852L0.96967 12.4736C0.676777 12.7665 0.676777 13.2413 0.96967 13.5342C1.26256 13.8271 1.73744 13.8271 2.03033 13.5342L12.6578 2.90672C12.6596 2.92107 12.6614 2.93557 12.6631 2.95021C12.7334 3.55004 12.7544 4.30047 12.7486 5.05046C12.7429 5.79576 12.711 6.51955 12.6803 7.05855C12.6651 7.32757 12.6501 7.54947 12.6391 7.70364C12.6336 7.7807 12.629 7.84078 12.6258 7.8813L12.6222 7.92705L12.621 7.94154C12.5868 8.35431 12.8936 8.71673 13.3063 8.75104C13.7191 8.78536 14.0816 8.47805 14.1159 8.06526L14.1163 8.06067L14.1174 8.04746L14.1213 7.99761C14.1247 7.95428 14.1295 7.89119 14.1352 7.81094C14.1467 7.65046 14.1622 7.4211 14.1779 7.14367C14.2094 6.58976 14.2426 5.83985 14.2485 5.06198C14.2545 4.2888 14.2338 3.46659 14.1529 2.77563C14.1125 2.43136 14.0547 2.09687 13.9689 1.80777C13.8907 1.54431 13.758 1.20593 13.4985 0.965242Z" fill="#022968" /></svg>
                </div>
              </Link>
            </div>
            <div className=""><Image src={'https://mountainspineortho.b-cdn.net/public/HomeWhyAO-min.jpeg'} layout="responsive" height={1000} width={1440} alt="Doctor Treating a Patient" className="w-full xl:h-[250px] xl:max-h-[250px] object-cover object-center xl:object-top-left rounded-[12px]" /></div>
          </div>
        </div>
        <Reveal className="xl:w-[50%] w-full mt-0 " width="100%">
          <div className="flex flex-col space-y-[38px] w-full">
            <div className="bg-[#EFF5FF] w-full rounded-[24px] p-[24px] space-y-[24px] h-[50%]">
              <div className="flex flex-col space-y-[8px] ">
                <h3 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, color: 'black', lineHeight: 1.2 }} className="text-2xl ">Complimentary MRI Reading</h3>
                <p style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: '#5B5F67' }} className="lg">Get a free MRI reading from our experts to tailor your treatment plan.</p>
              </div>
              <div className="grid grid-cols-3 gap-x-[16px]">
                {[MRI1, MRI2, MRI3].map((item, index) => (
                  <motion.div whileHover={{ translateY: -10 }} key={index}>
                    <Image src={item} className="w-full h-full aspect-square rounded-[12px]" alt="Image of an MRI Bone Scan" />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-[#E5F6FF] w-full rounded-[24px] p-4 md:p-[24px] space-y-[24px] h-[50%] items-center justify-center">
              <div className="flex flex-col space-y-[8px] items-center justify-center md:mt-10">
                <h3 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, color: 'black', lineHeight: 1.2 }} className="md:text-2xl text-4xl text-center">Complimentary Amenities</h3>
                <p style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: '#5B5F67' }} className="w-[65%] text-center">Enjoy Complimentary Amenities: Free Car Service, Refreshments & WiFi</p>
              </div>
              <div className="flex flex-row gap-x-[16px] items-center justify-center">
                {Amenities.map((item, index) => (
                  <motion.div whileHover={{ translateY: -5, scale: 1.02 }} className="flex flex-col space-y-[12px] max-w-[88px] aspect-square p-[8px] items-center justify-center" key={item.title}>
                    <div className="bg-white rounded-[12px] aspect-square flex items-center justify-center p-[8px]">
                      <item.icon />
                    </div>
                    <div>
                      <span style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-sm text-[#022968]">{item.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* From Pain to Progress */}
      <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-2 md:px-[40px] ">
        <div
          style={{
            background: 'linear-gradient(246deg, #FAFBFC 13.17%, #E0F5FF 52.92%, #E1ECFE 99.53%)'
          }}
          className=" w-full p-[40px] rounded-[24px] items-center justify-center flex flex-col space-y-[0px]"
        >
          <div className="w-full flex items-center justify-center flex-col">
            <div className=" bg-white px-[14px] py-[7px] flex items-center justify-center max-w-[150px] rounded-[62px] self-center">
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

      {/* ClinicsMap */}
      <ClinicsMap />

      {/* ContactUsSection */}
      <ContactUsSection />
    </main>
  );
}
