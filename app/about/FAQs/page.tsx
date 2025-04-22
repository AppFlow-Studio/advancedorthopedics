'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FAQsLanding from '@/public/FAQs.jpeg'
import { Minus, Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import FAQsDocotorTestimony from '@/public/FAQsDoctorTestimony.png'
import { TextAnimate } from '@/components/magicui/text-animate'
export default function FAQs() {
    const [openItem, setOpenItem] = useState<number>(0)

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? -1 : index)
    }

    const faqItems = [
        {
        question: 'What does "minimally invasive surgery" mean?',
        answer: (
            <>
            <p className="mb-3">
                Gone are the days of undergoing traditional open back surgery and a long, difficult recovery for those who
                suffer from neck or back conditions – minimally invasive surgery is the safer, more effective, and less
                painful alternative.
            </p>
            <p>
                Mountain Spine & Orthopedics has developed a special minimally invasive technique that lessens recovery time and the
                pain associated with surgery by using tiny incisions and preserving the muscles and tissue surrounding your
                spine. The results are longer lasting and more effective than traditional surgery. For more on minimally 
                invasive methodology, check out our blog on what "minimally invasive" really means and how it can
                help you find long-term pain relief.
            </p>
            </>
        ),
        },
        {
        question: "How experienced are your surgeons?",
        answer: (
            <p>
            Our surgeons have over 20 years of combined experience in minimally invasive spine surgery. Each surgeon is
            board-certified and fellowship-trained, specializing in the latest techniques and technologies for spine care.
            They have successfully performed thousands of procedures with excellent patient outcomes.
            </p>
        ),
        },
        {
        question: "What do past patients have to say about their olss experience?",
        answer: (
            <p>
            Our patients consistently report high satisfaction rates with their Mountain Spine & Orthopedics experience. Many highlight the
            personalized care they received, the effectiveness of their treatment, and the significant improvement in
            their quality of life following surgery. We maintain a 95% patient satisfaction rate, with many patients
            returning to normal activities within weeks of their procedure.
            </p>
        ),
        },
        {
        question: "What non-surgical alternatives do you offer?",
        answer: (
            <p>
            We offer a comprehensive range of non-surgical treatments including physical therapy, pain management
            injections, medication management, chiropractic care, acupuncture, and lifestyle modification programs. Our
            team believes in exploring all conservative treatment options before considering surgical intervention.
            </p>
        ),
        },
        {
        question: "How do I begin the process of finding a treatment with Mountain Spine & Orthopedics?",
        answer: (
            <p>
            The process begins with scheduling an initial consultation with one of our spine specialists. During this
            appointment, we'll review your medical history, perform a physical examination, and discuss any imaging
            studies you may have. Based on this assessment, we'll develop a personalized treatment plan tailored to your
            specific condition and needs.
            </p>
        ),
        },
        {
        question: "How do I know which treatment is the right one for me?",
        answer: (
            <p>
            Determining the right treatment involves a collaborative decision-making process between you and your care
            team. We consider factors such as your specific diagnosis, symptom severity, previous treatments, overall
            health, and personal goals. We'll thoroughly explain all available options, including their benefits and
            risks, to help you make an informed decision about your care.
            </p>
        ),
        },
        {
        question: "Is spine surgery covered by insurance?",
        answer: (
            <p>
            Most spine surgeries are covered by insurance when deemed medically necessary. Our dedicated insurance
            specialists will work directly with your insurance provider to verify coverage, obtain necessary
            authorizations, and explain any out-of-pocket costs before proceeding with treatment. We accept most major
            insurance plans and can discuss payment options for any uncovered services.
            </p>
        ),
        },
    ]
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
        <Image src={FAQsLanding} className=" max-h-[945px] h-full absolute top-0 object-cover object-top pt-10 self-end w-full max-w-[1440px] xl:w-[1440px] pl-[100px]" alt="Doctor Diagnosing a Old Patient"/>

        <div className="z-[1] flex flex-col w-full h-full  text-left relative py-[302px]">
            <div className="w-[565px] h-full absolute left-0 top-0"
            style={{
            background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
            }}
            />
            
        <div className='px-[80px] z-[2]'>
            <div className='flex flex-row space-x-[4px] rounded-[62px] w-fit items-center justify-center px-[20px] py-[10px]'
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
                    About
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
                    FAQ's
                </h1>
            </div>
        </div>
        <div className="px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[12px] w-[58%]">
            <TextAnimate animation="blurInUp" by="character" once
            style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 400,
            }}
            className="text-[#022968] text-6xl"
            >
                Frequently Asked Spine Surgery Questions
            </TextAnimate>
        </div>
        </div>
        </section>

        <section className="max-w-[1440px] w-full h-full flex flex-col relative overflow-hidden space-y-[60px] px-[100px] py-[50px]">
            <h1
            style={{
                fontFamily : 'var(--font-reem-kufi)',
                fontWeight : 500,
            }}
            className=' text-black text-6xl text-center w-[90%] self-center'
            >Your Questions Answered: Spine Surgery FAQs From Our Patients</h1>

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

        <section className=' mt-[80px] py-[50px] max-w-[1440px] px-[80px] w-full max-h-[680px] lg:h-[680px]'>
            <div className=' h-full w-full rounded-[40px] bg-[#EDEEE9] p-[80px] relative border overflow-clip'>
                <Image src={FAQsDocotorTestimony} alt='Happy Female Doctor' className=' absolute -bottom-8 left-[40%] w-[75%] z-20'/>
                <h1 
                 style={{
                    fontFamily : 'var(--font-reem-kufi)',
                    fontWeight : 500,
                }}
                className=' text-[#5B5F67] w-[55%] text-2xl'
                >
                    At Mountain Spine & Orthopedics, we take the time to listen to each patient to provide you with a positive and individualized treatment experience. We believe in equipping you with the knowledge needed to make an informed and confident decision about your spine care. View some of our commonly-asked questions.
                </h1>
            </div>
        </section>
    </main>
  )
}
