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
                className={`flex flex-col p-4 rounded-[24px] space-y-[24px] hover:cursor-pointer h-full ${`sm:bg-[#FAFAFA] ${index % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-[#FAFAFA]'}`}`}
            >
                <div className="flex flex-row items-center justify-between">
                    <div className="rounded-full border border-[#FAFAFA] h-12 w-12 items-center justify-center flex">
                        <span
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500,
                            }}
                            className="text-lg self-center text-[#252932]"
                        >
                            0{index + 1}
                        </span>
                    </div>

                    <div className={`sm:bg-[#EEEFF1] ${index % 2 === 1 ? '' : ''} rounded-full h-10 border border-[#FAFAFA] py-6 px-4 flex items-center justify-center`}>
                        <Image src={item.img} alt={item.title} width={18} height={18} className="" />
                    </div>
                </div>

                <div className="flex flex-col space-y-[16px] flex-grow">
                    <h3
                        style={{
                            fontFamily: "var(--font-public-sans)",
                            fontWeight: 500,
                        }}
                        className="text-3xl text-[#252932]"
                    >
                        {item.title}
                    </h3>

                    <p
                        style={{
                            fontFamily: "var(--font-public-sans)",
                            fontWeight: 500,
                        }}
                        className="text-lg text-[#424959] flex-grow"
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
                            <div className="mt-4 flex items-center justify-center gap-3">
                                <CarouselPrevious className="static translate-x-0 translate-y-0 relative bg-white/90 backdrop-blur-sm border border-[#0A50EC]/20 hover:bg-white hover:shadow-xl transition-all duration-300 w-8 h-8" />
                                <div className="flex items-center gap-2">
                                    {ServicesAndExpertise.map((_, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => api?.scrollTo(index)}
                                            className={`h-2 rounded-full transition-all duration-300 ${index === current
                                                ? 'bg-[#0A50EC] w-6'
                                                : 'bg-[#0A50EC]/30 w-2 hover:bg-[#0A50EC]/50'
                                                }`}
                                            whileTap={{ scale: 0.9 }}
                                        />
                                    ))}
                                </div>
                                <CarouselNext className="static translate-x-0 translate-y-0 relative bg-white/90 backdrop-blur-sm border border-[#0A50EC]/20 hover:bg-white hover:shadow-xl transition-all duration-300 w-8 h-8" />
                            </div>
                        </Carousel>

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
