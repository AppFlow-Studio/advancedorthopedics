"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

/**
 * `forceMount` keeps the answer in the server-rendered HTML so crawlers — and
 * any FAQPage JSON-LD the page emits — see content that actually exists in the
 * document. Radix unmounts collapsed content by default, which left 70 FAQ
 * answers across the injury and location pages asserted in schema but absent
 * from the page.
 *
 * It needs its own collapsed style. The default closed state is
 * `animate-accordion-up`, an animation that ends at height 0 and then reverts,
 * which is fine while Radix unmounts the node but leaves a force-mounted panel
 * permanently expanded. `data-[state=closed]:h-0` is a persistent style rather
 * than an animation, so it holds. Verified in-browser: without it all ten
 * panels rendered at full height.
 *
 * Non-force-mounted usages (NavBar, SidebarNavItem, …) keep the original
 * animated behaviour untouched.
 */
function AccordionContent({
  className,
  children,
  forceMount,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      forceMount={forceMount}
      className={cn(
        "overflow-hidden text-sm",
        forceMount
          ? "data-[state=closed]:h-0"
          : "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      )}
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
