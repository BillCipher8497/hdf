# Hexadecimal Forest — Portfolio Site

React (Vite) + React Router + Framer Motion + Tailwind v4. Deploy-ready on Netlify.

## Run locally
```bash
npm install
npm run dev
```

## Images — everything lives in /public/images/
- `/public/images/favicon.svg` — replace with your favicon (index.html points here)
- `/public/images/screenshots/` — add `eeheo.png`, `fembi.png`, `peneza.png` (site screenshots for the portfolio cards; ~1280px wide recommended)
- `/public/images/team/` — add `arvin.jpg` (founder photo, square works best)

## Before deploying — edits
1. **Site URLs** — `src/data/sites.js`: replace placeholder `url` values. Each card shows a "View live" button linking there.
2. **GA4** — `index.html`: replace both `G-XXXXXXXXXX`. SPA route changes already fire `page_view` events (`App.jsx`).
3. **Contact form** — `src/pages/Contact.jsx`: set `FORM_ENDPOINT` to your FormSubmit AJAX URL.
4. **Team + LinkedIn** — `src/data/team.js`: bios, `photo`, `linkedin` per member, and the company `SOCIAL.linkedin` used in the footer.

## Deploy (Netlify)
Push to GitHub → New site from Git. `netlify.toml` sets `npm run build` / `dist`; SPA redirect is in both `netlify.toml` and `public/_redirects`.

## Structure
- `src/data/` — all content (sites, team, stats, socials). Edit here, not in components.
- `src/components/` — `Reveal`, `CountUp`, `HexChip`, `ForestHero`, `PageTransition`, `Nav`, `Footer`.
- `src/pages/` — Home (incl. services section), Sites (screenshot cards → modal), Team, Contact. Secondary pages are lazy-loaded chunks.

Reduced-motion users get animations disabled globally (`index.css`).
