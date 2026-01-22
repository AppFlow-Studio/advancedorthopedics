import { AllTreatments } from '@/components/data/treatments';
import { conditions } from '@/components/data/conditions';

/**
 * Manual override map for specialties that need exact matching
 * This ensures high-priority procedures link correctly
 * ONLY includes pages that actually exist on the site
 */
const SPECIALTY_OVERRIDES: Record<string, string> = {
  // Dr. Katzman's specialties
  "Endoscopic Discectomy": "/treatments/endoscopic-discectomy-surgery",
  "Microdiscectomy": "/treatments/lumbar-microdiscectomy-surgery",
  "Endoscopic Foraminotomy": "/treatments/endoscopic-foraminotomy-surgery",
  "Artificial Disc Replacement": "/treatments/artificial-disc-replacement-surgery",
  
  // Dr. Cowin's specialties
  "TLIF (Transforaminal Lumbar Interbody Fusion)": "/treatments/understanding-tlif-surgery",
  "Axial Fusion": "/treatments/axial-fusion-surgery",
  "Endoscopic Discectomy": "/treatments/endoscopic-discectomy-surgery",
  
  // Dr. McCarthy's specialties
  "Minimally Invasive Spine Procedures": "/treatments/motion-preservation-spine-surgery",
  "Traditional 'Open' Decompression": "/treatments/lumbar-decompression",
  "Reconstructive Spine Procedures": "/treatments/revision-spinal-surgery",
  "Spinal Trauma Surgery": "/treatments/revision-spinal-surgery",
  
  // Dr. Slaughter's specialties
  "Minimally Invasive Orthopedic Surgery": "/treatments/motion-preservation-spine-surgery",
  "Reconstructive Surgery for Spinal Injuries": "/treatments/revision-spinal-surgery",
  "Spinal Reconstructive Surgery": "/treatments/revision-spinal-surgery",
  
  // Dr. McPhail-Pruitt's specialties
  "Post-Op Pain Management": "/treatments/non-surgical-treatments-for-pain-management",
  "Perioperative Pain Management": "/treatments/non-surgical-treatments-for-pain-management",
  
  // Common procedures
  "Spinal Fusion": "/treatments/spinal-fusion",
  "ACDF Surgery": "/treatments/acdf-surgery",
  "ACL Reconstruction": "/treatments/acl-reconstruction-surgery",
  "Rotator Cuff Repair": "/treatments/rotator-cuff-repair-surgery",
};

/**
 * Manual override map for conditions that need exact matching
 * ONLY includes pages that actually exist on the site
 */
const CONDITION_OVERRIDES: Record<string, string> = {
  // Dr. Katzman's conditions
  "Herniated Disc": "/conditions/herniated-disc",
  "Spinal Stenosis": "/conditions/spinal-stenosis",
  "Degenerative Disc Disease": "/conditions/degenerative-disc-disease",
  "Sciatica": "/conditions/sciatica",
  "Scoliosis": "/conditions/adult-degenerative-scoliosis",
  // "Spinal Tumors" - No page exists, will display as plain text
  
  // Dr. Cowin's conditions
  "Sacroiliac Fusions": "/conditions/sacroiliac-joint-dysfunction",
  // "General Orthopedic Conditions" - Too broad, no specific page
  // "Upper Extremity Conditions" - Too broad, no specific page
  // "Lower Extremity Conditions" - Too broad, no specific page
  // "Spine Conditions" - Too broad, no specific page
  
  // Dr. McCarthy's conditions
  "Adult Degenerative Spine Issues": "/conditions/degenerative-disc-disease",
  "Spinal Trauma": "/conditions/failed-back-surgery-syndrome",
  "Arthritis": "/conditions/arthritis",
  "Hand Injuries": "/conditions/carpal-tunnel-syndrome",
  "Shoulder/Rotator Cuff Problems": "/conditions/rotator-cuff-tear",
  "Sports-Related Injuries": "/conditions/acl-injury",
  
  // Dr. McPhail-Pruitt's conditions
  "Acute Surgical Pain": "/treatments/non-surgical-treatments-for-pain-management",
  "Chronic Pain Management": "/treatments/non-surgical-treatments-for-pain-management",
  "Postoperative Recovery": "/treatments/non-surgical-treatments-for-pain-management",
  
  // Dr. Slaughter's conditions
  "Sports Injuries": "/conditions/acl-injury",
  "High-Impact Activity Injuries": "/conditions/acl-injury",
  "Age-Related Spine Issues": "/conditions/degenerative-disc-disease",
  // "Musculoskeletal Conditions" - Too broad, no specific page
};

/**
 * Finds the best matching treatment page for a doctor's specialty
 * Returns null if no good match is found (specialty will display as plain text)
 * CONSERVATIVE: Only uses manual overrides to prevent linking to non-existent pages
 */
export function findTreatmentLinkForSpecialty(specialty: string): string | null {
  // Only use manual overrides - no fuzzy matching to avoid broken links
  return SPECIALTY_OVERRIDES[specialty] || null;
}

/**
 * Finds the best matching condition page for a doctor's treated condition
 * Returns null if no good match is found (condition will display as plain text)
 * CONSERVATIVE: Only uses manual overrides to prevent linking to non-existent pages
 */
export function findConditionLinkForCondition(condition: string): string | null {
  // Only use manual overrides - no fuzzy matching to avoid broken links
  return CONDITION_OVERRIDES[condition] || null;
}

