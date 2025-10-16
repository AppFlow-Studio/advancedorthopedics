import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the appropriate image source for a doctor, with fallback to CDN
 * @param doctorSlug - The doctor's slug identifier
 * @param localImage - The imported StaticImageData from local file
 * @param cdnUrl - The CDN fallback URL
 * @returns The appropriate image source
 */
export function getDoctorImageSrc(doctorSlug: string, localImage: any, cdnUrl: string) {
  // For Dr. Shumway, prioritize local image with CDN fallback
  if (doctorSlug === 'dr-clay-shumway') {
    return localImage?.src || cdnUrl;
  }
  return localImage;
}