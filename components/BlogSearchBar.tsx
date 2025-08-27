// src/components/ConditionsSearchBar.tsx
'use client'

import React, { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { Search, X } from 'lucide-react'

// *** IMPORTANT: Verify this path and type name ('Condition') ***
import { BlogPostProp, supabaseBlogPostProp } from '@/components/BlogPostCard'
interface Props {
  blogs: supabaseBlogPostProp[]
  onSelect: (blog: supabaseBlogPostProp) => void
  onClear: () => void // This prop MUST be provided by the parent
}

export default function BlogSearchBar({ blogs, onSelect, onClear }: Props) {
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState<supabaseBlogPostProp[]>([])
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(-1)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Effect to filter conditions based on query
  useEffect(() => {
    if (query.trim()) {
      const q = query.toLowerCase()
      // Ensure 'title' property exists on 'Condition' type
      setFiltered(
        blogs.filter(b => b.blog_info.title.toLowerCase().includes(q))
      )
    } else {
      setFiltered([])
    }
    setActive(-1)
  }, [query, blogs])

  // Effect to handle clicks outside
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

  // Handler for input changes
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setQuery(newValue);

    if (newValue === '') {
      // Call onClear when input is empty
      setShow(false);
      setFiltered([]);
      setActive(-1);
      // Check if onClear is actually a function before calling (optional safeguard)
      if (typeof onClear === 'function') {
        onClear();
      } else {
        console.error("BlogSearchBar: onClear prop is not a function!");
      }
    } else {
      setShow(true);
    }
  }

  // Handler for keyboard navigation
  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
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
  function select(item: supabaseBlogPostProp) {
    setQuery(item.blog_info.title);
    setShow(false);
    setFiltered([]);
    setActive(-1);
    // Check if onSelect is actually a function before calling (optional safeguard)
    if (typeof onSelect === 'function') {
      onSelect(item);
    } else {
      console.error("BlogSearchBar: onSelect prop is not a function!");
    }
  }

  // Handler for the clear button
  function handleClearClick() {
    setQuery('');
    setShow(false);
    setFiltered([]);
    setActive(-1);
    // Check if onClear is actually a function before calling (optional safeguard)
    if (typeof onClear === 'function') {
      onClear();
    } else {
      console.error("BlogSearchBar: onClear prop is not a function!");
    }
  }

  return (
    <div ref={wrapperRef} className="relative w-full">
      <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10">
        <Search className="w-5 h-5 text-gray-400" />
      </span>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => { if (query.trim()) { setShow(true); } }}
        onKeyDown={handleKeyDown}
        placeholder="Search Name or Keyword"
        className="w-full h-12 pl-12 pr-10 py-2 rounded-[62px] bg-[#FAFAFA] placeholder-gray-500 text-gray-900 outline-none border border-transparent focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
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
      {show && filtered.length > 0 && (
        <ul className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filtered.map((item, idx) => (
            <li
              // Ensure item.slug is unique in your data!
              key={item.id}
              onMouseDown={(e) => { e.preventDefault(); select(item); }}
              onMouseEnter={() => setActive(idx)}
              className={`px-6 py-2 cursor-pointer text-sm text-gray-700 ${idx === active ? 'bg-blue-100' : 'hover:bg-gray-100'
                }`}
            >
              {item.blog_info.title}
            </li>
          ))}
        </ul>
      )}
      {show && query.trim() && filtered.length === 0 && (
        <div className="absolute z-20 mt-1 w-full px-6 py-3 bg-white border border-gray-200 rounded-md shadow-lg text-sm text-gray-500">
          No blogs found matching "{query}".
        </div>
      )}
    </div>
  );
}
