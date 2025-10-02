# open-links-to-books

A simple Chrome/Edge extension that lets you open the CGV, AAA book and brief project book, or any links you choose to add with a single or two clicks.

## Features

- Adds a browser action button to open the books instantly in a new tab.

## How it works

- Click the extension icon to open the a popup html file that has links to these books:

## Installation

1. Clone or download this repository or tag (unzip)
2. Go to `chrome://extensions` or `edge://extensions` in your browser.
3. Enable "Developer mode".
4. Click "Load unpacked" and select this folder.

## Permissions

- `tabs`: Required to open the links in a new tab.

## Files

- [`index.html`](index.html): Handles the rerouting and popup.
- [`background.js`](background.js): Runs the extension working check.
- [`main.js`](main.js): Creates new tabs for these books + adding your own links
- [`manifest.json`](manifest.json): Extension configuration.

---

Created for quick access because having to log in moodle then a Moodle course then the book link is tiring. hehe