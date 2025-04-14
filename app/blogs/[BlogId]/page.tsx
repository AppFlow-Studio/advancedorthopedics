'use client'
import React from 'react'
import Image from 'next/image'
import ConditionDetialsLanding from '@/public/ConditionDetails.jpeg'
import { ConditionInfoProp } from '@/components/ConditionCard'
import {BlogPosts} from '@/components/data/blogs'
import { ConsultationForm } from '@/components/ContactForm'
import { Input } from '@/components/ui/input'
import { Doctors } from '@/components/data/doctors'
import DoctorCard from '@/components/DoctorCard'
import BlogPostCard from '@/components/BlogPostCard'
import ClinicsMap from '@/components/ClinicsMap'
import ContactUsSection from '@/components/ContactUsSection'
function truncateString(str : string, maxLength = 172) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
  }
export default function BlogDetails({
    params,
  }: {
    params: Promise<{ BlogId : string }>
  }) {
// Unwrap the promise using React.use (the experimental hook)
  const resolvedParams = React.use(params)
  const conditionSlug = resolvedParams.BlogId
  const blog_details = BlogPosts.find( x => x.id === conditionSlug)
  if (!blog_details) {
    return (
      <main className="w-full h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">Condition not found</h1>
      </main>
    )
  }
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
        {/* Landing */}
        <section className="max-w-[1440px] w-full h-full flex flex-col relative overflow-hidden" >
        <Image src={ConditionDetialsLanding} className=" max-h-[945px] h-full absolute top-0 object-cover object-top pt-0 self-end w-full max-w-[1440px] xl:w-[1440px] pl-[100px]" alt="Doctor Diagnosing a Old Patient"/>

        <div className="z-[1] flex flex-col w-full h-full  text-left relative  pb-[160px]">
            <div className="w-[565px] h-full absolute left-0 top-0"
            style={{
            background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
            }}
            />

        <div className=' px-[80px] z-[2]'>
            <div className=' mt-[220px] flex flex-row space-x-[4px] rounded-[62px] w-[20%] items-center justify-center px-[20px] py-[10px]'
            style={{
                background : 'rgba(255, 255, 255, 0.50)'
            }}
            >
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="text-[#022968]"
                >
                    Blogs
                </h1>
    
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="text-[#022968]"
                >
                    /
                </h1>
    
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="text-[#2358AC]"
                >
                    Blog Details
                </h1>
            </div>
        </div>
        {/* Max 6 words */}
        <div className="px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[12px] w-[55%]">
            <h1
            style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 400,
            }}
            className="text-[#022968] text-6xl leading-20"
            >
                {blog_details.title}
            </h1>
        </div>

        <div className="z-[2] px-[80px] mt-[24px] w-[55%]">
            <p
            style={{
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "148%",
            }}
            className="text-[#111315]"
            >
                {truncateString(blog_details.desc)}
            </p>
        </div>
        </div>
        </section>

        <section className=' max-w-[1440px] w-full h-full flex lg:flex-row relative overflow-hidden px-[80px] py-[50px] space-x-[60px]'>
        
            <div className=' w-[70%]  flex flex-col space-y-[60px] rounded-[24px] '>
                 {/* Detail */}
                 <div className=' flex flex-col space-y-[40px] '>
                        <h1
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-5xl'
                        >
                        Blog Details
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] text-lg'
                        >
                            {blog_details.desc}
                        </h1>
                </div>

                <div className=' space-y-[32px] flex flex-col '>
                    {
                        blog_details.blog_info.map((info) => (
                            <div className=' flex flex-col space-y-[28px]' key={info.header}>
                                <h1
                                style={{
                                    fontFamily : 'var(--font-reem-kufi)',
                                    fontWeight : 500,
                                }}
                                className='text-[#111315] text-4xl'
                                >
                                {info.header}
                                </h1>
                                {
                                    info.video ? 
                                    <ClinicsMap />
                                    : 
                                    <></>
                                }
                                <h1
                                style={{
                                    fontFamily : 'var(--font-inter)',
                                    fontWeight : 400,
                                }}
                                className='text-[#5B5F67] text-lg'
                                >
                                    {info.body}
                                </h1>
                                    {info.sub_stories.map((sub_info) => (
                                       <div key={sub_info.header}>
                                            <h1
                                            style={{
                                                fontFamily : 'var(--font-reem-kufi)',
                                                fontWeight : 500,
                                            }}
                                            className='text-[#111315] text-2xl'
                                            >
                                            {sub_info.header}
                                            </h1>
                                            <h1
                                            style={{
                                                fontFamily : 'var(--font-inter)',
                                                fontWeight : 400,
                                            }}
                                            className='text-[#5B5F67] text-md'
                                            >
                                                {sub_info.body}
                                            </h1>
                                       </div>
                                    ))}
                            </div>
                        ))
                    }
                </div>

                    
            </div>

            <div className='w-[30%] bg-white flex flex-col'>
                <div className=" flex w-[full] mt-[60px] ">
                    <span className="inline-flex items-center px-4 h-12 text-lg bg-[#EFF5FF] rounded-l-[62px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C12.4013 20 14.6049 19.1536 16.3287 17.7429L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L17.7429 16.3287C19.1536 14.6049 20 12.4013 20 10C20 4.47715 15.5228 0 10 0ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="#5B5F67"/>
                    </svg>
                    </span>
                    <Input placeholder="Search Name or Keyword" className="h-12 text-lg rounded-l-none border-0 bg-[#EFF5FF] rounded-r-[62px] " onFocus={() => {}}/>
                </div> 

                <div className=' flex flex-col space-y-[20px] hover:cursor-pointer mt-[32px] rounded-[24px]'>
                    <h1
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 400,
                    }}
                    className="text-[black] text-xl"
                    >
                        Recent Posts
                    </h1>
                    {
                        BlogPosts.slice(0,3).map((item) => (
                            <BlogPostCard BlogInfo={item} key={item.title} backgroundcolor='#FAFAFA'/>
                        ))
                    }
                </div>
            </div>

        </section>

        <ContactUsSection />
    </main>
  )
}
