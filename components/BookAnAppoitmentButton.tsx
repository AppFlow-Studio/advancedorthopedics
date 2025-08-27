'use client'
import React from 'react'
import { ConsultationForm } from './ContactForm'
import { DoctorContactForm } from './DoctorContactForm'
import BookAnAppointmentPopup from './BookAnAppointmentPopup'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { format, set } from "date-fns"
import { CalendarIcon, ChevronDown, Clock, User, Mail, Phone } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"
import { useState } from "react"
import BookAnAppointmentClient from "./BookAnAppointmentClient"
import { sendContactEmail, sendUserEmail } from './email/sendcontactemail'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const formSchema = z.object({
    name: z.string().min(2, "name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    reason: z.string().min(2),
    bestTime: z.string().min(1, "Please provide more detail about your consultation needs")
})
const TIME_SLOTS = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
]
const services = [
    { id: "service1", name: "Service 1" },
    { id: "service2", name: "Service 2" },
    { id: "service3", name: "Service 3" },
    { id: "service4", name: "Service 4" },
]
export default function BookAnAppoitmentButton({
    bordered = false
}: {
    bordered?: boolean
}) {
    const [open, setOpen] = React.useState(false)
    const [openAppointmentConfirm, setAppointmentConfirm] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            reason: "",
            bestTime: ""
        },
    })

    const handleOpen = () => {
        if (typeof window !== "undefined" && window.dataLayer) {
            window.dataLayer.push({
                event: 'booking_click',
                button_location: 'BookAnAppoitmentButton'
            });
        }
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }


    async function onSubmit(values: z.infer<typeof formSchema>) {
        setDisabled(true)
        console.log('Called')
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        const data = await sendContactEmail(values)
        await sendUserEmail(values)
        if (typeof window !== "undefined" && window.dataLayer) {
            window.dataLayer.push({
                event: 'form_submit',
                form_name: 'BookAnAppoitmentButton',
                ...values
            });
        }
        if (data) {
            setOpen(false)
            //setAppointmentConfirm(true) 
            form.reset()
            redirect('/thank-you')
            setDisabled(false)
        }
    }
    return (
        <>
            <Dialog open={open} onOpenChange={() => setOpen(!open)} >
                <DialogTrigger asChild>
                    <button
                        type="button"
                        onClick={handleOpen}
                        className={`max-h-[56px] group h-full px-[32px] py-[16px] hover:bg-[#252932] rounded-[62px] relative flex ${bordered ? 'bg-transparent border border-[#0A50EC] text-[#0A50EC]' : 'bg-[#0A50EC] text-white'} text-[14px] font-semibold w-full justify-center items-center hover:cursor-pointer`}
                    >
                        <div className='pr-[10px] group-hover:scale-[1.2] transition-all duration-300 ease-in-out'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6 1C6 0.447715 5.55229 0 5 0C4.44772 0 4 0.447715 4 1V1.44885C3.23882 1.6903 2.57734 2.06994 2.01802 2.6746C1.18949 3.57031 0.83279 4.69272 0.664161 6.04866C0.499967 7.36894 0.499982 9.05406 0.5 11.1739V11.1739V11.8261V11.8261C0.499982 13.9459 0.499967 15.6311 0.664161 16.9513C0.83279 18.3073 1.18949 19.4297 2.01802 20.3254C2.8568 21.2322 3.92535 21.6329 5.21533 21.8204C6.45141 22.0001 8.02291 22 9.97119 22H9.97121H9.97122H12.0288H12.0288H12.0288C13.9771 22 15.5486 22.0001 16.7847 21.8204C18.0747 21.6329 19.1432 21.2322 19.982 20.3254C20.8105 19.4297 21.1672 18.3073 21.3358 16.9513C21.5 15.6311 21.5 13.9459 21.5 11.8261V11.1739C21.5 9.05408 21.5 7.36895 21.3358 6.04866C21.1672 4.69272 20.8105 3.57031 19.982 2.6746C19.4227 2.06993 18.7612 1.6903 18 1.44885V1C18 0.447715 17.5523 0 17 0C16.4477 0 16 0.447715 16 1V1.09173C14.903 0.999955 13.5863 0.999976 12.0288 1H12.0288H9.97122H9.97121C8.41374 0.999976 7.09704 0.999955 6 1.09173V1ZM3.49783 8C3.03921 8 2.8099 8 2.66385 8.14417C2.51781 8.28833 2.51487 8.51472 2.509 8.96751C2.50027 9.64067 2.5 10.3942 2.5 11.2432V11.7568C2.5 13.9616 2.50182 15.5221 2.64887 16.7045C2.79327 17.8656 3.06263 18.5094 3.48622 18.9673C3.89956 19.4142 4.4647 19.6903 5.503 19.8412C6.57858 19.9975 8.00425 20 10.05 20H11.95C13.9957 20 15.4214 19.9975 16.497 19.8412C17.5353 19.6903 18.1004 19.4142 18.5138 18.9673C18.9374 18.5094 19.2067 17.8656 19.3511 16.7045C19.4982 15.5221 19.5 13.9616 19.5 11.7568V11.2432C19.5 10.3942 19.4997 9.64067 19.491 8.96751C19.4851 8.51472 19.4822 8.28833 19.3362 8.14417C19.1901 8 18.9608 8 18.5022 8H3.49783ZM12 11C12 10.4477 11.5523 10 11 10C10.4477 10 10 10.4477 10 11V13H8C7.44772 13 7 13.4477 7 14C7 14.5523 7.44772 15 8 15H10V17C10 17.5523 10.4477 18 11 18C11.5523 18 12 17.5523 12 17V15H14C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13H12V11Z" fill={`${bordered ? '#0A50EC' : '#FAFAFA'}`} />
                            </svg>
                        </div>
                        <p
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 500, fontSize: "16px",
                                lineHeight: "24px",
                                letterSpacing: "0.02em"
                            }}
                            className='group-hover:translate-x-1 transition-all duration-300 ease-in-out'
                        >Book an Appointment</p>
                    </button>
                </DialogTrigger>

                <DialogContent className=' md:h-fit overflow-y-scroll h-[60%] p-0 bg-transparent border-0 rounded-3xl'>
                    <div className='relative w-full h-full p-6 overflow-hidden'>
                        {/* SVG Filter Definition */}
                        <svg style={{ display: 'none' }}>
                            <filter id="displacementFilter">
                                <feTurbulence
                                    type="turbulence"
                                    baseFrequency="0.01"
                                    numOctaves="2"
                                    result="turbulence"
                                />
                                <feDisplacementMap
                                    in="SourceGraphic"
                                    in2="turbulence"
                                    scale="200"
                                    xChannelSelector="R"
                                    yChannelSelector="G"
                                />
                            </filter>
                        </svg>

                        {/* Liquid Glass Background */}
                        <div
                            className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden"
                            style={{
                                filter: 'drop-shadow(-8px -10px 46px #0000005f)',
                                backdropFilter: 'brightness(1.1) blur(2px)',

                                border: '1px solid rgba(255, 255, 255, 0.2)',
                            }}
                        >
                            <div
                                className="absolute inset-0 rounded-3xl"
                                style={{
                                    boxShadow: 'inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)',
                                }}
                            />
                        </div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full relative">
                                {/* Name Fields */}
                                <div className="grid grid-cols-1  gap-6">
                                    <FormField
                                        control={form.control}
                                        name="name"

                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm text-[white] font-semibold ">Full Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Name" startIcon={User} className="h-12 text-lg border-[#DCDEE1]  bg-[#FAFAFA]" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>

                                {/* Contact Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    <span
                                                        style={{
                                                            fontFamily: 'var(--font-public-sans)',
                                                            fontWeight: 500,
                                                        }}
                                                        className='text-[white] text-md'
                                                    >
                                                        Email Address
                                                    </span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter your email" startIcon={Mail} className="h-12 text-lg border-[#DCDEE1]  bg-[#FAFAFA]" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    <span
                                                        style={{
                                                            fontFamily: 'var(--font-public-sans)',
                                                            fontWeight: 500,
                                                        }}
                                                        className='text-[white] text-md'
                                                    >
                                                        Phone Number
                                                    </span>

                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="+1 0123456789" startIcon={Phone} className="h-12 text-lg  border-[#DCDEE1] bg-[#FAFAFA]" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="bestTime"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                <span
                                                    style={{
                                                        fontFamily: 'var(--font-public-sans)',
                                                        fontWeight: 500,
                                                    }}
                                                    className='text-[white] text-md'
                                                >
                                                    Best Time To Contact
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} value={field.value} >
                                                    <SelectTrigger
                                                        className="w-full h-12 px-6 bg-[#f0f5ff]  border rounded-sm"
                                                    >
                                                        <SelectValue placeholder="Select Best Time To Contact" className=" font-[var(--font-inter)] h-12 text-lg data-[placeholder]:text-red-500" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            {["As Soon As Possible", "Morning", "Afternoon", "Evening"].map((service) => (
                                                                <SelectItem key={service} value={service}>
                                                                    {service}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                {/* Reason Field */}
                                <FormField
                                    control={form.control}
                                    name="reason"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm text-[white] font-semibold">Consultation Reason</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Consultation Reason" className="min-h-[200px] text-lg resize-none  border-[#DCDEE1]  bg-[#FAFAFA]" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <button
                                    type="submit"
                                    className={`w-full self-center flex items-center justify-center transition-all duration-300`}
                                    disabled={disabled}
                                >
                                    {disabled ? (
                                        <div className="max-h-[56px] group h-full px-[32px] py-[16px] hover:bg-[#252932] rounded-[62px] relative flex bg-[#0A50EC] text-white text-[14px] font-semibold w-full justify-center items-center hover:cursor-not-allowed">
                                            <span className="text-white">Sending...</span>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                        </div>
                                    ) : (
                                        <BookAnAppointmentClient />
                                    )}
                                </button>

                                <div className='relative z-10'>
                                    <p
                                        style={{
                                            fontFamily: 'var(--font-public-sans)',
                                            fontWeight: 500,
                                        }}
                                        className='text-[white] text-md'
                                    >By submitting, you agree to our <Link href="/privacy-policy" className="text-[#2358AC] underline">privacy policy and disclaimer.</Link> Someone from our team may contact you via phone, email and/or text.</p>
                                </div>
                            </form>
                        </Form>
                    </div>
                </DialogContent>
            </Dialog>
            <Dialog open={openAppointmentConfirm} onOpenChange={() => setAppointmentConfirm(!openAppointmentConfirm)} >
                <DialogContent className=" rounded-[20px] p-[32px]" >
                    <DialogTitle>

                    </DialogTitle>
                    <div className="bg-white flex flex-col space-y-[20px] items-center justify-center">
                        <div className=" relative h-[100px] self-center flex w-full">

                            <motion.div className="z-1 relative justify-center items-center flex w-full"
                                animate={{
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108" fill="none">
                                    <circle opacity="0.1" cx="54" cy="54" r="54" fill="#4CC2FF" />
                                </svg>
                                <motion.div className=" absolute top-1.5 z-2"
                                    animate={{
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86" fill="none">
                                        <circle opacity="0.2" cx="43" cy="43" r="43" fill="#4CC2FF" />
                                    </svg>
                                </motion.div>
                                <motion.div className=" absolute top-4.5 z-3 "
                                    animate={{
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                        <circle cx="32" cy="32" r="32" fill="#4CC2FF" />
                                    </svg>
                                </motion.div>
                                <motion.div className="absolute top-9.5 z-4"
                                    animate={{
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.1194 0.95737C11.4704 0.416553 10.5277 0.416554 9.87875 0.957371L7.72754 2.75005L4.49907 2.75005C3.53258 2.75005 2.74908 3.53355 2.74907 4.50005L2.74907 7.72851L0.956394 9.87973C0.415578 10.5287 0.415577 11.4714 0.956394 12.1204L2.74907 14.2716L2.74908 17.5001C2.74908 18.4666 3.53258 19.2501 4.49908 19.2501L7.72754 19.25L9.87875 21.0427C10.5277 21.5835 11.4704 21.5835 12.1194 21.0427L14.2706 19.25H17.4991C18.4656 19.25 19.2491 18.4665 19.2491 17.5L19.2491 14.2716L21.0417 12.1204C21.5826 11.4714 21.5826 10.5287 21.0418 9.87973L19.2491 7.72851L19.2491 4.50005C19.2491 3.53355 18.4656 2.75005 17.4991 2.75005L14.2706 2.75005L12.1194 0.95737ZM14.4611 9.38694C14.9509 9.13182 15.1412 8.52792 14.8861 8.03809C14.6309 7.54826 14.027 7.35799 13.5372 7.61311C12.1092 8.35684 10.9442 9.7806 10.1744 10.9032C10.1078 11.0004 10.0434 11.0964 9.98137 11.1907C9.84153 11.4033 9.71366 11.6073 9.59878 11.7971C9.51302 11.7245 9.42957 11.6575 9.35034 11.5963C9.32499 11.5767 9.30008 11.5577 9.27566 11.5393C9.06035 11.3772 8.86673 11.2494 8.72532 11.1612C8.65433 11.1169 8.59572 11.0821 8.55316 11.0575C8.53187 11.0451 8.51453 11.0353 8.50161 11.0281L8.48557 11.0191L8.48012 11.0161L8.47806 11.015L8.47644 11.0141C7.99113 10.7505 7.38401 10.9303 7.1204 11.4156C6.85685 11.9008 7.03677 12.5079 7.52183 12.7716L7.52391 12.7728L7.55058 12.788C7.576 12.8028 7.61582 12.8263 7.6667 12.8581C7.76905 12.9219 7.91292 13.0168 8.07261 13.1371C8.40619 13.3882 8.74611 13.7036 8.9523 14.0319C9.14601 14.3403 9.4921 14.519 9.85574 14.4984C10.2193 14.4778 10.543 14.2609 10.7007 13.9328L10.7032 13.9276L10.7159 13.9018C10.7276 13.878 10.746 13.8413 10.7707 13.7932C10.8202 13.6969 10.8947 13.5553 10.992 13.3804C11.187 13.0294 11.4706 12.5494 11.8239 12.0343C12.5541 10.9694 13.489 9.89321 14.4611 9.38694Z" fill="#FAFAFA" />
                                    </svg>
                                </motion.div>
                            </motion.div>

                        </div>

                        <div className=" flex flex-col space-y-[10px] items-center justify-center">
                            <h3
                                style={{
                                    fontFamily: 'var(--font-public-sans)',
                                    fontWeight: 500,
                                }}
                                className='text-[black] text-2xl'
                            >
                                Your Appointment Request Is Confirmed
                            </h3>
                            <p
                                style={{
                                    fontFamily: 'var(--font-public-sans)',
                                    fontWeight: 500,
                                }}
                                className='text-[#838890] text-md text-center'
                            >
                                You're one step closer to a pain-free life!<br />
                                Please check your email for details. Our team will contact you shortly.<br />
                                Thank you for choosing Mountain Spine & Orthopedic Center!
                            </p>
                        </div>
                        <div
                            onClick={() => {
                                setOpen(false)
                                setAppointmentConfirm(false)
                            }}
                            className=" max-h-[56px] h-full px-[32px] py-[16px] rounded-[62px] relative flex bg-[#0A50EC] text-white text-[14px] font-semibold w-full justify-center items-center hover:cursor-pointer"
                        >
                            <span
                                style={{
                                    fontFamily: "var(--font-public-sans)",
                                    fontWeight: 500, fontSize: "16px",
                                    lineHeight: "24px",
                                    letterSpacing: "0.02em"
                                }}
                            >Done</span>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
