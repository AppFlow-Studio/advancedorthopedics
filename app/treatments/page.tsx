// src/app/treatments/page.tsx (or wherever your page lives)
'use client'
import React, { useState, useEffect, useRef } from 'react' // Added useState
import Image from 'next/image'
import Landing from '../../public/AreaOfSpecLanding.jpeg'
import BookAnAppoitmentButton from '@/components/BookAnAppoitmentButton'
// Remove the basic Input import if no longer needed elsewhere
// import { Input } from '@/components/ui/input'
import ConditionCard from '@/components/ConditionCard'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import { AllTreatments } from '@/components/data/treatments' // Your master list of treatments
import TreatmentCard, { TreatmentCardInfoProp } from '@/components/TreatmentCard' // Ensure TreatmentCardInfoProp is exported or defined
import TreatmentsSearchBar from '@/components/ui/TreatmentsSearchBar'
import { TextAnimate } from '@/components/magicui/text-animate'

export default function Treatments() {
  // State for pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(9); // Items per page

  // State for data:
  // 'allData' holds the original, full list of treatments.
  const [allData, setAllData] = React.useState<TreatmentCardInfoProp[]>(AllTreatments);
  // 'filteredData' holds the list after applying search filter. This is what pagination works on.
  const [filteredData, setFilteredData] = React.useState<TreatmentCardInfoProp[]>(AllTreatments);

  const isInitialMount = useRef(true);
  const paginationRef = useRef<HTMLDivElement>(null); // Typed the ref

  // Calculate items for the current page based on filteredData
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages based on filteredData
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // --- Search Bar Handlers ---
  // Function called when a treatment is selected in the search bar dropdown
  const handleSelectTreatment = (selectedTreatment: TreatmentCardInfoProp) => {
    setFilteredData([selectedTreatment]); // Show only the selected treatment
    setCurrentPage(1); // Reset to the first page
  };

  // Function called when the search bar is cleared (X button or empty input)
  const handleClearSearch = () => {
    setFilteredData(allData); // Reset to show all treatments
    setCurrentPage(1); // Reset to the first page (optional, but good practice)
  };
  // --- End Search Bar Handlers ---


  // Function to change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Function to render pagination buttons
  const renderPageNumbers = () => {
    // Don't render pagination if there's only one page or less
    if (totalPages <= 1) {
        return null;
    }

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => paginate(i)} className={` h-[40px] hover:cursor-pointer w-[40px] flex items-center  justify-center ${ i == currentPage ? 'rounded-full bg-[#FAFAFA] text-[#022968] ' : 'text-[#5B5F67]' }`}>
          <h1
            style={{
              fontFamily : 'var(--font-reem-kufi)',
              fontWeight : 500,
            }}
            className=' text-lg'
          >
            {i}
          </h1>
        </button>
      );
    }
    return pageNumbers;
  };

  // Effect for scrolling on pagination change (no changes needed here)
  useEffect(() => {
    if (paginationRef.current) {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        paginationRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }
  }, [currentPage]);

  // --- Main Render ---
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
        {/* Landing Section (no changes) */}
        <section className="w-full h-full flex flex-col relative overflow-hidden" >
          <div
          style={{
          background: 'white',
          filter: 'blur(30px)'
          }}
          className="w-full h-[120px] absolute top-0 z-[1]" // Removed border for clarity
          />
          <Image src={Landing} className="max-h-[945px] h-full absolute top-0 md:object-cover object-cover object-center pt-16 w-full" alt="Doctor Diagnosing a Old Patient"/>

          <div className="z-[1] flex flex-col w-full h-full text-left relative pt-60 lg:pt-120">
            <div className="lg:w-[60%] w-[95%] h-full absolute left-0 top-0"
            style={{
              background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
            }}
            />

          <div className=" px-6  xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start w-[55%]">
              <TextAnimate animation="blurInUp" by="word" once
              style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 400,
              }}
              className="text-[#022968] text-3xl md:text-6xl lg:text-7xl"
              >
                Treatments
              </TextAnimate>
          </div>

          <div className="z-[2]  px-6  xl:px-[80px] mt-[24px] sm:w-[50%] pb-8">
              <p
              style={{
                fontWeight: 400,
              }}
              className="text-white text-shadow-sm text-md sm:text-lg md:text-xl"
              >
                  Explore our comprehensive range of treatments or use the search below to find specific options.
              </p>
          </div>
          </div>
        </section>

        {/* Tell us Your Story Section (no changes) */}
        <section className='max-w-[1440px] w-full h-full flex flex-col relative overflow-hidden py-[50px] px-6 xl:px-[80px] space-y-[24px]'>
         {/* ... (rest of your "Tell us Your Story" section code) ... */}
         <div className=' flex flex-col space-y-[16px] '>
              <h1
              style={{
                fontFamily : 'var(--font-reem-kufi)',
                fontWeight : 500,
              }}
              className='text-[#111315] sm:text-5xl text-3xl'
              >
                We are Here to Listen, Tell us your Story
              </h1>

              <h1
               style={{
                fontFamily : 'var(--font-inter)',
                fontWeight : 500,
              }}
              className='text-[#5B5F67] sm:text-xl text-md sm:w-[75%] '
              >
                Do you have a spinal condition that’s causing you chronic pain intense enough to interfere with your life or day-to-day activities? Are you afraid you’ll never be able to get your pain under control or that it might continue to worsen as you age?
              </h1>
          </div>

          <div className=' flex flex-col space-y-[16px] ' ref={paginationRef}>
              <h1
              style={{
                fontFamily : 'var(--font-reem-kufi)',
                fontWeight : 500,

              }}
              className='text-[#111315] sm:text-2xl text-xl '
              >
                WELL, YOU’RE NOT ALONE.
              </h1>

              <h1
               style={{
                fontFamily : 'var(--font-inter)',
                fontWeight : 500,

              }}
              className='text-[#5B5F67] sm:text-xl text-sm sm:w-[75%] w-full'
              >
                Many people with spinal disorders feel frustrated, confused, and helpless about their conditions. As many as 500,000 people suffer from some form of spinal injury each year. The good news is that you can ease your concerns and fears by gaining a better understanding of your condition.
                <br/><br/>
                At NJ Spine and Orthopedic, we work to help you understand your symptoms, diagnose your condition and inform you of the various treatments. Below is an overview of the most common types of spine conditions, as well as other orthopedic conditions.
              </h1>
          </div>
        </section>


        {/* Treatments List Section */}
        <section className='max-w-[1440px] w-full h-full flex flex-col relative overflow-hidden py-[50px] px-6 xl:px-[80px] space-y-[24px]'>
          <div className='space-y-[16px] flex flex-col md:flex-row justify-between items-center' > {/* Adjusted layout for responsiveness */}
              <h1
              style={{
                fontFamily : 'var(--font-reem-kufi)',
                fontWeight : 500,
              }}
              className='text-[#111315] text-4xl md:text-5xl mb-4 md:mb-0' // Adjusted size/margin
              >
                All Our Treatments
              </h1>

             {/* ==== SEARCH BAR INTEGRATION ==== */}
             <div className="w-full md:w-1/2 lg:w-1/3"> {/* Control search bar width */}
                <TreatmentsSearchBar
                    treatments={allData}           // Pass the full list for searching
                    onSelect={handleSelectTreatment} // Handler for selecting an item
                    onClear={handleClearSearch}      // Handler for clearing the search
                />
             </div>
             {/* =============================== */}

          </div>

          {/* Display Treatment Cards based on currentItems from pagination */}
          {currentItems.length > 0 ? (
             <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[60px] gap-[32px] '>
                {
                    currentItems.map((item) =>
                        <TreatmentCard ConditionInfo={item} key={item.slug} /> // Use unique slug for key
                    )
                }
            </div>
          ) : (
            // Message when no treatments match the filter
            <div className='text-center text-gray-600 mt-10 text-lg'>
                No treatments found matching your search criteria.
            </div>
          )}


          {/* Pagination Controls - Render only if needed */}
          {filteredData.length > itemsPerPage && ( // Show pagination only if more items than fit on one page
            <>
                <div className=' bg-[#DCDEE1] h-[1px] w-full mt-8'/> {/* Added margin top */}
                <div className=' mt-[16px] flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0'>
                    {/* Previous Button */}
                    <button
                        className=' flex flex-row items-center space-x-[6px] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1} // Disable if on first page
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="currentColor"> {/* Changed fill */}
                        <path d="M5.2929 11.7071C5.68342 12.0976 6.31659 12.0976 6.70711 11.7071C7.09763 11.3166 7.09763 10.6834 6.7071 10.2929L3.41419 7L17 7C17.5523 7 18 6.55228 18 6C18 5.44771 17.5523 5 17 5L3.41423 5L6.70707 1.7071C7.09759 1.31657 7.09759 0.683409 6.70706 0.292888C6.31653 -0.0976335 5.68337 -0.0976287 5.29285 0.292899L0.298225 5.2876C0.27977 5.30578 0.262016 5.32468 0.245012 5.34424C0.177454 5.42185 0.123865 5.50741 0.0842495 5.59762C0.0304489 5.71989 0.000417697 5.85497 3.81444e-06 5.99702L0 6C2.69961e-10 6.00309 1.3352e-05 6.00617 4.19625e-05 6.00925C0.00118257 6.13503 0.0255413 6.25525 0.0690403 6.36586C0.117815 6.49017 0.192434 6.60669 0.292896 6.70715L5.2929 11.7071Z" /> {/* Removed fill attribute, inherits */}
                        </svg>
                        <h1 style={{ fontFamily : 'var(--font-inter)', fontWeight : 400 }} className='text-[#5B5F67]'>
                        Previous
                        </h1>
                    </button>

                    {/* Page Numbers */}
                    <div className=' flex flex-row items-center space-x-[2px]'>
                        {renderPageNumbers()}
                    </div>

                    {/* Next Button */}
                    <button
                        className=' flex flex-row items-center space-x-[6px] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages} // Disable if on last page
                    >
                        <h1 style={{ fontFamily : 'var(--font-inter)', fontWeight : 400 }} className='text-[#111315]'>
                        Next
                        </h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="currentColor"> {/* Changed fill */}
                        <path d="M12.7071 11.7071C12.3166 12.0976 11.6834 12.0976 11.2929 11.7071C10.9024 11.3166 10.9024 10.6834 11.2929 10.2929L14.5858 7L1 7C0.447716 7 0 6.55228 0 6C0 5.44771 0.447716 5 1 5L14.5858 5L11.2929 1.7071C10.9024 1.31657 10.9024 0.683409 11.2929 0.292888C11.6835 -0.0976335 12.3166 -0.0976287 12.7072 0.292899L17.7018 5.2876C17.7202 5.30578 17.738 5.32468 17.755 5.34424C17.8225 5.42185 17.8761 5.50741 17.9158 5.59762C17.9696 5.71989 17.9996 5.85497 18 5.99702L18 6C18 6.00309 18 6.00617 18 6.00925C17.9988 6.13503 17.9745 6.25525 17.931 6.36586C17.8822 6.49017 17.8076 6.60669 17.7071 6.70715L12.7071 11.7071Z" /> {/* Removed fill attribute, inherits */}
                        </svg>
                    </button>
                </div>
            </>
          )}
        </section>

        {/* Ratings & Reviews Section (no changes) */}
        <RatingsAndReviews />
    </main>
  )
}