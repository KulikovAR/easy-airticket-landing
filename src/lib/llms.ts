// llms.txt / llms-full.txt — description of the service for AI search (https://llmstxt.org).
import { generalFaq } from '../data/faq';
import { livePosts, type Post, type PostKind } from '../data/posts';
import { home } from '../data/home';
import { price } from '../data/site';
import { company } from '../data/company';
import { enabledLangs, langInfo, url, type Lang } from '../data/i18n';
import { blogPath, faqPath, postPath } from '../data/routes';

const abs = (p: string) => new URL(p, company.website).href;

const intro = `${company.brand} is an online service that prepares flight reservations with a verifiable PNR code for visa applications (often searched as "dummy ticket for visa"). Customers do not pay the ticket price, only a service fee of ${price.display}. Documents are emailed within 30 minutes and the reservation is valid for up to 7 days. A reservation is not a ticket and cannot be used to travel. ${company.brand} is not a consulate or an official visa centre.`;

const languagesLine = enabledLangs.map((l) => `${langInfo(l).label} (${abs(url(l))})`).join(', ');
const groups: [PostKind, string][] = [['guide', 'Guides'], ['country', 'Visa countries'], ['city', 'Cities']];
const postLine = (p: Post, lang: Lang) => `- [${p[lang]!.title}](${abs(postPath(p, lang))}): ${p[lang]!.description}`;

function langIndex(lang: Lang): string {
  const name = langInfo(lang).label;
  const posts = livePosts(lang);
  return [
    `## ${name}`,
    `- [${home[lang]!.h1}](${abs(url(lang))}): ${home[lang]!.description}`,
    ...(generalFaq[lang] ? [`- [FAQ](${abs(faqPath(lang))})`] : []),
    `- [Blog](${abs(blogPath(lang))})`,
    ...groups.flatMap(([kind, title]) => {
      const list = posts.filter((p) => p.kind === kind);
      return list.length ? ['', `### ${title} (${name})`, ...list.map((p) => postLine(p, lang))] : [];
    }),
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

const stripHtml = (html: string) =>
  html
    .replace(/<\/(p|h2|li|tr)>/g, '\n')
    .replace(/<h2>/g, '### ')
    .replace(/<li>/g, '- ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

function postFull(p: Post, lang: Lang): string {
  const c = p[lang]!;
  const faq = (c.faq ?? []).map((f) => `**${f.q}**\n${f.a}`).join('\n\n');
  return `## ${c.title}\n\nURL: ${abs(postPath(p, lang))}\n\n${stripHtml(c.body!)}${faq ? `\n\n${faq}` : ''}`;
}

function langFull(lang: Lang): string {
  const faq = (generalFaq[lang] ?? []).map((f) => `**${f.q}**\n${f.a}`).join('\n\n');
  const blocks = [...(faq ? [`## FAQ\n\nURL: ${abs(faqPath(lang))}\n\n${faq}`] : []), ...livePosts(lang).map((p) => postFull(p, lang))];
  return `# ${langInfo(lang).label}\n\n${blocks.join('\n\n---\n\n')}`;
}

/** Full text of the public pages for AI crawlers. */
export function llmsFullTxt(): string {
  return `# ${company.brand} — full content

> ${intro}

${enabledLangs.map(langFull).join('\n\n---\n\n')}
`;
}
