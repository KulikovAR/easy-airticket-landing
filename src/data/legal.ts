interface LegalText { slug: string; title: string; description: string }

export interface LegalDoc {
  id: string;
  tr: LegalText;
  en: LegalText;
}

// Document bodies live in src/content/legal/{tr,en}/<id>.md
export const legalDocs: LegalDoc[] = [
  { id: 'kvkk', tr: { slug: 'kvkk-aydinlatma-metni', title: 'KVKK Aydınlatma Metni', description: '6698 sayılı KVKK kapsamında Easy Airticket müşterilerinin kişisel verilerinin işlenmesi, aktarılması ve haklarına ilişkin aydınlatma metni.' }, en: { slug: 'personal-data-notice', title: 'Personal Data Protection Notice (KVKK)', description: 'How Easy Airticket processes, transfers and protects customers’ personal data under Turkish Personal Data Protection Law No. 6698 (KVKK).' } },
  { id: 'kvkk-form', tr: { slug: 'kvkk-basvuru-formu', title: 'KVKK Başvuru Formu', description: 'KVKK m. 11 kapsamındaki haklarınızı kullanmak için Easy Airticket’e yapacağınız başvurunun formu, yöntemleri ve süreleri.' }, en: { slug: 'data-subject-request-form', title: 'Data Subject Request Form', description: 'Form, methods and response times for exercising your rights under Article 11 of the Turkish KVKK with Easy Airticket.' } },
  { id: 'privacy', tr: { slug: 'gizlilik-ve-cerez-politikasi', title: 'Gizlilik ve Çerez Politikası', description: 'Easy Airticket gizlilik ve çerez politikası: toplanan bilgiler, kullanım amaçları, güvenlik önlemleri ve çerez tercihleriniz.' }, en: { slug: 'privacy-and-cookie-policy', title: 'Privacy and Cookie Policy', description: 'Easy Airticket privacy and cookie policy: what information is collected, how it is used and protected, and your cookie choices.' } },
  { id: 'preinfo', tr: { slug: 'on-bilgilendirme-formu', title: 'Ön Bilgilendirme Formu', description: 'Vize için uçuş rezervasyonu hizmetine ilişkin ön bilgilendirme formu: hizmetin nitelikleri, fiyat, teslim ve cayma hakkı.' }, en: { slug: 'pre-contract-information', title: 'Pre-Contract Information Form', description: 'Pre-contract information for the flight reservation service: service details, price, delivery and right of withdrawal.' } },
  { id: 'distance-sales', tr: { slug: 'mesafeli-satis-sozlesmesi', title: 'Mesafeli Hizmet Sözleşmesi', description: 'Easy Airticket vize için uçuş rezervasyonu hizmetine ilişkin mesafeli hizmet sözleşmesi: taraflar, yükümlülükler ve koşullar.' }, en: { slug: 'distance-sales-agreement', title: 'Distance Service Agreement', description: 'Distance service agreement for Easy Airticket flight reservations for visa applications: parties, obligations and terms.' } },
  { id: 'refund', tr: { slug: 'iptal-ve-iade-kosullari', title: 'İptal ve İade Koşulları', description: 'Easy Airticket iptal ve iade koşulları: hangi durumlarda ücret iade edilir, ücretsiz düzeltme ve iade süreci.' }, en: { slug: 'cancellation-and-refund-policy', title: 'Cancellation and Refund Policy', description: 'Easy Airticket cancellation and refund policy: when the fee is refunded, free corrections and how refunds are processed.' } },
  { id: 'terms', tr: { slug: 'kullanim-kosullari', title: 'Kullanım Koşulları', description: 'Easy Airticket sitesinin kullanım koşulları: hizmetin kapsamı, rezervasyonun niteliği, kullanıcı yükümlülükleri ve sorumluluk.' }, en: { slug: 'terms-of-use', title: 'Terms of Use', description: 'Terms of use of the Easy Airticket website: scope of service, nature of the reservation, user obligations and liability.' } },
];
