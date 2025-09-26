# SEO Local Sitemap Audit Script

This script crawls all pages from your sitemap locally (`http://localhost:3000`) while validating canonicals against the production domain (`https://mountainspineorthopedics.com`). It identifies SSR vs CSR rendering issues and validates all critical SEO elements.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start your development server:**
   ```bash
   npm run dev
   ```

3. **Run the full SEO audit:**
   ```bash
   npm run seo:audit
   ```

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run seo:audit` | Full audit with 4 concurrent requests |
| `npm run seo:audit:debug` | Debug mode with verbose logging |
| `npm run seo:audit:only=<substring>` | Audit only URLs matching substring |

## 🔧 CLI Options

| Option | Default | Description |
|--------|---------|-------------|
| `--only=<substring>` | All URLs | Filter URLs containing substring |
| `--concurrency=<number>` | 4 | Number of concurrent requests |
| `--timeout=<ms>` | 25000 | Request timeout in milliseconds |
| `--headless` | true | Run Puppeteer in headless mode |
| `--debug` | false | Enable verbose logging |

## 📊 What Gets Audited

### Server-Side Rendering (SSR)
- ✅ `<title>` tag and length validation (30-65 chars)
- ✅ `<meta name="description">` and length validation (80-170 chars)
- ✅ `<link rel="canonical">` and domain validation
- ✅ `<h1>` tag presence
- ✅ `<h2>` tag count
- ✅ JSON-LD structured data extraction

### Client-Side Rendering (CSR)
- ✅ Same elements as SSR using Puppeteer
- ✅ Googlebot user agent simulation
- ✅ Network idle detection

### Validation Rules
- **Canonical**: Must point to `https://mountainspineorthopedics.com`
- **Title**: 30-65 characters recommended
- **Meta Description**: 80-170 characters recommended
- **H1**: Must exist in SSR
- **H2**: At least one recommended

## 📁 Output Files

Reports are saved to `reports/` directory with timestamp:

```
reports/
├── seo-local-2025-01-25.csv    # Detailed CSV report
└── seo-local-2025-01-25.json   # JSON with summary + results
```

### CSV Columns
- `url` - Audited URL
- `http_status` - HTTP response code
- `ssr_title`, `ssr_title_len` - Server-rendered title
- `ssr_meta_desc`, `ssr_meta_desc_len` - Server-rendered description
- `ssr_canonical` - Server-rendered canonical
- `ssr_h1` - Server-rendered H1
- `ssr_h2_count` - Server-rendered H2 count
- `ssr_schema_types` - JSON-LD schema types found
- `csr_title` - Client-rendered title
- `csr_meta_desc`, `csr_meta_desc_len` - Client-rendered description
- `csr_canonical` - Client-rendered canonical
- `csr_h1` - Client-rendered H1
- `csr_h2_count` - Client-rendered H2 count
- `csr_schema_types` - Client JSON-LD schema types
- `canonical_ok`, `title_ok`, `meta_ok`, `h1_ok`, `h2_ok` - Validation flags
- `ssr_vs_csr_warnings` - Mismatches between SSR and CSR
- `outlinks_localhost_count` - Links pointing to localhost
- `notes` - Additional issues or errors

## 🎯 Example Usage

### Full Audit
```bash
npm run seo:audit
```

### Debug Mode
```bash
npm run seo:audit:debug
```

### Audit Only Pain Pages
```bash
npm run seo:audit:only=area-of-pain
```

### Audit Only Treatments
```bash
npm run seo:audit:only=treatments
```

### Custom Concurrency
```bash
node scripts/seo-local-sitemap-audit.mjs --concurrency=2 --timeout=30000
```

## 📈 Sample Output

```
🎯 SEO AUDIT SUMMARY
==================================================
Total URLs audited: 127
Successful requests: 125
Failed requests: 2

📊 SEO Issues Found:
  Missing canonicals: 0
  Missing/invalid titles: 0
  Missing/invalid descriptions: 0
  Missing H1 tags: 0
  Missing H2 tags: 3

⚠️  Technical Issues:
  SSR vs CSR mismatches: 0
  Localhost outlinks: 2

📁 Reports saved:
  CSV: reports/seo-local-2025-01-25.csv
  JSON: reports/seo-local-2025-01-25.json

✅ All SEO elements are properly configured!
```

## 🚨 Common Issues & Solutions

### Missing Canonicals
- **Issue**: Pages without canonical tags
- **Solution**: Ensure all `layout.tsx` files export `metadata` with `alternates.canonical`

### SSR vs CSR Mismatches
- **Issue**: Different content between server and client rendering
- **Solution**: Move SEO elements to server-side rendering (layout.tsx)

### Localhost Outlinks
- **Issue**: Internal links pointing to localhost
- **Solution**: Use `buildCanonical()` helper from `lib/seo.ts`

### Missing H1/H2 Tags
- **Issue**: No semantic headings
- **Solution**: Add `sr-only` H1/H2 tags in layout files

## 🔍 Troubleshooting

### Script Fails to Start
```bash
# Check if dependencies are installed
npm install

# Check if dev server is running
curl http://localhost:3000
```

### Puppeteer Issues
```bash
# Install system dependencies (Ubuntu/Debian)
sudo apt-get install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

### Memory Issues
```bash
# Reduce concurrency for large sites
node scripts/seo-local-sitemap-audit.mjs --concurrency=2
```

## 📝 Notes

- The script automatically excludes `/blogs/*` URLs as they are Supabase-driven
- All canonicals are validated against the production domain
- CSR rendering uses Googlebot user agent for realistic testing
- Reports include both individual page results and summary statistics
- The script handles errors gracefully and continues processing other URLs
