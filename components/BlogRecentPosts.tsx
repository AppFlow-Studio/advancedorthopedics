'use client';

import React from 'react';
import BlogPostCard from '@/components/BlogPostCard';
import { useQuery } from '@tanstack/react-query';
import { GetBlogsPaginated } from '@/app/blogs/api/get-blogs';

/**
 * Client component for Recent Posts sidebar
 * Optimized to fetch only 3 posts instead of all blogs
 */
export default function BlogRecentPosts() {
  const { data: recentPostsData, isLoading } = useQuery({
    queryKey: ['recentPosts'],
    queryFn: () => GetBlogsPaginated(1, 3), // Fetch only first 3 posts
    staleTime: 5 * 60 * 1000, // 5 minutes - data is fresh for 5 min
    gcTime: 10 * 60 * 1000, // 10 minutes - keep in cache (React Query v5)
    refetchOnWindowFocus: false, // Don't refetch when window regains focus
    refetchOnMount: false, // Don't refetch on component remount if data exists
  });

  // Extract the data array from paginated response
  const recentPosts = recentPostsData?.data || [];

  if (isLoading) {
    return (
      <aside className='lg:w-[30%] w-full flex flex-col space-y-8'>
        <h2 className='text-[#252932] text-2xl font-bold mb-4'>Recent Posts</h2>
        <div className='grid grid-cols-1 gap-4'>
          <div className="flex items-center justify-center py-8">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className='lg:w-[30%] w-full flex flex-col space-y-8'>
      <h2 className='text-[#252932] text-2xl font-bold mb-4'>Recent Posts</h2>
      <div className='grid grid-cols-1 gap-4'>
        {recentPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            BlogInfo={post.blog_info}
            backgroundcolor='white'
            id={post.id}
            slug={post.slug}
          />
        ))}
      </div>
    </aside>
  );
}

