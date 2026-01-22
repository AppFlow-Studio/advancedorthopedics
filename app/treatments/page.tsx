// src/app/treatments/page.tsx (or wherever your page lives)
'use client'
import React, { useState, useEffect, useRef } from 'react' // Added useState
import Image from 'next/image'
import Link from 'next/link'
import BookAnAppoitmentButton from '@/components/BookAnAppoitmentButton'
// Remove the basic Input import if no longer needed elsewhere
// import { Input } from '@/components/ui/input'
import ConditionCard from '@/components/ConditionCard'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import { AllTreatmentsCombined, TreatmentsCardProp } from '@/components/data/treatments' // Your master list of treatments
import TreatmentCard from '@/components/TreatmentCard'
import TreatmentsSearchBar from '@/components/ui/TreatmentsSearchBar'
import { TextAnimate } from '@/components/magicui/text-animate'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BicepsFlexed, Bone, Footprints, Hand, User, TorusIcon, TextCursorInputIcon } from "lucide-react";
import { MultiSelect } from '@/components/ui/multi-select'
import { useSearchParams } from 'next/navigation'
import BodyPartTabs from '@/components/BodyPartTabs'

export default function Treatments() {
  // State for pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(9); // Items per page
  const searchParams = useSearchParams();
  useEffect(() => {
    const dataParam = searchParams.get('data');
    const categoryParam = searchParams.get('category');

    if (dataParam) {
      const filter = JSON.parse(decodeURIComponent(dataParam));
      console.log('filter', filter);
      setSelectedFilters([filter.key]);
      const section = document.getElementById('treatments-section');
      if (section) {
        section.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    } else if (categoryParam) {
      // Handle the category parameter for pre-selecting filters
      console.log('category param:', categoryParam);
      setSelectedFilters([categoryParam]);
      const section = document.getElementById('treatments-section');
      if (section) {
        section.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  const treatmentAreaParam = () => {
    const dataParam = searchParams.get('data');
    const categoryParam = searchParams.get('category');

    if (dataParam) {
      const filter = JSON.parse(decodeURIComponent(dataParam));
      return [filter.key];
    } else if (categoryParam) {
      return [categoryParam];
    }
    return []
  }
  // State for data:
  // 'allData' holds the original, full list of treatments.
  const [allData, setAllData] = React.useState<TreatmentsCardProp[]>(AllTreatmentsCombined);
  // 'filteredData' holds the list after applying search filter. This is what pagination works on.
  const [filteredData, setFilteredData] = React.useState<TreatmentsCardProp[]>(AllTreatmentsCombined);

  const isInitialMount = useRef(true);
  const paginationRef = useRef<HTMLDivElement>(null); // Typed the ref

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filterCategories = [
    { value: "Neck", label: "Neck", icon: User },
    { value: "Shoulder", label: "Shoulder", icon: BicepsFlexed },
    { value: "Spine", label: "Spine", icon: Bone },
    { value: "Lower Spine", label: "Lower Spine", icon: TorusIcon },
    { value: "Knee", label: "Knee", icon: TextCursorInputIcon },
    { value: "Foot", label: "Foot & Ankle", icon: Footprints },
    { value: "Hand", label: "Hand", icon: Hand },
  ];

  // Filter treatments based on selected categories
  const filterTreatments = (treatments: TreatmentsCardProp[]) => {
    if (selectedFilters.length === 0) return treatments;
    return treatments.filter(treatment =>
      selectedFilters.includes(treatment.tag)
    );
  };

  // Update filtered data when filters change
  useEffect(() => {
    const filtered = filterTreatments(allData);
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedFilters, allData]);

  const handleFilterChange = (value: string) => {
    setSelectedFilters(prev => {
      if (prev.includes(value)) {
        return prev.filter(filter => filter !== value);
      }
      return [...prev, value];
    });
  };

  // Calculate items for the current page based on filteredData
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages based on filteredData
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // --- Search Bar Handlers ---
  // Function called when a treatment is selected in the search bar dropdown
  const handleSelectTreatment = (selectedTreatment: TreatmentsCardProp) => {
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
        <button key={i} onClick={() => paginate(i)} className={` h-[40px] hover:cursor-pointer w-[40px] flex items-center  justify-center ${i == currentPage ? 'rounded-full bg-[#FAFAFA] text-[#252932] ' : 'text-[#424959]'}`}>
          <span
            style={{
              fontFamily: 'var(--font-public-sans)',
              fontWeight: 500,
            }}
            className=' text-lg'
          >
            {i}
          </span>
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
  console.log('selectedFilters', selectedFilters);
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
      {/* Landing Section (no changes) */}
      <section className="w-full h-full flex flex-col relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_6rem)]" >
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
          alt="Orthopedic surgeon explaining minimally invasive treatment procedures to a patient at Mountain Spine & Orthopedics"
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
          <div className=" px-6  xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-center text-center w-full">
            <TextAnimate 
              as="h1"
              animation="blurInUp" 
              by="word" 
              once
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 400,
              }}
              className="text-[#252932] text-3xl md:text-6xl lg:text-7xl"
            >
              Orthopedic Treatments & Procedures
            </TextAnimate>
          </div>

          <div className="z-[2]  px-6  xl:px-[80px] mt-[24px] w-full pb-8">
            <p
              style={{
                fontWeight: 400,
              }}
              className="text-[#424959] text-md sm:text-lg md:text-xl text-center"
            >
              Explore our comprehensive range of treatments or use the search below to find specific options.
            </p>
          </div>
        </div>
      </section>

      {/* Browse by Body Part Section - Condensed Tabs */}
      <section className="max-w-[1440px] w-full flex flex-col py-6 sm:py-8 xl:py-10 xl:px-[80px] px-4 sm:px-6 space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex flex-col gap-1">
            <h2
              style={{
                fontFamily: 'var(--font-public-sans)',
                fontWeight: 500,
              }}
              className="text-[#111315] text-xl sm:text-2xl lg:text-3xl"
            >
              Browse Treatments by Body Part
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#6B7280] text-sm sm:text-base hidden sm:block"
            >
              Select a body region to explore treatment options
            </p>
          </div>
        </div>
        <BodyPartTabs linkPrefix="/treatments?category=" useQueryParam={true} />
      </section>

      {/* Treatments List Section */}
      <section className='max-w-[1440px] w-full h-full flex flex-col relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_6rem)] py-[50px] px-6 xl:px-[80px] space-y-[24px] scroll-mt-8 ' id="treatments-section" ref={paginationRef}>
        <div className='flex flex-col lg:flex-row justify-between lg:items-center gap-6 lg:gap-8'>
          <h2
            style={{
              fontFamily: 'var(--font-public-sans)',
              fontWeight: 500,
            }}
            className='text-[#111315] text-4xl md:text-5xl flex-shrink-0'
          >
            All Our Treatments
          </h2>

          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="w-full md:w-1/2">
              <TreatmentsSearchBar
                treatments={allData}
                onSelect={handleSelectTreatment}
                onClear={handleClearSearch}
              />
            </div>

            {/* Filter Dropdown */}
            <div className='w-full md:w-1/2'>
              {/* Hidden crawlable links for SEO */}
              <div className="sr-only">
                <nav aria-label="Filter treatments by category">
                  {filterCategories.map(category => (
                    <Link
                      key={category.value}
                      href={`/treatments?category=${encodeURIComponent(category.value)}`}
                    >
                      {category.label} Treatments
                    </Link>
                  ))}
                </nav>
              </div>
              
              {/* Visible MultiSelect UI for users */}
              <MultiSelect
                options={filterCategories}
                onValueChange={setSelectedFilters}
                defaultValue={treatmentAreaParam()}
                placeholder="Select Category"
                variant="inverted"
                animation={2}
                maxCount={3}
              />
            </div>
          </div>
        </div>

        {/* Display Treatment Cards */}
        {currentItems.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[60px] gap-[32px]'>
            {currentItems.map((item) => (
              <TreatmentCard ConditionInfo={item} key={item.slug} />
            ))}
          </div>
        ) : (
          <div className='text-center text-gray-600 mt-10 text-lg'>
            No treatments found matching your search criteria.
          </div>
        )}

        {/* Pagination Controls - Render only if needed */}
        {filteredData.length > itemsPerPage && ( // Show pagination only if more items than fit on one page
          <>
            <div className=' bg-[#DCDEE1] h-[1px] w-full mt-8' /> {/* Added margin top */}
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
                <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }} className='text-[#424959]'>
                  Previous
                </span>
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
                <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }} className='text-[#111315]'>
                  Next
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="currentColor"> {/* Changed fill */}
                  <path d="M12.7071 11.7071C12.3166 12.0976 11.6834 12.0976 11.2929 11.7071C10.9024 11.3166 10.9024 10.6834 11.2929 10.2929L14.5858 7L1 7C0.447716 7 0 6.55228 0 6C0 5.44771 0.447716 5 1 5L14.5858 5L11.2929 1.7071C10.9024 1.31657 10.9024 0.683409 11.2929 0.292888C11.6835 -0.0976335 12.3166 -0.0976287 12.7072 0.292899L17.7018 5.2876C17.7202 5.30578 17.738 5.32468 17.755 5.34424C17.8225 5.42185 17.8761 5.50741 17.9158 5.59762C17.9696 5.71989 17.9996 5.85497 18 5.99702L18 6C18 6.00309 18 6.00617 18 6.00925C17.9988 6.13503 17.9745 6.25525 17.931 6.36586C17.8822 6.49017 17.8076 6.60669 17.7071 6.70715L12.7071 11.7071Z" /> {/* Removed fill attribute, inherits */}
                </svg>
              </button>
            </div>
          </>
        )}
      </section>

      {/* Tell us Your Story Section */}
      <section className='max-w-[1440px] w-full h-full flex flex-col relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_6rem)] py-[50px] px-6 xl:px-[80px] space-y-[24px]'>
        <div className=' flex flex-col space-y-[16px] '>
          <h2
            style={{
              fontFamily: 'var(--font-public-sans)',
              fontWeight: 500,
            }}
            className='text-[#111315] sm:text-5xl text-3xl'
          >
            We are Here to Listen, Tell us your Story
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
            }}
            className='text-[#424959] sm:text-xl text-md sm:w-[75%] '
          >
            Spinal conditions may cause persistent pain that affects daily activities and quality of life. Understanding available treatment options—both surgical and non-surgical—can help patients make informed decisions about their care journey.
          </p>
        </div>

        <div className=' flex flex-col space-y-[16px] '>
          <h3
            style={{
              fontFamily: 'var(--font-public-sans)',
              fontWeight: 500,
            }}
            className='text-[#111315] sm:text-2xl text-xl '
          >
            WELL, YOU'RE NOT ALONE.
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
            }}
            className='text-[#424959] sm:text-xl text-sm sm:w-[75%] w-full'
          >
            Many people with spinal disorders feel frustrated, confused, and helpless about their conditions. As many as 500,000 people suffer from some form of spinal injury each year. The good news is that you can ease your concerns and fears by gaining a better understanding of your condition.
            <br /><br />
            At Mountain Spine and Orthopedics, we work to help you understand your symptoms, diagnose your condition and inform you of the various treatments. Below is an overview of the most common types of spine conditions, as well as other orthopedic conditions.
          </p>
        </div>
      </section>

      {/* Ratings & Reviews Section */}
      <RatingsAndReviews />
    </main>
  )
}

