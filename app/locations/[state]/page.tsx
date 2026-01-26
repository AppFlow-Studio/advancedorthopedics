'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Building2, CheckCircle } from 'lucide-react'
import { clinics } from '@/components/data/clinics'
import ClinicsMap from '@/components/ClinicsMap'
import { TextAnimate } from '@/components/magicui/text-animate'
import Image from 'next/image'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { STATE_METADATA, VALID_STATE_SLUGS } from '@/lib/locationRedirects'
import { STATE_FAQS } from '@/lib/state-faqs'
import BookAnAppoitmentButton from '@/components/BookAnAppoitmentButton'
import { MAIN_PHONE_DISPLAY, MAIN_PHONE_TEL, LOCATION_HOURS_DISPLAY } from '@/lib/locationConstants'
import StateSeoSections from '@/components/StateSeoSections'

export default function StateHubPage() {
  const params = useParams()
  const state = params.state as string
  
  // Validate state slug (client-side validation)
  const isValidState = VALID_STATE_SLUGS.includes(state as any)
  if (!isValidState) {
    notFound()
  }
  
  const stateInfo = STATE_METADATA[state]
  // Filter clinics client-side to avoid server-side require issues
  const stateClinics = clinics.filter(clinic => clinic.stateSlug === state)
  const stateFaqs = STATE_FAQS[state] || []
  
  // Generate top cities for intro paragraph
  const topCities = stateClinics
    .slice(0, 10)
    .map(clinic => clinic.region.split(',')[0].trim())
    .join(', ')
  
  // Prepare city locations array for StateSeoSections
  const cityLocations = stateClinics.map(clinic => ({
    name: clinic.name,
    slug: clinic.locationSlug,
    stateSlug: clinic.stateSlug,
    url: `/locations/${clinic.stateSlug}/${clinic.locationSlug}`,
    address: clinic.address
  }))
  
  // Define state-specific nearby regions
  const nearbyRegionsByState: Record<string, string[]> = {
    florida: [
      'South Florida',
      'Central Florida',
      'Treasure Coast',
      'Miami-Dade County',
      'Broward County',
      'Palm Beach County',
      'Orange County',
      'St. Lucie County',
      'Duval County'
    ],
    'new-jersey': [
      'North Jersey',
      'Central Jersey',
      'South Jersey',
      'Essex County',
      'Middlesex County',
      'Monmouth County',
      'Bergen County',
      'Camden County',
      'Hudson County'
    ],
    'new-york': [
      'Manhattan',
      'Midtown',
      'Upper East Side',
      'Upper West Side',
      'Chelsea',
      'Financial District',
      'Brooklyn',
      'Queens',
      'Jersey City',
      'Hoboken'
    ],
    pennsylvania: [
      'Philadelphia',
      'Pittsburgh',
      'Allentown',
      'Erie',
      'Harrisburg',
      'Scranton',
      'Lancaster',
      'Reading',
      'York'
    ]
  }
  
  const nearbyRegions = nearbyRegionsByState[state] || []
  
  // Create local state for selected location
  const [selectedLocation, setSelectedLocation] = useState(stateClinics[0] || null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [hasMounted, setHasMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    setHasMounted(true)
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    if (!api) return
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  // Location Card Component - SEO optimized with semantic HTML
  const LocationCard = ({ clinic, index, isMobile = false }: { clinic: typeof clinics[0], index: number, isMobile?: boolean }) => (
    <article
      key={index}
      className="group cursor-pointer h-full"
      itemScope
      itemType="https://schema.org/MedicalBusiness"
    >
      <Link href={`/locations/${clinic.stateSlug}/${clinic.locationSlug}`} className="block h-full">
        <motion.div
          variants={isMobile ? undefined : itemVariants}
          whileHover={isMobile ? undefined : "hover"}
          onHoverStart={isMobile ? undefined : () => setHoveredIndex(index)}
          onHoverEnd={isMobile ? undefined : () => setHoveredIndex(null)}
          className="relative h-full bg-gradient-to-br from-[#E0F5FF] to-[#F8FAFC] rounded-3xl p-6 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
        >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 right-4 w-16 h-16 bg-[#0A50EC] rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#252932] rounded-full"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <motion.div
              animate={hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 bg-[#0A50EC] rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Building2 className="w-6 h-6 text-white" />
            </motion.div>
            <div className="text-right">
              <span className="text-sm font-medium text-[#0A50EC] bg-white/80 px-3 py-1 rounded-full">
                {clinic.region ? clinic.region.split(',')[0].trim() : (stateInfo?.name || 'Location')}
              </span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#252932] mb-4 group-hover:text-[#0A50EC] transition-colors duration-300" itemProp="name">
            {clinic.name}
          </h3>

          <div className="flex items-start space-x-3 mb-4" itemScope itemType="https://schema.org/PostalAddress">
            <MapPin className="w-5 h-5 text-[#0A50EC] mt-0.5 flex-shrink-0" aria-hidden="true" />
            <address className="text-[#424959] text-sm leading-relaxed not-italic" itemProp="streetAddress">
              {clinic.address || '123 Medical Center Dr, Suite 100'}
            </address>
          </div>

          <div className="flex items-center space-x-3 mb-4" onClick={(e) => e.stopPropagation()}>
            <Phone className="w-5 h-5 text-[#0A50EC] flex-shrink-0" aria-hidden="true" />
            <a
              href={`tel:${MAIN_PHONE_TEL}`}
              className="text-[#252932] font-medium hover:text-[#0A50EC] transition-colors duration-300"
              itemProp="telephone"
              onClick={(e) => e.stopPropagation()}
            >
              {MAIN_PHONE_DISPLAY}
            </a>
          </div>

          <div className="flex items-start space-x-3 mb-6">
            <Clock className="w-5 h-5 text-[#0A50EC] mt-0.5 flex-shrink-0" aria-hidden="true" />
            <div className="text-[#424959] text-sm">
              <p className="font-medium">Hours: {LOCATION_HOURS_DISPLAY}</p>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#0A50EC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      </motion.div>
      </Link>
    </article>
  )

  if (stateClinics.length === 0) {
    notFound()
  }

  // Services data for the services section
  const services = [
    { slug: 'spine', name: 'Spine Care', description: 'Evaluation and treatment for back pain, neck pain, herniated discs, spinal stenosis, and degenerative disc disease.' },
    { slug: 'back', name: 'Back Pain', description: 'Comprehensive care for lower back pain, sciatica, and lumbar spine conditions.' },
    { slug: 'neck', name: 'Neck Pain', description: 'Specialized treatment for cervical spine conditions, neck pain, and related symptoms.' },
    { slug: 'shoulder', name: 'Shoulder Care', description: 'Evaluation and treatment for shoulder injuries, arthritis, rotator cuff tears, and shoulder pain.' },
    { slug: 'hip', name: 'Hip Care', description: 'Treatment for hip pain, arthritis, hip impingement, and hip replacement options.' },
    { slug: 'knee', name: 'Knee Care', description: 'Comprehensive knee care including arthritis, ACL injuries, meniscus tears, and knee replacement.' },
    { slug: 'hand-wrist-elbow', name: 'Hand, Wrist & Elbow', description: 'Specialized care for carpal tunnel syndrome, trigger finger, tennis elbow, golfer\'s elbow, and other hand, wrist, and elbow conditions.' },
    { slug: 'foot-ankle', name: 'Foot & Ankle', description: 'Expert care for foot pain, ankle injuries, bunions, and plantar fasciitis.' },
  ]

  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full pb-10' itemScope itemType="https://schema.org/MedicalOrganization">
      {/* 1. HERO SECTION */}
      <section className="w-full h-full flex flex-col relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_6rem)]" aria-label={`Spine & Orthopedic Surgeons in ${stateInfo?.name}`}>
        <div
          style={{ filter: 'blur(30px)' }}
          className="w-full h-[120px] absolute top-0 z-[1]"
        />
        <Image
          src={'/herosectionimg.jpg'}
          priority={true}
          fetchPriority="high"
          layout='fill'
          className="h-full absolute top-0 object-cover object-center md:object-center w-full"
          alt={`Board-certified spine and orthopedic surgeons providing expert care across ${stateInfo?.name}. Same-day and next-day appointments available.`}
        />
        <div
          className="lg:w-[100%] z-[1] h-full absolute left-0 top-0 md:w-[100%] w-full"
          style={{
            background: 'linear-gradient(180deg, rgba(10, 80, 236, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)',
          }}
        />
        <div
          className="w-full h-[100px] absolute bottom-0 z-[1]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.8) 100%)',
          }}
        />
        <div className="z-[2] flex flex-col w-full h-full text-left relative pt-32 lg:pt-26 pb-20 px-6 lg:px-[80px]">
          <div className='max-w-[1440px] w-full flex flex-col items-start justify-start'>
            <div className='flex flex-row space-x-[4px] rounded-[62px] w-fit items-center justify-center px-[20px] py-[10px] mb-4'
              style={{ background: 'rgba(255, 255, 255, 0.50)' }}
            >
              <Link
                href="/locations"
                style={{ fontFamily: "var(--font-public-sans)", fontWeight: 400 }}
                className="text-[#111315] hover:text-[#2258AC] transition-colors"
              >
                Locations
              </Link>
              <span className="text-[#111315]">/</span>
              <span className="text-[#2258AC]">{stateInfo?.name}</span>
            </div>
            
            {/* H1 - Exact format from template */}
            <TextAnimate 
              animation="blurInUp" 
              by="character" 
              once 
              as="h1"
              style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 500 }}
              className='text-[#252932] text-6xl'
            >
              {`Spine & Orthopedic Surgeons in ${stateInfo?.name || ''}`}
            </TextAnimate>
            
            {/* Subhead - using paragraph for better heading hierarchy */}
            <p
              style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 500 }}
              className='text-[#252932] text-2xl mt-2'
            >
              Board-certified specialists at {stateClinics.length} convenient {stateInfo?.name} location{stateClinics.length > 1 ? 's' : ''}.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white w-full">
        {/* 2. LOCATIONS GRID - First after hero */}
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-16">
          <section id="locations" className="scroll-mt-20" aria-labelledby="locations-heading">
            <h2 id="locations-heading" className="text-4xl md:text-5xl font-bold text-[#252932] my-6 text-center mb-12">
              Our {stateInfo?.name} Locations
            </h2>

            {/* Mobile Carousel - Always rendered for SEO, interactive on client */}
            <div className="block md:hidden mb-16">
              <div className="w-full">
                <Carousel
                  setApi={setApi}
                  className="w-full"
                  opts={{ align: "center", containScroll: "trimSnaps" }}
                >
                  <CarouselContent>
                    {stateClinics.map((clinic, index) => (
                      <CarouselItem key={index} className="basis-full py-6">
                        <LocationCard clinic={clinic} index={index} isMobile={true} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-white/90 backdrop-blur-sm border border-[#0A50EC]/20 hover:bg-white hover:shadow-xl transition-all duration-300 absolute -left-5 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="bg-white/90 backdrop-blur-sm border border-[#0A50EC]/20 hover:bg-white hover:shadow-xl transition-all duration-300 absolute -right-5 top-1/2 -translate-y-1/2" />
                </Carousel>
                {hasMounted && (
                  <div className="flex justify-center mt-6 space-x-2">
                    {stateClinics.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current
                          ? 'bg-[#0A50EC] w-6'
                          : 'bg-[#0A50EC]/30 hover:bg-[#0A50EC]/50'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Grid - Always rendered for SEO, visible to crawlers */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            >
              {stateClinics.map((clinic, index) => (
                <LocationCard key={index} clinic={clinic} index={index} />
              ))}
            </motion.div>
            
            {/* Static HTML fallback for crawlers - Always visible, hidden visually but accessible to bots */}
            <div className="sr-only" aria-hidden="false">
              <h3>All {stateInfo?.name} Locations</h3>
              <ul>
                {stateClinics.map((clinic) => (
                  <li key={clinic.id}>
                    <Link href={`/locations/${clinic.stateSlug}/${clinic.locationSlug}`}>
                      {clinic.name} - {clinic.address} - {MAIN_PHONE_DISPLAY}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* 3. MAP - Second after locations */}
        <ClinicsMap startingClinic={selectedLocation} stateName={stateInfo?.name} />
        
        {/* 4. INTRO PARAGRAPH - Third after map */}
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-16">
          <section className="mb-16" aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="sr-only">About Our {stateInfo?.name} Locations</h2>
            <p className="text-lg text-[#424959] leading-relaxed max-w-4xl mx-auto">
              Mountain Spine & Orthopedics provides comprehensive orthopedic and spine care across {stateInfo?.name}, with board-certified surgeons specializing in spine surgery, joint replacement, minimally invasive spine surgery, sports medicine, and pain management. Our {stateClinics.length} convenient {stateInfo?.name} location{stateClinics.length > 1 ? 's' : ''} serve patients in {topCities} and surrounding communities.{state === 'new-jersey' ? ' Our New Jersey clinics serve patients throughout North, Central, and South Jersey, with convenient access via major corridors including the Garden State Parkway and Route 22.' : state === 'new-york' ? ' Our New York locations provide accessible orthopedic care with convenient parking and easy transit access for patients throughout the region.' : state === 'pennsylvania' ? ' Our Pennsylvania clinics serve patients across the state with convenient locations and accessible parking for easy appointments.' : ' Our Florida clinics serve patients throughout the state with convenient locations and ample parking for easy access.'} We offer same-day and next-day appointments for urgent orthopedic needs, advanced diagnostic imaging coordination, and personalized treatment plans that may include non-surgical options like medications and injections, or surgical interventions when appropriate. Our team focuses on accurate diagnosis, evidence-based care, and helping patients return to their active lifestyles.
            </p>
          </section>

          {/* SEO Sections: Services, Conditions, Treatments, Areas We Serve */}
          <StateSeoSections
            stateName={stateInfo?.name || ''}
            stateSlug={state}
            nearbyRegions={nearbyRegions}
          />

          {/* 5. WHY CHOOSE US */}
          <section
            className="mb-16 bg-gradient-to-r from-[#E0F5FF] to-[#F8FAFC] rounded-3xl p-8 md:p-12 border border-white/50"
            aria-labelledby="why-choose-heading"
          >
            <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-[#252932] mb-8 text-center">
              Why Patients Choose Mountain Spine & Orthopedics in {stateInfo?.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Board-certified, fellowship-trained orthopedic and spine surgeons with advanced training',
                'Minimally invasive surgical techniques when appropriate, reducing recovery time',
                'Same-day and next-day appointment availability for urgent needs',
                'Advanced diagnostic imaging coordination and comprehensive evaluation',
                'Non-surgical treatment options including medications, injections, and activity modification when appropriate',
                `${stateClinics.length} convenient ${stateInfo?.name} location${stateClinics.length > 1 ? 's' : ''} for easy access`,
                'Most major insurance plans accepted'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#0A50EC] flex-shrink-0 mt-0.5" />
                  <p className="text-[#424959]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. PATIENT REVIEWS */}
          <section
            className="mb-16"
            aria-labelledby="reviews-heading"
          >
            <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold text-[#252932] mb-6 text-center">
              Patient Reviews in {stateInfo?.name}
            </h2>
            <p className="text-[#424959] text-lg mb-6 text-center max-w-3xl mx-auto">
              Our patients share their experiences at our {stateInfo?.name} locations. Read location-specific reviews and ratings on each city page.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stateClinics.slice(0, 6).map((clinic) => (
                <Link
                  key={clinic.id}
                  href={`/locations/${clinic.stateSlug}/${clinic.locationSlug}`}
                  className="p-4 bg-white rounded-xl border border-gray-200 hover:border-[#0A50EC] hover:shadow-md transition-all duration-300"
                >
                  <p className="text-[#252932] font-semibold mb-1">
                    Read reviews for {clinic.region.split(',')[0].trim()}
                  </p>
                  {clinic.rating && clinic.reviewCount && clinic.reviewCount > 0 && (
                    <p className="text-sm text-[#424959]">
                      {clinic.rating} stars • {clinic.reviewCount} reviews
                    </p>
                  )}
                  {(!clinic.rating || !clinic.reviewCount || clinic.reviewCount === 0) && (
                    <p className="text-sm text-[#424959]">
                      View patient reviews
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </section>

          {/* 7. INSURANCE ACCEPTED */}
          <section
            className="mb-16"
            aria-labelledby="insurance-heading"
          >
            <h2 id="insurance-heading" className="text-3xl md:text-4xl font-bold text-[#252932] mb-6 text-center">
              Insurance Accepted in {stateInfo?.name}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-[#424959]">
              <p className="text-lg">
                We accept PPO insurance plans and Personal Injury Protection (PIP) coverage at our {stateInfo?.name} locations. This allows many patients to access our orthopedic and spine care services.
              </p>
              <p>
                To verify that your specific PPO plan or PIP coverage is accepted and to understand your coverage details, please contact your preferred location. Our team can help you understand your benefits and any authorization requirements.
              </p>
              <p>
                For detailed information about insurance acceptance and billing, please review our <Link href="/insurance-policy" className="text-[#0A50EC] hover:underline font-medium">insurance and billing details</Link>.
              </p>
            </div>
          </section>

          {/* 8. FINAL CTA */}
          <section
            className="mb-16 text-center bg-gradient-to-r from-[#0A50EC] to-[#0840C0] rounded-3xl p-8 md:p-12 text-white"
            aria-labelledby="cta-heading"
          >
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Book an Appointment in {stateInfo?.name}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Schedule your consultation with a board-certified orthopedic or spine specialist at one of our convenient {stateInfo?.name} locations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <BookAnAppoitmentButton />
              <Link
                href="/find-care/book-an-appointment"
                className="px-8 py-4 bg-white text-[#0A50EC] rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Request Appointment
              </Link>
            </div>
          </section>

          {/* 9. FAQ SECTION */}
          <section
            className="mb-16"
            aria-labelledby="faq-heading"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-[#252932] mb-8 text-center">
              Frequently Asked Questions About Orthopedic Care in {stateInfo?.name}
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {stateFaqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border-b border-gray-200"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <AccordionTrigger 
                      className="text-left text-lg font-semibold text-[#252932] hover:text-[#0A50EC]"
                      itemProp="name"
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent 
                      className="text-[#424959] leading-relaxed pt-2"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <p itemProp="text">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
