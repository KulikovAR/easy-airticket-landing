import type { Lang } from './i18n';

export interface Faq {
  q: string;
  a: string;
}

export interface Section {
  h2: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LandingText {
  slug: string;
  /** Short name used in cards, breadcrumbs and footer links. */
  name: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  intro: string[];
  sections: Section[];
  faq: Faq[];
}

/** A country or city page. Texts are keyed by language; a page exists only in languages that have a text. */
export type Landing = {
  key: string;
  kind: 'country' | 'city';
  flag?: string;
  /** City pages only: the language/market the city belongs to (e.g. 'tr' for Istanbul). */
  market?: Lang;
} & Partial<Record<Lang, LandingText>>;

export interface Crumb {
  name: string;
  href: string;
}
