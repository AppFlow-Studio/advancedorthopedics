import { JSDOM } from 'jsdom';
import chalk from 'chalk';
import { writeFileSync } from 'fs';
import puppeteer from 'puppeteer';

interface CanonicalCheck {
  url: string;
  status: 'ok' | 'missing' | 'mismatch' | 'error';
  issues: string[];
  canonical?: string;
  ogUrl?: string;
  twitterUrl?: string;
  robots?: string;
  title?: string;
}

class QuickCanonicalChecker {
  private baseUrl: string;
  private results: CanonicalCheck[] = [];
  private browser: puppeteer.Browser | null = null;

  constructor(baseUrl: string = 'http://localhost:3000') {
    this.baseUrl = baseUrl;
  }

  async run(): Promise<void> {
    console.log(chalk.blue('🔍 Quick Canonical Check Starting...'));
    
    // Initialize puppeteer with better error handling
    this.browser = await puppeteer.launch({ 
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });

    // Get key URLs to check (subset of most important pages)
    const keyUrls = this.getKeyUrls();
    
    console.log(chalk.green(`📋 Checking ${keyUrls.length} key URLs`));

    // Check each URL with better error handling
    for (let i = 0; i < keyUrls.length; i++) {
      const url = keyUrls[i];
      console.log(chalk.gray(`  [${i + 1}/${keyUrls.length}] Checking ${url}...`));
      
      try {
        await this.checkUrl(url);
      } catch (error) {
        console.log(chalk.red(`  ❌ Failed to check ${url}: ${error}`));
        this.results.push({
          url,
          status: 'error',
          issues: [`Check failed: ${error}`]
        });
      }
      
      // Small delay between requests
      if (i < keyUrls.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    await this.browser.close();
    this.summarizeResults();
    this.generateReport();

    if (this.results.some(r => r.status !== 'ok')) {
      process.exit(1);
    } else {
      console.log(chalk.green('\n✅ All canonical checks passed!'));
    }
  }

  private getKeyUrls(): string[] {
    // Key URLs from your sitemap - focusing on most important pages
    return [
      '/',
      '/about',
      '/condition-check',
      '/area-of-specialty',
      '/locations',
      '/find-care/book-an-appointment',
      '/find-care/find-a-doctor',
      '/find-care/free-mri-review',
      '/find-care/candidacy-check',
      '/find-care/second-opinion',
      '/insurance-policy',
      '/patient-forms',
      '/privacy-policy',
      '/injuries/car-accident',
      '/injuries/slip-and-fall',
      '/about/meetourdoctors/dr-scott-katzman',
      '/about/meetourdoctors/dr-david-cowin',
      '/about/meetourdoctors/dr-christopher-mccarthy',
      '/about/meetourdoctors/dr-monica-mcphail-pruitt',
      '/about/meetourdoctors/dr-douglas-slaughter',
      '/area-of-specialty/herniated-disc',
      '/area-of-specialty/spinal-stenosis',
      '/area-of-specialty/osteoarthritis',
      '/area-of-specialty/neck-pain',
      '/area-of-specialty/back-pain',
      '/area-of-specialty/sciatica',
      '/area-of-specialty/cervical-herniated-disc',
      '/area-of-specialty/degenerative-disc-disease',
      '/area-of-specialty/failed-back-surgery-syndrome',
      '/area-of-specialty/adjacent-segment-disease',
      '/treatments/lumbar-microdiscectomy-surgery',
      '/treatments/cervical-disc-replacement',
      '/treatments/anterior-cervical-corpectomy-and-fusion',
      '/treatments/percutaneous-discectomy',
      '/treatments/anti-inflammatory-injections-for-joint-and-spine-pain',
      '/treatments/multilevel-degenerative-disc-disease-surgery',
      '/treatments/revision-spinal-surgery',
      '/treatments/percutaneous-carpal-tunnel-release',
      '/treatments/cortisone-injections-for-back-pain',
      '/treatments/hybrid-cervical-spine-surgery',
      '/treatments/shoulder-arthroscopy',
      '/treatments/posterior-cervical-foraminotomy-surgery',
      '/treatments/coccygectomy-tailbone-removal-surgery',
      '/treatments/epidural-steroid-injection',
      '/treatments/acl-reconstruction-surgery',
      '/treatments/oblique-lumbar-interbody-fusion',
      '/treatments/lumbar-laminectomy-surgery',
      '/treatments/cervical-disc-arthroplasty',
      '/treatments/arthroscopic-knee-surgery',
      '/treatments/posterior-cervical-fusion-surgery',
      '/treatments/non-surgical-treatments-for-pain-management',
      '/treatments/coccyx-nerve-ablation',
      '/treatments/lumbar-fusion-surgery',
      '/treatments/hybrid-lumbar-spine-surgery',
      '/blogs',
      '/blogs/how-long-does-an-orthopedic-appointment-take',
      '/blogs/getting-a-second-opinion-from-an-orthopedic-doctor',
      '/blogs/orthopedic-injury',
      '/blogs/what-is-the-hardest-orthopedic-surgery-to-recover-from',
      '/blogs/what-is-orthopedic-physical-therapy',
      '/blogs/orthopedic-doctor-for-sciatica-treatment',
      '/blogs/boca-raton-back-pain-orthopedic-guide',
      '/blogs/orthopedic-impairment',
      '/locations/hollywood-fl-orthopedics',
      '/locations/palm-springs-orthopedics',
      '/locations/orlando-orthopedics',
      '/locations/fort-pierce-orthopedics',
      '/locations/palm-beach-gardens-orthopedics',
      '/locations/miami-beach-orthopedics',
      '/locations/boca-raton-orthopedics',
      '/locations/altamonte-springs-orthopedics',
      '/locations/davenport-orthopedics'
    ].map(path => `${this.baseUrl}${path}`);
  }

  private async checkUrl(url: string): Promise<void> {
    const check: CanonicalCheck = {
      url,
      status: 'ok',
      issues: []
    };

    const page = await this.browser!.newPage();
    
    try {
      // Set timeout and go to page
      await page.goto(url, { 
        waitUntil: 'domcontentloaded',
        timeout: 15000 
      });

      const html = await page.content();
      const dom = new JSDOM(html);
      const document = dom.window.document;

      // Extract metadata
      check.canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || undefined;
      check.ogUrl = document.querySelector('meta[property="og:url"]')?.getAttribute('content') || undefined;
      check.twitterUrl = document.querySelector('meta[name="twitter:url"]')?.getAttribute('content') || undefined;
      check.robots = document.querySelector('meta[name="robots"]')?.getAttribute('content') || undefined;
      check.title = document.querySelector('title')?.textContent || undefined;

      // Validate canonical
      this.validateCanonical(check);

    } catch (error: any) {
      check.status = 'error';
      check.issues.push(`Error fetching ${url}: ${error.message}`);
    } finally {
      await page.close();
    }

    this.results.push(check);
  }

  private validateCanonical(check: CanonicalCheck): void {
    const { canonical, ogUrl, twitterUrl, robots, url } = check;

    // Check for missing canonical
    if (!canonical) {
      check.status = 'missing';
      check.issues.push('Missing canonical URL');
      return;
    }

    // Check canonical format - should use production domain
    if (!canonical.startsWith('https://mountainspineorthopedics.com')) {
      check.status = 'mismatch';
      check.issues.push(`Canonical uses wrong domain: ${canonical}`);
    }

    // Check OG URL matches canonical
    if (ogUrl && ogUrl !== canonical) {
      check.status = 'mismatch';
      check.issues.push(`OG URL doesn't match canonical: ${ogUrl} vs ${canonical}`);
    }

    // Check Twitter URL matches canonical
    if (twitterUrl && twitterUrl !== canonical) {
      check.status = 'mismatch';
      check.issues.push(`Twitter URL doesn't match canonical: ${twitterUrl} vs ${canonical}`);
    }

    // Check robots meta
    if (robots && robots.includes('noindex')) {
      check.status = 'mismatch';
      check.issues.push(`Page has noindex but has canonical: ${robots}`);
    }

    // Check for trailing slash consistency
    const expectedPath = url.replace(this.baseUrl, '');
    const canonicalPath = canonical.replace('https://mountainspineorthopedics.com', '');

    // Normalize paths for comparison (remove trailing slashes except for root)
    const normalizedExpected = expectedPath === '/' ? '/' : expectedPath.replace(/\/$/, '');
    const normalizedCanonical = canonicalPath === '/' ? '/' : canonicalPath.replace(/\/$/, '');

    if (normalizedExpected !== normalizedCanonical) {
      check.status = 'mismatch';
      check.issues.push(`Path mismatch: expected ${normalizedExpected}, got ${normalizedCanonical}`);
    }
  }

  private summarizeResults(): void {
    const total = this.results.length;
    const ok = this.results.filter(r => r.status === 'ok').length;
    const missing = this.results.filter(r => r.status === 'missing').length;
    const mismatch = this.results.filter(r => r.status === 'mismatch').length;
    const error = this.results.filter(r => r.status === 'error').length;

    console.log(chalk.blue('\n📊 QUICK CANONICAL CHECK RESULTS'));
    console.log(chalk.green(`✅ OK: ${ok}/${total}`));
    console.log(chalk.yellow(`⚠️  Missing: ${missing}/${total}`));
    console.log(chalk.red(`❌ Mismatch: ${mismatch}/${total}`));
    console.log(chalk.red(`💥 Error: ${error}/${total}`));

    // Show issues
    const issues = this.results.filter(r => r.issues.length > 0);
    if (issues.length > 0) {
      console.log(chalk.red('\n🚨 ISSUES FOUND:'));
      issues.forEach(result => {
        console.log(chalk.red(`\n${result.url}`));
        result.issues.forEach(issue => {
          console.log(chalk.red(`  - ${issue}`));
        });
      });
    }
  }

  private generateReport(): void {
    const csvPath = 'quick-canonical-check-results.csv';
    const csvLines = [
      'url,canonical,og_url,twitter_url,robots,title,status,issues'
    ];

    for (const result of this.results) {
      const csvLine = [
        result.url,
        result.canonical || '',
        result.ogUrl || '',
        result.twitterUrl || '',
        result.robots || '',
        result.title || '',
        result.status,
        result.issues.join('; ')
      ].map(field => `"${field.replace(/"/g, '""')}"`).join(',');
      
      csvLines.push(csvLine);
    }

    writeFileSync(csvPath, csvLines.join('\n'));
    console.log(chalk.green(`\n📄 Quick CSV report written to: ${csvPath}`));
  }
}

// Run the checker
(async () => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  const checker = new QuickCanonicalChecker(baseUrl);
  await checker.run();
})().catch(console.error);
