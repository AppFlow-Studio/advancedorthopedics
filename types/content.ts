// types/content.ts
// Centralized type definitions for conditions, treatments, and injuries
// to avoid interface drift and circular imports

import { StaticImageData } from 'next/image';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BaseContentProp {
  title: string;
  slug: string;
  body: string;
  tag: string;  // Primary tag (for backward compatibility)
  additionalTags?: string[];  // Secondary body parts (normalized format)
  categories?: string[];  // Category tags like "pain-management", "sports-medicine"
  metaTitle?: string;
  metaDesc?: string;
  keywords?: string[];
  card_img?: StaticImageData | string;
  inTxt_img?: StaticImageData | string;
}

export interface ConditionInfoProp extends BaseContentProp {
  forum?: { post: React.ReactNode }[];
  side_img?: StaticImageData | string;
  detail?: string;
  what_sym?: string;
  risk_fac?: string;
  diagnose?: string | React.ReactNode;
  treatment?: string;
  procedure_info?: string;
  recovery_info?: string;
  benefits?: string;
  why_choose_us?: string;
  pain_info?: string;
  prevent?: string;
  schedule?: string;
  ogImage?: string;
}

export interface TreatmentsCardProp extends BaseContentProp {
  detail?: string;
  why_choose_us?: string;
  benefits?: string | React.ReactNode;
  prevent?: string;
  conditions_treated: string;
  recovery_info?: string;
  schedule?: string;
  procedure_info?: string;
}

export interface InjuryInfoProp extends BaseContentProp {
  detail?: string;
  what_we_evaluate?: string;
  common_injuries?: string;
  when_to_seek?: string;
  why_choose_us?: string;
  schedule?: string;
}
