'use client'
import React from 'react'

export default function BlogCardSkeleton() {
  return (
    <div className="w-full h-full rounded-xl md:rounded-2xl bg-white border border-[#EAEDF1] overflow-hidden flex flex-col animate-pulse">
      <div className="flex flex-col h-full p-3 md:p-4">
        {/* Image skeleton */}
        <div className="w-full h-[160px] md:h-[180px] xl:h-[200px] rounded-xl md:rounded-2xl bg-gray-200 mb-3 md:mb-4" />
        
        {/* Title skeleton */}
        <div className="h-6 bg-gray-200 rounded mb-2" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
        
        {/* Description skeleton */}
        <div className="space-y-2 mb-3">
          <div className="h-3 bg-gray-200 rounded" />
          <div className="h-3 bg-gray-200 rounded" />
          <div className="h-3 bg-gray-200 rounded w-2/3" />
        </div>
        
        {/* Related links skeleton */}
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-3" />
        
        {/* Tags skeleton */}
        <div className="flex gap-2 mb-3">
          <div className="h-6 bg-gray-200 rounded-full w-16" />
          <div className="h-6 bg-gray-200 rounded-full w-20" />
        </div>
        
        {/* Date skeleton */}
        <div className="h-3 bg-gray-200 rounded w-24 mb-4" />
        
        {/* Read more button skeleton */}
        <div className="mt-auto">
          <div className="h-11 md:h-10 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  )
}
