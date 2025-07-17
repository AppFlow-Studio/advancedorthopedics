param(
  [string]$Origin = "http://localhost:3000"
)

Write-Host "Fetching URLs from sitemap at $Origin/sitemap.xml..." -ForegroundColor Yellow

try {
  # Pull every <loc> entry from the live sitemap
  $response = Invoke-WebRequest "$Origin/sitemap.xml" -ErrorAction Stop
  $urls = $response.Content |
          Select-String -Pattern '<loc>(.+?)</loc>' -AllMatches |
          ForEach-Object { $_.Matches.Groups[1].Value }
  
  if ($urls.Count -eq 0) {
    Write-Host "No URLs found in sitemap. Make sure:" -ForegroundColor Red
    Write-Host "1. Development server is running (npm run dev)" -ForegroundColor Red
    Write-Host "2. NEXT_PUBLIC_BASE_URL is set in .env" -ForegroundColor Red
    Write-Host "3. Sitemap is accessible at $Origin/sitemap.xml" -ForegroundColor Red
    exit 1
  }
  
  Write-Host "Found $($urls.Count) URLs to check..." -ForegroundColor Green
  
  foreach ($url in $urls) {
    try {
      $html = (Invoke-WebRequest $url -ErrorAction Stop).Content
      $linkCount = ($html -split '<a\s').Count - 1
      "{0,-70} {1} links" -f $url, $linkCount
    } catch {
      "{0,-70} ERROR" -f $url
    }
  }
} catch {
  Write-Host "Error accessing sitemap: $($_.Exception.Message)" -ForegroundColor Red
  Write-Host "Make sure the development server is running with: npm run dev" -ForegroundColor Yellow
  exit 1
} 