'use server'

import { Resend } from 'resend'
import { LawyerEmailTemplate } from './lawyeremailtemplate'
import { LawyerConfirmationTemplate } from './lawyerconfirmationtemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendLawyerContactEmail(formData: {
    firmName: string
    attorneyName: string
    email: string
    phone: string
    barNumber?: string
    practiceAreas: string
    caseType: string
    clientName: string
    clientEmail: string
    clientPhone: string
    accidentDate: string
    injuryDescription: string
    urgency: string
    additionalInfo?: string
}) {
    try {
        const data = await resend.emails.send({
            from: 'Mountain Spine & Orthopedics <no-reply@mountainspineorthopedics.com>',
            to: ['info@mountainspineorthopedics.com'],
            subject: 'New Attorney Coordination Request - ' + formData.clientName,
            react: await LawyerEmailTemplate({
                firmName: formData.firmName,
                attorneyName: formData.attorneyName,
                email: formData.email,
                phone: formData.phone,
                barNumber: formData.barNumber,
                practiceAreas: formData.practiceAreas,
                caseType: formData.caseType,
                clientName: formData.clientName,
                clientEmail: formData.clientEmail,
                clientPhone: formData.clientPhone,
                accidentDate: formData.accidentDate,
                injuryDescription: formData.injuryDescription,
                urgency: formData.urgency,
                additionalInfo: formData.additionalInfo,
            }),
        })
        return data
    } catch (error) {
        console.error('Error sending lawyer contact email:', error)
        throw new Error('Failed to send attorney coordination email')
    }
}

export async function sendLawyerConfirmationEmail(formData: {
    attorneyName: string
    email: string
    firmName: string
    clientName: string
}) {
    try {
        const data = await resend.emails.send({
            from: 'Mountain Spine & Orthopedics <info@mountainspineorthopedics.com>',
            to: [formData.email],
            subject: 'Attorney Coordination Request Confirmed - ' + formData.clientName,
            react: await LawyerConfirmationTemplate({
                attorneyName: formData.attorneyName,
                email: formData.email,
                firmName: formData.firmName,
                clientName: formData.clientName,
            }),
        })
        return data
    } catch (error) {
        console.error('Error sending lawyer confirmation email:', error)
        throw new Error('Failed to send attorney confirmation email')
    }
}
