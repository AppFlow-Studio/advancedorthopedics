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

const getBlogDetails = cache(async (BlogSlug: string) => {
  const blogDetails = await GetBlogInfo(BlogSlug);
  return blogDetails;
});

function truncateString(str : string, maxLength = 172) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
  }

export default function BlogDetails({
    params,
  }: {
    params: Promise<{ BlogSlug : string }>
  }) {
// Unwrap the promise using React.use (the experimental hook)
  const [ blog_details, setBlogDetails ] = useState<supabaseBlogPostProp | null>(null)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState<string | null>(null)
  const resolvedParams = React.use(params)
  const conditionSlug = resolvedParams.BlogSlug
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
        <section className="w-full h-full flex flex-col relative overflow-hidden" >
        <Image src={blog_details.blog_info.img} fill className=" h-full absolute top-0 object-cover object-top pt-0 self-end w-full md:pl-[100px]" alt="Doctor Diagnosing a Old Patient"/>
        <div className="z-[1] flex flex-col w-full h-full text-left relative md:pt-20 lg:pt-40 ">
            <div className="lg:w-[90%] w-full h-full absolute left-0 top-0"
            style={{background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)'}}
            />
            <div className='px-6 xl:px-[80px] z-[2] mt-60 md:mt-[220px]'>
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex space-x-2 text-[#022968]">
                  <li><a href="/blogs">Blogs</a> /</li>
                  <li aria-current="page">{blog_details.blog_info.title}</li>
                </ol>
              </nav>
              <h1 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 700 }} className="text-[#022968] text-2xl md:text-5xl lg:text-6xl ">{blog_details.blog_info.title}</h1>
              <p style={{ fontWeight: 400, fontSize: "20px", lineHeight: "148%" }} className="text-white mt-4">{blog_details.blog_info.desc}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {blog_details.blog_info.tags.map((tag, index) => (
                  <span key={index} className="bg-[#EFF5FF] text-[#022968] px-3 py-1 rounded-full text-sm">{tag}</span>
                ))}
              </div>
              <p className="text-white text-sm mt-2">By {blog_details.blog_info.author} | <time dateTime={blog_details.blog_info.date}>{blog_details.blog_info.date}</time></p>
            </div>
        </div>
        </section>
        <main className='max-w-[1440px] w-full h-full flex lg:flex-row flex-col relative overflow-hidden px-6 xl:px-[80px] py-[50px] space-x-[60px]'>
          <article className='lg:w-[70%] w-full flex flex-col space-y-[60px] rounded-[24px]'>
            {blog_details.blog_info.blog_info.map((section, idx) => (
              <section key={idx} className="mb-8">
                <h2 style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 500 }} className='text-[#111315] text-3xl mb-2'>{section.header}</h2>
                <p className='text-[#5B5F67] text-lg mb-4'>{section.body}</p>
                {section.sub_stories && section.sub_stories.length > 0 && (
                  <div className="space-y-4">
                    {section.sub_stories.map((sub, subIdx) => (
                      <div key={subIdx} className="ml-4">
                        <h3 style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 500 }} className='text-[#022968] text-xl mb-1'>{sub.header}</h3>
                        <p className='text-[#5B5F67] text-base'>{sub.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </article>
          <aside className='lg:w-[30%] w-full flex flex-col space-y-8'>
            <h2 className='text-[#022968] text-2xl font-bold mb-4'>Recent Posts</h2>
            {/* Render recent posts here */}
          </aside>
        </main>

        <ContactUsSection />
    </main>
  )
}
