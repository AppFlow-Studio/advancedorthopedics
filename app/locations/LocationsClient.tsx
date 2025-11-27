'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Building2 } from 'lucide-react'
import { clinics } from '@/components/data/clinics'
import ClinicsMap from '@/components/ClinicsMap'
import { TextAnimate } from '@/components/magicui/text-animate'
import Image from 'next/image'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"

interface LocationsClientProps {
  selectedLocation?: any
  setSelectedLocation?: (location: any) => void
}

export default function LocationsClient({ selectedLocation, setSelectedLocation }: LocationsClientProps) {
  // Create local state if props are not provided
  const [localSelectedLocation, setLocalSelectedLocation] = useState(selectedLocation);
  
  // Use props if provided, otherwise use local state
  const currentSelectedLocation = selectedLocation !== undefined ? selectedLocation : localSelectedLocation;
  const currentSetSelectedLocation = setSelectedLocation || setLocalSelectedLocation;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [hasMounted, setHasMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    setHasMounted(true)
    // Calculate initial dimensions
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Initial calculation
    updateDimensions()

    // Add resize listener
    window.addEventListener('resize', updateDimensions)

    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    if (!api) {
      return
    }

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

  // Location Card Component
  const LocationCard = ({ clinic, index, isMobile = false }: { clinic: any, index: number, isMobile?: boolean }) => (
    <motion.div
      key={index}
      variants={isMobile ? undefined : itemVariants}
      whileHover={isMobile ? undefined : "hover"}
      onHoverStart={isMobile ? undefined : () => setHoveredIndex(index)}
      onHoverEnd={isMobile ? undefined : () => setHoveredIndex(null)}
      onClick={() => {
        currentSetSelectedLocation(clinic)
        const goToSection = () => {
          const section = document.getElementById('Locations')
          if (section) {
            section.scrollIntoView({ block: 'start', behavior: 'smooth' })
          }
        }
        goToSection()
      }}
      className="group cursor-pointer h-full"
    >
      <div className="relative h-full bg-gradient-to-br from-[#E0F5FF] to-[#F8FAFC] rounded-3xl p-6 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 right-4 w-16 h-16 bg-[#0A50EC] rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#252932] rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
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
                {clinic.region || 'Florida'}
              </span>
            </div>
          </div>

          {/* Clinic Name */}
          <h3 className="text-2xl font-bold text-[#252932] mb-4 group-hover:text-[#0A50EC] transition-colors duration-300">
            {clinic.name}
          </h3>

          {/* Address */}
          <div className="flex items-start space-x-3 mb-4">
            <MapPin className="w-5 h-5 text-[#0A50EC] mt-0.5 flex-shrink-0" />
            <p className="text-[#424959] text-sm leading-relaxed">
              {clinic.address || '123 Medical Center Dr, Suite 100'}
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3 mb-4">
            <Phone className="w-5 h-5 text-[#0A50EC] flex-shrink-0" />
            <a
              href="tel:(561) 223-9959"
              className="text-[#252932] font-medium hover:text-[#0A50EC] transition-colors duration-300"
            >
              (561) 223-9959
            </a>
          </div>

          {/* Hours */}
          <div className="flex items-start space-x-3 mb-6">
            <Clock className="w-5 h-5 text-[#0A50EC] mt-0.5 flex-shrink-0" />
            <div className="text-[#424959] text-sm">
              <p className="font-medium">Monday - Saturday</p>
              <p>8:00 AM - 8:00 PM</p>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            variants={isMobile ? undefined : hoverVariants}
            className="mt-auto"
          >
            <Link href={`/locations/${clinic.slug}`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-sm group-hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-[#252932] font-semibold">View Details</span>
                  <motion.div
                    animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5 text-[#0A50EC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A50EC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      </div>
    </motion.div>
  )

  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full pb-10'>
      <section className="w-full h-full flex flex-col relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_6rem)]" id="Locations">
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
          alt="Find Mountain Spine & Orthopedics clinic locations across Florida"
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
            <TextAnimate animation="blurInUp" by="character" once as="h1"
              style={{
                fontFamily: 'var(--font-reem-kufi)',
                fontWeight: 500,

              }}
              className='text-[#252932] text-6xl'
            >
              Locations
            </TextAnimate>
            <h2
              style={{
                fontFamily: 'var(--font-reem-kufi)',
                fontWeight: 500,

              }}
              className='text-[#252932] text-2xl mt-2'
            >
              Find Orthopedic Care Near You
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-reem-kufi)',
                fontWeight: 500,

              }}
              className='text-[#252932] text-xl mt-2'
            >
              Mountain Spine & Orthopedics delivers expert spine care across Florida with 10 Locations and an Ambulatory Surgery Center.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white w-full">
        <ClinicsMap startingClinic={currentSelectedLocation} />
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#252932] my-6">
            Our Locations
          </h2>
          <p className="text-lg md:text-xl text-[#424959] max-w-3xl mx-auto">
            Visit any of our state-of-the-art facilities across Florida for expert orthopedic care and personalized treatment.
          </p>
        </motion.div>

        {/* Mobile Carousel - Only visible on mobile */}
        <div className="block md:hidden mb-16">
          {hasMounted && dimensions.width > 0 && (
            <div className="w-full">
              <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                  align: "center",
                  containScroll: "trimSnaps",
                }}
              >
                <CarouselContent>
                  {clinics.map((clinic, index) => (
                    <CarouselItem key={index} className="basis-full py-6">
                      <LocationCard clinic={clinic} index={index} isMobile={true} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-white/90 backdrop-blur-sm border border-[#0A50EC]/20 hover:bg-white hover:shadow-xl transition-all duration-300 absolute -left-5 top-1/2 -translate-y-1/2" />
                <CarouselNext className="bg-white/90 backdrop-blur-sm border border-[#0A50EC]/20 hover:bg-white hover:shadow-xl transition-all duration-300 absolute -right-5 top-1/2 -translate-y-1/2" />
              </Carousel>

              {/* Dynamic Progress Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {clinics.map((_, index) => (
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
            </div>
          )}
        </div>

        {/* Desktop Bento Box Grid - Only visible on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-6 lg:px-8"
        >
          {clinics.map((clinic, index) => (
            <LocationCard key={index} clinic={clinic} index={index} />
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#E0F5FF] to-[#F8FAFC] rounded-3xl p-8 md:p-12 border border-white/50 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0A50EC] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#252932] mb-2">Extended Hours</h3>
              <p className="text-[#424959]">Open 7 days a week until 8 PM for your convenience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0A50EC] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#252932] mb-2">Same Phone Number</h3>
              <p className="text-[#424959]">Call (561) 223-9959 for all locations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0A50EC] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#252932] mb-2">Multiple Locations</h3>
              <p className="text-[#424959]">Serving communities across Florida</p>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </main>
  )
} 
