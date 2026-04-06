'use client';

import React, { useState, useId, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { InjectionAreas, InjectionArea } from '@/components/data/injection-relief-map';

// ─── Panel Content ────────────────────────────────────────────────────────────
function PanelContent({ area }: { area: InjectionArea }) {
  return (
    <div className="flex flex-col">
      <span
        style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }}
        className="text-[#2358AC] text-[10px] tracking-[0.12em] uppercase mb-3 block"
      >
        Active Selection
      </span>

      <h3
        style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }}
        className="text-[#111315] text-xl sm:text-2xl leading-snug mb-3"
      >
        {area.title}
      </h3>

      <p
        style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
        className="text-[#424959] text-sm leading-relaxed mb-5"
      >
        {area.shortDescription}
      </p>

      <div className="mb-5">
        <p
          style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 600 }}
          className="text-[#111315] text-[11px] tracking-[0.1em] uppercase mb-2"
        >
          Common Uses
        </p>
        <ul className="space-y-1.5">
          {area.commonUses.map((use) => (
            <li key={use} className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2358AC]" aria-hidden="true" />
              <span
                style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
                className="text-[#424959] text-sm"
              >
                {use}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-5">
        <p
          style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 600 }}
          className="text-[#111315] text-[11px] tracking-[0.1em] uppercase mb-2"
        >
          Injection Options
        </p>
        <div className="flex flex-wrap gap-2">
          {area.injectionOptions.map((opt) => (
            <span
              key={opt}
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
              className="text-[#2358AC] bg-[#EEF3FF] text-xs px-3 py-1.5 rounded-full border border-[#C7D8FF]"
            >
              {opt}
            </span>
          ))}
        </div>
      </div>

      <p
        style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
        className="text-[#424959] text-xs mb-5 opacity-75"
      >
        {area.trustLine}
      </p>

      <div className="flex flex-col gap-2">
        <Link
          href={area.primaryCtaHref}
          style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }}
          className="w-full text-center bg-[#0A50EC] text-white px-5 py-3 rounded-[62px] text-sm hover:bg-[#1B2A4A] hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-sm"
        >
          {area.primaryCtaText}
        </Link>
        <Link
          href={area.secondaryCtaHref}
          style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }}
          className="w-full text-center border border-[#DCDEE1] text-[#424959] px-5 py-3 rounded-[62px] text-sm hover:border-[#2358AC] hover:text-[#2358AC] transition-colors duration-200"
        >
          {area.secondaryCtaText}
        </Link>
      </div>
    </div>
  );
}

// ─── Hotspot dot ──────────────────────────────────────────────────────────────
interface HotspotProps {
  area: InjectionArea;
  isActive: boolean;
  onSelect: () => void;
  panelId: string;
}

function Hotspot({ area, isActive, onSelect, panelId }: HotspotProps) {
  return (
    /*
      Button: 24×24 click target, centered on hotspot coordinate via -translate-1/2.
      The visual ring is absolutely placed at ringOffset relative to the button corner —
      this corrects for slight anatomical misalignment between the click centre and the
      dot that should appear on the figure.  Both the ring AND the ripple share the same
      top/left origin so they stay perfectly co-located.
    */
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId}
      aria-label={`Select ${area.label}`}
      onClick={onSelect}
      className="absolute z-20 h-[24px] w-[24px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 rounded-full -translate-x-1/2 -translate-y-1/2"
      style={{ top: area.hotspot.top, left: area.hotspot.left }}
    >
      {/* Frosted ring — visually positioned at ringOffset from button corner */}
      <span
        className="absolute block rounded-full p-[5px]"
        style={{
          top: area.ringOffset.top,
          left: area.ringOffset.left,
          background: 'rgba(255,255,255,0.65)',
          boxShadow: '0px 3px 14px 0px rgba(0,0,0,0.28)',
          backdropFilter: 'blur(4px)',
        }}
        aria-hidden="true"
      >
        {/* Inner dot */}
        <span
          className={`block w-[14px] h-[14px] rounded-full transition-colors duration-300 ${
            isActive ? 'bg-[#0A50EC]' : 'bg-white border border-[#d0d5dd]'
          }`}
        />
      </span>

      {/*
        Ripple: uses the SAME top/left as the frosted ring above so it radiates
        from the exact centre of the visible dot — not from the button bounds.
        Initial 24×24 matches the ring's outer diameter (14px dot + 5px padding ×2).
      */}
      {isActive && (
        <motion.span
          className="absolute rounded-full border-2 border-[#0A50EC] pointer-events-none"
          style={{
            top: area.ringOffset.top,
            left: area.ringOffset.left,
            width: '24px',
            height: '24px',
          }}
          initial={{ scale: 1, opacity: 0.65 }}
          animate={{ scale: 2.6, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
          aria-hidden="true"
        />
      )}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const FIGURE_W = 340;
const FIGURE_H = 660;
// PNG is 1024×1536 (ratio 2:3).  object-contain inside 340×660 (ratio ~1:1.94)
// is constrained by width → drawn at 340×510 px, leaving 75 px letterbox
// top and bottom.  We crop that dead space by clipping the outer container to
// FIGURE_DRAWN_H and offsetting the inner div by -LETTERBOX_TOP.
// All hotspot / ringOffset values stay in the original 340×660 coordinate space.
const FIGURE_DRAWN_H = 510;                              // actual painted height
const LETTERBOX_TOP  = (FIGURE_H - FIGURE_DRAWN_H) / 2; // 75 px

export default function InjectionReliefMap() {
  const [active, setActive] = useState<InjectionArea>(InjectionAreas[0]);
  const uid = useId();
  const panelId = `irm-panel-${uid}`;
  const navId = `irm-nav-${uid}`;

  // Responsive figure scaling — computed synchronously before paint to avoid flash.
  const [figureScale, setFigureScale] = useState(1);
  const colRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    function measure() {
      if (!colRef.current) return;
      const w = colRef.current.offsetWidth;
      setFigureScale(Math.min(1, w / FIGURE_W));
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (colRef.current) ro.observe(colRef.current);
    return () => ro.disconnect();
  }, []);

  function handleSelect(area: InjectionArea) {
    setActive(area);
    // On mobile, scroll the info panel into view after a hotspot tap.
    if (typeof window !== 'undefined' && window.innerWidth < 640 && panelRef.current) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 80);
    }
  }

  return (
    <section
      aria-labelledby="irm-heading"
      className="w-full rounded-[24px] overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1D5BAD 0%, #133F8A 100%)' }}
    >
      <div className="px-4 pt-2 pb-3 sm:px-6 sm:pt-4 sm:pb-5 md:p-10 flex flex-col items-center gap-3 sm:gap-5 md:gap-8">

        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-center max-w-2xl">
          <span
            style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 600 }}
            className="text-blue-200 text-xs tracking-[0.14em] uppercase"
          >
            Precision Interventional Orthopedics
          </span>
          <h2
            id="irm-heading"
            style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }}
            className="text-white text-2xl sm:text-4xl"
          >
            Interactive Injection Relief Map
          </h2>
          <p
            style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
            className="text-blue-100/90 text-sm leading-snug max-w-lg"
          >
            Select a localized pain area to explore image-guided interventional treatment options tailored to your recovery.
          </p>
          {/* Tap-hint — only visible on mobile where the nav is hidden */}
          <p
            style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
            className="sm:hidden text-white/60 text-xs mt-0.5"
          >
            Tap a dot on the figure to explore treatment options
          </p>
        </div>

        {/* ── Body ── */}
        <div className="w-full flex flex-col lg:flex-row gap-3 sm:gap-5 md:gap-6 lg:items-start">

          {/* ── LEFT NAV — hidden on mobile (<640 px), visible on sm+ ── */}
          <nav
            id={navId}
            aria-label="Pain area navigation"
            role="tablist"
            aria-orientation="vertical"
            className="hidden sm:flex lg:w-[22%] w-full lg:flex-col flex-row flex-wrap gap-2"
          >
            {InjectionAreas.map((area) => {
              const sel = active.id === area.id;
              return (
                <button
                  key={area.id}
                  role="tab"
                  aria-selected={sel}
                  aria-controls={panelId}
                  onClick={() => handleSelect(area)}
                  style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }}
                  className={[
                    'flex items-center justify-between gap-2 px-5 py-3 rounded-[62px] text-sm text-left',
                    'transition-all duration-200 w-full',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
                    sel
                      ? 'bg-white text-[#133F8A] shadow-lg'
                      : 'bg-white/15 text-white border border-white/35 hover:bg-white/25 hover:border-white/60',
                  ].join(' ')}
                >
                  <span>{area.label}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0 opacity-50">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              );
            })}
          </nav>

          {/* ── CENTER FIGURE ──
              colRef measures available column width so figureScale stays current.
              The outer div reserves exactly the post-scale pixel footprint so sibling
              columns are never pushed around.  transformOrigin: top left keeps the
              image flush-left inside the reserved box.
          ── */}
          <div ref={colRef} className="lg:w-[40%] w-full flex items-start justify-center">
            {/*
              Outer div: exact visual footprint after the letterbox is cropped.
              overflow:hidden clips the top/bottom dead space.
              Inner div: pulled up by LETTERBOX_TOP (in scaled px) so the first
              visible row is the top edge of the painted figure, not empty air.
              All hotspot coordinates are unchanged — they still live in the
              original 340×660 space and scale / clip correctly.
            */}
            <div
              style={{
                width: `${FIGURE_W * figureScale}px`,
                height: `${FIGURE_DRAWN_H * figureScale}px`,
                overflow: 'hidden',
                position: 'relative',
                flexShrink: 0,
              }}
            >
              <div
                className="relative"
                style={{
                  width: `${FIGURE_W}px`,
                  height: `${FIGURE_H}px`,
                  position: 'absolute',
                  top: `${-LETTERBOX_TOP * figureScale}px`,
                  left: 0,
                  transform: `scale(${figureScale})`,
                  transformOrigin: 'top left',
                }}
              >
                {/* Soft radial glow behind figure */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse 60% 70% at 50% 45%, rgba(35,88,172,0.14) 0%, transparent 72%)',
                  }}
                />

                <Image
                  src="https://mountainspineortho.b-cdn.net/Injections-Interactive-Figure-Mountain-Spine-Orthopedics.png"
                  alt="Human anatomy figure showing injection treatment areas for orthopedic pain relief"
                  fill
                  sizes="340px"
                  className="object-contain select-none"
                  style={{ inset: '-2px 0 0 -2px' }}
                  priority={false}
                />

                {InjectionAreas.map((area) => (
                  <Hotspot
                    key={area.id}
                    area={area}
                    isActive={active.id === area.id}
                    onSelect={() => handleSelect(area)}
                    panelId={panelId}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div
            id={panelId}
            ref={panelRef}
            role="tabpanel"
            aria-labelledby={navId}
            className="lg:w-[38%] w-full"
          >
            <div className="bg-white rounded-[20px] shadow-2xl shadow-black/30 p-6">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <PanelContent area={active} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/*
        SEO content block — rendered server-side so Googlebot indexes every injection
        area's title, description, common uses, and injection options without needing
        JavaScript execution.  Area 1 (Back & Spine) is already rendered in the
        interactive panel above; all 7 areas are listed here for completeness.
        sr-only keeps it invisible to sighted users but fully present in the HTML
        source.  No aria-hidden so assistive technology can optionally read it and
        crawlers never receive a signal to discount the content.
      */}
      <div className="sr-only">
        {InjectionAreas.map((area) => (
          <section key={`seo-${area.id}`}>
            <h3>{area.title}</h3>
            <p>{area.shortDescription}</p>
            <h4>Common uses</h4>
            <ul>{area.commonUses.map((u) => <li key={u}>{u}</li>)}</ul>
            <h4>Injection options</h4>
            <ul>{area.injectionOptions.map((o) => <li key={o}>{o}</li>)}</ul>
            <p>{area.trustLine}</p>
          </section>
        ))}
      </div>
    </section>
  );
}
