# Easy Airticket — landing

Bilingual (TR / EN) static site for flight reservations for visa applications, targeting Türkiye.
Built with [Astro](https://astro.build) — output is plain static HTML in `dist/`.

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
    company.ts       company details; empty values render as [PLACEHOLDER]
    seo.ts           search engine verification, analytics IDs, IndexNow key
    site.ts          price and UI strings (TR/EN)
    countries.ts     visa country pages (TR/EN texts)
    cities.ts        Turkish city pages (TR/EN texts)
    faq.ts           general FAQ
    legal.ts         legal documents list (slugs, titles, descriptions)
    routes.ts        URL scheme and TR↔EN page pairs (hreflang, sitemap, language switch)
  content/legal/   ← legal document texts in Markdown, {{field}} tokens are filled from company.ts
  components/      ← page templates and blocks
  layouts/         ← Layout.astro: <head>, SEO meta, header, footer, consent banner
  pages/           ← routes (thin wrappers around components) + sitemap.xml, llms.txt endpoints
  lib/             ← schema.org builders, placeholder filling, llms.txt generator
  scripts/         ← client JS (search form, date picker, cookie consent)
public/            ← static files: robots.txt, icons, OG images, manifest, IndexNow key
scripts/           ← Node scripts: image generation, IndexNow
seo/               ← semantic core and launch checklist (Russian)
```

## URLs

| | Turkish (default) | English |
|---|---|---|
| Home | `/` | `/en/` |
| Country | `/<ulke>-vizesi-icin-ucak-rezervasyonu/` | `/en/<country>-visa-flight-reservation/` |
| City | `/<sehir>-vize-icin-ucak-rezervasyonu/` | `/en/<city>-visa-flight-reservation/` |
| FAQ / Contact | `/sss/`, `/iletisim/` | `/en/faq/`, `/en/contact/` |
| Legal | `/yasal/<slug>/` | `/en/legal/<slug>/` |

Adding a country or city = one new object in `countries.ts` / `cities.ts`; pages, footer links, sitemap,
hreflang and `llms.txt` update automatically.
