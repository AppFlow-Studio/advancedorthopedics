'use client';

import React, { useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import type { LocationGalleryImage } from '@/components/data/clinics';

const LocationGalleryLightbox = dynamic(
  () => import('@/components/LocationGalleryLightbox.client'),
  { ssr: false }
);

const SWIPE_THRESHOLD_PX = 50;
const PLACEHOLDER_URL = 'Orthopedic-Gallery-Placeholder.png';

interface LocationGallerySlideshowProps {
  images: LocationGalleryImage[];
}

export default function LocationGallerySlideshow({ images }: LocationGallerySlideshowProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const swipeHandledRef = useRef(false);

  const current = images[index];
  const goPrev = useCallback(() => setIndex((i) => (i > 0 ? i - 1 : images.length - 1)), [images.length]);
  const goNext = useCallback(() => setIndex((i) => (i < images.length - 1 ? i + 1 : 0)), [images.length]);
  const openLightbox = useCallback((i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    swipeHandledRef.current = false;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const endX = e.changedTouches[0].clientX;
      const delta = endX - touchStartX.current;
      touchStartX.current = null;
      if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
      swipeHandledRef.current = true;
      if (delta < 0) goNext();
      else goPrev();
    },
    [goNext, goPrev]
  );
  const onNext = useCallback(() => setLightboxIndex((i) => (i < images.length - 1 ? i + 1 : i)), [images.length]);
  const onPrev = useCallback(() => setLightboxIndex((i) => (i > 0 ? i - 1 : i)), []);

  return (
    <>
      <div className="relative w-full max-w-4xl mx-auto" role="region" aria-label="Location photo gallery slideshow">
        {/* All slides in DOM for SEO (crawlers see alt/caption); only active slide visible */}
        <div
          className="relative overflow-hidden rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] aspect-[4/3] touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((img, i) => {
            const isPlaceholder = img.src.includes(PLACEHOLDER_URL);
            return (
              <a
                key={`${img.src}-${i}`}
                href={img.src}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  if (swipeHandledRef.current) {
                    swipeHandledRef.current = false;
                    return;
                  }
                  openLightbox(i);
                }}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-[#0A50EC] focus:ring-inset ${
                  isPlaceholder ? 'bg-white' : ''
                } ${i === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'}`}
                aria-hidden={i !== index}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading={i === 0 ? 'lazy' : 'lazy'}
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className={isPlaceholder ? 'object-contain w-full h-full max-w-full max-h-full' : 'object-cover w-full h-full'}
                />
              </a>
            );
          })}
        </div>

        {/* Caption and category below slide */}
        {current && (
          <div className="mt-2 px-1" style={{ fontFamily: 'var(--font-public-sans)' }}>
            <span className="text-xs text-[#424959]">{current.category}</span>
            {current.caption && (
              <p className="text-sm text-[#252932] mt-0.5">{current.caption}</p>
            )}
          </div>
        )}

        {/* Prev/Next buttons - min 44px for touch */}
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-12 min-h-[44px] w-12 min-w-[44px] items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-12 min-h-[44px] w-12 min-w-[44px] items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Slide indicator */}
        <div className="flex justify-center gap-1.5 mt-3" aria-hidden="true">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full min-w-[8px] transition-colors ${
                i === index ? 'bg-[#0A50EC] w-6' : 'bg-[#E5E7EB] w-2'
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <LocationGalleryLightbox
        images={images}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={onNext}
        onPrev={onPrev}
      />
    </>
  );
}
