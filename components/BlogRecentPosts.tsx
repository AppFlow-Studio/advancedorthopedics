'use client';

import React from 'react';
import BlogPostCard from '@/components/BlogPostCard';
import { useQuery } from '@tanstack/react-query';
import { GetBlogs } from '@/app/blogs/api/get-blogs';

/**
 * Client component for Recent Posts sidebar
 * Maintains animations and interactions from BlogPostCard
 */
export default function BlogRecentPosts() {
  const { data: recentPosts, isLoading } = useQuery({
    queryKey: ['recentPosts'],
    queryFn: () => GetBlogs(),
  });

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
        {recentPosts?.slice(0, 3).map((post) => (
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

