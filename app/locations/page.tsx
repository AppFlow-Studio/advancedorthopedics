'use client'
import ClinicsMap from '@/components/ClinicsMap'
import ContactUsSection from '@/components/ContactUsSection'
import { TextAnimate } from '@/components/magicui/text-animate'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import React, { useState } from 'react'
import AAOS from '@/public/AAOS.png';
import ACP from '@/public/ACP.png';
import AOA from '@/public/AOA.png';
import NASS from '@/public/NASS.png';
import Serpent from '@/public/Serpent.png';
import SMIS from '@/public/SMIS.png';
import Image from 'next/image'
import { Marquee } from '@/components/magicui/marquee'
import { clinics, ClinicsProps } from '@/components/data/clinics';
export default function LocationsScreen() {
  const [selectedLocation, setSelectedLocation] = useState<ClinicsProps | undefined>(undefined);
  return (
      <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
            <section className=' bg-[#6FC2ED] w-full flex flex-row'>
              <div className=' max-w-[1440px] w-full flex flex-col items-start justfiy-start p-[16px] pt-32 lg:pt-26 px-6 lg:px-[80px]'>
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

            <ClinicsMap startingClinic={selectedLocation}/>
              
            <div className='w-full flex flex-col px-6 lg:px-[80px] items-center justify-center bg-white py-[30px] '>
              <div className='max-w-[1440px] w-full flex flex-row items-center justify-start'>
                <h1 className='text-[#022968] text-7xl font-bold'
                style={{
                  fontFamily : 'var(--font-reem-kufi)',
                  fontWeight : 500,
                }}
                >
                  All Our Locations 
                </h1>
              </div>

              <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-8 items-center justify-center mt-14 mb-10'>
               {
                clinics.map((item, index) => (
                  <div key={index} className='w-full flex flex-row items-center bg-[#6FC2ED] justify-center p-4 rounded-3xl group hover:cursor-pointer'
                  onClick={() => setSelectedLocation(item)}
                  >
                    <div className=' rounded-2xl p-2 w-full flex flex-row items-center justify-evenly   bg-[rgba(247,247,247,0.20)] overflow-ellipsis group-hover:bg-[rgba(247,247,247,0.70)] transition-all duration-300 ease-in-out'
                    >
                      <div className='group-hover:scale-[1.2] transition-all duration-300 ease-in-out'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M13.0193 11.9844C13.0768 11.275 13.2616 10.601 13.5512 9.98438H6V12.466L10 15.4967V42.0152H38V15.5319L42.5 12.5012V9.98438H24.4488C24.7384 10.601 24.9232 11.275 24.9807 11.9844H39.687L36 14.4676V40.0152H12V14.5029L8.67616 11.9844H13.0193Z" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M10 13.75L7.5 10.5H13.25L16.5 17H21L24.5 10.5H41L38 14.5V41H34V24H26V41H10V13.75ZM14 24H21V31H14V24Z" fill="white"/>
                          <path d="M6 41C6 41.5523 6.44772 42 7 42H41C41.5523 42 42 41.5523 42 41C42 40.4477 41.5523 40 41 40H7C6.44772 40 6 40.4477 6 41Z" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M25 12C25 15.3137 22.3137 18 19 18C15.6863 18 13 15.3137 13 12C13 8.68629 15.6863 6 19 6C22.3137 6 25 8.68629 25 12ZM20 9V11H22V13H20V15H18V13H16V11H18V9H20Z" fill="white"/>
                        </svg>
                      </div>
                      <h1 className='text-[#022968] text-2xl text-center group-hover:font-bold transition-all duration-300 ease-in-out '>
                        {item.name}
                      </h1>
                      <div/>
                    </div>
                  </div>
                ))
               }
              </div>
            </div>

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
