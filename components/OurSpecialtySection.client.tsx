'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from "@/components/ui/carousel"
import { OurSpecialtyItems } from '@/components/data/homepage-data'

export default function OurSpecialtySection() {
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

    // Specialty Item Component
    const SpecialtyItem = ({ item, index, isMobile = false }: { item: any, index: number, isMobile?: boolean }) => (
        <motion.div
            key={index}
            className={`flex flex-col space-y-[16px] h-full ${index == 1 || index == 2 ? 'bg-[#EFF5FF]' : 'bg-[#E5F6FF]'} p-6 rounded-[20px]`}
        >
            <div className="rounded-full bg-white p-1 items-center justify-center flex w-[20%] px-[12px] py-[15px]">
                {item.icon()}
            </div>
            <h4
                style={{
                    fontFamily: "var(--font-public-sans)",
                    fontWeight: 500,
                    color: '#022968'
                }}
                className="text-xl"
            >
                {item.title}
            </h4>
            <p
                style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 500,
                    color: '#5B5F67'
                }}
                className="text-md flex-grow"
            >
                {item.body}
            </p>
        </motion.div>
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
                                {OurSpecialtyItems.map((item, index) => (
                                    <CarouselItem key={index} className="basis-full py-6">
                                        <SpecialtyItem item={item} index={index} isMobile={true} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="bg-white/90 backdrop-blur-sm border border-[#0094E0]/20 hover:bg-white hover:shadow-xl transition-all duration-300 absolute -left-1 bottom-0 -translate-y-1/2 z-10" />
                            <CarouselNext className="bg-white/90 backdrop-blur-sm border border-[#0094E0]/20 hover:bg-white hover:shadow-xl transition-all duration-300 absolute -right-1 bottom-1/2 -translate-y-1/2 z-10" />
                        </Carousel>

                        {/* Dynamic Progress Indicators */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {OurSpecialtyItems.map((_, index) => (
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
            <div className="hidden md:grid md:grid-cols-2 rounded-[20px] overflow-hidden w-full">
                {OurSpecialtyItems.map((item, index) => (
                    <SpecialtyItem key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    )
}
