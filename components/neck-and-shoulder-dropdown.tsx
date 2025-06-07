"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ConditionInfoProp } from "./ConditionCard"
import { conditions } from "./data/conditions"

const backPainOptions: ConditionInfoProp[] = conditions.filter(x => x.title == 'Cervical Spinal Stenosis' || x.title == 'Cervical Herniated Disc' || x.title == 'Degenerative Disc Disease' || x.title == 'Arthritis' || x.title == 'Pinched Nerve' )

export function NeckAndShoulderDropDown({CurrentCondition} : { CurrentCondition : string }) {
  const [isOpen, setIsOpen] = useState(true)
  const [selectedOption, setSelectedOption] = useState<string | null>("treatments")
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [isOpen])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (optionId: string) => {
    setSelectedOption(optionId)
    // You can add navigation logic here if needed
  }

  return (
    <div className="w-full max-w-md">
      <button
        onClick={toggleDropdown}
        className="flex w-full items-center justify-between rounded-md bg-[#022968] px-6 py-3 text-white hover:cursor-pointer"
      >
        <span 
        style={{
            fontFamily: "var(--font-reem-kufi)",
            fontWeight: 400,
        }}
        className="text-white text-md"
        >Neck & Shoulder Pain</span>
        <div className={`transition-transform duration-300 self-center flex ${isOpen ? "-rotate-90" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
             <path d="M1.60384 0.55723C1.72573 0.718604 2.08964 1.20035 2.30637 1.47806C2.74044 2.03427 3.33355 2.77336 3.97336 3.51025C4.6164 4.25087 5.29191 4.97216 5.89202 5.50241C6.19293 5.76829 6.45727 5.97032 6.6754 6.10182C6.88055 6.22549 7.00174 6.25121 7.00174 6.25121C7.00174 6.25121 7.11936 6.22549 7.3245 6.10182C7.54263 5.97032 7.80697 5.76829 8.10788 5.50241C8.70799 4.97217 9.3835 4.25087 10.0265 3.51024C10.6663 2.77334 11.2595 2.03424 11.6935 1.47802C11.9103 1.20031 12.2737 0.719248 12.3955 0.557872C12.6412 0.224349 13.1112 0.152413 13.4447 0.398046C13.7782 0.643678 13.8495 1.11318 13.6038 1.4467L13.6019 1.44924C13.4741 1.6185 13.0972 2.11751 12.8761 2.40086C12.4322 2.96965 11.8217 3.73055 11.1592 4.49365C10.4999 5.25303 9.77421 6.03173 9.10109 6.62649C8.76539 6.9231 8.42509 7.18982 8.09893 7.38645C7.79335 7.57066 7.40646 7.75195 6.99995 7.75194C6.59344 7.75194 6.20655 7.57066 5.90097 7.38644C5.57481 7.18982 5.23452 6.9231 4.89882 6.62648C4.2257 6.03173 3.50003 5.25304 2.84071 4.49367C2.17816 3.73058 1.56773 2.96968 1.12385 2.40091C0.90256 2.11735 0.525635 1.61832 0.398058 1.44941L0.396408 1.44723C0.150773 1.11371 0.221669 0.643732 0.55519 0.398097C0.8887 0.152471 1.3582 0.223736 1.60384 0.55723Z" fill="#5B5F67"/>
            </svg>
        </div>
      </button>

      <div
       className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out origin-top",
        isOpen ? "max-h-[500px] opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0",
      )}
      >
        <div ref={contentRef} className="rounded-md space-y-[20px] mt-[20px]">
          {backPainOptions.map((option) => (
             <Link href={`/area-of-pain/neck-and-shoulder-pain/${option.slug}`} className={`${CurrentCondition == option.title ? 'bg-[#EFF5FF]' : 'bg-[#FAFAFA]'} p-[16px] w-full flex flex-row justify-between items-center rounded-[10px]`} key={option.title}>
                <h1
                style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 400,
                }}  
                className=' text-[#111315] text-lg '
                >{option.title}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M0.55723 12.3964C0.718604 12.2745 1.20035 11.9106 1.47806 11.6939C2.03427 11.2598 2.77336 10.6667 3.51025 10.0269C4.25087 9.38385 4.97216 8.70833 5.50241 8.10822C5.76829 7.80731 5.97032 7.54297 6.10182 7.32484C6.22549 7.11969 6.25121 6.99851 6.25121 6.99851C6.25121 6.99851 6.22549 6.88088 6.10182 6.67574C5.97032 6.45761 5.76829 6.19328 5.50241 5.89236C4.97217 5.29225 4.25087 4.61674 3.51024 3.9737C2.77334 3.3339 2.03424 2.74079 1.47802 2.30671C1.20031 2.08998 0.719248 1.72658 0.557872 1.6047C0.224349 1.35906 0.152413 0.889059 0.398046 0.555536C0.643678 0.222013 1.11318 0.150764 1.4467 0.396397L1.44924 0.398315C1.6185 0.526155 2.11751 0.903056 2.40086 1.12419C2.96965 1.56806 3.73055 2.17849 4.49365 2.84105C5.25303 3.50037 6.03173 4.22604 6.62649 4.89916C6.9231 5.23486 7.18982 5.57515 7.38645 5.90131C7.57066 6.20689 7.75195 6.59379 7.75194 7.0003C7.75194 7.40681 7.57066 7.7937 7.38644 8.09927C7.18982 8.42544 6.9231 8.76573 6.62648 9.10143C6.03173 9.77454 5.25304 10.5002 4.49367 11.1595C3.73058 11.8221 2.96968 12.4325 2.40091 12.8764C2.11735 13.0977 1.61832 13.4746 1.44941 13.6022L1.44723 13.6038C1.11371 13.8495 0.643732 13.7786 0.398097 13.4451C0.152471 13.1115 0.223736 12.642 0.55723 12.3964Z" fill="#5B5F67"/>
                </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
