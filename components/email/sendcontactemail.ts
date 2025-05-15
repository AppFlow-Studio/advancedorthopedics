'use server'

import { Resend } from 'resend';
import { EmailTemplate } from './emailtemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData : {name : string, email : string, phone : string, reason : string, bestTime : string}) {
    try {
        const data = await resend.emails.send({
            from: 'Mountain Spine & Orthopedic Center <onboarding@resend.dev>',
            to: ['appflowcreations@gmail.com'],
            subject: 'New Contact Form Submission',
            react: await EmailTemplate({name : formData.name, email : formData.email, phone : formData.phone, reason : formData.reason, bestTime : formData.bestTime}),
        });
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to send email');
    }
}
