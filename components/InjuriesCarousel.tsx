'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Stethoscope } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from "@/components/ui/carousel"

interface Injury {
    title: string
    blurb: string
    link?: string
}

interface InjuriesCarouselProps {
    injuries: Injury[]
    shouldReduceMotion?: boolean
}

export default function InjuriesCarousel({ injuries, shouldReduceMotion = false }: InjuriesCarouselProps) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    useEffect(() => {
        if (!api) {
            return
        }

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    // Injury Card Component
    const InjuryCard = ({ injury, index, isMobile = false }: { injury: Injury, index: number, isMobile?: boolean }) => (
        <motion.div
            key={index}

            className="h-full"
        >
            <Card
                className="medical-shadow hover:medical-shadow-lg hover:shadow-lg transition-shadow cursor-pointer h-full"
                data-anim="injury-card"
            >
                <CardContent className="flex flex-row items-center justify-center gap-y-3 p-6">
                    <div className="p-3 bg-blue-50 rounded-lg">
                        <Stethoscope className="h-6 w-6 text-[#0A84FF]" />
                    </div>
                    <div className="flex flex-col ml-6">
                        <section className="text-lg font-semibold group-hover:text-[#0A84FF] transition-colors">
                            {injury.title}
                        </section>
                        <p className="text-gray-600">{injury.blurb}</p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )

    return (
        <div className="w-full">
            {/* Mobile Carousel - Only visible on mobile */}
            <div className="block md:hidden mb-8">
                {hasMounted && (
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
                                {injuries.map((injury, index) => (
                                    <CarouselItem key={index} className="basis-full py-6">
                                        <InjuryCard injury={injury} index={index} isMobile={true} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="bg-white/90 backdrop-blur-sm border border-[#0A84FF]/20 hover:bg-white hover:shadow-xl transition-all duration-300 absolute sm:-left-4 -left-1 top-1/2 -translate-y-1/2" />
                            <CarouselNext className="bg-white/90 backdrop-blur-sm border border-[#0A84FF]/20 hover:bg-white hover:shadow-xl transition-all duration-300 absolute sm:-right-4 -right-1 top-1/2 -translate-y-1/2" />
                        </Carousel>

                        {/* Dynamic Progress Indicators */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {injuries.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => api?.scrollTo(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current
                                        ? 'bg-[#0A84FF] w-6'
                                        : 'bg-[#0A84FF]/30 hover:bg-[#0A84FF]/50'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop Grid - Only visible on desktop */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                        },
                    },
                }}
                className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {injuries.map((injury, index) => (
                    <InjuryCard key={index} injury={injury} index={index} />
                ))}
            </motion.div>
        </div>
    )
}
