'use client';
import React from 'react';
import { PhoneLink } from './PhoneLink';
import { motion } from 'framer-motion';

interface PhoneCTAProps {
  className?: string;
}

export function PhoneCTA({ className = '' }: PhoneCTAProps) {
  return (
    <motion.section 
      className={`bg-gradient-to-r from-[#2358AC] to-[#5093FF] rounded-2xl p-8 md:p-12 text-center text-white w-full max-w-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center space-y-6 max-w-4xl mx-auto">
          {/* Phone Icon */}
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-full p-4"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg 
              className="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
          </motion.div>

          {/* Main Text */}
          <div className="space-y-4">
            <motion.h3
              className="text-2xl md:text-3xl font-semibold"
              style={{
                fontFamily: "var(--font-public-sans)",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              Ready to Get Started?
            </motion.h3>
            
            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
              style={{
                fontFamily: "var(--font-inter)",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Don't let pain hold you back. Our Florida orthopedic specialists are here to help you get back to the activities you love.
            </motion.p>
          </div>

          {/* Phone Number CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <span
              className="text-lg text-white/90"
              style={{
                fontFamily: "var(--font-inter)",
              }}
            >
              Call us today:
            </span>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <PhoneLink 
                phone="(561) 223-9959"
                trackLocation="Pain Condition CTA"
                className="bg-white text-[#2358AC] px-8 py-4 rounded-xl font-semibold text-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              />
            </motion.div>
          </motion.div>

          {/* Additional Text */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-2 text-white/80 text-sm"
            style={{
              fontFamily: "var(--font-inter)",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <span>Available 7 days a week, 8AM - 8PM</span>
            <span className="hidden sm:inline">•</span>
            <span>Same-day appointments available</span>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
        </div>
      </motion.div>
    </motion.section>
  );
}