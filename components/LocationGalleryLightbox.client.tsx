'use client';

import React, { useEffect, useCallback, useRef } from 'react';
import type { LocationGalleryImage } from '@/components/data/clinics';

const SWIPE_THRESHOLD_PX = 50;
const PLACEHOLDER_URL = 'Orthopedic-Gallery-Placeholder.png';

interface LocationGalleryLightboxProps {
  images: LocationGalleryImage[];
  initialIndex: number;
  open: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function LocationGalleryLightbox({
  images,
  initialIndex,
  open,
  onClose,
  onNext,
  onPrev,
}: LocationGalleryLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const endX = e.changedTouches[0].clientX;
      const delta = endX - touchStartX.current;
      touchStartX.current = null;
      if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
      if (delta < 0 && onNext) onNext();
      if (delta > 0 && onPrev) onPrev();
    },
    [onNext, onPrev]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    },
    [open, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!open || images.length === 0) return null;

  const current = images[initialIndex];
  if (!current) return null;

  const isPlaceholder = current.src.includes(PLACEHOLDER_URL);
  const contentWrapperClass = isPlaceholder
    ? 'flex max-h-[90vh] max-w-[90vw] flex-col items-center justify-center rounded-lg bg-white p-6 shadow-xl touch-pan-y'
    : 'flex max-h-[90vh] max-w-[90vw] flex-col items-center justify-center p-4 touch-pan-y';
  const captionClass = isPlaceholder ? 'mt-2 text-center text-sm text-[#252932]' : 'mt-2 text-center text-sm text-white';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={handleBackdropClick}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex h-11 min-h-[44px] w-11 min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Close lightbox"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      {onPrev && initialIndex > 0 && (
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-4 top-1/2 z-10 flex h-12 min-h-[44px] w-12 min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      )}

      {onNext && initialIndex < images.length - 1 && (
        <button
          type="button"
          onClick={onNext}
          className="absolute right-4 top-1/2 z-10 flex h-12 min-h-[44px] w-12 min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      )}

      <div
        className={contentWrapperClass}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={current.src}
          alt={current.alt}
          width={current.width}
          height={current.height}
          className="max-h-[85vh] w-auto object-contain select-none"
          draggable={false}
        />
        {current.caption && (
          <p style={{ fontFamily: 'var(--font-public-sans)' }} className={captionClass}>
            {current.caption}
          </p>
        )}
      </div>
    </div>
  );
}
