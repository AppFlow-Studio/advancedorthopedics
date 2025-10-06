import { glob } from "glob";
import { readFileSync } from "fs";

(async () => {
  const files = await glob("app/**/*.{tsx,ts}");
  const offenders: string[] = [];
  for (const f of files) {
    const src = readFileSync(f, "utf8");
    const isLayout = /\/layout\.tsx$/.test(f);
    const isPage = /\/page\.tsx$/.test(f);
    
    // Check for raw <link rel="canonical"> tags (should never exist)
    if (src.match(/rel=["']canonical["']/i)) {
      offenders.push(`${f} :: raw <link rel="canonical">`);
    }
    
    // Check for page-level canonical declarations (pages should never have canonicals)
    if (isPage && src.match(/alternates:\s*{[^}]*canonical:/s)) {
      offenders.push(`${f} :: page-level canonical`);
    }
    
    // Check for layouts with canonical but missing openGraph.url
    if (isLayout && src.match(/alternates:\s*{[^}]*canonical:/s) && !src.match(/openGraph:\s*{[^}]*url:/s)) {
      offenders.push(`${f} :: layout has canonical but missing openGraph.url`);
    }
  }
  
  if (offenders.length) {
    console.error("Canonical policy violations:\n" +
      offenders.map(o => ` - ${o}`).join("\n"));
    process.exit(1);
  } else {
    console.log("✅ Canonical checks passed");
  }
})();
