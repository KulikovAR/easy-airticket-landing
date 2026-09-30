// llms.txt / llms-full.txt — description of the service for AI search (https://llmstxt.org).
import { countries } from '../data/countries';
import { cities } from '../data/cities';
import { generalFaq } from '../data/faq';
import { posts } from '../data/posts';
import { home } from '../data/home';
import { price } from '../data/site';
import { company } from '../data/company';
import { enabledLangs, langInfo, url, type Lang } from '../data/i18n';
import { faqPath, landingPath, postPath } from '../data/routes';
import type { Landing } from '../data/types';

const abs = (p: string) => new URL(p, company.website).href;

const intro = `${company.brand} is an online service that prepares flight reservations with a verifiable PNR code for visa applications (often searched as "dummy ticket for visa"). Customers do not pay the ticket price, only a service fee of ${price.display}. Documents are emailed within 30 minutes and the reservation is valid for up to 7 days. A reservation is not a ticket and cannot be used to travel. ${company.brand} is not a consulate or an official visa centre.`;

const languagesLine = enabledLangs.map((l) => `${langInfo(l).label} (${abs(url(l))})`).join(', ');

const landingLine = (l: Landing, lang: Lang) => `- [${l[lang]!.h1}](${abs(landingPath(l, lang))}): ${l[lang]!.description}`;
const livePosts = (lang: Lang) => posts.filter((p) => p[lang]?.slug && p[lang]?.body);

function langIndex(lang: Lang): string {
  const name = langInfo(lang).label;
  const cs = countries.filter((l) => l[lang]);
  const ct = cities.filter((l) => l[lang]);
  const ps = livePosts(lang);
  return [
    `## ${name}`,
    `- [${home[lang]!.h1}](${abs(url(lang))}): ${home[lang]!.description}`,
    ...(generalFaq[lang] ? [`- [FAQ](${abs(faqPath(lang))})`] : []),
    ...(cs.length ? ['', `### Visa countries (${name})`, ...cs.map((l) => landingLine(l, lang))] : []),
    ...(ct.length ? ['', `### Cities (${name})`, ...ct.map((l) => landingLine(l, lang))] : []),
    ...(ps.length ? ['', `### Articles (${name})`, ...ps.map((p) => `- [${p[lang]!.title}](${abs(postPath(p, lang))}): ${p[lang]!.description}`)] : []),
  ].join('\n');
}

/** Short index for AI crawlers. */
export function llmsTxt(): string {
  return `# ${company.brand}

> ${intro}

Languages: ${languagesLine}.

${enabledLangs.map(langIndex).join('\n\n')}

## Optional
- [Full content for LLMs](${abs('/llms-full.txt')}): all page texts and FAQs in one file
- [Sitemap](${abs('/sitemap.xml')})
`;
}

function landingFull(l: Landing, lang: Lang): string {
  const c = l[lang]!;
  const sections = c.sections
    .map((s) => [`### ${s.h2}`, ...(s.paragraphs ?? []), ...(s.list ?? []).map((i) => `- ${i}`)].join('\n\n'))
    .join('\n\n');
  const faq = c.faq.map((f) => `**${f.q}**\n${f.a}`).join('\n\n');
  return `## ${c.h1}\n\nURL: ${abs(landingPath(l, lang))}\n\n${c.lead}\n\n${c.intro.join('\n\n')}\n\n${sections}\n\n${faq}`;
}

const stripHtml = (html: string) =>
  html
    .replace(/<\/(p|h2|li|tr)>/g, '\n')
    .replace(/<h2>/g, '### ')
    .replace(/<li>/g, '- ')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

function langFull(lang: Lang): string {
  const faq = (generalFaq[lang] ?? []).map((f) => `**${f.q}**\n${f.a}`).join('\n\n');
  const blocks = [
    ...(faq ? [`## FAQ\n\nURL: ${abs(faqPath(lang))}\n\n${faq}`] : []),
    ...[...countries, ...cities].filter((l) => l[lang]).map((l) => landingFull(l, lang)),
    ...livePosts(lang).map((p) => `## ${p[lang]!.title}\n\nURL: ${abs(postPath(p, lang))}\n\n${stripHtml(p[lang]!.body!)}`),
  ];
  return `# ${langInfo(lang).label}\n\n${blocks.join('\n\n---\n\n')}`;
}

/** Full text of the public pages for AI crawlers. */
export function llmsFullTxt(): string {
  return `# ${company.brand} — full content

> ${intro}

${enabledLangs.map(langFull).join('\n\n---\n\n')}
`;
}
