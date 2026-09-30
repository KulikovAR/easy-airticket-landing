// Single registry of every page on the site, in every enabled language.
// Used by the page generator, hreflang tags, the language menu, sitemap.xml and llms.txt.
import { countries } from './countries';
import { cities } from './cities';
import { posts, type Post } from './posts';
import { home, faqPage } from './home';
import { generalFaq } from './faq';
import { enabledLangs, url, type Lang } from './i18n';
import type { Landing } from './types';

interface BaseRoute {
  /** Same key in every language = translations of one page. */
  key: string;
  lang: Lang;
  path: string;
}

export type Route =
  | (BaseRoute & { page: 'home' })
  | (BaseRoute & { page: 'faq' })
  | (BaseRoute & { page: 'landing'; landing: Landing })
  | (BaseRoute & { page: 'post'; post: Post });

export const landings: Landing[] = [...countries, ...cities];

export const landingPath = (l: Landing, lang: Lang) => url(lang, l[lang]!.slug);
export const postPath = (p: Post, lang: Lang) => url(lang, `blog/${p[lang]!.slug}`);
export const faqPath = (lang: Lang) => url(lang, faqPage[lang]!.slug);

/** Countries / cities that have a page in this language. */
export const landingsIn = (lang: Lang, kind: Landing['kind']) => landings.filter((l) => l.kind === kind && l[lang]);

export function allRoutes(): Route[] {
  return enabledLangs.flatMap((lang): Route[] => [
    ...(home[lang] ? [{ key: 'home', page: 'home' as const, lang, path: url(lang) }] : []),
    ...(faqPage[lang] && generalFaq[lang] ? [{ key: 'faq', page: 'faq' as const, lang, path: faqPath(lang) }] : []),
    ...landings
      .filter((l) => l[lang])
      .map((landing) => ({ key: `landing:${landing.key}`, page: 'landing' as const, lang, path: landingPath(landing, lang), landing })),
    ...posts
      .filter((p) => p[lang]?.slug && p[lang]?.body)
      .map((post) => ({ key: `post:${post.key}`, page: 'post' as const, lang, path: postPath(post, lang), post })),
  ]);
}

/** Paths of the same page in every language it exists in. */
export function alternates(key: string): Partial<Record<Lang, string>> {
  return Object.fromEntries(allRoutes().filter((r) => r.key === key).map((r) => [r.lang, r.path]));
}
