// app/area-of-speciality/page.tsx
'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Components & Data - Adjust paths as needed
import Landing from '../../public/AreaOfSpecLanding.jpeg' // Assuming path is correct
import BookAnAppoitmentButton from '@/components/BookAnAppoitmentButton' // Assuming component exists
import ConditionCard, { ConditionInfoProp } from '@/components/ConditionCard'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import ConditionsSearchBar from '@/components/ConditionsSearchBar'
import { Conditions } from '@/components/data/conditions' // Import the data array
import { AnimatedList } from '@/components/magicui/animated-list' // Assuming component exists
import { TextAnimate } from '@/components/magicui/text-animate' // Assuming component exists

export default function AreaOfSpeciality() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  // Initialize state with the full list of conditions
  // Use the imported 'Condition' type for better type safety
  const [data, setData] = useState<ConditionInfoProp[]>(Conditions);
  const paginationRef = useRef<HTMLDivElement>(null); // Type the ref

  // Calculate items for the current page based on 'data' state
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Ensure data is an array before slicing. Provide an empty array as fallback.
  const currentItems = Array.isArray(data) ? data.slice(indexOfFirstItem, indexOfLastItem) : [];
  const totalPages = Array.isArray(data) ? Math.ceil(data.length / itemsPerPage) : 1;

  const paginate = (pageNumber: number) => {
    // Ensure page number is within valid range
    const newPage = Math.max(1, Math.min(pageNumber, totalPages));
    setCurrentPage(newPage);
  };

  // Scroll to top of pagination section when page changes (except for initial load)
  useEffect(() => {
    if (paginationRef.current && currentPage !== 1) {
      // Small delay can sometimes help ensure rendering is complete before scrolling
      setTimeout(() => {
         paginationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [currentPage]);

  // --- Handler function for when a condition is selected in the search bar ---
  const handleConditionSelect = (condition: Condition) => {
    console.log("Parent: Condition selected - ", condition.title);
    setData([condition]); // Update state to show only the selected condition
    setCurrentPage(1);    // Reset to page 1
  };

  // --- Handler function for when the search bar is cleared ---
  const handleSearchClear = () => {
    console.log("Parent: Search cleared - Resetting data to full list");
    setData(Conditions); // Reset state to the original full list of conditions
    setCurrentPage(1);    // Reset to page 1
  };

  return (
    <main className="w-full flex flex-col items-center justify-center bg-white h-full">
      {/* Landing Section */}
      <section className="w-full h-full flex flex-col relative overflow-hidden">
        
         <div
          style={{ background: 'white', filter: 'blur(30px)' }}
          className="w-full h-[120px] absolute top-0 z-[1]"
        />
        <Image
          src={Landing}
          alt="Doctor Diagnosing a Old Patient"
          className=" h-full absolute top-0 md:object-cover object-cover object-center pt-16 w-full"
        />
        <div className="z-[1] flex flex-col w-full h-full text-left relative pt-60">
         <div className="lg:w-[60%] w-[95%] h-full absolute left-0 top-0"
          style={{
            background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
          }}
          />
          <div className=" px-6 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start lg:mt-60  md:mt-[220px] w-full lg:w-[55%]">
            <TextAnimate
              animation="blurInUp"
              by="word"
              once
              style={{
                fontFamily: 'var(--font-reem-kufi)',
                fontWeight: 400,
              }}
              className="text-[#022968]  text-4xl sm:text-6xl xl:text-6xl "
            >
              Conditions
            </TextAnimate>
          </div>
          <div className="z-[2] px-6 xl:px-[80px] mt-[24px]  lg:w-[50%]">
            <p
              style={{ fontWeight: 400, lineHeight: '148%' }}
              className="text-shadow-sm text-white text-xl lg:text-2xl"
            >
              Not sure which spine condition you might have? 
              <br className='md:flex hidden'/>{' '}
               Find out with our 2-minute Condition Checker.
            </p>
          </div>
          <div className=" mt-[40px] px-6 xl:px-[80px] z-[2] w-fit pb-6">
            <Link
              href="/condition-check"
              className="max-h-[56px] h-full px-[32px] py-[16px] rounded-[62px] flex bg-[#0094E0] text-white text-[14px] font-semibold w-full justify-center items-center hover:cursor-pointer"
            >
              <h1
                style={{
                  fontFamily: 'var(--font-reem-kufi)',
                  fontWeight: 500,
                  fontSize: '16px',
                }}
              >
                Condition Checker
              </h1>
            </Link>
          </div>
        </div>
      </section>

      {/* Tell us Your Story Section */}
      <section className="max-w-[1440px] w-full flex flex-col py-[50px] px-6 xl:px-[80px] space-y-[24px]">
         {/* ... (rest of your 'Tell us Your Story' JSX - no changes needed here) ... */}
         <div className="flex flex-col space-y-[16px]">
          <h1
            style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 500 }}
            className="text-[#111315] text-5xl"
          >
            We are Here to Listen, Tell us your Story
          </h1>
          <h1
            style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}
            className="text-[#5B5F67] text-xl lg:w-[75%]"
          >
            Do you have a spinal condition that’s causing you chronic pain intense enough to interfere with your life or day-to-day activities? Are you afraid you’ll never be able to get your pain under control or that it might continue to worsen as you age?
          </h1>
        </div>
        <div className="flex flex-col space-y-[16px]">
          <h1
            style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 500 }}
            className="text-[#111315] text-2xl "
          >
            WELL, YOU’RE NOT ALONE.
          </h1>
          <h1
            style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}
            className="text-[#5B5F67] text-xl lg:w-[75%]"
          >
            Many people with spinal disorders feel frustrated, confused, and helpless about their conditions. As many as 500,000 people suffer from some form of spinal injury each year.
            <br />
            <br />
            At Mountain Spine & Care, we work to help you understand your symptoms, diagnose your condition and inform you of the various treatments. Below is an overview of the most common types of spine conditions, as well as other orthopedic conditions.
          </h1>
        </div>
      </section>

      {/* All Our Conditions Section */}
      <section className="max-w-[1440px] w-full flex flex-col py-[50px] xl:px-[80px] px-2 space-y-[24px]">
        {/* Section Header with Search Bar */}
        <div className="flex md:flex-row flex-col justify-between  md:items-center" ref={paginationRef}>
          <h1
            style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 500 }}
            className="text-[#111315] text-5xl md:w-full w-[90%]"
          >
            All Our Conditions
          </h1>
          <div className="md:w-[25%] lg:w-[35%] w-full md:mt-0 mt-4">
            {/* *** Corrected ConditionsSearchBar usage *** */}
            <ConditionsSearchBar
              conditions={Conditions}        // Pass the full list for searching
              onSelect={handleConditionSelect} // Pass the select handler function
              onClear={handleSearchClear}      // Pass the clear handler function
            />
          </div>
        </div>

        {/* Grid for displaying condition cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-[60px] gap-[32px]">
          {/* Map over the 'currentItems' derived from 'data' state */}
          {currentItems.map((item) => (
             // Make sure ConditionCard expects 'ConditionInfo' prop
             // And assumes 'item' has a unique 'slug'
            <ConditionCard ConditionInfo={item} key={item.slug} />
          ))}
          {/* Handle case where currentItems is empty */}
          {currentItems.length === 0 && data.length === 1 && (
             <p className="col-span-3 text-center text-gray-500">Displaying selected condition.</p>
          )}
           {currentItems.length === 0 && data.length !== 1 && (
             <p className="col-span-3 text-center text-gray-500">No conditions to display.</p>
          )}
        </div>

        {/* Divider */}
        <div className="bg-[#DCDEE1] h-[1px] w-full" />

        {/* Pagination Controls */}
        <div className="mt-[16px] flex flex-col sm:flex-row justify-between items-center">
          <button className=' flex flex-row items-center space-x-[6px] hover:cursor-pointer' onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M5.2929 11.7071C5.68342 12.0976 6.31659 12.0976 6.70711 11.7071C7.09763 11.3166 7.09763 10.6834 6.7071 10.2929L3.41419 7L17 7C17.5523 7 18 6.55228 18 6C18 5.44771 17.5523 5 17 5L3.41423 5L6.70707 1.7071C7.09759 1.31657 7.09759 0.683409 6.70706 0.292888C6.31653 -0.0976335 5.68337 -0.0976287 5.29285 0.292899L0.298225 5.2876C0.27977 5.30578 0.262016 5.32468 0.245012 5.34424C0.177454 5.42185 0.123865 5.50741 0.0842495 5.59762C0.0304489 5.71989 0.000417697 5.85497 3.81444e-06 5.99702L0 6C2.69961e-10 6.00309 1.3352e-05 6.00617 4.19625e-05 6.00925C0.00118257 6.13503 0.0255413 6.25525 0.0690403 6.36586C0.117815 6.49017 0.192434 6.60669 0.292896 6.70715L5.2929 11.7071Z" fill="#5B5F67"/>
              </svg>
              <h1
              style={{
                fontFamily : 'var(--font-inter)',
                fontWeight : 400
              }}
              className='text-[#5B5F67]'
              >
                Previous
              </h1>
            </button>

          {/* Page numbers */}
          <div className="flex items-center space-x-[2px]">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                // Style current page differently
                className={`h-[40px] w-[40px] flex items-center justify-center rounded-full ${
                  i + 1 === currentPage
                    ? 'bg-blue-100 text-[#022968]' // Example active style
                    : 'text-[#5B5F67] hover:bg-gray-100' // Example inactive style
                }`}
              >
                <span
                  style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 500 }}
                  className="text-lg"
                >
                  {i + 1}
                </span>
              </button>
            ))}
          </div>

          <button className=' flex flex-row items-center space-x-[6px] hover:cursor-pointer ' onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}>
            <h1
              style={{
                fontFamily : 'var(--font-inter)',
                fontWeight : 400
              }}
              className='text-[#111315]'
              >
                Next
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M12.7071 11.7071C12.3166 12.0976 11.6834 12.0976 11.2929 11.7071C10.9024 11.3166 10.9024 10.6834 11.2929 10.2929L14.5858 7L1 7C0.447716 7 0 6.55228 0 6C0 5.44771 0.447716 5 1 5L14.5858 5L11.2929 1.7071C10.9024 1.31657 10.9024 0.683409 11.2929 0.292888C11.6835 -0.0976335 12.3166 -0.0976287 12.7072 0.292899L17.7018 5.2876C17.7202 5.30578 17.738 5.32468 17.755 5.34424C17.8225 5.42185 17.8761 5.50741 17.9158 5.59762C17.9696 5.71989 17.9996 5.85497 18 5.99702L18 6C18 6.00309 18 6.00617 18 6.00925C17.9988 6.13503 17.9745 6.25525 17.931 6.36586C17.8822 6.49017 17.8076 6.60669 17.7071 6.70715L12.7071 11.7071Z" fill="#111315"/>
              </svg>
          </button>
        </div>
      </section>

      {/* Ratings and Reviews Section */}
      <RatingsAndReviews />
    </main>
  )
}