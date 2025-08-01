'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import InsuranceLanding from '@/public/InsuranceLanding.png'
import { ConsultationForm } from '@/components/ContactForm'
import InsurancePolicy2 from '@/public/InsurancePolicy2.png'
import { PatientAdvocateForm } from '@/components/PatientAdvocateForm'
import BookAnAppoitmentButton from '@/components/BookAnAppoitmentButton'
import Blog1 from '@/public/Blogs1.png'
import Blog2 from '@/public/MRI1.png'
import Blog3 from '@/public/Blog3.png'
import { motion } from 'framer-motion'
import ClinicsMap from '@/components/ClinicsMap'
import ContactUsSection from '@/components/ContactUsSection'
import ConciergeServices from '@/public/ConceirgeServices.png'
import BlogsLanding from '@/public/BlogsLanding.png'
import BlogPostCard, { BlogPostProp } from '@/components/BlogPostCard'
import { Input } from '@/components/ui/input'
import { BlogPosts } from '@/components/data/blogs'
import { TextAnimate } from '@/components/magicui/text-animate'
import BlogSearchBar from '@/components/BlogSearchBar'
import { GetBlogs } from './api/get-blogs'
import Link from 'next/link'

const ServicesAndExpertise = [
    {
        title: 'Treatment finder',
        img: Blog1,
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.94464 11.25H6.99951C7.19843 11.25 7.38919 11.329 7.52984 11.4697L8.99951 12.9393L10.4692 11.4697C10.6098 11.329 10.8006 11.25 10.9995 11.25H11.0544C12.422 11.25 13.5243 11.25 14.3913 11.3665C15.2914 11.4875 16.0492 11.7464 16.6512 12.3484C17.2531 12.9503 17.512 13.7081 17.633 14.6083C17.7496 15.4752 17.7495 16.5775 17.7495 17.9451V21C17.7495 21.4142 17.4137 21.75 16.9995 21.75C16.5853 21.75 16.2495 21.4142 16.2495 21V18C16.2495 16.5646 16.2479 15.5635 16.1464 14.8081C16.0477 14.0743 15.8673 13.6858 15.5905 13.409C15.3137 13.1322 14.9252 12.9518 14.1914 12.8531C13.4918 12.7591 12.5813 12.7508 11.3101 12.7501L9.52984 14.5303C9.23695 14.8232 8.76208 14.8232 8.46918 14.5303L6.68892 12.7501C5.41776 12.7508 4.50727 12.7591 3.80763 12.8531C3.07386 12.9518 2.68529 13.1322 2.40852 13.409C2.13176 13.6858 1.95131 14.0743 1.85266 14.8081C1.75111 15.5635 1.74951 16.5646 1.74951 18L1.74951 21C1.74951 21.4142 1.41373 21.75 0.999513 21.75C0.5853 21.75 0.249512 21.4142 0.249512 21L0.249512 17.9451V17.9451C0.249492 16.5775 0.249476 15.4752 0.366036 14.6082C0.487053 13.7081 0.745946 12.9503 1.34786 12.3484C1.94978 11.7464 2.70765 11.4875 3.60776 11.3665C4.47473 11.25 5.57705 11.25 6.94464 11.25ZM4.74951 4.49989C4.74951 2.15268 6.6523 0.249893 8.99951 0.249893C11.3467 0.249893 13.2495 2.15268 13.2495 4.49989L13.2495 5.49989C13.2495 7.8471 11.3467 9.74989 8.99951 9.74989C6.6523 9.74989 4.74951 7.8471 4.74951 5.49989V4.49989ZM8.99951 1.74989C7.48073 1.74989 6.24951 2.98111 6.24951 4.49989V5.49989C6.24951 7.01868 7.48073 8.24989 8.99951 8.24989C10.5183 8.24989 11.7495 7.01868 11.7495 5.49989L11.7495 4.49989C11.7495 2.98111 10.5183 1.74989 8.99951 1.74989ZM13.7495 14.9999C13.7495 14.5857 13.4137 14.2499 12.9995 14.2499C12.5853 14.2499 12.2495 14.5857 12.2495 14.9999V15.7499H11.4995C11.0853 15.7499 10.7495 16.0857 10.7495 16.4999C10.7495 16.9141 11.0853 17.2499 11.4995 17.2499H12.2495V17.9999C12.2495 18.4141 12.5853 18.7499 12.9995 18.7499C13.4137 18.7499 13.7495 18.4141 13.7495 17.9999V17.2499H14.4995C14.9137 17.2499 15.2495 16.9141 15.2495 16.4999C15.2495 16.0857 14.9137 15.7499 14.4995 15.7499H13.7495V14.9999Z" fill="#111315" />
            </svg>
        )
    },
    {
        title: 'Free MRI review',
        img: Blog2,
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.681 0.25H9.62466H9.62465C7.78353 0.249985 6.3255 0.249973 5.18446 0.403112C4.01037 0.560689 3.06019 0.89265 2.31075 1.64078C1.56113 2.38909 1.22834 3.33814 1.07041 4.51081C0.916965 5.6501 0.916977 7.10581 0.916993 8.94349V8.9435V9.05651V9.05652C0.916977 10.8942 0.916965 12.3499 1.07041 13.4892C1.22834 14.6619 1.56113 15.6109 2.31075 16.3592C3.06019 17.1074 4.01037 17.4393 5.18447 17.5969C6.32549 17.75 7.78352 17.75 9.62463 17.75H9.62468H10.917V20.25H7.66699C7.25278 20.25 6.91699 20.5858 6.91699 21C6.91699 21.4142 7.25278 21.75 7.66699 21.75H15.667C16.0812 21.75 16.417 21.4142 16.417 21C16.417 20.5858 16.0812 20.25 15.667 20.25H12.417V17.75H13.7443H13.7444C15.5855 17.75 17.0435 17.75 18.1845 17.5969C19.3586 17.4393 20.3088 17.1074 21.0583 16.3592C22.0889 15.3304 22.3381 13.9128 22.4163 12.0312C22.4336 11.6173 22.112 11.2679 21.6982 11.2506C21.2843 11.2334 20.9349 11.555 20.9176 11.9688C20.8401 13.8318 20.5871 14.7101 19.9985 15.2976C19.5743 15.7211 18.9933 15.9749 17.985 16.1102C16.9553 16.2484 15.5981 16.25 13.688 16.25H9.681C7.77092 16.25 6.41367 16.2484 5.38399 16.1102C4.37576 15.9749 3.79467 15.7211 3.37048 15.2976C2.94648 14.8744 2.69246 14.2948 2.55699 13.289C2.41859 12.2614 2.41699 10.9069 2.41699 9C2.41699 7.09314 2.41859 5.73858 2.55699 4.71102C2.69246 3.70517 2.94648 3.12563 3.37048 2.70237C3.79467 2.27892 4.37576 2.0251 5.38399 1.88978C6.41367 1.75159 7.77092 1.75 9.681 1.75C10.0952 1.75 10.431 1.41421 10.431 1C10.431 0.585787 10.0952 0.25 9.681 0.25ZM10.667 13.25C10.2528 13.25 9.91699 13.5858 9.91699 14C9.91699 14.4142 10.2528 14.75 10.667 14.75H12.667C13.0812 14.75 13.417 14.4142 13.417 14C13.417 13.5858 13.0812 13.25 12.667 13.25H10.667ZM15.917 2.25001V1C15.917 0.585787 15.5812 0.25 15.167 0.25C14.7528 0.25 14.417 0.585787 14.417 1V2.30088C14.0774 2.35268 13.7233 2.46881 13.4296 2.76257C13.1358 3.05633 13.0197 3.41037 12.9679 3.75H11.667C11.2528 3.75 10.917 4.08579 10.917 4.5C10.917 4.91421 11.2528 5.25 11.667 5.25H12.917V6.75H11.667C11.2528 6.75 10.917 7.08579 10.917 7.5C10.917 7.91421 11.2528 8.25 11.667 8.25H12.9679C13.0197 8.58963 13.1358 8.94368 13.4296 9.23744C13.7233 9.53121 14.0774 9.64733 14.417 9.69914V11C14.417 11.4142 14.7528 11.75 15.167 11.75C15.5812 11.75 15.917 11.4142 15.917 11V9.75001H17.417V11C17.417 11.4142 17.7528 11.75 18.167 11.75C18.5812 11.75 18.917 11.4142 18.917 11V9.69914C19.2566 9.64733 19.6107 9.53121 19.9044 9.23744C20.1982 8.94368 20.3143 8.58963 20.3661 8.25H21.667C22.0812 8.25 22.417 7.91421 22.417 7.5C22.417 7.08579 22.0812 6.75 21.667 6.75H20.417V5.25H21.667C22.0812 5.25 22.417 4.91421 22.417 4.5C22.417 4.08579 22.0812 3.75 21.667 3.75H20.3661C20.3143 3.41037 20.1982 3.05633 19.9044 2.76257C19.6107 2.4688 19.2566 2.35268 18.917 2.30087V1C18.917 0.585787 18.5812 0.25 18.167 0.25C17.7528 0.25 17.417 0.585787 17.417 1V2.25001H15.917ZM14.4902 3.82324L14.4927 3.82187C14.4946 3.82086 14.4979 3.81924 14.503 3.81717C14.5247 3.80821 14.5731 3.79291 14.6697 3.77993C14.8804 3.7516 15.1744 3.75001 15.667 3.75001H17.667C18.1596 3.75001 18.4536 3.7516 18.6643 3.77993C18.7609 3.79291 18.8093 3.80821 18.831 3.81717C18.8361 3.81924 18.8394 3.82086 18.8413 3.82187L18.8438 3.82324L18.8451 3.82568C18.8461 3.82761 18.8478 3.83093 18.8498 3.83597C18.8588 3.85775 18.8741 3.90611 18.8871 4.00267C18.9154 4.21339 18.917 4.5074 18.917 5.00001V7.00001C18.917 7.49261 18.9154 7.78662 18.8871 7.99734C18.8741 8.0939 18.8588 8.14226 18.8498 8.16404C18.8478 8.16909 18.8461 8.1724 18.8451 8.17434L18.8438 8.17677L18.8413 8.17815C18.8394 8.17916 18.8361 8.18077 18.831 8.18285C18.8093 8.19181 18.7609 8.2071 18.6643 8.22008C18.4536 8.24841 18.1596 8.25001 17.667 8.25001H15.667C15.1744 8.25001 14.8804 8.24841 14.6697 8.22008C14.5731 8.2071 14.5247 8.19181 14.503 8.18285C14.4979 8.18077 14.4946 8.17916 14.4927 8.17815L14.4902 8.17677L14.4889 8.17434C14.4879 8.1724 14.4862 8.16909 14.4842 8.16404C14.4752 8.14226 14.4599 8.0939 14.4469 7.99734C14.4186 7.78662 14.417 7.49261 14.417 7.00001V5.00001C14.417 4.5074 14.4186 4.21339 14.4469 4.00267C14.4599 3.90611 14.4752 3.85775 14.4842 3.83597C14.4862 3.83093 14.4879 3.82761 14.4889 3.82568L14.4902 3.82324Z" fill="#022968" />
            </svg>
        )
    },
    {
        title: 'Pain assessment',
        img: Blog3,
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.67233 18.4347C8.22966 19.0342 8.99323 19.8547 10.0007 19.8547L9.99975 19.8529C11.0072 19.8529 11.7707 19.0324 12.3281 18.4329C12.3449 18.4151 12.3615 18.3974 12.3779 18.3798C12.4602 18.2922 12.5378 18.2094 12.6104 18.1368C13.1155 17.6271 13.3621 17.5245 14.0771 17.5245C14.1845 17.5245 14.2995 17.5279 14.4188 17.5314L14.4336 17.5318L14.4349 17.5319C15.1562 17.5539 16.1335 17.5837 16.8188 16.9726C16.8793 16.9295 16.9325 16.8764 16.9756 16.8159C17.5861 16.1293 17.5576 15.1476 17.5366 14.4225L17.5362 14.4105C17.5327 14.2946 17.5292 14.1824 17.5292 14.0779C17.5292 13.3619 17.6402 13.1053 18.1856 12.558L18.1869 12.5567C19.2265 11.5226 19.8539 10.8985 19.8539 9.9987C19.8539 9.09881 19.2264 8.47459 18.1866 7.44026L18.1856 7.43928C17.9161 7.17162 17.4807 7.17256 17.213 7.44206C16.9453 7.71156 16.9462 8.14701 17.2157 8.41467C18.0462 9.23967 18.4789 9.6852 18.4789 9.9987C18.4789 10.3122 18.0462 10.7577 17.2139 11.5854C16.4118 12.3902 16.1542 12.9962 16.1542 14.0779C16.1542 14.1927 16.1576 14.3158 16.1611 14.4441L16.1616 14.4619L16.1617 14.4676C16.1764 14.9992 16.1945 15.6582 15.9251 15.9258L15.9232 15.9277C15.6556 16.1944 15.0011 16.1742 14.4758 16.1577C14.3374 16.1531 14.2063 16.1495 14.0771 16.1495C12.9927 16.1495 12.3986 16.397 11.636 17.167C11.5333 17.2696 11.4307 17.3797 11.3216 17.497L11.3203 17.4983C10.9355 17.9116 10.4082 18.4779 9.99975 18.4779C9.59092 18.4779 9.06288 17.9113 8.67788 17.497C8.56972 17.3797 8.46614 17.2688 8.36623 17.1688C7.60081 16.397 7.0068 16.1495 5.92238 16.1495C5.79313 16.1495 5.66208 16.1531 5.52366 16.1577C4.9975 16.1751 4.34391 16.1944 4.07441 15.9268C3.80308 15.6591 3.82232 14.9954 3.8379 14.4628L3.83832 14.4477C3.84184 14.3193 3.84524 14.1952 3.84524 14.0788C3.84524 12.9971 3.58765 12.3911 2.78374 11.5835C1.95324 10.7585 1.52059 10.3131 1.52059 9.99959C1.52059 9.68609 1.95321 9.24061 2.78463 8.41378C3.51796 7.68044 3.84524 6.91134 3.84524 5.92043C3.84524 5.80376 3.84188 5.67949 3.83838 5.55012L3.8379 5.53263C3.82232 5.00372 3.80307 4.3456 4.07257 4.07519C4.33932 3.80385 4.9975 3.82397 5.5255 3.84047C5.66392 3.84505 5.79771 3.84871 5.92238 3.84871C6.90871 3.84871 7.67692 3.5206 8.413 2.78451C9.24075 1.95401 9.68717 1.52043 9.99975 1.52043C10.3123 1.52043 10.7587 1.95401 11.5865 2.78451C11.855 3.05401 12.2905 3.05397 12.5591 2.7863C12.8277 2.51772 12.8286 2.08236 12.5609 1.81378C11.5242 0.772444 10.8981 0.144531 10.0007 0.144531C9.1037 0.144531 8.47781 0.772639 7.44294 1.81117L7.44132 1.81279C6.96007 2.29404 6.54849 2.47281 5.92332 2.47281C5.81593 2.47281 5.70176 2.46942 5.58327 2.46591L5.56856 2.46547C4.81506 2.44255 3.7829 2.41141 3.09723 3.10624C2.41168 3.79362 2.44179 4.821 2.46379 5.57172L2.4638 5.57211L2.46425 5.58704C2.46776 5.7036 2.47114 5.8158 2.47114 5.92043C2.47114 6.55018 2.29242 6.96268 1.81484 7.44027L1.81355 7.44155C0.7739 8.4757 0.146484 9.0998 0.146484 9.99959C0.146484 10.8985 0.773525 11.5222 1.80852 12.5517L1.813 12.5561C2.36025 13.1061 2.47114 13.3628 2.47114 14.0788C2.47114 14.1833 2.46771 14.2954 2.46417 14.4112L2.4638 14.4234L2.46368 14.4278C2.4426 15.1846 2.4138 16.2186 3.1073 16.9039C3.79412 17.5879 4.81669 17.5566 5.56449 17.5337L5.56672 17.5336L5.58159 17.5332C5.70094 17.5297 5.81594 17.5263 5.92332 17.5263C6.63924 17.5263 6.8858 17.629 7.39272 18.1405C7.47705 18.2248 7.57241 18.3265 7.67233 18.4347ZM9.51459 11.403C9.64384 11.5323 9.81799 11.6047 10.0004 11.6047V11.6038H10.0188C10.2076 11.5992 10.3854 11.5167 10.5119 11.3764L18.7619 2.20976C19.0158 1.92742 18.9929 1.49294 18.7106 1.23902C18.4282 0.985104 17.9938 1.00807 17.7398 1.2904L9.97476 9.91799L7.27883 7.22215C7.01024 6.95357 6.57484 6.95357 6.30626 7.22215C6.03767 7.49073 6.03767 7.92609 6.30626 8.19468L9.51459 11.403Z" fill="#111315" />
            </svg>
        )
    }
]

function truncateString(str, maxLength = 172) {
    if (!str) return '';
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
}

export default function Blogs() {
    const [data, setData] = useState(BlogPosts)
    const [blogs, setBlogs] = useState<{ id: number, blog_info: BlogPostProp }[]>([])
    const [loading, setLoading] = useState(false)
    // --- Handler function for when a condition is selected in the search bar ---
    const handleConditionSelect = (blog: BlogPostProp) => {
        console.log("Parent: BlogPostProp selected - ", blog.title);
        setData([blog]); // Update state to show only the selected BlogPostProp
    };

    // --- Handler function for when the search bar is cleared ---
    const handleSearchClear = () => {
        console.log("Parent: Search cleared - Resetting data to full list");
        setData(BlogPosts); // Reset state to the original full list of BlogPostProps
    };

    useEffect(() => {
        setLoading(true)
        const fetchBlogs = async () => {
            const blogs = await GetBlogs();
            setBlogs(blogs);
            setLoading(false)
        }
        fetchBlogs();
    }, []);
    return (
        <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
            {/* Landing */}
            <section className=" w-full h-full flex flex-col relative overflow-hidden order-first" >
                <Image src={BlogsLanding} className=" lg:max-h-[945px] h-full absolute top-0 object-cover object-center self-end w-full xl:pl-[100px]" alt="Doctor Diagnosing a Old Patient" />

                <div className="z-[1] flex flex-col w-full h-full text-left relative pt-60">
                    <div className="lg:w-[60%] w-[95%] h-full absolute left-0 top-0"
                        style={{
                            background: 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
                        }}
                    />

                    <div className='  px-6 xl:px-[80px] z-[2]'>
                        <nav aria-label="Breadcrumb" className='xl:mt-[220px] flex flex-row space-x-[4px] rounded-[62px] w-fit items-center justify-center px-[20px] py-[10px]' style={{ background: 'rgba(255, 255, 255, 0.50)' }}>
                            <ol className="flex space-x-2 text-[#022968]">
                                <li><a href="/about">About</a> /</li>
                                <li><a href="/blogs">Blogs</a></li>
                            </ol>
                        </nav>
                    </div>
                    <div className="px-6 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[12px] lg:w-[63%] xl:w-[55%]">
                        <h1 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 400 }} className="text-[#022968] md:w-[70%] lg:w-[80%] text-3xl sm:text-6xl ">
                            Spine Wellness Blog
                        </h1>
                    </div>

                    <div className="z-[2]  px-6 xl:px-[80px] mt-[24px] w-full sm:w-[70%] lg:w-[45%] pb-8">
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                            }}
                            className="text-white text-shadow-sm text-lg sm:text-2xl"
                        >
                            Get the latest news, updates and insights into spinal surgery and minimally invasive treatments
                        </p>
                    </div>
                </div>
            </section>

            <section className='w-full max-w-[1440px] flex flex-col py-[50px] h-full px-6 xl:px-[40px] md:order-2 order-last'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[24px]'>
                    {
                        ServicesAndExpertise.map((item, index) => (
                            <article className="flex flex-col p-4 rounded-[24px] space-y-[24px] bg-[#FAFAFA] text-[#022968]" key={item.title}>
                                <div className="flex flex-row items-center justify-between">
                                    <div className="rounded-full border border-[#EFF5FF] h-12 w-12 items-center justify-center flex">
                                        <span style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-lg self-center">0{index + 1}</span>
                                    </div>

                                    <div className="bg-[#EFF5FF] rounded-full border border-[#EFF5FF] py-3 px-6"><item.icon /></div>

                                </div>

                                <div className="flex flex-col space-y-[16px]">
                                    <h2 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-2xl">{item.title}</h2>
                                </div>

                                <div >
                                    <Image src={item.img} alt={item.title} className="w-full lg:max-h-[240px] aspect-square h-full object-cover rounded-[24px] lg:h-[240px]" />
                                </div>
                            </article>
                        ))
                    }
                </div>
            </section>

            <section className='w-full max-w-[1440px] flex flex-col py-[50px] h-full px-6 xl:px-[40px] md:order-2  '>
                <div className='space-y-[16px] flex flex-col lg:flex-row justify-between'>
                    <h2 style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 500 }} className='text-[#111315] text-5xl'>Our Latest Blogs</h2>

                    <div className="md:w-[25%] lg:w-[35%] w-full md:mt-0 mt-4"><BlogSearchBar onSelect={handleConditionSelect} onClear={handleSearchClear} blogs={blogs} /></div>
                </div>

                <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8 md:mt-[60px]  p-1 md:gap-[32px] overflow-hidden'>
                    {loading ? (
                        // Animated loading skeletons
                        Array.from({ length: 6 }).map((_, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-[#EFF5FF] rounded-[24px] p-6 flex flex-col animate-pulse shadow-md min-h-[320px]"
                            >
                                <div className="h-48 bg-[#C7E3F6] rounded-[16px] mb-4 w-full" />
                                <div className="h-6 bg-[#B6C6D7] rounded w-3/4 mb-2" />
                                <div className="h-4 bg-[#B6C6D7] rounded w-1/2 mb-2" />
                                <div className="h-4 bg-[#B6C6D7] rounded w-2/3" />
                            </motion.div>
                        ))
                    ) : blogs.length === 0 ? (
                        <motion.div
                            className="col-span-full flex flex-col items-center justify-center py-16"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <svg width="80" height="80" fill="none" viewBox="0 0 80 80" className="mb-6">
                                <circle cx="40" cy="40" r="38" stroke="#5FBBEC" strokeWidth="4" fill="#EFF5FF" />
                                <path d="M25 50c5-8 25-8 30 0" stroke="#5FBBEC" strokeWidth="3" strokeLinecap="round" />
                                <circle cx="32" cy="36" r="3" fill="#5FBBEC" />
                                <circle cx="48" cy="36" r="3" fill="#5FBBEC" />
                            </svg>
                            <motion.h3
                                className="text-[#022968] text-2xl font-semibold mb-2"
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                style={{ fontFamily: 'var(--font-reem-kufi)' }}
                            >
                                No blogs found
                            </motion.h3>
                            <motion.p
                                className="text-[#5B5F67] text-lg text-center max-w-md"
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                We couldn't find any blog posts at the moment. Please check back later or try a different search.
                            </motion.p>
                        </motion.div>
                    ) : (
                        blogs.map((item) => (
                            <BlogPostCard BlogInfo={item.blog_info} key={item.id} backgroundcolor='white' id={item.id} slug={item.slug} />
                        ))
                    )}
                </div>

                <div className=' bg-[#DCDEE1] h-[1px] w-full mt-[40px]' />

                <div className=' mt-[20px] flex flex-row items-center justify-between'>
                </div>


            </section>


            <div className='order-last'><ContactUsSection /></div>
        </main>
    )
}
