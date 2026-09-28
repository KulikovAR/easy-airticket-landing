// Company details used on the contact page, footer, legal documents and schema.org markup.
// Empty values are rendered as a highlighted placeholder (e.g. [ŞİRKET UNVANI]) until filled in.
export const company = {
  brand: 'Easy Airticket',
  website: 'https://easy-airticket.com',
  legalName: '',
  address: '',
  mersis: '',
  taxOffice: '',
  taxNumber: '',
  tradeRegistry: '',
  phone: '',
  whatsapp: '', // digits only with country code, e.g. 905xxxxxxxxx
  email: '',
  kep: '',
  tursab: '',
  etbis: '', // ETBİS verification link (https://www.eticaret.gov.tr/…)
  instagram: '', // full profile URL
  paymentProvider: '',
  workingHours: '',
  legalUpdated: '',
};

export type CompanyField = keyof typeof company;

export const placeholderLabels: Record<'tr' | 'en', Partial<Record<CompanyField, string>>> = {
  tr: {
    legalName: 'ŞİRKET UNVANI',
    address: 'ADRES',
    mersis: 'MERSİS NO',
    taxOffice: 'VERGİ DAİRESİ',
    taxNumber: 'VERGİ NO',
    tradeRegistry: 'TİCARET SİCİL NO',
    phone: 'TELEFON',
    whatsapp: 'WHATSAPP',
    email: 'E-POSTA',
    kep: 'KEP ADRESİ',
    tursab: 'TÜRSAB BELGE NO',
    etbis: 'ETBİS KAYIT',
    instagram: 'INSTAGRAM',
    paymentProvider: 'ÖDEME KURULUŞU',
    workingHours: 'ÇALIŞMA SAATLERİ',
    legalUpdated: 'GÜNCELLEME TARİHİ',
  },
  en: {
    legalName: 'COMPANY LEGAL NAME',
    address: 'ADDRESS',
    mersis: 'MERSIS NO',
    taxOffice: 'TAX OFFICE',
    taxNumber: 'TAX NUMBER',
    tradeRegistry: 'TRADE REGISTRY NO',
    phone: 'PHONE',
    whatsapp: 'WHATSAPP',
    email: 'EMAIL',
    kep: 'KEP ADDRESS',
    tursab: 'TÜRSAB LICENCE NO',
    etbis: 'ETBİS REGISTRATION',
    instagram: 'INSTAGRAM',
    paymentProvider: 'PAYMENT PROVIDER',
    workingHours: 'WORKING HOURS',
    legalUpdated: 'LAST UPDATED',
  },
};
