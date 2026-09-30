// Single registry of every page on the site, in every enabled language.
// Used by the page generator, hreflang tags, the language menu, sitemap.xml and llms.txt.
import { postsIn, type Post } from './posts';
import { home, faqPage, blogPage } from './home';
import { generalFaq } from './faq';
import { enabledLangs, url, type Lang } from './i18n';

interface BaseRoute {
  /** Same key in every language = translations of one page. */
  key: string;
  lang: Lang;
  path: string;
}

export type Route =
  | (BaseRoute & { page: 'home' })
  | (BaseRoute & { page: 'faq' })
  | (BaseRoute & { page: 'blog' })
  | (BaseRoute & { page: 'post'; post: Post });

export const blogPath = (lang: Lang) => url(lang, blogPage[lang]!.slug);
export const postPath = (p: Post, lang: Lang) => url(lang, `${blogPage[lang]!.slug}/${p[lang]!.slug}`);
export const faqPath = (lang: Lang) => url(lang, faqPage[lang]!.slug);

export function allRoutes(): Route[] {
  return enabledLangs.flatMap((lang): Route[] => [
    ...(home[lang] ? [{ key: 'home', page: 'home' as const, lang, path: url(lang) }] : []),
    ...(faqPage[lang] && generalFaq[lang] ? [{ key: 'faq', page: 'faq' as const, lang, path: faqPath(lang) }] : []),
    ...(blogPage[lang] ? [{ key: 'blog', page: 'blog' as const, lang, path: blogPath(lang) }] : []),
    ...(blogPage[lang]
      ? postsIn(lang).map((post) => ({ key: `post:${post.key}`, page: 'post' as const, lang, path: postPath(post, lang), post }))
      : []),
  ]);
}

/** Paths of the same page in every language it exists in. */
export function alternates(key: string): Partial<Record<Lang, string>> {
  return Object.fromEntries(allRoutes().filter((r) => r.key === key).map((r) => [r.lang, r.path]));
}
