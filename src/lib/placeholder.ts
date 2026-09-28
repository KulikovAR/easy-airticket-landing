import { company, placeholderLabels, type CompanyField } from '../data/company';
import type { Lang } from '../data/site';

export function phLabel(field: CompanyField, lang: Lang): string {
  return `[${placeholderLabels[lang][field] ?? field.toUpperCase()}]`;
}

/** Company value as HTML, or a highlighted placeholder when it is not filled in yet. */
export function companyHtml(field: CompanyField, lang: Lang): string {
  const value = company[field];
  return value ? escapeHtml(value) : `<mark class="ph">${phLabel(field, lang)}</mark>`;
}

/** Replaces {{field}} tokens in a text with company values or placeholders. */
export function fillTokens(text: string, lang: Lang, extra: Record<string, string> = {}): string {
  return text.replace(/\{\{(\w+)\}\}/g, (token, key: string) => {
    if (key in extra) return extra[key];
    if (key in company) return companyHtml(key as CompanyField, lang);
    return token;
  });
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
}
