import React from 'react'
import FAQsDocotorTestimony from '@/public/FAQsDoctorTestimony.png'
import Image from 'next/image'
export default function DoctorsTestitmonial(
    {testimonial} : { testimonial : React.JSX.Element }
) {
  return (
    <section className='py-[50px] max-w-[1440px] px-[80px] w-full max-h-[680px] lg:h-[680px]'>
        <div className=' h-full w-full rounded-[40px] bg-[#EDEEE9] p-[80px] relative border overflow-clip'>
            <Image src={FAQsDocotorTestimony} alt='Happy Female Doctor' className=' absolute -right-48 -bottom-8 z-20 w-[75%] '/>
            <h1 
            style={{
                fontFamily : 'var(--font-reem-kufi)',
                fontWeight : 500,
            }}
            className=' text-[#5B5F67] w-[55%] text-2xl '
            >
                {testimonial}
            </h1>
        </div>
    </section>
    )
}
