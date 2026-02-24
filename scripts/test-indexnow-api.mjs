#!/usr/bin/env node
/**
 * Test the IndexNow API route (local or production).
 * Usage: node scripts/test-indexnow-api.mjs [baseUrl]
 * Default baseUrl: http://localhost:3000
 * Example: node scripts/test-indexnow-api.mjs https://mountainspineorthopedics.com
 */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const baseUrl = process.argv[2] || 'http://localhost:3000';
const bodyPath = join(__dirname, 'indexnow-test-body.json');
const body = JSON.parse(readFileSync(bodyPath, 'utf8'));

const url = `${baseUrl.replace(/\/$/, '')}/api/indexnow`;
console.log('POST', url);
console.log('Body:', JSON.stringify(body, null, 2));

const res = await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});
const data = await res.json().catch(() => ({}));
console.log('Status:', res.status);
console.log('Response:', data);
process.exit(res.ok ? 0 : 1);
