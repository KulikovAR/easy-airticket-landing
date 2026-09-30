import type { Lang } from './i18n';
import type { Faq } from './types';
import { price } from './site';

export interface HomeText {
  title: string;
  description: string;
  h1: string;
  lead: string;
  how: {
    /** Anchor of the section (localised for nicer URLs). */
    id: string;
    h2: string;
    lead: string;
    route: [string, string];
    details: [string, string];
    payment: [string, string];
    documents: [string, string];
    ticket: { status: string; passenger: string; date: string; chip: string };
    validity: { label: string; upTo: string; days: string; title: string; text: string };
  };
  blog: { h2: string; lead: string };
  faq: Faq[];
}

const fee = `<span class="price">${price.display}</span>`;

export const home: Partial<Record<Lang, HomeText>> = {
  en: {
    title: 'Dummy Ticket & Flight Reservation for Visa | Easy Airticket',
    description: `Flight reservation (dummy ticket) for your visa with a verifiable PNR. No ticket price, only a ${price.display} fee. Documents in 30 minutes, valid up to 7 days.`,
    h1: 'Flight reservation for your visa application',
    lead: 'Get a real flight booking verifiable by its PNR — without paying the full ticket price. Documents in your inbox within 30 minutes.',
    how: {
      id: 'how-it-works',
      h2: 'Flight reservation in a few minutes',
      lead: 'Book a flight reservation for your visa application online in just a few minutes.',
      route: ['Search and choose your route', 'Select the cities, dates and number of passengers in the search bar. You can book any suitable flight from the options offered.'],
      details: ['Fill in your details', 'Enter your passport details and contact information.'],
      payment: ['Pay for the reservation', `You only pay our service fee — ${fee} — without worrying about the full ticket price. You can pay with any bank card.`],
      documents: ['Receive your documents', 'We will send the ready documents to the email address you provided within 30 minutes. Print them out and attach them to your visa application or use them for any other purpose.'],
      ticket: { status: 'Reservation confirmed', passenger: 'Passenger', date: 'Date', chip: 'Documents in your inbox within 30 minutes' },
      validity: {
        label: 'Validity',
        upTo: 'up to',
        days: 'days',
        title: 'Validity: up to 7 days',
        text: 'The reservation remains valid for up to 7 days and is cancelled once this period expires.',
      },
    },
    blog: { h2: 'Visa & travel guides', lead: 'Short guides on flight reservations, visa documents and planning your trip.' },
    faq: [
      { q: 'What is a flight reservation for a visa?', a: 'It is a booking made in an airline reservation system for specific flights, dates and passengers. It has its own booking code (PNR), but it is not a paid ticket. Many consulates accept it as proof of your travel plans.' },
      { q: 'How much does it cost?', a: `You only pay our service fee — ${price.display}. You don't pay the price of the ticket itself.` },
      { q: 'How long is the reservation valid?', a: 'The reservation is valid for up to 7 days. After that it is cancelled automatically, so we recommend booking it shortly before your visa appointment.' },
      { q: 'How quickly will I receive the documents?', a: 'We send the ready documents to the email address you provided within 30 minutes. Print them out and attach them to your visa application or use them for any other purpose.' },
      { q: 'What information do I need to provide?', a: "Your passport details and contact information — that's all we need to make the reservation." },
      { q: 'How can I pay?', a: 'You can pay with any bank card.' },
    ],
  },
  tr: {
    title: 'Vize İçin Uçak Bileti Rezervasyonu — PNR Kodlu | Easy Airticket',
    description: `Vize başvurusu için doğrulanabilir PNR kodlu uçak rezervasyonu. Bilet ücreti yok, yalnızca ${price.display} hizmet bedeli. Belgeler 30 dakikada, 7 güne kadar geçerli.`,
    h1: 'Vize başvurusu için uçak bileti rezervasyonu',
    lead: 'Biletin tam fiyatını ödemeden gerçek, PNR koduyla doğrulanabilir bir uçuş rezervasyonu alın. Belgeler 30 dakika içinde e-postanızda.',
    how: {
      id: 'nasil-calisir',
      h2: 'Birkaç dakikada uçuş rezervasyonu',
      lead: 'Vize başvurunuz için uçuş rezervasyonunu birkaç dakikada, çevrimiçi olarak yapın.',
      route: ['Rota arama ve seçimi', 'Arama satırında istediğiniz şehirleri, tarihleri ve yolcu sayısını seçin. Sunulan seçenekler arasından size uygun herhangi bir uçuşu rezerve edebilirsiniz.'],
      details: ['Bilgilerin doldurulması', 'Pasaport bilgilerinizi ve iletişim bilgilerinizi girin.'],
      payment: ['Rezervasyon ödemesi', `Biletin tam fiyatını düşünmeden yalnızca hizmet bedelimizi — ${fee} — ödersiniz. Herhangi bir banka kartıyla ödeme yapabilirsiniz.`],
      documents: ['Hazır belgelerin gönderilmesi', 'Hazır belgeleri 30 dakika içinde belirttiğiniz e-posta adresine göndeririz. Belgeleri yazdırıp vize başvurunuza veya başka herhangi bir amaç için ekleyebilirsiniz.'],
      ticket: { status: 'Rezervasyon onaylandı', passenger: 'Yolcu', date: 'Tarih', chip: 'Belgeler 30 dakikada e-postanızda' },
      validity: {
        label: 'Geçerlilik süresi',
        upTo: 'en fazla',
        days: 'gün',
        title: 'Geçerlilik süresi: 7 güne kadar',
        text: 'Rezervasyon 7 güne kadar geçerlidir, süre dolduktan sonra iptal edilir.',
      },
    },
    blog: { h2: 'Vize ve seyahat rehberleri', lead: 'Uçuş rezervasyonu, vize belgeleri ve seyahat planlaması hakkında kısa rehberler.' },
    faq: [
      { q: 'Vize için uçuş rezervasyonu nedir?', a: 'Belirli uçuşlar, tarihler ve yolcular için havayolu rezervasyon sisteminde yapılan bir kayıttır. Kendi rezervasyon kodu (PNR) vardır, ancak ödenmiş bir bilet değildir. Birçok konsolosluk bunu seyahat planınızın kanıtı olarak kabul eder.' },
      { q: 'Ücreti ne kadar?', a: `Yalnızca hizmet bedelimizi — ${price.display} — ödersiniz. Biletin kendisinin fiyatını ödemezsiniz.` },
      { q: 'Rezervasyon ne kadar süre geçerli?', a: 'Rezervasyon 7 güne kadar geçerlidir. Ardından otomatik olarak iptal edilir, bu yüzden vize randevunuzdan kısa süre önce yapmanızı öneririz.' },
      { q: 'Belgeleri ne kadar sürede alırım?', a: 'Hazır belgeleri 30 dakika içinde belirttiğiniz e-posta adresine göndeririz. Belgeleri yazdırıp vize başvurunuza veya başka herhangi bir amaç için ekleyebilirsiniz.' },
      { q: 'Hangi bilgileri vermem gerekiyor?', a: 'Pasaport bilgileriniz ve iletişim bilgileriniz — rezervasyon için ihtiyacımız olan bu kadar.' },
      { q: 'Nasıl ödeme yapabilirim?', a: 'Herhangi bir banka kartıyla ödeme yapabilirsiniz.' },
    ],
  },
};

/** Titles and descriptions of the FAQ page. */
export const faqPage: Partial<Record<Lang, { slug: string; title: string; description: string; lead: string }>> = {
  en: {
    slug: 'faq',
    title: 'Flight Reservation for Visa — FAQ | Easy Airticket',
    description: 'Frequently asked questions about flight reservations for visas: PNR code, validity, consulate acceptance, price and refunds.',
    lead: 'Everything about flight reservations for visas, PNR codes, validity and payment.',
  },
  tr: {
    slug: 'sss',
    title: 'Vize İçin Uçak Rezervasyonu — Sıkça Sorulan Sorular | Easy Airticket',
    description: 'Vize için uçak rezervasyonu hakkında sık sorulan sorular: PNR kodu, geçerlilik süresi, konsolosluk kabulü, ücret ve iade koşulları.',
    lead: 'Vize için uçuş rezervasyonu, PNR kodu, geçerlilik ve ödeme hakkında merak ettikleriniz.',
  },
};

/** Blog index page. */
export const blogPage: Partial<Record<Lang, { slug: string; title: string; description: string; h1: string; lead: string; all: string; guides: string; countries: string; cities: string }>> = {
  en: {
    slug: 'blog',
    title: 'Visa & Travel Guides — Flight Reservation for Visa | Easy Airticket',
    description: 'Guides on flight reservations for visa applications: Schengen, Germany, France, UK, USA, Dubai and more — requirements, documents and booking tips.',
    h1: 'Visa & travel guides',
    lead: 'Flight reservations, visa documents and consulate requirements — by topic, country and city.',
    all: 'All articles',
    guides: 'Guides',
    countries: 'Visa countries',
    cities: 'Cities',
  },
  tr: {
    slug: 'blog',
    title: 'Vize ve Seyahat Rehberleri — Vize İçin Uçak Rezervasyonu | Easy Airticket',
    description: 'Vize başvurusu için uçak rezervasyonu rehberleri: Schengen, Almanya, Fransa, İngiltere, Amerika, Dubai ve daha fazlası — şartlar, belgeler ve ipuçları.',
    h1: 'Vize ve seyahat rehberleri',
    lead: 'Uçuş rezervasyonu, vize belgeleri ve konsolosluk şartları — konuya, ülkeye ve şehre göre.',
    all: 'Tüm yazılar',
    guides: 'Rehberler',
    countries: 'Vize ülkeleri',
    cities: 'Şehirler',
  },
};
