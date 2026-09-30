import type { Lang } from './i18n';

export type { Lang } from './i18n';

/** One price for every language and market. */
export const price = { amount: 15, currency: 'USD', display: '$15' } as const;

const en = {
  home: 'Home',
  langLabel: 'Language',
  from: 'From',
  to: 'To',
  dates: 'Departure — Return',
  cityPlaceholder: 'City or airport',
  datesPlaceholder: 'Select dates',
  search: 'Search',
  nothingFound: 'Nothing found',
  badges: ['Documents in 30 minutes', 'Valid for up to 7 days', 'Verifiable PNR code'],
  soonTitle: 'Coming soon!',
  soonText: "Flight search is currently under development. Very soon you'll be able to choose a route and book right here.",
  ok: 'Got it',
  close: 'Close',
  soon: 'soon',

  faqTitle: 'Frequently asked questions',
  countriesTitle: 'Flight reservation for visa by country',
  citiesTitle: 'Book online from your city',
  relatedCountries: 'Other countries',
  relatedCities: 'Other cities',

  ctaTitle: 'Need a flight reservation for your visa?',
  ctaText: `Documents in your inbox within 30 minutes. You only pay the ${price.display} service fee.`,
  ctaButton: 'Book a reservation',

  articles: 'Articles',
  moreArticles: 'More articles',
  readMore: 'Read more',
  comingSoon: 'Coming soon',
  author: 'Easy Airticket',

  footer: {
    title: 'Be the first to know<br>when we <span>launch</span>',
    emailPlaceholder: 'Your email address',
    emailLabel: 'Email address',
    notify: 'Notify me',
    caption: 'No spam — only launch news and new travel guides.',
    thanks: "Thanks! We'll email you as soon as flight search goes live.",
    about: 'Flight reservations for visa applications — without paying for the ticket. Ready documents in your inbox within 30 minutes.',
    feeTitle: 'Only a service fee',
    feeText: `You pay ${price.display}, not the full ticket price. The reservation is valid for up to 7 days.`,
    service: 'Service',
    searchFlights: 'Search flights',
    howItWorks: 'How it works',
    faq: 'FAQ',
    countries: 'Visa countries',
    cities: 'Cities',
    languages: 'Languages',
    contact: 'Contact',
    contactText: 'Questions about your reservation? Write to us.',
    rights: 'All rights reserved.',
    toTop: 'Back to top',
    disclaimer:
      'Easy Airticket is not a consulate, embassy or official visa application centre; visa decisions rest solely with the competent authorities of each country.',
  },

  consent: {
    text: 'We use analytics cookies to improve our website. Strictly necessary cookies are always on.',
    accept: 'Accept',
    reject: 'Necessary only',
  },

  notFoundTitle: 'Page not found',
  notFoundText: 'The page you are looking for may have been moved or deleted.',
  notFoundBack: 'Back to home',
};

export type UI = typeof en;

export const ui: Partial<Record<Lang, UI>> & { en: UI } = {
  en,
  tr: {
    home: 'Ana sayfa',
    langLabel: 'Dil',
    from: 'Nereden',
    to: 'Nereye',
    dates: 'Gidiş — Dönüş',
    cityPlaceholder: 'Şehir veya havalimanı',
    datesPlaceholder: 'Tarihleri seçin',
    search: 'Ara',
    nothingFound: 'Sonuç bulunamadı',
    badges: ['Belgeler 30 dakikada', 'Rezervasyon 7 güne kadar geçerli', 'Doğrulanabilir PNR kodu'],
    soonTitle: 'Çok yakında!',
    soonText: 'Uçuş arama şu anda geliştirme aşamasında. Çok yakında burada rota seçip rezervasyon yapabileceksiniz.',
    ok: 'Tamam',
    close: 'Kapat',
    soon: 'yakında',

    faqTitle: 'Sıkça sorulan sorular',
    countriesTitle: 'Ülkelere göre vize için uçak rezervasyonu',
    citiesTitle: 'Şehrinizden online rezervasyon',
    relatedCountries: 'Diğer ülkeler',
    relatedCities: 'Diğer şehirler',

    ctaTitle: 'Vizeniz için uçuş rezervasyonu mu lazım?',
    ctaText: `Belgeler 30 dakika içinde e-postanızda. Yalnızca ${price.display} hizmet bedeli ödersiniz.`,
    ctaButton: 'Rezervasyon yap',

    articles: 'Yazılar',
    moreArticles: 'Diğer yazılar',
    readMore: 'Devamını oku',
    comingSoon: 'Yakında',
    author: 'Easy Airticket',

    footer: {
      title: 'Arama açıldığında<br><span>ilk siz</span> öğrenin',
      emailPlaceholder: 'E-posta adresiniz',
      emailLabel: 'E-posta adresi',
      notify: 'Haber ver',
      caption: 'Spam yok — yalnızca lansman haberleri ve yeni seyahat rehberleri.',
      thanks: 'Teşekkürler! Uçuş araması açılır açılmaz size e-posta göndereceğiz.',
      about: 'Vize başvurusu için uçuş rezervasyonu — bilet ücreti ödemeden. Hazır belgeler 30 dakika içinde e-postanızda.',
      feeTitle: 'Yalnızca hizmet bedeli',
      feeText: `Biletin tam fiyatını değil, ${price.display} ödersiniz. Rezervasyon 7 güne kadar geçerlidir.`,
      service: 'Hizmet',
      searchFlights: 'Uçuş ara',
      howItWorks: 'Nasıl çalışır?',
      faq: 'SSS',
      countries: 'Vize ülkeleri',
      cities: 'Şehirler',
      languages: 'Diller',
      contact: 'İletişim',
      contactText: 'Rezervasyonunuzla ilgili sorularınız mı var? Bize yazın.',
      rights: 'Tüm hakları saklıdır.',
      toTop: 'Yukarı çık',
      disclaimer:
        'Easy Airticket bir konsolosluk, büyükelçilik veya resmi vize başvuru merkezi değildir; vize kararları yalnızca ilgili ülkenin yetkili makamlarına aittir.',
    },

    consent: {
      text: 'Sitemizi geliştirmek için analitik çerezler kullanıyoruz. Zorunlu çerezler her zaman aktiftir.',
      accept: 'Kabul et',
      reject: 'Yalnızca zorunlu',
    },

    notFoundTitle: 'Sayfa bulunamadı',
    notFoundText: 'Aradığınız sayfa taşınmış veya silinmiş olabilir.',
    notFoundBack: 'Ana sayfaya dön',
  },
};

/** UI strings for a language (falls back to English for languages without strings yet). */
export const t = (lang: Lang): UI => ui[lang] ?? ui.en;
