// Utility function to detect FAQ content in blog posts
const QUESTION_PREFIXES = ['what', 'how', 'why', 'when', 'where', 'can', 'should', 'is', 'are', 'do', 'does'];

function stripHtml(html: string) {
  return html
    .replace(/<\/?br\s*\/?>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractFaqsFromHtml(html: string | undefined): { question: string; answer: string }[] {
  if (!html) return [];

  const cleanedHtml = html.replace(/\r?\n|\r/g, ' ');
  const faqMatches = cleanedHtml.matchAll(/<strong>(.*?)<\/strong>(.*?)(?=<strong>|$)/gis);
  const results: { question: string; answer: string }[] = [];

  for (const match of faqMatches) {
    const rawQuestion = match[1];
    let rawAnswer = match[2] ?? '';

    const question = stripHtml(rawQuestion);
    const answer = stripHtml(rawAnswer);

    if (!question || !answer) continue;

    const normalized = question.toLowerCase();
    const isQuestion =
      normalized.includes('?') ||
      QUESTION_PREFIXES.some((prefix) => normalized.startsWith(prefix));

    if (!isQuestion) continue;

    results.push({ question, answer });
  }

  return results;
}

export function detectFAQContent(blogInfo: any): { question: string; answer: string }[] | null {
  const content = blogInfo?.blog_info;
  const sections = Array.isArray(content?.blog_info) ? content.blog_info : [];

  const explicitFaqs: { question: string; answer: string }[] = [];
  const explicitSeen = new Set<string>();

  if (Array.isArray(content?.faqs)) {
    content.faqs.forEach((item: any) => {
      const question = stripHtml(typeof item?.question === 'string' ? item.question : '');
      const answer = stripHtml(typeof item?.answer === 'string' ? item.answer : '');

      if (!question || !answer) return;

      const key = `${question.toLowerCase()}|${answer.toLowerCase()}`;
      if (explicitSeen.has(key)) return;
      explicitSeen.add(key);

      explicitFaqs.push({ question, answer });
    });
  }

  if (explicitFaqs.length) {
    return explicitFaqs;
  }

  const htmlFaqs: { question: string; answer: string }[] = [];
  const htmlSeen = new Set<string>();
  const fallbackFaqs: { question: string; answer: string }[] = [];
  const fallbackSeen = new Set<string>();

  sections.forEach((section: any) => {
    extractFaqsFromHtml(section?.body).forEach((faq) => {
      const key = `${faq.question}|${faq.answer}`;
      if (htmlSeen.has(key)) return;
      htmlSeen.add(key);
      htmlFaqs.push(faq);
    });

    const candidates = Array.isArray(section?.sub_stories) ? section.sub_stories : [];

    candidates.forEach((item: any) => {
      const header = item?.header?.trim();
      const body = item?.body;
      if (!header || !body) return;

      const normalizedHeader = header.toLowerCase();
      const isQuestion =
        normalizedHeader.includes('?') ||
        QUESTION_PREFIXES.some((word) => normalizedHeader.startsWith(word));

      if (!isQuestion) return;

      const question = header;
      const answer = stripHtml(body);
      if (!answer) return;

      const key = `${question}|${answer}`;
      if (fallbackSeen.has(key)) return;
      fallbackSeen.add(key);

      fallbackFaqs.push({
        question,
        answer
      });
    });
  });

  if (htmlFaqs.length) {
    return htmlFaqs;
  }

  return fallbackFaqs.length ? fallbackFaqs : null;
}

// Generate FAQPage schema
export function generateFAQPageSchema(faqs: { question: string; answer: string }[], url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": stripHtml(faq.question),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": stripHtml(faq.answer)
      }
    })),
    "url": url
  };
}
