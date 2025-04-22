// app/area-of-speciality/page.tsx
'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Components & Data - Adjust paths as needed
import Landing from '../../public/AreaOfSpecLanding.jpeg' // Assuming path is correct
import BookAnAppoitmentButton from '@/components/BookAnAppoitmentButton' // Assuming component exists
import ConditionCard from '@/components/ConditionCard'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import ConditionsSearchBar from '@/components/ConditionsSearchBar'
import { Conditions } from '@/components/data/conditions' // Import the data array
import type { Condition } from '@/components/data/conditions' // Import the data type
import { AnimatedList } from '@/components/magicui/animated-list' // Assuming component exists
import { TextAnimate } from '@/components/magicui/text-animate' // Assuming component exists

export default function AreaOfSpeciality() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  // Initialize state with the full list of conditions
  // Use the imported 'Condition' type for better type safety
  const [data, setData] = useState<Condition[]>(Conditions);
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
      <section className="max-w-[1440px] w-full h-full flex flex-col relative overflow-hidden">
        {/* ... (rest of your Landing section JSX - no changes needed here) ... */}
         <div
          style={{ background: 'white', filter: 'blur(30px)' }}
          className="w-full h-[120px] absolute top-0 z-[1]"
        />
        <Image
          src={Landing}
          alt="Doctor Diagnosing a Old Patient"
          className="max-h-[945px] h-full absolute top-0 object-cover object-top pt-16 w-full max-w-[1440px]"
        />
        <div className="z-[1] flex flex-col w-full h-full text-left relative pb-[160px]">
          <div
            className="w-[565px] h-full absolute left-0 top-0"
            style={{
              background:
                'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%, rgba(255,0,0,0) 100%)',
            }}
          />
          <div className="px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[220px] w-[55%]">
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              style={{
                fontFamily: 'var(--font-reem-kufi)',
                fontWeight: 400,
                fontSize: '72px',
              }}
              className="text-[#022968]"
            >
              Conditions
            </TextAnimate>
          </div>
          <div className="z-[2] px-[80px] mt-[24px] w-[50%]">
            <p
              style={{ fontWeight: 400, fontSize: '20px', lineHeight: '148%' }}
              className="text-[#111315]"
            >
              Not sure which spine condition you might have?
              <br />
              Find out with our 2-minute Condition Checker.
            </p>
          </div>
          <div className="w-[45%] mt-[40px] px-[80px] z-[2]">
            <Link
              href="/condition-check"
              className="max-h-[56px] h-full px-[32px] py-[16px] rounded-[62px] flex bg-[#0094E0] text-white text-[14px] font-semibold w-full justify-center items-center hover:cursor-pointer"
            >
              <h1
                style={{
                  fontFamily: 'var(--font-reem-kufi)',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0.02em',
                }}
              >
                Condition Checker
              </h1>
            </Link>
          </div>
        </div>
      </section>

      {/* Tell us Your Story Section */}
      <section className="max-w-[1440px] w-full flex flex-col py-[50px] px-[80px] space-y-[24px]">
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
            className="text-[#5B5F67] text-xl w-[75%]"
          >
            Do you have a spinal condition that’s causing you chronic pain intense enough to interfere with your life or day-to-day activities? Are you afraid you’ll never be able to get your pain under control or that it might continue to worsen as you age?
          </h1>
        </div>
        <div className="flex flex-col space-y-[16px]">
          <h1
            style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 500 }}
            className="text-[#111315] text-2xl"
          >
            WELL, YOU’RE NOT ALONE.
          </h1>
          <h1
            style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}
            className="text-[#5B5F67] text-xl w-[75%]"
          >
            Many people with spinal disorders feel frustrated, confused, and helpless about their conditions. As many as 500,000 people suffer from some form of spinal injury each year.
            <br />
            <br />
            At Mountain Spine & Care, we work to help you understand your symptoms, diagnose your condition and inform you of the various treatments. Below is an overview of the most common types of spine conditions, as well as other orthopedic conditions.
          </h1>
        </div>
      </section>

      {/* All Our Conditions Section */}
      <section className="max-w-[1440px] w-full flex flex-col py-[50px] px-[80px] space-y-[24px]">
        {/* Section Header with Search Bar */}
        <div className="flex justify-between items-center" ref={paginationRef}>
          <h1
            style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 500 }}
            className="text-[#111315] text-5xl"
          >
            All Our Conditions
          </h1>
          <div className="w-[25%]">
            {/* *** Corrected ConditionsSearchBar usage *** */}
            <ConditionsSearchBar
              conditions={Conditions}        // Pass the full list for searching
              onSelect={handleConditionSelect} // Pass the select handler function
              onClear={handleSearchClear}      // Pass the clear handler function
            />
          </div>
        </div>

        {/* Grid for displaying condition cards */}
        <div className="grid grid-cols-3 mt-[60px] gap-[32px]">
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
        <div className="mt-[16px] flex justify-between items-center">
          <button
             // Disable previous button on page 1
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
            className="flex items-center space-x-[6px] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
             {/* Left arrow icon can go here */}
            <span
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
              className="text-[#5B5F67]"
            >
              Previous
            </span>
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

          <button
            // Disable next button on last page
            disabled={currentPage === totalPages}
            onClick={() => paginate(currentPage + 1)}
            className="flex items-center space-x-[6px] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span
              className="text-[#111315]"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
            >
              Next
            </span>
             {/* Right arrow icon can go here */}
          </button>
        </div>
      </section>

      {/* Ratings and Reviews Section */}
      <RatingsAndReviews />
    </main>
  )
}