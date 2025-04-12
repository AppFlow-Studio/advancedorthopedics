import ContactUsSection from '@/components/ContactUsSection'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import React from 'react'

export default function BookAnAppointment() {
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full pt-26'>
        <ContactUsSection />
        <RatingsAndReviews />
    </main>
  )
}
