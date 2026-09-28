import type { Faq } from '../data/types';
import { price, type Lang } from '../data/site';
import { company } from '../data/company';
import type { Crumb } from '../components/Breadcrumbs.astro';

const SITE = company.website;

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
      item: new URL(c.href, SITE).href,
    })),
  };
}

export function serviceSchema(lang: Lang, name: string, url: string, areaServed = 'TR') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: 'Flight reservation for visa application',
    url: new URL(url, SITE).href,
    areaServed: { '@type': 'Country', name: areaServed === 'TR' ? 'Türkiye' : areaServed },
    provider: { '@type': 'Organization', name: company.brand, url: company.website },
    offers: {
      '@type': 'Offer',
      price: price[lang].amount,
      priceCurrency: price[lang].currency,
      availability: 'https://schema.org/InStock',
    },
  };
}
