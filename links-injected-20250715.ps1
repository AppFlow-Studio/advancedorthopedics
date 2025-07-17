param()
function Wrap-Link ($Path,$LineNum,$Keyword,$Href) {
  $content = Get-Content $Path
  $idx = $LineNum - 1
  $content[$idx] = $content[$idx] -replace
      [regex]::Escape($Keyword),
      "<a href=`"$Href`">$Keyword</a>", 1
  Set-Content $Path $content
}
