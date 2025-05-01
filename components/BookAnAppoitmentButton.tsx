'use client'
import React from 'react'
import { ConsultationForm } from './ContactForm'
import { DoctorContactForm } from './DoctorContactForm'
import BookAnAppointmentPopup from './BookAnAppointmentPopup'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { format, set } from "date-fns"
import { CalendarIcon, ChevronDown, Clock } from "lucide-react"

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

const formSchema = z.object({
  name: z.string().min(2, "name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  bestTime: z.string().min(1, "Please select a time"),
  date: z.date({
    required_error: "Please select a date",
  }),
  reason: z.string().min(0),
  selectService : z.string(),
  gender: z.string(),
  appointmentTime : z.string()
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
export default function BookAnAppoitmentButton() {
  const [open, setOpen] = React.useState(false)
    const [ openAppointmentConfirm, setAppointmentConfirm ] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
      name: "",
      email: "",
      phone: "",
      bestTime: "",
      reason: "",
      gender : "",
      selectService : "",
      appointmentTime : ""
      },
    })
    
  const handleOpen = () => {  
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleSubmit = async (data: any) => {
    const res = await fetch('/api/consultation', {  
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!res.ok) {
      throw new Error('Failed to send message')
    }
    const result = await res.json()
    console.log(result)
    setOpen(false)
  }
  return (
      <Dialog open={open} onOpenChange={() => setOpen(!open)} >
        <DialogTitle onClick={handleOpen} className='max-h-[56px] group h-full px-[32px] py-[16px] hover:bg-[#022968] rounded-[62px] relative flex bg-[#0094E0] text-white text-[14px] font-semibold w-full justify-center items-center hover:cursor-pointer'>
        <div className='pr-[10px] group-hover:scale-[1.2] transition-all duration-300 ease-in-out'>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6 1C6 0.447715 5.55229 0 5 0C4.44772 0 4 0.447715 4 1V1.44885C3.23882 1.6903 2.57734 2.06994 2.01802 2.6746C1.18949 3.57031 0.83279 4.69272 0.664161 6.04866C0.499967 7.36894 0.499982 9.05406 0.5 11.1739V11.1739V11.8261V11.8261C0.499982 13.9459 0.499967 15.6311 0.664161 16.9513C0.83279 18.3073 1.18949 19.4297 2.01802 20.3254C2.8568 21.2322 3.92535 21.6329 5.21533 21.8204C6.45141 22.0001 8.02291 22 9.97119 22H9.97121H9.97122H12.0288H12.0288H12.0288C13.9771 22 15.5486 22.0001 16.7847 21.8204C18.0747 21.6329 19.1432 21.2322 19.982 20.3254C20.8105 19.4297 21.1672 18.3073 21.3358 16.9513C21.5 15.6311 21.5 13.9459 21.5 11.8261V11.1739C21.5 9.05408 21.5 7.36895 21.3358 6.04866C21.1672 4.69272 20.8105 3.57031 19.982 2.6746C19.4227 2.06993 18.7612 1.6903 18 1.44885V1C18 0.447715 17.5523 0 17 0C16.4477 0 16 0.447715 16 1V1.09173C14.903 0.999955 13.5863 0.999976 12.0288 1H12.0288H9.97122H9.97121C8.41374 0.999976 7.09704 0.999955 6 1.09173V1ZM3.49783 8C3.03921 8 2.8099 8 2.66385 8.14417C2.51781 8.28833 2.51487 8.51472 2.509 8.96751C2.50027 9.64067 2.5 10.3942 2.5 11.2432V11.7568C2.5 13.9616 2.50182 15.5221 2.64887 16.7045C2.79327 17.8656 3.06263 18.5094 3.48622 18.9673C3.89956 19.4142 4.4647 19.6903 5.503 19.8412C6.57858 19.9975 8.00425 20 10.05 20H11.95C13.9957 20 15.4214 19.9975 16.497 19.8412C17.5353 19.6903 18.1004 19.4142 18.5138 18.9673C18.9374 18.5094 19.2067 17.8656 19.3511 16.7045C19.4982 15.5221 19.5 13.9616 19.5 11.7568V11.2432C19.5 10.3942 19.4997 9.64067 19.491 8.96751C19.4851 8.51472 19.4822 8.28833 19.3362 8.14417C19.1901 8 18.9608 8 18.5022 8H3.49783ZM12 11C12 10.4477 11.5523 10 11 10C10.4477 10 10 10.4477 10 11V13H8C7.44772 13 7 13.4477 7 14C7 14.5523 7.44772 15 8 15H10V17C10 17.5523 10.4477 18 11 18C11.5523 18 12 17.5523 12 17V15H14C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13H12V11Z" fill="#E5F6FF"/>
            </svg>
        </div>
        <h1
        style={{
            fontFamily: "var(--font-reem-kufi)",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0.02em"
        }}
        className='group-hover:translate-x-1 transition-all duration-300 ease-in-out'
        >Book an Appointment</h1>
        </DialogTitle>
        <DialogContent>
          <Form {...form} >
            <form onSubmit={form.handleSubmit(() => {})} className="space-y-8 ">
    
                {/* Name Fields */}
                <div className="grid grid-cols-1  gap-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-sm text-[#111315] font-semibold ">Full Name</FormLabel>
                        <FormControl>                   
                        <div className=" flex  ">
                            <span className="inline-flex items-center px-4 h-12 text-lg border border-[#DCDEE1] border-r-0 rounded-l-md bg-[#EFF5FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.77084 0.145508C7.113 0.145508 4.95836 2.30013 4.95836 4.95801C4.95836 7.61587 7.113 9.77051 9.77084 9.77051C12.4287 9.77051 14.5833 7.61587 14.5833 4.95801C14.5833 2.30013 12.4287 0.145508 9.77084 0.145508ZM15.477 12.8203C15.3294 12.737 15.199 12.6634 15.0932 12.6005C11.8353 10.6605 7.70651 10.6605 4.44863 12.6005C4.34201 12.6639 4.21029 12.7382 4.06119 12.8224C3.40778 13.191 2.42006 13.7482 1.74341 14.4105C1.32021 14.8248 0.918114 15.3706 0.84501 16.0394C0.767276 16.7506 1.07753 17.418 1.69997 18.011C2.7738 19.034 4.06243 19.8539 5.72921 19.8539H13.8127C15.4794 19.8539 16.7681 19.034 17.8419 18.011C18.4643 17.418 18.7746 16.7506 18.6968 16.0394C18.6237 15.3706 18.2216 14.8248 17.7984 14.4105C17.1217 13.7482 16.134 13.191 15.4806 12.8224L15.477 12.8203Z" fill="#838890"/>
                                </svg>
                            </span>
                            <Input placeholder="Name" className="h-12 text-lg rounded-l-none border-[#DCDEE1] border-l-0 bg-[#EFF5FF]" {...field} />
                        </div>                   
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
                        <h1 
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                        }}
                        className='text-[#111315] text-md'
                        >
                            Email Address
                        </h1>                                
                        </FormLabel>
                        <FormControl>
                        <div className=" flex  ">
                            <span className="inline-flex items-center px-4 h-12 text-lg border border-[#DCDEE1] border-r-0 rounded-l-md bg-[#EFF5FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.4587 0.554246C10.6659 0.509257 9.33393 0.509265 7.54114 0.55425L7.47253 0.555971C6.08895 0.590651 4.95056 0.619185 4.03301 0.778781C3.05917 0.948168 2.24378 1.27805 1.55316 1.97043C0.86616 2.65919 0.537216 3.46172 0.370571 4.42015C0.214179 5.31961 0.190513 6.42956 0.161869 7.77295L0.160395 7.84206C0.140864 8.75681 0.140874 9.24255 0.160407 10.1573L0.161881 10.2264C0.190526 11.5698 0.214193 12.6797 0.370585 13.5792C0.53723 14.5376 0.866175 15.3402 1.55318 16.0289C2.2438 16.7213 3.05918 17.0512 4.03302 17.2206C4.95057 17.3802 6.08896 17.4087 7.47254 17.4434L7.54116 17.4451C9.33395 17.4901 10.6659 17.4901 12.4587 17.4451L12.5273 17.4434C13.9109 17.4087 15.0493 17.3802 15.9668 17.2206C16.9407 17.0512 17.7561 16.7213 18.4467 16.0289C19.1337 15.3402 19.4626 14.5376 19.6293 13.5792C19.7857 12.6797 19.8093 11.5698 19.838 10.2264L19.8394 10.1573C19.859 9.24254 19.859 8.75681 19.8394 7.84206L19.838 7.77297C19.8093 6.42959 19.7856 5.31961 19.6293 4.42015C19.4626 3.46173 19.1337 2.65919 18.4467 1.97044C18.0586 1.58135 17.6311 1.30673 17.1582 1.11074C17.0862 1.07146 17.0091 1.04185 16.9288 1.02294C16.6264 0.916357 16.3062 0.837822 15.9668 0.778784C15.0493 0.619187 13.9109 0.59065 12.5273 0.555967L12.4587 0.554246ZM17.9564 6.11245C17.9386 5.74073 17.9298 5.55487 17.7952 5.48067C17.6606 5.40647 17.4951 5.50022 17.1642 5.68773L13.2814 7.88776C12.09 8.56276 11.0825 8.99966 9.99974 8.99966C8.91697 8.99966 7.90942 8.56276 6.71812 7.88776L2.83566 5.68793C2.50473 5.50042 2.33926 5.40666 2.20466 5.48087C2.07006 5.55507 2.06119 5.74093 2.04346 6.11266C2.01957 6.61363 2.00661 7.1944 1.99195 7.88107C1.97297 8.76981 1.97298 9.22954 1.99196 10.1183C2.02249 11.5483 2.04564 12.5191 2.17554 13.2662C2.29786 13.9697 2.50194 14.3876 2.85103 14.7376C3.19651 15.084 3.62016 15.2915 4.34734 15.418C5.11568 15.5517 6.1178 15.5791 7.58717 15.616C9.34929 15.6602 10.6506 15.6602 12.4127 15.616C13.882 15.5791 14.8842 15.5517 15.6525 15.418C16.3797 15.2915 16.8033 15.0839 17.1488 14.7376C17.4979 14.3876 17.702 13.9696 17.8243 13.2661C17.9542 12.5191 17.9774 11.5483 18.0079 10.1183C18.0269 9.22954 18.0269 8.76981 18.0079 7.88107C17.9932 7.19431 17.9803 6.61347 17.9564 6.11245Z" fill="#838890"/>
                                </svg>
                            </span>
                            <Input placeholder="Enter your email" className="h-12 text-lg rounded-l-none border-[#DCDEE1] border-l-0 bg-[#EFF5FF]" {...field} />
                        </div> 
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
                        <h1
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                        }}
                        className='text-[#111315] text-md'
                        >
                            Phone Number
                        </h1>
                        
                        </FormLabel>
                        <FormControl>
                        <div className=" flex  ">
                            
                            <Input placeholder="+1 0123456789" className="h-12 text-lg  border-[#DCDEE1] bg-[#EFF5FF]" {...field} />
                        </div> 
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>
                
                {/* Gender */}
                <FormField 
                control={form.control}
                name="gender"
                render={({}) => (
                    <FormItem>
                        <FormLabel>
                            <h1
                            style={{
                                fontFamily : 'var(--font-reem-kufi)',
                                fontWeight : 500,
                            }}
                            className='text-[#111315] text-md'
                            >
                                Gender
                            </h1>
                        </FormLabel>
                        <FormControl>
                        <Select>
                            <SelectTrigger
                            className="w-full h-12 px-6 bg-[#f0f5ff]  border rounded-sm"
                            >
                                <SelectValue placeholder="Select Gender" className=" font-[var(--font-inter)] h-12 text-lg data-[placeholder]:text-red-500"/>
                            </SelectTrigger>
                            <SelectContent>
                            <SelectGroup>
                                {["Male", "Female"].map((service) => (
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
                {/* Time and Date Fields */}
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field: dateField }) => ( // Renamed field to dateField for clarity
                    <FormItem className="w-full"> {/* This makes the item take full width */}
                        <FormLabel>
                        <h1
                            style={{
                            fontFamily: "var(--font-reem-kufi)",
                            fontWeight: 500,
                            }}
                            className="text-[#111315] text-md"
                        >
                            Appointment Date & Time
                        </h1>
                        </FormLabel>
                        <Popover>
                        <PopoverTrigger asChild>
                            <FormControl className="border-black">
                            <Button
                                variant={"outline"}
                                className={cn(
                                "h-12 text-lg w-full pl-3 text-left font-normal bg-[#EFF5FF] resize-none border-[#DCDEE1]", // w-full makes the button full width
                                !dateField.value && "text-muted-foreground"
                                )}
                            >
                                {dateField.value ? (
                                format(dateField.value, "PPP")
                                ) : (
                                <span>Select Date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4" align="start">
                            {/* Calendar Part */}
                            <Calendar
                            mode="single"
                            selected={dateField.value}
                            // Use the custom handler here
                            onSelect={dateField.onChange}
                            disabled={(date) => {
                                const today = new Date();
                                today.setHours(0, 0, 0, 0); // Set today to the start of the day
                                return date < today; // Disable past dates (including today before it starts)
                            }}
                            initialFocus
                            />
            
                            {/* Time Slot Part (conditionally rendered if a date is selected) */}
                            {dateField.value && ( // Only show time slots if a date is picked
                            <FormField
                                control={form.control}
                                name={"appointmentTime"} // Use the timeFieldName prop
                                render={({ field: timeField }) => ( // Renamed field to timeField
                                <FormItem className="flex flex-col overflow-y-scroll">
                                    <div className="sticky top-0 flex items-center gap-2 p-3 border-b bg-background z-10"> {/* Added z-10 */}
                                        <Clock className="h-4 w-4" />
                                        <h3 className="font-medium text-sm whitespace-nowrap">Select Time</h3> {/* Added whitespace-nowrap */}
                                    </div>

                                    <div className="flex-1 min-h-0 overflow-scroll max-h-[280px] p-2 "> {/* Adjusted max-h slightly for padding */}
                                    <div className="flex flex-col gap-2">
                                        {/* Example TIME_SLOTS - replace with your actual list */}
                                        {TIME_SLOTS.map((time) => (
                                        <Button
                                            key={time}
                                            type="button" // Prevent form submission if nested
                                            variant={timeField.value === time ? "default" : "outline"}
                                            className={cn(
                                            "justify-center w-full", // Make buttons full width within their container
                                            timeField.value === time
                                                ? "bg-primary text-primary-foreground"
                                                : ""
                                            )}
                                            // Pass the actual time value to onChange
                                            onClick={() => timeField.onChange(time)}
                                        >
                                            {time}
                                        </Button>
                                        ))}
                                    </div>
                                    </div>
                                </FormItem>
                                )}
                            />
                            )}
                        </PopoverContent>
                        </Popover>
                        <FormMessage />
                    </FormItem>
                    )}
                />
    
                {/* Reason Field */}
                <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-sm text-[#111315] font-semibold">Message <span className="text-[#838890]">(optional)</span></FormLabel>
                    <FormControl>
                        <Textarea placeholder="Your Message" className="min-h-[200px] text-lg resize-none  border-[#DCDEE1]  bg-[#EFF5FF]" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
    
                <button
                onClick={() => {
                    setAppointmentConfirm(true)
                }}
                className="w-full self-center flex items-center justify-center"><BookAnAppointmentClient />
                </button>

                <div>
                    <p
                    style={{
                    fontFamily : 'var(--font-reem-kufi)',
                        fontWeight : 500,
                    }}
                    className='text-[#838890] text-md'
                    >By submitting, you agree to our <span className="text-[#2358AC] underline">privacy policy and disclaimer.</span> Someone from our team may contact you via phone, email and/or text.</p>
                </div>
                <Dialog open={openAppointmentConfirm} onOpenChange={() => setAppointmentConfirm(!openAppointmentConfirm)} >
                    <DialogContent className=" rounded-[20px] p-[32px]" >
                        <DialogTitle>

                        </DialogTitle>
                        <div className="bg-white flex flex-col space-y-[20px] items-center justify-center">
                            <div className=" relative h-[100px] self-center flex w-full">
                            <div className="z-1 relative justify-center items-center flex w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108" fill="none">
                                <circle opacity="0.1" cx="54" cy="54" r="54" fill="#4CC2FF"/>
                                </svg>
                                <div className=" absolute top-1.5 z-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86" fill="none">
                                    <circle opacity="0.2" cx="43" cy="43" r="43" fill="#4CC2FF"/>
                                </svg>
                                </div>
                                <div className=" absolute top-4.5 z-3 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                    <circle cx="32" cy="32" r="32" fill="#4CC2FF"/>
                                </svg>
                                </div>

                                <div className="absolute top-9.5 z-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.1194 0.95737C11.4704 0.416553 10.5277 0.416554 9.87875 0.957371L7.72754 2.75005L4.49907 2.75005C3.53258 2.75005 2.74908 3.53355 2.74907 4.50005L2.74907 7.72851L0.956394 9.87973C0.415578 10.5287 0.415577 11.4714 0.956394 12.1204L2.74907 14.2716L2.74908 17.5001C2.74908 18.4666 3.53258 19.2501 4.49908 19.2501L7.72754 19.25L9.87875 21.0427C10.5277 21.5835 11.4704 21.5835 12.1194 21.0427L14.2706 19.25H17.4991C18.4656 19.25 19.2491 18.4665 19.2491 17.5L19.2491 14.2716L21.0417 12.1204C21.5826 11.4714 21.5826 10.5287 21.0418 9.87973L19.2491 7.72851L19.2491 4.50005C19.2491 3.53355 18.4656 2.75005 17.4991 2.75005L14.2706 2.75005L12.1194 0.95737ZM14.4611 9.38694C14.9509 9.13182 15.1412 8.52792 14.8861 8.03809C14.6309 7.54826 14.027 7.35799 13.5372 7.61311C12.1092 8.35684 10.9442 9.7806 10.1744 10.9032C10.1078 11.0004 10.0434 11.0964 9.98137 11.1907C9.84153 11.4033 9.71366 11.6073 9.59878 11.7971C9.51302 11.7245 9.42957 11.6575 9.35034 11.5963C9.32499 11.5767 9.30008 11.5577 9.27566 11.5393C9.06035 11.3772 8.86673 11.2494 8.72532 11.1612C8.65433 11.1169 8.59572 11.0821 8.55316 11.0575C8.53187 11.0451 8.51453 11.0353 8.50161 11.0281L8.48557 11.0191L8.48012 11.0161L8.47806 11.015L8.47644 11.0141C7.99113 10.7505 7.38401 10.9303 7.1204 11.4156C6.85685 11.9008 7.03677 12.5079 7.52183 12.7716L7.52391 12.7728L7.55058 12.788C7.576 12.8028 7.61582 12.8263 7.6667 12.8581C7.76905 12.9219 7.91292 13.0168 8.07261 13.1371C8.40619 13.3882 8.74611 13.7036 8.9523 14.0319C9.14601 14.3403 9.4921 14.519 9.85574 14.4984C10.2193 14.4778 10.543 14.2609 10.7007 13.9328L10.7032 13.9276L10.7159 13.9018C10.7276 13.878 10.746 13.8413 10.7707 13.7932C10.8202 13.6969 10.8947 13.5553 10.992 13.3804C11.187 13.0294 11.4706 12.5494 11.8239 12.0343C12.5541 10.9694 13.489 9.89321 14.4611 9.38694Z" fill="#E5F6FF"/>
                                </svg>
                                </div>
                            </div>

                            </div>

                            <div className=" flex flex-col space-y-[10px] items-center justify-center">
                            <h1
                            style={{
                                fontFamily : 'var(--font-reem-kufi)',
                                fontWeight : 700,
                            }}
                            className='text-[black] text-2xl'
                            >
                                Your Appointment is confirmed
                            </h1>
                            <h1
                            style={{
                                fontFamily : 'var(--font-reem-kufi)',
                                fontWeight : 500,
                            }}
                            className='text-[#838890] text-md text-center'
                            >
                                Your appointment has been booked successfully
                                Please be available on your time
                            </h1>
                            </div>
                            <div 
                            onClick={() => {
                            setOpen(false)
                            setAppointmentConfirm(false)
                            }}
                            className=" max-h-[56px] h-full px-[32px] py-[16px] rounded-[62px] relative flex bg-[#0094E0] text-white text-[14px] font-semibold w-full justify-center items-center hover:cursor-pointer"
                            >
                                <h1
                                style={{
                                    fontFamily: "var(--font-reem-kufi)",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    letterSpacing: "0.02em"
                                }}
                                >Done</h1>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </form>
          </Form>
          
        </DialogContent>
      </Dialog>
  )
}
