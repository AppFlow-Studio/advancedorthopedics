'use client'
import React from 'react'
import Image from 'next/image'
import Landing from '../../public/AreaOfSpecLanding.jpeg'
import BookAnAppoitmentButton from '@/components/BookAnAppoitmentButton'
import { Input } from '@/components/ui/input'
import ConditionCard from '@/components/ConditionCard'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import {Conditions} from '@/components/data/conditions'
export default function AreaOfSpeciality() {
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
        {/* Landing */}
        <section className="max-w-[1440px] w-full h-full flex flex-col relative overflow-hidden" >
          <div 
          style={{
          background: 'white',
          filter: 'blur(30px)'
          }}
          className="w-full h-[120px] absolute top-0 z-[1] border border-red-500"
          />
          <Image src={Landing} className=" max-h-[945px] h-full absolute top-0 object-cover object-top pt-16 self-end w-full max-w-[1440px] xl:w-[1440px] pl-[100px]" alt="Doctor Diagnosing a Old Patient"/>

          <div className="z-[1] flex flex-col w-full h-full  text-left relative  pb-[160px]">
            <div className="w-[565px] h-full absolute left-0 top-0"
            style={{
              background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
            }}
            />

          <div className="px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[220px] w-[55%]">
              <h1
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 400,
                fontSize : '72px'
              }}
              className="text-[#022968]"
              >
                CONDITIONS
              </h1>
          </div>

          <div className="z-[2] px-[80px] mt-[24px] w-[50%]">
              <p
              style={{
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "148%",
              }}
              className="text-[#111315]"
              >
                  Not sure which spine condition you might have?<br/>Find out with our 2-minute Condition Checker.            
              </p>
          </div>

          <div className='w-[45%] mt-[40px] px-[80px]'>
              <button 
                  className=" max-h-[56px] h-full px-[32px] py-[16px] rounded-[62px] relative flex items-center justify-between bg-[#0094E0] text-white font-[500px] text-[14px] font-semibold w-full justify-center items-center hover:cursor-pointer"
                  >
                      <h1
                      style={{
                          fontFamily: "var(--font-reem-kufi)",
                          fontWeight: 500,
                          fontSize: "16px",
                          lineHeight: "24px",
                          letterSpacing: "0.02em"
                      }}
                      >Condition Checker</h1>
              </button>
          </div>
          </div>
        </section>

        {/* Tell us Your Story */}
        <section className='max-w-[1440px] w-full h-full flex flex-col relative overflow-hidden py-[50px] px-[80px] space-y-[24px]'>
          <div className=' flex flex-col space-y-[16px] '>
              <h1
              style={{
                fontFamily : 'var(--font-reem-kufi)',
                fontWeight : 500,
              }}
              className='text-[#111315] text-5xl'
              >
                We are Here to Listen, Tell us your Story
              </h1>

              <h1
               style={{
                fontFamily : 'var(--font-inter)',
                fontWeight : 500,
              }}
              className='text-[#5B5F67] text-xl w-[75%]'
              >
                Do you have a spinal condition that’s causing you chronic pain intense enough to interfere with your life or day-to-day activities? Are you afraid you’ll never be able to get your pain under control or that it might continue to worsen as you age?
              </h1>
          </div>

          <div className=' flex flex-col space-y-[16px] '>
              <h1
              style={{
                fontFamily : 'var(--font-reem-kufi)',
                fontWeight : 500,

              }}
              className='text-[#111315] text-2xl'
              >
                WELL, YOU’RE NOT ALONE.
              </h1>

              <h1
               style={{
                fontFamily : 'var(--font-inter)',
                fontWeight : 500,

              }}
              className='text-[#5B5F67] text-xl w-[75%]'
              >
                Many people with spinal disorders feel frustrated, confused, and helpless about their conditions. As many as 500,000 people suffer from some form of spinal injury each year. The good news is that you can ease your concerns and fears by gaining a better understanding of your condition.
                <br/><br/>
                At NJ Spine and Orthopedic, we work to help you understand your symptoms, diagnose your condition and inform you of the various treatments. Below is an overview of the most common types of spine conditions, as well as other orthopedic conditions.              
              </h1>
          </div>
        </section>

        {/* All Our Conditions */}
        <section className='max-w-[1440px] w-full h-full flex flex-col relative overflow-hidden py-[50px] px-[80px] space-y-[24px]'>
          <div className='space-y-[16px] flex flex-row justify-between'>
              <h1
              style={{
                fontFamily : 'var(--font-reem-kufi)',
                fontWeight : 500,

              }}
              className='text-[#111315] text-5xl'
              >
                All Our Conditions
              </h1>

              <div className=" flex w-[25%] ">
                <span className="inline-flex items-center px-4 h-12 text-lg bg-[#EFF5FF] rounded-l-[62px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C12.4013 20 14.6049 19.1536 16.3287 17.7429L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L17.7429 16.3287C19.1536 14.6049 20 12.4013 20 10C20 4.47715 15.5228 0 10 0ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="#5B5F67"/>
                </svg>
                </span>
                <Input placeholder="Search Name or Keyword" className="h-12 text-lg rounded-l-none border-0 bg-[#EFF5FF] rounded-r-[62px] " onFocus={() => {}}/>
              </div> 

              
          </div>

          <div className=' grid grid-cols-3 mt-[60px] gap-[32px] '>
              {
                Conditions.slice(0,9).map((item) => 
                <ConditionCard ConditionInfo={item} key={item.title}/>
                )
              }
          </div>

          <div className=' bg-[#DCDEE1] h-[1px] w-full'/>

          <div className=' mt-[16px] flex flex-row items-center justify-between'>
              <div className=' flex flex-row items-center space-x-[6px] hover:cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                  <path d="M5.2929 11.7071C5.68342 12.0976 6.31659 12.0976 6.70711 11.7071C7.09763 11.3166 7.09763 10.6834 6.7071 10.2929L3.41419 7L17 7C17.5523 7 18 6.55228 18 6C18 5.44771 17.5523 5 17 5L3.41423 5L6.70707 1.7071C7.09759 1.31657 7.09759 0.683409 6.70706 0.292888C6.31653 -0.0976335 5.68337 -0.0976287 5.29285 0.292899L0.298225 5.2876C0.27977 5.30578 0.262016 5.32468 0.245012 5.34424C0.177454 5.42185 0.123865 5.50741 0.0842495 5.59762C0.0304489 5.71989 0.000417697 5.85497 3.81444e-06 5.99702L0 6C2.69961e-10 6.00309 1.3352e-05 6.00617 4.19625e-05 6.00925C0.00118257 6.13503 0.0255413 6.25525 0.0690403 6.36586C0.117815 6.49017 0.192434 6.60669 0.292896 6.70715L5.2929 11.7071Z" fill="#5B5F67"/>
                </svg>
                <h1
                style={{
                  fontFamily : 'var(--font-inter)',
                  fontWeight : 400
                }}
                className='text-[#5B5F67]'
                >
                  Previous
                </h1>
              </div>

              <div className=' flex flex-row items-center space-x-[2px]'>
                {
                  [1,2,3,4,5,6,7,8,9,10].map((item) => (
                    <div key={item} className={` h-[40px] w-[40px] flex items-center  justify-center ${ item == 1 ? 'rounded-full bg-[#FAFAFA] text-[#022968] ' : 'text-[#5B5F67]' }`}>
                      <h1
                        style={{
                          fontFamily : 'var(--font-reem-kufi)',
                          fontWeight : 500,
                        }}
                        className=' text-lg'
                      >
                        {item}
                      </h1>
                    </div>
                  ))
                }
              </div>

              <button className=' flex flex-row items-center space-x-[6px] hover:cursor-pointer '>
              <h1
                style={{
                  fontFamily : 'var(--font-inter)',
                  fontWeight : 400
                }}
                className='text-[#111315]'
                >
                  Next
                </h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                  <path d="M12.7071 11.7071C12.3166 12.0976 11.6834 12.0976 11.2929 11.7071C10.9024 11.3166 10.9024 10.6834 11.2929 10.2929L14.5858 7L1 7C0.447716 7 0 6.55228 0 6C0 5.44771 0.447716 5 1 5L14.5858 5L11.2929 1.7071C10.9024 1.31657 10.9024 0.683409 11.2929 0.292888C11.6835 -0.0976335 12.3166 -0.0976287 12.7072 0.292899L17.7018 5.2876C17.7202 5.30578 17.738 5.32468 17.755 5.34424C17.8225 5.42185 17.8761 5.50741 17.9158 5.59762C17.9696 5.71989 17.9996 5.85497 18 5.99702L18 6C18 6.00309 18 6.00617 18 6.00925C17.9988 6.13503 17.9745 6.25525 17.931 6.36586C17.8822 6.49017 17.8076 6.60669 17.7071 6.70715L12.7071 11.7071Z" fill="#111315"/>
                </svg>
              </button>

          </div>
         
        </section>

        {/* What our patients say */}
        <RatingsAndReviews />
    </main>
  )
}
