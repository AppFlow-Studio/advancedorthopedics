// src/components/TreatmentsSearchBar.tsx
'use client'

import React, { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { Search, X } from 'lucide-react'

// Import the interface from your TreatmentCard file (adjust path if needed)
import type { TreatmentCardInfoProp } from './TreatmentCard' // Assuming TreatmentCard.tsx is in the same directory

interface Props {
    treatments: TreatmentCardInfoProp[]          // Changed prop name and type
    onSelect: (treatment: TreatmentCardInfoProp) => void // Changed parameter type
    onClear: () => void                           // Prop name remains the same
  }

// Renamed component
export default function TreatmentsSearchBar({ treatments, onSelect, onClear }: Props) {
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState<TreatmentCardInfoProp[]>([]) // Changed type
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(-1)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Effect to filter treatments based on query
  useEffect(() => {
    if (query.trim()) {
      const q = query.toLowerCase()
      // Filter based on the 'title' property of TreatmentCardInfoProp
      setFiltered(
        treatments.filter(t => t.title.toLowerCase().includes(q)) // Changed filter logic slightly to 'includes'
      )
    } else {
      setFiltered([])
    }
    setActive(-1)
  }, [query, treatments])

  // Effect to handle clicks outside (no changes needed)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShow(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Handler for input changes (calls onClear when input is empty)
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setQuery(newValue);

    if (newValue === '') {
      setShow(false);
      setFiltered([]);
      setActive(-1);
      if (typeof onClear === 'function') {
        onClear();
      } else {
        console.error("TreatmentsSearchBar: onClear prop is not a function!");
      }
    } else {
      setShow(true);
    }
  }

   // Handler for keyboard navigation (no functional changes needed)
   function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) { // Corrected type hint for e.target
    if (e.key === 'Escape') {
        setShow(false);
        return;
    }
    if (!show || filtered.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActive(prev => Math.min(prev + 1, filtered.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActive(prev => Math.max(prev - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (active >= 0 && active < filtered.length) {
          select(filtered[active]);
        }
        break;
      default:
        break;
    }
  }


  // Handler for selecting an item
  function select(item: TreatmentCardInfoProp) { // Changed parameter type
    setQuery(item.title); // Set input field to selected title
    setShow(false);
    setFiltered([]);
    setActive(-1);
     if (typeof onSelect === 'function') {
        onSelect(item); // Pass the selected treatment object up
     } else {
       console.error("TreatmentsSearchBar: onSelect prop is not a function!");
     }
  }

  // Handler for the clear button (calls onClear)
  function handleClearClick() {
      setQuery('');
      setShow(false);
      setFiltered([]);
      setActive(-1);
       if (typeof onClear === 'function') {
        onClear();
      } else {
        console.error("TreatmentsSearchBar: onClear prop is not a function!");
      }
  }

  return (
    <div ref={wrapperRef} className="relative w-full max-w-lg mx-auto my-4"> {/* Added margin/max-width for example */}
      <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10">
        <Search className="w-5 h-5 text-gray-400" />
      </span>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => { if (query.trim() && filtered.length > 0) { setShow(true); } }} // Show only if results exist on focus+query
        onKeyDown={handleKeyDown}
        placeholder="Search treatments..." // Changed placeholder
        className="w-full h-12 pl-12 pr-10 py-2 rounded-[62px] bg-[#EFF5FF] placeholder-gray-500 text-gray-900 outline-none border border-transparent focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        autoComplete="off"
      />
      {query && (
        <button
          type="button"
          onClick={handleClearClick}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Clear search"
        >
          <X className="w-5 h-5" />
        </button>
      )}
      {/* Autocomplete dropdown */}
      {show && filtered.length > 0 && (
        <ul className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filtered.map((item, idx) => (
            <li
              // Use the unique slug from TreatmentCardInfoProp
              key={item.slug}
              onMouseDown={(e) => { e.preventDefault(); select(item); }} // Use onMouseDown to fire before blur
              onMouseEnter={() => setActive(idx)}
              className={`px-6 py-2 cursor-pointer text-sm text-gray-700 ${
                idx === active ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
            >
              {item.title} {/* Display treatment title */}
            </li>
          ))}
        </ul>
      )}
      {/* "No results" message */}
      {show && query.trim() && filtered.length === 0 && (
         <div className="absolute z-20 mt-1 w-full px-6 py-3 bg-white border border-gray-200 rounded-md shadow-lg text-sm text-gray-500">
            {/* Changed message */}
            No treatments found matching "{query}".
        </div>
      )}
    </div>
  );
}