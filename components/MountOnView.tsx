"use client";

import { useEffect, useRef, useState } from "react";

interface MountOnViewProps {
  rootMargin?: string;
  threshold?: number;
  fallback?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export default function MountOnView({
  rootMargin = "200px",
  threshold = 0,
  fallback = null,
  className,
  children,
}: MountOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          obs.disconnect();
        }
      },
      { rootMargin, threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={ref} className={className}>
      {show ? children : fallback}
    </div>
  );
}
