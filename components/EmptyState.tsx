'use client'
import React from 'react'
import { Search, FileText } from 'lucide-react'

interface EmptyStateProps {
  type: 'search' | 'no-blogs' | 'no-results'
  query?: string
}

export default function EmptyState({ type, query }: EmptyStateProps) {
  const getContent = () => {
    switch (type) {
      case 'search':
        return {
          icon: <Search className="w-16 h-16 text-gray-400" />,
          title: "Search our blog",
          description: "Find articles about orthopedic conditions, treatments, and recovery tips.",
          action: null
        }
      case 'no-results':
        return {
          icon: <Search className="w-16 h-16 text-gray-400" />,
          title: `No results found for "${query}"`,
          description: "Try searching with different keywords or browse our latest articles below.",
          action: "Clear search"
        }
      case 'no-blogs':
        return {
          icon: <FileText className="w-16 h-16 text-gray-400" />,
          title: "No blog posts available",
          description: "We're working on adding new content. Please check back soon.",
          action: null
        }
      default:
        return {
          icon: <FileText className="w-16 h-16 text-gray-400" />,
          title: "Nothing to show",
          description: "Please try again later.",
          action: null
        }
    }
  }

  const content = getContent()

  return (
    <div className="flex flex-col items-center justify-center py-8 px-6 text-center">
      <div className="mb-4">
        {content.icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {content.title}
      </h3>
      <p className="text-gray-600 max-w-md mb-4 text-sm">
        {content.description}
      </p>
      {content.action && (
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
          onClick={() => window.location.reload()}
        >
          {content.action}
        </button>
      )}
    </div>
  )
}
