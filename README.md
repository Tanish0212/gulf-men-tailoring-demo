# Traditional Gulf Men Tailoring LLC: demo website

A static, bilingual (English / Arabic) one-page site for **Traditional Gulf Men Tailoring LLC**, Shop 2, Land Office Building 2, Sheikh Rashid Road, Al Karama.

- **Live demo:** https://tanish0212.github.io/gulf-men-tailoring-demo/
- **Counter poster (A5, printable):** https://tanish0212.github.io/gulf-men-tailoring-demo/poster.html

No frameworks, no build step, no API keys. Open `index.html` through any static server or host it on GitHub Pages.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page structure and the `<head>` tags that link previews read |
| `style.css` | All styling. Two brand colours (#5E4A2C, #D6C29A), near-black and off-white |
| `script.js` | The `SHOP` content object (top) + site logic (bottom, no need to edit) |
| `poster.html` | Printable A5 counter poster with QR codes for WhatsApp and the website |
| `images/` | Photos (WebP, each under 150 KB), `og-image.jpg` (1200×630 link preview, under 100 KB), `icon.png` |

## Editing

1. **Edit the `SHOP` object at the top of `script.js`.** Name, phone, WhatsApp number, map links, hours, rating,
   services, reviews and every English and Arabic text live there. The "Open now / Closed now" badge uses Dubai time.
2. **Edit the `<head>` of `index.html`** for the title, description and `og:` tags (WhatsApp doesn't run JavaScript).
3. **Photos:** the current photos are free stock photos from Unsplash (see `images/CREDITS.txt`), not photos of the shop.
   Replace them with the shop's own photos when possible: same file names, WebP, under 150 KB each.
   `hero.webp` is landscape (about 2000×1250), `hero-m.webp` is the phone version.
4. **Poster:** print `poster.html` with **Margins: none** and **Background graphics: on**. It fits one A5 page.

Only put **real, confirmed facts** in the content: no made-up prices, services, offers or reviews.

## Notes

- `<meta name="robots" content="noindex">` keeps the demo out of Google. Remove it when the site goes live.
- The language choice is saved in `localStorage` under `site-lang`.
- Motion is limited to gentle fades and switches off for visitors with "reduce motion" enabled.
