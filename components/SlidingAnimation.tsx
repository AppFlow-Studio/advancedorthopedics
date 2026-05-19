"use client";

import React from "react";
import RevealOnView from "./RevealOnView";

interface SlidingDivProps {
  className?: string;
  position: "left" | "right";
  children: React.ReactNode;
}

export default function SlidingDiv({
  position,
  className = "",
  children,
}: SlidingDivProps) {
  return (
    <RevealOnView direction={position} className={className}>
      <div className="w-full">{children}</div>
    </RevealOnView>
  );
}
