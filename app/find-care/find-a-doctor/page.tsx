import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

export const metadata = {
  title: "Find a Doctor Near You | Mountain Spine",
  description: "Search for experienced orthopedic doctors near you. Filter by location, specialty, and more.",
  openGraph: {
    title: "Find a Doctor Near You | Mountain Spine",
    description: "Search for experienced orthopedic doctors near you. Filter by location, specialty, and more.",
    url: buildCanonical('/find-care/find-a-doctor'),
    images: [
      {
        url: getOgImageForPath('/find-care'),
        width: 1200,
        height: 630,
        alt: 'Find a Doctor at Mountain Spine & Orthopedics',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find a Doctor Near You | Mountain Spine",
    description: "Search for experienced orthopedic doctors near you. Filter by location, specialty, and more.",
    images: [getOgImageForPath('/find-care')],
  },
};
import React from 'react'
import ContactUsSection from '@/components/ContactUsSection'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import Image from 'next/image'
import AAOS from '@/public/AAOS.png';
import ACP from '@/public/ACP.png';
import AOA from '@/public/AOA.png';
import NASS from '@/public/NASS.png';
import Serpent from '@/public/Serpent.png';
import SMIS from '@/public/SMIS.png';
import { Doctors } from '@/components/data/doctors';
import DoctorCard from '@/components/DoctorCard';
import FindCareContactUsSection from '@/components/FindCardContactUsSection';
import { TextAnimate } from '@/components/magicui/text-animate';
import { Marquee } from '@/components/magicui/marquee';

export default function FindADoctor() {
  return (
     <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
            <section className=' bg-[#6FC2ED] w-full flex flex-row'>
              <div className=' max-w-[1440px] w-full flex flex-col items-start justfiy-start p-[16px] pt-32 lg:pt-26 px-6 lg:px-[80px]'>
                  <TextAnimate animation="blurInUp" by="word" once
                  style={{
                    fontFamily : 'var(--font-reem-kufi)',
                    fontWeight : 500,
    
                  }}
                  className='text-[#022968] text-3xl md:text-6xl'
                  >
                    Find a Doctor
                  </TextAnimate>
                  <h1
                  style={{
                    fontFamily : 'var(--font-reem-kufi)',
                    fontWeight : 500,
    
                  }}
                  className='text-white text-lg md:text-xl'
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
                <Marquee pauseOnHover className='w-full' >
                  {
                    [AAOS, ACP, AOA, NASS, Serpent, SMIS].map((item, index) => (
                      <Image key={index} src={item} alt="Logo" className=" h-[40px] object-contain mx-[20px]" />
                    ))
                  }   
               </Marquee>
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
                <div className=" mt-[60px] grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 gap-16">
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
