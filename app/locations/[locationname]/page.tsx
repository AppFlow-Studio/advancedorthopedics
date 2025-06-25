'use client'
import ClinicsMap from '@/components/ClinicsMap'
import { TextAnimate } from '@/components/magicui/text-animate'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import React, { useEffect, useState } from 'react'
import { clinics } from '@/components/data/clinics'
import ContactUsSection from '@/components/ContactUsSection'
import AAOS from '@/public/AAOS.png';
import ACP from '@/public/ACP.png';
import AOA from '@/public/AOA.png';
import NASS from '@/public/NASS.png';
import Serpent from '@/public/Serpent.png';
import SMIS from '@/public/SMIS.png';
import Image from 'next/image'
import { Marquee } from '@/components/magicui/marquee'
import { redirect } from 'next/navigation'
import Reveal from '@/components/RevealAnimation'
import BookAnAppoitmentButton from '@/components/BookAnAppoitmentButton'
import HomeWhyAO from '@/public/HomeWhyAO-min.jpeg'
import DoctorCard from '@/components/DoctorCard'
import Link from 'next/link'
import { Doctors } from '@/components/data/doctors'
import SlidingDiv from '@/components/SlidingAnimation'
import { DoctorContactForm } from '@/components/DoctorContactForm'
import LocationLanding from '@/public/ConditionDetails.jpeg'




export default function LocationDetails(
    {
        params,
    }: {
        params: Promise<{ locationname: string }>
    }
) {

    const resolvedParams = React.use(params)
    const locationslug = resolvedParams.locationname
    let location = clinics.filter(x => x.slug == locationslug)[0]
    if (location === undefined) {
        return redirect('/404')
    }
    const OurSpecialtyItems = [
        {
            icon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 11.2502C7.19892 11.2502 7.38968 11.3293 7.53033 11.4699L9 12.9396L10.4697 11.4699C10.6103 11.3293 10.8011 11.2502 11 11.2502H11H11.0001C12.3676 11.2502 13.5248 11.2502 14.3918 11.3668C15.2919 11.4878 16.0497 11.7467 16.6517 12.3486C17.2536 12.9505 17.5125 13.7084 17.6335 14.6085C17.75 15.4755 17.75 16.5778 17.75 17.9454V21.0002C17.75 21.4145 17.4142 21.7502 17 21.7502L1 21.7502C0.585789 21.7502 0.250001 21.4145 0.250001 21.0002L0.250001 17.9454V17.9454V17.9453C0.249981 16.5778 0.249965 15.4755 0.366525 14.6085C0.487541 13.7084 0.746435 12.9505 1.34835 12.3486C1.95027 11.7467 2.70814 11.4878 3.60825 11.3668C4.4752 11.2502 5.63238 11.2502 6.99994 11.2502H6.99998H7ZM13 13.7502C13.4142 13.7502 13.75 14.086 13.75 14.5002V15.7502H15C15.4142 15.7502 15.75 16.086 15.75 16.5002C15.75 16.9145 15.4142 17.2502 15 17.2502H13.75V18.5002C13.75 18.9145 13.4142 19.2502 13 19.2502C12.5858 19.2502 12.25 18.9145 12.25 18.5002V17.2502H11C10.5858 17.2502 10.25 16.9145 10.25 16.5002C10.25 16.086 10.5858 15.7502 11 15.7502H12.25V14.5002C12.25 14.086 12.5858 13.7502 13 13.7502ZM9 0.250137C6.65279 0.250137 4.75 2.15293 4.75 4.50014V5.50014C4.75 7.84735 6.65279 9.75014 9 9.75014C11.3472 9.75014 13.25 7.84735 13.25 5.50014L13.25 4.50014C13.25 2.15293 11.3472 0.250137 9 0.250137Z" fill="#0094E0" />
                </svg>
            ),
            title: 'World - Class Expertise',
            body: `Our board-certified ${location.name.replace('Mountain Spine & Orthopedics', '').trim()} orthopedic surgeons bring years of experience and a proven track record of successful outcomes.`
        },
        {
            icon: () => (
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Spine--Streamline-Simple-Icons" height="24" width="24">
                    <path d="M7.157 2.207c0.066 2.004 1.454 3.117 4.221 3.55 2.345 0.368 4.46 0.181 5.151 -1.829C17.874 0.01 14.681 0.985 11.915 0.55S7.051 -1.013 7.157 2.207m0.831 8.23c0.257 1.497 1.652 2.355 3.786 2.297 2.135 -0.059 3.728 -0.892 3.949 -2.507 0.409 -2.988 -1.946 -1.832 -4.08 -1.774 -2.136 0.059 -4.161 -0.952 -3.655 1.984m2.778 6.852c0.424 1.117 1.587 1.589 3.159 1.253 1.569 -0.335 2.656 -0.856 2.568 -2.129 -0.159 -2.357 -1.713 -1.616 -3.283 -1.279 -1.571 0.333 -3.272 -0.039 -2.444 2.155m1.348 5.221c0.123 0.943 0.939 1.5 2.215 1.49 1.279 -0.011 2.248 -0.515 2.412 -1.525 0.308 -1.871 -1.123 -1.175 -2.4 -1.165 -1.28 0.01 -2.47 -0.65 -2.227 1.2" fill="#0094e0" stroke-width="1"></path>
                </svg>
            ),
            title: 'Laser Spine & Radio',
            body: <>Our <a href='/locations/hollywood-fl-orthopedics' className='text-[#022968] underline'>Orthopedic clinic</a> provides access to cutting-edge laser <a href='/treatments/hybrid-cervical-spine-surgery' className=' text-[#022968] underline'>spine procedures</a>. Our targeted treatments give great results with cutting-edge technology that helps {location.name.replace('Mountain Spine & Orthopedics', '').trim()} residents heal faster.</>
        },
        {
            icon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.02299 3.376C7.03911 3.15406 7.06365 2.97295 7.09643 2.82372C7.15781 2.54433 7.23372 2.44399 7.27636 2.40136C7.31899 2.35872 7.41933 2.28281 7.69872 2.22143C7.98944 2.15756 8.40114 2.125 9 2.125H13C13.5989 2.125 14.0106 2.15756 14.3013 2.22143C14.5807 2.28281 14.681 2.35872 14.7236 2.40136C14.7663 2.44399 14.8422 2.54433 14.9036 2.82372C14.9364 2.97295 14.9609 3.15406 14.977 3.376C14.6818 3.37499 14.3738 3.375 14.0527 3.375H14.0527H14.0527H7.94732H7.94731H7.9473C7.62618 3.375 7.31821 3.37499 7.02299 3.376ZM5.01648 3.41956C5.03581 3.05074 5.07429 2.70741 5.14301 2.39459C5.25632 1.8788 5.46503 1.38426 5.86214 0.987143C6.25926 0.59003 6.7538 0.381319 7.26959 0.268009C7.77406 0.157186 8.35786 0.125 9 0.125H13C13.6421 0.125 14.2259 0.157186 14.7304 0.268009C15.2462 0.381319 15.7407 0.59003 16.1379 0.987143C16.535 1.38426 16.7437 1.8788 16.857 2.39459C16.9257 2.70741 16.9642 3.05074 16.9835 3.41956C17.325 3.43802 17.6415 3.46412 17.9342 3.50102C18.9621 3.63057 19.8113 3.90463 20.4878 4.5389C21.1712 5.1796 21.4729 5.99471 21.6143 6.98061C21.75 7.92738 21.75 9.13186 21.75 10.6289V10.6289V10.6289V10.6289V12.6211V12.6211V12.6211V12.6211C21.75 14.1181 21.75 15.3226 21.6143 16.2694C21.4729 17.2553 21.1712 18.0704 20.4878 18.7111C19.8113 19.3454 18.9621 19.6194 17.9342 19.749C16.9342 19.875 15.6579 19.875 14.0527 19.875H7.94733C6.3421 19.875 5.06579 19.875 4.06576 19.749C3.03794 19.6194 2.18873 19.3454 1.51217 18.7111C0.828766 18.0704 0.527127 17.2553 0.385739 16.2694C0.249962 15.3226 0.249979 14.1181 0.250001 12.6211V12.6211V12.6211V12.6211V10.6289V10.6289V10.6289V10.6289C0.249979 9.13188 0.249962 7.92739 0.385739 6.98061C0.527127 5.99471 0.828765 5.1796 1.51217 4.5389C2.18873 3.90463 3.03794 3.63057 4.06576 3.50102C4.35855 3.46412 4.67501 3.43802 5.01648 3.41956ZM11 7.625C11.5523 7.625 12 8.07272 12 8.625V10.625H14C14.5523 10.625 15 11.0727 15 11.625C15 12.1773 14.5523 12.625 14 12.625H12V14.625C12 15.1773 11.5523 15.625 11 15.625C10.4477 15.625 10 15.1773 10 14.625V12.625H8C7.44772 12.625 7 12.1773 7 11.625C7 11.0727 7.44772 10.625 8 10.625H10V8.625C10 8.07272 10.4477 7.625 11 7.625Z" fill="#0094E0" />
                </svg>
            ),
            title: 'Band Aid Back Surgery',
            body: <><a href='/' className='text-[#022968] underline'>Mountain Spine & Orthopedics</a> is one of the only providers of Band Aid Back Surgery, a revolutionary minimally-invasive technique that delivers exceptional results with faster recovery times.</>
        },
        {
            icon: () => (
                <svg className="text-[#0094E0]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 22 22">
                    <path d="m17.9646 5.49185.3705.37054c.3906.39052 1.0237.39052 1.4142 0 .3906-.39053.3906-1.02369 0-1.41422L17.594 2.29283c-.3905-.39052-1.0237-.39052-1.4142 0-.3905.39053-.3905 1.02369 0 1.41422l.3706.37059-.7412.74118-.3706-.37059c-.3905-.39053-1.0237-.39053-1.4142 0L9.71372 8.75891c-.39053.39053-.39053 1.02369 0 1.41419l.34948.3495-.77031.7703c-.39053.3905-.39053 1.0237 0 1.4142.39052.3905 1.02371.3905 1.41421 0l.7703-.7703.3917.3917c.3905.3905 1.0236.3905 1.4142 0l2.0628-2.0629c.4145.6745.6539 1.4706.6539 2.3256 0 2.4448-1.9584 4.4087-4.3521 4.4087-1.0458 0-2.00787-.3737-2.76051-.9999H11c.5523 0 1-.4477 1-1s-.4477-1-1-1H5c-.55228 0-1 .4477-1 1s.44772 1 1 1h1.26803C6.92225 17.0489 7.8715 17.8952 9 18.4182V20H5c-.55228 0-1 .4477-1 1s.44772 1 1 1h14c.5523 0 1-.4477 1-1s-.4477-1-1-1h-4v-1.9637c1.8034-1.1328 3-3.1517 3-5.4451 0-1.4061-.4498-2.70897-1.2126-3.76687l.8066-.80655c.3905-.39052.3905-1.02369 0-1.41421l-.3706-.37054.7412-.74118Z" />
                </svg>

            ),
            title: 'Minimally Invasive',
            body: 'We specialize in minimally invasive treatments that minimize tissue damage, reduce recovery time, and help you get back to your life faster with less pain and scarring.'
        },
    ]
    return (
        <main className='w-full flex-col items-center justify-center bg-white h-full'>
            <section className="w-full h-full flex flex-col relative overflow-hidden  justify-between" >
                <Image src={LocationLanding} priority={true} layout='fill' className="h-full absolute top-0 object-cover object-center sm:object-center self-end w-full md:pl-[100px] pl-8" alt="Doctor Diagnosing a Old Patient" />
                <div className="lg:w-[60%] z-[1] h-full absolute left-0 top-0 md:w-[85%] w-full"
                    style={{
                        background: 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
                    }}
                />

                <div className="w-full h-full flex flex-row relative overflow-hidden  justify-between sm:py-20">
                    <div className="z-[2] flex flex-col xl:w-[50%] sm:w-[70%] w-full h-full  text-left xl:px-6 py-4 relative xl:pb-[160px]">

                        <SlidingDiv position="left" className="z-[2]"
                        >
                            <div className="xl:px-[80px] px-8  xl:w-[90%] space-y-4  ">
                                <div className=' md:flex hidden flex-row space-x-[4px] rounded-[62px] w-fit items-center justify-center px-[20px] py-[10px]'
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.50)'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "var(--font-reem-kufi)",
                                            fontWeight: 400,
                                        }}
                                        className="text-[#111315]"
                                    >
                                        Location
                                    </span>

                                    <span
                                        style={{
                                            fontFamily: "var(--font-reem-kufi)",
                                            fontWeight: 400,
                                        }}
                                        className="text-[#111315]"
                                    >
                                        /
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: "var(--font-reem-kufi)",
                                            fontWeight: 400,
                                        }}
                                        className="text-[#2258AC]"
                                    >
                                        {location.region}
                                    </span>
                                </div>
                                <h1
                                    style={{
                                        fontFamily: "var(--font-reem-kufi)",
                                        fontWeight: 500,
                                    }}
                                    className="text-white text-5xl sm:text-6xl xl:text-6xl text-shadow-sm"
                                >
                                    Welcome to Mountain Spine & Orthopedics {location.name.replace('Mountain Spine & Orthopedics', '').trim()}
                                </h1>
                            </div>
                        </SlidingDiv>
                        <SlidingDiv position="left" className="z-[2] sm:hidden block px-4 mb-4">
                            (
                            <DoctorContactForm backgroundcolor={'#0xFF'} buttonText="Get Your Free Consultation" header="" />
                            ) : (
                            <DoctorContactForm backgroundcolor={'#0xFF'} buttonText="Get Your Free Consultation" header="Book an Appointment" />
                            )
                        </SlidingDiv>
                        <SlidingDiv position="left" className="z-[2]">
                            <div className="xl:px-[80px] px-8 mb-[24px] xl:w-full md:w-[80%] lg:w-full md:text-left sm:text-center mt-4">
                                <p
                                    style={{
                                        fontWeight: 400,
                                    }}
                                    className="text-white text-lg lg:text-xl text-shadow-sm"
                                >
                                    Experience the future of orthopedic care at our modern facility, where our expert team combines advanced technology with personalized treatment plans to deliver fast, effective minimally invasive procedures.<br />
                                    {location.region} most trusted spine and joint care center, serving Florida families since 2009.
                                </p>
                            </div>
                        </SlidingDiv>

                        <SlidingDiv position="left" className="z-[2]">
                            <div className="xl:px-[80px] px-8 my-[24px] xl:w-full flex md:flex-row flex-col md:space-y-0 space-y-4 md:space-x-[16px]">
                                <div className=""><BookAnAppoitmentButton /></div>
                                <a href="tel:5612239959"
                                    className="h-full max-h-[56px] group flex-row hover:cursor-pointer lg:flex hidden  px-[32px] py-[16px] rounded-[62px] relative items-center  justify-center `md:justify-between bg-[white] text-[#0094E0]  w-full md:w-fit font-[500] text-[14px] "
                                >
                                    <p className="group-hover:scale-[1.1] transition-all duration-300 ease-in-out">Contact Us</p>
                                    <div className='pl-[10px] group-hover:translate-x-1 transition-all duration-300 ease-in-out'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                                            <path d="M12.3982 0.768483C12.0402 0.410504 11.4598 0.410506 11.1018 0.768488C10.7438 1.12647 10.7438 1.70687 11.1018 2.06485L14.1203 5.08333H1.66667C1.16041 5.08333 0.75 5.49374 0.75 6C0.75 6.50626 1.16041 6.91667 1.66667 6.91667H14.1203L11.1018 9.93516C10.7439 10.2931 10.7439 10.8735 11.1019 11.2315C11.4598 11.5895 12.0402 11.5895 12.3982 11.2315L16.9766 6.65303C16.9935 6.63637 17.0098 6.61905 17.0254 6.60112C17.0873 6.52997 17.1365 6.45154 17.1728 6.36885C17.2221 6.25677 17.2496 6.13294 17.25 6.00273L17.25 6C17.25 5.99717 17.25 5.99434 17.25 5.99152C17.2489 5.87623 17.2266 5.76602 17.1867 5.66463C17.142 5.55068 17.0736 5.44387 16.9815 5.35178L12.3982 0.768483Z" fill="#0094E0" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </SlidingDiv>
                    </div>

                    <div className="w-[50%] self-end h-full sm:flex hidden flex-col z-[2] xl:mb-32" >
                        <div className="xl:w-[65%] w-[95%] rounded-2xl bg-[rgba(255,255,255,0.50)] mx-auto"><DoctorContactForm backgroundcolor={'#0xFF'} buttonText="Get Your Free Consultation" header="Book an Appointment" /></div>
                    </div>
                </div>

                <div className="z-[2] w-full flex flex-row items-center justify-evenly xl:absolute xl:bottom-0 xl:left-0 xl:right-0 bg-white py-12 pt-[32px] pb-[50px]"
                    style={{
                        background: 'linear-gradient(0deg, #6FC2ED 47.98%, rgba(118, 197, 238, 0.00) 100%)'
                    }}
                >
                    <Marquee pauseOnHover className="w-full" >
                        {
                            [AAOS, ACP, AOA, NASS, Serpent, SMIS].map((item, index) => (
                                <Image key={index} src={item} alt="Logo" className=" lg:h-[40px] h-10 md:h-8 object-contain mx-[20px]" draggable={false} />
                            ))
                        }
                    </Marquee>
                </div>

            </section>
            {/* Our Speciality */}
            <section className=" w-full max-w-[1440px] flex flex-col py-[50px] h-full px-2 md:px-[40px] items-center justify-center space-y-[60px]">
                <Reveal className="w-full" width="100%">
                    <div className=" flex xl:flex-row space-x-[60px] flex-col xl:space-y-0 space-y-8 w-full">
                        <h2
                            style={{
                                fontFamily: "var(--font-reem-kufi)",
                                fontWeight: 500,
                                color: '#111315'
                            }}
                            className=" text-6xl w-[100%]"
                        >
                            Why Choose<br /> {location.name}
                        </h2>

                        <div>
                            <p
                                style={{
                                    fontFamily: "var(--font-reem-kufi)",
                                    fontWeight: 400,
                                    color: '#5B5F67'
                                }}
                                className="text-lg "
                            >
                                Trust {location.name} for expert care, compassionate service, and results that make a difference. Your mobility and well-being are our top priority!
                            </p>

                            <div className=" mt-[40px] xl:w-[50%] w-full md:w-fit"><BookAnAppoitmentButton /></div>
                        </div>
                    </div>
                </Reveal>

                <div className=" flex xl:flex-row flex-col w-full gap-[32px] xl:items-stretch">
                    <div className=" xl:w-[50%] w-full rounded-[20px] overflow-hidden"><Image src={HomeWhyAO} className=" w-full h-full md:aspect-video aspect-square  object-cover" alt="Doctor Diagnosing Patient " /></div>

                    <div className=" xl:w-[50%] w-full flex flex-col space-y-[32px] ">
                        <Reveal className="w-full" width="100%">
                            <div className=" flex flex-col w-full space-y-[16px]">
                                <h3
                                    style={{
                                        fontFamily: "var(--font-reem-kufi)",
                                        fontWeight: 500,
                                        color: '#111315'
                                    }}
                                    className=" text-4xl"
                                >
                                    Our {location.name.replace('Mountain Spine & Orthopedics', '').trim()} Clinic Specialty
                                </h3>

                                <p
                                    style={{
                                        fontFamily: "var(--font-reem-kufi)",
                                        fontWeight: 500,
                                        color: '#5B5F67'
                                    }}
                                    className=" text-lg"
                                >
                                    At Mountain Spine & Orthopedics, we provide exceptional care with the newest <a href='/treatments' className='underline text-[#022968]'>treatments</a>. We put patients first.  Here's why <a href='https://www.orlando.gov/Home' className='underline text-[#022968]'>Orlando</a> families choose us:
                                </p>
                            </div>
                        </Reveal>

                        <Reveal className="w-full" width="100%" >
                            <div className=" grid grid-cols-1 md:grid-cols-2 rounded-[20px] overflow-hidden w-full">
                                {
                                    OurSpecialtyItems.map((item, index) => (
                                        <div key={index} className={`flex flex-col space-y-[16px] ${index == 1 || index == 2 ? 'bg-[#EFF5FF]' : 'bg-[#E5F6FF]'} p-6`}>
                                            <div className=" rounded-full bg-white p-1 items-center justify-center flex w-[20%] px-[12px] py-[15px] ">
                                                <item.icon />
                                            </div>
                                            <h4
                                                style={{
                                                    fontFamily: "var(--font-reem-kufi)",
                                                    fontWeight: 500,
                                                    color: '#022968'
                                                }}
                                                className=" text-xl"
                                            >{item.title}</h4>
                                            <p
                                                style={{
                                                    fontFamily: "var(--font-inter)",
                                                    fontWeight: 500,
                                                    color: '#5B5F67'
                                                }}
                                                className="text-md"
                                            >{item.body}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </Reveal>

                    </div>
                </div>
            </section>
            <ClinicsMap startingClinic={location} />
            <div className="z-[2] w-full flex flex-row items-center justify-evenly bg-white py-[80px]"
                style={{
                    background: 'linear-gradient(0deg, #6FC2ED 47.98%, rgba(118, 197, 238, 0.00) 100%)'
                }}
            >
                <Marquee pauseOnHover className='w-full' >
                    {
                        [AAOS, ACP, AOA, NASS, Serpent, SMIS].map((item, index) => (
                            <Image key={index} src={item} alt="Logo" className=" h-[40px] object-contain mx-[20px]" />
                        ))
                    }
                </Marquee>
            </div>

            <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-2 md:px-[40px]">
                <div className=" flex md:flex-row flex-col">
                    <div className=" flex flex-col space-y-[24px] lg:w-[50%] w-full">
                        <h2
                            style={{
                                fontFamily: "var(--font-reem-kufi)",
                                fontWeight: 500,
                            }}
                            className="text-black text-5xl text-left w-full"
                        >Meet Our Experts</h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-[#54535C] lg:w-[50%] w-full"
                        >
                            Highly skilled and compassionate professionals ready to care for you
                        </p>
                    </div>

                    <div className="md:w-[50%] flex items-center md:justify-end w-full md:mt-0 mt-4">
                        <Link
                            href={'/about/meetourdoctors'}
                            className="bg-white border hover:cursor-pointer border-[#022968] px-[20px] py-[10px] space-x-[10px] flex flex-row items-center justify-center rounded-[62px]">
                            <span
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 400,
                                }}
                                className="text-[#022968]"
                            >View all</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
                                <path d="M12.3982 0.268483C12.0402 -0.0894963 11.4598 -0.089494 11.1018 0.268488C10.7438 0.62647 10.7438 1.20687 11.1018 1.56485L14.1203 4.58333H1.66667C1.16041 4.58333 0.75 4.99374 0.75 5.5C0.75 6.00626 1.16041 6.41667 1.66667 6.41667H14.1203L11.1018 9.43516C10.7439 10.2931 10.7439 10.3735 11.1019 10.7315C11.4598 11.0895 12.0402 11.0895 12.3982 10.7315L16.9766 6.15303C16.9935 6.13637 17.0098 6.11905 17.0254 6.10112C17.0873 6.02997 17.1365 5.95154 17.1728 5.86885C17.2221 5.75677 17.2496 5.63294 17.25 5.50273L17.25 5.5C17.25 5.49717 17.25 5.49434 17.25 5.49152C17.2489 5.37622 17.2266 5.26602 17.1867 5.16463C17.142 5.05068 17.0736 4.94387 16.9815 4.85178L12.3982 0.268483Z" fill="#022968" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className=" mt-[60px] grid sm:grid-cols-3 grid-cols-1 xl:gap-x-[50px] sm:gap-x-10 space-y-8 sm:space-y-0  ">
                    <div className='sm:col-span-1'><DoctorCard doctor={Doctors[0]} /></div>
                    <div className='flex flex-col space-y-[32px] col-span-2'>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 500,
                                color: '#111315'
                            }}
                            className='xl:text-xl lg:text-md text-sm xl:w-[90%] self-center h-full xl:ml-20'
                        >

                            {location?.paragraph?.split('[PARAGRAPH BREAK]').map((paragraph, index, array) => (
                                <React.Fragment key={index}>
                                    {paragraph}
                                    {index < array.length - 1 && (
                                        <>
                                            <br /><br />
                                        </>
                                    )}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full max-w-[1440px] flex flex-col py-10 space-y-8  h-full px-2 md:px-[40px]">
                {location.specialists}
                {location.skilled}
                {location.whyChoose}
                {location.easyToReach}
                {location.nearby}
                {location.advancedTreatments}
                {location.whatOurPatientsSay}
            </section>
            {/* <RatingsAndReviews /> */}
        </main>
    )
}
