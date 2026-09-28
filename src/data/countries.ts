import type { Landing } from './types';

export const countries: Landing[] = [
  {
    id: 'schengen',
    kind: 'country',
    flag: '🇪🇺',
    tr: {
      slug: 'schengen-vizesi-icin-ucak-rezervasyonu',
      name: 'Schengen vizesi',
      title: 'Schengen Vizesi İçin Uçak Rezervasyonu — PNR Kodlu | Easy Airticket',
      description: 'Schengen vizesi başvurusu için doğrulanabilir PNR kodlu gidiş-dönüş uçak rezervasyonu. Bilet ücreti ödemeden, belgeler 30 dakikada e-postanızda.',
      h1: 'Schengen vizesi için uçak rezervasyonu',
      lead: 'Konsoloslukların kabul ettiği PNR kodlu gidiş-dönüş rezervasyon — bileti satın almadan, vize sonucunu beklerken paranız risk altında olmadan.',
      intro: [
        'Schengen vizesi başvurusunda konsolosluk, seyahat planınızı ve Schengen bölgesinden zamanında ayrılacağınızı görmek ister. Bu yüzden başvuru dosyasında tarihleri başvuru formuyla birebir örtüşen gidiş-dönüş uçuş rezervasyonu istenir.',
        'Vize kesinleşmeden tam bilet almak gereksiz bir risktir: başvuru reddedilirse iade edilmeyen bilet ücreti kaybolur. Easy Airticket ile yalnızca hizmet bedeli ödersiniz, havayolu sisteminde kayıtlı ve PNR koduyla doğrulanabilir bir rezervasyon alırsınız.',
      ],
      sections: [
        {
          h2: 'Schengen başvurusunda rezervasyonun kuralları',
          list: [
            'Rezervasyon gidiş-dönüş olmalı ve Türkiye’den çıkış ile dönüşü göstermelidir.',
            'Tarihler başvuru formundaki seyahat tarihleri, otel rezervasyonu ve seyahat sağlık sigortasıyla aynı olmalıdır.',
            'Kalış süresi 180 günlük dönem içinde 90 günü aşmamalıdır.',
            'Başvuru, seyahatin ana varış ülkesinin (en uzun kalacağınız ülkenin) konsolosluğuna yapılır; süreler eşitse ilk giriş ülkesine başvurulur.',
            'Yolcu adı pasaporttaki gibi Latin harfleriyle yazılmalıdır.',
          ],
        },
        {
          h2: 'Başvuru ne zaman yapılmalı?',
          paragraphs: [
            'Schengen vizesi için başvuru seyahatten en erken 6 ay, en geç 15 gün önce yapılabilir. Karar süresi genellikle 15 takvim günüdür, ancak yoğun dönemlerde uzayabilir. Rezervasyonu randevu tarihinize yakın almanız, belgenin başvuru sırasında geçerli olmasını sağlar.',
          ],
        },
        {
          h2: 'Dosyada rezervasyonla birlikte istenenler',
          list: [
            'En az 30.000 € teminatlı, tüm Schengen bölgesinde geçerli seyahat sağlık sigortası',
            'Konaklama belgesi (otel rezervasyonu veya davet mektubu)',
            'Son 3–6 aya ait banka hesap dökümü',
            'İşveren yazısı, SGK dökümü veya öğrenci belgesi',
          ],
        },
      ],
      faq: [
        { q: 'Schengen vizesi için uçak bileti satın almak zorunlu mu?', a: 'Hayır. Konsolosluklar satın alınmış bilet değil, doğrulanabilir bir uçuş rezervasyonu ister. Bileti vize onaylandıktan sonra almanız önerilir.' },
        { q: 'Tek yön rezervasyon yeterli mi?', a: 'Hayır. Schengen başvurularında Türkiye’ye dönüşü gösteren gidiş-dönüş rezervasyon beklenir.' },
        { q: 'Birden fazla Schengen ülkesini gezeceğim, rezervasyon nasıl olmalı?', a: 'Rezervasyon rotanızı yansıtmalıdır: örneğin İstanbul–Roma ve Paris–İstanbul gibi açık uçlu (multi-city) bir rota. Başvuruyu en uzun kalacağınız ülkeye yapın.' },
      ],
    },
    en: {
      slug: 'schengen-visa-flight-reservation',
      name: 'Schengen visa',
      title: 'Flight Reservation for Schengen Visa — Verifiable PNR | Easy Airticket',
      description: 'Round-trip flight reservation with a verifiable PNR for your Schengen visa application. No full ticket payment, documents by email in 30 minutes.',
      h1: 'Flight reservation for a Schengen visa',
      lead: 'A round-trip reservation with a verifiable PNR accepted by consulates — without buying the ticket or risking your money while you wait for a decision.',
      intro: [
        'For a Schengen visa the consulate wants to see your travel plan and proof that you will leave the Schengen area on time. That is why the application file must include a round-trip flight reservation whose dates match the application form.',
        'Buying a full ticket before the visa is granted is an unnecessary risk: if the application is refused, a non-refundable fare is lost. With Easy Airticket you only pay a service fee and receive a reservation registered in the airline system and verifiable by its PNR code.',
      ],
      sections: [
        {
          h2: 'Rules for the reservation in a Schengen application',
          list: [
            'The reservation must be round-trip and show departure from and return to Türkiye.',
            'Dates must match the application form, hotel booking and travel medical insurance.',
            'The stay must not exceed 90 days within any 180-day period.',
            'Apply to the consulate of your main destination (where you stay longest); if stays are equal, apply to the country of first entry.',
            'The passenger name must be spelled exactly as in the passport, in Latin letters.',
          ],
        },
        {
          h2: 'When should you apply?',
          paragraphs: [
            'You can apply no earlier than 6 months and no later than 15 days before the trip. The decision usually takes 15 calendar days but can be longer in peak season. Getting the reservation close to your appointment date keeps the document valid when you submit it.',
          ],
        },
        {
          h2: 'Documents that go with the reservation',
          list: [
            'Travel medical insurance valid in the whole Schengen area with at least €30,000 coverage',
            'Proof of accommodation (hotel booking or invitation letter)',
            'Bank statements for the last 3–6 months',
            'Employer letter, social security record or student certificate',
          ],
        },
      ],
      faq: [
        { q: 'Do I have to buy a ticket for a Schengen visa?', a: 'No. Consulates ask for a verifiable flight reservation, not a purchased ticket. It is recommended to buy the ticket after the visa is approved.' },
        { q: 'Is a one-way reservation enough?', a: 'No. Schengen applications are expected to include a round-trip reservation showing your return to Türkiye.' },
        { q: 'I will visit several Schengen countries — what should the reservation look like?', a: 'It should reflect your route, e.g. an open-jaw (multi-city) itinerary such as Istanbul–Rome and Paris–Istanbul. Apply to the country where you will stay longest.' },
      ],
    },
  },
  {
    id: 'germany',
    kind: 'country',
    flag: '🇩🇪',
    tr: {
      slug: 'almanya-vizesi-icin-ucak-rezervasyonu',
      name: 'Almanya vizesi',
      title: 'Almanya Vizesi İçin Uçak Rezervasyonu — PNR Kodlu | Easy Airticket',
      description: 'Almanya vizesi başvurusu için PNR kodlu gidiş-dönüş uçak rezervasyonu. Bilet almadan, yalnızca hizmet bedeliyle; belgeler 30 dakikada e-postanızda.',
      h1: 'Almanya vizesi için uçak rezervasyonu',
      lead: 'Almanya turistik, ziyaret ve iş vizesi başvurularında istenen PNR kodlu gidiş-dönüş rezervasyon — bilet ücretini ödemeden.',
      intro: [
        'Almanya, Türkiye’den en çok Schengen vizesi başvurusu alan ülkelerden biridir. Ankara’daki büyükelçilik ile İstanbul, İzmir ve Antalya’daki başkonsolosluklar başvuruları yetkili vize başvuru merkezi aracılığıyla kabul eder.',
        'Almanya evrak listesinde uçuş rezervasyonu açıkça yer alır: Türkiye’den çıkış ve dönüşü gösteren, PNR kodu olan bir rezervasyon beklenir. Easy Airticket bu belgeyi dakikalar içinde hazırlar.',
      ],
      sections: [
        {
          h2: 'Almanya başvurusu için rezervasyonda dikkat edilecekler',
          list: [
            'Rezervasyonda PNR (rezervasyon) kodu ve uçuş numaraları görünmelidir.',
            'Gidiş ve dönüş tarihleri form, sigorta ve konaklama tarihleriyle aynı olmalıdır.',
            'Almanya ana varış ülkesi olmalıdır; başka Schengen ülkelerinde daha uzun kalacaksanız o ülkeye başvurun.',
            'Aile veya grup başvurularında her yolcunun adı rezervasyonda yer almalıdır.',
          ],
        },
        {
          h2: 'Ziyaret ve iş vizesi başvurularında',
          paragraphs: [
            'Aile ziyareti için başvuruyorsanız davet mektubu ve davet edenin belgeleri, iş seyahatinde ise Alman şirketinden davet yazısı gerekir. Her iki durumda da uçuş rezervasyonunun davet mektubundaki tarihlerle uyumlu olması önemlidir.',
          ],
        },
      ],
      faq: [
        { q: 'Almanya vizesi için rezervasyon ne kadar süre geçerli olmalı?', a: 'Rezervasyonun başvuru teslim edildiği gün sistemde aktif olması yeterlidir. Easy Airticket rezervasyonları 7 güne kadar geçerlidir; bu yüzden randevunuza birkaç gün kala almanızı öneririz.' },
        { q: 'Rezervasyon Lufthansa veya Türk Hava Yolları ile mi olmalı?', a: 'Hayır, havayolu fark etmez. Önemli olan rezervasyonun gerçek bir uçuşa ait olması ve PNR koduyla doğrulanabilmesidir.' },
        { q: 'Vize reddedilirse ne olur?', a: 'Bilet satın almadığınız için bilet ücreti kaybınız olmaz; rezervasyon süresi dolunca otomatik olarak iptal edilir.' },
      ],
    },
    en: {
      slug: 'germany-visa-flight-reservation',
      name: 'Germany visa',
      title: 'Flight Reservation for Germany Visa — Verifiable PNR | Easy Airticket',
      description: 'Round-trip flight reservation with a PNR for your German visa application. No ticket purchase, only a service fee; documents by email in 30 minutes.',
      h1: 'Flight reservation for a Germany visa',
      lead: 'The round-trip reservation with a PNR required for German tourist, visitor and business visa applications — without paying for the ticket.',
      intro: [
        'Germany receives some of the highest numbers of Schengen visa applications from Türkiye. The embassy in Ankara and the consulates general in Istanbul, Izmir and Antalya accept applications through an authorised visa application centre.',
        'A flight reservation is explicitly listed in the German document checklist: a reservation with a PNR code showing departure from and return to Türkiye. Easy Airticket prepares this document within minutes.',
      ],
      sections: [
        {
          h2: 'What to check in a reservation for Germany',
          list: [
            'The reservation must show the PNR (booking) code and flight numbers.',
            'Outbound and return dates must match the form, insurance and accommodation.',
            'Germany must be your main destination; if you stay longer in another Schengen country, apply there.',
            'For family or group applications every traveller must be named on the reservation.',
          ],
        },
        {
          h2: 'Visitor and business visas',
          paragraphs: [
            'For a family visit you need an invitation letter and the host’s documents; for a business trip, an invitation from the German company. In both cases the flight reservation should match the dates in the invitation letter.',
          ],
        },
      ],
      faq: [
        { q: 'How long must the reservation be valid for a German visa?', a: 'It needs to be active in the system on the day you submit your application. Easy Airticket reservations are valid for up to 7 days, so we recommend booking a few days before your appointment.' },
        { q: 'Does it have to be Lufthansa or Turkish Airlines?', a: 'No, the airline does not matter. What matters is that the reservation is for a real flight and can be verified with its PNR.' },
        { q: 'What if the visa is refused?', a: 'You have not bought a ticket, so you lose no fare; the reservation is cancelled automatically when it expires.' },
      ],
    },
  },
  {
    id: 'france',
    kind: 'country',
    flag: '🇫🇷',
    tr: {
      slug: 'fransa-vizesi-icin-ucak-rezervasyonu',
      name: 'Fransa vizesi',
      title: 'Fransa Vizesi İçin Uçak Rezervasyonu — PNR Kodlu | Easy Airticket',
      description: 'Fransa vizesi başvurusu için doğrulanabilir PNR kodlu uçak rezervasyonu. Bilet ücreti yok, yalnızca hizmet bedeli; belgeler 30 dakikada.',
      h1: 'Fransa vizesi için uçak rezervasyonu',
      lead: 'Paris ve Fransa seyahatleriniz için vize dosyasına eklenecek PNR kodlu gidiş-dönüş rezervasyon.',
      intro: [
        'Fransa’ya kısa süreli (Schengen) vize başvuruları Ankara’daki büyükelçilik ve İstanbul’daki başkonsolosluk adına yetkili başvuru merkezi üzerinden alınır. Başvuru öncesinde Fransa’nın resmi vize portalında online form doldurulur.',
        'Formda belirttiğiniz giriş ve çıkış tarihleri, dosyadaki uçuş rezervasyonuyla aynı olmalıdır. Easy Airticket, bu tarihlere göre PNR kodlu bir rezervasyonu dakikalar içinde hazırlar.',
      ],
      sections: [
        {
          h2: 'Fransa başvurusu için ipuçları',
          list: [
            'Online formdaki tarihleri rezervasyonu aldıktan sonra kontrol edin — küçük bir tarih farkı bile soru işareti yaratabilir.',
            'Paris dışında birden fazla şehir gezecekseniz rotanızı açık uçlu rezervasyonla gösterebilirsiniz (ör. İstanbul–Paris, Nice–İstanbul).',
            'Konaklama belgeleri ve sigorta tüm seyahat süresini kapsamalıdır.',
          ],
        },
        {
          h2: 'Öğrenci ve kültürel etkinlik seyahatleri',
          paragraphs: [
            'Kısa süreli dil kursu, fuar veya festival için gidiyorsanız kayıt/katılım belgesini rezervasyon tarihleriyle uyumlu hazırlayın. Uzun süreli öğrenci vizesi (ulusal vize) ise farklı bir prosedüre tabidir.',
          ],
        },
      ],
      faq: [
        { q: 'Fransa vizesi için dönüş bileti şart mı?', a: 'Satın alınmış bilet şart değildir, ancak dönüşü gösteren gidiş-dönüş rezervasyon beklenir.' },
        { q: 'Rezervasyonumu değiştirebilir miyim?', a: 'Rezervasyon belirli tarihlere göre oluşturulur. Tarih değişirse yeni bir rezervasyon almanız gerekir; bu yüzden tarihlerinizi netleştirdikten sonra sipariş verin.' },
        { q: 'Paris dışında bir havalimanına rezervasyon yapılabilir mi?', a: 'Evet. Lyon, Nice, Marsilya gibi herhangi bir havalimanına rezervasyon yapılabilir.' },
      ],
    },
    en: {
      slug: 'france-visa-flight-reservation',
      name: 'France visa',
      title: 'Flight Reservation for France Visa — Verifiable PNR | Easy Airticket',
      description: 'Verifiable flight reservation with a PNR for your French visa application. No ticket price, only a service fee; documents in 30 minutes.',
      h1: 'Flight reservation for a France visa',
      lead: 'A round-trip reservation with a PNR for your visa file — for trips to Paris and the rest of France.',
      intro: [
        'Short-stay (Schengen) visa applications for France are collected by an authorised application centre on behalf of the embassy in Ankara and the consulate general in Istanbul. Before applying you fill in an online form on France’s official visa portal.',
        'The entry and exit dates in that form must match the flight reservation in your file. Easy Airticket prepares a reservation with a PNR for those dates within minutes.',
      ],
      sections: [
        {
          h2: 'Tips for a France application',
          list: [
            'Check the dates in the online form after you get the reservation — even a small mismatch can raise questions.',
            'If you are visiting several cities you can show your route with an open-jaw booking (e.g. Istanbul–Paris, Nice–Istanbul).',
            'Accommodation and insurance must cover the whole trip.',
          ],
        },
        {
          h2: 'Students and cultural events',
          paragraphs: [
            'If you are going for a short language course, trade fair or festival, make sure the registration or attendance document matches the reservation dates. Long-stay student visas (national visas) follow a different procedure.',
          ],
        },
      ],
      faq: [
        { q: 'Do I need a return ticket for a France visa?', a: 'A purchased ticket is not required, but a round-trip reservation showing your return is expected.' },
        { q: 'Can I change my reservation?', a: 'A reservation is created for specific dates. If your dates change you need a new reservation, so please order once your dates are final.' },
        { q: 'Can the reservation be to an airport other than Paris?', a: 'Yes — Lyon, Nice, Marseille or any other airport.' },
      ],
    },
  },
  {
    id: 'italy',
    kind: 'country',
    flag: '🇮🇹',
    tr: {
      slug: 'italya-vizesi-icin-ucak-rezervasyonu',
      name: 'İtalya vizesi',
      title: 'İtalya Vizesi İçin Uçak Rezervasyonu — PNR Kodlu | Easy Airticket',
      description: 'İtalya vizesi başvurusu için PNR kodlu gidiş-dönüş uçak rezervasyonu. Bilet almadan, belgeler 30 dakikada e-postanızda.',
      h1: 'İtalya vizesi için uçak rezervasyonu',
      lead: 'Roma, Milano, Venedik — İtalya vize dosyanız için doğrulanabilir gidiş-dönüş uçuş rezervasyonu.',
      intro: [
        'İtalya’ya Schengen vizesi başvuruları Ankara’daki büyükelçilik ile İstanbul ve İzmir’deki başkonsolosluklar adına yetkili başvuru merkezi aracılığıyla yapılır. Evrak listesinde gidiş-dönüş uçuş rezervasyonu yer alır.',
        'Easy Airticket ile istediğiniz İtalya havalimanına, başvuru formundaki tarihlerle birebir uyumlu bir rezervasyon alırsınız.',
      ],
      sections: [
        {
          h2: 'İtalya başvurusu için ipuçları',
          list: [
            'Yaz aylarında randevu yoğunluğu artar; rezervasyonu randevu tarihinize göre planlayın.',
            'Kuzey ve güney İtalya’yı gezecekseniz Milano’ya giriş, Roma’dan çıkış gibi açık uçlu rota kullanabilirsiniz.',
            'Rezervasyondaki isim, pasaporttaki yazımla harfi harfine aynı olmalıdır.',
          ],
        },
        {
          h2: 'Tur ve etkinlik başvuruları',
          paragraphs: [
            'Moda haftaları, fuarlar veya düğün gibi etkinlikler için gidiyorsanız davet veya katılım belgesiyle rezervasyon tarihlerinin örtüşmesine dikkat edin.',
          ],
        },
      ],
      faq: [
        { q: 'İtalya vizesi için hangi havalimanına rezervasyon yapmalıyım?', a: 'Seyahat planınıza uygun herhangi bir havalimanına: Roma Fiumicino, Milano Malpensa, Venedik, Napoli vb.' },
        { q: 'Rezervasyon aile üyeleri için tek belgede olabilir mi?', a: 'Evet, birden fazla yolcu aynı rezervasyonda yer alabilir. Her yolcunun adı pasaportundaki gibi yazılır.' },
        { q: 'Konsolosluk rezervasyonu nasıl kontrol eder?', a: 'PNR kodu ile havayolu veya rezervasyon sistemi üzerinden sorgulanabilir.' },
      ],
    },
    en: {
      slug: 'italy-visa-flight-reservation',
      name: 'Italy visa',
      title: 'Flight Reservation for Italy Visa — Verifiable PNR | Easy Airticket',
      description: 'Round-trip flight reservation with a PNR for your Italian visa application. No ticket purchase, documents by email in 30 minutes.',
      h1: 'Flight reservation for an Italy visa',
      lead: 'Rome, Milan, Venice — a verifiable round-trip flight reservation for your Italy visa file.',
      intro: [
        'Schengen visa applications for Italy are made through an authorised application centre on behalf of the embassy in Ankara and the consulates general in Istanbul and Izmir. A round-trip flight reservation is on the document checklist.',
        'With Easy Airticket you get a reservation to any Italian airport, matching the dates in your application form exactly.',
      ],
      sections: [
        {
          h2: 'Tips for an Italy application',
          list: [
            'Appointments get busy in summer — plan the reservation around your appointment date.',
            'For a trip through northern and southern Italy you can use an open-jaw route, e.g. into Milan and out of Rome.',
            'The name on the reservation must match the passport letter by letter.',
          ],
        },
        {
          h2: 'Tours and events',
          paragraphs: [
            'If you are travelling for fashion weeks, trade fairs or a wedding, make sure the invitation or registration matches the reservation dates.',
          ],
        },
      ],
      faq: [
        { q: 'Which airport should I book for an Italy visa?', a: 'Any airport that fits your plan: Rome Fiumicino, Milan Malpensa, Venice, Naples and so on.' },
        { q: 'Can family members be on one reservation?', a: 'Yes, several passengers can be on the same reservation, each named as in their passport.' },
        { q: 'How does the consulate check the reservation?', a: 'It can be looked up by its PNR code with the airline or the reservation system.' },
      ],
    },
  },
  {
    id: 'spain',
    kind: 'country',
    flag: '🇪🇸',
    tr: {
      slug: 'ispanya-vizesi-icin-ucak-rezervasyonu',
      name: 'İspanya vizesi',
      title: 'İspanya Vizesi İçin Uçak Rezervasyonu — PNR Kodlu | Easy Airticket',
      description: 'İspanya vizesi başvurusu için doğrulanabilir PNR kodlu uçak rezervasyonu. Bilet ücreti ödemeden, belgeler 30 dakikada.',
      h1: 'İspanya vizesi için uçak rezervasyonu',
      lead: 'Barselona, Madrid ve tüm İspanya için vize dosyanıza uygun PNR kodlu gidiş-dönüş rezervasyon.',
      intro: [
        'İspanya’ya kısa süreli vize başvuruları Ankara’daki büyükelçilik ve İstanbul’daki başkonsolosluk adına yetkili başvuru merkezi tarafından alınır. Evrak listesinde gidiş-dönüş uçuş rezervasyonu istenir.',
        'Easy Airticket ile bileti satın almadan, başvuru tarihlerinize uygun ve PNR koduyla doğrulanabilir bir rezervasyon alırsınız.',
      ],
      sections: [
        {
          h2: 'İspanya başvurusu için ipuçları',
          list: [
            'Kanarya veya Balear adalarına gidecekseniz iç hat bağlantısını rotanızda gösterebilirsiniz.',
            'Otel rezervasyonları ve sigorta, uçuş tarihlerinizle aynı dönemi kapsamalıdır.',
            'Başvuru yoğunluğu yaz öncesi artar; randevunuzu erken alın.',
          ],
        },
      ],
      faq: [
        { q: 'İspanya vizesi için gidiş-dönüş rezervasyon zorunlu mu?', a: 'Evet, dönüşü gösteren bir rezervasyon evrak listesinde yer alır. Satın alınmış bilet gerekmez.' },
        { q: 'Barselona’ya gidip Madrid’den dönebilir miyim?', a: 'Evet, açık uçlu rota ile giriş ve çıkış havalimanları farklı olabilir.' },
        { q: 'Rezervasyonu ne zaman almalıyım?', a: 'Randevunuzdan birkaç gün önce; böylece başvuru günü rezervasyon aktif olur.' },
      ],
    },
    en: {
      slug: 'spain-visa-flight-reservation',
      name: 'Spain visa',
      title: 'Flight Reservation for Spain Visa — Verifiable PNR | Easy Airticket',
      description: 'Verifiable flight reservation with a PNR for your Spanish visa application. No ticket price, documents in 30 minutes.',
      h1: 'Flight reservation for a Spain visa',
      lead: 'A round-trip reservation with a PNR for Barcelona, Madrid and the whole of Spain, ready for your visa file.',
      intro: [
        'Short-stay visa applications for Spain are collected by an authorised application centre on behalf of the embassy in Ankara and the consulate general in Istanbul. A round-trip flight reservation is on the checklist.',
        'With Easy Airticket you get a reservation matching your application dates and verifiable by its PNR — without buying the ticket.',
      ],
      sections: [
        {
          h2: 'Tips for a Spain application',
          list: [
            'If you are going to the Canary or Balearic Islands you can show the domestic connection in your route.',
            'Hotel bookings and insurance must cover the same period as your flights.',
            'Demand rises before summer — book your appointment early.',
          ],
        },
      ],
      faq: [
        { q: 'Is a round-trip reservation required for a Spain visa?', a: 'Yes, a reservation showing your return is on the checklist. A purchased ticket is not needed.' },
        { q: 'Can I fly into Barcelona and out of Madrid?', a: 'Yes, with an open-jaw route the arrival and departure airports can differ.' },
        { q: 'When should I get the reservation?', a: 'A few days before your appointment, so that it is active on the day you apply.' },
      ],
    },
  },
  {
    id: 'netherlands',
    kind: 'country',
    flag: '🇳🇱',
    tr: {
      slug: 'hollanda-vizesi-icin-ucak-rezervasyonu',
      name: 'Hollanda vizesi',
      title: 'Hollanda Vizesi İçin Uçak Rezervasyonu — PNR Kodlu | Easy Airticket',
      description: 'Hollanda vizesi başvurusu için PNR kodlu gidiş-dönüş uçak rezervasyonu. Bilet almadan, yalnızca hizmet bedeliyle.',
      h1: 'Hollanda vizesi için uçak rezervasyonu',
      lead: 'Amsterdam ve Hollanda seyahatiniz için konsolosluğa sunulacak doğrulanabilir uçuş rezervasyonu.',
      intro: [
        'Hollanda’ya Schengen vizesi başvuruları, Ankara’daki büyükelçilik ve İstanbul’daki başkonsolosluk adına yetkili başvuru merkezi üzerinden alınır. Dosyada seyahat tarihlerini gösteren gidiş-dönüş rezervasyon bulunmalıdır.',
        'Easy Airticket, Amsterdam Schiphol veya dilediğiniz havalimanı için PNR kodlu rezervasyonu dakikalar içinde e-postanıza gönderir.',
      ],
      sections: [
        {
          h2: 'Hollanda başvurusu için ipuçları',
          list: [
            'Benelüks turu planlıyorsanız (Hollanda, Belçika, Lüksemburg) en uzun kalacağınız ülkeye başvurun.',
            'İş ve fuar seyahatlerinde davet yazısındaki tarihlerle rezervasyonu eşleştirin.',
            'Rezervasyonu başvuru formunu doldurmadan önce alırsanız tarihleri formda doğrudan kullanabilirsiniz.',
          ],
        },
      ],
      faq: [
        { q: 'Hollanda vizesi için rezervasyonda hangi bilgiler olmalı?', a: 'Yolcu adı, PNR kodu, uçuş numaraları, tarih ve saatler, kalkış ve varış havalimanları.' },
        { q: 'Amsterdam’a aktarmalı uçuş olur mu?', a: 'Evet, aktarmalı uçuşlar da rezervasyon olarak kabul edilir.' },
        { q: 'Belçika’dan dönebilir miyim?', a: 'Evet, açık uçlu rota ile Amsterdam’a gidip Brüksel’den dönüş rezervasyonu yapılabilir.' },
      ],
    },
    en: {
      slug: 'netherlands-visa-flight-reservation',
      name: 'Netherlands visa',
      title: 'Flight Reservation for Netherlands Visa — PNR | Easy Airticket',
      description: 'Round-trip flight reservation with a PNR for your Dutch visa application. No ticket purchase, only a service fee.',
      h1: 'Flight reservation for a Netherlands visa',
      lead: 'A verifiable flight reservation for your trip to Amsterdam and the Netherlands, ready for the consulate.',
      intro: [
        'Schengen visa applications for the Netherlands go through an authorised application centre on behalf of the embassy in Ankara and the consulate general in Istanbul. The file must include a round-trip reservation showing your travel dates.',
        'Easy Airticket emails you a reservation with a PNR for Amsterdam Schiphol or any other airport within minutes.',
      ],
      sections: [
        {
          h2: 'Tips for a Netherlands application',
          list: [
            'Planning a Benelux trip (Netherlands, Belgium, Luxembourg)? Apply to the country where you stay longest.',
            'For business and trade fair trips match the reservation with the dates in the invitation letter.',
            'Get the reservation before filling in the application form so you can use its dates directly.',
          ],
        },
      ],
      faq: [
        { q: 'What should the reservation show for a Dutch visa?', a: 'Passenger name, PNR code, flight numbers, dates and times, departure and arrival airports.' },
        { q: 'Are connecting flights to Amsterdam fine?', a: 'Yes, connecting flights are accepted as a reservation too.' },
        { q: 'Can I return from Belgium?', a: 'Yes, an open-jaw booking into Amsterdam and out of Brussels is possible.' },
      ],
    },
  },
  {
    id: 'greece',
    kind: 'country',
    flag: '🇬🇷',
    tr: {
      slug: 'yunanistan-vizesi-icin-ucak-rezervasyonu',
      name: 'Yunanistan vizesi',
      title: 'Yunanistan Vizesi İçin Uçak Rezervasyonu — PNR Kodlu | Easy Airticket',
      description: 'Yunanistan vizesi başvurusu için PNR kodlu uçak rezervasyonu. Atina ve adalar için; bilet almadan, belgeler 30 dakikada.',
      h1: 'Yunanistan vizesi için uçak rezervasyonu',
      lead: 'Atina, Selanik ve Yunan adaları için Schengen vizesi dosyanıza uygun PNR kodlu rezervasyon.',
      intro: [
        'Yunanistan’a Schengen vizesi başvuruları Ankara’daki büyükelçilik ile İstanbul, İzmir ve Edirne’deki başkonsolosluklar adına yetkili başvuru merkezi aracılığıyla yapılır.',
        'Uçakla seyahat edecekseniz dosyada gidiş-dönüş uçuş rezervasyonu yer almalıdır. Easy Airticket bu rezervasyonu bilet ücreti ödemeden hazırlar.',
      ],
      sections: [
        {
          h2: 'Yunanistan başvurusu için ipuçları',
          list: [
            'Feribot veya kara yoluyla gidecekseniz uçuş rezervasyonu yerine ilgili ulaşım belgesi sunulabilir; uçakla gidecekseniz PNR kodlu rezervasyon gerekir.',
            'Adalara gidişte Atina aktarmalı rota gösterebilirsiniz.',
            'Yaz sezonunda başvuru yoğunluğu çok yüksektir; randevuyu erken alın.',
          ],
        },
      ],
      faq: [
        { q: 'Kapıda vize ile ada ziyareti yerine Schengen vizesi mi almalıyım?', a: 'Kapıda vize uygulaması yalnızca belirli adalar ve dönemler için geçerlidir ve Schengen bölgesine giriş hakkı vermez. Anakara ve diğer ülkeler için Schengen vizesi gerekir.' },
        { q: 'Selanik’e rezervasyon yapılabilir mi?', a: 'Evet, Atina, Selanik veya ada havalimanlarına rezervasyon yapılabilir.' },
        { q: 'Gidişi uçakla, dönüşü feribotla yapacağım, olur mu?', a: 'Evet; uçuş rezervasyonu gidiş için, feribot rezervasyonu dönüş için sunulabilir. Tarihlerin tutarlı olması yeterlidir.' },
      ],
    },
    en: {
      slug: 'greece-visa-flight-reservation',
      name: 'Greece visa',
      title: 'Flight Reservation for Greece Visa — Verifiable PNR | Easy Airticket',
      description: 'Flight reservation with a PNR for your Greek visa application. For Athens and the islands; no ticket purchase, documents in 30 minutes.',
      h1: 'Flight reservation for a Greece visa',
      lead: 'A reservation with a PNR for Athens, Thessaloniki and the Greek islands, ready for your Schengen visa file.',
      intro: [
        'Schengen visa applications for Greece go through an authorised application centre on behalf of the embassy in Ankara and the consulates general in Istanbul, Izmir and Edirne.',
        'If you are flying, the file must include a round-trip flight reservation. Easy Airticket prepares it without you paying for the ticket.',
      ],
      sections: [
        {
          h2: 'Tips for a Greece application',
          list: [
            'If you travel by ferry or by land, the relevant transport booking can be submitted instead; if you fly, a reservation with a PNR is needed.',
            'For the islands you can show a route connecting via Athens.',
            'Demand is very high in summer — book your appointment early.',
          ],
        },
      ],
      faq: [
        { q: 'Should I get a Schengen visa instead of the island visa-on-arrival?', a: 'The visa-on-arrival scheme applies only to certain islands and periods and does not grant entry to the Schengen area. For the mainland and other countries you need a Schengen visa.' },
        { q: 'Can I book to Thessaloniki?', a: 'Yes — Athens, Thessaloniki or island airports.' },
        { q: 'I will fly there and return by ferry — is that OK?', a: 'Yes; submit the flight reservation for the outbound trip and the ferry booking for the return. The dates just need to be consistent.' },
      ],
    },
  },
  {
    id: 'uk',
    kind: 'country',
    flag: '🇬🇧',
    tr: {
      slug: 'ingiltere-vizesi-icin-ucak-rezervasyonu',
      name: 'İngiltere vizesi',
      title: 'İngiltere Vizesi İçin Uçak Rezervasyonu | Easy Airticket',
      description: 'İngiltere (UK) ziyaretçi vizesi başvurusu için PNR kodlu uçak rezervasyonu. Bileti vize çıkmadan almayın — rezervasyon yeterli.',
      h1: 'İngiltere vizesi için uçak rezervasyonu',
      lead: 'UK Standard Visitor vizesi başvurunuzda seyahat planınızı gösteren PNR kodlu rezervasyon — bilet riskine girmeden.',
      intro: [
        'İngiltere Schengen bölgesinde değildir ve kendi vize sistemine sahiptir. Başvuru GOV.UK üzerinden online yapılır, ardından biyometri için başvuru merkezinden randevu alınır.',
        'Birleşik Krallık makamları vize sonuçlanmadan iade edilemeyen bilet alınmamasını önerir. Uçuş rezervasyonu zorunlu bir evrak olmasa da, formdaki seyahat tarihlerinizi destekleyen güçlü bir belgedir.',
      ],
      sections: [
        {
          h2: 'UK başvurusunda rezervasyonun faydası',
          list: [
            'Formda belirttiğiniz geliş ve ayrılış tarihlerini somut olarak gösterir.',
            'Seyahat amacınızın ve süresinin tutarlı olduğunu kanıtlamaya yardımcı olur.',
            'Vize reddi durumunda bilet ücreti kaybına yol açmaz.',
          ],
        },
        {
          h2: 'Ziyaretçi vizesinde kalış süresi',
          paragraphs: [
            'Standard Visitor vizesiyle her ziyarette genellikle 6 aya kadar kalınabilir. Rezervasyondaki dönüş tarihi, başvuruda belirttiğiniz kalış süresiyle uyumlu olmalıdır.',
          ],
        },
      ],
      faq: [
        { q: 'İngiltere vizesi için uçak rezervasyonu zorunlu mu?', a: 'Zorunlu değildir, ancak seyahat planınızı destekleyen bir belge olarak dosyaya eklenmesi faydalıdır.' },
        { q: 'Londra dışındaki havalimanlarına rezervasyon olur mu?', a: 'Evet, Manchester, Edinburgh, Birmingham gibi havalimanlarına da rezervasyon yapılabilir.' },
        { q: 'Vize sonucu 7 günden uzun sürerse rezervasyon ne olur?', a: 'Rezervasyonun başvuru teslim edildiği gün aktif olması yeterlidir; sonrasında süresi dolup iptal edilmesi başvurunuzu etkilemez.' },
      ],
    },
    en: {
      slug: 'uk-visa-flight-reservation',
      name: 'UK visa',
      title: 'Flight Reservation for UK Visa | Easy Airticket',
      description: 'Flight reservation with a PNR for your UK Standard Visitor visa. Don’t buy tickets before the visa — a reservation is enough.',
      h1: 'Flight reservation for a UK visa',
      lead: 'A reservation with a PNR that shows your travel plan in a UK Standard Visitor application — without the ticket risk.',
      intro: [
        'The UK is not part of the Schengen area and has its own visa system. You apply online on GOV.UK and then book a biometrics appointment at an application centre.',
        'UK authorities advise against buying non-refundable tickets before the visa is decided. A flight reservation is not a mandatory document, but it is strong support for the travel dates stated in your form.',
      ],
      sections: [
        {
          h2: 'Why a reservation helps a UK application',
          list: [
            'It shows concretely the arrival and departure dates stated in the form.',
            'It helps prove that the purpose and length of your trip are consistent.',
            'A refusal does not cost you a ticket fare.',
          ],
        },
        {
          h2: 'Length of stay on a visitor visa',
          paragraphs: [
            'On a Standard Visitor visa you can usually stay up to 6 months per visit. The return date on the reservation should match the length of stay you state in your application.',
          ],
        },
      ],
      faq: [
        { q: 'Is a flight reservation required for a UK visa?', a: 'It is not mandatory, but it is useful supporting evidence of your travel plan.' },
        { q: 'Can I book to airports other than London?', a: 'Yes — Manchester, Edinburgh, Birmingham and others.' },
        { q: 'What if the decision takes longer than 7 days?', a: 'The reservation only needs to be active when you submit the application; it expiring afterwards does not affect your application.' },
      ],
    },
  },
  {
    id: 'usa',
    kind: 'country',
    flag: '🇺🇸',
    tr: {
      slug: 'amerika-vizesi-icin-ucak-rezervasyonu',
      name: 'Amerika vizesi',
      title: 'Amerika (ABD) Vizesi İçin Uçak Rezervasyonu | Easy Airticket',
      description: 'ABD B1/B2 vize mülakatı için seyahat planınızı gösteren PNR kodlu uçak rezervasyonu. Vize çıkmadan bilet almayın.',
      h1: 'Amerika vizesi için uçak rezervasyonu',
      lead: 'ABD turist/iş (B1/B2) vizesi mülakatında seyahat planınızı destekleyen PNR kodlu rezervasyon.',
      intro: [
        'ABD vizesi başvurusu DS-160 formu ve Ankara’daki büyükelçilik ya da İstanbul’daki başkonsoloslukta yapılan mülakatla ilerler. Formda planlanan seyahat tarihinizi belirtirsiniz.',
        'ABD Dışişleri Bakanlığı, vize onaylanmadan bilet alınmamasını önerir. Uçuş rezervasyonu zorunlu değildir, ancak mülakatta seyahat planınızı net anlatmanıza yardımcı olur.',
      ],
      sections: [
        {
          h2: 'Mülakatta rezervasyon ne işe yarar?',
          list: [
            'DS-160’taki planlanan varış tarihini ve kalış süresini somutlaştırır.',
            'Görevli seyahat programınızı sorduğunda tutarlı bir cevap vermenizi kolaylaştırır.',
            'Randevu ve mülakat arasında uzun süre olabileceğinden, bilet almak yerine rezervasyon mantıklı bir çözümdür.',
          ],
        },
      ],
      faq: [
        { q: 'ABD vizesi için uçak bileti gerekli mi?', a: 'Hayır. Ne bilet ne de rezervasyon zorunludur; rezervasyon yalnızca destekleyici belgedir.' },
        { q: 'Rezervasyonu ne zaman almalıyım?', a: 'Mülakat tarihinize birkaç gün kala; böylece mülakat günü aktif olur.' },
        { q: 'Hangi şehre rezervasyon yapılmalı?', a: 'Gideceğiniz şehre: New York, Miami, Los Angeles, Chicago veya planınıza uygun herhangi bir havalimanı.' },
      ],
    },
    en: {
      slug: 'usa-visa-flight-reservation',
      name: 'USA visa',
      title: 'Flight Reservation for US Visa | Easy Airticket',
      description: 'Flight reservation with a PNR showing your travel plan for a US B1/B2 visa interview. Don’t buy tickets before the visa.',
      h1: 'Flight reservation for a US visa',
      lead: 'A reservation with a PNR that supports your travel plan at a US tourist/business (B1/B2) visa interview.',
      intro: [
        'A US visa application consists of the DS-160 form and an interview at the embassy in Ankara or the consulate general in Istanbul. In the form you state your intended travel date.',
        'The US Department of State advises against buying tickets before the visa is approved. A flight reservation is not required, but it helps you present your travel plan clearly at the interview.',
      ],
      sections: [
        {
          h2: 'How a reservation helps at the interview',
          list: [
            'It makes the intended arrival date and length of stay from your DS-160 concrete.',
            'It helps you answer consistently when the officer asks about your itinerary.',
            'There can be a long gap between booking an appointment and the interview, so a reservation makes more sense than a ticket.',
          ],
        },
      ],
      faq: [
        { q: 'Do I need a flight ticket for a US visa?', a: 'No. Neither a ticket nor a reservation is mandatory; a reservation is supporting evidence only.' },
        { q: 'When should I get the reservation?', a: 'A few days before your interview so that it is active on the day.' },
        { q: 'Which city should I book to?', a: 'Your destination: New York, Miami, Los Angeles, Chicago or any airport that fits your plan.' },
      ],
    },
  },
  {
    id: 'uae',
    kind: 'country',
    flag: '🇦🇪',
    tr: {
      slug: 'dubai-vizesi-icin-ucak-rezervasyonu',
      name: 'Dubai vizesi',
      title: 'Dubai (BAE) Vizesi İçin Uçak Rezervasyonu | Easy Airticket',
      description: 'Dubai ve Birleşik Arap Emirlikleri vizesi başvurusu için PNR kodlu gidiş-dönüş uçak rezervasyonu. Belgeler 30 dakikada.',
      h1: 'Dubai vizesi için uçak rezervasyonu',
      lead: 'BAE e-vize başvurularında sıkça istenen gidiş-dönüş rezervasyon — bileti vize onayından sonra alın.',
      intro: [
        'Türk vatandaşları Dubai ve Birleşik Arap Emirlikleri’ne seyahat için genellikle önceden vize almalıdır. Başvurular çoğunlukla online (e-vize) olarak, havayolu, otel veya yetkili acenteler aracılığıyla yapılır.',
        'Başvuru sırasında gidiş-dönüş uçuş bilgisi sıkça istenir. Easy Airticket ile bileti vize onayı gelmeden satın almak zorunda kalmazsınız.',
      ],
      sections: [
        {
          h2: 'Dubai vizesi için ipuçları',
          list: [
            'Pasaportunuzun seyahat tarihinden itibaren en az 6 ay geçerli olduğundan emin olun.',
            'Rezervasyon vize başvurusu içindir; havalimanında uçağa binmek ve BAE’ye giriş için satın alınmış gerçek bilet gerekir.',
            'Abu Dabi veya Şarika havalimanlarına da rezervasyon yapılabilir.',
          ],
        },
      ],
      faq: [
        { q: 'Dubai vizesi için dönüş bileti şart mı?', a: 'Başvuru aşamasında çoğunlukla gidiş-dönüş uçuş bilgisi istenir; bunun için rezervasyon yeterlidir. Seyahat sırasında ise gerçek bilet gerekir.' },
        { q: 'Rezervasyonla Dubai’ye uçabilir miyim?', a: 'Hayır. Rezervasyon bilet değildir ve uçuş için kullanılamaz; vize çıktıktan sonra bilet satın almalısınız.' },
        { q: 'Transit geçişte rezervasyon işe yarar mı?', a: 'Transit vize başvurularında devam uçuşunu gösteren rezervasyon faydalı olabilir.' },
      ],
    },
    en: {
      slug: 'dubai-visa-flight-reservation',
      name: 'Dubai visa',
      title: 'Flight Reservation for Dubai (UAE) Visa | Easy Airticket',
      description: 'Round-trip flight reservation with a PNR for your Dubai / UAE visa application. Documents in 30 minutes.',
      h1: 'Flight reservation for a Dubai visa',
      lead: 'The round-trip reservation often requested in UAE e-visa applications — buy the ticket after the visa is approved.',
      intro: [
        'Turkish citizens generally need a visa in advance to travel to Dubai and the United Arab Emirates. Applications are mostly made online (e-visa) through airlines, hotels or authorised agencies.',
        'Round-trip flight details are frequently requested during the application. With Easy Airticket you don’t have to buy the ticket before the visa is approved.',
      ],
      sections: [
        {
          h2: 'Tips for a Dubai visa',
          list: [
            'Make sure your passport is valid for at least 6 months from the travel date.',
            'The reservation is for the visa application; boarding and entry to the UAE require a real purchased ticket.',
            'Reservations to Abu Dhabi or Sharjah are also possible.',
          ],
        },
      ],
      faq: [
        { q: 'Do I need a return ticket for a Dubai visa?', a: 'Round-trip flight details are usually requested at the application stage, and a reservation is enough for that. For the trip itself you need a real ticket.' },
        { q: 'Can I fly to Dubai with the reservation?', a: 'No. A reservation is not a ticket and cannot be used to fly; buy your ticket once the visa is issued.' },
        { q: 'Is a reservation useful for transit?', a: 'For transit visa applications a reservation showing your onward flight can be helpful.' },
      ],
    },
  },
];
