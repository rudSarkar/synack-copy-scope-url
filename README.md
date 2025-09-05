# Copy Scope Links Browser Extension

Adds an option to copy all in scope links on a webpage for Synack platform.

## Building Extension Packages

This repository includes a GitHub Actions workflow that automatically builds extension packages for both Chrome and Firefox browsers.

### Automatic Builds

The workflow runs automatically on:
- Push to main/master branch
- Pull requests to main/master branch  
- Manual trigger via GitHub Actions UI
- Git tags (releases packages automatically)

### Generated Packages

Two extension packages are created:

1. **Chrome Extension** (`extension-chrome.zip`)
   - Uses manifest v3 format
   - Compatible with Chrome, Edge, and other Chromium browsers
   - Can be loaded in developer mode or uploaded to Chrome Web Store

2. **Firefox Extension** (`extension-firefox.xpi`)
   - Uses manifest v2 format (Firefox compatible)
   - Can be loaded as temporary add-on or uploaded to Firefox Add-ons

### Manual Building

To build packages locally:

1. Install Node.js and web-ext:
   ```bash
   npm install -g web-ext
   ```

2. Create build directories:
   ```bash
   mkdir -p build/chrome build/firefox dist
   ```

3. Prepare Chrome extension:
   ```bash
   cp -r icons build/chrome/
   cp background.js content.js popup.html popup.js build/chrome/
   cp manifest.json build/chrome/
   ```

4. Prepare Firefox extension:
   ```bash
   cp -r icons build/firefox/
   cp background.js content.js popup.html popup.js build/firefox/
   cp manifest_firefox.json build/firefox/manifest.json
   ```

5. Build packages:
   ```bash
   # Firefox XPI
   cd build/firefox && web-ext build --artifacts-dir ../../dist --filename extension-firefox.xpi
   
   # Chrome ZIP
   cd ../chrome && zip -r ../../dist/extension-chrome.zip .
   ```

### Installation

#### Chrome/Edge/Chromium
1. Download `extension-chrome.zip` from GitHub Actions artifacts
2. Extract the ZIP file
3. Open Chrome and go to `chrome://extensions/`
4. Enable "Developer mode"
5. Click "Load unpacked" and select the extracted folder

#### Firefox
1. Download `extension-firefox.xpi` from GitHub Actions artifacts
2. Open Firefox and go to `about:debugging`
3. Click "This Firefox"
4. Click "Load Temporary Add-on"
5. Select the `.xpi` file

## Files

- `manifest.json` - Chrome extension manifest (v3)
- `manifest_firefox.json` - Firefox extension manifest (v2)
- `background.js` - Extension service worker/background script
- `content.js` - Content script for Synack platform
- `popup.html` / `popup.js` - Extension popup interface
- `icons/` - Extension icons