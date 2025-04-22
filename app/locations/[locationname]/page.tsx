import ClinicsMap from '@/components/ClinicsMap'
import { TextAnimate } from '@/components/magicui/text-animate'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import React from 'react'
import { clinics } from '@/components/data/clinics'
import ContactUsSection from '@/components/ContactUsSection'
import AAOS from '@/public/aaos.png';
import ACP from '@/public/ACP.png';
import AOA from '@/public/AOA.png';
import NASS from '@/public/NASS.png';
import Serpent from '@/public/Serpent.png';
import SMIS from '@/public/SMIS.png';
import Image from 'next/image'
export default function LocationDetails(
    {
        params,
      }: {
        params: Promise<{ locationname : number }>
      }
) {
      const resolvedParams = React.use(params)
      const locationslug = resolvedParams.locationname
      let location = clinics.filter( x => x.id == locationslug )[0]

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
                    {location.name}
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
                    <div className=' mt-[20px] flex flex-row space-x-[4px] rounded-[62px] w-fit items-center justify-center px-[20px] py-[10px]'
                    style={{
                        background : 'rgba(255, 255, 255, 0.50)'
                    }}
                    >
                        <h1
                        style={{
                            fontFamily: "var(--font-reem-kufi)",
                            fontWeight: 400,
                        }}
                        className="text-[#111315]"
                        >
                        Location
                        </h1>
            
                        <h1
                        style={{
                            fontFamily: "var(--font-reem-kufi)",
                            fontWeight: 400,
                        }}
                        className="text-[#111315]"
                        >
                            /
                        </h1>
                        <h1
                        style={{
                            fontFamily: "var(--font-reem-kufi)",
                            fontWeight: 400,
                        }}
                        className="text-[#2258AC]"
                        >
                            Florida
                        </h1>
                        <h1
                        style={{
                            fontFamily: "var(--font-reem-kufi)",
                            fontWeight: 400,
                        }}
                        className="text-[#111315]"
                        >
                            /
                        </h1>
                        <h1
                        style={{
                            fontFamily: "var(--font-reem-kufi)",
                            fontWeight: 400,
                        }}
                        className="text-[#5093FF]"
                        >
                            {location.name}
                        </h1>

                    </div>
                </div>
            </section>


            <ClinicsMap startingClinic={location} />
            
            <div className="z-[2] w-full flex flex-row items-center justify-evenly bg-white py-[80px]"
            style={{
                background : 'linear-gradient(0deg, #6FC2ED 47.98%, rgba(118, 197, 238, 0.00) 100%)'
            }}
            >
                {
                [AAOS, ACP, AOA, NASS, Serpent, SMIS].map((item, index) => (
                    <Image key={index} src={item} alt="Logo" className=" h-[40px] object-contain mx-[20px]" draggable={false}/>
                ))
                }
            </div>


            <RatingsAndReviews />

            <ContactUsSection />
        </main>
  )
}
