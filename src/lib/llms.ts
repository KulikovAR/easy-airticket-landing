import { countries } from '../data/countries';
import { cities } from '../data/cities';
import { generalFaq } from '../data/faq';
import { legalDocs } from '../data/legal';
import { price, type Lang } from '../data/site';
import { company } from '../data/company';
import { landingPath, legalPath, paths } from '../data/routes';
import type { Landing } from '../data/types';

const abs = (p: string) => new URL(p, company.website).href;

const intro = {
  tr: `${company.brand}, Türkiye’de vize başvurusu yapanlar için doğrulanabilir PNR kodlu uçuş rezervasyonu hazırlayan bir online hizmettir. Müşteri bilet ücretini ödemez; yalnızca ${price.tr.display} hizmet bedeli öder. Belgeler 30 dakika içinde e-postayla gönderilir, rezervasyon 7 güne kadar geçerlidir. Rezervasyon bilet değildir ve seyahat için kullanılamaz. ${company.brand} bir konsolosluk veya resmi vize merkezi değildir.`,
  en: `${company.brand} is an online service in Türkiye that prepares flight reservations with a verifiable PNR code for visa applications (often searched as "dummy ticket for visa"). Customers do not pay the ticket price, only a service fee of ${price.en.display} (${price.tr.display} on the Turkish site). Documents are emailed within 30 minutes and the reservation is valid for up to 7 days. A reservation is not a ticket and cannot be used to travel. ${company.brand} is not a consulate or an official visa centre.`,
};

const landingLine = (l: Landing, lang: Lang) => `- [${l[lang].h1}](${abs(landingPath(l[lang].slug, lang))}): ${l[lang].description}`;

/** Short index for AI crawlers (https://llmstxt.org). */
export function llmsTxt(): string {
  return `# ${company.brand}

> ${intro.en}

${intro.tr}

Languages: Turkish (default, ${abs('/')}) and English (${abs('/en/')}).

## Main pages
- [Vize için uçak bileti rezervasyonu (TR)](${abs(paths.home.tr)}): Ana sayfa — hizmet, fiyat, nasıl çalışır, SSS
- [Flight reservation for visa (EN)](${abs(paths.home.en)}): Home — service, price, how it works, FAQ
- [Sıkça sorulan sorular](${abs(paths.faq.tr)}) · [FAQ](${abs(paths.faq.en)})
- [İletişim](${abs(paths.contact.tr)}) · [Contact](${abs(paths.contact.en)})

## Visa countries (TR)
${countries.map((l) => landingLine(l, 'tr')).join('\n')}

## Visa countries (EN)
${countries.map((l) => landingLine(l, 'en')).join('\n')}

## Cities in Türkiye (TR)
${cities.map((l) => landingLine(l, 'tr')).join('\n')}

## Cities in Türkiye (EN)
${cities.map((l) => landingLine(l, 'en')).join('\n')}

## Legal
${legalDocs.map((d) => `- [${d.tr.title}](${abs(legalPath(d.tr.slug, 'tr'))}) · [${d.en.title}](${abs(legalPath(d.en.slug, 'en'))})`).join('\n')}

## Optional
- [Full content for LLMs](${abs('/llms-full.txt')}): all page texts and FAQs in one file
- [Sitemap](${abs('/sitemap.xml')})
`;
}

function landingFull(l: Landing, lang: Lang): string {
  const c = l[lang];
  const sections = c.sections
    .map((s) => [`### ${s.h2}`, ...(s.paragraphs ?? []), ...(s.list ?? []).map((i) => `- ${i}`)].join('\n\n'))
    .join('\n\n');
  const faq = c.faq.map((f) => `**${f.q}**\n${f.a}`).join('\n\n');
  return `## ${c.h1}\n\nURL: ${abs(landingPath(c.slug, lang))}\n\n${c.lead}\n\n${c.intro.join('\n\n')}\n\n${sections}\n\n${faq}`;
}

/** Full text of the public pages for AI crawlers. */
export function llmsFullTxt(): string {
  const faq = (lang: Lang) => generalFaq[lang].map((f) => `**${f.q}**\n${f.a}`).join('\n\n');
  return `# ${company.brand} — full content

> ${intro.en}

${intro.tr}

---

# Türkçe

## Sıkça sorulan sorular

URL: ${abs(paths.faq.tr)}

${faq('tr')}

${[...countries, ...cities].map((l) => landingFull(l, 'tr')).join('\n\n---\n\n')}

---

# English

## Frequently asked questions

URL: ${abs(paths.faq.en)}

${faq('en')}

${[...countries, ...cities].map((l) => landingFull(l, 'en')).join('\n\n---\n\n')}
`;
}
