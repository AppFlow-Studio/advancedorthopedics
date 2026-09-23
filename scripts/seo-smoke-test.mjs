/**
 * SEO regression smoke test.
 *
 * Each assertion here corresponds to a class of bug that actually reached
 * production, not a hypothetical. Run it against a production-equivalent
 * server (`npm run build && npm start`) or against production itself:
 *
 *   node scripts/seo-smoke-test.mjs
 *   node scripts/seo-smoke-test.mjs https://mountainspineorthopedics.com
 *
 * Exits non-zero on the first failing class so it can gate a deploy.
 */

const BASE = (process.argv[2] || process.env.SEO_SMOKE_BASE || "http://localhost:3000").replace(/\/$/, "");
const CANONICAL_HOST = "https://mountainspineorthopedics.com";

/** Pages that exercise every template involved in the known regressions. */
const PAGES = [
  "/conditions/adult-degenerative-scoliosis",
  "/conditions/spine-deformities",
  "/conditions/sciatica",
  "/conditions/herniated-disc",
  "/conditions/slap-tear",
  "/treatments/adult-scoliosis-surgery",
  "/treatments/spinal-fusion",
  "/treatments/acromioplasty",
  "/find-care/scoliosis-doctor",
  "/find-care/spine-specialist",
  "/about/faqs",
];

/** old path → the single destination it must reach, permanently and in one hop. */
const REDIRECTS = {
  "/locations/miami-beach-orthopedics": "/locations/florida/south-miami-orthopedics",
  "/locations/florida/miami-beach-orthopedics": "/locations/florida/south-miami-orthopedics",
};

/**
 * Brand strings that must never appear in a <title>. "Spine & Orthopedic
 * Specialists" names no Mountain Spine entity, closely matches an unrelated
 * orthopedic brand, and was applied to shoulder/knee/hip pages as well.
 */
const BANNED_TITLE_BRANDS = ["Spine & Orthopedic Specialists", "Spine and Orthopedic Specialists"];

const failures = [];
const fail = (page, msg) => failures.push(`${page}: ${msg}`);

const stripScripts = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, "");

/**
 * Sitewide chrome. Its links repeat on every page, so the footer's own "FAQs"
 * entry legitimately points at /about/faqs while that page is being rendered.
 * Only in-content self-links are a defect.
 */
const stripChrome = (html) =>
  html.replace(/<(nav|footer|header)\b[\s\S]*?<\/\1>/gi, "");

const decode = (s) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

function ldJsonObjects(html) {
  const out = [];
  const re = /<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    let parsed;
    try {
      parsed = JSON.parse(decode(m[1]).replace(/\\u003c/g, "<"));
    } catch {
      out.push({ __parseError: true });
      continue;
    }
    const items = Array.isArray(parsed) ? parsed : parsed["@graph"] || [parsed];
    for (const it of items) if (it && typeof it === "object") out.push(it);
  }
  return out;
}

/** Collapse markup + entities to comparable plain text. */
const plain = (s) =>
  decode(s.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();

async function checkPage(path) {
  const url = `${BASE}${path}`;
  let res;
  try {
    res = await fetch(url, { redirect: "follow" });
  } catch (err) {
    fail(path, `request failed: ${err.message}`);
    return;
  }
  if (res.status !== 200) {
    fail(path, `expected 200, got ${res.status}`);
    return;
  }
  const html = await res.text();
  const visible = stripScripts(html);

  // 1. Title exists, is unique-ish, and carries no competitor-like brand.
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  if (!titleMatch) {
    fail(path, "no <title>");
  } else {
    const title = plain(titleMatch[1]);
    for (const banned of BANNED_TITLE_BRANDS) {
      if (title.includes(banned)) fail(path, `title carries banned brand "${banned}" — ${title}`);
    }
    if (!title.trim()) fail(path, "empty <title>");
  }

  // 2. Exactly one self-referencing canonical on the canonical host.
  const canons = [...html.matchAll(/<link[^>]+rel="canonical"[^>]*>/gi)].map((m) => {
    const href = m[0].match(/href="([^"]+)"/i);
    return href ? href[1] : null;
  });
  if (canons.length !== 1) {
    fail(path, `expected exactly 1 canonical, found ${canons.length}`);
  } else if (canons[0] !== `${CANONICAL_HOST}${path}`) {
    fail(path, `canonical is ${canons[0]}, expected ${CANONICAL_HOST}${path}`);
  }

  // 3. Exactly one H1.
  const h1s = [...visible.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1s.length !== 1) fail(path, `expected exactly 1 <h1>, found ${h1s.length}`);
  else if (!plain(h1s[0][1])) fail(path, "empty <h1>");

  // 4. No self-link. A page must not link to its own canonical path.
  //    Nav items for the current page render as non-anchors with aria-current.
  const selfHrefs = [
    ...stripChrome(visible).matchAll(
      new RegExp(`href="${path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`, "g")
    ),
  ];
  if (selfHrefs.length > 0) fail(path, `${selfHrefs.length} self-link(s) to ${path}`);

  // 5. Structured data: at most one FAQPage, and every answer it asserts must
  //    actually appear in the rendered document. A collapsed accordion that
  //    mounts answers only on click silently breaks this.
  const ld = ldJsonObjects(html);
  if (ld.some((o) => o.__parseError)) fail(path, "un-parseable ld+json block");
  const faqPages = ld.filter((o) => o["@type"] === "FAQPage");
  if (faqPages.length > 1) fail(path, `${faqPages.length} FAQPage objects (max 1)`);
  for (const faq of faqPages) {
    for (const q of faq.mainEntity || []) {
      const answer = q?.acceptedAnswer?.text;
      if (!answer || !plain(String(answer))) {
        fail(path, `FAQ "${q?.name}" has an empty acceptedAnswer`);
        continue;
      }
      // Compare on a distinctive slice; markup may split the full string.
      const probe = plain(String(answer)).slice(0, 60);
      if (probe && !plain(visible).includes(probe)) {
        fail(path, `FAQ answer not in rendered HTML: "${q?.name}" → "${probe}…"`);
      }
    }
  }

  // 6. Body has substantive prerendered content (guards blank-app-shell).
  const textLength = plain(visible).length;
  if (textLength < 2000) fail(path, `only ${textLength} chars of rendered text — possible empty shell`);
}

async function checkRedirect(from, to) {
  let res;
  try {
    res = await fetch(`${BASE}${from}`, { redirect: "manual" });
  } catch (err) {
    fail(from, `request failed: ${err.message}`);
    return;
  }
  if (![301, 308].includes(res.status)) {
    fail(from, `expected a permanent redirect, got ${res.status}`);
    return;
  }
  const loc = res.headers.get("location");
  const locPath = loc?.replace(/^https?:\/\/[^/]+/, "");
  if (locPath !== to) {
    fail(from, `redirects to ${locPath}, expected ${to}`);
    return;
  }
  const final = await fetch(`${BASE}${to}`, { redirect: "manual" });
  if (final.status !== 200) fail(from, `destination ${to} returned ${final.status} (redirect chain)`);
}

console.log(`SEO smoke test against ${BASE}\n`);
for (const p of PAGES) await checkPage(p);
for (const [from, to] of Object.entries(REDIRECTS)) await checkRedirect(from, to);

if (failures.length) {
  console.error(`FAILED — ${failures.length} problem(s):\n`);
  failures.forEach((f) => console.error(`- ${f}`));
  process.exit(1);
}
console.log(`Passed: ${PAGES.length} pages, ${Object.keys(REDIRECTS).length} redirects.`);
