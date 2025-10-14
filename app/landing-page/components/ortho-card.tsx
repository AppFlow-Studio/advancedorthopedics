import * as React from "react"
import { cn } from "@/lib/utils"

const OrthoCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-warm-gray-200 bg-pure-white shadow-md hover:shadow-lg transition-all duration-200 ease-gentle",
        className,
      )}
      {...props}
    />
  ),
)
OrthoCard.displayName = "OrthoCard"

const OrthoCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
)
OrthoCardHeader.displayName = "OrthoCardHeader"

const OrthoCardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("font-serif text-xl font-semibold text-trust-navy-900 leading-none tracking-tight", className)}
      {...props}
    />
  ),
)
OrthoCardTitle.displayName = "OrthoCardTitle"

const OrthoCardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm text-warm-gray-600 leading-relaxed", className)} {...props} />
  ),
)
OrthoCardDescription.displayName = "OrthoCardDescription"

const OrthoCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
)
OrthoCardContent.displayName = "OrthoCardContent"

const OrthoCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
)
OrthoCardFooter.displayName = "OrthoCardFooter"

export { OrthoCard, OrthoCardHeader, OrthoCardFooter, OrthoCardTitle, OrthoCardDescription, OrthoCardContent }
