'use client'
import React from 'react'
import Image from 'next/image'
import Logo from "../public/logo.png"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export default function NavBar() {
  const pathname = usePathname();
  function NavLink({ href, children, screen }: { href: string; children: React.ReactNode, screen : string }) {
    return (
      <Link href={href} className={`${pathname === `${screen}` ? "text-[#022968] rounded-[24px] border-white border-1 gap-8 bg-[rgba(239, 245, 255, 0.50)] backdrop-blur-[50px] px-[22px] py-[11px] font-[500]" : "text-black font-[400]"} hover:text-[#022968] transition-colors text-[16px] text-center `}
      >
        <h1 
        style={{
            fontFamily: "var(--font-reem-kufi)",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0.02em",
        }}
        >{children}</h1>
      </Link>
    )
  }
  return (
    <header className='fixed top-0 left-0 right-0 z-50 flex justify-center self-center mt-6 max-h-[128px] lg:h-[60px]'>
        <nav className="flex justify-between items-center w-full max-w-[1440px] px-[40px] py-2">
            <div className='flex flex-row items-center justify-center space-x-[8px]'> 
                <Image src={Logo} alt="Advanced Orthopedics Logo" className="max-h-[32px] lg:h-[32px] w-auto  " />
                <div className='w-[1px] h-[35px] bg-gradient-to-b from-transparent via-gray-50 to-transparnet'/>
                <div className="flex flex-col text-white"
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0.02em",
                }}
                >
                    <h1 className="text-xl font-[600]">Advanced</h1>
                    <h2 className="font-[400] text-lg">Orthopedics</h2>    
                </div>
            </div>
            <div className="flex space-x-8 text-[16px] font-semibold items-center justify-center">
            <NavLink href='/' screen='/' >HOME</NavLink >
            <NavLink href='/find-care' screen='/find-care'>FIND CARE</NavLink >
            <NavLink href='/area-of-speciality' screen='/area-of-speciality' >AREA OF SPECIALITY</NavLink >
            <NavLink href='/find-care' screen='/find-care'>ABOUT</NavLink >
            <NavLink href='/find-care' screen='/find-care' >LOCATIONS</NavLink >
            </div>

            <button 
                className=" max-h-[40px] h-full px-[20px] rounded-[62px] relative flex items-center justify-between bg-[#022968] text-white font-[500px] text-[14px] font-semibold"
                
                >
                Contact Us
                <div className='pl-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                        <path d="M12.3982 0.768483C12.0402 0.410504 11.4598 0.410506 11.1018 0.768488C10.7438 1.12647 10.7438 1.70687 11.1018 2.06485L14.1203 5.08333H1.66667C1.16041 5.08333 0.75 5.49374 0.75 6C0.75 6.50626 1.16041 6.91667 1.66667 6.91667H14.1203L11.1018 9.93516C10.7439 10.2931 10.7439 10.8735 11.1019 11.2315C11.4598 11.5895 12.0402 11.5895 12.3982 11.2315L16.9766 6.65303C16.9935 6.63637 17.0098 6.61905 17.0254 6.60112C17.0873 6.52997 17.1365 6.45154 17.1728 6.36885C17.2221 6.25677 17.2496 6.13294 17.25 6.00273L17.25 6C17.25 5.99717 17.25 5.99434 17.25 5.99152C17.2489 5.87623 17.2266 5.76602 17.1867 5.66463C17.142 5.55068 17.0736 5.44387 16.9815 5.35178L12.3982 0.768483Z" fill="#E5F6FF"/>
                    </svg>
                </div>
            </button>


        </nav>
    </header>
  )
}
