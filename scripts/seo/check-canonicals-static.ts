import { glob } from "glob";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { JSDOM } from "jsdom";
import chalk from "chalk";

interface CanonicalCheck {
  file: string;
  canonical?: string;
  ogUrl?: string;
  twitterUrl?: string;
  robots?: string;
  title?: string;
  status: 'ok' | 'missing' | 'mismatch' | 'error';
  issues: string[];
}

class StaticCanonicalChecker {
  private results: CanonicalCheck[] = [];

  async checkStaticFiles(): Promise<void> {
    console.log(chalk.blue('🔍 Checking static HTML files for canonical issues...'));
    
    // Check built static files
    const htmlFiles = await glob(".next/server/app/**/*.html");
    
    if (htmlFiles.length === 0) {
      console.log(chalk.yellow('⚠️  No static HTML files found. Run "npm run build" first.'));
      return;
    }
    
    console.log(chalk.green(`📋 Found ${htmlFiles.length} HTML files to check`));
    
    for (const file of htmlFiles) {
      await this.checkFile(file);
    }
    
    this.generateReport();
  }

  private async checkFile(filePath: string): Promise<void> {
    const check: CanonicalCheck = {
      file: filePath,
      status: 'ok',
      issues: []
    };

    try {
      console.log(chalk.gray(`  Checking ${filePath}...`));
      
      const html = readFileSync(filePath, 'utf8');
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
      check.issues.push(`Error reading file: ${error}`);
    }

    this.results.push(check);
  }

  private validateCanonical(check: CanonicalCheck): void {
    const { canonical, ogUrl, twitterUrl, robots } = check;

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
  }

  private generateReport(): void {
    const total = this.results.length;
    const ok = this.results.filter(r => r.status === 'ok').length;
    const missing = this.results.filter(r => r.status === 'missing').length;
    const mismatch = this.results.filter(r => r.status === 'mismatch').length;
    const error = this.results.filter(r => r.status === 'error').length;

    console.log(chalk.blue('\n📊 STATIC CANONICAL CHECK RESULTS'));
    console.log(chalk.green(`✅ OK: ${ok}/${total}`));
    console.log(chalk.yellow(`⚠️  Missing: ${missing}/${total}`));
    console.log(chalk.red(`❌ Mismatch: ${mismatch}/${total}`));
    console.log(chalk.red(`💥 Error: ${error}/${total}`));

    // Show issues
    const issues = this.results.filter(r => r.issues.length > 0);
    if (issues.length > 0) {
      console.log(chalk.red('\n🚨 ISSUES FOUND:'));
      issues.forEach(result => {
        console.log(chalk.red(`\n${result.file}`));
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
    const csvPath = join(process.cwd(), 'static-canonical-check-results.csv');
    const csvLines = [
      'file,canonical,og_url,twitter_url,robots,title,status,issues'
    ];

    for (const result of this.results) {
      const csvLine = [
        result.file,
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
  const checker = new StaticCanonicalChecker();
  await checker.checkStaticFiles();
})().catch(console.error);
