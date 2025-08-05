import Image from 'next/image';

const ImageWithOverlay = ({ src, alt, overlayColor, overlayOpacity  }) => {
  return (
    <div className='relative w-full'>
      <Image src={src} alt={alt} fill className='object-cover object-center aspect-video w-full' />
      <div
        className='absolute w-full h-full left-0 top-0'
        style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
      />
    </div>
  );
};

export default ImageWithOverlay;
