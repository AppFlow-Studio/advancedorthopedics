'use server'

import { Resend } from 'resend';
import { EmailTemplate } from './emailtemplate';
import { MRIEmailTemplate } from './mrireviewtemplate';
import { TreatmentCandidacyEmailTemplate } from './candidemailtemplate';
import { ConditionCheckEmailTemplate } from './conditioncheckemailtemplate';
import { UserEmailTemplate } from './useremailtemplate';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendUserEmail(formData : {name : string, email : string, phone : string}) {

    try {
        const data = await resend.emails.send({
            from: 'Mountain Spine & Orthopedics <info@mountainspineorthopedics.com>',
            to: [formData.email],
            subject: 'Thank you for contacting Mountain Spine & Orthopedics',
            react: await UserEmailTemplate({name : formData.name, email : formData.email, phone : formData.phone}),
        });
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to send email');
    }
}

export async function sendContactEmail(formData : {name : string, email : string, phone : string, reason : string, bestTime : string}) {
    try {
        const data = await resend.emails.send({
            from: 'Mountain Spine & Orthopedics <info@mountainspineorthopedics.com>',
            to: ['info@mountainspineorthopedics.com'],
            subject: 'New Contact Form Submission',
            react: await EmailTemplate({name : formData.name, email : formData.email, phone : formData.phone, reason : formData.reason, bestTime : formData.bestTime}),
        });
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to send email');
    }
}

export async function sendMRIContactEmail(formData : {email : string, phone : string, first_name : string, last_name : string, comments : string, email_optout : string, insurance_type : string, last_test_date : string, other : string, recent_diagnosis : string, state : string, bestTime : string}) {
    try {
        const data = await resend.emails.send({
            from: 'Mountain Spine & Orthopedics <info@mountainspineorthopedics.com>',
            to: ['info@mountainspineorthopedics.com'],
            subject: 'New MRI Review Form Submission',
            react: await MRIEmailTemplate({
                email: formData.email,
                phone: formData.phone,
                first_name: formData.first_name,
                last_name: formData.last_name,
                comments: formData.comments,
                email_optout: formData.email_optout,
                insurance_type: formData.insurance_type,
                last_test_date: formData.last_test_date,
                other: formData.other,
                recent_diagnosis: formData.recent_diagnosis,
                state: formData.state,
                bestTime: formData.bestTime,
            }),
        });
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to send email');
    }
}

export async function sendCandidacyEmail(formData : {first_name : string, last_name : string, email : string, phone : string, state : string, condition : string, age : string, health : string, smoking : string, recent_diagnosis : string, insurance_type : string, last_test_date : string, other : string, comments : string, email_optout : string}) {
    try {
        const data = await resend.emails.send({
            from: 'Mountain Spine & Orthopedics <info@mountainspineorthopedics.com>',
            to: ['info@mountainspineorthopedics.com'],
            subject: 'New Candidacy Form Submission',
            react: await TreatmentCandidacyEmailTemplate({
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                phone: formData.phone,
                state: formData.state,
                condition: formData.condition,
                age: formData.age,
                health: formData.health,
                smoking: formData.smoking,
                recent_diagnosis : formData.recent_diagnosis,
                insurance_type : formData.insurance_type,
                last_test_date : formData.last_test_date,
                other : formData.other,
                comments : formData.comments,
                email_optout : formData.email_optout,
                
            }),
        });
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to send email');
    }
}

export const sendConditionCheckEmail = async (formData : {first_name : string, last_name : string, email : string, phone : string, state : string, insurance_type : string, comments : string, email_optout : string, pain_area : string[], pain_strongest : string, pain_length : string, pain_desc : string, pain_always : string, pain_symptoms : string[], pain_worst : string, pain_feel_better : string, pain_source : string, pain_test : string}) => {
    try {
        const data = await resend.emails.send({
            from: 'Mountain Spine & Orthopedics <info@mountainspineorthopedics.com>',
            to: ['info@mountainspineorthopedics.com'],
            subject: 'New Condition Check Form Submission',
            react: await ConditionCheckEmailTemplate({
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                phone: formData.phone,
                state: formData.state,
                insurance_type: formData.insurance_type,
                comments: formData.comments,
                email_optout: formData.email_optout,
                pain_area: formData.pain_area,
                pain_strongest: formData.pain_strongest,
                pain_length: formData.pain_length,
                pain_desc: formData.pain_desc,
                pain_always: formData.pain_always,
                pain_symptoms: formData.pain_symptoms,
                pain_worst: formData.pain_worst,
                pain_feel_better: formData.pain_feel_better,
                pain_source: formData.pain_source,
                pain_test: formData.pain_test,
            })
        })
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to send email');
    }
}