# Oktana Website (OKPUBLIC)

Standalone marketing site for [Oktana](https://www.oktana.com) — bilingual **English / Spanish**, built from the full redesign spec.

**Design spec:** [`docs/oktana-website-redesign-full-spec.pdf`](docs/oktana-website-redesign-full-spec.pdf)

## Stack

- **Next.js 15** (App Router)
- **TypeScript** + **Tailwind CSS**
- **next-intl** for i18n (`/en/...`, `/es/...`)
- **framer-motion** for scroll animations

## Getting started

```bash
cd /Users/marcossolari/Documents/GitHub/OKPUBLIC
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — middleware redirects to `/en`.

**Preview deployment:** [https://okpublic.vercel.app](https://okpublic.vercel.app)

## Project structure

| Path | Purpose |
|------|---------|
| `messages/en.json`, `messages/es.json` | UI copy (nav, homepage, contact, etc.) |
| `src/lib/content/` | Service & industry page content (EN + ES) |
| `src/lib/navigation.ts` | Mega menu links |
| `src/app/[locale]/` | Localized routes |

## Routes (per locale)

- `/` — Homepage
- `/services/[slug]` — 7 service pages
- `/industries/[slug]` — 6 industry pages
- `/about`, `/about/social-responsibility`, `/about/compliance`
- `/contact`, `/success-stories`, `/blog`, `/careers`

## Git remote

```bash
git remote add origin https://github.com/marquinioo/OKPUBLIC.git
```

## Not in scope yet (Phase 2)

- HubSpot form integration
- Blog CMS / real posts
- Salesforce Pricing Calculator page
- Redirect map from legacy URLs
- HubSpot chat widget
