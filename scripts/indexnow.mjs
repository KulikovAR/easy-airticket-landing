// Sends every URL from the built sitemap to IndexNow (Bing, Yandex, Seznam, Naver…).
// Run after deploying: npm run build && npm run indexnow
import { readFile } from 'node:fs/promises';

const seo = await readFile('src/data/seo.ts', 'utf8');
const key = seo.match(/indexNowKey:\s*'([^']+)'/)?.[1];
if (!key) throw new Error('indexNowKey is missing in src/data/seo.ts');

const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error('No URLs in dist/sitemap.xml — run npm run build first');
const HOST = new URL(urlList[0]).host;

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} — ${urlList.length} URLs`);
