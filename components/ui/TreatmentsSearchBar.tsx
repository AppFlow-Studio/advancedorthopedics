// src/components/TreatmentsSearchBar.tsx
'use client'

import React, { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { Search, X } from 'lucide-react'
import { TreatmentsCardProp } from '../data/treatments'

interface Props {
    treatments: TreatmentsCardProp[]
    onSelect: (treatment: TreatmentsCardProp) => void
    onClear: () => void
}

export default function TreatmentsSearchBar({ treatments, onSelect, onClear }: Props) {
    const [searchTerm, setSearchTerm] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    const [filteredTreatments, setFilteredTreatments] = useState<TreatmentsCardProp[]>([])
    const searchRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowDropdown(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredTreatments([])
            return
        }

        const filtered = treatments.filter(treatment =>
            treatment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            treatment.body.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredTreatments(filtered)
    }, [searchTerm, treatments])

    const handleSelect = (treatment: TreatmentsCardProp) => {
        onSelect(treatment)
        setSearchTerm('')
        setShowDropdown(false)
    }

    const handleClear = () => {
        setSearchTerm('')
        setFilteredTreatments([])
        onClear()
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && filteredTreatments.length > 0) {
            handleSelect(filteredTreatments[0])
        }
    }

    return (
        <div ref={searchRef} className="relative w-full">
            <div className="relative">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setShowDropdown(true)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search treatments..."
                    className="w-full px-4 py-2 pl-10 pr-10 border border-gray-300 rounded-lg bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                {searchTerm && (
                    <button
                        onClick={handleClear}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        <X className="h-5 w-5" />
                    </button>
                )}
            </div>

            {showDropdown && filteredTreatments.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {filteredTreatments.map((treatment) => (
                        <div
                            key={treatment.slug}
                            onClick={() => handleSelect(treatment)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            <div className="font-medium text-gray-900">{treatment.title}</div>
                            <div className="text-sm text-gray-500 truncate">{treatment.body}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
