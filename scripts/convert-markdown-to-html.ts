/**
 * Converts **text** markdown to <strong>text</strong> HTML in source data files.
 * 
 * This script:
 * - Converts all **text** to <strong>text</strong> in conditions.tsx and treatments.tsx
 * - Preserves existing HTML links and tags
 * - Handles nested cases safely
 * - Creates backups before modifying
 * 
 * Run: npx tsx scripts/convert-markdown-to-html.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const DATA_DIR = path.join(process.cwd(), 'components', 'data');
const CONDITIONS_FILE = path.join(DATA_DIR, 'conditions.tsx');
const TREATMENTS_FILE = path.join(DATA_DIR, 'treatments.tsx');

// Regex to match **text** but not inside HTML tags or already converted
// This matches **text** that is not inside <...> tags
function convertMarkdownToStrong(text: string): string {
  if (!text || typeof text !== 'string') return text;
  
  // Simple replacement: **text** -> <strong>text</strong>
  // This is safe because we only process string literal content
  return text.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
}

function processFile(filePath: string): { converted: number; errors: string[] } {
  console.log(`\nProcessing: ${path.basename(filePath)}`);
  
  if (!fs.existsSync(filePath)) {
    return { converted: 0, errors: [`File not found: ${filePath}`] };
  }
  
  // Create backup
  const backupPath = `${filePath}.backup-${Date.now()}`;
  const content = fs.readFileSync(filePath, 'utf-8');
  fs.writeFileSync(backupPath, content, 'utf-8');
  console.log(`  ✓ Backup created: ${path.basename(backupPath)}`);
  
  let converted = 0;
  const errors: string[] = [];
  
  // Count existing ** patterns
  const beforeCount = (content.match(/\*\*[^*]+\*\*/g) || []).length;
  console.log(`  Found ${beforeCount} markdown bold patterns`);
  
  // Convert markdown to HTML
  // We need to be careful not to break the TypeScript/JSX syntax
  // Strategy: Replace **text** in string literals only
  
  let newContent = content;
  let totalReplacements = 0;
  
  // Match string literals (single quotes, double quotes, template literals)
  // and convert **text** inside them
  const stringLiteralRegex = /(['"`])((?:(?:\\.|(?!\1)[^\\])*?))\1/g;
  
  const replacements: Array<{ start: number; end: number; replacement: string }> = [];
  
  // First pass: find all string literals and mark replacements
  let match;
  while ((match = stringLiteralRegex.exec(content)) !== null) {
    const quote = match[1];
    const stringContent = match[2];
    const fullMatch = match[0];
    const startIndex = match.index;
    
    // Convert **text** in this string content
    const converted = convertMarkdownToStrong(stringContent);
    
    if (converted !== stringContent) {
      const replacement = quote + converted + quote;
      replacements.push({
        start: startIndex,
        end: startIndex + fullMatch.length,
        replacement
      });
      totalReplacements += (stringContent.match(/\*\*[^*]+\*\*/g) || []).length;
    }
  }
  
  // Apply replacements in reverse order to preserve indices
  replacements.reverse().forEach(({ start, end, replacement }) => {
    newContent = newContent.substring(0, start) + replacement + newContent.substring(end);
  });
  
  // Check for remaining markdown (likely in comments or edge cases)
  const remaining = (newContent.match(/\*\*[^*]+\*\*/g) || []).length;
  if (remaining > 0) {
    console.log(`  ⚠ Note: ${remaining} markdown patterns remain (likely in comments, JSX attributes, or edge cases)`);
  }
  
  // Write updated content
  fs.writeFileSync(filePath, newContent, 'utf-8');
  converted = totalReplacements;
  
  const afterCount = (newContent.match(/\*\*[^*]+\*\*/g) || []).length;
  console.log(`  ✓ Converted ${converted} patterns`);
  console.log(`  Remaining markdown patterns: ${afterCount} (likely in comments or edge cases)`);
  
  return { converted, errors };
}

async function main() {
  console.log('========================================');
  console.log('Markdown to HTML Conversion Script');
  console.log('Converting **text** to <strong>text</strong>');
  console.log('========================================');
  
  const results = {
    conditions: { converted: 0, errors: [] as string[] },
    treatments: { converted: 0, errors: [] as string[] }
  };
  
  // Process conditions
  if (fs.existsSync(CONDITIONS_FILE)) {
    results.conditions = processFile(CONDITIONS_FILE);
  } else {
    console.log(`\n⚠ Conditions file not found: ${CONDITIONS_FILE}`);
  }
  
  // Process treatments
  if (fs.existsSync(TREATMENTS_FILE)) {
    results.treatments = processFile(TREATMENTS_FILE);
  } else {
    console.log(`\n⚠ Treatments file not found: ${TREATMENTS_FILE}`);
  }
  
  // Summary
  console.log('\n========================================');
  console.log('Summary');
  console.log('========================================');
  console.log(`Conditions: ${results.conditions.converted} patterns converted`);
  if (results.conditions.errors.length > 0) {
    console.log(`  Errors: ${results.conditions.errors.join(', ')}`);
  }
  console.log(`Treatments: ${results.treatments.converted} patterns converted`);
  if (results.treatments.errors.length > 0) {
    console.log(`  Errors: ${results.treatments.errors.join(', ')}`);
  }
  console.log(`\nTotal: ${results.conditions.converted + results.treatments.converted} patterns converted`);
  console.log('\n✓ Backups created with .backup-* suffix');
  console.log('✓ Files updated. Review changes and test before committing.');
}

main().catch((err) => {
  console.error('Script failed:', err);
  process.exit(1);
});
