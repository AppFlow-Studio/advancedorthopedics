import React from 'react';
import type { StaticImageData } from 'next/image';

interface GradientOverlayImageProps {
  // Accepts either a string (URL) or a StaticImageData object
  imageData: string | StaticImageData;
  height?: string | number; // You can use any valid CSS height value, e.g. '400px', '50vh'
  gradient?: string; // To allow custom gradient overlays
}

const GradientOverlayImage: React.FC<GradientOverlayImageProps> = ({
  imageData,
  height = '400px',
  gradient = 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)',
}) => {
  // If imageData is an object (StaticImageData), use its src property.
  const imageUrl = typeof imageData === 'string' ? imageData : imageData.src;

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height,
    backgroundImage: `${gradient}, url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  };

  return (
    <div style={containerStyle} className='aspect-video rounded-[20px]'/> 
  );
};

export default GradientOverlayImage;
