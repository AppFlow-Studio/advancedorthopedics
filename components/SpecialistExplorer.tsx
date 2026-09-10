"use client";

import { useId, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, RotateCcw } from 'lucide-react';
import styles from './SpecialistExplorer.module.css';
import {
  SceneDefs,
  SceneBackdrop,
  SpineScene,
  BackPainScene,
  ScoliosisScene,
  SciaticaScene,
  StenosisScene,
  HerniatedScene,
  PinchedNerveScene,
  type SceneProps,
} from './explorer-scenes';

type Scene = { title: string; label: string; color: string; views: [string, string, string]; notes: [string, string, string]; Art: (p: SceneProps) => React.ReactNode };

const scenes: Record<string, Scene> = {
  'spine-specialist': { Art: SpineScene, title: 'See the bigger picture', label: 'Your spine, in focus', color: '#63dcff', views: ['Neck', 'Mid-back', 'Lower back'], notes: ['Describe neck symptoms and any changes in your arms or hands.', 'Share where discomfort sits and how it affects daily movement.', 'Tell your specialist about back symptoms and any changes in your legs.'] },
  'back-pain-doctor': { Art: BackPainScene, title: 'Start with your everyday', label: 'Your movement story', color: '#83e3c1', views: ['Sitting', 'Standing', 'Walking'], notes: ['Notice whether sitting changes your symptoms and how long you feel comfortable.', 'Describe how standing affects your back and whether changing position helps.', 'Share how far you can walk comfortably and what makes you stop.'] },
  'scoliosis-doctor': { Art: ScoliosisScene, title: 'More than a curve', label: 'A whole-person perspective', color: '#bdaaff', views: ['Alignment', 'Balance', 'Daily life'], notes: ['Bring previous spine imaging if available so your specialist can review alignment.', 'Describe any changes you have noticed in posture or balance.', 'Explain which activities matter most to you when discussing your care goals.'] },
  'sciatica-doctor': { Art: SciaticaScene, title: 'Trace your symptom story', label: 'From your back to your leg', color: '#ffbc8a', views: ['Back', 'Buttock', 'Leg'], notes: ['Tell your specialist whether back discomfort accompanies your leg symptoms.', 'Describe which side is affected and where the discomfort begins.', 'Share how far symptoms travel and any numbness or weakness.'] },
  'spinal-stenosis-specialist': { Art: StenosisScene, title: 'Make room for questions', label: 'Understanding the spaces', color: '#80caff', views: ['Spinal canal', 'Nerve opening', 'Walking'], notes: ['Your specialist can explain what your imaging shows about the spinal canal.', 'Ask how imaging findings relate to the symptoms you describe.', 'Discuss your walking tolerance and whether rest or position changes symptoms.'] },
  'herniated-disc-specialist': { Art: HerniatedScene, title: 'Look beneath the surface', label: 'A layered view of a disc', color: '#ff9faa', views: ['Outer layer', 'Inner material', 'Nearby nerve'], notes: ['Ask your specialist to explain the disc findings on your scan.', 'Imaging is considered alongside your symptoms and examination.', 'Describe any symptoms extending into an arm or leg when reviewing your scan.'] },
  'pinched-nerve-doctor': { Art: PinchedNerveScene, title: 'Connect the clues', label: 'Your nerve symptom map', color: '#f4d68b', views: ['Sensation', 'Strength', 'Location'], notes: ['Describe tingling or numbness, including when it happens and how long it lasts.', 'Tell your specialist about changes in grip, lifting, or walking.', 'Point out where symptoms start and whether they spread elsewhere.'] },
};

export default function SpecialistExplorer({ slug }: { slug: string }) {
  const scene = scenes[slug];
  const [active, setActive] = useState(0);
  const [replay, setReplay] = useState(0);
  const reduced = useReducedMotion() ?? false;
  const id = useId();
  if (!scene) return null;
  const color = scene.color;
  const { Art } = scene;
  return (
    <div className={styles.explorer} style={{ '--scene-color': color } as React.CSSProperties}>
      <div className={styles.topline}>
        <span>{scene.label}</span>
        <button type="button" onClick={() => setReplay((r) => r + 1)} aria-label="Replay illustration">
          <RotateCcw size={16} />
        </button>
      </div>
      <div className={styles.stage}>
        <svg viewBox="0 0 400 360" role="img" aria-label={`${scene.label}: ${scene.views[active]}. Conceptual illustration, not a diagnostic image.`}>
          <SceneDefs uid={id} color={color} />
          <SceneBackdrop uid={id} color={color} reduced={reduced} />
          <motion.g key={replay} initial={reduced ? false : { opacity: 0.75, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduced ? 0 : 0.6 }} style={{ transformOrigin: '200px 180px' }}>
            <Art active={active} color={color} reduced={reduced} uid={id} />
          </motion.g>
        </svg>
        <span className={styles.caption}>CONCEPTUAL VIEW · {String(active + 1).padStart(2, '0')} / 03</span>
      </div>
      <h2>{scene.title}</h2>
      <div className={styles.choices} aria-label="Explore illustration views">
        {scene.views.map((view, index) => (
          <button type="button" key={view} aria-pressed={active === index} onClick={() => setActive(index)}>
            {view}
          </button>
        ))}
      </div>
      <p className={styles.note} aria-live="polite">{scene.notes[active]}</p>
      <a className={styles.next} href="#first-appointment">
        Explore your first visit <ArrowUpRight size={16} />
      </a>
    </div>
  );
}
