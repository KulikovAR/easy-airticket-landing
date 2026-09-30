// Languages of the site. English is the main language and lives at the root (/),
// every other language lives under its own prefix (/tr/, /id/, …).
//
// To launch a new language: set `enabled: true`, add its UI strings to `ui` in site.ts
// and its texts to the content files (home.ts, faq.ts, countries.ts, cities.ts, posts.ts).
// Pages without a text in that language are simply not generated.

export type Lang = 'en' | 'tr' | 'id' | 'hi' | 'ky' | 'pt-br';

export interface LanguageInfo {
  code: Lang;
  /** URL prefix without slashes; '' for the default language. */
  prefix: string;
  /** Name of the language in that language — shown in the language menu. */
  label: string;
  short: string;
  htmlLang: string;
  hreflang: string;
  ogLocale: string;
  /** Country this language targets — used for city pages and schema.org areaServed. */
  market: string;
  enabled: boolean;
}

export const languages: LanguageInfo[] = [
  { code: 'en', prefix: '', label: 'English', short: 'EN', htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US', market: '', enabled: true },
  { code: 'tr', prefix: 'tr', label: 'Türkçe', short: 'TR', htmlLang: 'tr', hreflang: 'tr', ogLocale: 'tr_TR', market: 'Türkiye', enabled: true },
  { code: 'id', prefix: 'id', label: 'Bahasa Indonesia', short: 'ID', htmlLang: 'id', hreflang: 'id', ogLocale: 'id_ID', market: 'Indonesia', enabled: false },
  { code: 'hi', prefix: 'hi', label: 'हिन्दी', short: 'HI', htmlLang: 'hi', hreflang: 'hi', ogLocale: 'hi_IN', market: 'India', enabled: false },
  { code: 'ky', prefix: 'ky', label: 'Кыргызча', short: 'KY', htmlLang: 'ky', hreflang: 'ky', ogLocale: 'ky_KG', market: 'Kyrgyzstan', enabled: false },
  { code: 'pt-br', prefix: 'pt-br', label: 'Português (Brasil)', short: 'PT', htmlLang: 'pt-BR', hreflang: 'pt-BR', ogLocale: 'pt_BR', market: 'Brazil', enabled: false },
];

export const defaultLang: Lang = 'en';

export const enabledLangs = languages.filter((l) => l.enabled).map((l) => l.code);

export const langInfo = (lang: Lang) => languages.find((l) => l.code === lang)!;

/** Site path for a language: url('tr', 'sss') → '/tr/sss/', url('en') → '/'. */
export function url(lang: Lang, rest = ''): string {
  const parts = [langInfo(lang).prefix, ...rest.split('/')].filter(Boolean);
  return parts.length ? `/${parts.join('/')}/` : '/';
}
