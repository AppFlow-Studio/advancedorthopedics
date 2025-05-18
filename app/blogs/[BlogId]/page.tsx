'use client'
import React, { useEffect, useState, cache } from 'react'
import Image from 'next/image'
import ConditionDetialsLanding from '@/public/ConditionDetails.jpeg'
import { ConditionInfoProp } from '@/components/ConditionCard'
import {BlogPosts} from '@/components/data/blogs'
import { ConsultationForm } from '@/components/ContactForm'
import { Input } from '@/components/ui/input'
import { Doctors } from '@/components/data/doctors'
import DoctorCard from '@/components/DoctorCard'
import BlogPostCard, { BlogPostProp, supabaseBlogPostProp } from '@/components/BlogPostCard'
import ClinicsMap from '@/components/ClinicsMap'
import ContactUsSection from '@/components/ContactUsSection'
import { GetBlogInfo } from '../api/get-blog-info'
import { Badge } from '@/components/ui/badge'

const getBlogDetails = cache(async (BlogId: string) => {
  const blogDetails = await GetBlogInfo(BlogId);
  return blogDetails;
});

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
  const [ blog_details, setBlogDetails ] = useState<supabaseBlogPostProp | null>(null)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState<string | null>(null)
  const resolvedParams = React.use(params)
  const conditionSlug = resolvedParams.BlogId
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const blogDetails = await GetBlogInfo(conditionSlug);
        if (!blogDetails) {
          setError('Blog not found')
        } else {
          setBlogDetails(blogDetails);
        }
      } catch (err) {
        setError('Failed to load blog details')
      } finally {
        setIsLoading(false)
      }
    }
    fetchBlogDetails();
  }, [conditionSlug]);

  if (isLoading) {
    return (
      <main className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <h1 className="text-xl font-medium text-gray-600">Loading blog details...</h1>
        </div>
      </main>
    )
  }

  if (error || !blog_details) {
    return (
      <main className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-bold text-red-600">{error || 'Blog not found or might have been deleted'}</h1>
          <p className="text-gray-600">Please check the URL or try again later</p>
        </div>
      </main>
    )
  }
  
 return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
        {/* Landing */}
        <section className=" w-full h-full flex flex-col relative overflow-hidden" >
        <Image src={blog_details.blog_info.img} fill className=" h-full absolute top-0 object-cover object-top pt-0 self-end w-full pl-[100px]" alt="Doctor Diagnosing a Old Patient"/>

        <div className="z-[1] flex flex-col w-full h-full text-left relative md:pt-20 lg:pt-40 ">
            <div className="lg:w-[90%] w-full h-full absolute left-0 top-0"
            style={{
            background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
            }}
            />

        <div className=' px-6 xl:px-[80px] z-[2]'>
            <div className=' mt-60  md:mt-[220px] flex flex-row space-x-[4px] rounded-[62px] w-fit items-center justify-center px-[20px] py-[10px]'
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
        <div className="px-6 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[12px] w-[65%] xl:w-[55%]">
            <h1
            style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 400,
            }}
            className="text-[#022968] text-4xl md:text-5xl lg:text-6xl "
            >
                {blog_details.blog_info.title}
            </h1>
        </div>

        <div className="   z-[2] px-6 xl:px-[80px] mt-[24px] w-[55%] pb-8 xl:flex hidden">
            <p
            style={{
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "148%",
            }}
            className="text-white"
            >
                {blog_details.blog_info.desc}
            </p>
        </div>

        <div className=' px-6 xl:px-[80px] mt-[24px] md:w-[55%] xl:hidden flex z-[2] pb-8'>
            <button className="border w-fit border-white py-[16px] px-[32px] items-center justify-center bg-white rounded-[62px] ">
            <p
                style={{
                    lineHeight: "148%",
                }}
                className="text-[#0094E0] text-sm font-bold"
                >
                    Check Your Condition
                </p>
            </button>
        </div>

        </div>
        </section>

        <main className=' max-w-[1440px] w-full h-full flex lg:flex-row flex-col relative overflow-hidden px-6 xl:px-[80px] py-[50px] space-x-[60px]'>
        
            <div className=' lg:w-[70%] w-full  flex flex-col space-y-[60px] rounded-[24px] '>
                 {/* Detail */}
                 <div className=' flex flex-col space-y-[40px] '>
                        <h1
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-5xl'
                        >
                        {blog_details.blog_info.title}

                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] text-lg'
                        >
                            {blog_details.blog_info.desc}
                        </h1>
                        <div className="flex flex-wrap gap-2">
                            {blog_details.blog_info.tags.length > 0 ? (
                                blog_details.blog_info.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary">
                                    {tag}
                                </Badge>
                                ))
                            ) : (
                                <Badge variant="outline" className="text-muted-foreground">
                                Tags will appear here
                                </Badge>
                            )}
                         </div>

                         <div className="relative w-full h-120 overflow-hidden rounded-lg">
                            <Image src={blog_details.blog_info.img} alt="Blog Image" fill className='w-full h-full object-cover aspect-video' />
                         </div>
                </div>

                <div className=' space-y-[32px] flex flex-col '>
                    {
                        blog_details.blog_info.blog_info.map((info) => (
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
                                    <div className="pl-4 border-l-2 border-muted space-y-4 mt-6"> 
                                        {info.sub_stories.map((sub_info) => (
                                           <div key={sub_info.header} className='flex flex-col space-y-2'>
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
                                                {sub_info.img && (
                                                <div className="relative w-full h-52 overflow-hidden rounded-lg">
                                                    <Image
                                                    src={sub_info.img || "/placeholder.svg"}
                                                    alt={sub_info.header || "Sub story image"}
                                                    fill
                                                    className="object-cover"
                                                    />
                                                </div>
                        )}
                                           </div>
                                        ))}
                                    </div>
                            </div>
                        ))
                    }
                </div>

                    
            </div>

            <div className='lg:w-[30%] w-full bg-white flex flex-col'>
                
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
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-4'>
                        {/* {
                            blogs.map((item) => (
                                <BlogPostCard BlogInfo={item} key={item.title} backgroundcolor='#FAFAFA' id={item.id}/>
                            ))
                        } */}
                    </div>
                </div>
            </div>

        </main>

        <ContactUsSection />
    </main>
  )
}
