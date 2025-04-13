import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Avatars } from './ui/avatar'
import DoctorsAvatar from './ui/doctorsavatar'
import Logo from '../public/Logo.png'
import Link from 'next/link'
export interface ConditionInfoProp {
    title : string
    body : string
    slug : string
    forum? : {}[]
    side_img? : StaticImageData
}

function truncateString(str : string, maxLength = 125) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
  }
export default function ConditionCard({ ConditionInfo } : { ConditionInfo : ConditionInfoProp}) {
  return (
    <Link className=" bg-white flex flex-col p-4 rounded-[24px] space-y-[32px]" href={`/area-of-speciality/${ConditionInfo.slug}`}>
        <div >
            <div className="w-full max-h-[240px] h-full object-cover rounded-[24px] lg:h-[240px] bg-[#EFF5FF] items-center justify-center flex">
                <div className='flex flex-row  space-x-[8px] items-center justify-center'> 
                    <Image src={Logo} alt="Advanced Orthopedics Logo" className="max-h-[45px] lg:h-[45px] w-auto  " />
                    <div className='w-[1px] h-[35px] bg-gradient-to-b from-transparent via-gray-50 to-transparnet'/>
                    <div className="flex flex-col text-white"
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        letterSpacing: "0.02em",
                    }}
                    >
                        <h1 className="text-lg font-[600] text-[#022968]">Advanced</h1>
                        <h2 className="font-[400] text-lg text-[#0094E0]">Orthopedics</h2>    
                    </div>
                </div>
            </div>
        </div>

        <div className=" flex flex-col space-y-[16px]">
            <div className='flex flex-col space-y-[8px]'>
                <h1
                style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
                color : '#022968',
                }}
                className="text-xl"
                >{ConditionInfo.title}</h1>
    
                <h1
                style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                color : '#5B5F67',
                }}
                className="text-md overflow-ellipsis"
                >
                {truncateString(ConditionInfo.body)}
                </h1>
            </div>

            <div className=' bg-[#DCDEE1] h-[1px] w-full'/>
            
            <div className=' flex flex-row w-full space-x-[16px] items-center'>
                <DoctorsAvatar />
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                    color : '#5B5F67',
                    }}
                >
                    4 Specialist Doctors
                </h1>
            </div>

            <button className="bg-white border hover:cursor-pointer border-[#022968] px-[20px] py-[10px] space-x-[10px] flex flex-row items-center justify-center rounded-[62px] w-full">
                <h1
                style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                }}
                className="text-[#022968]"
                >View details</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
                <path d="M12.3982 0.268483C12.0402 -0.0894963 11.4598 -0.089494 11.1018 0.268488C10.7438 0.62647 10.7438 1.20687 11.1018 1.56485L14.1203 4.58333H1.66667C1.16041 4.58333 0.75 4.99374 0.75 5.5C0.75 6.00626 1.16041 6.41667 1.66667 6.41667H14.1203L11.1018 9.43516C10.7439 9.79314 10.7439 10.3735 11.1019 10.7315C11.4598 11.0895 12.0402 11.0895 12.3982 10.7315L16.9766 6.15303C16.9935 6.13637 17.0098 6.11905 17.0254 6.10112C17.0873 6.02997 17.1365 5.95154 17.1728 5.86885C17.2221 5.75677 17.2496 5.63294 17.25 5.50273L17.25 5.5C17.25 5.49717 17.25 5.49434 17.25 5.49152C17.2489 5.37622 17.2266 5.26602 17.1867 5.16463C17.142 5.05068 17.0736 4.94387 16.9815 4.85178L12.3982 0.268483Z" fill="#022968"/>
                </svg>
            </button>


        </div>
    </Link>
  )
}
