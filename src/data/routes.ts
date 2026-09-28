import { countries } from './countries';
import { cities } from './cities';
import { legalDocs } from './legal';
import type { Lang } from './site';

export type Alternates = Record<Lang, string>;

export const paths = {
  home: { tr: '/', en: '/en/' },
  faq: { tr: '/sss/', en: '/en/faq/' },
  contact: { tr: '/iletisim/', en: '/en/contact/' },
} satisfies Record<string, Alternates>;

export const landingPath = (slug: string, lang: Lang) => (lang === 'tr' ? `/${slug}/` : `/en/${slug}/`);
export const legalPath = (slug: string, lang: Lang) => (lang === 'tr' ? `/yasal/${slug}/` : `/en/legal/${slug}/`);

/** Every page with its TR/EN pair — used for hreflang, the language switcher and the sitemap. */
export function allPages(): Alternates[] {
  return [
    paths.home,
    ...[...countries, ...cities].map((l) => ({ tr: landingPath(l.tr.slug, 'tr'), en: landingPath(l.en.slug, 'en') })),
    paths.faq,
    paths.contact,
    ...legalDocs.map((d) => ({ tr: legalPath(d.tr.slug, 'tr'), en: legalPath(d.en.slug, 'en') })),
  ];
}
