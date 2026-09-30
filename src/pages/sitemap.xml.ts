import type { APIRoute } from 'astro';
import { allRoutes } from '../data/routes';
import { defaultLang, langInfo } from '../data/i18n';

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const routes = allRoutes();
  const urls = routes.map((route) => {
    const siblings = routes.filter((r) => r.key === route.key);
    const xDefault = siblings.find((r) => r.lang === defaultLang) ?? route;
    const lastmod = route.page === 'post' && route.post.date ? `\n    <lastmod>${route.post.date}</lastmod>` : '';
    const links = siblings
      .map((r) => `    <xhtml:link rel="alternate" hreflang="${langInfo(r.lang).hreflang}" href="${abs(r.path)}"/>`)
      .join('\n');
    return `  <url>
    <loc>${abs(route.path)}</loc>${lastmod}
${links}
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(xDefault.path)}"/>
  </url>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
