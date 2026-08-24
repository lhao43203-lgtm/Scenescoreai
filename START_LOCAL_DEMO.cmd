@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found.
  echo Install Node.js 24, then run this file again.
  pause
  exit /b 1
)

if not exist "dist\index.html" (
  echo dist\index.html was not found.
  echo Please use the complete Scene Score local demo package.
  pause
  exit /b 1
)

start "" powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Milliseconds 900; Start-Process 'http://127.0.0.1:4173/'"
echo Scene Score is starting at http://127.0.0.1:4173/
echo Keep this window open while viewing the demo.
echo Press Ctrl+C to stop the local server.
node ".\scripts\serve-dist.mjs"

endlocal
