"use client";

import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import RevealOnView from "./RevealOnView";

export default function Reveal({
  children,
  width = "fit-content",
  className,
}: {
  children: ReactElement;
  width: "fit-content" | "100%";
  className: string | undefined;
}) {
  return (
    <RevealOnView
      direction="up"
      className={cn("bg-transparent relative overflow-hidden", className)}
      style={width === "100%" ? { width: "100%" } : undefined}
    >
      {children}
    </RevealOnView>
  );
}
