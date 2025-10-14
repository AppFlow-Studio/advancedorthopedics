// app/area-of-specialty/page.tsx
'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Filter, User, BicepsFlexed, Bone, Footprints, Hand, TorusIcon, TextCursorInputIcon } from 'lucide-react'
import { MultiSelect } from '@/components/ui/multi-select'

// Components & Data - Adjust paths as needed
import BookAnAppoitmentButton from '@/components/BookAnAppoitmentButton' // Assuming component exists
import ConditionCard, { ConditionInfoProp } from '@/components/ConditionCard'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import ConditionsSearchBar from '@/components/ConditionsSearchBar'
import { conditions } from '@/components/data/conditions' // Import the data array
import { AnimatedList } from '@/components/magicui/animated-list' // Assuming component exists
import { TextAnimate } from '@/components/magicui/text-animate' // Assuming component exists
import { useSearchParams } from 'next/navigation'

export default function AreaOfSpecialty() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [data, setData] = useState<ConditionInfoProp[]>(conditions);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const paginationRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  // Get URL parameters and apply initial filters
  const getSelectedFilters = () => {
    const dataParam = searchParams.get('data');
    if (dataParam) {
      return JSON.parse(decodeURIComponent(dataParam)).tags;
    }
    return [];
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const dataParam = searchParams.get('data');
    if (dataParam) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(dataParam));
        if (parsedData.tags && Array.isArray(parsedData.tags)) {
          setSelectedFilters(parsedData.tags);
          filterConditions(parsedData.tags);
          const section = document.getElementById('conditions-section');
          if (section) {
            section.scrollIntoView({ block: 'start', behavior: 'smooth' });
          }
        }
      } catch (error) {
        console.error('Error parsing URL parameters:', error);
      }
    }
  }, [searchParams]);



  const filterCategories = [
    { value: "Neck", label: "Neck", icon: User },
    { value: "Shoulder", label: "Shoulder", icon: BicepsFlexed },
    { value: "Spine", label: "Spine", icon: Bone },
    { value: "Lower Spine", label: "Lower Spine", icon: TorusIcon },
    { value: "Knee", label: "Knee", icon: TextCursorInputIcon },
    { value: "Foot", label: "Foot & Ankle", icon: Footprints },
    { value: "Hand", label: "Hand", icon: Hand },
  ];

  // Filter conditions based on selected categories
  const filterConditions = (categories: string[]) => {
    if (categories.length === 0) {
      setData(conditions);
      return;
    }
    const filtered = conditions.filter((condition: ConditionInfoProp) =>
      categories.some(category =>
        condition.tag?.toLowerCase() === category.toLowerCase()
      )
    );
    setData(filtered);
    setCurrentPage(1);
  };

  // Handle filter change
  const handleFilterChange = (values: string[]) => {
    setSelectedFilters(values);
  };

  // Update filtered data when filters change
  useEffect(() => {
    filterConditions(selectedFilters);
  }, [selectedFilters]);

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
  const handleConditionSelect = (condition: ConditionInfoProp) => {
    console.log("Parent: Condition selected - ", condition.title);
    setData([condition]); // Update state to show only the selected condition
    setCurrentPage(1);    // Reset to page 1
  };

  // --- Handler function for when the search bar is cleared ---
  const handleSearchClear = () => {
    console.log("Parent: Search cleared - Resetting data to full list");
    setData(conditions); // Reset state to the original full list of conditions
    setCurrentPage(1);    // Reset to page 1
  };

  return (
    <main className="w-full flex flex-col items-center justify-center bg-white h-full">
      {/* Landing Section */}
      <section className="w-full h-full flex flex-col relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_6rem)] [mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_6rem)]">

        <div
          style={{
            filter: 'blur(30px)'
          }}
          className="w-full h-[120px] absolute top-0 z-[1]"
        />
        <Image
          src={'/herosectionimg.jpg'}
          priority={true}
          fetchPriority="high"
          layout='fill'
          className="h-full absolute top-0 object-cover object-center md:object-center w-full"
          alt="Orthopedic specialist consulting with patient about spine and joint conditions at Mountain Spine & Orthopedics Florida"
        />
        <div
          className="lg:w-[100%] z-[1] h-full absolute left-0 top-0 md:w-[100%] w-full"
          style={{
            background: 'linear-gradient(180deg, rgba(10, 80, 236, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)',
          }}
        />
        {/* <div
        className="lg:w-[100%] z-[1] h-full absolute left-0 top-0 md:w-[85%] w-full"
        style={{
          background: '#5FBBEC',
        }}
      /> */}
        <div className="z-[1] flex flex-col w-full h-full text-left relative sm:pt-60 sm:pb-20 pt-30 pb-0">
          {/* <div className="lg:w-[60%] w-[95%] h-full absolute left-0 top-0"
            style={{
              background: 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
            }}
          /> */}
          <div className=" px-6 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-center w-full ">
            <TextAnimate
              as="h1"
              animation="blurInUp"
              by="word"
              once
              style={{
                fontFamily: 'var(--font-public-sans)',
                fontWeight: 400,
              }}
              className="text-[#252932]  text-4xl text-center sm:text-6xl xl:text-6xl "
            >
              Orthopedic Conditions & Treatments
            </TextAnimate>
          </div>
          <div className="z-[2] px-6 xl:px-[80px] mt-[24px]  lg:w-full  items-center justify-center">
            <p
              style={{ fontWeight: 400, lineHeight: '148%' }}
              className="text-shadow-sm text-[#424959] sm:text-xl lg:text-2xl w-full  text-center"
            >
              Not sure which spine condition you might have?
              <br className='md:flex hidden' />{' '}
              Find out with our 2-minute Condition Checker.
            </p>
          </div>
          <div className=" mt-[40px] px-6 xl:px-[80px] z-[2] w-full flex items-center justify-center pb-6">
            <Link
              href="/condition-check"
              className="max-h-[56px] h-full px-[32px] py-[16px] rounded-[62px] flex border border-[#0A50EC] bg-transparent text-[#0A50EC] text-[14px] font-semibold w-fit justify-center items-center hover:cursor-pointer"
            >
              <span
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-sm sm:text-base'
              >
                Condition Checker
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Tell us Your Story Section */}
      <section className="max-w-[1440px] w-full flex flex-col py-[50px] px-6 xl:px-[80px] space-y-[24px]">
        {/* ... (rest of your 'Tell us Your Story' JSX - no changes needed here) ... */}
        <div className="flex flex-col space-y-[16px]">
          <h2
            style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }}
            className="text-[#111315] sm:text-5xl text-3xl"
          >
            We are Here to Listen, Tell us your Story
          </h2>
          <p
            style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}
            className="text-[#424959] sm:text-xl text-md lg:w-[75%]"
          >
            Do you have a spinal condition that's causing you chronic pain intense enough to interfere with your life or day-to-day activities? Are you afraid you'll never be able to get your pain under control or that it might continue to worsen as you age?
          </p>
        </div>
        <div className="flex flex-col space-y-[16px]">
          <h3
            style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }}
            className="text-[#111315] sm:text-2xl text-xl "
          >
            WELL, YOU'RE NOT ALONE.
          </h3>
          <p
            style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}
            className="text-[#424959] sm:text-xl text-md lg:w-[75%]"
          >
            Many people with spinal disorders feel frustrated, confused, and helpless about their conditions. As many as 500,000 people suffer from some form of spinal injury each year.
            <br />
            <br />
            At Mountain Spine & Orthopedics, we work to help you understand your symptoms, diagnose your condition and inform you of the various treatments. Below is an overview of the most common types of spine conditions, as well as other orthopedic conditions.
          </p>
        </div>
      </section>

      {/* All Our Conditions Section */}
      <section className="max-w-[1440px] w-full flex flex-col py-[50px] xl:px-[80px] px-2 space-y-[24px] scroll-mt-16" id="conditions-section">
        {/* Section Header with Search Bar and Filter */}
        <div className="flex lg:flex-row flex-col justify-between md:items-start items-center lg:space-y-0 space-y-4 px-4" ref={paginationRef} >
          <h2
            style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }}
            className="text-[#111315] text-5xl"
          >
            All Our Conditions
          </h2>
          <div className="w-full lg:w-1/2  flex flex-col lg:flex-row gap-x-4 lg:space-y-0 space-y-4">
            <div className="w-full md:w-1/2">
              <ConditionsSearchBar
                conditions={conditions}
                onSelect={handleConditionSelect}
                onClear={handleSearchClear}
              />
            </div>
            <div className="w-full md:w-1/2">
              {/* Hidden crawlable links for SEO */}
              <div className="sr-only">
                <nav aria-label="Filter conditions by category">
                  {filterCategories.map(category => (
                    <Link
                      key={category.value}
                      href={`/area-of-specialty?category=${encodeURIComponent(category.value)}`}
                    >
                      {category.label} Conditions
                    </Link>
                  ))}
                </nav>
              </div>
              
              {/* Visible MultiSelect UI for users */}
              <MultiSelect
                value={selectedFilters}
                onValueChange={handleFilterChange}
                defaultValue={getSelectedFilters()}
                options={filterCategories}
                placeholder="Filter by Category"
                className="w-full h-[48px] bg-[#FAFAFA] border-[#DCDEE1]"
              />
            </div>
          </div>
        </div>

        {/* SEO-Friendly Visually Hidden Content */}
        <div className="sr-only">
          <h2>Comprehensive Guide to Orthopedic and Spine Conditions</h2>
          <p>
            At Mountain Spine & Orthopedics, we specialize in diagnosing and treating a wide range of musculoskeletal conditions. From common issues like sciatica and rotator cuff tears to complex spinal deformities, our board-certified specialists are dedicated to providing personalized care. Explore the conditions we treat to learn more about symptoms, causes, and the advanced, minimally invasive treatment options we offer.
          </p>
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
          {Array.isArray(currentItems) && currentItems.length === 0 && Array.isArray(data) && data.length === 1 && (
            <p className="col-span-3 text-center text-gray-500">Displaying selected condition.</p>
          )}
          {Array.isArray(currentItems) && currentItems.length === 0 && Array.isArray(data) && data.length !== 1 && (
            <p className="col-span-3 text-center text-gray-500">No conditions to display.</p>
          )}
        </div>

        {/* Divider */}
        <div className="bg-[#DCDEE1] h-[1px] w-full" />

        {/* Pagination Controls */}
        <div className="mt-[16px] flex flex-col sm:flex-row justify-between items-center">
          <button className=' flex flex-row items-center space-x-[6px] hover:cursor-pointer' onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M5.2929 11.7071C5.68342 12.0976 6.31659 12.0976 6.70711 11.7071C7.09763 11.3166 7.09763 10.6834 6.7071 10.2929L3.41419 7L17 7C17.5523 7 18 6.55228 18 6C18 5.44771 17.5523 5 17 5L3.41423 5L6.70707 1.7071C7.09759 1.31657 7.09759 0.683409 6.70706 0.292888C6.31653 -0.0976335 5.68337 -0.0976287 5.29285 0.292899L0.298225 5.2876C0.27977 5.30578 0.262016 5.32468 0.245012 5.34424C0.177454 5.42185 0.123865 5.50741 0.0842495 5.59762C0.0304489 5.71989 0.000417697 5.85497 3.81444e-06 5.99702L0 6C2.69961e-10 6.00309 1.3352e-05 6.00617 4.19625e-05 6.00925C0.00118257 6.13503 0.0255413 6.25525 0.0690403 6.36586C0.117815 6.49017 0.192434 6.60669 0.292896 6.70715L5.2929 11.7071Z" fill="#424959" />
            </svg>
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 400
              }}
              className='text-[#424959]'
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
                className={`h-[40px] w-[40px] flex items-center justify-center rounded-full ${i + 1 === currentPage
                  ? 'bg-blue-100 text-[#252932]' // Example active style
                  : 'text-[#424959] hover:bg-gray-100' // Example inactive style
                  }`}
              >
                <span
                  style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }}
                  className="text-lg"
                >
                  {i + 1}
                </span>
              </button>
            ))}
          </div>

          <button className=' flex flex-row items-center space-x-[6px] hover:cursor-pointer ' onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}>
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 400
              }}
              className='text-[#111315]'
            >
              Next
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M12.7071 11.7071C12.3166 12.0976 11.6834 12.0976 11.2929 11.7071C10.9024 11.3166 10.9024 10.6834 11.2929 10.2929L14.5858 7L1 7C0.447716 7 0 6.55228 0 6C0 5.44771 0.447716 5 1 5L14.5858 5L11.2929 1.7071C10.9024 1.31657 10.9024 0.683409 11.2929 0.292888C11.6835 -0.0976335 12.3166 -0.0976287 12.7072 0.292899L17.7018 5.2876C17.7202 5.30578 17.738 5.32468 17.755 5.34424C17.8225 5.42185 17.8761 5.50741 17.9158 5.59762C17.9696 5.71989 17.9996 5.85497 18 5.99702L18 6C18 6.00309 18 6.00617 18 6.00925C17.9988 6.13503 17.9745 6.25525 17.931 6.36586C17.8822 6.49017 17.8076 6.60669 17.7071 6.70715L12.7071 11.7071Z" fill="#111315" />
            </svg>
          </button>
        </div>
      </section>

      {/* Ratings and Reviews Section */}
      <RatingsAndReviews />
    </main>
  )
}
