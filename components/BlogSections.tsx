import React from 'react';
import Image from 'next/image';
import { processBlogHTML } from '@/lib/process-blog-html';
import { getAspectRatioClass } from '@/lib/image-utils';

interface BlogSectionsProps {
  sections: Array<{
    header: string;
    body: string;
    img?: string;
    imgRatio?: string;
    sub_stories?: Array<{
      header: string;
      body: string;
      img?: string;
      imgRatio?: string;
    }>;
  }>;
}

/**
 * Server component that renders blog content sections
 * Uses dangerouslySetInnerHTML for rich text since HTML is from trusted Supabase source
 * Processes HTML to ensure links have proper styling
 */
export default function BlogSections({ sections }: BlogSectionsProps) {
  return (
    <>
      {sections.map((section: any, idx: number) => (
        <section key={idx} className="mb-8">
          {section.header && (
            <h2 style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }} className='text-[#111315] text-3xl mb-2'>{section.header}</h2>
          )}
          {section.img && (
            <div className={`w-full relative rounded-2xl overflow-hidden mb-6 ${getAspectRatioClass(section.imgRatio)}`}>
              {section.imgRatio === 'original' ? (
                <Image 
                  src={section.img} 
                  alt={section.header || ''} 
                  width={0}
                  height={0}
                  sizes="100vw"
                  className='w-full h-auto object-contain'
                />
              ) : (
                <Image 
                  src={section.img} 
                  alt={section.header || ''} 
                  fill 
                  className='object-cover object-center' 
                />
              )}
            </div>
          )}
          <div 
            className='text-[#424959] text-lg mb-4 [&_p]:mb-4 [&_br]:block'
            dangerouslySetInnerHTML={{ __html: processBlogHTML(section.body) }}
          />
          {section.sub_stories && section.sub_stories.length > 0 && (
            <div className="space-y-4">
              {section.sub_stories.map((sub: any, subIdx: number) => (
                <div key={subIdx} className="ml-4">
                  {sub.img && (
                    <div className={`w-full relative rounded-2xl overflow-hidden mb-6 ${getAspectRatioClass(sub.imgRatio)}`}>
                      {sub.imgRatio === 'original' ? (
                        <Image 
                          src={sub.img} 
                          alt={sub.header || ''} 
                          width={0}
                          height={0}
                          sizes="100vw"
                          className='w-full h-auto object-contain'
                        />
                      ) : (
                        <Image 
                          src={sub.img} 
                          alt={sub.header || ''} 
                          fill 
                          className='object-cover object-center' 
                        />
                      )}
                    </div>
                  )}
                  {sub.header && (
                    <h3 style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }} className='text-[#252932] text-xl mb-1'>{sub.header}</h3>
                  )}
                  <div 
                    className='text-[#424959] ml-2 border-l-2 border-gray-200 pl-6 mb-8 text-base [&_p]:mb-4 [&_br]:block'
                    dangerouslySetInnerHTML={{ __html: processBlogHTML(sub.body) }}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  );
}

