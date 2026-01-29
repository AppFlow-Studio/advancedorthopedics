# ============================================
# COMPREHENSIVE LOCATION FILES VERIFICATION
# ============================================

Write-Host ""
Write-Host "COMPREHENSIVE LOCATION DEPENDENCY CHECK" -ForegroundColor Cyan
Write-Host ("=" * 60) -ForegroundColor Cyan

# Get all staged files
$staged = git diff --cached --name-only
$allModified = git diff --name-only

# ============================================
# 1. CORE LOCATION DATA FILES
# ============================================
Write-Host ""
Write-Host "CORE LOCATION DATA:" -ForegroundColor Yellow
$coreFiles = @(
    "components/data/clinics.tsx",
    "lib/locationConstants.ts",
    "lib/generateLocationSchema.ts",
    "lib/locationRedirects.ts",
    "lib/state-faqs.ts"
)

$missingCore = @()
foreach ($file in $coreFiles) {
    $found = $staged | Where-Object { $_ -eq $file }
    if ($found) {
        Write-Host "  [OK] $file" -ForegroundColor Green
    } else {
        Write-Host "  [MISSING] $file" -ForegroundColor Red
        $missingCore += $file
    }
}

# ============================================
# 2. LOCATION PAGES (app/locations/)
# ============================================
Write-Host ""
Write-Host "LOCATION PAGES:" -ForegroundColor Yellow
$locationPages = @(
    "app/locations/page.tsx",
    "app/locations/layout.tsx",
    "app/locations/LocationsClient.tsx",
    "app/locations/[state]/page.tsx",
    "app/locations/[state]/layout.tsx",
    "app/locations/[state]/[location]/page.tsx",
    "app/locations/[state]/[location]/layout.tsx"
)

$missingPages = @()
foreach ($file in $locationPages) {
    $found = $staged | Where-Object { $_ -eq $file }
    if ($found) {
        Write-Host "  [OK] $file" -ForegroundColor Green
    } else {
        Write-Host "  [MISSING] $file" -ForegroundColor Red
        $missingPages += $file
    }
}

# ============================================
# 3. LOCATION COMPONENTS
# ============================================
Write-Host ""
Write-Host "LOCATION COMPONENTS:" -ForegroundColor Yellow
$locationComponents = @(
    "components/LocationsPicker.tsx",
    "components/ClinicsMap.tsx",
    "components/LocationNAP.tsx",
    "components/LocationItemListSchema.tsx",
    "components/StateSeoSections.tsx",
    "components/LocationSeoSections.tsx",
    "components/NavBar.tsx"
)

$missingComponents = @()
foreach ($file in $locationComponents) {
    $found = $staged | Where-Object { $_ -like "*$file*" }
    if ($found) {
        Write-Host "  [OK] $file" -ForegroundColor Green
    } else {
        Write-Host "  [MISSING] $file" -ForegroundColor Red
        $missingComponents += $file
    }
}

# ============================================
# 4. SCHEMA AND METADATA FILES
# ============================================
Write-Host ""
Write-Host "SCHEMA AND METADATA:" -ForegroundColor Yellow
$schemaFiles = @(
    "app/about/page.tsx",
    "app/find-care/book-an-appointment/page.tsx",
    "lib/metadata-seo.ts"
)

$missingSchema = @()
foreach ($file in $schemaFiles) {
    $found = $staged | Where-Object { $_ -eq $file }
    if ($found) {
        Write-Host "  [OK] $file" -ForegroundColor Green
    } else {
        Write-Host "  [NOT STAGED] $file (check if needed)" -ForegroundColor Yellow
        $missingSchema += $file
    }
}

# ============================================
# 5. SITEMAP AND CONFIG
# ============================================
Write-Host ""
Write-Host "CONFIG AND SITEMAP:" -ForegroundColor Yellow
$configFiles = @(
    "app/sitemap.xml/route.ts",
    "app/sitemap/page.tsx",
    "next.config.ts"
)

$missingConfig = @()
foreach ($file in $configFiles) {
    $found = $staged | Where-Object { $_ -eq $file }
    if ($found) {
        Write-Host "  [OK] $file" -ForegroundColor Green
    } else {
        Write-Host "  [NOT STAGED] $file (check if needed)" -ForegroundColor Yellow
        $missingConfig += $file
    }
}

# ============================================
# 6. CHECK FILES THAT IMPORT LOCATION DATA
# ============================================
Write-Host ""
Write-Host "FILES IMPORTING LOCATION DATA:" -ForegroundColor Yellow
$filesImportingLocation = @(
    "app/landing-page/page.tsx",
    "components/Footer.tsx"
)

foreach ($file in $filesImportingLocation) {
    $found = $staged | Where-Object { $_ -eq $file }
    if ($found) {
        Write-Host "  [OK] $file" -ForegroundColor Green
    } else {
        Write-Host "  [NOT STAGED] $file (may import clinics - check if location changes affect it)" -ForegroundColor Yellow
    }
}

# ============================================
# 7. EXCLUSION CHECK (Conditions/Treatments)
# ============================================
Write-Host ""
Write-Host "EXCLUSION CHECK:" -ForegroundColor Yellow
$excluded = $staged | Where-Object { 
    $_ -match "app/conditions|app/treatments|app/area-of-pain|components/ConditionCard|components/TreatmentsList|components/data/conditions\.tsx|components/data/treatments\.tsx|components/data/conditionFAQs|components/data/treatmentFAQs"
}
if ($excluded) {
    Write-Host "  [FOUND EXCLUDED FILES]:" -ForegroundColor Red
    $excluded | ForEach-Object { Write-Host "    - $_" -ForegroundColor Red }
} else {
    Write-Host "  [OK] No conditions/treatments files staged" -ForegroundColor Green
}

# ============================================
# 8. SUMMARY AND RECOMMENDATIONS
# ============================================
Write-Host ""
Write-Host "SUMMARY:" -ForegroundColor Cyan
$stagedCount = $staged.Count
Write-Host "  Total files staged: $stagedCount" -ForegroundColor White

# Check for LocationSeoSections (untracked)
if (Test-Path "components/LocationSeoSections.tsx") {
    $isStaged = $staged | Where-Object { $_ -like "*LocationSeoSections*" }
    if (-not $isStaged) {
        Write-Host ""
        Write-Host "  [WARNING] components/LocationSeoSections.tsx exists but is NOT staged!" -ForegroundColor Yellow
        Write-Host "     This file is used by location pages - consider adding it." -ForegroundColor Yellow
    }
}

# Generate recommendations
Write-Host ""
Write-Host "RECOMMENDATIONS:" -ForegroundColor Cyan
$allMissing = $missingCore + $missingPages + $missingComponents
if ($allMissing.Count -gt 0) {
    Write-Host "  Missing critical files detected. Run these commands:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "  git add " -NoNewline -ForegroundColor White
    Write-Host ($allMissing -join " ") -ForegroundColor Cyan
} else {
    Write-Host "  [OK] All critical location files are staged!" -ForegroundColor Green
}

if ($missingSchema.Count -gt 0 -or $missingConfig.Count -gt 0) {
    Write-Host ""
    Write-Host "  Optional files (schema/config) not staged:" -ForegroundColor Yellow
    ($missingSchema + $missingConfig) | ForEach-Object { Write-Host "    - $_" -ForegroundColor Yellow }
}

Write-Host ""
Write-Host "Verification complete!" -ForegroundColor Green
