import ClinicsMap from '@/components/ClinicsMap'
import ContactUsSection from '@/components/ContactUsSection'
import { TextAnimate } from '@/components/magicui/text-animate'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import React from 'react'
import AAOS from '@/public/aaos.png';
import ACP from '@/public/ACP.png';
import AOA from '@/public/AOA.png';
import NASS from '@/public/NASS.png';
import Serpent from '@/public/Serpent.png';
import SMIS from '@/public/SMIS.png';
import Image from 'next/image'
import { Marquee } from '@/components/magicui/marquee'
export default function LocationsScreen() {
  return (
      <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
            <section className=' bg-[#6FC2ED] w-full flex flex-row'>
              <div className=' max-w-[1440px] w-full flex flex-col items-start justfiy-start p-[16px] pt-32 lg:pt-26 px-4 lg:px-[80px]'>
                  <TextAnimate animation="blurInUp" by="character" once
                  style={{
                    fontFamily : 'var(--font-reem-kufi)',
                    fontWeight : 500,
    
                  }}
                  className='text-[#022968] text-6xl'
                  >
                   Locations
                  </TextAnimate>
                  <h1
                  style={{
                    fontFamily : 'var(--font-reem-kufi)',
                    fontWeight : 500,
    
                  }}
                  className='text-white text-xl'
                  >
                    Mountain Spine & Orthopedics delivers expert spine care across Florida with 7 locations and an Ambulatory Surgery Center. 
                  </h1>
              </div>
            </section>

            <ClinicsMap />
            <div className="z-[2] w-full flex flex-row items-center justify-evenly bg-white py-[80px] "
            style={{
                background : 'linear-gradient(0deg, #6FC2ED 47.98%, rgba(118, 197, 238, 0.00) 100%)'
            }}
            >
              <Marquee pauseOnHover className="w-full" >
                {
                  [AAOS, ACP, AOA, NASS, Serpent, SMIS].map((item, index) => (
                    <Image key={index} src={item} alt="Logo" className=" lg:h-[40px] h-10 md:h-8 object-contain mx-[20px]" draggable={false}/>
                  ))
                }
              </Marquee>
            </div>
            <RatingsAndReviews />
            <ContactUsSection />
        
        </main>
  )
}
