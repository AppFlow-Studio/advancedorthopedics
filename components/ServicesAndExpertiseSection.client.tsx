'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
import { ServicesAndExpertise } from '@/components/data/homepage-data'

export default function ServicesAndExpertiseSection() {
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

    // Service Item Component
    const ServiceItem = ({ item, index, isMobile = false }: { item: any, index: number, isMobile?: boolean }) => (
        <div
            key={index}
            className="h-full"
        >
            <Link
                href={`/area-of-specialty?data=${encodeURIComponent(JSON.stringify({ tags: item.link }))}`}
                className={`flex flex-col p-4 rounded-[24px] space-y-[24px] hover:cursor-pointer h-full ${`sm:bg-[#FAFAFA] ${index % 2 === 1 ? 'bg-[#EFF5FF]' : 'bg-[#E5F6FF]'}`}`}
            >
                <div className="flex flex-row items-center justify-between">
                    <div className="rounded-full border border-[#EFF5FF] h-12 w-12 items-center justify-center flex">
                        <span
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-lg self-center text-[#022968]"
                        >
                            0{index + 1}
                        </span>
                    </div>

                    <div className={`sm:bg-[#EFF5FF] ${index % 2 === 1 ? 'bg-[#E5F6FF]' : 'bg-[#EFF5FF]'} rounded-full border border-[#EFF5FF] py-3 px-6`}>
                        <Image src={item.img} alt={item.title} width={22} height={22} className="h-[22px] w-[22px]" />
                    </div>
                </div>

                <div className="flex flex-col space-y-[16px] flex-grow">
                    <h3
                        style={{
                            fontFamily: "var(--font-public-sans)",
                            fontWeight: 500,
                        }}
                        className="text-3xl text-[#022968]"
                    >
                        {item.title}
                    </h3>

                    <p
                        style={{
                            fontFamily: "var(--font-public-sans)",
                            fontWeight: 500,
                        }}
                        className="text-lg text-[#022967] flex-grow"
                    >
                        {item.desc}
                    </p>
                </div>

                <div className="w-full max-h-[240px] h-[240px]">
                    <Image
                        src={item.anatomy}
                        alt={item.title}
                        height={240}
                        width={240}
                        layout="responsive"
                        className="w-full max-h-[240px] h-full object-cover aspect-square rounded-[24px] lg:h-[240px]"
                    />
                </div>
            </Link>
        </div>
    )

    return (
        <div className="w-full">
            {/* Mobile Carousel - Only visible on mobile */}
            <div className="block md:hidden mb-8">
                {hasMounted && dimensions.width > 0 && (
                    <div className="w-full">
                        <Carousel
                            setApi={setApi}
                            className="w-full"
                            opts={{
                                align: "center",
                                dragFree: false,
                                containScroll: "trimSnaps",
                            }}
                        >
                            <CarouselContent>
                                {ServicesAndExpertise.map((item, index) => (
                                    <CarouselItem key={index} className="basis-full py-6">
                                        <ServiceItem item={item} index={index} isMobile={true} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="bg-white/90 backdrop-blur-sm border border-[#0094E0]/20 hover:bg-white hover:shadow-xl transition-all duration-300 absolute left-1 top-1/2 -translate-y-1/2 z-10" />
                            <CarouselNext className="bg-white/90 backdrop-blur-sm border border-[#0094E0]/20 hover:bg-white hover:shadow-xl transition-all duration-300 absolute right-1 top-1/2 -translate-y-1/2 z-10" />
                        </Carousel>

                        {/* Dynamic Progress Indicators */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {ServicesAndExpertise.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => api?.scrollTo(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current
                                        ? 'bg-[#0094E0] w-6'
                                        : 'bg-[#0094E0]/30 hover:bg-[#0094E0]/50'
                                        }`}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop Grid - Only visible on desktop */}
            <div className="hidden md:grid md:grid-cols-2 items-stretch lg:grid-cols-4 gap-[24px] mt-[32px]">
                {ServicesAndExpertise.map((item, index) => (
                    <ServiceItem key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    )
}
