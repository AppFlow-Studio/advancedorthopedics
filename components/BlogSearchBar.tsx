// src/components/BlogSearchBar.tsx
'use client'

import React, { useState, useRef, useEffect, KeyboardEvent, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Search, X } from 'lucide-react'
import EmptyState from './EmptyState'

// Lightweight item
export interface BlogSearchItem { id: string; slug: string; blog_info: { title: string } }

interface Props {
  blogs: BlogSearchItem[] // lightweight index
  onSelect: (blog: BlogSearchItem) => void
  onClear: () => void
}

export default function BlogSearchBar({ blogs, onSelect, onClear }: Props) {
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState<BlogSearchItem[]>([])
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(-1)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 })
  const wrapperRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<NodeJS.Timeout>()

  // Calculate dropdown position
  const updateDropdownPosition = useCallback(() => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect()
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width
      })
    }
  }, [])

  // Debounced search function
  const debouncedSearch = useCallback((searchQuery: string) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    
    debounceRef.current = setTimeout(() => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const filteredResults = blogs.filter(b => b.blog_info.title?.toLowerCase().includes(q))
        setFiltered(filteredResults)
        setShow(true)
        setActive(-1)
        updateDropdownPosition()
      } else {
        setFiltered([])
        setShow(false)
        setActive(-1)
      }
    }, 150) // 150ms debounce
  }, [blogs, updateDropdownPosition])

  useEffect(() => {
    debouncedSearch(query)
    
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [query, debouncedSearch])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShow(false)
        setActive(-1)
      }
    }
    
    function handleScrollResize() {
      if (show) {
        updateDropdownPosition()
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', handleScrollResize)
    window.addEventListener('resize', handleScrollResize)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScrollResize)
      window.removeEventListener('resize', handleScrollResize)
    }
  }, [show, updateDropdownPosition])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value
    setQuery(v)
    if (v === '') onClear()
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Escape') { 
      setShow(false)
      return 
    }
    
    if (e.key === 'Enter') {
      e.preventDefault()
      if (active >= 0 && filtered[active]) {
        // User pressed Enter with an item selected from dropdown
        select(filtered[active])
      } else if (filtered.length > 0) {
        // User pressed Enter without selecting, pick the first result
        select(filtered[0])
      } else if (query.trim()) {
        // No results found, but user typed something - could show a message or do nothing
        console.log('No results found for:', query)
      }
      return
    }
    
    if (!show || filtered.length === 0) return
    
    if (e.key === 'ArrowDown') { 
      e.preventDefault()
      setActive(p => Math.min(p + 1, filtered.length - 1))
    }
    if (e.key === 'ArrowUp') { 
      e.preventDefault()
      setActive(p => Math.max(p - 1, 0))
    }
  }

  function select(item: BlogSearchItem) {
    setQuery(item.blog_info.title)
    setShow(false)
    setFiltered([])
    setActive(-1)
    onSelect(item)
  }

  function clear() {
    setQuery('')
    setShow(false)
    setFiltered([])
    setActive(-1)
    onClear()
  }

  const dropdownContent = show && (
    <>
      {filtered.length > 0 && (
        <ul 
          className="fixed bg-white border border-gray-200 rounded-md shadow-xl max-h-60 overflow-y-auto"
          style={{ 
            top: dropdownPosition.top,
            left: dropdownPosition.left,
            width: dropdownPosition.width,
            zIndex: 99999
          }}
        >
          {filtered.map((item, idx) => (
            <li
              key={item.id}
              onMouseDown={(e) => { e.preventDefault(); select(item); }}
              onMouseEnter={() => setActive(idx)}
              className={`px-6 py-2 cursor-pointer text-sm text-gray-700 ${idx === active ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
            >
              {item.blog_info.title}
            </li>
          ))}
        </ul>
      )}

      {query.trim() && filtered.length === 0 && (
        <div 
          className="fixed bg-white border border-gray-200 rounded-md shadow-xl"
          style={{ 
            top: dropdownPosition.top,
            left: dropdownPosition.left,
            width: dropdownPosition.width,
            zIndex: 99999
          }}
        >
          <EmptyState type="no-results" query={query} />
        </div>
      )}
    </>
  )

  return (
    <>
      <div ref={wrapperRef} className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10">
          <Search className="w-5 h-5 text-gray-400" />
        </span>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => { if (query.trim()) { setShow(true); updateDropdownPosition(); } }}
          onKeyDown={handleKeyDown}
          placeholder="Search Name or Keyword"
          className="w-full h-12 pl-12 pr-10 py-2 rounded-[62px] bg-[#FAFAFA] placeholder-gray-500 text-gray-900 outline-none border border-transparent focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          autoComplete="off"
        />
        {query && (
          <button
            type="button"
            onClick={clear}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 z-10"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      
      {typeof window !== 'undefined' && dropdownContent && createPortal(dropdownContent, document.body)}
    </>
  )
}
