import React, { useState } from 'react'
import Image from 'next/image'
import { Avatars } from './ui/avatar'
import DoctorsAvatar from './ui/doctorsavatar'
import Logo from '../public/newlogo4.png'
import Link from 'next/link'
import { motion } from 'motion/react'
export interface BlogPostProp {
    title : string
    desc : string
    img  : string
    tags : string[]
    id : string
    keywords : string[]
    author : string
    date : string
    metaTitle?: string
    metaDescription?: string
    blog_info : {
        header : string, 
        body : string, 
        video : string | undefined, 
        sub_stories : {
            header : string,
            body : string, 
            video : string | undefined,
            img : string | undefined,
        }[]}[]
}

export interface supabaseBlogPostProp {
    created_at : string
    modified_at : string
    id : string
    blog_info : BlogPostProp
    slug : string
}

function truncateString(str : string, maxLength = 172) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
  }
export default function BlogPostCard({ BlogInfo, backgroundcolor = "white", id } : { BlogInfo : BlogPostProp, backgroundcolor : string, id : string}) {
  const [ isHover, setIsHover ] = useState(false)
  return (
    <motion.div
    className={`w-full h-full bg-[${backgroundcolor}] rounded-[24px]`}
    whileHover={{
        background : 'linear-gradient(177deg, #022968 -13.59%, #0094E0 109.86%)',
        scale: 1.01,
    }}
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}

    >
        {id && (
            <Link className="flex flex-col p-4 space-y-[32px]" href={`/blogs/${BlogInfo.title.replace(/\s+/g, '-').toLowerCase()}`}>
                <div className="w-full max-h-[240px] h-full object-cover rounded-[24px] lg:h-[240px] bg-[#EFF5FF] items-center justify-center flex overflow-hidden">
                    <Image src={BlogInfo.img} width={240} height={240} layout='responsive' alt="Mountain Spine & Orthopedics Logo" />
                </div>
    
                <div className=" flex flex-col space-y-[16px]">
                    <div className='flex flex-col space-y-[8px]'>
                        <h1
                        style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 500,
                        color : isHover ?  'white' : 'black',
                        }}
                        className="text-2xl"
                        >{BlogInfo.title}</h1>
            
                        <h1
                        style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 400,
                        color : isHover ? 'black' : '#5B5F67',
                        }}
                        className="text-md overflow-ellipsis"
                        >
                        {truncateString(BlogInfo.desc)}
                        </h1>
                    </div>
        
                    <div className=' bg-[#DCDEE1] h-[1px] w-full'/>
                    
                    <div className=' flex flex-row flex-wrap w-full  space-y-1  items-center'>
                        {
                            BlogInfo.tags.map((tag) => (
                                <div
                                className=" self-end max-h-[56px] w-full h-full px-[32px] py-[16px] space-x-[10px] rounded-[62px] relative flex bg-[#EFF5FF] text-[#022968] text-[14px] font-semibold justify-center items-center"
                                key={tag}
                                >
                                    <h1
                                    style={{
                                        fontFamily: "var(--font-inter)",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                        letterSpacing: "0.02em"
                                    }}
                                    >
                                        {tag}
                                    </h1>
                                    
                                </div>
                            ))
                        }
                    </div>
        
                    <button className="bg-white border hover:cursor-pointer border-[#022968] px-[20px] py-[10px] space-x-[10px] flex flex-row items-center justify-center rounded-[62px] w-full">
                        <h1
                        style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 400,
                        }}
                        className="text-[#022968]"
                        >Read More</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
                        <path d="M12.3982 0.268483C12.0402 -0.0894963 11.4598 -0.089494 11.1018 0.268488C10.7438 0.62647 10.7438 1.20687 11.1018 1.56485L14.1203 4.58333H1.66667C1.16041 4.58333 0.75 4.99374 0.75 5.5C0.75 6.00626 1.16041 6.41667 1.66667 6.41667H14.1203L11.1018 9.43516C10.7439 9.79314 10.7439 10.3735 11.1019 10.7315C11.4598 11.0895 12.0402 11.0895 12.3982 10.7315L16.9766 6.15303C16.9935 6.13637 17.0098 6.11905 17.0254 6.10112C17.0873 6.02997 17.1365 5.95154 17.1728 5.86885C17.2221 5.75677 17.2496 5.63294 17.25 5.50273L17.25 5.5C17.25 5.49717 17.25 5.49434 17.25 5.49152C17.2489 5.37622 17.2266 5.26602 17.1867 5.16463C17.142 5.05068 17.0736 4.94387 16.9815 4.85178L12.3982 0.268483Z" fill="#022968"/>
                        </svg>
                    </button>
        
        
                </div>
            </Link>
        )}
    </motion.div>
  )
}
