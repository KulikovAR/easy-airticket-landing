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

export interface Landing {
  id: string;
  kind: 'country' | 'city';
  flag?: string;
  tr: LandingText;
  en: LandingText;
}
