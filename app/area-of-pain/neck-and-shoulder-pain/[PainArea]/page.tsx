'use client'
import React from 'react'
import Image from 'next/image'
import ConditionDetialsLanding from '@/public/ConditionDetails.jpeg'
import { ConditionInfoProp } from '@/components/ConditionCard'
import {Conditions} from '@/components/data/conditions'
import { ConsultationForm } from '@/components/ContactForm'
import { Input } from '@/components/ui/input'
import { Doctors } from '@/components/data/doctors'
import DoctorCard from '@/components/DoctorCard'
import { MiniContactForm } from '@/components/MiniContactForm'
import { DoctorContactForm } from '@/components/DoctorContactForm'
import Link from 'next/link'
import { BackPainDropdown } from '@/components/back-pain-dropdown'
import { NeckAndShoulderDropDown } from '@/components/neck-and-shoulder-dropdown'
import { TextAnimate } from '@/components/magicui/text-animate'
import { PainAreaTreatments } from '@/components/data/painareatreatments'
export default function PainArea({
    params,
  }: {
    params: Promise<{ PainArea : string }>
  }) {
// Unwrap the promise using React.use (the experimental hook)
  const resolvedParams = React.use(params)
  const conditionSlug = resolvedParams.PainArea
  let condition_details 
  if ( conditionSlug == 'neckandshoulderpaintreatments' ) {
      condition_details = PainAreaTreatments.find( x => x.slug === conditionSlug)
    }else{
      condition_details = Conditions.find( x => x.slug === conditionSlug)
    }
  if (!condition_details) {
    return (
      <main className="w-full h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">Condition not found</h1>
      </main>
    )
  }
    function shuffleArray(array) {
          const newArray = [...array]; // Clone the array
          for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1)); // Pick a random index from 0 to i
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements at indices i and j
          }
          return newArray;
      }
      
      // Shuffle the Doctors array and then take the first two doctors
      const randomDoctors = shuffleArray(Doctors).slice(0, 2); 
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
        {/* Landing */}
        <section className="w-full h-full flex flex-col relative overflow-hidden" >
        <div 
        style={{
        background: 'white',
        filter: 'blur(30px)'
        }}
        className="w-full h-[120px] absolute top-0 z-[1] border border-red-500"
        />
        <Image src={ConditionDetialsLanding} width={300} height={300} layout="responsive" className=" xl:max-h-[945px] h-full absolute top-0 object-cover object-top pt-16 self-end w-full xl:pl-[100px]" alt="Doctor Diagnosing a Old Patient"/>

        <div className="z-[1] flex flex-col w-full h-full  text-left relative md:pt-20 lg:pt-40">
            <div className="lg:w-[60%] w-full h-full absolute left-0 top-0 "
            style={{
            background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
            }}
            />

        <div className=' px-6 xl:px-[80px] z-[2]'>
            <div className=' mt-[220px] flex flex-row space-x-[4px] rounded-[62px] w-fit items-center justify-center px-[20px] py-[10px]'
            style={{
                background : 'rgba(255, 255, 255, 0.50)'
            }}
            >
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="sm:text-md sm:flex hidden text-xs text-[#111315]"
                >
                    Area of Pain 
                </h1>
    
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="sm:text-md text-xs sm:flex hidden text-[#111315]"
                >
                    /
                </h1>
    
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="sm:text-md text-xs text-[#2358AC]"
                >
                    Neck & Shoulder Pain
                </h1>

                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="sm:text-md text-xs text-[#111315]"
                >
                    /
                </h1>
    
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="sm:text-md text-xs text-[#5093FF]"
                >
                    {condition_details.title}
                </h1>

            </div>
        </div>
        <div className="px-6 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[12px] w-[85%] lg:w-[62%] xl:w-[55%]">
            <TextAnimate animation="blurInUp" by="word" once
            style={{
                fontFamily: "var(--font-reem-kufi)",
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

        <section className=' max-w-[1440px]  w-full h-full flex flex-col lg:flex-row relative overflow-hidden px-6 xl:px-[80px] py-[50px] space-x-[60px]'>
            <div className='lg:w-[30%] w-full bg-white flex flex-col space-y-[60px]'>
                <DoctorContactForm backgroundcolor={'#FAFAFA'}/>
                <div className=' space-y-[30px] lg:flex lg:flex-col hidden'>
                    <NeckAndShoulderDropDown CurrentCondition={condition_details.title}/>
                    <Image src={condition_details.side_img!} width={300} height={300} layout="responsive" className="w-full rounded-[20px] max-h-[500px] aspect-1/2 object-center object-cover" alt='' />
                </div>
            </div>


            <div className=' lg:w-[70%] w-full  flex flex-col space-y-[60px] rounded-[24px] '>
                <section className='bg-[#FAFAFA] space-y-[40px] flex flex-col w-full p-6 md:p-[40px] rounded-[24px]'>
                    {/* Detail */}
                    <div className=' flex flex-col space-y-[16px] '>
                        <h1
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] sm:text-5xl text-3xl'
                        >
                        Details
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {condition_details.body}
                        </h1>
                    </div>
                    
                    {
                        condition_details.forum?.map((item) => (
                            <>
                                {item.post}
                            </>
                        ))
                    }
                    
                </section>

                <section className='bg-white space-y-[40px] '>
                    <h1
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 400,
                    }}
                    className="text-[#111315] text-5xl"
                    >
                        Meet our Doctors
                    </h1>
                    <div className='grid grid-cols-2 gap-x-[32px] '>
                        {
                            randomDoctors.map((item) => (
                                <DoctorCard doctor={item} key={item.name}/>
                            ))
                        }
                    </div>
                </section>
            <div>

                </div>
            </div>

        </section>
    </main>
  )
}
