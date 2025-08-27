'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { OrthoConditionsWeTreat } from '@/components/data/homepage-data';
import HumanModel from '@/public/HumanModel.png';

export default function HomeInteractiveAnatomy() {
  const [selectedOrthoCondition, setSelectedOrthoCondition] = useState(OrthoConditionsWeTreat[0]);

  return (
    <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-2 md:px-[40px] items-center justify-center">
      <div className="bg-[#FAFAFA] rounded-[40px] flex items-center justify-center w-full py-10 md:py-[60px] px-2 md:px-[60px] space-y-[60px] relative flex-col">
        <div className="flex flex-col space-y-[16px]">
          <h2
            style={{
              fontFamily: "var(--font-public-sans)",
              fontWeight: 500, color: '#252932',
              lineHeight: 1.3
            }}
            className="text-5xl sm:text-6xl text-center"
          >
            Expert Orthopedic<br /> Conditions We Treat
          </h2>
          <p
            style={{
              fontFamily: "var(--font-public-sans)",
              fontWeight: 500, color: '#424959',
              lineHeight: 1.3
            }}
            className="text-xl text-center lg:w-[60%] self-center"
          >
            We combine cutting-edge orthopedic innovations with compassionate care to treat spine disorders, fractures, arthritis, sports injuries, and joint pain.
          </p>
        </div>

        <div className="flex xl:flex-row flex-col justify-between w-full relative">
          <div className="xl:py-24 z-20 xl:max-w-[30%] xl:w-[20%] w-full">
            <h3
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 500, color: '#252932',
              }}
              className="text-2xl xl:text-start text-center"
            >
              See Our Treatment Category
            </h3>

            <div className="space-y-[20px] flex flex-col mt-[24px]">
              {selectedOrthoCondition.treatment_categories.map((item, index) => (
                <Link
                  key={index}
                  href={`/treatments/${item.slug}`}
                  className="px-[28px] py-[14px] hover:bg-[#e8f0ff] bg-white rounded-[62px] hover:cursor-pointer hover:scale-[1.01] text-center"
                >
                  <p className="font-[500] text-black text-lg">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative z-10 lg:overflow-visible overflow-hidden h-fit">
            <div className="absolute left-1/2 top-90 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full h-[90%] sm:w-[730px] z-0 lg:max-h-[705px] xl:h-[705px] lg:h-[750px] pointer-events-none sm:flex hidden" />
            <div className="absolute left-1/2 top-90 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full w-[500px] bg-[#F1EFFA] h-[60%] lg:h-[480px] items-center justify-center z-0 pointer-events-none sm:flex hidden">
              <div className="bg-white h-[70%] w-[70%] rounded-full z-0" />
            </div>
            {/* Interactive dots and image */}
            <div className="relative z-10">
              <Image
                // src={'https://mountainspineortho.b-cdn.net/public/HumanModel.png'}
                src={HumanModel}
                alt="Human Anatomy Model"
                height={750}
                width={1440}
                layout="responsive"
                className="w-full max-h-[800px] max-h-sm xl:max-h-[800px] h-full object-contain xl:object-cover py-4"
              />
              {/* Dots - use exact positions from original */}
              {/* Neck */}
              <motion.div
                className="rounded-[50px] absolute p-[4px] top-[22%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hover:cursor-pointer"
                style={{ background: 'rgba(255, 255, 255, 0.40)', boxShadow: '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)', backdropFilter: 'blur(2.95px)' }}
                animate={selectedOrthoCondition.area === 'Neck' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 1.5, repeat: selectedOrthoCondition.area === 'Neck' ? Infinity : 0, ease: "easeInOut" }}
                onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[0])}
              >
                <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full ${selectedOrthoCondition.area === 'Neck' ? 'bg-[#0A50EC]' : 'bg-white'}`} />
              </motion.div>
              {/* Right Shoulder */}
              <motion.div
                className="rounded-[50px] absolute p-[4px] top-[24%] sm:top-48 z-20 xl:left-[65%] left-[63%] md:left-[55%] hover:cursor-pointer"
                style={{ background: "rgba(255, 255, 255, 0.40)", boxShadow: "0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)", backdropFilter: "blur(2.95px)" }}
                animate={selectedOrthoCondition.area === 'Shoulder' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 1.5, repeat: selectedOrthoCondition.area === 'Shoulder' ? Infinity : 0, ease: "easeInOut" }}
                onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[1])}
              >
                <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full ${selectedOrthoCondition.area === 'Shoulder' ? 'bg-[#0A50EC]' : 'bg-white'}`} />
              </motion.div>
              {/* Hand */}
              <motion.div
                className="rounded-[50px] absolute p-[4px] top-[50%] z-20 transform -translate-x-1/3 xl:-translate-x-1/2 -translate-y-1/2 xl:left-10 lg:left-1/3 md:left-[calc(1/3.6*100%)] sm:left-[calc(1/3.5*100%)] left-[calc(1/6*100%)] hover:cursor-pointer"
                style={{ background: 'rgba(255, 255, 255, 0.40)', boxShadow: '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)', backdropFilter: 'blur(2.95px)' }}
                animate={selectedOrthoCondition.area === 'Hand' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 1.5, repeat: selectedOrthoCondition.area === 'Hand' ? Infinity : 0, ease: "easeInOut" }}
                onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[2])}
              >
                <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full ${selectedOrthoCondition.area === 'Hand' ? 'bg-[#0A50EC]' : 'bg-white'}`} />
              </motion.div>
              {/* Spine */}
              <motion.div
                className="rounded-[50px] absolute p-[4px] top-[30%] z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
                style={{ background: 'rgba(255, 255, 255, 0.40)', boxShadow: '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)', backdropFilter: 'blur(2.95px)' }}
                animate={selectedOrthoCondition.area === 'Spine' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 1.5, repeat: selectedOrthoCondition.area === 'Spine' ? Infinity : 0, ease: "easeInOut" }}
                onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[3])}
              >
                <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full ${selectedOrthoCondition.area === 'Spine' ? 'bg-[#0A50EC]' : 'bg-white'}`} />
              </motion.div>
              {/* Lower Spine */}
              <motion.div
                className="rounded-[50px] absolute p-[4px] top-[42%] z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
                style={{ background: 'rgba(255, 255, 255, 0.40)', boxShadow: '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)', backdropFilter: 'blur(2.95px)' }}
                animate={selectedOrthoCondition.area === 'Lower Spine' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 1.5, repeat: selectedOrthoCondition.area === 'Lower Spine' ? Infinity : 0, ease: "easeInOut" }}
                onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[4])}
              >
                <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full ${selectedOrthoCondition.area === 'Lower Spine' ? 'bg-[#0A50EC]' : 'bg-white'}`} />
              </motion.div>
              {/* Knee */}
              <motion.div
                className="rounded-[50px] absolute p-[4px] xl:top-124 top-[65%] sm:top-120 z-20 xl:right-[53%] right-[54%] hover:cursor-pointer"
                style={{ background: 'rgba(255, 255, 255, 0.40)', boxShadow: '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)', backdropFilter: 'blur(2.95px)' }}
                animate={selectedOrthoCondition.area === 'Knee' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 1.5, repeat: selectedOrthoCondition.area === 'Knee' ? Infinity : 0, ease: "easeInOut" }}
                onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[5])}
              >
                <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full ${selectedOrthoCondition.area === 'Knee' ? 'bg-[#0A50EC]' : 'bg-white'}`} />
              </motion.div>
              {/* Foot */}
              <motion.div
                className="rounded-[50px] absolute p-[4px] xl:top-170 top-[85%] xs:top-132 sm:top-160 z-20 left-[57%] hover:cursor-pointer"
                style={{ background: 'rgba(255, 255, 255, 0.40)', boxShadow: '0px 4px 13.9px 0px rgba(0, 0, 0, 0.15)', backdropFilter: 'blur(2.95px)' }}
                animate={selectedOrthoCondition.area === 'Foot' ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 1.5, repeat: selectedOrthoCondition.area === 'Foot' ? Infinity : 0, ease: "easeInOut" }}
                onClick={() => setSelectedOrthoCondition(OrthoConditionsWeTreat[6])}
              >
                <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full ${selectedOrthoCondition.area === 'Foot' ? 'bg-[#0A50EC]' : 'bg-white'}`} />
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col space-y-[10px] xl:w-[20%] w-full xl:pt-50 z-20">
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              as="h3"
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 500, color: '#0A50EC',
              }}
              className="xl:text-2xl lg:text-3xl"
            >
              {selectedOrthoCondition.area_procedures.title}
            </TextAnimate>
            <p>
              {selectedOrthoCondition.area_procedures.desc}
            </p>
            <Link
              className="mt-[12px] max-h-[56px] h-full rounded-[62px] space-x-[10px] relative flex p-2 bg-[#0A50EC] text-white text-[14px] font-[500] w-fit xl:w-full justify-center items-center hover:cursor-pointer"
              href={`/treatments?data=${encodeURIComponent(JSON.stringify({ key: selectedOrthoCondition.area }))}`}
            >
              <TextAnimate
                animation="blurInUp"
                by="word"
                once
                as="span"
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 500,
                }}
                className='text-xs'
              >
                {selectedOrthoCondition.view_all_treatments.text}
              </TextAnimate>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 14 15" fill="none">
                <path d="M12.9985 1.46524C12.752 1.23664 12.4267 1.10984 12.1498 1.03007C11.8544 0.944969 11.5165 0.886948 11.1686 0.84632C10.4713 0.764898 9.65365 0.744548 8.88838 0.751159C8.11878 0.757808 7.38161 0.791999 6.83826 0.824347C6.56612 0.840548 6.34152 0.856353 6.18445 0.868151C6.1059 0.874051 6.04417 0.878953 6.00177 0.882408L5.95295 0.88645L5.93999 0.887552L5.93495 0.887986C5.5223 0.923934 5.21693 1.2876 5.25287 1.70025C5.28882 2.11288 5.65303 2.4182 6.06565 2.38228L6.06817 2.38207L6.07907 2.38114L6.12358 2.37745C6.16303 2.37424 6.2216 2.36959 6.2968 2.36394C6.44725 2.35264 6.66405 2.33737 6.92741 2.3217C7.45506 2.29028 8.16529 2.25746 8.90134 2.2511C9.64171 2.24471 10.3879 2.26536 10.9946 2.3362C11.0287 2.34017 11.062 2.34428 11.0947 2.34852L0.46967 12.9736C0.176777 13.2665 0.176777 13.7413 0.46967 14.0342C0.762563 14.3271 1.23744 14.3271 1.53033 14.0342L12.1578 3.40672C12.1596 3.42107 12.1614 3.43557 12.1631 3.45021C12.2334 4.05004 12.2544 4.80047 12.2486 5.55046C12.2429 6.29576 12.211 7.01955 12.1803 7.55855C12.1651 7.82757 12.1501 8.04947 12.1391 8.20364C12.1336 8.2807 12.129 8.34078 12.1258 8.3813L12.1222 8.42705L12.121 8.44154C12.0868 8.85431 12.3936 9.21673 12.8063 9.25104C13.2191 9.28536 13.5816 8.97805 13.6159 8.56526L13.6163 8.56067L13.6174 8.54746L13.6213 8.49761C13.6247 7.95428 13.6295 7.89119 13.6352 7.81094C13.6467 7.65046 13.6622 7.4211 13.6779 7.14367C13.7094 6.58976 13.7426 5.83985 13.7485 5.06198C13.7545 4.2888 13.7338 3.46659 13.6529 2.77563C13.6125 2.43136 13.5547 2.09687 13.4689 1.80777C13.3907 1.54431 13.258 1.20593 12.9985 0.965242Z" fill="#FAFAFA" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 
