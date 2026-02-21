'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import type { LocationGalleryImage } from '@/components/data/clinics';

const LocationGalleryLightbox = dynamic(
  () => import('@/components/LocationGalleryLightbox.client'),
  { ssr: false }
);

interface LocationGalleryGridProps {
  images: LocationGalleryImage[];
}

export default function LocationGalleryGrid({ images }: LocationGalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const onNext = useCallback(() => {
    setLightboxIndex((i) => (i < images.length - 1 ? i + 1 : i));
  }, [images.length]);

  const onPrev = useCallback(() => {
    setLightboxIndex((i) => (i > 0 ? i - 1 : i));
  }, []);

  return (
    <>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        role="list"
      >
        {images.map((img, index) => (
          <a
            key={`${img.src}-${index}`}
            href={img.src}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              openLightbox(index);
            }}
            className="group flex min-h-[44px] min-w-[44px] flex-col overflow-hidden rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#0A50EC]"
          >
            <span className="relative block aspect-[4/3] w-full overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </span>
            <span className="px-2 py-1.5 text-xs text-[#424959]" style={{ fontFamily: 'var(--font-public-sans)' }}>
              {img.category}
            </span>
            {img.caption && (
              <p style={{ fontFamily: 'var(--font-public-sans)' }} className="px-2 pb-2 text-sm text-[#252932]">
                {img.caption}
              </p>
            )}
          </a>
        ))}
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
