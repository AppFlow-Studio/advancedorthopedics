"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

interface HeroContactFormIdleProps {
  backgroundcolor: string;
  header?: string;
  buttonText?: string;
  timePeriod?: string;
  defaultState?: string;
}

const DoctorContactForm = dynamic(
  () =>
    import("./DoctorContactForm").then((m) => ({
      default: m.DoctorContactForm,
    })),
  {
    ssr: false,
    loading: () => <FormSkeleton />,
  }
);

function FormSkeleton({ header }: { header?: string }) {
  return (
    <div
      className="relative w-full p-4 rounded-3xl overflow-hidden"
      aria-hidden="true"
      data-hero-form-skeleton
    >
      <div
        className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden"
        style={{
          filter: "drop-shadow(-8px -10px 46px #0000005f)",
          backdropFilter: "brightness(1.1) blur(2px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            boxShadow:
              "inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)",
          }}
        />
      </div>
      <div className="relative z-10 sm:space-y-6 space-y-4">
        {header ? (
          <div className="h-7 w-48 rounded bg-white/40 animate-pulse" />
        ) : null}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-2">
            <div className="h-3 w-20 rounded bg-white/30 animate-pulse" />
            <div className="sm:h-12 h-10 rounded bg-[#FAFAFA]/70 animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-20 rounded bg-white/30 animate-pulse" />
            <div className="sm:h-12 h-10 rounded bg-[#FAFAFA]/70 animate-pulse" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-3 w-16 rounded bg-white/30 animate-pulse" />
          <div className="sm:h-12 h-10 rounded bg-[#FAFAFA]/70 animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-24 rounded bg-white/30 animate-pulse" />
          <div className="sm:h-12 h-10 rounded bg-[#FAFAFA]/70 animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="h-3 w-28 rounded bg-white/30 animate-pulse" />
            <div className="sm:h-12 h-10 rounded bg-[#FAFAFA]/70 animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-12 rounded bg-white/30 animate-pulse" />
            <div className="sm:h-12 h-10 rounded bg-[#f0f5ff]/70 animate-pulse" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-3 w-32 rounded bg-white/30 animate-pulse" />
          <div className="sm:h-12 h-10 rounded bg-[#f0f5ff]/70 animate-pulse" />
        </div>
        <div className="sm:h-14 h-12 rounded-full bg-[#0A50EC]/50 animate-pulse" />
      </div>
    </div>
  );
}

export default function HeroContactFormIdle(props: HeroContactFormIdleProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    type IdleWindow = Window & {
      requestIdleCallback?: (
        cb: () => void,
        opts?: { timeout?: number }
      ) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const w = window as IdleWindow;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;

    if (typeof w.requestIdleCallback === "function") {
      idleId = w.requestIdleCallback(() => setReady(true), { timeout: 3000 });
    } else {
      timeoutId = setTimeout(() => setReady(true), 1500);
    }

    return () => {
      if (idleId !== undefined && typeof w.cancelIdleCallback === "function") {
        w.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  if (!ready) {
    return <FormSkeleton header={props.header} />;
  }

  return <DoctorContactForm {...props} />;
}
