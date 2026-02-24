'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { ClinicsProps } from '@/components/data/clinics';
import StateLocationCard from '@/components/StateLocationCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

interface StateLocationsGridDesktopProps {
  stateClinics: ClinicsProps[];
  stateInfo: { name?: string } | undefined;
}

/**
 * Desktop locations grid. Owns hover state so that hovering cards does not
 * re-render the parent page and retrigger the hero header animation.
 */
export default function StateLocationsGridDesktop({
  stateClinics,
  stateInfo,
}: StateLocationsGridDesktopProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
    >
      {stateClinics.map((clinic, index) => (
        <StateLocationCard
          key={index}
          clinic={clinic}
          index={index}
          isMobile={false}
          stateInfo={stateInfo}
          hoveredIndex={hoveredIndex}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        />
      ))}
    </motion.div>
  );
}
