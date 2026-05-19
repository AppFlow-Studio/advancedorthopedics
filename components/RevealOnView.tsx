"use client";

import { useEffect, useRef } from "react";

let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.revealVisible = "true";
          sharedObserver?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
  );
  return sharedObserver;
}

interface RevealOnViewProps {
  direction?: "up" | "left" | "right";
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function RevealOnView({
  direction = "up",
  className,
  style,
  children,
}: RevealOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      node.dataset.revealVisible = "true";
      return;
    }
    const obs = getObserver();
    obs?.observe(node);
    return () => obs?.unobserve(node);
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={direction}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}
