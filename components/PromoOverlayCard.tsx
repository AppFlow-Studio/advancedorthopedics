'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface PromoOverlayCardProps {
    imageUrl?: string
    title?: string
    subtitle?: string
    className?: string
}

export default function PromoOverlayCard({
    imageUrl = 'https://mountainspineortho.b-cdn.net/public/sscard.jpg',
    title = 'What is Spinal Stenosis?',
    subtitle = 'We can help you fix it.',
    className = ''
}: PromoOverlayCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className={`relative overflow-hidden rounded-3xl bg-[#0B0F17] border border-white/10 shadow-2xl ${className}`}
            style={{
                boxShadow: '0 10px 30px rgba(10, 80, 236, 0.15)'
            }}
        >
            {/* Image */}
            <div className="relative w-full h-full sm:h-[280px] md:h-[360px]">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    priority={false}
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover"
                />

                {/* Glow/texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A50EC]/30 via-transparent to-black/70" />
                <div
                    className="absolute -right-20 -top-20 w-[320px] h-[320px] rounded-full opacity-40 blur-3xl"
                    style={{ background: 'radial-gradient(closest-side, #6DB4FF, transparent)' }}
                />
                <div
                    className="absolute -left-24 -bottom-24 w-[380px] h-[380px] rounded-full opacity-30 blur-3xl"
                    style={{ background: 'radial-gradient(closest-side, #66F, transparent)' }}
                />

                {/* Fine diagonal texture to mimic the reference */}
                <div
                    className="absolute inset-0 opacity-[0.12] mix-blend-screen"
                    style={{
                        backgroundImage:
                            'linear-gradient(135deg, rgba(255,255,255,.25) 0.5px, transparent 0.5px)',
                        backgroundSize: '6px 6px'
                    }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex items-end">
                    <div className="p-4 md:p-7 w-full">
                        <h3
                            className="text-white/95 text-xl md:text-[28px] leading-snug drop-shadow-md"
                            style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 600 }}
                        >
                            {title}
                        </h3>
                        <p
                            className="text-white/70 text-xs md:text-base mt-1"
                            style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}
                        >
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


