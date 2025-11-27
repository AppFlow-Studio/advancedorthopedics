'use client';

import React from 'react';
import { TextAnimate } from '@/components/magicui/text-animate';

interface BlogTitleAnimatedProps {
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Client component that enhances server-rendered title with animation
 * Uses suppressHydrationWarning to prevent hydration mismatches from framer-motion
 */
export default function BlogTitleAnimated({ title, className, style }: BlogTitleAnimatedProps) {
  return (
    <TextAnimate 
      by='word' 
      style={style} 
      className={className}
      as="h1"
      suppressHydrationWarning
    >
      {title}
    </TextAnimate>
  );
}

