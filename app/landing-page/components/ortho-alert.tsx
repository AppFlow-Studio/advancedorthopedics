import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

const orthoAlertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        info: "border-medical-blue-200 bg-medical-blue-50 text-medical-blue-800 [&>svg]:text-medical-blue-600",
        success: "border-healing-green-200 bg-healing-green-50 text-healing-green-800 [&>svg]:text-healing-green-600",
        warning: "border-yellow-200 bg-yellow-50 text-yellow-800 [&>svg]:text-yellow-600",
        error: "border-destructive/50 bg-destructive/10 text-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
)

const iconMap = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
}

export interface OrthoAlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof orthoAlertVariants> {
  title?: string
}

const OrthoAlert = React.forwardRef<HTMLDivElement, OrthoAlertProps>(
  ({ className, variant = "info", title, children, ...props }, ref) => {
    const Icon = iconMap[variant]

    return (
      <div ref={ref} role="alert" className={cn(orthoAlertVariants({ variant }), className)} {...props}>
        <Icon className="h-4 w-4" />
        <div>
          {title && <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>}
          <div className="text-sm [&_p]:leading-relaxed">{children}</div>
        </div>
      </div>
    )
  },
)
OrthoAlert.displayName = "OrthoAlert"

export { OrthoAlert, orthoAlertVariants }
