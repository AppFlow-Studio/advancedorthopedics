'use client'
import React, { useEffect, useState, useRef } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Rating1 from '../public/Rating1.png'
import Rating2 from '../public/Rating2.png'
import Image from 'next/image'
import StarRating from './StarRating'
import { useWindowSize } from "@uidotdev/usehooks";
import { ReviewCard } from './ReviewCard'

const Reviews = [
  {
    img: 'https://originui.com/avatar-80-03.jpg',
    rating: 5,
    name: 'Robert P.',
    location: 'Miami Beach',
    body: 'After years of debilitating back pain, I finally sought help at Mountain Spine Orthopedics. Dr. Katzman took the time to actually listen and explain my options clearly. The minimally invasive procedure he performed gave me my life back. The entire team was professional and supportive throughout.'
  },
  {
    img: 'https://mountainspineortho.b-cdn.net/Mreview.png',
    rating: 5,
    name: 'Maria G.',
    location: 'Hollywood',
    body: `I was hesitant about surgery for my spinal stenosis, but the staff at Mountain Spine Orthopedics put me at ease. From the front desk to the medical assistants, everyone was incredibly kind and efficient. My recovery was smoother than I ever expected. Highly recommend!`
  },
  {
    img: 'https://mountainspineortho.b-cdn.net/DReview.jpg',
    rating: 5,
    name: 'David L.',
    location: 'Orlando',
    body: `Getting a second opinion from Dr. Katzman was the best decision I made. He reviewed my MRI, explained things in a way I could understand, and offered a non-surgical approach that actually worked for my herniated disc. Truly grateful for his expertise and honest assessment.`
  },
  {
    img: 'https://mountainspineortho.b-cdn.net/Sreview.png',
    rating: 5,
    name: 'Sarah Chen',
    location: 'Altamonate',
    body: `The level of care at Mountain Spine Orthopedics is outstanding. Scheduling was easy, the office is modern and clean, and Dr. Katzman's team is top-notch. They genuinely care about their patients' well-being and getting them back to their activities.`
  },
  {
    img: 'https://originui.com/avatar-80-01.jpg',
    rating: 5,
    name: 'Michael B.',
    location: 'Davenport',
    body: `Dealing with chronic neck pain was exhausting. The team at Mountain Spine Orthopedics provided a comprehensive treatment plan, not just a quick fix. I felt involved in my care every step of the way. Feeling so much better now!`
  },
  {
    img: 'https://originui.com/avatar-80-05.jpg',
    rating: 5,
    name: 'Linda S.',
    location: 'Palm Springs',
    body: `Dr. Katzman is a fantastic surgeon with a great bedside manner. He addressed all my concerns before my procedure and the results exceeded my expectations. The follow-up care from his team at Mountain Spine Orthopedics has also been excellent. Five stars aren't enough!`
  }
]


export default function RatingsAndReviews() {
  const [ReviewsIndex, setReviewsIndex] = useState(0)
  const [singleCard, setSingleCard] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const size = useWindowSize();
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (size?.width && size.width < 1285) {
      setSingleCard(true)
    }
  }, [size])

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      return;
    }

    const startAutoPlay = () => {
      autoPlayRef.current = setTimeout(() => {
        setReviewsIndex((prevIndex) => {
          const maxIndex = singleCard ? Reviews.length - 1 : Reviews.length - 2;
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, 4000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [ReviewsIndex, isPaused, singleCard]);

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Manual navigation handlers
  const handlePrevious = () => {
    setReviewsIndex(Math.max(0, ReviewsIndex - 1));
    setIsPaused(false); // Resume auto-play after manual interaction
  };

  const handleNext = () => {
    setReviewsIndex(Math.min(singleCard ? Reviews.length - 1 : Reviews.length - 2, ReviewsIndex + 1));
    setIsPaused(false); // Resume auto-play after manual interaction
  };

  //console.log(size)
  //console.log(singleCard)
  return (
    <section
      className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-2 md:px-[40px] "
      aria-labelledby="reviews-heading"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <h4
          id="reviews-heading"
          style={{
            fontFamily: "var(--font-public-sans)",
            fontWeight: 500,
          }}
          className="text-black text-5xl text-left w-full"
        >What Our Patients Say</h4>
      </div>
      <div
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 400,
        }}
        className=" text-[#5B5F67] mt-[16px] w-full justify-between items-center flex flex-row"
      >
        <div className="md:w-[45%] w-full">
          <p
            className='text-lg'
          >Our patients' experiences speak volumes about our care. See their stories below.Real feedback from those who trust us with their health. Hear their thoughts here.</p>
        </div>
        <div className=" md:flex hidden flex-row space-x-[16px]">
          <button className=" bg-white border border-[#0094E0] rounded-full p-[18px] py-[20px] hover:cursor-pointer" onClick={handlePrevious}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M0.25 6.00048C0.250003 6.37404 0.415654 6.72061 0.572519 6.98083C0.741796 7.26165 0.969444 7.55158 1.21918 7.83426C1.72018 8.40133 2.37387 9.01031 3.00824 9.56118C3.64633 10.1153 4.28222 10.6255 4.75725 10.9963C4.99516 11.182 5.19364 11.3334 5.33304 11.4387C5.40276 11.4914 5.45776 11.5326 5.49558 11.5607L5.53915 11.5931L5.55071 11.6017L5.55472 11.6046C5.88822 11.8503 6.35816 11.7794 6.60382 11.4459C6.84947 11.1124 6.77828 10.6429 6.44482 10.3973L6.43209 10.3879L6.39204 10.3581C6.35662 10.3317 6.3042 10.2925 6.2372 10.2418C6.10317 10.1406 5.91103 9.99399 5.68019 9.81382C5.21772 9.45285 4.60363 8.95995 3.99173 8.4286C3.37611 7.89401 2.77981 7.33518 2.34331 6.84111C2.3157 6.80986 2.28899 6.77915 2.26316 6.749L17 6.74899C17.4142 6.74899 17.75 6.41321 17.75 5.99899C17.75 5.58478 17.4142 5.24899 17 5.24899L2.2657 5.249C2.29073 5.21979 2.31661 5.19006 2.34331 5.15984C2.77981 4.66577 3.37611 4.10694 3.99173 3.57235C4.60363 3.04099 5.21772 2.5481 5.68019 2.18713C5.91102 2.00695 6.10317 1.86036 6.2372 1.75911C6.30419 1.7085 6.35662 1.66925 6.39203 1.64285L6.43208 1.61308L6.44481 1.60367C6.77828 1.358 6.84947 0.888521 6.60382 0.555035C6.35815 0.221533 5.88822 0.150642 5.55472 0.396304L5.55071 0.399264L5.53915 0.407818L5.49558 0.440203C5.45776 0.468397 5.40276 0.509569 5.33304 0.562239C5.19363 0.66755 4.99516 0.818986 4.75725 1.00468C4.28222 1.37546 3.64633 1.88567 3.00823 2.43977C2.37387 2.99064 1.72018 3.59962 1.21918 4.16669C0.969444 4.44937 0.741796 4.7393 0.572519 5.02012C0.416597 5.27878 0.251992 5.62276 0.250017 5.99375" fill="#0094E0" />
            </svg>
          </button>
          <button className=" bg-[#0094E0] border border-white rounded-full p-[18px] py-[20px] hover:cursor-pointer" onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M17.75 6.00047C17.75 5.62691 17.5844 5.28034 17.4275 5.02011C17.2582 4.7393 17.0306 4.44937 16.7808 4.16669C16.2798 3.59962 15.6262 2.99064 14.9918 2.43977C14.3537 1.88567 13.7178 1.37546 13.2428 1.00468C13.0049 0.818986 12.8064 0.66755 12.667 0.562239C12.5973 0.509569 12.5423 0.468397 12.5044 0.440203L12.4609 0.407818L12.4493 0.399264L12.4453 0.396304C12.1118 0.150642 11.6419 0.221533 11.3962 0.555035C11.1505 0.888521 11.2217 1.358 11.5552 1.60367L11.5679 1.61308L11.608 1.64285C11.6434 1.66925 11.6958 1.7085 11.7628 1.75911C11.8968 1.86036 12.089 2.00695 12.3198 2.18713C12.7823 2.5481 13.3964 3.04099 14.0083 3.57235C14.6239 4.10694 15.2202 4.66576 15.6567 5.15983C15.6843 5.19108 15.711 5.2218 15.7369 5.25195L1 5.25196C0.585787 5.25196 0.25 5.58774 0.25 6.00195C0.25 6.41617 0.585787 6.75196 1 6.75196L15.7343 6.75195C15.7093 6.78116 15.6834 6.81088 15.6567 6.84111C15.2202 7.33518 14.6239 7.89401 14.0083 8.4286C13.3964 8.95995 12.7823 9.45285 12.3198 9.81382C12.089 9.99399 11.8968 10.1406 11.7628 10.2418C11.6958 10.2925 11.6434 10.3317 11.608 10.3581L11.5679 10.3879L11.5552 10.3973C11.2217 10.6429 11.1505 11.1124 11.3962 11.4459C11.6419 11.7794 12.1118 11.8503 12.4453 11.6046L12.4493 11.6017L12.4609 11.5931L12.5044 11.5607C12.5423 11.5326 12.5973 11.4914 12.667 11.4387C12.8064 11.3334 13.0049 11.182 13.2428 10.9963C13.7178 10.6255 14.3537 10.1153 14.9918 9.56118C15.6262 9.01031 16.2798 8.40133 16.7808 7.83425C17.0306 7.55158 17.2582 7.26165 17.4275 6.98083C17.5834 6.72217 17.748 6.37819 17.75 6.0072" fill="#E5F6FF" />
            </svg>
          </button>
        </div>

      </div>

      <Carousel className="w-full h-full mt-[60px]">
        <CarouselContent className="xl:gap-x-4 xl:mr-8">

          {
            Reviews.map((item, index) => (
              <CarouselItem className={`py-4 xl:basis-1/2 ${index == 0 ? 'xl:pl-4' : ''} ${index == Reviews.length - 1 ? 'xl:mr-4' : ''} relative flex`} key={index}>
                {/* <div className="w-full max-h-[454px] xl:h-[454px] relative flex items-end ">
                  <div className=" rounded-tr-[20px] rounded-tl-[20px] rounded-br-[80px] rounded-[80px] overflow-hidden max-h-[120px] max-w-[120px] w-20 h-20 lg:h-[120px] lg:w-[120px]  bg-[#F8FAF9] border-10 border-white ml-4 sm:ml-[50px] absolute -top-1">
                    <Image src={item.img} alt="Review Profile Pic" layout="fill" className="w-[90%] h-[90%] object-cover " />
                  </div>
                  <div className="w-full h-full rounded-[24px] bg-[#F8FAF9] md:max-h-[419px] xl:h-[419px] flex flex-col p-2 md:p-[32px]">
                    <div className="self-end">
                      <StarRating rating={item.rating} size={30} />
                    </div>
                    <div className="lg:mt-22 md:mt-0 sm:mt-12 mt-12 xl:mt-auto flex flex-col space-y-[32px] ">
                      <blockquote
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 500,
                        }}
                        className="md:text-2xl sm:text-xl text-lg text-[#5B5F67] lg:pt-0  md:pt-10"
                      >{item.body}</blockquote>

                      <cite
                        style={{
                          fontFamily: "var(--font-public-sans)",
                          fontWeight: 600,
                        }}
                        className="text-3xl text-black not-italic"
                      >{item.name}</cite>

                    </div>
                  </div>
                </div> */}
                <ReviewCard
                  image={item.img}
                  name={item.name}
                  testimonial={item.body}
                  role="Patient"
                  company={`Mountain Spine Orthopedics ${item.location}, FL`}
                />
              </CarouselItem>
            ))
          }


        </CarouselContent>

      </Carousel>
      
      <div className=" md:hidden flex flex-row space-x-[16px] self-center mt-4">
        <div className=" bg-white border border-[#0094E0] rounded-full p-[18px] py-[20px] hover:cursor-pointer" >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M0.25 6.00048C0.250003 6.37404 0.415654 6.72061 0.572519 6.98083C0.741796 7.26165 0.969444 7.55158 1.21918 7.83426C1.72018 8.40133 2.37387 9.01031 3.00824 9.56118C3.64633 10.1153 4.28222 10.6255 4.75725 10.9963C4.99516 11.182 5.19364 11.3334 5.33304 11.4387C5.40276 11.4914 5.45776 11.5326 5.49558 11.5607L5.53915 11.5931L5.55071 11.6017L5.55472 11.6046C5.88822 11.8503 6.35816 11.7794 6.60382 11.4459C6.84947 11.1124 6.77828 10.6429 6.44482 10.3973L6.43209 10.3879L6.39204 10.3581C6.35662 10.3317 6.3042 10.2925 6.2372 10.2418C6.10317 10.1406 5.91103 9.99399 5.68019 9.81382C5.21772 9.45285 4.60363 8.95995 3.99173 8.4286C3.37611 7.89401 2.77981 7.33518 2.34331 6.84111C2.3157 6.80986 2.28899 6.77915 2.26316 6.749L17 6.74899C17.4142 6.74899 17.75 6.41321 17.75 5.99899C17.75 5.58478 17.4142 5.24899 17 5.24899L2.2657 5.249C2.29073 5.21979 2.31661 5.19006 2.34331 5.15984C2.77981 4.66577 3.37611 4.10694 3.99173 3.57235C4.60363 3.04099 5.21772 2.5481 5.68019 2.18713C5.91102 2.00695 6.10317 1.86036 6.2372 1.75911C6.30419 1.7085 6.35662 1.66925 6.39203 1.64285L6.43208 1.61308L6.44481 1.60367C6.77828 1.358 6.84947 0.888521 6.60382 0.555035C6.35815 0.221533 5.88822 0.150642 5.55472 0.396304L5.55071 0.399264L5.53915 0.407818L5.49558 0.440203C5.45776 0.468397 5.40276 0.509569 5.33304 0.562239C5.19363 0.66755 4.99516 0.818986 4.75725 1.00468C4.28222 1.37546 3.64633 1.88567 3.00823 2.43977C2.37387 2.99064 1.72018 3.59962 1.21918 4.16669C0.969444 4.44937 0.741796 4.7393 0.572519 5.02012C0.416597 5.27878 0.251992 5.62276 0.250017 5.99375" fill="#0094E0" />
          </svg>
        </div>
        <div className=" bg-[#0094E0] border border-white rounded-full p-[18px] py-[20px] hover:cursor-pointer" >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M17.75 6.00047C17.75 5.62691 17.5844 5.28034 17.4275 5.02011C17.2582 4.7393 17.0306 4.44937 16.7808 4.16669C16.2798 3.59962 15.6262 2.99064 14.9918 2.43977C14.3537 1.88567 13.7178 1.37546 13.2428 1.00468C13.0049 0.818986 12.8064 0.66755 12.667 0.562239C12.5973 0.509569 12.5423 0.468397 12.5044 0.440203L12.4609 0.407818L12.4493 0.399264L12.4453 0.396304C12.1118 0.150642 11.6419 0.221533 11.3962 0.555035C11.1505 0.888521 11.2217 1.358 11.5552 1.60367L11.5679 1.61308L11.608 1.64285C11.6434 1.66925 11.6958 1.7085 11.7628 1.75911C11.8968 1.86036 12.089 2.00695 12.3198 2.18713C12.7823 2.5481 13.3964 3.04099 14.0083 3.57235C14.6239 4.10694 15.2202 4.66576 15.6567 5.15983C15.6843 5.19108 15.711 5.2218 15.7369 5.25195L1 5.25196C0.585787 5.25196 0.25 5.58774 0.25 6.00195C0.25 6.41617 0.585787 6.75196 1 6.75196L15.7343 6.75195C15.7093 6.78116 15.6834 6.81088 15.6567 6.84111C15.2202 7.33518 14.6239 7.89401 14.0083 8.4286C13.3964 8.95995 12.7823 9.45285 12.3198 9.81382C12.089 9.99399 11.8968 10.1406 11.7628 10.2418C11.6958 10.2925 11.6434 10.3317 11.608 10.3581L11.5679 10.3879L11.5552 10.3973C11.2217 10.6429 11.1505 11.1124 11.3962 11.4459C11.6419 11.7794 12.1118 11.8503 12.4453 11.6046L12.4493 11.6017L12.4609 11.5931L12.5044 11.5607C12.5423 11.5326 12.5973 11.4914 12.667 11.4387C12.8064 11.3334 13.0049 11.182 13.2428 10.9963C13.7178 10.6255 14.3537 10.1153 14.9918 9.56118C15.6262 9.01031 16.2798 8.40133 16.7808 7.83425C17.0306 7.55158 17.2582 7.26165 17.4275 6.98083C17.5834 6.72217 17.748 6.37819 17.75 6.0072" fill="#E5F6FF" />
          </svg>
        </div>
      </div>


    </section>
  )
}
