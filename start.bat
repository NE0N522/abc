@echo off
cd /d "%~dp0"
where py >nul 2>nul
if not errorlevel 1 (
  start "Oxford 3000 Trainer server" /min py -m http.server 8000 --bind 127.0.0.1
  timeout /t 1 /nobreak >nul
  start "" http://127.0.0.1:8000/
  goto end
)
where python >nul 2>nul
if not errorlevel 1 (
  start "Oxford 3000 Trainer server" /min python -m http.server 8000 --bind 127.0.0.1
  timeout /t 1 /nobreak >nul
  start "" http://127.0.0.1:8000/
  goto end
)
echo Python was not found. Open offline.html directly, or install Python to run index.html.
pause
:end
