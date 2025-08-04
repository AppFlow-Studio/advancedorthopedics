'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FAQsLanding from '@/public/FAQs.jpeg'
import { Minus, Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import FAQsDocotorTestimony from '@/public/FAQsDoctorTestimony.png'

export default function FAQsSection({header, faqItems} : { header : React.ReactElement, faqItems : {question : string, answer : React.ReactElement}[]}) {
    const [openItem, setOpenItem] = useState<number>(0)

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? -1 : index)
    }

   
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
        <section className="max-w-[1440px] w-full h-full flex flex-col relative overflow-hidden space-y-[60px] px-6 xl:px-[100px] py-[50px]">
            <h2
            style={{
                fontFamily : 'var(--font-reem-kufi)',
                fontWeight : 500,
            }}
            className=' text-black text-6xl text-center w-[90%] self-center'
            >{header}</h2>

            <div className="space-y-[20px] flex flex-col">
                {faqItems.map((item, index) => (
                <div
                    key={index}
                    className={`border border-[#DCDEE1] rounded-[20px] overflow-hidden bg-[#FAFAFA] ${openItem === index ? "shadow-md" : ""}`}
                >
                    <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    aria-expanded={openItem === index}
                    >
                    <span 
                    style={{
                        fontFamily : 'var(--font-reem-kufi)',
                        fontWeight : 500,
                    }}
                    className={`${openItem === index ? 'text-black' : 'text-[#5B5F67]'} text-2xl`}
                    >{item.question}</span>
                    <motion.div initial={false} animate={{ rotate: openItem === index ? 0 : 0 }}>
                        {openItem === index ? (
                        <Minus className="h-5 w-5 text-black" />
                        ) : (
                        <Plus className="h-5 w-5 text-[#838890]" />
                        )}
                    </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                    {openItem === index && (
                        <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden text-[#54535C]"
                        >
                        <div className="px-6 pb-6 text-gray-600"
                        style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                        }}
                        
                        >{item.answer}</div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
                ))}
            </div>
        </section>
    </main>
  )
}
