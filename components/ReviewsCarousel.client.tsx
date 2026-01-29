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

// Helper function to sanitize review text by replacing therapy mentions
// Optimized: use simpler regex patterns and memoize common replacements
function sanitizeReviewText(text: string): string {
  if (!text) return text;
  
  // Quick check - if no therapy mentions, return early
  const lowerText = text.toLowerCase();
  if (!lowerText.includes('therapy')) return text;
  
  // Replace "physical therapy" first (most specific)
  text = text.replace(/physical\s+therapy/gi, (match, offset, string) => {
    // Check context - if followed by "coordination" or "referrals", use "treatment"
    const after = string.substring(offset + match.length, offset + match.length + 25).toLowerCase();
    return (after.includes('coordination') || after.includes('referral')) ? 'treatment' : 'care';
  });
  
  // Replace standalone "therapy" only if context suggests physical therapy
  // More conservative approach - only replace when clearly referring to physical therapy
  text = text.replace(/\btherapy\b/gi, (match, offset, string) => {
    const before = string.substring(Math.max(0, offset - 25), offset).toLowerCase();
    const after = string.substring(offset + match.length, offset + match.length + 25).toLowerCase();
    
    // Skip if already part of "physical therapy" (shouldn't happen after first replace, but safety check)
    if (before.includes('physical ')) return match;
    
    // Replace if context clearly suggests physical therapy
    if (before.includes('injection') && after.includes(' and')) {
      return ''; // "injection therapy and..." -> "injection and..."
    }
    if (before.includes('physical ') || after.includes('coordination') || after.includes('referral')) {
      return 'treatment';
    }
    
    return match; // Keep original if unclear
  });
  
  return text;
}

export default function ReviewsCarousel({ reviews, cityName, rating, reviewCount }: ReviewsCarouselProps) {
  const [hasMounted, setHasMounted] = useState(false)
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  // Sanitize reviews to remove therapy mentions
  const sanitizedReviews = reviews.map(review => ({
    ...review,
    reviewBody: sanitizeReviewText(review.reviewBody)
  }))

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
                {sanitizedReviews.map((review, index) => (
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
          </>
        ) : (
          // SSR fallback: Show all reviews in a grid for SEO (all reviews visible in HTML)
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {sanitizedReviews.map((review, index) => (
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

