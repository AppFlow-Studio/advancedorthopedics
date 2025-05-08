import React from 'react'
import FAQsDocotorTestimony from '@/public/FAQsDoctorTestimony.png'
import Image from 'next/image'
export default function DoctorsTestitmonial(
    {testimonial} : { testimonial : React.JSX.Element }
) {
  return (
    <section className=' xl:mt-[80px] py-[50px] max-w-[1440px]  px-6 xl:px-[80px] w-full lg:max-h-[680px] lg:h-[680px]'>
        <div className=' h-full w-full rounded-[40px] bg-[#EDEEE9] p-8 xl:p-[80px] relative border overflow-clip'>
            <Image src={FAQsDocotorTestimony} alt='Happy Female Doctor' className=' md:flex hidden absolute -bottom-8 left-[40%] w-[75%] z-20'/>
            <h1 
            style={{
                fontFamily : 'var(--font-reem-kufi)',
                fontWeight : 500,
            }}
            className=' text-[#5B5F67] md:w-[55%] w-full text-xl md:text-2xl'
            >
                {testimonial}
            </h1>
        </div>
    </section>
    )
}
