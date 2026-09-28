// Generates social preview images (Open Graph) and app icons into public/.
// Run: npm run images
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const PLANE = 'M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z';
const FONT = "font-family=\"Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif\"";

const og = {
  tr: {
    title: ['Vize başvurusu için', 'uçak bileti rezervasyonu'],
    badges: ['PNR kodlu', '30 dakikada', '7 güne kadar geçerli'],
    price: '₺999',
  },
  en: {
    title: ['Flight reservation', 'for your visa application'],
    badges: ['Verifiable PNR', 'In 30 minutes', 'Valid up to 7 days'],
    price: '€25',
  },
};

function ogSvg({ title, badges, price }) {
  let x = 80;
  const pills = badges
    .map((b) => {
      const w = 40 + b.length * 12;
      const el = `<rect x="${x}" y="430" width="${w}" height="52" rx="26" fill="#ffffff" fill-opacity=".14"/>
        <text x="${x + w / 2}" y="464" text-anchor="middle" ${FONT} font-size="24" font-weight="600" fill="#ffffff">${b}</text>`;
      x += w + 14;
      return el;
    })
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b2a5b"/><stop offset="1" stop-color="#1456b8"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g transform="translate(820 90) rotate(-12) scale(17)" fill="#ffffff" fill-opacity=".08"><path d="${PLANE}"/></g>
  <rect x="80" y="70" width="64" height="64" rx="16" fill="#e30a17"/>
  <g transform="translate(92 82) scale(1.667)" fill="#ffffff"><path d="${PLANE}"/></g>
  <text x="164" y="114" ${FONT} font-size="34" font-weight="800" fill="#ffffff">Easy Airticket</text>
  <text x="80" y="260" ${FONT} font-size="64" font-weight="800" fill="#ffffff" letter-spacing="-1.5">${title[0]}</text>
  <text x="80" y="340" ${FONT} font-size="64" font-weight="800" fill="#ffffff" letter-spacing="-1.5">${title[1]}</text>
  ${pills}
  <rect x="930" y="520" width="190" height="70" rx="18" fill="#e30a17"/>
  <text x="1025" y="568" text-anchor="middle" ${FONT} font-size="38" font-weight="800" fill="#ffffff">${price}</text>
  <text x="80" y="570" ${FONT} font-size="24" fill="#ffffff" fill-opacity=".7">easy-airticket.com</text>
</svg>`;
}

const iconSvg = (size, pad) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24">
  <rect width="24" height="24" fill="#e30a17"/>
  <g transform="translate(${pad} ${pad}) scale(${(24 - pad * 2) / 24})" fill="#ffffff"><path d="${PLANE}"/></g>
</svg>`;

await mkdir('public/og', { recursive: true });
for (const [lang, data] of Object.entries(og)) {
  await sharp(Buffer.from(ogSvg(data))).png().toFile(`public/og/og-${lang}.png`);
}
await sharp(Buffer.from(iconSvg(180, 4))).png().toFile('public/apple-touch-icon.png');
await sharp(Buffer.from(iconSvg(192, 4))).png().toFile('public/icon-192.png');
await sharp(Buffer.from(iconSvg(512, 5))).png().toFile('public/icon-512.png');
// PNG data in an .ico file is supported by all current browsers
await sharp(Buffer.from(iconSvg(48, 3))).png().toFile('public/favicon.ico');
console.log('Images generated in public/');
