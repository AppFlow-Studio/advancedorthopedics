import { glob } from "glob";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { JSDOM } from "jsdom";
import chalk from "chalk";

interface CanonicalCheck {
  url: string;
  canonical?: string;
  ogUrl?: string;
  twitterUrl?: string;
  robots?: string;
  title?: string;
  status: 'ok' | 'missing' | 'mismatch' | 'error';
  issues: string[];
}

class LocalCanonicalChecker {
  private results: CanonicalCheck[] = [];
  private baseUrl = 'http://localhost:3000';

  async checkAllRoutes(): Promise<void> {
    console.log(chalk.blue('🔍 Checking all routes for canonical issues...'));
    
    // Get all static routes from the build output
    const routes = await this.getStaticRoutes();
    
    console.log(chalk.green(`📋 Found ${routes.length} routes to check`));
    
    for (const route of routes) {
      await this.checkRoute(route);
    }
    
    this.generateReport();
  }

  private async getStaticRoutes(): Promise<string[]> {
    // Common routes to check
    const routes = [
      '/',
      '/about',
      '/about/faqs',  // Fixed: lowercase
      '/about/meetourdoctors',
      '/area-of-specialty',
      '/condition-check',
      '/find-care/book-an-appointment',
      '/find-care/find-a-doctor',
      '/find-care/free-mri-review',
      '/find-care/candidacy-check',
      '/find-care/second-opinion',
      '/locations',
      '/treatments',
      '/blogs',
      '/injuries/car-accident',
      '/injuries/slip-and-fall',
      '/insurance-policy',
      '/patient-forms',
      '/privacy-policy',
      '/thank-you'
    ];

    // Add some dynamic routes
    const dynamicRoutes = [
      '/about/meetourdoctors/dr-scott-katzman',
      '/about/meetourdoctors/dr-david-cowin',
      '/area-of-specialty/herniated-disc',
      '/area-of-specialty/spinal-stenosis',
      '/treatments/lumbar-microdiscectomy-surgery',
      '/treatments/cervical-disc-replacement',
      '/locations/orlando-orthopedics',
      '/locations/hollywood-fl-orthopedics'
    ];

    return [...routes, ...dynamicRoutes];
  }

  private async checkRoute(route: string): Promise<void> {
    const url = `${this.baseUrl}${route}`;
    const check: CanonicalCheck = {
      url,
      status: 'ok',
      issues: []
    };

    try {
      console.log(chalk.gray(`  Checking ${url}...`));
      
      // Fetch the page with redirect following
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; CanonicalChecker/1.0)'
        },
        redirect: 'follow'
      });

      if (!response.ok) {
        check.status = 'error';
        check.issues.push(`HTTP ${response.status}: ${response.statusText}`);
        this.results.push(check);
        return;
      }

      const html = await response.text();
      const dom = new JSDOM(html);
      const document = dom.window.document;

      // Extract metadata
      check.canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || undefined;
      check.ogUrl = document.querySelector('meta[property="og:url"]')?.getAttribute('content') || undefined;
      check.twitterUrl = document.querySelector('meta[name="twitter:url"]')?.getAttribute('content') || undefined;
      check.robots = document.querySelector('meta[name="robots"]')?.getAttribute('content') || undefined;
      check.title = document.querySelector('title')?.textContent || undefined;

      // Check for issues
      this.validateCanonical(check);

    } catch (error) {
      check.status = 'error';
      check.issues.push(`Error fetching: ${error}`);
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

    // Check canonical format
    if (!canonical.startsWith('https://mountainspineorthopedics.com')) {
      check.status = 'mismatch';
      check.issues.push(`Canonical uses wrong domain: ${canonical}`);
    }

    // Check for trailing slash consistency
    const expectedPath = url.replace('http://localhost:3000', '');
    const canonicalPath = canonical.replace('https://mountainspineorthopedics.com', '');
    
    // Normalize paths for comparison (remove trailing slashes except for root)
    const normalizedExpected = expectedPath === '/' ? '/' : expectedPath.replace(/\/$/, '');
    const normalizedCanonical = canonicalPath === '/' ? '/' : canonicalPath.replace(/\/$/, '');
    
    if (normalizedExpected !== normalizedCanonical) {
      check.status = 'mismatch';
      check.issues.push(`Path mismatch: expected ${normalizedExpected}, got ${normalizedCanonical}`);
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

    // Check for multiple canonicals
    const canonicalCount = check.issues.filter(issue => issue.includes('canonical')).length;
    if (canonicalCount > 1) {
      check.status = 'mismatch';
      check.issues.push('Multiple canonical signals detected');
    }
  }

  private generateReport(): void {
    const total = this.results.length;
    const ok = this.results.filter(r => r.status === 'ok').length;
    const missing = this.results.filter(r => r.status === 'missing').length;
    const mismatch = this.results.filter(r => r.status === 'mismatch').length;
    const error = this.results.filter(r => r.status === 'error').length;

    console.log(chalk.blue('\n📊 CANONICAL CHECK RESULTS'));
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

    // Generate CSV report
    this.generateCSVReport();

    if (mismatch > 0 || missing > 0 || error > 0) {
      console.log(chalk.red('\n❌ Canonical check failed!'));
      process.exit(1);
    } else {
      console.log(chalk.green('\n✅ All canonical checks passed!'));
    }
  }

  private generateCSVReport(): void {
    const csvPath = join(process.cwd(), 'canonical-check-results.csv');
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
    console.log(chalk.green(`\n📄 CSV report written to: ${csvPath}`));
  }
}

// Run the checker
(async () => {
  const checker = new LocalCanonicalChecker();
  await checker.checkAllRoutes();
})().catch(console.error);
