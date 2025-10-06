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

class GSCDuplicateChecker {
  private baseUrl: string;
  private results: CanonicalCheck[] = [];
  private browser: puppeteer.Browser | null = null;

  constructor(baseUrl: string = 'http://localhost:3000') {
    this.baseUrl = baseUrl;
  }

  async run(): Promise<void> {
    console.log(chalk.blue('🔍 GSC Duplicate Canonical Check Starting...'));
    
    // Initialize puppeteer
    this.browser = await puppeteer.launch({ 
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });

    // Get the exact GSC duplicate URLs (converted to localhost)
    const gscUrls = this.getGSCDuplicateUrls();
    
    console.log(chalk.green(`📋 Checking ${gscUrls.length} GSC duplicate URLs`));

    // Check each URL
    for (let i = 0; i < gscUrls.length; i++) {
      const url = gscUrls[i];
      console.log(chalk.gray(`  [${i + 1}/${gscUrls.length}] Checking ${url}...`));
      
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
      if (i < gscUrls.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    await this.browser.close();
    this.summarizeResults();
    this.generateReport();

    if (this.results.some(r => r.status !== 'ok')) {
      process.exit(1);
    } else {
      console.log(chalk.green('\n✅ All GSC duplicate canonical checks passed!'));
    }
  }

  private getGSCDuplicateUrls(): string[] {
    // Convert GSC production URLs to localhost equivalents
    const gscProductionUrls = [
      '/area-of-pain/foot-pain/ankle-arthroscopy-recovery-pain',
      '/about/meetourdoctors/dr-douglas-slaughter',
      '/find-care/book-an-appointment',
      '/treatments/anterior-cervical-corpectomy-and-fusion',
      '/treatments/percutaneous-discectomy',
      '/area-of-specialty/neck-pain',
      '/treatments/back-pain-treatment',
      '/blogs/orthopedic-visit-cost-without-insurance',
      '/area-of-specialty/osteoarthritis',
      '/blogs/getting-a-second-opinion-from-an-orthopedic-doctor',
      '/locations/orlando-orthopedics',
      '/about',
      '/treatments/anti-inflammatory-injections-for-joint-and-spine-pain',
      '/treatments/multilevel-degenerative-disc-disease-surgery',
      '/treatments/revision-spinal-surgery',
      '/treatments/lumbar-microendoscopic-discectomy-surgery',
      '/blogs/how-long-does-an-orthopedic-appointment-take',
      '/treatments/percutaneous-carpal-tunnel-release',
      '/treatments/cortisone-injections-for-back-pain',
      '/treatments/hybrid-cervical-spine-surgery',
      '/treatments/shoulder-arthroscopy',
      '/area-of-specialty/adjacent-segment-disease',
      '/area-of-specialty/cervical-deformities',
      '/blogs/orthopedic-doctor-costs-florida',
      '/treatments/cervical-disc-replacement',
      '/treatments/coccygectomy-tailbone-removal-surgery',
      '/treatments/epidural-steroid-injection',
      '/treatments/acl-reconstruction-surgery',
      '/treatments/oblique-lumbar-interbody-fusion',
      '/treatments/lumbar-laminectomy-surgery',
      '/treatments/cervical-disc-arthroplasty',
      '/treatments/arthroscopic-knee-surgery',
      '/treatments/posterior-cervical-fusion-surgery',
      '/treatments/non-surgical-treatments-for-pain-management',
      '/area-of-specialty/trochanteric-bursitis',
      '/treatments/posterior-cervical-foraminotomy-surgery',
      '/area-of-specialty/failed-back-surgery-syndrome',
      '/area-of-specialty/herniated-disc',
      '/treatments/lumbar-microdiscectomy-surgery',
      '/treatments/coccyx-nerve-ablation',
      '/treatments/lumbar-fusion-surgery',
      '/treatments/hybrid-lumbar-spine-surgery',
      '/area-of-specialty/bursitis'
    ];

    return gscProductionUrls.map(path => `${this.baseUrl}${path}`);
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
        timeout: 20000 
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

    console.log(chalk.blue('\n📊 GSC DUPLICATE CANONICAL CHECK RESULTS'));
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

    // Show success rate
    const successRate = ((ok / total) * 100).toFixed(1);
    console.log(chalk.blue(`\n📈 Success Rate: ${successRate}%`));
    
    if (successRate === '100.0') {
      console.log(chalk.green('🎉 PERFECT! All GSC duplicate canonical issues should be resolved!'));
    } else if (parseFloat(successRate) >= 90) {
      console.log(chalk.green('🎯 Excellent! Most GSC duplicate canonical issues resolved!'));
    } else if (parseFloat(successRate) >= 80) {
      console.log(chalk.yellow('👍 Good progress! Some GSC duplicate canonical issues remain.'));
    } else {
      console.log(chalk.red('⚠️  More work needed on GSC duplicate canonical issues.'));
    }
  }

  private generateReport(): void {
    const csvPath = 'gsc-duplicate-canonical-check-results.csv';
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
    console.log(chalk.green(`\n📄 GSC duplicate canonical CSV report written to: ${csvPath}`));
  }
}

// Run the checker
(async () => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  const checker = new GSCDuplicateChecker(baseUrl);
  await checker.run();
})().catch(console.error);
