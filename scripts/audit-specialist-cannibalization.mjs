/**
 * Build-time guard for the /find-care condition-specialist tier.
 *
 * Usage: npx tsx scripts/audit-specialist-cannibalization.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { register } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptsDir = pathToFileURL(
  `${path.dirname(fileURLToPath(import.meta.url))}/`,
);
register("./asset-stub-loader.mjs", scriptsDir);
register("./server-only-stub-loader.mjs", scriptsDir);
globalThis.React = globalThis.React ?? {
  createElement: () => null,
  Fragment: Symbol.for("react.fragment"),
};

const { SpecialistPages } = await import(
  "../components/data/specialists.tsx"
);
const { conditions, conditionContentPlaceholders } = await import(
  "../components/data/conditions.tsx"
);
const { AllTreatmentsCombined } = await import(
  "../components/data/treatments.tsx"
);
const { getConditionMetadata, generateConditionMetadataFallback } = await import(
  "../lib/metadata-seo.ts"
);

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const specialistRouteSource = fs.readFileSync(
  path.join(rootDir, "app/find-care/[specialistSlug]/page.tsx"),
  "utf8",
);
const conditionRouteSource = fs.readFileSync(
  path.join(rootDir, "app/conditions/[slug]/ConditionPage.tsx"),
  "utf8",
);

const failures = [];
const allConditions = [...conditions, ...conditionContentPlaceholders];
const conditionBySlug = new Map(allConditions.map((condition) => [condition.slug, condition]));
const treatmentSlugs = new Set(AllTreatmentsCombined.map((treatment) => treatment.slug));
const seenConditionSlugs = new Set();
const requiredFaqs = [
  "Do I need a referral?",
  "How soon can I be seen?",
  "Are you open on weekends?",
  "What insurance do you accept?",
];

const count = (source, needle) => source.split(needle).length - 1;
const wordCount = (value) => value.trim().split(/\s+/).filter(Boolean).length;

for (const page of SpecialistPages) {
  if (!/\b(?:specialist|doctor)\b/i.test(page.h1)) {
    failures.push(`h1 ${page.slug}: must contain Specialist or Doctor`);
  }
  if (!/\b(?:specialist|doctor)\b/i.test(page.metaTitle)) {
    failures.push(`title ${page.slug}: must contain Specialist or Doctor`);
  }
  if (page.metaTitle.length > 60) {
    failures.push(`title ${page.slug}: ${page.metaTitle.length} characters (max 60)`);
  }
  if (page.metaDescription.length > 155) {
    failures.push(
      `description ${page.slug}: ${page.metaDescription.length} characters (max 155)`,
    );
  }

  const introWords = wordCount(page.intro);
  if (introWords < 60 || introWords > 90) {
    failures.push(`intro ${page.slug}: ${introWords} words (required 60-90)`);
  }

  if (!page.relatedConditionSlug || !conditionBySlug.has(page.relatedConditionSlug)) {
    failures.push(`condition ${page.slug}: missing or unknown sibling condition`);
  } else {
    if (seenConditionSlugs.has(page.relatedConditionSlug)) {
      failures.push(
        `condition ${page.slug}: sibling ${page.relatedConditionSlug} is not unique`,
      );
    }
    seenConditionSlugs.add(page.relatedConditionSlug);

    const condition = conditionBySlug.get(page.relatedConditionSlug);
    const metadata =
      getConditionMetadata(page.relatedConditionSlug) ??
      generateConditionMetadataFallback(condition.title);
    if (/near me|\bbook\b/i.test(metadata.metaTitle)) {
      failures.push(
        `condition title ${page.relatedConditionSlug}: contains booking-intent language`,
      );
    }
  }

  for (const slug of page.relatedTreatmentSlugs ?? []) {
    if (!treatmentSlugs.has(slug)) {
      failures.push(`treatment ${page.slug}: unknown treatment slug ${slug}`);
    }
  }

  if (page.faqs.length < 6) {
    failures.push(`faqs ${page.slug}: ${page.faqs.length} entries (minimum 6)`);
  }
  for (const question of requiredFaqs) {
    if (!page.faqs.some((faq) => faq.question === question)) {
      failures.push(`faqs ${page.slug}: missing "${question}"`);
    }
  }
  // Approved 2026-09-08: the practice accepts PPO plans only. The FAQ must say
  // so, and no unreplaced template token may survive anywhere in page content.
  const insuranceFaq = page.faqs.find(
    (faq) => faq.question === "What insurance do you accept?",
  );
  if (!/PPO insurance plans only/.test(insuranceFaq?.answer ?? "")) {
    failures.push(`insurance ${page.slug}: FAQ answer must state PPO insurance plans only`);
  }

  const serialized = JSON.stringify(page);
  if (/\{\{[^}]*\}\}/.test(serialized)) {
    failures.push(`content ${page.slug}: contains an unreplaced {{...}} template token`);
  }
  if (/physical therapy/i.test(serialized)) {
    failures.push(`content ${page.slug}: contains prohibited service language`);
  }
  if (page.physicianSlugs.includes("dr-scott-katzman")) {
    failures.push(`physician ${page.slug}: excluded physician is present`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(page.updatedAt)) {
    failures.push(`updatedAt ${page.slug}: must be an ISO calendar date`);
  }
}

const h2Text = [...specialistRouteSource.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)]
  .map((match) => match[1].replace(/<[^>]+>|\{[^}]+\}/g, " ").replace(/\s+/g, " ").trim())
  .filter(Boolean);
for (const heading of h2Text) {
  if (/what\s+(?:is|are|causes)\b/i.test(heading)) {
    failures.push(`specialist H2: prohibited research-intent heading "${heading}"`);
  }
}

if (
  count(
    specialistRouteSource,
    "href={`/conditions/${page.relatedConditionSlug}`}",
  ) !== 1
) {
  failures.push("cross-link: specialist template must link to its condition exactly once");
}
if (
  count(conditionRouteSource, "href={`/find-care/${specialistPage.slug}`}") !== 1
) {
  failures.push("cross-link: condition template must link to its specialist exactly once");
}

if (failures.length > 0) {
  console.error("Specialist cannibalization audit failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Specialist cannibalization audit passed for ${SpecialistPages.length} pages.`,
);
