# Replace existing files with updated website

## Description
Complete redesign of the website with new HTML structure, CSS styling, and JavaScript functionality.

## Changes
This PR replaces all existing files with a complete redesign of "The Pelican and The Swan" author website.

### New Pages Added
- `404.html` - Error page for GitHub Pages
- `prologue.html` - Prologue chapter reader
- `about.html` - Author biography page
- `contact.html` - Contact form page
- `book1.html`, `book2.html`, `book3.html` - Book landing pages

### Configuration Files Added
- `CNAME` - Custom domain configuration
- `robots.txt` - SEO crawling hints
- `sitemap.xml` - Site structure for search engines
- `README.md` - Setup and deployment documentation

### Updated Files
- **index.html** - Completely redesigned homepage with hero section
- **styles.css** - Full design system with modern styling (389 lines)
- **script.js** - New functionality including mobile nav, cookie banner, countdown timer

## Key Features
✅ Professional author website design
✅ Responsive mobile navigation
✅ Sticky header with dropdown menus
✅ Cookie consent banner
✅ Newsletter signup integration ready
✅ Contact form powered by Formspree
✅ Book countdown timer (Book Two page)
✅ Accessibility features (skip links, ARIA labels)
✅ SEO optimized (meta tags, sitemap, robots.txt)
✅ GitHub Pages ready (404.html, CNAME)

## Design System
- **Fonts**: Fraunces (headings), Lora (body), Inter (UI)
- **Color Palette**: Navy, Parchment, Brass, Marsh accent colors
- **Responsive**: Fully mobile-friendly design

## Before Merging
- [ ] Review all file changes
- [ ] Test on desktop and mobile
- [ ] Verify links work correctly
- [ ] Check contact form setup (needs Formspree ID)
- [ ] Verify newsletter form setup (needs MailerLite/ConvertKit URL)
