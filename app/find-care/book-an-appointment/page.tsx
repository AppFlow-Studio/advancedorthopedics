import ContactUsSection from '@/components/ContactUsSection'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import React from 'react'
import Image from 'next/image'
import AAOS from '@/public/aaos.png';
import ACP from '@/public/ACP.png';
import AOA from '@/public/AOA.png';
import NASS from '@/public/NASS.png';
import Serpent from '@/public/Serpent.png';
import SMIS from '@/public/SMIS.png';
import FindCareContactUsSection from '@/components/FindCardContactUsSection';
import { TextAnimate } from '@/components/magicui/text-animate';
export default function BookAnAppointment() {
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
                Ready to book an Appointment ?
              </TextAnimate>
              <h1
              style={{
                fontFamily : 'var(--font-reem-kufi)',
                fontWeight : 500,

              }}
              className='text-white text-xl'
              >
                Our patient advocates are here to help. Schedule a virtual or in-person appointment at your earliest convenience.
              </h1>
          </div>
        </section>
        <FindCareContactUsSection page={'Book an Appointment'} backgroundcolor="white"/>
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
        <RatingsAndReviews />
    </main>
  )
}
