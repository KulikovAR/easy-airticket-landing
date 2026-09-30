import type { Landing } from './types';

const officialCheckTr = 'Güncel adres, randevu ve evrak listesi için başvuracağınız ülkenin resmi vize başvuru merkezi sitesini kontrol edin.';
const officialCheckEn = 'Check the official visa application centre of the country you are applying to for current addresses, appointments and checklists.';

export const cities: Landing[] = [
  {
    key: 'istanbul',
    kind: 'city',
    market: 'tr',
    tr: {
      slug: 'istanbul-vize-icin-ucak-rezervasyonu',
      name: 'İstanbul',
      title: 'İstanbul’da Vize İçin Uçak Rezervasyonu | Easy Airticket',
      description: 'İstanbul’dan vize başvurusu için PNR kodlu uçak rezervasyonu. IST ve SAW çıkışlı, online sipariş, belgeler 30 dakikada e-postanızda.',
      h1: 'İstanbul’da vize için uçak rezervasyonu',
      lead: 'İstanbul Havalimanı (IST) veya Sabiha Gökçen (SAW) çıkışlı PNR kodlu rezervasyon — ofise gitmeden, online.',
      intro: [
        'İstanbul, Türkiye’de vize başvurularının en yoğun yapıldığı şehirdir. Almanya, Fransa, İtalya, İspanya, Hollanda, Yunanistan ve birçok ülkenin başkonsoloslukları ile yetkili vize başvuru merkezlerinin ofisleri İstanbul’dadır.',
        'Easy Airticket ile rezervasyon için ofis ziyareti gerekmez: rotanızı seçer, pasaport bilgilerinizi girersiniz ve belgeler 30 dakika içinde e-postanıza gelir. Yazdırıp randevunuza götürmeniz yeterlidir.',
      ],
      sections: [
        {
          h2: 'İstanbul çıkışlı rezervasyonda seçenekler',
          list: [
            'İstanbul Havalimanı (IST) veya Sabiha Gökçen (SAW) çıkışlı uçuşlar',
            'Direkt veya aktarmalı rotalar',
            'Gidiş-dönüş veya açık uçlu (multi-city) rezervasyon',
            'Aileler ve gruplar için birden fazla yolcu',
          ],
        },
        {
          h2: 'Randevu gününe hazırlık',
          paragraphs: [
            'İstanbul’daki başvuru merkezlerinde randevular, özellikle bahar ve yaz aylarında hızla dolar. Rezervasyonu randevunuza birkaç gün kala alın ki başvuru günü aktif olsun. ' + officialCheckTr,
          ],
        },
      ],
      faq: [
        { q: 'İstanbul’da ofisiniz var mı?', a: 'Hizmetimiz tamamen online’dır; rezervasyon belgeleri e-posta ile gönderilir, ofise gelmeniz gerekmez.' },
        { q: 'Sabiha Gökçen çıkışlı rezervasyon yapılabilir mi?', a: 'Evet, hem İstanbul Havalimanı hem Sabiha Gökçen çıkışlı rezervasyon yapılabilir.' },
        { q: 'Belgeyi randevuya nasıl götürmeliyim?', a: 'E-postanıza gelen PDF’i yazdırıp başvuru dosyanıza ekleyin.' },
      ],
    },
    en: {
      slug: 'istanbul-visa-flight-reservation',
      name: 'Istanbul',
      title: 'Flight Reservation for Visa in Istanbul | Easy Airticket',
      description: 'Flight reservation with a PNR for visa applications from Istanbul. Departures from IST and SAW, order online, documents by email in 30 minutes.',
      h1: 'Flight reservation for a visa in Istanbul',
      lead: 'A reservation with a PNR departing from Istanbul Airport (IST) or Sabiha Gökçen (SAW) — online, no office visit.',
      intro: [
        'Istanbul is the busiest city for visa applications in Türkiye. The consulates general of Germany, France, Italy, Spain, the Netherlands, Greece and many other countries, as well as the offices of authorised visa application centres, are in Istanbul.',
        'With Easy Airticket there is no need to visit an office: choose your route, enter your passport details and the documents arrive by email within 30 minutes. Just print them for your appointment.',
      ],
      sections: [
        {
          h2: 'Options for departures from Istanbul',
          list: [
            'Flights from Istanbul Airport (IST) or Sabiha Gökçen (SAW)',
            'Direct or connecting routes',
            'Round-trip or open-jaw (multi-city) reservations',
            'Several passengers for families and groups',
          ],
        },
        {
          h2: 'Preparing for your appointment',
          paragraphs: [
            'Appointments at Istanbul application centres fill up quickly, especially in spring and summer. Get your reservation a few days before the appointment so it is active on the day. ' + officialCheckEn,
          ],
        },
      ],
      faq: [
        { q: 'Do you have an office in Istanbul?', a: 'Our service is fully online; the documents are sent by email, so you don’t need to visit us.' },
        { q: 'Can I book from Sabiha Gökçen?', a: 'Yes, departures from both Istanbul Airport and Sabiha Gökçen are possible.' },
        { q: 'How do I bring the document to my appointment?', a: 'Print the PDF you receive by email and add it to your application file.' },
      ],
    },
  },
  {
    key: 'ankara',
    kind: 'city',
    market: 'tr',
    tr: {
      slug: 'ankara-vize-icin-ucak-rezervasyonu',
      name: 'Ankara',
      title: 'Ankara’da Vize İçin Uçak Rezervasyonu — Online | Easy Airticket',
      description: 'Ankara’dan vize başvurusu için PNR kodlu uçak rezervasyonu. Esenboğa (ESB) çıkışlı, online sipariş, belgeler 30 dakikada.',
      h1: 'Ankara’da vize için uçak rezervasyonu',
      lead: 'Esenboğa Havalimanı (ESB) çıkışlı, büyükelçilik başvurularına uygun PNR kodlu rezervasyon.',
      intro: [
        'Ankara, yabancı ülkelerin büyükelçiliklerinin bulunduğu başkenttir. Birçok ülkenin vize başvuruları Ankara’daki yetkili başvuru merkezleri aracılığıyla alınır ve büyükelçiliklerin konsolosluk bölümlerince değerlendirilir.',
        'Easy Airticket ile Ankara çıkışlı veya İstanbul aktarmalı rezervasyonunuzu online alırsınız; belgeler 30 dakika içinde e-postanıza gelir.',
      ],
      sections: [
        {
          h2: 'Ankara çıkışlı rezervasyon',
          list: [
            'Esenboğa (ESB) çıkışlı direkt uçuşlar',
            'İstanbul aktarmalı Avrupa, ABD ve Körfez rotaları',
            'Başvuru formundaki tarihlerle birebir uyumlu rezervasyon',
          ],
        },
        {
          h2: 'Büyükelçilik başvurularında dikkat',
          paragraphs: [
            'Ankara’dan yapılan başvurularda da rezervasyonun başvuru günü aktif olması ve tüm belgelerle tarih olarak tutarlı olması gerekir. ' + officialCheckTr,
          ],
        },
      ],
      faq: [
        { q: 'Ankara’dan başvuru yapıyorum ama İstanbul’dan uçacağım, sorun olur mu?', a: 'Hayır. Rezervasyonun kalkış şehri, başvuru yaptığınız şehirle aynı olmak zorunda değildir.' },
        { q: 'Belgeyi ne zaman alırım?', a: 'Ödeme sonrası 30 dakika içinde e-postanıza gönderilir.' },
        { q: 'Aktarmalı uçuş kabul edilir mi?', a: 'Evet, aktarmalı uçuşlar da geçerli rezervasyondur.' },
      ],
    },
    en: {
      slug: 'ankara-visa-flight-reservation',
      name: 'Ankara',
      title: 'Flight Reservation for Visa in Ankara — Online | Easy Airticket',
      description: 'Flight reservation with a PNR for visa applications from Ankara. Departures from Esenboğa (ESB), order online, documents in 30 minutes.',
      h1: 'Flight reservation for a visa in Ankara',
      lead: 'A reservation with a PNR departing from Esenboğa Airport (ESB), suitable for embassy applications.',
      intro: [
        'Ankara is the capital where foreign embassies are located. Many countries’ visa applications are collected by authorised application centres in Ankara and decided by the consular sections of the embassies.',
        'With Easy Airticket you get a reservation from Ankara or via Istanbul online; documents arrive by email within 30 minutes.',
      ],
      sections: [
        {
          h2: 'Reservations from Ankara',
          list: [
            'Direct flights from Esenboğa (ESB)',
            'Routes to Europe, the US and the Gulf via Istanbul',
            'Dates matching your application form exactly',
          ],
        },
        {
          h2: 'Embassy applications',
          paragraphs: [
            'For applications made in Ankara, too, the reservation must be active on the day you apply and consistent with all other documents. ' + officialCheckEn,
          ],
        },
      ],
      faq: [
        { q: 'I apply in Ankara but will fly from Istanbul — is that a problem?', a: 'No. The departure city does not have to be the city where you apply.' },
        { q: 'When do I receive the document?', a: 'Within 30 minutes after payment, by email.' },
        { q: 'Are connecting flights accepted?', a: 'Yes, connecting flights are valid reservations too.' },
      ],
    },
  },
  {
    key: 'izmir',
    kind: 'city',
    market: 'tr',
    tr: {
      slug: 'izmir-vize-icin-ucak-rezervasyonu',
      name: 'İzmir',
      title: 'İzmir’de Vize İçin Uçak Rezervasyonu — Online | Easy Airticket',
      description: 'İzmir’den vize başvurusu için PNR kodlu uçak rezervasyonu. Adnan Menderes (ADB) çıkışlı, online, belgeler 30 dakikada.',
      h1: 'İzmir’de vize için uçak rezervasyonu',
      lead: 'Adnan Menderes Havalimanı (ADB) çıkışlı PNR kodlu rezervasyon — Ege’den vize başvurusu yapanlar için.',
      intro: [
        'İzmir’de Almanya, İtalya ve Yunanistan gibi ülkelerin başkonsoloslukları ile çeşitli vize başvuru merkezlerinin ofisleri bulunur. Ege Bölgesi’nden başvuranlar çoğunlukla İzmir’deki merkezleri kullanır.',
        'Easy Airticket ile İzmir çıkışlı direkt veya aktarmalı rezervasyonunuzu online alın; ofise gitmenize gerek yok.',
      ],
      sections: [
        {
          h2: 'İzmir çıkışlı rezervasyon',
          list: [
            'Adnan Menderes (ADB) çıkışlı Avrupa uçuşları',
            'İstanbul aktarmalı uzun mesafe rotalar',
            'Yunanistan için uçak veya feribot planına uygun rezervasyon',
          ],
        },
        {
          h2: 'İzmir’den başvuru',
          paragraphs: [
            'Yunanistan başvurularında İzmir’den adalara feribot seçeneği de vardır; uçakla gidecekseniz PNR kodlu rezervasyon gerekir. ' + officialCheckTr,
          ],
        },
      ],
      faq: [
        { q: 'İzmir’den direkt Avrupa uçuşu yoksa ne olur?', a: 'Aktarmalı rota ile rezervasyon yapılır; bu da geçerli bir rezervasyondur.' },
        { q: 'Belgeleri basılı olarak gönderiyor musunuz?', a: 'Hayır, belgeler PDF olarak e-postayla gönderilir; kendiniz yazdırabilirsiniz.' },
        { q: 'Hafta sonu sipariş verebilir miyim?', a: 'Evet, online sipariş her gün verilebilir.' },
      ],
    },
    en: {
      slug: 'izmir-visa-flight-reservation',
      name: 'Izmir',
      title: 'Flight Reservation for Visa in Izmir — Online | Easy Airticket',
      description: 'Flight reservation with a PNR for visa applications from Izmir. Departures from Adnan Menderes (ADB), online, documents in 30 minutes.',
      h1: 'Flight reservation for a visa in Izmir',
      lead: 'A reservation with a PNR departing from Adnan Menderes Airport (ADB) — for applicants from the Aegean region.',
      intro: [
        'Izmir hosts the consulates general of countries such as Germany, Italy and Greece, as well as offices of several visa application centres. Applicants from the Aegean region mostly use the centres in Izmir.',
        'With Easy Airticket you get a direct or connecting reservation from Izmir online — no office visit needed.',
      ],
      sections: [
        {
          h2: 'Reservations from Izmir',
          list: [
            'European flights from Adnan Menderes (ADB)',
            'Long-haul routes via Istanbul',
            'Reservations that fit a flight or ferry plan for Greece',
          ],
        },
        {
          h2: 'Applying from Izmir',
          paragraphs: [
            'For Greece there is also a ferry option from the Izmir area to the islands; if you fly, you need a reservation with a PNR. ' + officialCheckEn,
          ],
        },
      ],
      faq: [
        { q: 'What if there is no direct flight from Izmir?', a: 'We book a connecting route — that is a valid reservation too.' },
        { q: 'Do you send printed documents?', a: 'No, documents are sent as a PDF by email for you to print.' },
        { q: 'Can I order at the weekend?', a: 'Yes, you can order online any day.' },
      ],
    },
  },
  {
    key: 'antalya',
    kind: 'city',
    market: 'tr',
    tr: {
      slug: 'antalya-vize-icin-ucak-rezervasyonu',
      name: 'Antalya',
      title: 'Antalya’da Vize İçin Uçak Rezervasyonu — Online | Easy Airticket',
      description: 'Antalya’dan vize başvurusu için PNR kodlu uçak rezervasyonu. AYT çıkışlı, online sipariş, belgeler 30 dakikada e-postanızda.',
      h1: 'Antalya’da vize için uçak rezervasyonu',
      lead: 'Antalya Havalimanı (AYT) çıkışlı, Avrupa’ya direkt uçuşlarla PNR kodlu rezervasyon.',
      intro: [
        'Antalya’da Almanya Başkonsolosluğu ve çeşitli vize başvuru merkezlerinin ofisleri bulunur. Antalya Havalimanı’ndan Avrupa’nın birçok şehrine direkt uçuş vardır, bu da rezervasyonda geniş seçenek sağlar.',
        'Easy Airticket ile Antalya çıkışlı rezervasyonunuzu online alırsınız; belgeler 30 dakika içinde e-postanızda olur.',
      ],
      sections: [
        {
          h2: 'Antalya çıkışlı rezervasyon',
          list: [
            'Almanya, Hollanda, Belçika ve diğer Avrupa ülkelerine direkt uçuşlar',
            'İstanbul aktarmalı rotalar',
            'Turizm çalışanları ve aileleri için birden fazla yolcu',
          ],
        },
        {
          h2: 'Sezon dışında başvuru',
          paragraphs: [
            'Turizm sektöründe çalışıyorsanız, sezon dışı aylarda Avrupa seyahati planlıyorsanız başvurunuzu erken planlayın. ' + officialCheckTr,
          ],
        },
      ],
      faq: [
        { q: 'Antalya’dan Almanya’ya direkt uçuşa rezervasyon yapılabilir mi?', a: 'Evet, sezona göre mevcut direkt uçuşlar için rezervasyon yapılabilir.' },
        { q: 'Rezervasyon bir havayoluna bağlı mı?', a: 'Hayır, rotanıza uygun herhangi bir havayolu ile rezervasyon yapılabilir.' },
        { q: 'Ödeme nasıl yapılır?', a: 'Herhangi bir banka kartı veya kredi kartıyla online ödeme yapabilirsiniz.' },
      ],
    },
    en: {
      slug: 'antalya-visa-flight-reservation',
      name: 'Antalya',
      title: 'Flight Reservation for Visa in Antalya — Online | Easy Airticket',
      description: 'Flight reservation with a PNR for visa applications from Antalya. Departures from AYT, order online, documents by email in 30 minutes.',
      h1: 'Flight reservation for a visa in Antalya',
      lead: 'A reservation with a PNR departing from Antalya Airport (AYT), with direct flights to Europe.',
      intro: [
        'Antalya has a German Consulate General and offices of several visa application centres. Antalya Airport has direct flights to many European cities, which gives plenty of options for the reservation.',
        'With Easy Airticket you get a reservation from Antalya online; documents are in your inbox within 30 minutes.',
      ],
      sections: [
        {
          h2: 'Reservations from Antalya',
          list: [
            'Direct flights to Germany, the Netherlands, Belgium and other European countries',
            'Routes via Istanbul',
            'Several passengers for tourism workers and their families',
          ],
        },
        {
          h2: 'Applying off-season',
          paragraphs: [
            'If you work in tourism and plan a European trip in the off-season, plan your application early. ' + officialCheckEn,
          ],
        },
      ],
      faq: [
        { q: 'Can I book a direct flight from Antalya to Germany?', a: 'Yes, for direct flights available in the season you travel.' },
        { q: 'Is the reservation tied to one airline?', a: 'No, any airline that fits your route can be used.' },
        { q: 'How do I pay?', a: 'Online with any debit or credit card.' },
      ],
    },
  },
  {
    key: 'bursa',
    kind: 'city',
    market: 'tr',
    tr: {
      slug: 'bursa-vize-icin-ucak-rezervasyonu',
      name: 'Bursa',
      title: 'Bursa’da Vize İçin Uçak Rezervasyonu — Online | Easy Airticket',
      description: 'Bursa’dan vize başvurusu için PNR kodlu uçak rezervasyonu. İstanbul çıkışlı veya aktarmalı, online, belgeler 30 dakikada.',
      h1: 'Bursa’da vize için uçak rezervasyonu',
      lead: 'Bursa’dan başvuranlar için İstanbul veya Yenişehir çıkışlı PNR kodlu rezervasyon — tamamen online.',
      intro: [
        'Bursa’da çeşitli ülkelerin vize başvuru merkezlerinin ofisleri bulunur; başkonsolosluklar ise çoğunlukla İstanbul’dadır. Bursa’dan yurt dışına çıkan yolcular genellikle İstanbul havalimanlarını kullanır.',
        'Easy Airticket ile rezervasyonunuzu online alın, belgeler 30 dakikada e-postanıza gelsin; başvuru merkezine yalnızca randevu günü gitmeniz yeterli.',
      ],
      sections: [
        {
          h2: 'Bursa’dan başvuranlar için rota seçenekleri',
          list: [
            'İstanbul Havalimanı (IST) veya Sabiha Gökçen (SAW) çıkışlı uçuşlar',
            'Bursa Yenişehir (YEI) çıkışlı aktarmalı rotalar',
            'İş seyahatleri için fuar ve toplantı tarihlerine uygun rezervasyon',
          ],
        },
        {
          h2: 'İş seyahatleri',
          paragraphs: [
            'Bursa’nın sanayi ve tekstil firmaları için yurt dışı fuar ve iş ziyaretleri sıktır. İş vizesi dosyasında davet yazısı ve rezervasyon tarihlerinin örtüşmesine dikkat edin. ' + officialCheckTr,
          ],
        },
      ],
      faq: [
        { q: 'Bursa’dan başvuruyorum, rezervasyon İstanbul çıkışlı olabilir mi?', a: 'Evet, kalkış havalimanı başvuru şehrinizden farklı olabilir.' },
        { q: 'Şirket çalışanları için toplu rezervasyon yapılır mı?', a: 'Evet, birden fazla yolcu aynı rezervasyona eklenebilir.' },
        { q: 'Fatura kesiliyor mu?', a: 'Evet, hizmet bedeli için fatura düzenlenir.' },
      ],
    },
    en: {
      slug: 'bursa-visa-flight-reservation',
      name: 'Bursa',
      title: 'Flight Reservation for Visa in Bursa — Online | Easy Airticket',
      description: 'Flight reservation with a PNR for visa applications from Bursa. From Istanbul or via connections, online, documents in 30 minutes.',
      h1: 'Flight reservation for a visa in Bursa',
      lead: 'A reservation with a PNR from Istanbul or Yenişehir for applicants from Bursa — fully online.',
      intro: [
        'Bursa has offices of several countries’ visa application centres, while the consulates general are mostly in Istanbul. Travellers from Bursa usually fly from the Istanbul airports.',
        'Get your reservation online with Easy Airticket and receive the documents by email in 30 minutes; you only need to go to the application centre on your appointment day.',
      ],
      sections: [
        {
          h2: 'Route options for applicants from Bursa',
          list: [
            'Flights from Istanbul Airport (IST) or Sabiha Gökçen (SAW)',
            'Connecting routes from Bursa Yenişehir (YEI)',
            'Reservations matching trade fair and meeting dates for business trips',
          ],
        },
        {
          h2: 'Business trips',
          paragraphs: [
            'Bursa’s industrial and textile companies travel abroad often for fairs and meetings. In a business visa file make sure the invitation letter and reservation dates match. ' + officialCheckEn,
          ],
        },
      ],
      faq: [
        { q: 'I apply in Bursa — can the reservation depart from Istanbul?', a: 'Yes, the departure airport can differ from the city where you apply.' },
        { q: 'Can you book several employees at once?', a: 'Yes, several passengers can be added to the same reservation.' },
        { q: 'Do you issue invoices?', a: 'Yes, an invoice is issued for the service fee.' },
      ],
    },
  },
  {
    key: 'gaziantep',
    kind: 'city',
    market: 'tr',
    tr: {
      slug: 'gaziantep-vize-icin-ucak-rezervasyonu',
      name: 'Gaziantep',
      title: 'Gaziantep’te Vize İçin Uçak Rezervasyonu — Online | Easy Airticket',
      description: 'Gaziantep’ten vize başvurusu için PNR kodlu uçak rezervasyonu. GZT çıkışlı veya İstanbul aktarmalı, belgeler 30 dakikada.',
      h1: 'Gaziantep’te vize için uçak rezervasyonu',
      lead: 'Güneydoğu’dan başvuranlar için Gaziantep (GZT) çıkışlı veya aktarmalı PNR kodlu rezervasyon.',
      intro: [
        'Gaziantep’te çeşitli ülkelerin vize başvuru merkezlerinin ofisleri bulunur ve Güneydoğu Anadolu’dan başvuranlar için bölgesel merkez görevi görür. Yurt dışı uçuşlar genellikle İstanbul veya Ankara aktarmalıdır.',
        'Easy Airticket ile rezervasyonunuzu online alırsınız; aktarmalı rotalar da geçerli rezervasyondur ve belgeler 30 dakika içinde e-postanıza gelir.',
      ],
      sections: [
        {
          h2: 'Gaziantep çıkışlı rezervasyon',
          list: [
            'Gaziantep (GZT) çıkışlı, İstanbul aktarmalı Avrupa ve Körfez rotaları',
            'Sanayi ve ticaret firmaları için iş seyahati rezervasyonları',
            'Aileler için birden fazla yolcu',
          ],
        },
        {
          h2: 'Bölgeden başvuru',
          paragraphs: [
            'Randevu günü başvuru merkezine gitmeden önce tüm belgelerin tarih olarak tutarlı olduğunu kontrol edin. ' + officialCheckTr,
          ],
        },
      ],
      faq: [
        { q: 'Gaziantep’ten direkt Avrupa uçuşu yoksa rezervasyon yapılabilir mi?', a: 'Evet, aktarmalı rota ile rezervasyon yapılır.' },
        { q: 'Belge Türkçe mi İngilizce mi?', a: 'Rezervasyon belgesi uluslararası formatta, İngilizce olarak düzenlenir.' },
        { q: 'Ödeme sonrası belge gelmezse ne yapmalıyım?', a: 'Spam klasörünü kontrol edin; yine de bulamazsanız iletişim sayfasındaki kanallardan bize ulaşın.' },
      ],
    },
    en: {
      slug: 'gaziantep-visa-flight-reservation',
      name: 'Gaziantep',
      title: 'Flight Reservation for Visa in Gaziantep — Online | Easy Airticket',
      description: 'Flight reservation with a PNR for visa applications from Gaziantep. From GZT or via Istanbul, documents in 30 minutes.',
      h1: 'Flight reservation for a visa in Gaziantep',
      lead: 'A reservation with a PNR from Gaziantep (GZT) or via connections for applicants from the southeast.',
      intro: [
        'Gaziantep has offices of several countries’ visa application centres and serves as a regional hub for applicants from Southeastern Anatolia. International flights usually connect via Istanbul or Ankara.',
        'With Easy Airticket you get your reservation online; connecting routes are valid too, and documents arrive by email within 30 minutes.',
      ],
      sections: [
        {
          h2: 'Reservations from Gaziantep',
          list: [
            'Routes from Gaziantep (GZT) to Europe and the Gulf via Istanbul',
            'Business trip reservations for industrial and trading companies',
            'Several passengers for families',
          ],
        },
        {
          h2: 'Applying from the region',
          paragraphs: [
            'Before going to the application centre, check that all your documents have consistent dates. ' + officialCheckEn,
          ],
        },
      ],
      faq: [
        { q: 'Can I book if there is no direct flight to Europe from Gaziantep?', a: 'Yes, we book a connecting route.' },
        { q: 'Is the document in Turkish or English?', a: 'The reservation document is issued in the international format, in English.' },
        { q: 'What if I don’t receive the document after payment?', a: 'Check your spam folder; if it isn’t there, contact us through the channels on the contact page.' },
      ],
    },
  },
];
