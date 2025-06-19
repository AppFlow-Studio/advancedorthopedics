"use client"
import React, { useState } from 'react'
import { m, motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { sendConditionCheckEmail, sendUserEmail } from '@/components/email/sendcontactemail'

const formSchema = z.object({
  pain_area : z.string().array().nonempty({ message : "Can't be empty!" }),
  pain_strongest : z.string().nonempty({ message : "Choose an area "}),
  pain_length : z.string().nonempty({ message : " "}),
  pain_desc : z.string().nonempty({}),
  pain_always : z.string(),
  pain_symptoms : z.string().array().nonempty({ message : "Can't be empty!" }),
  pain_worst : z.string().nonempty({ message : "Choose an area "}),
  pain_feel_better: z.string().nonempty({ message : " "}),
  pain_source : z.string().nonempty({}),
  pain_test : z.string(),
  first_name : z.string().min(2),
  last_name : z.string().min(2),
  email : z.string().email(),
  phone : z.string().min(10, "Phone number must be at least 10 digits"),
  state : z.string(),
  insurance_type : z.string(),
  comments : z.string(),
  email_optout : z.string()
})

interface ConditionCheckSectionProps {
  steps: Array<{
    step: string,
    caption: string,
    questions: Array<{
      question: string,
      control: string,
      options: string[]
    }>
  }>,
  initialValues: Record<string, any>,
  onSubmit?: (values: any) => Promise<void>
}

export default function ConditionCheckSection({
  steps,
  initialValues,
  onSubmit: parentOnSubmit
}: ConditionCheckSectionProps) {
  const [ConditionStep, setConditionStep] = useState(1)
  const [openAppointmentConfirm, setAppointmentConfirm] = useState(false)
  const ConditionForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  })
  async function onSubmit(values: any) {
    if (parentOnSubmit) await parentOnSubmit(values)
    else {
      const data = await sendConditionCheckEmail(values)
      await sendUserEmail({ name: values.first_name + " " + values.last_name, email: values.email, phone: values.phone })
      if (data) ConditionForm.reset()
    }
    setAppointmentConfirm(true)
  }
  return (
    <section className='w-full h-full flex flex-col relative overflow-hidden bg-[#EFF5FF] py-[50px] px-6 lg:px-[80px]' aria-label="Condition Check Form">
      <div className=' flex flex-row md:space-x-[20px] items-center justify-center max-w-[1440px]' role="list" aria-label="Condition Check Steps">
        {steps.map((step, index) => (
          <div className=' flex flex-row space-x-[12px] items-center justify-center' key={index} role="listitem">
            <div className={` h-[40px] w-[40px] flex items-center  justify-center rounded-full ${ConditionStep == index + 1 ? ' bg-[#0094E0] text-white ' : 'bg-[#EFF1F4] text-[#0094E0] md:flex hidden'}`}>
              <span style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 500 }} className=' text-lg'>{index + 1}</span>
            </div>
            <span style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 500 }} className={`text-black text-xl ${ConditionStep == index + 1 ? 'flex' : ' lg:flex hidden'}`}>{step.step}</span>
            {index + 1 != steps.length ? (
              <div className={`md:flex hidden`} aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="122" height="10" viewBox="0 0 122 8" fill="none">
                  <path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM121.354 4.35355C121.549 4.15829 121.549 3.84171 121.354 3.64645L118.172 0.464466C117.976 0.269204 117.66 0.269204 117.464 0.464466C117.269 0.659728 117.269 0.976311 117.464 1.17157L120.293 4L117.464 6.82843C117.269 7.02369 117.269 7.34027 117.464 7.53553C117.66 7.7308 117.976 7.7308 118.172 7.53553L121.354 4.35355ZM1 4.5H121V3.5H1V4.5Z" fill="#838890" />
                </svg>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <motion.div className='flex flex-col items-center justify-center max-w-[1440px] mt-[50px] overflow-hidden' layout transition={{ duration: 0.3, ease: "easeInOut" }}>
        <div className=' bg-[#022968] rounded-t-[24px] rounded-b-0 w-full p-[16px]'>
          <h2 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 400 }} className="text-white text-3xl text-center self-center" id="condition-check-step-title">
            Step {ConditionStep}: {steps[ConditionStep - 1].step}
          </h2>
        </div>
        <div className='bg-white p-[16px] space-y-[24px] flex flex-col w-full'>
          <p style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 400 }} className="text-[#5B5F67] text-lg text-left w-full">
            {steps[ConditionStep - 1].caption}
          </p>
          {ConditionStep == 3 ? (
            <div className='flex-col space-y-[16px] '>
              {['100% Secure', 'Your information is never shared', 'We are HIPPA compliant', 'We hate spam'].map((item) => (
                <div className=' flex flex-row space-x-[12px] items-center' key={item}>
                  {/* SVG icon omitted for brevity */}
                  <span style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 500 }} className="text-[#5B5F67] text-lg text-left w-full">{item}</span>
                </div>
              ))}
            </div>
          ) : null}
          <Form {...ConditionForm}>
            <form className=' flex flex-col space-y-[24px] ' aria-labelledby="condition-check-step-title">
              {steps[ConditionStep - 1].questions.map((question: any) => (
                <FormField
                  control={ConditionForm.control}
                  name={question.control}
                  key={question.question}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-black text-lg text-left w-full">{question.question}</span>
                      </FormLabel>
                      <FormControl>
                        {/* Multi-select checkboxes for only the two specific questions */}
                        {(question.question === "Where is your pain? (Choose all that apply)" || question.question === "Do you have any of the following symptoms? (choose all that apply)?") ? (
                          <div className='flex flex-col space-y-[16px]'>
                            {question.options.map((option: string) => {
                              const isChecked = field.value?.includes && field.value?.includes(option)
                              const handleToggle = () => {
                                const currentValues = Array.isArray(field.value) ? [...field.value] : []
                                let newValues
                                if (isChecked) {
                                  newValues = currentValues.filter((item) => item !== option)
                                } else {
                                  newValues = [...currentValues, option]
                                }
                                field.onChange(newValues)
                              }
                              return (
                                <label key={option} className='flex flex-row items-center space-x-3 cursor-pointer'>
                                  <input
                                    type='checkbox'
                                    checked={isChecked}
                                    onChange={handleToggle}
                                    className='form-checkbox h-5 w-5 text-[#0094E0] border-[#DCDEE1] rounded focus:ring-2 focus:ring-[#0094E0] transition duration-150 ease-in-out'
                                  />
                                  <span style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-[#5B5F67] text-lg text-left w-full">{option}</span>
                                </label>
                              )
                            })}
                          </div>
                        ) : question.options && question.options.length > 0 ? (
                          // Single-select dropdown for all other questions with options
                          <Select
                            value={field.value || ""}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full h-12 px-6 bg-[#f0f5ff] border rounded-sm">
                              <SelectValue placeholder="Choose" className="font-[var(--font-inter)] text-lg" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {question.options.map((option: string) => (
                                  <SelectItem key={option} value={option}>{option}</SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        ) : question.control === 'comments' ? (
                          <Textarea placeholder={question.question} className="min-h-[200px] text-lg resize-none border-[#DCDEE1] bg-[#EFF5FF]" {...field} />
                        ) : question.control === 'email_optout' ? (
                          <div className=' flex flex-row items-center justify-start space-x-[12px] w-full hover:cursor-pointer'
                            onClick={() => field.onChange(field.value === 'false' ? 'true' : 'false')}
                          >
                            <input
                              type="checkbox"
                              checked={field.value === 'true'}
                              readOnly
                              className='form-checkbox h-5 w-5 text-[#0094E0] border-[#DCDEE1] rounded focus:ring-2 focus:ring-[#0094E0] transition duration-150 ease-in-out'
                            />
                            <span style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-[#5B5F67] text-lg text-left w-full">
                              I don't want to receive occasional emails from Orthopedic and Laser Spine Surgery.
                            </span>
                          </div>
                        ) : (
                          <Input placeholder={question.question} className="h-12 text-lg border-[#DCDEE1] bg-[#EFF5FF]" {...field} />
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </form>
          </Form>
        </div>
        <div className=' flex flex-row p-[16px] w-full rounded-b-[24px] justify-between bg-white'>
          {ConditionStep != 1 ? (
            <button
              type="button"
              onClick={() => setConditionStep(ConditionStep - 1)}
              className=" max-h-[56px] w-fit h-full px-[32px] py-[16px] space-x-[10px] rounded-[62px] relative flex bg-[white] text-[#022968] border border-[#022968] text-[14px] font-semibold justify-center items-center hover:cursor-pointer"
            >
              <span style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, fontSize: "16px", lineHeight: "24px", letterSpacing: "0.02em" }}>Back</span>
            </button>
          ) : null}
          <button
            type="button"
            onClick={() => {
              if (ConditionStep != steps.length) {
                setConditionStep(Math.min(steps.length, ConditionStep + 1))
              } else {
                ConditionForm.handleSubmit(onSubmit, (e) => console.log(e))()
              }
            }}
            className=" self-end max-h-[56px] w-fit h-full px-[32px] py-[16px] space-x-[10px] rounded-[62px] relative flex bg-[#0094E0] text-white text-[14px] font-semibold justify-center items-center hover:cursor-pointer"
          >
            {ConditionStep != steps.length ? (
              <span style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, fontSize: "16px", lineHeight: "24px", letterSpacing: "0.02em" }}>Next</span>
            ) : (
              <span style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, fontSize: "16px", lineHeight: "24px", letterSpacing: "0.02em" }}>Get My Results</span>
            )}
          </button>
        </div>
      </motion.div>
      <Dialog open={openAppointmentConfirm} onOpenChange={() => setAppointmentConfirm(!openAppointmentConfirm)} >
        <DialogContent className=" rounded-[20px] p-[32px]" >
          <DialogTitle></DialogTitle>
          <div className="bg-white flex flex-col space-y-[20px] items-center justify-center">
            <div className=" relative h-[100px] self-center flex w-full">
              {/* Animated SVGs omitted for brevity */}
            </div>
            <div className=" flex flex-col space-y-[10px] items-center justify-center">
              <h2 style={{ fontFamily : 'var(--font-reem-kufi)', fontWeight : 700 }} className='text-[black] text-2xl'>Your Appointment Request Is Confirmed</h2>
              <p style={{ fontFamily : 'var(--font-reem-kufi)', fontWeight : 500 }} className='text-[#838890] text-md text-center'>You're one step closer to a pain-free life!<br/>Please check your email for details. Our team will contact you shortly.<br/>Thank you for choosing Mountain Spine & Orthopedic Center!</p>
            </div>
            <button
              onClick={() => setAppointmentConfirm(false)}
              className=" max-h-[56px] h-full px-[32px] py-[16px] rounded-[62px] relative flex bg-[#0094E0] text-white text-[14px] font-semibold w-full justify-center items-center hover:cursor-pointer"
            >
              <span style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, fontSize: "16px", lineHeight: "24px", letterSpacing: "0.02em" }}>Done</span>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
} 