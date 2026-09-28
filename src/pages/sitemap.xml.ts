import type { APIRoute } from 'astro';
import { allPages } from '../data/routes';

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const urls = allPages().flatMap((alt) =>
    [alt.tr, alt.en].map(
      (loc) => `  <url>
    <loc>${abs(loc)}</loc>
    <xhtml:link rel="alternate" hreflang="tr" href="${abs(alt.tr)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(alt.en)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(alt.tr)}"/>
  </url>`,
    ),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
