// schema.org JSON-LD builders.
import type { Crumb, Faq } from '../data/types';
import { price } from '../data/site';
import { company } from '../data/company';
import { enabledLangs, langInfo, type Lang } from '../data/i18n';

const SITE = company.website;
const abs = (path: string) => new URL(path, SITE).href;

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: company.brand,
    url: abs('/'),
    inLanguage: enabledLangs.map((l) => langInfo(l).hreflang),
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.brand,
    url: abs('/'),
    logo: abs('/icon-512.png'),
    ...(company.email && { email: company.email }),
    ...(company.phone && { telephone: company.phone }),
    ...(company.instagram && { sameAs: [company.instagram] }),
  };
}

export function faqSchema(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

/** @param areaServed country name for market-specific pages (e.g. city pages); omitted = worldwide. */
export function serviceSchema(name: string, path: string, areaServed?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: 'Flight reservation for visa application',
    url: abs(path),
    ...(areaServed && { areaServed: { '@type': 'Country', name: areaServed } }),
    provider: { '@type': 'Organization', name: company.brand, url: abs('/') },
    offers: {
      '@type': 'Offer',
      price: price.amount,
      priceCurrency: price.currency,
      availability: 'https://schema.org/InStock',
    },
  };
}

export function articleSchema(a: { title: string; description: string; lang: Lang; date: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    inLanguage: langInfo(a.lang).hreflang,
    datePublished: a.date,
    dateModified: a.date,
    author: { '@type': 'Organization', name: company.brand, url: abs('/') },
    publisher: { '@type': 'Organization', name: company.brand, logo: { '@type': 'ImageObject', url: abs('/icon-512.png') } },
    mainEntityOfPage: abs(a.path),
    image: abs(`/og/og-${a.lang}.png`),
  };
}
