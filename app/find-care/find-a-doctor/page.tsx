import React from 'react'
import ContactUsSection from '@/components/ContactUsSection'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import Image from 'next/image'
import AAOS from '@/public/aaos.png';
import ACP from '@/public/ACP.png';
import AOA from '@/public/AOA.png';
import NASS from '@/public/NASS.png';
import Serpent from '@/public/Serpent.png';
import SMIS from '@/public/SMIS.png';
import { Doctors } from '@/components/data/doctors';
import DoctorCard from '@/components/DoctorCard';
import FindCareContactUsSection from '@/components/FindCardContactUsSection';
import { TextAnimate } from '@/components/magicui/text-animate';

export default function FindADoctor() {
  return (
     <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
            <section className=' bg-[#6FC2ED] w-full flex flex-row'>
              <div className=' max-w-[1440px] w-full flex flex-col items-start justfiy-start p-[16px]  pt-26 px-[100px]'>
                  <TextAnimate animation="blurInUp" by="character" once
                  style={{
                    fontFamily : 'var(--font-reem-kufi)',
                    fontWeight : 500,
    
                  }}
                  className='text-[#022968] text-6xl'
                  >
                    Find a Doctor
                  </TextAnimate>
                  <h1
                  style={{
                    fontFamily : 'var(--font-reem-kufi)',
                    fontWeight : 500,
    
                  }}
                  className='text-white text-xl'
                  >
                    Connect With a Top Spine Surgeon or Orthopedic Specialist                  
                </h1>
              </div>
            </section>
            <FindCareContactUsSection page={'Find a Doctor'} backgroundcolor="white"/>
            <div className="w-full flex flex-row items-center justify-evenly bg-white py-20 "
              style={{
                background : 'linear-gradient(0deg, #6FC2ED 47.98%, rgba(118, 197, 238, 0.00) 100%)',
              }}
              >
                {
                  [AAOS, ACP, AOA, NASS, Serpent, SMIS].map((item, index) => (
                    <Image key={index} src={item} alt="Logo" className=" h-[40px] object-contain mx-[20px]" />
                  ))
                }
            </div>

            <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-[40px]">
                <div className=" flex flex-row">
                    <div className=" flex flex-col space-y-[24px] w-[50%]">
                    <h1
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 500,
                    }}
                    className="text-black text-5xl text-left w-full"
                    >Meet Our doctors</h1>
                    </div>
                </div>    
                <div className=" mt-[60px] grid grid-cols-3 gap-16">
                    {
                        Doctors.map((item) => (
                        <DoctorCard key={item.name} doctor={item}/>
                        ))
                    }
                    </div>
                </section>


            <RatingsAndReviews />
        </main>
  )
}
