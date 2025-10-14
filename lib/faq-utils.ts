// Utility function to detect FAQ content in blog posts
export function detectFAQContent(blogInfo: any): { question: string; answer: string }[] | null {
  if (!blogInfo?.blog_info) return null;
  
  const faqs: { question: string; answer: string }[] = [];
  
  // Handle both array and object structures
  const blogInfoData = Array.isArray(blogInfo.blog_info) 
    ? blogInfo.blog_info 
    : [blogInfo.blog_info];
  
  // Check if blog_info contains FAQ-like content
  blogInfoData.forEach((section: any) => {
    if (section.sub_stories) {
      section.sub_stories.forEach((sub: any) => {
        // Look for question-like patterns in headers
        const header = sub.header?.toLowerCase() || '';
        const isQuestion = header.includes('?') || 
                          header.includes('what') || 
                          header.includes('how') || 
                          header.includes('why') || 
                          header.includes('when') || 
                          header.includes('where') ||
                          header.includes('can') ||
                          header.includes('should') ||
                          header.includes('is') ||
                          header.includes('are');
        
        if (isQuestion && sub.body) {
          faqs.push({
            question: sub.header,
            answer: sub.body.replace(/<[^>]*>/g, '') // Strip HTML tags
          });
        }
      });
    }
  });
  
  return faqs.length > 0 ? faqs : null;
}

// Generate FAQPage schema
export function generateFAQPageSchema(faqs: { question: string; answer: string }[], url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
    "url": url
  };
}
