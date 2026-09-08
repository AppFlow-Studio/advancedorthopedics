"use client";

/**
 * Detailed anatomical artwork for the specialist hero explorer.
 * Every scene is a conceptual illustration (labeled as such by the parent),
 * drawn to read as anatomy — not as abstract shapes. All motion is gated on
 * prefers-reduced-motion via the `reduced` prop.
 */
import { motion, AnimatePresence } from 'framer-motion';
import { BODY_BACK_D, BODY_BACK_CREASE_D } from './body-silhouette';

export type SceneProps = { active: number; color: string; reduced: boolean; uid: string };

const spring = { type: 'spring' as const, stiffness: 130, damping: 19 };
const BONE_DIM = '#31506f';
const NERVE = '#f6c76a';

/* ------------------------------------------------------------------ */
/* Shared defs + backdrop                                              */
/* ------------------------------------------------------------------ */

export function SceneDefs({ uid, color }: { uid: string; color: string }) {
  return (
    <defs>
      <linearGradient id={`${uid}-bone`} x1="0" y1="0" x2="0.9" y2="1">
        <stop offset="0" stopColor="#f2f7fd" />
        <stop offset="0.55" stopColor="#ccd9e9" />
        <stop offset="1" stopColor="#94aac3" />
      </linearGradient>
      <linearGradient id={`${uid}-boneDim`} x1="0" y1="0" x2="0.9" y2="1">
        <stop offset="0" stopColor="#4b6b8d" />
        <stop offset="1" stopColor="#2a4460" />
      </linearGradient>
      <linearGradient id={`${uid}-flesh`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#26456a" />
        <stop offset="1" stopColor="#152c47" />
      </linearGradient>
      <radialGradient id={`${uid}-halo`}>
        <stop stopColor={color} stopOpacity="0.2" />
        <stop offset="1" stopColor={color} stopOpacity="0" />
      </radialGradient>
      <radialGradient id={`${uid}-hot`}>
        <stop stopColor={color} stopOpacity="0.8" />
        <stop offset="1" stopColor={color} stopOpacity="0" />
      </radialGradient>
      <filter id={`${uid}-glow`} x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="3" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

export function SceneBackdrop({ uid, color, reduced }: { uid: string; color: string; reduced: boolean }) {
  return (
    <g>
      <circle cx="200" cy="180" r="172" fill={`url(#${uid}-halo)`} />
      {[86, 130, 172].map((r) => (
        <circle key={r} cx="200" cy="180" r={r} fill="none" stroke="#fff" strokeOpacity="0.055" strokeDasharray="2 10" />
      ))}
      {!reduced &&
        [
          { cx: 62, cy: 96, d: 11 },
          { cx: 338, cy: 74, d: 14 },
          { cx: 352, cy: 262, d: 12 },
          { cx: 52, cy: 274, d: 15 },
        ].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={i % 2 ? 2 : 1.4}
            fill={color}
            animate={{ y: [0, -12, 0], opacity: [0.2, 0.55, 0.2] }}
            transition={{ duration: p.d, repeat: Infinity, ease: 'easeInOut', delay: i * 1.4 }}
          />
        ))}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function Callout({ x1, y1, x2, y2, label, color, anchor = 'start', show }: {
  x1: number; y1: number; x2: number; y2: number; label: string; color: string; anchor?: 'start' | 'end'; show: boolean;
}) {
  // Hockey-stick leader: the diagonal stops clear of the label's width, then a
  // horizontal shelf runs above the text, so the line can never strike through it.
  // The label sits on a dark pill so it stays readable over any artwork.
  const w = label.length * 7.4;
  const bend = anchor === 'end' ? x2 - w - 6 : x2 + w + 6;
  const pillX = anchor === 'end' ? x2 - w - 8 : x2 - 4;
  return (
    <AnimatePresence>
      {show && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
          <motion.path d={`M${x1} ${y1} L${bend} ${y2} L${x2} ${y2}`} stroke={color} strokeWidth="1.2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
          <circle cx={x1} cy={y1} r="2.4" fill={color} />
          <rect x={pillX} y={y2 + 3} width={w + 12} height={18} rx={9} fill="#0b1e33" opacity="0.9" />
          <text x={x2 + (anchor === 'start' ? 2 : -2)} y={y2 + 16} fill="#dce8f4" fontSize="10.5" letterSpacing="1.4" textAnchor={anchor} style={{ textTransform: 'uppercase' }}>
            {label}
          </text>
        </motion.g>
      )}
    </AnimatePresence>
  );
}

/** Standalone label on a dark pill — readable over bone-light artwork. */
function TagText({ x, y, label, anchor = 'start' }: { x: number; y: number; label: string; anchor?: 'start' | 'end' | 'middle' }) {
  const w = label.length * 7.4;
  const pillX = anchor === 'middle' ? x - w / 2 - 6 : anchor === 'end' ? x - w - 8 : x - 4;
  return (
    <g>
      <rect x={pillX} y={y - 13} width={w + 12} height={18} rx={9} fill="#0b1e33" opacity="0.9" />
      <text x={x} y={y} fill="#dce8f4" fontSize="10.5" letterSpacing="1.4" textAnchor={anchor}>
        {label}
      </text>
    </g>
  );
}

/** Bright dash cycling along a nerve path — the "signal" motif. */
function NervePulse({ d, color, reduced, duration = 2.6, width = 3 }: { d: string; color: string; reduced: boolean; duration?: number; width?: number }) {
  if (reduced) return null;
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeDasharray="16 240"
      animate={{ strokeDashoffset: [0, -256] }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      opacity={0.95}
    />
  );
}

/** Expanding pain/attention rings at a point. */
function PainRings({ cx, cy, color, reduced }: { cx: number; cy: number; color: string; reduced: boolean }) {
  return (
    <g>
      {[0, 1].map((i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r={8}
          fill="none"
          stroke={color}
          strokeWidth="1.6"
          initial={{ opacity: 0.8, scale: 0.4 }}
          animate={reduced ? { opacity: 0.6, scale: 1.6 } : { opacity: [0.8, 0], scale: [0.4, 2.6] }}
          transition={reduced ? { duration: 0 } : { duration: 2.2, repeat: Infinity, delay: i * 1.1, ease: 'easeOut' }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}
      <circle cx={cx} cy={cy} r="4.5" fill={color} />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* 1 · Spine specialist — lateral spine with scanner focus             */
/* ------------------------------------------------------------------ */

type Vert = { x: number; y: number; w: number; h: number; tilt: number; region: number };

function buildLateralSpine(): Vert[] {
  const out: Vert[] = [];
  let y = 42;
  const specs: Array<[number, number, number, number, number]> = [
    [5, 24, 8, 4, 0],
    [7, 32, 11, 5, 1],
    [4, 44, 15, 6, 2],
  ];
  for (const [count, w, h, gap, region] of specs) {
    for (let i = 0; i < count; i++) {
      const p = (y - 42) / 260;
      const x = 200 + 15 * Math.sin(p * Math.PI * 1.75 + 0.5);
      const tilt = 7 * Math.cos(p * Math.PI * 1.75 + 0.5);
      out.push({ x, y, w, h, tilt, region });
      y += h + gap;
    }
  }
  return out;
}

const LATERAL = buildLateralSpine();
const REGION_LABEL = ['CERVICAL · C1–C7', 'THORACIC · T1–T12', 'LUMBAR · L1–L5'];

export function SpineScene({ active, color, reduced, uid }: SceneProps) {
  const regions = [0, 1, 2].map((r) => {
    const vs = LATERAL.filter((v) => v.region === r);
    const top = vs[0].y - 6;
    const bottom = vs[vs.length - 1].y + vs[vs.length - 1].h + 6;
    return { top, h: bottom - top };
  });
  const focus = regions[active];
  const cord = LATERAL.map((v, i) => `${i === 0 ? 'M' : 'L'}${v.x + v.w * 0.62} ${v.y + v.h / 2}`).join(' ');
  const last = LATERAL[LATERAL.length - 1];
  return (
    <g>
      {/* spinal cord behind the column */}
      <path d={cord} fill="none" stroke="#40608066" strokeWidth="7" strokeLinecap="round" />
      <NervePulse d={cord} color={color} reduced={reduced} duration={3.4} width={3.4} />
      {LATERAL.map((v, i) => {
        const lit = v.region === active;
        return (
          <motion.g
            key={i}
            transform={`rotate(${v.tilt} ${v.x} ${v.y + v.h / 2})`}
            animate={{ opacity: lit ? 1 : 0.5 }}
            transition={spring}
          >
            {/* disc above each body (skip the first) */}
            {i > 0 && LATERAL[i - 1].region === v.region && (
              <motion.ellipse cx={v.x} cy={v.y - 2.6} rx={v.w / 2 - 3} ry={2.4} animate={{ fill: lit ? color : '#48688a', opacity: lit ? 0.9 : 0.55 }} transition={spring} />
            )}
            {/* vertebral body */}
            <motion.rect
              x={v.x - v.w / 2}
              y={v.y}
              width={v.w}
              height={v.h}
              rx={v.h / 2.6}
              animate={{ fill: lit ? `url(#${uid}-bone)` : `url(#${uid}-boneDim)`, stroke: lit ? color : 'transparent' }}
              strokeWidth="0.8"
              transition={{ duration: 0.4 }}
            />
            {/* spinous process */}
            <motion.path
              d={`M${v.x + v.w / 2 - 2} ${v.y + v.h * 0.25} q ${10 + v.h * 0.5} ${v.h * 0.28} ${12 + v.h * 0.55} ${v.h * 0.85} q ${-8} ${1.5} ${-12 - v.h * 0.4} ${-1.5} Z`}
              animate={{ fill: lit ? `url(#${uid}-bone)` : `url(#${uid}-boneDim)` }}
              transition={{ duration: 0.4 }}
            />
          </motion.g>
        );
      })}
      {/* sacrum */}
      <path d={`M${last.x - 20} ${last.y + last.h + 5} q 20 -5 40 0 q -4 26 -16 34 q -6 2 -9 0 q -12 -10 -15 -34 Z`} fill={`url(#${uid}-boneDim)`} opacity={active === 2 ? 0.9 : 0.45} />
      {/* scanner focus bracket */}
      <motion.g animate={{ y: focus.top }} transition={spring} style={{ x: 0 }}>
        {(() => {
          const w = 132; const x = 134; const h0 = focus.h;
          const c = 14;
          return (
            <motion.g animate={{ scaleY: 1 }}>
              <motion.rect x={x} y={0} width={w} rx="14" animate={{ height: focus.h }} transition={spring} fill={color} opacity={0.07} />
              {[
                `M${x} ${c} v${-c + 14} q0 -14 14 -14 h${c - 4}`,
                `M${x + w} ${c} v${-c + 14} q0 -14 -14 -14 h${-c + 4}`,
              ].map((d, i) => (
                <path key={i} d={d} stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
              ))}
              {[0, 1].map((i) => (
                <motion.path
                  key={`b${i}`}
                  animate={{ d: i === 0 ? `M${x} ${h0 - 14} v0 q0 14 14 14 h10` : `M${x + w} ${h0 - 14} v0 q0 14 -14 14 h-10` }}
                  transition={spring}
                  stroke={color}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              ))}
            </motion.g>
          );
        })()}
      </motion.g>
      <Callout show x1={270} y1={focus.top + focus.h / 2} x2={392} y2={focus.top + focus.h / 2 - 16} label={REGION_LABEL[active]} color={color} anchor="end" />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* 2 · Back pain — posture silhouettes with load cues                  */
/* ------------------------------------------------------------------ */

/**
 * Segment-built figures: head + torso capsule + round-capped limb strokes,
 * the same construction as activity pictograms, so every pose reads as a
 * correctly proportioned human at a glance. Far-side limbs render dimmer
 * behind the torso for depth.
 */
const FIG = {
  sitting: {
    head: [223, 96, 14] as const,
    torso: 'M224 124 C227 144 228 164 226 186',
    limbsBack: ['M228 192 L170 198 L168 256 L150 260'],
    limbsFront: ['M226 190 L164 194 L162 254 L144 258', 'M224 136 L206 166 L188 188'],
    spine: 'M222 126 C226 146 227 166 225 186',
    hot: [225, 182] as const,
    shadow: [192, 266, 84] as const,
    extra: 'chair',
  },
  standing: {
    head: [197, 62, 14] as const,
    torso: 'M199 90 C201 112 202 138 200 164',
    limbsBack: ['M203 172 L206 240 L207 302 L191 306', 'M201 102 L207 140 L210 168'],
    limbsFront: ['M198 172 L196 240 L195 302 L177 306', 'M199 104 L195 140 L193 168'],
    spine: 'M197 92 C200 114 201 140 199 162',
    hot: [201, 158] as const,
    shadow: [197, 312, 66] as const,
    extra: 'plumb',
  },
  walking: {
    head: [196, 60, 14] as const,
    torso: 'M199 88 C204 112 206 136 203 160',
    limbsBack: ['M205 168 L234 214 L250 268 L236 278', 'M198 100 L176 132 L162 152'],
    limbsFront: ['M201 168 L174 216 L170 276 L152 280', 'M200 100 L222 134 L238 160'],
    spine: 'M197 90 C202 112 204 136 201 158',
    hot: [204, 152] as const,
    shadow: [205, 286, 92] as const,
    extra: 'motion',
  },
};

function Limb({ d, uid, dim }: { d: string; uid: string; dim?: boolean }) {
  return (
    <g opacity={dim ? 0.5 : 1}>
      <path d={d} fill="none" stroke="#54779c" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
      <path d={d} fill="none" stroke={`url(#${uid}-flesh)`} strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

export function BackPainScene({ active, color, reduced, uid }: SceneProps) {
  const keys = ['sitting', 'standing', 'walking'] as const;
  const k = keys[active];
  const f = FIG[k];
  return (
    <g>
      <AnimatePresence mode="wait">
        <motion.g
          key={k}
          initial={reduced ? false : { opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduced ? undefined : { opacity: 0, x: -16 }}
          transition={{ duration: reduced ? 0 : 0.35, ease: 'easeOut' }}
        >
          <ellipse cx={f.shadow[0]} cy={f.shadow[1]} rx={f.shadow[2]} ry="7" fill="#0b1c30" opacity="0.85" />
          {f.extra === 'chair' && (
            <g stroke="#4a6a8c" strokeWidth="4" strokeLinecap="round" fill="none">
              <path d="M246 118 L248 196" />
              <path d="M250 200 L152 200" strokeWidth="5" />
              <path d="M158 200 L158 262 M242 200 L242 262" />
              <path d="M112 268 H312" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          )}
          {f.extra === 'plumb' && <path d="M197 46 V330" stroke="#ffffff2e" strokeDasharray="3 8" strokeWidth="1.5" />}
          {f.extra === 'motion' && !reduced && (
            <g>
              {[0, 1, 2].map((i) => (
                <motion.path
                  key={i}
                  d={`M${282 + i * 8} ${110 + i * 52} h30`}
                  stroke={color}
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  animate={{ x: [0, 18, 0], opacity: [0.15, 0.6, 0.15] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.25 }}
                />
              ))}
            </g>
          )}
          {f.limbsBack.map((d, i) => (
            <Limb key={`b${i}`} d={d} uid={uid} dim />
          ))}
          <path d={f.torso} fill="none" stroke="#54779c" strokeWidth="34" strokeLinecap="round" opacity="0.55" />
          <path d={f.torso} fill="none" stroke={`url(#${uid}-flesh)`} strokeWidth="30" strokeLinecap="round" />
          {f.limbsFront.map((d, i) => (
            <Limb key={`f${i}`} d={d} uid={uid} />
          ))}
          <circle cx={f.head[0]} cy={f.head[1]} r={f.head[2]} fill={`url(#${uid}-flesh)`} stroke="#54779c" strokeWidth="1.4" />
          <path d={f.spine} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" filter={`url(#${uid}-glow)`} strokeDasharray="5 4" />
          <PainRings cx={f.hot[0]} cy={f.hot[1]} color={color} reduced={reduced} />
          {f.extra === 'chair' && (
            <g fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.9">
              {[0, 1].map((i) => (
                <motion.path
                  key={i}
                  d={`M${260 + i * 16} ${146 + i * 6} v16 m-4 -6 l4 6 l4 -6`}
                  animate={reduced ? undefined : { y: [0, 7, 0], opacity: [0.9, 0.3, 0.9] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4 }}
                />
              ))}
            </g>
          )}
        </motion.g>
      </AnimatePresence>
      <Callout show x1={f.hot[0] + 8} y1={f.hot[1]} x2={366} y2={54} label={['disc load rises', 'upright load', 'load in motion'][active]} color={color} anchor="end" />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* 3 · Scoliosis — posterior spine with measurement overlays           */
/* ------------------------------------------------------------------ */

function buildPosteriorSpine(): Vert[] {
  const out: Vert[] = [];
  let y = 66;
  for (let i = 0; i < 14; i++) {
    const p = i / 13;
    const x = 200 + 26 * Math.sin(p * Math.PI);
    const w = 26 + p * 14;
    const h = 11 + p * 3;
    const tilt = 22 * Math.cos(p * Math.PI) * (p < 0.06 || p > 0.94 ? 0.4 : 1) * 0.55;
    out.push({ x, y, w, h, tilt: -tilt, region: 0 });
    y += h + 4;
  }
  return out;
}
const POSTERIOR = buildPosteriorSpine();

export function ScoliosisScene({ active, color, reduced, uid }: SceneProps) {
  const apex = POSTERIOR[6];
  const a = POSTERIOR[2];
  const b = POSTERIOR[11];
  return (
    <g>
      {/* shoulders + pelvis anchor the anatomy */}
      <path d="M112 84 Q200 62 288 84" fill="none" stroke="#4a6a8c" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <path d="M150 302 q8 -26 44 -30 l6 10 q-18 24 -32 30 q-12 2 -18 -10 Z" fill={`url(#${uid}-boneDim)`} opacity="0.85" />
      <path d="M250 302 q-8 -26 -44 -30 l-6 10 q18 24 32 30 q12 2 18 -10 Z" fill={`url(#${uid}-boneDim)`} opacity="0.85" />
      <motion.g
        animate={!reduced && active === 2 ? { rotate: [-1.4, 1.4, -1.4] } : { rotate: 0 }}
        transition={!reduced && active === 2 ? { duration: 5.4, repeat: Infinity, ease: 'easeInOut' } : spring}
        style={{ transformOrigin: '200px 320px' }}
      >
        {POSTERIOR.map((v, i) => (
          <g key={i} transform={`rotate(${v.tilt} ${v.x} ${v.y + v.h / 2})`}>
            <rect x={v.x - v.w / 2 - 9} y={v.y + v.h / 2 - 2} width={9} height={4} rx={2} fill={`url(#${uid}-boneDim)`} />
            <rect x={v.x + v.w / 2} y={v.y + v.h / 2 - 2} width={9} height={4} rx={2} fill={`url(#${uid}-boneDim)`} />
            <rect x={v.x - v.w / 2} y={v.y} width={v.w} height={v.h} rx={4} fill={`url(#${uid}-bone)`} stroke={i === 6 ? color : 'transparent'} strokeWidth="1" />
            <circle cx={v.x} cy={v.y + v.h / 2} r={1.8} fill="#7e97b4" />
          </g>
        ))}
      </motion.g>
      {/* view 0 — Cobb angle */}
      <AnimatePresence>
        {active === 0 && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {[a, b].map((v, i) => (
              <motion.path
                key={i}
                d={`M${v.x - 66} ${v.y + (i === 0 ? -6 : v.h + 6) - Math.tan((v.tilt * Math.PI) / 180) * -66} L${v.x + 66} ${v.y + (i === 0 ? -6 : v.h + 6) + Math.tan((v.tilt * Math.PI) / 180) * -66}`}
                stroke={color}
                strokeWidth="1.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              />
            ))}
            <motion.path d={`M${apex.x + 52} ${a.y + 24} A 74 74 0 0 1 ${apex.x + 50} ${b.y - 18}`} fill="none" stroke={color} strokeWidth="1.3" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, delay: 0.5 }} />
            <TagText x={apex.x + 62} y={(a.y + b.y) / 2 + 4} label="COBB ANGLE" />
          </motion.g>
        )}
      </AnimatePresence>
      {/* view 1 — balance plumb line */}
      <AnimatePresence>
        {active === 1 && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <path d="M200 56 V340" stroke="#ffffff45" strokeDasharray="3 8" strokeWidth="1.4" />
            <motion.path d={`M200 ${apex.y + 6} H${apex.x - 4}`} stroke={color} strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} markerEnd="none" />
            <path d={`M${apex.x - 10} ${apex.y + 2} l8 4 l-8 4 Z`} fill={color} />
            <TagText x={62} y={apex.y - 12} label="LATERAL SHIFT" />
            <circle cx="200" cy="56" r="3" fill={color} />
          </motion.g>
        )}
      </AnimatePresence>
      {active === 2 && (
        <Callout show x1={apex.x + 24} y1={apex.y + 4} x2={382} y2={92} label="motion, not just angles" color={color} anchor="end" />
      )}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* 4 · Sciatica — nerve path down the leg                              */
/* ------------------------------------------------------------------ */

/** Fits the CC0 posterior silhouette (source x 157.5-304.5, y 21-334.9) into the stage. */
const BODY_T = 'translate(-13.44 8.6) scale(0.924)';

function Body({ uid }: { uid: string }) {
  return (
    <g transform={BODY_T}>
      <path d={BODY_BACK_D} fill={`url(#${uid}-flesh)`} stroke="#54779c" strokeWidth="1.5" strokeLinejoin="round" />
      <path d={BODY_BACK_CREASE_D} fill="none" stroke="#54779c" strokeWidth="1.2" opacity="0.55" />
    </g>
  );
}

const SCIATIC_MAIN = 'M200 162 C206 176 212 186 216 196 C220 210 217 228 214 242 C213 250 212 254 212 258';
const SCIATIC_TIBIAL = 'M212 258 C212 272 212 286 211 300';
const SCIATIC_PERONEAL = 'M212 258 C206 270 202 282 200 294';

export function SciaticaScene({ active, color, reduced, uid }: SceneProps) {
  const stops = [
    { cx: 200, cy: 164 },
    { cx: 216, cy: 198 },
    { cx: 212, cy: 270 },
  ][active];
  return (
    <g>
      <Body uid={uid} />
      {/* lumbar vertebrae hint above the pelvis */}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={193} y={146 + i * 11} width={14} height={8} rx={3} fill={`url(#${uid}-bone)`} opacity={active === 0 ? 1 : 0.55} />
      ))}
      {/* the nerve */}
      <path d={SCIATIC_MAIN} fill="none" stroke="#4d6f93" strokeWidth="7" strokeLinecap="round" opacity="0.5" />
      <motion.path d={SCIATIC_MAIN} fill="none" stroke={NERVE} strokeWidth="3.4" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduced ? 0 : 1.1 }} filter={`url(#${uid}-glow)`} />
      {[SCIATIC_TIBIAL, SCIATIC_PERONEAL].map((d, i) => (
        <motion.path key={i} d={d} fill="none" stroke={NERVE} strokeWidth="2.6" strokeLinecap="round" animate={{ opacity: active === 2 ? 1 : 0.45, pathLength: 1 }} initial={{ pathLength: 0 }} transition={{ duration: reduced ? 0 : 0.8, delay: 0.5 }} filter={active === 2 ? `url(#${uid}-glow)` : undefined} />
      ))}
      <NervePulse d={SCIATIC_MAIN + ' ' + (active === 2 ? SCIATIC_TIBIAL.replace('M212 258 ', '') : '')} color={color} reduced={reduced} duration={2.4} />
      {/* nerve root dots at the spine */}
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={197 + i * 3} cy={154 + i * 8} r={2.4} fill={NERVE} opacity={active === 0 ? 1 : 0.5} />
      ))}
      <motion.g animate={{ x: stops.cx, y: stops.cy }} transition={spring} style={{ x: stops.cx, y: stops.cy }}>
        <PainRings cx={0} cy={0} color={color} reduced={reduced} />
      </motion.g>
      {/* tingling along the calf in leg view */}
      {active === 2 &&
        [0, 1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            cx={[218, 206, 214, 203][i]}
            cy={[278, 286, 298, 304][i]}
            r="2"
            fill={color}
            initial={{ opacity: 0 }}
            animate={reduced ? { opacity: 0.8 } : { opacity: [0, 1, 0], scale: [0.6, 1.4, 0.6] }}
            transition={reduced ? undefined : { duration: 1.6, repeat: Infinity, delay: i * 0.35 }}
          />
        ))}
      <Callout show x1={stops.cx - 12} y1={stops.cy} x2={50} y2={[120, 174, 262][active]} label={['root origin', 'deep gluteal', 'down the leg'][active]} color={color} anchor="start" />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* 5 · Spinal stenosis — axial cross-section                           */
/* ------------------------------------------------------------------ */

export function StenosisScene({ active, color, reduced, uid }: SceneProps) {
  return (
    <g transform="translate(0 6)">
      {/* vertebral body */}
      <path
        d="M118 118 C118 84 156 68 200 68 C244 68 282 84 282 118 C282 142 262 154 238 156 C225 157 213 152 200 152 C187 152 175 157 162 156 C138 154 118 142 118 118 Z"
        fill={`url(#${uid}-bone)`}
        stroke="#8ba3bd"
        strokeWidth="1"
      />
      <ellipse cx="200" cy="108" rx="58" ry="26" fill="#ffffff18" />
      {/* transverse processes */}
      <path d="M128 160 q-30 4 -44 20 q4 10 16 10 q22 -8 38 -20 Z" fill={`url(#${uid}-boneDim)`} />
      <path d="M272 160 q30 4 44 20 q-4 10 -16 10 q-22 -8 -38 -20 Z" fill={`url(#${uid}-boneDim)`} />
      {/* pedicles */}
      <path d="M158 158 q-6 18 2 34 l16 -6 q-4 -14 0 -26 Z" fill={`url(#${uid}-bone)`} />
      <path d="M242 158 q6 18 -2 34 l-16 -6 q4 -14 0 -26 Z" fill={`url(#${uid}-bone)`} />
      {/* laminae arch + spinous process */}
      <path d="M160 192 C168 226 184 238 200 240 C216 238 232 226 240 192 L226 186 C220 212 210 222 200 224 C190 222 180 212 174 186 Z" fill={`url(#${uid}-bone)`} />
      <rect x="191" y="238" width="18" height="40" rx="8" fill={`url(#${uid}-bone)`} />
      {/* facet joints */}
      <ellipse cx="163" cy="190" rx="7" ry="10" fill="#5f7fa2" transform="rotate(-24 163 190)" />
      <ellipse cx="237" cy="190" rx="7" ry="10" fill="#5f7fa2" transform="rotate(24 237 190)" />
      {/* the canal + cord */}
      <motion.ellipse
        cx="200"
        cy="182"
        rx="30"
        ry="24"
        fill="#0d2036"
        stroke={active === 0 ? color : '#54779c'}
        strokeWidth={active === 0 ? 2.2 : 1.4}
        filter={active === 0 ? `url(#${uid}-glow)` : undefined}
      />
      {/* narrowing demo ring */}
      {active === 0 && (
        <motion.ellipse
          cx="200"
          cy="182"
          rx="30"
          ry="24"
          fill="none"
          stroke={color}
          strokeWidth="1.4"
          strokeDasharray="5 5"
          animate={reduced ? { scale: 0.74, opacity: 0.9 } : { scale: [1, 0.72, 1], opacity: [0.25, 0.95, 0.25] }}
          transition={reduced ? { duration: 0 } : { duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '200px 182px' }}
        />
      )}
      {/* cauda equina dots */}
      {[[-9, -5], [0, -9], [9, -5], [-11, 4], [0, 1], [11, 4], [-5, 10], [5, 10]].map(([dx, dy], i) => (
        <motion.circle key={i} cx={200 + dx} cy={182 + dy} r="2.6" fill={NERVE} animate={!reduced && active !== 1 ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.9 }} transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.2 }} />
      ))}
      {/* exiting nerve roots + foramina */}
      {[[-1, 168], [1, 168]].map(([s]) => (
        <g key={s}>
          <motion.path
            d={s < 0 ? 'M176 176 C160 182 148 190 136 202' : 'M224 176 C240 182 252 190 264 202'}
            fill="none"
            stroke={NERVE}
            strokeWidth="4"
            strokeLinecap="round"
            animate={{ opacity: active === 1 ? 1 : 0.5 }}
            filter={active === 1 ? `url(#${uid}-glow)` : undefined}
          />
          <motion.circle cx={s < 0 ? 152 : 248} cy={190} r="12" fill="none" stroke={active === 1 ? color : '#54779c55'} strokeWidth="1.6" strokeDasharray="3 4" animate={{ opacity: active === 1 ? 1 : 0.45 }} />
        </g>
      ))}
      {/* walking gauge */}
      <AnimatePresence>
        {active === 2 && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <path d="M138 320 A 66 66 0 0 1 262 320" fill="none" stroke="#3a5a7c" strokeWidth="5" strokeLinecap="round" />
            <motion.path d="M138 320 A 66 66 0 0 1 262 320" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={reduced ? { pathLength: 0.42 } : { pathLength: [0.1, 0.46, 0.1] }} transition={reduced ? { duration: 0 } : { duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
            <TagText x={200} y={318} label="WALKING TOLERANCE" anchor="middle" />
          </motion.g>
        )}
      </AnimatePresence>
      <Callout
        show
        x1={[222, 254, 222][active]}
        y1={[176, 192, 176][active]}
        x2={[382, 382, 382][active]}
        y2={[248, 248, 132][active]}
        label={['spinal canal', 'nerve opening', 'less room in motion'][active]}
        color={color}
        anchor="end"
      />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* 6 · Herniated disc — sagittal motion segment with live herniation   */
/* ------------------------------------------------------------------ */

const HERN_SMALL = 'M262 168 C268 166 270 176 264 178 C262 176 261 172 262 168 Z';
const HERN_BIG = 'M258 156 C288 156 300 166 297 178 C292 192 268 190 258 188 C260 178 260 166 258 156 Z';
const NERVE_STRAIGHT = 'M298 54 C298 118 298 200 298 306';
const NERVE_BENT = 'M298 54 C298 118 296 146 306 172 C312 188 300 220 298 306';

export function HerniatedScene({ active, color, reduced, uid }: SceneProps) {
  return (
    <g>
      {/* posterior canal */}
      <rect x="286" y="48" width="26" height="264" rx="13" fill="#0d2036" stroke="#33516b" />
      {/* vertebral bodies */}
      {[76, 198].map((y, vi) => (
        <g key={vi}>
          <rect x="118" y={y} width="146" height="70" rx="18" fill={`url(#${uid}-bone)`} stroke="#8ba3bd" strokeWidth="1" />
          <rect x="126" y={vi === 0 ? y + 62 : y - 0.5} width="130" height="6" rx="3" fill="#8fa7c0" opacity="0.8" />
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} cx={140 + i * 34} cy={y + 24 + (i % 2) * 18} r="1.6" fill="#9db2c9" opacity="0.6" />
          ))}
        </g>
      ))}
      {/* annulus rings */}
      {[[146, 46, 24], [118, 34, 17], [88, 22, 11]].map(([w, h, r], i) => (
        <motion.rect
          key={i}
          x={191 - w / 2}
          y={172 - h / 2}
          width={w}
          height={h}
          rx={r}
          fill="none"
          stroke={active === 0 ? color : '#7c94ae'}
          strokeWidth={active === 0 ? 2 : 1.4}
          initial={{ pathLength: 0, opacity: 0.4 }}
          animate={{ pathLength: 1, opacity: active === 0 ? 1 : 0.65 }}
          transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : i * 0.18 }}
        />
      ))}
      {/* nucleus */}
      <motion.ellipse cx="191" cy="172" rx="27" ry="8.5" animate={{ fill: active >= 1 ? color : '#48688a', opacity: active >= 1 ? 0.95 : 0.7 }} filter={active === 1 ? `url(#${uid}-glow)` : undefined} transition={{ duration: 0.4 }} />
      {/* herniation morph */}
      <motion.path
        animate={{ d: active >= 1 ? HERN_BIG : HERN_SMALL, opacity: active >= 1 ? 0.95 : 0.25, fill: color }}
        transition={{ duration: reduced ? 0 : 0.7, ease: 'easeInOut' }}
        filter={active >= 1 ? `url(#${uid}-glow)` : undefined}
      />
      {/* nerve root — bends around the bulge in view 3 */}
      <motion.path
        animate={{ d: active === 2 ? NERVE_BENT : NERVE_STRAIGHT }}
        transition={{ duration: reduced ? 0 : 0.7, ease: 'easeInOut' }}
        fill="none"
        stroke={NERVE}
        strokeWidth="5"
        strokeLinecap="round"
        filter={active === 2 ? `url(#${uid}-glow)` : undefined}
        opacity={active === 2 ? 1 : 0.6}
      />
      <NervePulse d={active === 2 ? NERVE_BENT : NERVE_STRAIGHT} color={active === 2 ? color : NERVE} reduced={reduced} duration={3} />
      {/* contact sparks */}
      {active === 2 &&
        [0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M${300 + i * 4} ${170 + i * 8} l7 -5`}
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={reduced ? { opacity: 0.9 } : { opacity: [0, 1, 0] }}
            transition={reduced ? undefined : { duration: 1.1, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      <Callout
        show
        x1={[122, 168, 302][active]}
        y1={[172, 170, 182][active]}
        x2={[52, 52, 240][active]}
        y2={[322, 322, 318][active]}
        label={['annulus · outer rings', 'nucleus · inner core', 'nerve under pressure'][active]}
        color={color}
        anchor={active === 2 ? 'end' : 'start'}
      />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* 7 · Pinched nerve — neck-to-hand signal map                         */
/* ------------------------------------------------------------------ */

const ARM_NERVE = 'M204 68 C214 74 226 79 237 86 C249 94 254 106 258 122 C262 142 262 162 259 180 C257 192 256 200 255 208';
const FINGERS = ['M255 208 C252 214 250 218 249 223', 'M255 208 C255 215 255 220 255 225', 'M255 208 C258 214 260 218 261 221'];

export function PinchedNerveScene({ active, color, reduced, uid }: SceneProps) {
  return (
    <g>
      <Body uid={uid} />
      {/* cervical vertebrae at the base of the neck */}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={193} y={62 + i * 9} width={14} height={6.5} rx={3} fill={`url(#${uid}-bone)`} opacity={active === 2 || active === 0 ? 1 : 0.6} />
      ))}
      {/* plexus rootlets converge from the neck into the trunk */}
      {[62, 70, 78].map((y, i) => (
        <motion.path key={i} d={`M192 ${y + 3} C199 ${y + 4} 201 ${68 + i * 2} 204 68`} fill="none" stroke={NERVE} strokeWidth="1.8" strokeLinecap="round" opacity={0.85} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduced ? 0 : 0.6, delay: i * 0.12 }} />
      ))}
      {/* main nerve + finger branches */}
      <path d={ARM_NERVE} fill="none" stroke="#4d6f93" strokeWidth="7" strokeLinecap="round" opacity="0.45" />
      <motion.path d={ARM_NERVE} fill="none" stroke={NERVE} strokeWidth="3.2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduced ? 0 : 1.2 }} filter={`url(#${uid}-glow)`} />
      {FINGERS.map((d, i) => (
        <motion.path key={i} d={d} fill="none" stroke={NERVE} strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1, opacity: active === 0 ? 1 : 0.6 }} transition={{ duration: reduced ? 0 : 0.5, delay: 1 + i * 0.1 }} />
      ))}
      <NervePulse d={ARM_NERVE} color={color} reduced={reduced} duration={2.8} />
      {/* view 0 — sensation particles over forearm + hand */}
      {active === 0 &&
        [0, 1, 2, 3, 4, 5].map((i) => (
          <motion.circle
            key={i}
            cx={[252, 257, 250, 254, 248, 253][i]}
            cy={[150, 166, 182, 196, 210, 220][i]}
            r="2.2"
            fill={color}
            initial={{ opacity: 0 }}
            animate={reduced ? { opacity: 0.85 } : { opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
            transition={reduced ? undefined : { duration: 1.5, repeat: Infinity, delay: i * 0.28 }}
          />
        ))}
      {/* view 1 — strength bars near the hand */}
      <AnimatePresence>
        {active === 1 && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ellipse cx="258" cy="168" rx="10" ry="26" fill={color} opacity="0.18" transform="rotate(6 258 168)" />
            {[0, 1, 2].map((i) => (
              <motion.rect key={i} x={300 + i * 13} y={296 - i * 14} width={8} rx={3} fill={color} initial={{ height: 0 }} animate={{ height: 14 + i * 14 }} transition={{ delay: 0.15 * i, ...spring }} style={{ originY: 1 }} />
            ))}
            <TagText x={300} y={326} label="GRIP" />
          </motion.g>
        )}
      </AnimatePresence>
      {/* view 2 — location pins along the course */}
      {active === 2 &&
        [
          { cx: 200, cy: 70, l: '1' },
          { cx: 240, cy: 92, l: '2' },
          { cx: 256, cy: 202, l: '3' },
        ].map((p, i) => (
          <motion.g key={i} initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.18, ...spring }} style={{ transformOrigin: `${p.cx}px ${p.cy}px` }}>
            <circle cx={p.cx} cy={p.cy - 4} r="12" fill="#0d2036" stroke={color} strokeWidth="2" />
            <text x={p.cx} y={p.cy} fill={color} fontSize="11" fontWeight="700" textAnchor="middle">{p.l}</text>
          </motion.g>
        ))}
      <Callout
        show
        x1={[257, 262, 262][active]}
        y1={[184, 168, 202][active]}
        x2={[384, 384, 384][active]}
        y2={[140, 110, 246][active]}
        label={['tingling map', 'strength check', 'where it starts'][active]}
        color={color}
        anchor="end"
      />
    </g>
  );
}
