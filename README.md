# open-cgv-book

A simple Chrome extension that lets you open the CGV book with a single click.

## Features

- Adds a browser action button to open the CGV book instantly in a new tab.
- (Optional) Injects a floating (not exactly, just stuck) "Open CGV" button on every page for quick access (see `main.js`).

## How it works

- Click the extension icon to open the CGV book:  
  [https://lamp.ms.wits.ac.za/~branden/CGV/_book/index.html](https://lamp.ms.wits.ac.za/~branden/CGV/_book/index.html)
- (Optional) Uncomment the last line in [`main.js`](main.js) to add a floating button to every page.

## Installation

1. Clone or download this repository or tag (unzip)
2. Go to `chrome://extensions` or `edge://extensions` in your browser.
3. Enable "Developer mode".
4. Click "Load unpacked" and select this folder.

## Permissions

- `tabs`: Required to open the CGV book in a new tab.

## Files

- [`background.js`](background.js): Handles the extension button click.
- [`main.js`](main.js): (Optional) Injects a floating button on every page.
- [`manifest.json`](manifest.json): Extension configuration.

---

Created for quick access because having to log in moodle then CGV course then the book link is tiring. haha