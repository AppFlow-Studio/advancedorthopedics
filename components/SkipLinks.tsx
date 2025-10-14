'use client'
import React from 'react'

export default function SkipLinks() {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <a 
        href="#main-content" 
        className="absolute top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <a 
        href="#navigation" 
        className="absolute top-4 left-32 z-50 bg-blue-600 text-white px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Skip to navigation
      </a>
      <a 
        href="#search" 
        className="absolute top-4 left-64 z-50 bg-blue-600 text-white px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Skip to search
      </a>
    </div>
  )
}
