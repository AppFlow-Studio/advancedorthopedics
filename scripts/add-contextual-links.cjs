#!/usr/bin/env node
// scripts/add-contextual-links.js
// AUTO-CTX-LINK: Contextual internal linking automation for Next.js App Router

const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const TARGET_URLS = [
  "/area-of-speciality/tinglingornumbnessinextremities",
  "/area-of-speciality/synovitis",
  "/area-of-speciality/hipimpingement",
  "/area-of-speciality/spinalstenosis",
  "/area-of-speciality/kyphosis",
  "/area-of-speciality/failedbackorfailenecksurgerysyndrome",
  "/area-of-speciality/spinalbonespurs",
  "/area-of-speciality/herniateddisc",
  "/area-of-speciality/foraminal-stenosis",
  "/treatments/hybrid-lumbar-spine-surgery",
  "/about/meetourdoctors/dr.monicamcphail-pruitt",
  "/treatments/cortisone-injections-for-back-pain",
  "/find-care/second-opinion",
  "/treatments/percutaneous-carpal-tunnel-release",
  "/area-of-pain/back-pain/foraminal-stenosis",
  "/treatments/lumbar-microendoscopic-discectomy-surgery",
  "/area-of-speciality/spinedeformities",
  "/treatments/non-surgical-treatments-for-pain-management",
  "/treatments/cervical-disc-arthroplasty",
  "/treatments/posterior-cervical-fusion-surgery",
  "/treatments/anterior-cervical-corpectomy-and-fusion",
  "/treatments/lumbar-laminectomy-surgery",
  "/treatments/lumbar-microdiscectomy-surgery",
  "/treatments/botox-for-migraines-treatment",
  "/treatments/oblique-lumbar-interbody-fusion",
  "/treatments/coccyx-nerve-ablation",
  "/about/meetourdoctors/dr.douglasslaughter",
  "/treatments/percutaneous-discectomy",
  "/area-of-speciality/backpain",
  "/treatments/artificial-disc-replacement-surgery",
  "/treatments/epidural-steroid-injection",
  "/treatments/facet-ablation-rhizotomy-treatment",
  "/area-of-pain/back-pain/backpaintreatmentoptions",
  "/treatments/motion-preservation-spine-surgery",
  "/area-of-speciality/rheumatoidarthritis",
  "/treatments/cancer-pain-treatment",
  "/treatments/lumbar-fusion-surgery",
  "/treatments/hip-arthroscopy-treatment",
  "/treatments/aging-management",
  "/treatments/extreme-lateral-interbody-fusion-surgery",
  "/treatments/impar-block-treatment",
  "/treatments/axial-fusion-surgery",
  "/treatments/anterior-lumbar-interbody-fusion",
  "/treatments/anterior-lumbar-corpectomy-and-fusion",
  "/treatments/endoscopic-discectomy-surgery",
  "/treatments/endoscopic-foraminotomy-surgery",
  "/treatments/multilevel-degenerative-disc-disease-surgery",
  "/area-of-pain/back-pain/coccydynia",
  "/area-of-speciality/arthritis",
  "/area-of-speciality/coccydynia",
  "/area-of-speciality/antiinflammatoryinjections",
  "/area-of-speciality/loosebodies",
  "/area-of-speciality/spondylolisthesis",
  "/area-of-speciality/osteoarthritis",
  "/area-of-speciality/adjacent-segment-disease"
];

const ROOTS = [
  "app",
  "components/data"
];
const IGNORE_DIRS = [".next", "node_modules", "public", "dist"];
const DRY_RUN = process.argv.includes('--dry');

let updatedFiles = 0;
let insertedLinks = 0;
let selfLinks = 0;
const changedFiles = [];
let changeLog = [];

const DATA_FILES = [
  'components/data/conditions.tsx',
  'components/data/treatments.tsx',
];

function extractSlugTitleMap() {
  const map = {};
  for (const file of DATA_FILES) {
    if (!fs.existsSync(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    // Match objects with title and slug
    const objRegex = /{[\s\S]*?title\s*:\s*["'`](.*?)["'`][\s\S]*?slug\s*:\s*["'`](.*?)["'`][\s\S]*?}/g;
    let match;
    while ((match = objRegex.exec(content))) {
      const title = match[1].trim();
      const slug = match[2].trim();
      if (file.includes('conditions')) {
        map['/area-of-speciality/' + slug] = title;
      } else if (file.includes('treatments')) {
        map['/treatments/' + slug] = title;
      }
    }
  }
  return map;
}

const TARGET_TITLE_MAP = extractSlugTitleMap();
console.log('TARGET_TITLE_MAP:', TARGET_TITLE_MAP);

function walk(dir, exts = [".tsx", ".ts"]) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (IGNORE_DIRS.includes(file)) continue;
      results = results.concat(walk(filePath, exts));
    } else if (exts.includes(path.extname(file))) {
      results.push(filePath);
    }
  }
  return results;
}

function fileContainsTargetLink(content, selfUrl) {
  for (const url of TARGET_URLS) {
    if (url === selfUrl) continue;
    // <Link href="..."> or <a href='...'>
    const linkRegex = new RegExp(`<[aA-zZ]+[^>]+href=["']${url}["']`);
    if (linkRegex.test(content)) return true;
  }
  return false;
}

function getSlugFromPath(filePath) {
  // Try to infer a slug from the file path (e.g. app/area-of-speciality/kyphosis/page.tsx)
  const parts = filePath.split(path.sep);
  let slug = null;
  for (let i = parts.length - 1; i >= 0; i--) {
    if (parts[i] === "page.tsx" || parts[i] === "page.ts") {
      // Look for the parent folder
      slug = parts.slice(i - 1, i).join("");
      break;
    }
    if (parts[i].endsWith(".tsx") || parts[i].endsWith(".ts")) {
      slug = parts[i].replace(/\.(tsx|ts)$/, "");
      break;
    }
  }
  return slug ? slug.toLowerCase() : null;
}

function getSelfUrl(filePath) {
  // Try to match a TARGET_URL to this file
  const slug = getSlugFromPath(filePath);
  if (!slug) return null;
  for (const url of TARGET_URLS) {
    if (url.toLowerCase().includes(slug)) return url;
  }
  return null;
}

function tokenize(str) {
  return str
    .replace(/[^a-zA-Z0-9\-\/]/g, ' ')
    .split(/[\s\-\/]+/)
    .filter(Boolean)
    .map(s => s.toLowerCase());
}

function pickDestinations(filePath, content, selfUrl) {
  // Score by slug/word overlap and folder proximity
  const fileTokens = tokenize(filePath + ' ' + content);
  const folder = filePath.split(path.sep).slice(0, 3).join('/');
  let scored = TARGET_URLS
    .filter(url => url !== selfUrl)
    .map(url => {
      const urlTokens = tokenize(url);
      let score = 0;
      // Prefer same folder
      if (filePath.replace(/\\/g, '/').includes(url.split('/').slice(1, 3).join('/'))) score += 2;
      // Token overlap
      score += urlTokens.filter(t => fileTokens.includes(t)).length;
      return { url, score };
    });
  scored = scored.sort((a, b) => b.score - a.score);
  // Fallback: random if all scores are 0
  if (scored.length && scored[0].score === 0) {
    scored = scored.sort(() => Math.random() - 0.5);
  }
  return scored.slice(0, 2).map(s => s.url);
}

function fallbackAnchorText(url) {
  // Use the last segment of the URL, replace dashes with spaces, capitalize words
  const last = url.split('/').filter(Boolean).pop() || '';
  return last
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function getAnchorText(dest) {
  return TARGET_TITLE_MAP[dest] || fallbackAnchorText(dest);
}

function insertLinksInComponent(content, dests, anchorTextsUsed) {
  let newContent = content;
  let importAdded = false;
  let linkCount = 0;
  let anchors = [];
  // Only add import if not present
  if (!/from ['"]next\/link['"]/.test(newContent)) {
    newContent = `import Link from "next/link";\n// AUTO-CTX-LINK\n` + newContent;
    importAdded = true;
  }
  // Find all <p> tags
  const pTagRegex = /<p[^>]*>([\s\S]*?)<\/p>/g;
  let pTags = [];
  let match;
  while ((match = pTagRegex.exec(newContent))) {
    pTags.push({ full: match[0], inner: match[1], index: match.index });
  }
  // For each dest, try to insert in the best <p>
  for (const dest of dests) {
    const anchorText = getAnchorText(dest);
    if (!anchorText || anchorTextsUsed.has(anchorText.toLowerCase())) continue;
    let found = false;
    for (let i = 0; i < pTags.length; i++) {
      const p = pTags[i];
      // Case-insensitive, whole phrase
      const anchorRegex = new RegExp(`(\\b${anchorText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b)`, 'i');
      if (anchorRegex.test(p.inner)) {
        // Only wrap first occurrence
        let replaced = false;
        const newInner = p.inner.replace(anchorRegex, (m) => {
          if (replaced) return m;
          replaced = true;
          return `<Link href=\"${dest}\">${m}</Link>`;
        });
        const newP = `// AUTO-CTX-LINK\n<p>${newInner}</p>`;
        newContent = newContent.replace(p.full, newP);
        linkCount++;
        anchors.push({ anchor: anchorText + (TARGET_TITLE_MAP[dest] ? '' : ' (fallback)'), dest });
        anchorTextsUsed.add(anchorText.toLowerCase());
        found = true;
        break;
      }
    }
    if (!found && pTags.length > 0) {
      // Not found, append at end of first <p>
      const p = pTags[0];
      const appended = p.inner + ` <Link href=\"${dest}\">${anchorText}</Link>.`;
      const newP = `// AUTO-CTX-LINK\n<p>${appended}</p>`;
      newContent = newContent.replace(p.full, newP);
      linkCount++;
      anchors.push({ anchor: anchorText + (TARGET_TITLE_MAP[dest] ? '' : ' (fallback)'), dest });
      anchorTextsUsed.add(anchorText.toLowerCase());
    }
    if (linkCount >= 2) break;
  }
  // If no <p> at all, fallback to sr-only div after main export return
  if (pTags.length === 0 && linkCount > 0) {
    const exportDefault = /export default function [^{]+{([\s\S]+?return \()/m.exec(newContent);
    if (exportDefault) {
      const insertPos = newContent.indexOf('return (', exportDefault.index) + 8;
      const srDiv = `\n// AUTO-CTX-LINK\n<div className=\"sr-only\">${Array.from(anchorTextsUsed).map(anchor => `<Link href=\"${Object.keys(TARGET_TITLE_MAP).find(k => TARGET_TITLE_MAP[k].toLowerCase() === anchor) || ''}\">${anchor}</Link>`).join(' ')}</div>\n`;
      newContent = newContent.slice(0, insertPos) + srDiv + newContent.slice(insertPos);
    }
  }
  return { newContent, linkCount, anchors };
}

function insertLinksInData(content, dests, anchorTextsUsed, selfSlug) {
  // For each object literal, scan main string fields and inject <a href> links
  let newContent = content;
  let linkCount = 0;
  let anchors = [];
  // Find all object literals
  const objRegex = /({[\s\S]*?slug\s*:\s*["'`](.*?)["'`][\s\S]*?})/g;
  let match;
  let offset = 0;
  while ((match = objRegex.exec(content))) {
    let obj = match[1];
    const slug = match[2];
    if (slug === selfSlug) continue; // Never link to self
    let objChanged = false;
    let objLinks = 0;
    for (const dest of dests) {
      if (objLinks >= 2) break;
      const anchorText = getAnchorText(dest);
      if (!anchorText || anchorTextsUsed.has(anchorText.toLowerCase()) || dest.endsWith(slug)) continue;
      // Scan main string fields
      const fields = ['body', 'detail', 'desc', 'info', 'treatment', 'what_sym', 'risk_fac', 'diagnose', 'pain_info', 'prevent', 'why_choose_us', 'schedule'];
      let found = false;
      for (const field of fields) {
        const fieldRegex = new RegExp(`(${field}\s*:\s*['"])([\s\S]*?)(['"])`, 'm');
        const fieldMatch = fieldRegex.exec(obj);
        if (fieldMatch) {
          const before = fieldMatch[1];
          const value = fieldMatch[2];
          const after = fieldMatch[3];
          // Case-insensitive, whole phrase
          const anchorRegex = new RegExp(`(\\b${anchorText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b)`, 'i');
          if (anchorRegex.test(value)) {
            let replaced = false;
            const newValue = value.replace(anchorRegex, (m) => {
              if (replaced) return m;
              replaced = true;
              return `<a href='${dest}'>${m}</a>`;
            });
            obj = obj.replace(fieldMatch[0], before + newValue + after);
            objChanged = true;
            linkCount++;
            objLinks++;
            anchors.push({ anchor: anchorText + (TARGET_TITLE_MAP[dest] ? '' : ' (fallback)'), dest });
            anchorTextsUsed.add(anchorText.toLowerCase());
            found = true;
            break;
          }
        }
      }
      if (!found) {
        // Append to first available field
        for (const field of fields) {
          const fieldRegex = new RegExp(`(${field}\s*:\s*['"])([\s\S]*?)(['"])`, 'm');
          const fieldMatch = fieldRegex.exec(obj);
          if (fieldMatch) {
            const before = fieldMatch[1];
            const value = fieldMatch[2];
            const after = fieldMatch[3];
            const appended = value + ` <a href='${dest}'>${anchorText}</a>.`;
            obj = obj.replace(fieldMatch[0], before + appended + after);
            objChanged = true;
            linkCount++;
            objLinks++;
            anchors.push({ anchor: anchorText + (TARGET_TITLE_MAP[dest] ? '' : ' (fallback)'), dest });
            anchorTextsUsed.add(anchorText.toLowerCase());
            break;
          }
        }
      }
    }
    if (objChanged) {
      // Replace the object in newContent
      const start = match.index + offset;
      const end = start + match[1].length;
      newContent = newContent.slice(0, start) + obj + newContent.slice(end);
      offset += obj.length - match[1].length;
    }
  }
  return { newContent, linkCount, anchors };
}

function extractAnchorTextFromInsertion(newContent, dests) {
  // Try to extract anchor text from the newContent for each dest
  // For <Link href="...">anchor</Link> or <a href='...'>anchor</a>
  const anchors = [];
  for (const dest of dests) {
    // Try <Link href="...">(.*?)</Link>
    const linkRegex = new RegExp(`<Link href=\\?['\"]${dest}['\"]>(.*?)<\\?/Link>`, 'g');
    let match;
    while ((match = linkRegex.exec(newContent))) {
      anchors.push({ anchor: match[1], dest });
    }
    // Try <a href='...'>anchor</a>
    const aRegex = new RegExp(`<a href=['\"]${dest}['\"]>(.*?)<\\?/a>`, 'g');
    while ((match = aRegex.exec(newContent))) {
      anchors.push({ anchor: match[1], dest });
    }
  }
  return anchors;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const selfUrl = getSelfUrl(filePath);
  const selfSlug = selfUrl ? selfUrl.split('/').pop() : '';
  if (fileContainsTargetLink(content, selfUrl)) return { changed: false };
  const dests = pickDestinations(filePath, content, selfUrl)
    .filter(dest => getAnchorText(dest));
  if (!dests.length) return { changed: false };
  console.log(`\nProcessing: ${filePath}`);
  console.log('  Destinations:', dests);
  console.log('  Anchor texts:', dests.map(d => getAnchorText(d)));
  let newContent = content;
  let linkCount = 0;
  let anchors = [];
  let anchorTextsUsed = new Set();
  if (/export default function|export default class|export function/.test(content)) {
    // React component
    const result = insertLinksInComponent(content, dests, anchorTextsUsed);
    newContent = result.newContent;
    linkCount = result.linkCount;
    anchors = result.anchors;
  } else if (/desc\s*:\s*['"]/i.test(content) || /info\s*:\s*['"]/i.test(content) || /body\s*:\s*['"]/i.test(content)) {
    // Data array
    const result = insertLinksInData(content, dests, anchorTextsUsed, selfSlug);
    newContent = result.newContent;
    linkCount = result.linkCount;
    anchors = result.anchors;
  } else {
    return { changed: false };
  }
  if (linkCount === 0) {
    console.log('  No anchor text found for contextual linking in this file.');
    return { changed: false };
  }
  if (!DRY_RUN) {
    // Prettier format
    try {
      const prettierConfig = prettier.resolveConfig.sync(filePath) || { parser: 'typescript' };
      newContent = prettier.format(newContent, prettierConfig);
    } catch (e) {}
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
  updatedFiles++;
  insertedLinks += linkCount;
  changedFiles.push(filePath);
  changeLog.push({ file: filePath, anchors });
  return { changed: true };
}

function main() {
  let allFiles = [];
  for (const root of ROOTS) {
    if (fs.existsSync(root)) {
      allFiles = allFiles.concat(walk(root));
    }
  }
  // Exclude layout files
  allFiles = allFiles.filter(
    file => !file.endsWith('layout.tsx') && !file.endsWith('layout.ts')
  );
  for (const file of allFiles) {
    processFile(file);
  }
  console.log('\n✅ Scan complete');
  console.log(`•  ${updatedFiles} files updated`);
  console.log(`•  ${insertedLinks} links inserted`);
  console.log(`•  ${selfLinks} self-links`);
  if (DRY_RUN) {
    console.log('Dry run mode: no files written.');
    if (changedFiles.length) {
      console.log('Files that would change:');
      changedFiles.forEach(f => console.log('  -', f));
    }
  } else {
    console.log('Run `npm run lint && npm run build` to verify.');
  }
  // Print detailed markdown table
  if (changeLog.length) {
    console.log('\n| Source File | Anchor Text | Target URL |');
    console.log('|-------------|-------------|------------|');
    for (const entry of changeLog) {
      for (const anchor of entry.anchors) {
        console.log(`| ${entry.file} | ${anchor.anchor} | ${anchor.dest} |`);
      }
    }
  }
}

if (require.main === module) {
  main();
} 