"use client"
import React from 'react';
import Image from 'next/image';
import ConditionDetialsLanding from '@/public/ConditionDetails.jpeg';
import DoctorCard from '@/components/DoctorCard';
import { DoctorContactForm } from '@/components/DoctorContactForm';
import { FootPainDropdown } from '@/components/foot-pain-dropdown';
import { TextAnimate } from '@/components/magicui/text-animate';

export function FootPainAreaClient({ condition_details, randomDoctors }: { condition_details: any, randomDoctors: any[] }) {
  if (!condition_details) {
    return null;
  }

  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
      {/* Landing */}
      <section className="w-full h-full flex flex-col relative overflow-hidden" >
        <div
          style={{
            background: 'white',
            filter: 'blur(30px)'
          }}
          className="w-full h-[120px] absolute top-0 z-[1]"
        />
        <Image src={ConditionDetialsLanding} fill className="h-full absolute top-0 object-cover object-top sm:pt-16 self-end w-full xl:pl-[100px]" alt="Doctor Diagnosing a Old Patient" />

        <div className="z-[1] flex flex-col w-full h-full  text-left relative md:pt-20 lg:pt-40">
          <div className="lg:w-[60%] w-full h-full absolute left-0 top-0"
            style={{
              background: 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
            }}
          />

          <div className=' px-6 xl:px-[80px] z-[2]'>
            <div className=' mt-[220px] flex flex-row sm:space-x-[4px] rounded-[62px] w-fit items-center justify-center px-[20px] py-[10px]'
              style={{
                background: 'rgba(255, 255, 255, 0.50)'
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 400,
                }}
                className="sm:text-md text-xs text-[#111315]"
              >
                Area of Specialty
              </span>

              <span
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 400,
                }}
                className="sm:text-md text-xs text-[#111315]"
              >
                /
              </span>

              <span
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 400,
                }}
                className="sm:text-md text-xs text-[#2358AC]"
              >
                Foot & Ankle Pain
              </span>

              <span
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 400,
                }}
                className="sm:text-md text-xs text-[#111315]"
              >
                /
              </span>

              <span
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 400,
                }}
                className="sm:text-md text-xs text-[#5093FF]"
              >
                {condition_details.title}
              </span>
            </div>
          </div>
          <div className="px-6 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[12px] w-[85%] lg:w-[62%] xl:w-[55%]">
            <TextAnimate animation="blurInUp" by="word" once
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 400,
              }}
              className="text-[#022968] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {condition_details.title}
            </TextAnimate>
          </div>

          <div className="z-[2] px-6 xl:px-[80px] mt-[24px] w-full md:w-[70%] lg:w-[55%] pb-8">
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-white text-shadow-sm sm:text-lg text-sm"
            >
              {condition_details.body}
            </p>
          </div>
        </div>
      </section>

      <section className=' max-w-[1440px] w-full h-full flex flex-col lg:flex-row relative overflow-hidden px-6 xl:px-[80px] py-[50px] space-x-[60px]'>
        <div className='lg:w-[30%] w-full lg:order-1 order-2 bg-white flex flex-col space-y-[60px]'>
          <DoctorContactForm backgroundcolor={'#FAFAFA'} />
          <div className=' space-y-[30px] lg:flex lg:flex-col hidden'>
            <FootPainDropdown CurrentCondition={condition_details.title} />
            <Image src={condition_details.side_img!} width={300} height={300} layout="responsive" className="w-full rounded-[20px] max-h-[500px] aspect-1/2 object-center object-cover" alt='' />
          </div>
        </div>

        <div className=' lg:w-[70%] lg:order-2 order-1  flex flex-col space-y-[60px] rounded-[24px] '>
          <section className='bg-[#FAFAFA] space-y-[40px] flex flex-col w-full  p-6 lg:p-[40px] rounded-[24px]'>
            {/* Detail */}
            <div className=' flex flex-col space-y-[16px] '>
              <h2
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-[#111315] sm:text-5xl text-2xl'
              >
                About {condition_details.title}
              </h2>
              <div
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                }}
                className='text-[#5B5F67] sm:text-xl text-sm'
              >
                {condition_details?.detail}
              </div>
            </div>

            {
              condition_details.forum?.map((item: any, index: number) => (
                <React.Fragment key={index}>
                  {item.post}
                </React.Fragment>
              ))
            }

          </section>

          <section className='bg-white space-y-[40px] '>
            <h2
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 400,
              }}
              className="text-[#111315] text-5xl"
            >
              Meet our Doctors
            </h2>
            <div className='grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-2 gap-x-[32px] '>
              {
                randomDoctors.map((item) => (
                  <DoctorCard doctor={item} key={item.name} />
                ))
              }
            </div>
          </section>
          <div>
          </div>
        </div>
      </section>
    </main>
  );
} 