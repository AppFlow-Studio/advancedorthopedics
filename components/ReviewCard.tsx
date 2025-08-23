"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, MessageSquareQuote } from "lucide-react"
export interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string
    role: string
    company?: string
    testimonial: string
    image?: string
    companyLogo?: string // New prop for the small logo on the avatar
}

const ReviewCard = React.forwardRef<HTMLDivElement, ReviewCardProps>(
    ({ name, role, company, testimonial, image, companyLogo, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative overflow-hidden rounded-2xl border border-primary/10 bg-background p-6 transition-all hover:shadow-lg dark:hover:shadow-primary/5 md:p-8 h-full flex flex-col",
                    className
                )}
                {...props}
            >
                <div className="absolute right-6 top-6 text-6xl font-serif">
                    <MessageSquareQuote className="text-muted-foreground/20 h-14 w-14" />
                </div>

                <div className="flex h-full flex-col gap-y-5 flex-grow">
                    {/* Author information at the top */}
                    <div className="flex items-center gap-4">
                        <div className="relative inline-block">
                            {image && (
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={image} alt={name} />
                                    <AvatarFallback>{name[0]}</AvatarFallback>
                                </Avatar>
                            )}
                            {companyLogo && (
                                <img
                                    src={companyLogo}
                                    alt={company ? `${company} logo` : "Company logo"}
                                    className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-background"
                                />
                            )}
                        </div>

                        <div className="flex flex-col">
                            <h3 className="font-semibold text-foreground">{name}</h3>
                            <p className="text-sm text-muted-foreground">
                                {role}
                                {company && ` at ${company}`}
                            </p>
                        </div>
                    </div>

                    {/* Testimonial text below author info */}
                    <p className="text-pretty text-base text-foreground flex-grow">
                        {testimonial}
                    </p>
                </div>
            </div>
        )
    }
)
ReviewCard.displayName = "ReviewCard"

export { ReviewCard }