$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  throw 'Node.js is required. Install Node.js 24, then run this script again.'
}

if (-not (Test-Path (Join-Path $projectRoot 'dist\index.html'))) {
  throw 'dist\index.html was not found. Use the product demo package or run npm run build first.'
}

node .\scripts\serve-dist.mjs
