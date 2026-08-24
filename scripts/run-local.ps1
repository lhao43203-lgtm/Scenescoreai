$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  throw 'Node.js is required. Install Node.js 24, then run this script again.'
}

if (-not (Test-Path (Join-Path $projectRoot 'node_modules'))) {
  npm install
}

npm run dev -- --host 127.0.0.1
