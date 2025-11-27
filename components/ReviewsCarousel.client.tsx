'use client'

import React, { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Testimonial } from '@/components/ui/testimonial-card'

interface Review {
  author: string
  reviewBody: string
  reviewRating: number
}

interface ReviewsCarouselProps {
  reviews: Review[]
  cityName: string
  rating: number
  reviewCount: number
}

export default function ReviewsCarousel({ reviews, cityName, rating, reviewCount }: ReviewsCarouselProps) {
  const [hasMounted, setHasMounted] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    setHasMounted(true)
    
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const totalSlides = Math.ceil(reviews.length / itemsPerView)

  return (
    <section className="w-full max-w-[1440px] mx-auto flex flex-col py-10 space-y-6 h-full px-2 md:px-[40px]" aria-labelledby="patient-reviews-heading">
      <div className='flex flex-col space-y-2'>
        <h2
          id="patient-reviews-heading"
          style={{
            fontFamily: "var(--font-public-sans)",
            fontWeight: 500,
          }}
          className="text-[#111315] text-2xl sm:text-3xl"
        >
          What Our {cityName} Patients Say
        </h2>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
          }}
          className="text-[#424959] text-base sm:text-lg"
        >
          Average Rating: {rating} out of 5 stars — Based on {reviewCount} patient reviews.
        </p>
      </div>

      <div className="relative w-full mt-6 lg:mt-10">
        {hasMounted ? (
          <>
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
                skipSnaps: false,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {/* All reviews are rendered in HTML for SEO - carousel just controls visibility */}
                {reviews.map((review, index) => (
                  <CarouselItem 
                    key={index} 
                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full">
                      <Testimonial
                        name={review.author}
                        role="Patient"
                        testimonial={review.reviewBody}
                        rating={review.reviewRating}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious 
                className="hidden sm:flex !-left-4 md:!-left-6 lg:!-left-8 xl:!-left-12 !h-10 !w-10 md:!h-11 md:!w-11 border-2 border-[#0A50EC] bg-white hover:bg-[#0A50EC] hover:text-white text-[#0A50EC] transition-all duration-300 shadow-md hover:shadow-lg z-10" 
                aria-label="Previous reviews"
              />
              <CarouselNext 
                className="hidden sm:flex !-right-4 md:!-right-6 lg:!-right-8 xl:!-right-12 !h-10 !w-10 md:!h-11 md:!w-11 border-2 border-[#0A50EC] bg-white hover:bg-[#0A50EC] hover:text-white text-[#0A50EC] transition-all duration-300 shadow-md hover:shadow-lg z-10" 
                aria-label="Next reviews"
              />
            </Carousel>
            
            {/* Mobile navigation dots */}
            <div className="flex justify-center items-center gap-2 mt-8 sm:hidden">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index * itemsPerView)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    Math.floor(current / itemsPerView) === index
                      ? 'w-10 bg-[#0A50EC]'
                      : 'w-2.5 bg-[#D1D5DB] hover:bg-[#9CA3AF]'
                  }`}
                  aria-label={`Go to slide ${index + 1} of ${totalSlides}`}
                />
              ))}
            </div>

          </>
        ) : (
          // SSR fallback: Show all reviews in a grid for SEO (all reviews visible in HTML)
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {reviews.map((review, index) => (
              <Testimonial
                key={index}
                name={review.author}
                role="Patient"
                testimonial={review.reviewBody}
                rating={review.reviewRating}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

