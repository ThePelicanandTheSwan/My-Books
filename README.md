# The Pelican and The Swan — website

Static site for K.A. Stevenz's author site, rebuilt from the original
GoDaddy Website Builder site as plain HTML/CSS/JS. No build step, no
framework — upload the files as-is to any static host.

## File overview

- `index.html`, `prologue.html`, `about.html`, `contact.html`,
  `book1.html`, `book2.html`, `book3.html` — the site pages
- `styles.css` — all styling
- `script.js` — mobile nav, cookie banner, Book Two countdown
- `favicon.svg` — browser tab icon
- `404.html` — shown by GitHub Pages for missing URLs
- `robots.txt`, `sitemap.xml` — search engine crawling/indexing hints
- `CNAME` — tells GitHub Pages to serve the site at thepelicanandtheswan.com
  (delete this file if you don't plan to use your own domain yet)

## Deploying to GitHub Pages

1. Create a new **public** repository on GitHub (e.g. `pelicanandtheswan`).
2. Upload all files in this folder to the repository root (drag-and-drop
   on github.com works fine, or `git add . && git commit && git push`).
3. In the repo, go to **Settings > Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   branch `main`, folder `/ (root)`. Save.
5. GitHub will give you a URL like `https://yourusername.github.io/pelicanandtheswan/`.
   The site will be live there within a minute or two.

### Using your existing domain (thepelicanandtheswan.com)

The `CNAME` file already contains `thepelicanandtheswan.com`, which tells GitHub
Pages to respond to that domain once your DNS points at GitHub. To finish
connecting it:

1. At your domain registrar (wherever thepelicanandtheswan.com is registered —
   check GoDaddy if you bought it there even though the site was built
   elsewhere), add these DNS records:
   - Four **A** records for `@` pointing to GitHub Pages' IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - A **CNAME** record for `www` pointing to `yourusername.github.io`
2. Back in **Settings > Pages** on GitHub, enter `thepelicanandtheswan.com` as
   the custom domain and save. Wait for DNS to propagate (can take up to a
   few hours), then check "Enforce HTTPS" once it's available.

If you'd rather keep DNS at GoDaddy while hosting on GitHub, that's exactly
what the steps above do — only the DNS records change, the domain itself
doesn't need to move registrars.

## Contact form

The contact form (`contact.html`) is wired for
[Formspree](https://formspree.io), a service built for exactly this: static
sites with no backend that still need working forms.

1. Sign up at formspree.io (free tier: 50 submissions/month, sent straight
   to your inbox).
2. Create a new form and copy its endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. In `contact.html`, find:
   `<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
   and replace `YOUR_FORM_ID` with your real ID.
4. Formspree will ask you to confirm your email the first time a test
   submission comes in — that's normal.

Spam protection is handled by a hidden honeypot field already built into
the form (no Google reCAPTCHA setup needed). If you still get spam,
Formspree's dashboard has a reCAPTCHA toggle you can turn on.

## Newsletter form ("Join My Reader List")

The homepage newsletter box needs a mailing-list provider — Formspree
handles one-off messages but isn't built for an ongoing subscriber list.
Popular options for authors, all with free tiers:

- **MailerLite** (mailerlite.com) — generous free tier, popular with indie
  authors, good landing-page/embed tools
- **ConvertKit** (convertkit.com) — built specifically for
  writers/creators, has "reader magnet" delivery features
- **Mailchimp** (mailchimp.com) — most widely known, free up to 500
  contacts

To connect one:
1. Create a free account and set up an audience/list.
2. Create an embedded "email only" signup form in that provider's
   dashboard — it'll give you an `action` URL and field name(s).
3. In `index.html`, find the `<form class="newsletter-form" ...>` block
   and replace the `action` URL (and the input's `name` attribute if the
   provider uses a different field name) with what your provider gives you.

## Local preview

No server needed — just open `index.html` in a browser. Or, for a closer
match to how GitHub Pages serves it, run a tiny local server from this
folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Notes

- Images are still linked from the original GoDaddy media host
  (`img1.wsimg.com`). If you plan to fully close the GoDaddy account,
  download those image files from your GoDaddy media library and update
  the `<img src="...">` paths to point at local files (e.g. `images/`)
  instead.
- The Book Two countdown timer currently targets 45 days from whenever
  the page loads (a placeholder). Open `script.js` and edit the line
  `target.setDate(target.getDate() + 45);` to a fixed date instead, e.g.
  `var target = new Date("2026-12-01T00:00:00");`.
