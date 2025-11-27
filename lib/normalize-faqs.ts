import type { BlogFAQItem } from '@/components/BlogPostCard';

/**
 * Normalizes FAQ items from blog data, removing duplicates and empty entries
 * @param faqs - Array of FAQ items from blog data
 * @returns Normalized array of FAQ items
 */
export function normalizeFAQs(faqs: any[]): BlogFAQItem[] {
  const seen = new Set<string>();
  const items = Array.isArray(faqs) ? faqs : [];
  const normalized: BlogFAQItem[] = [];

  items.forEach((item: any) => {
    const question = typeof item?.question === 'string' ? item.question.trim() : '';
    const rawAnswer = typeof item?.answer === 'string' ? item.answer : '';
    const answer = rawAnswer.trim();

    if (!question || !answer) return;

    const key = `${question.toLowerCase()}|${answer.toLowerCase()}`;
    if (seen.has(key)) return;
    seen.add(key);

    normalized.push({
      question,
      answer: rawAnswer,
    });
  });

  return normalized;
}

