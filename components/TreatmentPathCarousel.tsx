'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Activity, Shield, Target, CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from "@/components/ui/carousel"

interface TreatmentPhase {
    phase: string
    icon: any
    color: string
    description: string
    treatments: string[]
}

interface TreatmentPathCarouselProps {
    shouldReduceMotion?: boolean
}

const treatmentPhases: TreatmentPhase[] = [
    {
        phase: "Relief",
        icon: Heart,
        color: "red",
        description: "Immediate pain management and inflammation control",
        treatments: ["Pain medication", "Ice/heat therapy", "Gentle movement", "Rest guidance"],
    },
    {
        phase: "Restore",
        icon: Activity,
        color: "blue",
        description: "Rebuild strength and mobility safely",
        treatments: ["Rehabilitation referral", "Targeted exercises", "Manual therapy", "Progress tracking"],
    },
    {
        phase: "Protect",
        icon: Shield,
        color: "green",
        description: "Prevent re-injury and future problems",
        treatments: ["Ergonomic training", "Body mechanics", "Strengthening", "Education"],
    },
    {
        phase: "Perform",
        icon: Target,
        color: "purple",
        description: "Return to full activities and sports",
        treatments: [
            "Sport-specific training",
            "Advanced exercises",
            "Performance optimization",
            "Maintenance plan",
        ],
    },
]

export default function TreatmentPathCarousel({ shouldReduceMotion = false }: TreatmentPathCarouselProps) {
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

    // Treatment Phase Card Component
    const TreatmentPhaseCard = ({ phase, index, isMobile = false }: { phase: TreatmentPhase, index: number, isMobile?: boolean }) => (
        <motion.div
            key={phase.phase}
            variants={isMobile ? undefined : {
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                },
            }}
            className="relative h-full"
        >
            <Card className="h-full p-6 text-center">
                <motion.div
                    whileHover={{ scale: shouldReduceMotion ? 1 : 1.1 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${phase.color}-100 flex items-center justify-center`}
                >
                    <phase.icon className={`h-8 w-8 text-${phase.color}-600`} />
                </motion.div>

                <h3 className="text-xl font-semibold mb-2">{phase.phase}</h3>
                <p className="text-gray-600 text-sm mb-4">{phase.description}</p>

                <div className="space-y-2">
                    {phase.treatments.map((treatment, j) => (
                        <motion.div
                            key={j}
                            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + j * 0.05 }}
                            className="text-sm text-gray-500 flex items-center gap-2"
                        >
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>{treatment}</span>
                        </motion.div>
                    ))}
                </div>
            </Card>

            {/* Progress line - only show on desktop */}
            {!isMobile && index < 3 && (
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="hidden md:block absolute top-1/2 right-0 w-3 h-0.5 bg-gray-300 transform -translate-y-1/2 origin-left"
                />
            )}
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
                                {treatmentPhases.map((phase, index) => (
                                    <CarouselItem key={phase.phase} className="basis-full py-6">
                                        <motion.div
                                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <TreatmentPhaseCard phase={phase} index={index} isMobile={true} />
                                        </motion.div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="bg-white/90 backdrop-blur-sm border border-[#0A84FF]/20 hover:bg-white hover:shadow-xl transition-all duration-300 absolute -left-4 top-1/2 -translate-y-1/2" />
                            <CarouselNext className="bg-white/90 backdrop-blur-sm border border-[#0A84FF]/20 hover:bg-white hover:shadow-xl transition-all duration-300 absolute -right-4 top-1/2 -translate-y-1/2" />
                        </Carousel>

                        {/* Dynamic Progress Indicators */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {treatmentPhases.map((_, index) => (
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
                className="hidden md:grid md:grid-cols-4 gap-6"
            >
                {treatmentPhases.map((phase, index) => (
                    <TreatmentPhaseCard key={phase.phase} phase={phase} index={index} />
                ))}
            </motion.div>
        </div>
    )
}
