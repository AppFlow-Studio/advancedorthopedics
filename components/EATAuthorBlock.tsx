// components/EATAuthorBlock.tsx
'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface EATAuthorBlockProps {
  author: string
  credentials?: string
  bio?: string
  avatar?: string
  specialties?: string[]
}

export default function EATAuthorBlock({ 
  author, 
  credentials = "MD", 
  bio, 
  avatar, 
  specialties = [] 
}: EATAuthorBlockProps) {
  // Map author names to doctor profile slugs
  const getDoctorSlug = (authorName: string): string | null => {
    const doctorMap: Record<string, string> = {
      "Dr. John Smith": "dr-john-smith",
      "Dr. Sarah Johnson": "dr-sarah-johnson", 
      "Dr. Michael Brown": "dr-michael-brown",
      "Dr. Emily Davis": "dr-emily-davis",
      "Dr. Robert Wilson": "dr-robert-wilson",
      "Dr. Lisa Anderson": "dr-lisa-anderson",
      "Dr. David Martinez": "dr-david-martinez",
      "Dr. Jennifer Taylor": "dr-jennifer-taylor"
    }
    
    return doctorMap[authorName] || null
  }

  const doctorSlug = getDoctorSlug(author)
  const defaultBio = `Dr. ${author.split(' ').pop()} is a board-certified orthopedic surgeon specializing in ${specialties.join(', ').toLowerCase() || 'spine and joint care'}. With extensive experience in minimally invasive procedures, Dr. ${author.split(' ').pop()} is dedicated to providing personalized care for patients in Florida.`

  return (
    <section className="mt-8 p-6 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
      <div className="flex items-start gap-4">
        {avatar ? (
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <Image
              src={avatar}
              alt={author}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-[#2358AC] flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
            {author.split(' ').map(n => n[0]).join('')}
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-lg font-semibold text-[#111315]">{author}</h4>
            <span className="px-2 py-1 bg-[#2358AC] text-white text-xs rounded-full">
              {credentials}
            </span>
          </div>
          
          <p className="text-sm text-[#424959] mb-3">
            {bio || defaultBio}
          </p>
          
          {specialties.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {specialties.map((specialty, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-white text-[#2358AC] text-xs rounded border border-[#2358AC]"
                >
                  {specialty}
                </span>
              ))}
            </div>
          )}
          
          {doctorSlug && (
            <Link 
              href={`/about/meetourdoctors/${doctorSlug}`}
              className="inline-flex items-center text-[#2358AC] hover:text-[#1e4a8c] text-sm font-medium"
            >
              View Full Profile →
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
