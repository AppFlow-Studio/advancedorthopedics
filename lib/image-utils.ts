/**
 * Image utility functions for handling aspect ratios in blog images
 */

export type AspectRatio = '16:9' | '4:3' | '1:1' | '21:9' | '3:2' | '9:16' | 'original';

/**
 * Returns Tailwind CSS classes for the given aspect ratio
 * @param ratio - The aspect ratio string or undefined
 * @returns Tailwind CSS classes for the aspect ratio
 */
export function getAspectRatioClass(ratio?: string | null): string {
  if (!ratio || ratio === 'original') {
    return 'w-full h-auto';
  }

  switch (ratio) {
    case '16:9':
      return 'aspect-video';
    case '4:3':
      return 'aspect-[4/3]';
    case '1:1':
      return 'aspect-square';
    case '21:9':
      return 'aspect-[21/9]';
    case '3:2':
      return 'aspect-[3/2]';
    case '9:16':
      return 'aspect-[9/16]';
    default:
      // Fallback to 16:9 if unknown ratio
      return 'aspect-video';
  }
}

