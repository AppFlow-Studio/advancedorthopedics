import type React from "react"

interface HealingArcProps {
  className?: string
  size?: "sm" | "md" | "lg"
  animated?: boolean
}

export const HealingArc: React.FC<HealingArcProps> = ({ className = "", size = "md", animated = false }) => {
  const sizeMap = {
    sm: { width: 24, height: 24, strokeWidth: 2 },
    md: { width: 32, height: 32, strokeWidth: 2.5 },
    lg: { width: 48, height: 48, strokeWidth: 3 },
  }

  const { width, height, strokeWidth } = sizeMap[size]

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animated ? "animate-pulse" : ""}`}
      role="img"
      aria-label="Healing arc symbol representing recovery and progress"
    >
      <path
        d="M8 24C8 17.3726 13.3726 12 20 12C26.6274 12 32 17.3726 32 24"
        stroke="url(#healingGradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M12 20C12 16.6863 14.6863 14 18 14C21.3137 14 24 16.6863 24 20"
        stroke="url(#healingGradient)"
        strokeWidth={strokeWidth - 0.5}
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <defs>
        <linearGradient id="healingGradient" x1="8" y1="12" x2="32" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--medical-blue-500)" />
          <stop offset="100%" stopColor="var(--healing-green-500)" />
        </linearGradient>
      </defs>
    </svg>
  )
}
