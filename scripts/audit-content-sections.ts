/**
 * Content sections audit script (read-only).
 * Reports which condition and treatment pages are missing or have empty content sections.
 *
 * Run from project root:
 *   npm run audit:content
 * or
 *   npx tsx scripts/audit-content-sections.ts
 *
 * Does not modify any data or config. Does not audit body-part hub pages (e.g. /conditions/spine).
 */

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const MIN_LEN = {
  tiny: 15,   // single phrase
  short: 30,  // sentence
  medium: 50, // paragraph stub
  long: 100,  // substantial
} as const;

function stripHtml(s: string): string {
  if (typeof s !== 'string') return '';
  return s.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').replace(/\*\*([^*]+)\*\*/g, '$1').trim();
}

function hasText(
  value: string | undefined | null,
  minLen: number = MIN_LEN.short,
  strip = true
): boolean {
  if (value == null) return false;
  const text = typeof value === 'string' ? value : String(value);
  const checked = strip ? stripHtml(text) : text.trim();
  return checked.length >= minLen;
}

function hasList(arr: unknown[] | undefined | null, minItems = 1): boolean {
  if (!Array.isArray(arr)) return false;
  const nonEmpty = arr.filter((x) => x != null && String(x).trim().length > 0);
  return nonEmpty.length >= minItems;
}

type SectionCheck = { name: string; empty: boolean; note?: string };

// ---------------------------------------------------------------------------
// Conditions – new format (ConditionContent)
// ---------------------------------------------------------------------------

function auditConditionContent(c: {
  slug: string;
  title: string;
  overview?: { heading?: string; body?: string };
  detailedOverview?: string;
  symptoms?: { heading?: string; intro?: string; list?: string[] };
  heroImage?: unknown;
  heroImageAlt?: string;
  causes?: { heading?: string; body?: string };
  conservativeCare?: { heading?: string; body?: string; methods?: string[] };
  surgeryOption?: { heading?: string; description?: string; slug?: string };
  keywords?: string[];
  metaTitle?: string;
  metaDesc?: string;
}): SectionCheck[] {
  const checks: SectionCheck[] = [];
  const o = c.overview;
  const s = c.symptoms;
  const ca = c.causes;
  const cc = c.conservativeCare;

  checks.push({
    name: 'overview.heading',
    empty: !hasText(o?.heading, MIN_LEN.tiny, false),
  });
  checks.push({
    name: 'overview.body',
    empty: !hasText(o?.body, MIN_LEN.medium),
  });
  checks.push({
    name: 'symptoms.heading',
    empty: !hasText(s?.heading, MIN_LEN.tiny, false),
  });
  checks.push({
    name: 'symptoms.intro',
    empty: !hasText(s?.intro, MIN_LEN.short),
  });
  checks.push({
    name: 'symptoms.list',
    empty: !hasList(s?.list ?? [], 1),
    note: s?.list ? `${(s.list.filter((x) => hasText(x, 1))).length} items` : '0 items',
  });
  checks.push({
    name: 'heroImage',
    empty: c.heroImage == null || (typeof c.heroImage === 'string' && c.heroImage.trim().length === 0),
  });
  checks.push({
    name: 'heroImageAlt',
    empty: !hasText(c.heroImageAlt, MIN_LEN.tiny, false),
  });
  checks.push({
    name: 'causes.heading',
    empty: !hasText(ca?.heading, MIN_LEN.tiny, false),
  });
  checks.push({
    name: 'causes.body',
    empty: !hasText(ca?.body, MIN_LEN.medium),
  });
  checks.push({
    name: 'conservativeCare.heading',
    empty: !hasText(cc?.heading, MIN_LEN.tiny, false),
  });
  checks.push({
    name: 'conservativeCare.body',
    empty: !hasText(cc?.body, MIN_LEN.short),
  });
  checks.push({
    name: 'conservativeCare.methods',
    empty: !hasList(cc?.methods ?? [], 1),
    note: cc?.methods ? `${(cc.methods.filter((x) => hasText(x, 1))).length} items` : '0 items',
  });
  // Optional but recommended
  checks.push({
    name: 'detailedOverview (optional)',
    empty: !hasText(c.detailedOverview, MIN_LEN.medium),
  });
  checks.push({
    name: 'surgeryOption (optional)',
    empty: !c.surgeryOption || !hasText(c.surgeryOption.description, MIN_LEN.short),
  });

  return checks;
}

// ---------------------------------------------------------------------------
// Conditions – legacy (ConditionInfoProp)
// ---------------------------------------------------------------------------

function auditConditionLegacy(c: {
  slug: string;
  title: string;
  body?: string;
  detail?: string;
  what_sym?: string;
  risk_fac?: string;
  diagnose?: string | unknown;
  treatment?: string;
  pain_info?: string;
  prevent?: string;
  why_choose_us?: string;
  schedule?: string;
}): SectionCheck[] {
  const checks: SectionCheck[] = [];

  checks.push({ name: 'body', empty: !hasText(c.body, MIN_LEN.short) });
  checks.push({ name: 'detail', empty: !hasText(c.detail, MIN_LEN.medium) });
  checks.push({ name: 'what_sym (symptoms)', empty: !hasText(c.what_sym, MIN_LEN.short) });
  checks.push({ name: 'risk_fac', empty: !hasText(c.risk_fac, MIN_LEN.short) });
  checks.push({
    name: 'diagnose',
    empty: c.diagnose == null || (typeof c.diagnose === 'string' && !hasText(c.diagnose, MIN_LEN.short)),
  });
  checks.push({ name: 'treatment', empty: !hasText(c.treatment, MIN_LEN.short) });
  checks.push({ name: 'pain_info (optional)', empty: !hasText(c.pain_info, MIN_LEN.short) });
  checks.push({ name: 'prevent (optional)', empty: !hasText(c.prevent, MIN_LEN.short) });
  checks.push({ name: 'why_choose_us (optional)', empty: !hasText(c.why_choose_us, MIN_LEN.short) });
  checks.push({ name: 'schedule', empty: !hasText(c.schedule, MIN_LEN.short) });

  return checks;
}

// ---------------------------------------------------------------------------
// Treatments – new format (TreatmentContent)
// ---------------------------------------------------------------------------

function auditTreatmentContent(t: {
  slug: string;
  title: string;
  overview?: { heading?: string; body?: string };
  heroDescription?: string;
  candidates?: { heading?: string; list?: string[] };
  procedure?: { heading?: string; steps?: string[] };
  recovery?: { heading?: string; timeline?: string; details?: string };
  benefits?: string[];
  heroImage?: unknown;
  schedule?: string;
  insurance?: { heading?: string; body?: string };
}): SectionCheck[] {
  const checks: SectionCheck[] = [];

  checks.push({
    name: 'overview.body',
    empty: !hasText(t.overview?.body, MIN_LEN.medium),
  });
  checks.push({
    name: 'candidates.list',
    empty: !hasList(t.candidates?.list ?? [], 1),
    note: t.candidates?.list ? `${(t.candidates.list.filter((x) => hasText(x, 1))).length} items` : '0 items',
  });
  checks.push({
    name: 'procedure.steps',
    empty: !hasList(t.procedure?.steps ?? [], 1),
    note: t.procedure?.steps ? `${(t.procedure.steps.filter((x) => hasText(x, 1))).length} steps` : '0 steps',
  });
  checks.push({
    name: 'recovery.details',
    empty: !hasText(t.recovery?.details, MIN_LEN.short),
  });
  checks.push({
    name: 'benefits',
    empty: !hasList(t.benefits ?? [], 1),
    note: t.benefits ? `${(t.benefits.filter((x) => hasText(x, 1))).length} items` : '0 items',
  });
  checks.push({
    name: 'heroImage',
    empty: t.heroImage == null || (typeof t.heroImage === 'string' && t.heroImage.trim().length === 0),
  });
  checks.push({
    name: 'schedule',
    empty: !hasText(t.schedule, MIN_LEN.short),
  });
  checks.push({
    name: 'heroDescription (optional)',
    empty: !hasText(t.heroDescription, MIN_LEN.short),
  });
  checks.push({
    name: 'insurance (optional)',
    empty: !t.insurance || !hasText(t.insurance.body, MIN_LEN.short),
  });

  return checks;
}

// ---------------------------------------------------------------------------
// Treatments – legacy (TreatmentsCardProp)
// ---------------------------------------------------------------------------

function auditTreatmentLegacy(t: {
  slug: string;
  title: string;
  body?: string;
  detail?: string;
  conditions_treated?: string;
  procedure_info?: string;
  recovery_info?: string;
  benefits?: string | unknown;
  schedule?: string;
  why_choose_us?: string;
}): SectionCheck[] {
  const checks: SectionCheck[] = [];

  checks.push({ name: 'body', empty: !hasText(t.body, MIN_LEN.short) });
  checks.push({ name: 'detail', empty: !hasText(t.detail, MIN_LEN.medium) });
  checks.push({
    name: 'conditions_treated',
    empty: !hasText(t.conditions_treated, MIN_LEN.short),
  });
  checks.push({
    name: 'procedure_info',
    empty: !hasText(t.procedure_info, MIN_LEN.short),
  });
  checks.push({
    name: 'recovery_info',
    empty: !hasText(t.recovery_info, MIN_LEN.short),
  });
  const benefitsOk =
    t.benefits != null &&
    (typeof t.benefits === 'string' ? hasText(t.benefits, MIN_LEN.short) : true);
  checks.push({
    name: 'benefits',
    empty: !benefitsOk,
    note: typeof t.benefits === 'string' ? `${stripHtml(t.benefits).length} chars` : 'ReactNode',
  });
  checks.push({ name: 'schedule', empty: !hasText(t.schedule, MIN_LEN.short) });
  checks.push({
    name: 'why_choose_us (optional)',
    empty: !hasText(t.why_choose_us, MIN_LEN.short),
  });

  return checks;
}

// ---------------------------------------------------------------------------
// Formatting & SEO quality checks (optional)
// ---------------------------------------------------------------------------

const HAS_RAW_ASTERISKS = /\*\*[^*]+\*\*/;

function collectStrings(obj: Record<string, unknown>, prefix = ''): Array<{ key: string; value: string }> {
  const out: Array<{ key: string; value: string }> = [];
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'string') {
      out.push({ key, value: v });
    } else if (v != null && typeof v === 'object' && !Array.isArray(v)) {
      out.push(...collectStrings(v as Record<string, unknown>, key));
    } else if (Array.isArray(v)) {
      v.forEach((item, i) => {
        if (typeof item === 'string') out.push({ key: `${key}[${i}]`, value: item });
        else if (item != null && typeof item === 'object' && !Array.isArray(item)) {
          out.push(...collectStrings(item as Record<string, unknown>, `${key}[${i}]`));
        }
      });
    }
  }
  return out;
}

function hasInternalLink(s: string): boolean {
  return typeof s === 'string' && /<a\s+href=["']\//.test(s);
}

function auditRawAsterisks(
  conditionNew: Array<Record<string, unknown>>,
  conditionLegacy: Array<Record<string, unknown>>,
  treatmentNew: Array<Record<string, unknown>>,
  treatmentLegacy: Array<Record<string, unknown>>
): { lines: string[]; count: number } {
  const lines: string[] = [];
  let count = 0;
  const check = (slug: string, title: string, items: Array<{ key: string; value: string }>) => {
    const withAsterisks = items.filter(({ value }) => HAS_RAW_ASTERISKS.test(value));
    if (withAsterisks.length > 0) {
      count++;
      lines.push(`  ${slug} (${title})`);
      withAsterisks.forEach(({ key }) => lines.push(`    - ${key}`));
      lines.push('');
    }
  };
  lines.push('Raw ** (markdown bold) in content – ensure page renders with processTextWithBoldAndLinks:');
  lines.push('');
  conditionNew.forEach((c) => {
    const slug = `conditions/${(c.slug as string)}`;
    check(slug, (c.title as string) ?? '', collectStrings(c));
  });
  conditionLegacy.forEach((c) => {
    const slug = `conditions/${(c.slug as string)}`;
    check(slug, (c.title as string) ?? '', collectStrings(c));
  });
  treatmentNew.forEach((t) => {
    const slug = `treatments/${(t.slug as string)}`;
    check(slug, (t.title as string) ?? '', collectStrings(t));
  });
  treatmentLegacy.forEach((t) => {
    const slug = `treatments/${(t.slug as string)}`;
    check(slug, (t.title as string) ?? '', collectStrings(t));
  });
  if (count === 0) {
    return { lines: ['Raw ** (markdown bold): None found in content.', ''], count: 0 };
  }
  return { lines, count };
}

function auditLegacyListMarkup(treatmentLegacy: Array<Record<string, unknown>>): { lines: string[]; count: number } {
  const lines: string[] = [];
  let count = 0;
  lines.push('Legacy treatments with procedure_info or benefits lacking <ol>/<ul> list markup:');
  lines.push('');
  treatmentLegacy.forEach((t) => {
    const slug = `treatments/${(t.slug as string)}`;
    const title = (t.title as string) ?? '';
    const proc = typeof t.procedure_info === 'string' ? t.procedure_info : '';
    const benefits = typeof t.benefits === 'string' ? t.benefits : '';
    const procLong = proc.length >= 50;
    const benefitsLong = benefits.length >= 50;
    const procNoList = procLong && !/<o[l]?\s|<\/li>/.test(proc);
    const benefitsNoList = benefitsLong && !/<u[l]?\s|<\/li>/.test(proc) && !/<u[l]|\<\/li>/.test(benefits);
    if (procNoList || benefitsNoList) {
      count++;
      lines.push(`  ${slug} (${title})`);
      if (procNoList) lines.push('    - procedure_info');
      if (benefitsNoList) lines.push('    - benefits');
      lines.push('');
    }
  });
  if (count === 0) {
    return { lines: ['Legacy list markup: All checked legacy treatments use list markup where appropriate.', ''], count: 0 };
  }
  return { lines, count };
}

function auditInternalLinks(
  conditionNew: Array<Record<string, unknown>>,
  conditionLegacy: Array<Record<string, unknown>>,
  treatmentNew: Array<Record<string, unknown>>,
  treatmentLegacy: Array<Record<string, unknown>>
): { lines: string[]; count: number } {
  const lines: string[] = [];
  let count = 0;
  const getMainBody = (obj: Record<string, unknown>) => {
    const o = obj as Record<string, unknown>;
    return (o.overview as { body?: string })?.body ?? (o.detail as string) ?? (o.body as string) ?? '';
  };
  const check = (slug: string, title: string, mainBody: string) => {
    if (mainBody.length >= 30 && !hasInternalLink(mainBody)) {
      count++;
      lines.push(`  ${slug} (${title})`);
    }
  };
  lines.push('Pages with main body/overview/detail that have no internal links (<a href="/...">):');
  lines.push('');
  conditionNew.forEach((c) => check(`conditions/${c.slug}`, (c.title as string) ?? '', getMainBody(c as Record<string, unknown>)));
  conditionLegacy.forEach((c) => check(`conditions/${c.slug}`, (c.title as string) ?? '', getMainBody(c as Record<string, unknown>)));
  treatmentNew.forEach((t) => check(`treatments/${t.slug}`, (t.title as string) ?? '', getMainBody(t as Record<string, unknown>)));
  treatmentLegacy.forEach((t) => check(`treatments/${t.slug}`, (t.title as string) ?? '', getMainBody(t as Record<string, unknown>)));
  if (count > 0) lines.push('');
  if (count === 0) {
    return { lines: ['Internal links: All checked pages have at least one internal link in main content.', ''], count: 0 };
  }
  return { lines, count };
}

// ---------------------------------------------------------------------------
// Report formatting
// ---------------------------------------------------------------------------

function reportSectionIssues(
  label: string,
  items: { slug: string; title: string; checks: SectionCheck[] }[]
): { total: number; withIssues: number; lines: string[] } {
  const withIssues = items.filter((item) => item.checks.some((c) => c.empty));
  const lines: string[] = [];

  if (withIssues.length === 0) {
    lines.push(`${label}: All ${items.length} page(s) have required sections filled.`);
    return { total: items.length, withIssues: 0, lines };
  }

  lines.push(`${label}: ${withIssues.length} of ${items.length} page(s) missing or thin content in at least one section.`);
  lines.push('');

  for (const item of withIssues) {
    const missing = item.checks.filter((c) => c.empty);
    lines.push(`  /${item.slug}`);
    lines.push(`    Title: ${item.title}`);
    lines.push(`    Missing or empty (${missing.length}): ${missing.map((m) => m.name).join(', ')}`);
    for (const m of missing) {
      if (m.note) lines.push(`      - ${m.name}: ${m.note}`);
    }
    lines.push('');
  }

  return { total: items.length, withIssues: withIssues.length, lines };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const DEFAULT_AUDIT_DATA_URL = 'http://127.0.0.1:3000/api/audit-content-data';

async function main() {
  const baseUrl = process.env.AUDIT_DATA_URL ?? DEFAULT_AUDIT_DATA_URL;

  let conditions: Array<Record<string, unknown>>;
  let conditionContentPlaceholders: Array<Record<string, unknown>>;
  let AllTreatments: Array<Record<string, unknown>>;
  let allTreatmentContent: Array<Record<string, unknown>>;

  try {
    const res = await fetch(baseUrl);
    if (!res.ok) {
      console.error(`Audit failed: ${baseUrl} returned ${res.status} ${res.statusText}`);
      process.exit(1);
    }
    const data = (await res.json()) as {
      conditions: Array<Record<string, unknown>>;
      conditionContentPlaceholders: Array<Record<string, unknown>>;
      AllTreatments: Array<Record<string, unknown>>;
      allTreatmentContent: Array<Record<string, unknown>>;
    };
    conditions = data.conditions;
    conditionContentPlaceholders = data.conditionContentPlaceholders;
    AllTreatments = data.AllTreatments;
    allTreatmentContent = data.allTreatmentContent;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes('fetch') || msg.includes('ECONNREFUSED') || msg.includes('ENOTFOUND')) {
      console.error('Audit failed: could not reach the dev server.');
      console.error('Start the dev server (npm run dev), then run: npm run audit:content');
      console.error('Override URL with: AUDIT_DATA_URL=<url> npm run audit:content');
    } else {
      console.error('Audit failed:', msg);
    }
    process.exit(1);
  }

  const newConditionSlugs = new Set(
    (conditionContentPlaceholders as Array<{ slug: string }>).map((c) => c.slug)
  );
  const newTreatmentSlugs = new Set(
    (allTreatmentContent as Array<{ slug: string }>).map((t) => t.slug)
  );

  // Conditions: new-format pages (conditionContentPlaceholders)
  const conditionNewItems = (conditionContentPlaceholders as Array<{ slug: string; title: string; [k: string]: unknown }>).map(
    (c) => ({
      slug: `conditions/${c.slug}`,
      title: c.title,
      checks: auditConditionContent(c),
    })
  );

  // Conditions: legacy-only pages (conditions not in conditionContentPlaceholders)
  const conditionLegacyItems = (conditions as Array<{ slug: string; title: string; [k: string]: unknown }>)
    .filter((c) => !newConditionSlugs.has(c.slug))
    .map((c) => ({
      slug: `conditions/${c.slug}`,
      title: c.title,
      checks: auditConditionLegacy(c),
    }));

  // Treatments: new-format pages (allTreatmentContent)
  const treatmentNewItems = (allTreatmentContent as Array<{ slug: string; title: string; [k: string]: unknown }>).map(
    (t) => ({
      slug: `treatments/${t.slug}`,
      title: t.title,
      checks: auditTreatmentContent(t),
    })
  );

  // Treatments: legacy-only pages (AllTreatments not in allTreatmentContent)
  const treatmentLegacyItems = (AllTreatments as Array<{ slug: string; title: string; [k: string]: unknown }>)
    .filter((t) => !newTreatmentSlugs.has(t.slug))
    .map((t) => ({
      slug: `treatments/${t.slug}`,
      title: t.title,
      checks: auditTreatmentLegacy(t),
    }));

  // Build report
  const out: string[] = [];
  out.push('========================================');
  out.push('CONTENT SECTIONS AUDIT (read-only)');
  out.push('Pages with missing or empty sections');
  out.push('========================================');
  out.push('');

  const r1 = reportSectionIssues('Conditions (new format)', conditionNewItems);
  out.push(...r1.lines);
  if (r1.withIssues > 0) out.push('');

  const r2 = reportSectionIssues('Conditions (legacy)', conditionLegacyItems);
  out.push(...r2.lines);
  if (r2.withIssues > 0) out.push('');

  const r3 = reportSectionIssues('Treatments (new format)', treatmentNewItems);
  out.push(...r3.lines);
  if (r3.withIssues > 0) out.push('');

  const r4 = reportSectionIssues('Treatments (legacy)', treatmentLegacyItems);
  out.push(...r4.lines);

  out.push('----------------------------------------');
  out.push('Summary');
  out.push('----------------------------------------');
  out.push(`Conditions (new):  ${r1.withIssues}/${r1.total} with missing/empty sections`);
  out.push(`Conditions (legacy): ${r2.withIssues}/${r2.total} with missing/empty sections`);
  out.push(`Treatments (new):  ${r3.withIssues}/${r3.total} with missing/empty sections`);
  out.push(`Treatments (legacy): ${r4.withIssues}/${r4.total} with missing/empty sections`);
  out.push('');
  const totalWithIssues = r1.withIssues + r2.withIssues + r3.withIssues + r4.withIssues;
  const totalPages = r1.total + r2.total + r3.total + r4.total;
  out.push(`Total: ${totalWithIssues} of ${totalPages} pages have at least one section missing or empty.`);
  out.push('');

  // Formatting & SEO quality checks (optional)
  out.push('========================================');
  out.push('FORMATTING & SEO (optional checks)');
  out.push('========================================');
  out.push('');

  const conditionLegacyData = (conditions as Array<Record<string, unknown>>).filter((c) => !newConditionSlugs.has((c.slug as string)));
  const treatmentLegacyData = (AllTreatments as Array<Record<string, unknown>>).filter((t) => !newTreatmentSlugs.has((t.slug as string)));

  const asteriskReport = auditRawAsterisks(
    conditionContentPlaceholders as Array<Record<string, unknown>>,
    conditionLegacyData,
    allTreatmentContent as Array<Record<string, unknown>>,
    treatmentLegacyData
  );
  out.push(...asteriskReport.lines);

  const listMarkupReport = auditLegacyListMarkup(treatmentLegacyData);
  out.push(...listMarkupReport.lines);

  const internalLinksReport = auditInternalLinks(
    conditionContentPlaceholders as Array<Record<string, unknown>>,
    conditionLegacyData,
    allTreatmentContent as Array<Record<string, unknown>>,
    treatmentLegacyData
  );
  out.push(...internalLinksReport.lines);

  console.log(out.join('\n'));
}

main().catch((err) => {
  console.error('Audit script failed:', err);
  process.exit(1);
});
