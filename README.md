# open-links-to-books

A simple Chrome extension that lets you open the CGV, AAA book and brief project book with a single click.

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

- [`background.js`](background.js): Handles the extension run check.
- [`main.js`](main.js): The main js file that creates new tabs for these books
- [`manifest.json`](manifest.json): Extension configuration.

---

Created for quick access because having to log in moodle then a Moodle course then the book link is tiring. hehe