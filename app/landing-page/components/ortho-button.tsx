import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const orthoButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-medical-blue-600 text-pure-white shadow hover:bg-medical-blue-700 active:bg-medical-blue-800 transition-all ease-confident",
        secondary:
          "bg-healing-green-500 text-pure-white shadow hover:bg-healing-green-600 active:bg-healing-green-700 transition-all ease-confident",
        outline:
          "border border-medical-blue-600 text-medical-blue-600 bg-transparent hover:bg-medical-blue-50 active:bg-medical-blue-100 transition-all ease-gentle",
        ghost:
          "text-warm-gray-700 hover:bg-warm-gray-100 hover:text-warm-gray-900 active:bg-warm-gray-200 transition-all ease-gentle",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-6 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

export interface OrthoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof orthoButtonVariants> {
  asChild?: boolean
}

const OrthoButton = React.forwardRef<HTMLButtonElement, OrthoButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(orthoButtonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
OrthoButton.displayName = "OrthoButton"

export { OrthoButton, orthoButtonVariants }
