'use client'
import React, { useId, useState } from 'react'
import { Minus, Plus } from "lucide-react"

/**
 * Accordion FAQ list.
 *
 * The answers are ALWAYS mounted. They used to be rendered inside
 * `{openItem === index && (...)}` within an `AnimatePresence`, which meant a
 * collapsed answer did not exist in the document at all — it was created on
 * click. With `openItem` defaulting to 0, the server-rendered HTML carried every
 * question but only the first answer.
 *
 * That broke two things at once on the /find-care/[specialistSlug] pages:
 * the answers were absent from the prerendered HTML a crawler reads, and the
 * page emitted FAQPage JSON-LD whose `acceptedAnswer` text appeared nowhere in
 * the rendered document — structured data asserting content the page did not
 * show.
 *
 * Now the answer is always in the DOM and only its height animates, so the
 * collapse is presentational. Keep it that way: gate visibility, never mounting.
 */
export default function FAQsSection({ header, faqItems }: { header: React.ReactElement, faqItems: { question: string, answer: React.ReactElement }[] }) {
    const [openItem, setOpenItem] = useState<number>(0)
    const baseId = useId()

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? -1 : index)
    }


    return (
        <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
            <section className="max-w-[1440px] w-full h-full flex flex-col relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_6rem)] space-y-[60px] px-6 xl:px-[100px] py-[50px]">
                <h2
                    style={{
                        fontFamily: 'var(--font-public-sans)',
                        fontWeight: 500,
                    }}
                    className=' text-black sm:text-6xl text-4xl text-center w-[90%] self-center'
                >{header}</h2>

                <div className="space-y-[20px] flex flex-col">
                    {faqItems.map((item, index) => {
                        const isOpen = openItem === index
                        const panelId = `${baseId}-faq-panel-${index}`
                        const buttonId = `${baseId}-faq-button-${index}`
                        return (
                            <div
                                key={index}
                                className={`border border-[#DCDEE1] rounded-[20px] overflow-hidden bg-[#FAFAFA] ${isOpen ? "shadow-md" : ""}`}
                            >
                                <button
                                    id={buttonId}
                                    type="button"
                                    onClick={() => toggleItem(index)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                >
                                    <h3
                                        style={{
                                            fontFamily: 'var(--font-public-sans)',
                                            fontWeight: 500,
                                        }}
                                        className={`${isOpen ? 'text-black' : 'text-[#424959]'} text-2xl`}
                                    >{item.question}</h3>
                                    <div>
                                        {isOpen ? (
                                            <Minus className="h-5 w-5 text-black" />
                                        ) : (
                                            <Plus className="h-5 w-5 text-[#838890]" />
                                        )}
                                    </div>
                                </button>

                                {/* Always rendered; the collapse is pure CSS.
                                    The grid 1fr/0fr technique animates to the
                                    content's real height without measuring it,
                                    and renders collapsed server-side so nothing
                                    flashes open before hydration. */}
                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    className={`grid overflow-hidden text-[#54535C] transition-opacity duration-300 ease-in-out ${
                                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="min-h-0 overflow-hidden">
                                        <div className="px-6 pb-6 text-gray-600"
                                            style={{
                                                fontFamily: 'var(--font-inter)',
                                                fontWeight: 400,
                                            }}

                                        >{item.answer}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}
