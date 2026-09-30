# Easy Airticket — landing

Multilingual static site for flight reservations for visa applications.
English is the main language (`/`), every other language lives under its own prefix (`/tr/`, later `/id/`, `/hi/`, `/ky/`, `/pt-br/`).
Built with [Astro](https://astro.build) — output is plain static HTML in `dist/`.

Requires **Node 22+** (`nvm use` picks it up from `.nvmrc`).

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run images` | Regenerate Open Graph images and icons in `public/` |
| `npm run indexnow` | After deploying: submit all sitemap URLs to IndexNow (Bing, Yandex) |

## Structure

```
src/
  data/            ← all content and settings (edit here)
    i18n.ts          languages: codes, URL prefixes, which ones are enabled
    site.ts          price and UI strings per language
    home.ts          home page texts (hero, how it works, blog heading, FAQ) + FAQ page titles
    faq.ts           full FAQ for the /faq/ page
    countries.ts     visa country pages, texts per language
    cities.ts        city pages, each city belongs to a market (e.g. Istanbul → 'tr')
    posts.ts         blog articles (a post without slug/body = "coming soon" card)
    places.ts        TEST airports for the From / To dropdown
    company.ts       brand, contact email, WhatsApp, Instagram
    seo.ts           search engine verification, analytics IDs, IndexNow key
    routes.ts        registry of every page in every language → pages, hreflang, sitemap, llms.txt
  pages/           ← [...path].astro renders every route; sitemap.xml, llms.txt endpoints; 404
  components/      ← page templates and blocks (Hero, HowItWorks, Faq, Footer, …)
  layouts/         ← Layout.astro: <head> with SEO meta, header, footer, modal, consent banner
  lib/             ← schema.org builders, llms.txt generator
  scripts/         ← client JS (search dropdowns, date picker, FAQ, footer form, cookie consent)
  styles/          ← global.css — the whole design
public/            ← robots.txt, icons, OG images, manifest, IndexNow key
scripts/           ← Node scripts: image generation, IndexNow
seo/               ← semantic core and launch checklist (Russian)
```

## URLs

| | English (main) | Turkish |
|---|---|---|
| Home | `/` | `/tr/` |
| Country | `/<country>-visa-flight-reservation/` | `/tr/<ulke>-vizesi-icin-ucak-rezervasyonu/` |
| City | `/<city>-visa-flight-reservation/` | `/tr/<sehir>-vize-icin-ucak-rezervasyonu/` |
| FAQ | `/faq/` | `/tr/sss/` |
| Article | `/blog/<slug>/` | `/tr/blog/<slug>/` |

## Adding content

- **Country / city / article** — one object in `countries.ts` / `cities.ts` / `posts.ts` with a text for each language.
  Pages, footer links, related links, sitemap, hreflang and `llms.txt` update automatically.
  A page is generated only in the languages that have a text for it.
- **New language** — set `enabled: true` in `i18n.ts`, add UI strings to `site.ts`, texts to `home.ts` and `faq.ts`,
  then add its texts to countries / posts and its own cities (with `market: '<lang>'`).
  Add its date-picker locale in `src/scripts/app.js` and its OG image in `scripts/generate-images.mjs`.
