import { countries } from './countries';
import { cities } from './cities';
import { enabledLangs, langInfo, type Lang } from './i18n';
import type { Faq, Landing, LandingText } from './types';

export interface PostText {
  title: string;
  slug: string;
  description: string;
  /** <title> of the page; defaults to "<title> — Easy Airticket". */
  metaTitle?: string;
  /** Article body as HTML. */
  body: string;
  /** Questions shown as an accordion under the article (+ FAQPage schema). */
  faq?: Faq[];
}

export type PostKind = 'guide' | 'country' | 'city';

export type Post = {
  key: string;
  kind: PostKind;
  date?: string;
  /** Cover illustration: icon (or a flag emoji) + colour theme. */
  art: 'ticket' | 'pin';
  flag?: string;
  theme: 'blue' | 'brand' | 'ink';
} & Partial<Record<Lang, PostText>>;

/** Hand-written guides. */
const guides: Post[] = [
  {
    key: 'flight-reservation-for-visa',
    kind: 'guide',
    date: '2026-09-24',
    art: 'ticket',
    theme: 'blue',
    en: {
      slug: 'flight-reservation-for-visa',
      title: 'Flight reservation for a visa: what it is and why embassies ask for it',
      description: 'What a flight reservation for a visa is, how it differs from a ticket, why consulates ask for it and how to get one in 30 minutes for a $15 service fee.',
      body: "<p class=\"prose__lead\">When you apply for a visa, most consulates want to see your travel plans — including how you will enter and leave the country. The catch is that buying a real ticket before you know the visa decision is risky: if the application is refused or delayed, a non-refundable fare can simply be lost. That's why many travelers submit a flight reservation instead.</p>\n\n<h2>What is a flight reservation?</h2>\n<p>A flight reservation (also called a flight itinerary or a booking for a visa) is a booking made in an airline reservation system for specific flights, dates and passengers. It has its own booking code — the PNR — but it is not a paid ticket yet. The seats are held for a limited time, after which the booking is cancelled automatically.</p>\n\n<h2>Why do consulates ask for it?</h2>\n<p>A reservation shows the consular officer that your trip is planned and realistic:</p>\n<ul>\n  <li>your entry and exit dates match the period you are requesting the visa for;</li>\n  <li>the route is clear — where you arrive and where you leave from;</li>\n  <li>you have a return or onward flight, which means you intend to leave the country on time.</li>\n</ul>\n<p>Many consulates, including those of the Schengen countries, list a flight reservation or itinerary among the supporting documents, and some explicitly recommend not buying a ticket until the visa is issued.</p>\n\n<h2>Reservation vs. ticket</h2>\n<div class=\"table-wrap\">\n<table>\n  <thead><tr><th></th><th>Flight reservation</th><th>Paid ticket</th></tr></thead>\n  <tbody>\n    <tr><th>What you pay</th><td>Only a service fee</td><td>The full fare</td></tr>\n    <tr><th>If the visa is refused</th><td>Nothing else to lose</td><td>The fare may be non-refundable</td></tr>\n    <tr><th>Validity</th><td>Limited time (with us — up to 7 days)</td><td>Until the flight date</td></tr>\n    <tr><th>Booking code (PNR)</th><td>Yes</td><td>Yes</td></tr>\n  </tbody>\n</table>\n</div>\n\n<h2>How to get a reservation with Easy Airticket</h2>\n<ol>\n  <li>Select the cities, dates and number of passengers in the search bar and choose any suitable flight.</li>\n  <li>Enter your passport details and contact information.</li>\n  <li>Pay only our service fee — <strong>$15</strong> — with any bank card.</li>\n  <li>Receive the ready documents at your email within <strong>30 minutes</strong>, print them and attach them to your application.</li>\n</ol>\n\n<h2>Tips before you submit</h2>\n<ul>\n  <li><strong>Match the dates.</strong> Flight dates should be the same as in your visa application form and travel insurance.</li>\n  <li><strong>Book a round trip or an onward flight.</strong> A one-way booking without a way out raises questions.</li>\n  <li><strong>Plan the timing.</strong> The reservation is valid for up to 7 days, so book it shortly before your appointment.</li>\n  <li><strong>Check your consulate's requirements.</strong> The list of documents differs by country and visa type — always confirm it on the official website.</li>\n</ul>",
    },
    tr: {
      slug: 'vize-icin-ucus-rezervasyonu',
      title: 'Vize için uçuş rezervasyonu: nedir ve konsolosluklar neden ister?',
      description: 'Vize için uçuş rezervasyonu nedir, biletten farkı ne, konsolosluklar neden ister ve 15 $ hizmet bedeliyle 30 dakikada nasıl alınır.',
      body: "<p class=\"prose__lead\">Vize başvurusu yaparken çoğu konsolosluk seyahat planınızı görmek ister — ülkeye nasıl gireceğinizi ve nasıl çıkacağınızı. Sorun şu ki, vize kararını bilmeden gerçek bir bilet satın almak risklidir: başvuru reddedilir ya da gecikirse iadesiz bir bilet boşa gidebilir. Bu yüzden birçok yolcu bunun yerine uçuş rezervasyonu sunar.</p>\n\n<h2>Uçuş rezervasyonu nedir?</h2>\n<p>Uçuş rezervasyonu (uçuş planı ya da vize için rezervasyon olarak da bilinir), belirli uçuşlar, tarihler ve yolcular için havayolu rezervasyon sisteminde yapılan bir kayıttır. Kendi rezervasyon kodu — PNR — vardır, ancak henüz ödenmiş bir bilet değildir. Koltuklar sınırlı bir süre için tutulur, ardından rezervasyon otomatik olarak iptal edilir.</p>\n\n<h2>Konsolosluklar neden ister?</h2>\n<p>Rezervasyon, konsolosluk görevlisine seyahatinizin planlı ve gerçekçi olduğunu gösterir:</p>\n<ul>\n  <li>giriş ve çıkış tarihleriniz, vize talep ettiğiniz dönemle örtüşür;</li>\n  <li>rota nettir — nereye varıp nereden ayrılacağınız bellidir;</li>\n  <li>dönüş ya da devam uçuşunuz vardır, yani ülkeden zamanında ayrılmayı planlıyorsunuz.</li>\n</ul>\n<p>Schengen ülkeleri dahil birçok konsolosluk, destekleyici belgeler arasında uçuş rezervasyonunu veya uçuş planını sayar; bazıları ise vize çıkana kadar bilet satın alınmamasını açıkça tavsiye eder.</p>\n\n<h2>Rezervasyon ve bilet karşılaştırması</h2>\n<div class=\"table-wrap\">\n<table>\n  <thead><tr><th></th><th>Uçuş rezervasyonu</th><th>Ödenmiş bilet</th></tr></thead>\n  <tbody>\n    <tr><th>Ne ödersiniz</th><td>Yalnızca hizmet bedeli</td><td>Biletin tam fiyatı</td></tr>\n    <tr><th>Vize reddedilirse</th><td>Başka kaybınız olmaz</td><td>Bilet iadesiz olabilir</td></tr>\n    <tr><th>Geçerlilik</th><td>Sınırlı süre (bizde 7 güne kadar)</td><td>Uçuş tarihine kadar</td></tr>\n    <tr><th>Rezervasyon kodu (PNR)</th><td>Var</td><td>Var</td></tr>\n  </tbody>\n</table>\n</div>\n\n<h2>Easy Airticket ile rezervasyon nasıl alınır?</h2>\n<ol>\n  <li>Arama satırında şehirleri, tarihleri ve yolcu sayısını seçin, size uygun herhangi bir uçuşu belirleyin.</li>\n  <li>Pasaport bilgilerinizi ve iletişim bilgilerinizi girin.</li>\n  <li>Herhangi bir banka kartıyla yalnızca hizmet bedelimizi — <strong>15 $</strong> — ödeyin.</li>\n  <li>Hazır belgeleri <strong>30 dakika</strong> içinde e-postanızda alın, yazdırın ve başvurunuza ekleyin.</li>\n</ol>\n\n<h2>Başvurmadan önce ipuçları</h2>\n<ul>\n  <li><strong>Tarihleri eşleştirin.</strong> Uçuş tarihleri, vize başvuru formunuzdaki ve seyahat sigortanızdaki tarihlerle aynı olmalıdır.</li>\n  <li><strong>Gidiş-dönüş ya da devam uçuşu ayırtın.</strong> Çıkışı olmayan tek yön rezervasyon soru işaretleri doğurur.</li>\n  <li><strong>Zamanlamayı planlayın.</strong> Rezervasyon 7 güne kadar geçerlidir, bu yüzden randevunuzdan kısa süre önce yapın.</li>\n  <li><strong>Konsolosluğunuzun şartlarını kontrol edin.</strong> Belge listesi ülkeye ve vize türüne göre değişir — her zaman resmi siteden teyit edin.</li>\n</ul>",
    },
  },
];

// ---------------------------------------------------------------------------
// Country and city guides are generated from countries.ts / cities.ts.

const COUNTRY_CITY_DATE = '2026-09-28';
const themes: Post['theme'][] = ['blue', 'brand', 'ink'];

const esc = (str: string) => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function landingBody(c: LandingText): string {
  return [
    `<p class="prose__lead">${esc(c.lead)}</p>`,
    ...c.intro.map((p) => `<p>${esc(p)}</p>`),
    ...c.sections.flatMap((s) => [
      `<h2>${esc(s.h2)}</h2>`,
      ...(s.paragraphs ?? []).map((p) => `<p>${esc(p)}</p>`),
      ...(s.list ? [`<ul>\n${s.list.map((i) => `  <li>${esc(i)}</li>`).join('\n')}\n</ul>`] : []),
    ]),
  ].join('\n\n');
}

function fromLanding(l: Landing, i: number): Post {
  const texts = Object.fromEntries(
    enabledLangs
      .filter((lang) => l[lang])
      .map((lang) => {
        const c = l[lang]!;
        return [lang, { slug: c.slug, title: c.h1, metaTitle: c.title, description: c.description, body: landingBody(c), faq: c.faq }];
      }),
  );
  return {
    key: l.key,
    kind: l.kind,
    date: COUNTRY_CITY_DATE,
    art: l.kind === 'city' ? 'pin' : 'ticket',
    flag: l.flag,
    theme: themes[i % themes.length],
    ...texts,
  };
}

export const posts: Post[] = [...guides, ...countries.map(fromLanding), ...cities.map(fromLanding)];

/** Posts that have a text (and so a page) in this language. */
export const postsIn = (lang: Lang) => posts.filter((p) => p[lang]);

/** Posts shown on the home page. */
export const featuredKeys = ['flight-reservation-for-visa', 'schengen', 'germany'];

export function formatDate(date: string, lang: Lang): string {
  return new Intl.DateTimeFormat(langInfo(lang).htmlLang, { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(date));
}

const readLabel = { en: (n: number) => `${n} min read`, tr: (n: number) => `${n} dk okuma` } as Partial<Record<Lang, (n: number) => string>>;

export function readTime(post: Post, lang: Lang): string {
  const c = post[lang]!;
  const text = `${c.body} ${(c.faq ?? []).map((f) => `${f.q} ${f.a}`).join(' ')}`.replace(/<[^>]+>/g, ' ');
  const minutes = Math.max(2, Math.round(text.split(/\s+/).filter(Boolean).length / 200));
  return (readLabel[lang] ?? readLabel.en!)(minutes);
}
