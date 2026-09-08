"use client";

import { useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import styles from './VertebraViewer.module.css';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Record<string, unknown>;
      }
    }
  }
}

type Scene = { color: string; caption: string };

/* Accent palette mirrors SpecialistExplorer so hero and anatomy panels read as one system. */
const scenes: Record<string, Scene> = {
  'spine-specialist': { color: '#63dcff', caption: 'Vertebrae like this one stack to form the spine your specialist examines, from your neck to your lower back.' },
  'back-pain-doctor': { color: '#83e3c1', caption: 'A single thoracic vertebra — one of 33 bones, plus discs, joints, and muscles, that a back pain evaluation takes into account.' },
  'scoliosis-doctor': { color: '#bdaaff', caption: 'Scoliosis is assessed by how vertebrae like this one tilt and rotate as they stack — which is why imaging review matters.' },
  'sciatica-doctor': { color: '#ffbc8a', caption: 'Nerve roots exit through openings beside vertebrae like this one — often where sciatica begins its path down the leg.' },
  'spinal-stenosis-specialist': { color: '#80caff', caption: 'The spinal canal runs through this ring of bone. Stenosis means that space has narrowed around the nerves inside.' },
  'herniated-disc-specialist': { color: '#ff9faa', caption: 'Discs cushion the flat surfaces of vertebrae like this one. A tear can let inner disc material press on a nearby nerve.' },
  'pinched-nerve-doctor': { color: '#f4d68b', caption: 'Nerves thread through tight openings around vertebrae like this one — the spots where compression usually happens.' },
};

export default function VertebraViewer({ slug }: { slug: string }) {
  const scene = scenes[slug];
  const hostRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLElement>(null);
  const [near, setNear] = useState(false);
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const el = hostRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: '500px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!near) return;
    let cancelled = false;
    import('@google/model-viewer').then(() => {
      if (!cancelled) setReady(true);
    });
    return () => { cancelled = true; };
  }, [near]);

  if (!scene) return null;

  const resetCamera = () => {
    const mv = viewerRef.current as (HTMLElement & { cameraOrbit?: string }) | null;
    if (mv) mv.cameraOrbit = '-30deg 75deg 105%';
  };

  return (
    <div ref={hostRef} className={styles.panel} style={{ '--accent': scene.color } as React.CSSProperties}>
      <div className={styles.topline}>
        <span>Interactive 3D · Vertebra</span>
        <button type="button" onClick={resetCamera} aria-label="Reset 3D view">
          <RotateCcw size={15} />
        </button>
      </div>
      <div className={styles.stage}>
        {ready ? (
          <model-viewer
            ref={viewerRef}
            src="/3D-vertebrae/vertebra-t10.glb"
            alt="Rotatable 3D model of a human thoracic vertebra"
            camera-controls=""
            disable-zoom=""
            {...(reducedMotion ? {} : { 'auto-rotate': '', 'rotation-per-second': '18deg', 'auto-rotate-delay': '0' })}
            camera-orbit="-30deg 75deg 105%"
            shadow-intensity="1"
            exposure="1.1"
            interaction-prompt-threshold="1500"
            loading="eager"
            style={{ width: '100%', height: '100%', touchAction: 'pan-y', ['--poster-color' as string]: 'transparent', ['--progress-bar-color' as string]: scene.color }}
          />
        ) : (
          <div className={styles.loading} aria-hidden="true">
            <span className={styles.pulse} />
            <span className={styles.loadingLabel}>{near ? 'Loading 3D model…' : ' '}</span>
          </div>
        )}
      </div>
      <p className={styles.hint}>Drag to rotate · Thoracic vertebra (T-10)</p>
      <p className={styles.caption}>{scene.caption}</p>
      <p className={styles.disclaimer}>Conceptual anatomy model, not your imaging or a diagnosis.</p>
    </div>
  );
}
