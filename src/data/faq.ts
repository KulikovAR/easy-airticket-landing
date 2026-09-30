import type { Faq } from './types';
import type { Lang } from './i18n';
import { price } from './site';

/** Full FAQ for the /faq/ page. */
export const generalFaq: Partial<Record<Lang, Faq[]>> = {
  tr: [
    { q: 'Vize için uçak rezervasyonu nedir?', a: 'Havayolu rezervasyon sisteminde sizin adınıza oluşturulan, ancak bilet ücreti ödenmemiş gerçek bir uçuş kaydıdır. PNR (rezervasyon) kodu vardır ve konsolosluk tarafından doğrulanabilir.' },
    { q: 'Bu bir sahte bilet mi?', a: 'Hayır. Düzenlenmiş veya uydurma belgeler vize reddine ve yasağa yol açabilir. Bizim rezervasyonlarımız gerçek uçuşlara ait, sistemde kayıtlı ve PNR koduyla sorgulanabilir kayıtlardır.' },
    { q: 'Konsolosluklar rezervasyonu kabul ediyor mu?', a: 'Evet. Schengen ülkeleri dahil birçok konsolosluk satın alınmış bilet değil, uçuş rezervasyonu ister ve vize onaylanmadan bilet alınmamasını önerir.' },
    { q: 'Rezervasyon ne kadar süre geçerli?', a: 'Rezervasyon 7 güne kadar geçerlidir, süre dolduktan sonra otomatik olarak iptal edilir. Başvuru günü aktif olması yeterlidir.' },
    { q: 'Belgeler ne zaman gelir?', a: 'Ödeme onaylandıktan sonra 30 dakika içinde belirttiğiniz e-posta adresine PDF olarak gönderilir.' },
    { q: 'Ücret ne kadar?', a: `Yalnızca hizmet bedeli ödersiniz: ${price.display}. Bilet ücreti ödemezsiniz.` },
    { q: 'Rezervasyonla uçabilir miyim?', a: 'Hayır. Rezervasyon bilet değildir ve seyahat için kullanılamaz. Vize çıktıktan sonra dilediğiniz havayolundan bilet satın almalısınız.' },
    { q: 'Hangi bilgileri vermem gerekiyor?', a: 'Pasaporttaki gibi ad-soyad, pasaport bilgileri, rota ve tarihler ile belgelerin gönderileceği e-posta adresi.' },
    { q: 'Vize reddedilirse ne olur?', a: 'Bilet satın almadığınız için bilet ücreti kaybınız olmaz. Rezervasyon süresi dolunca kendiliğinden iptal olur.' },
    { q: 'Ücret iadesi var mı?', a: 'Hizmet, onayınızla hemen ifa edildiği için belge gönderildikten sonra cayma hakkı kullanılamaz. Belge tarafımızdan kaynaklanan bir hata nedeniyle teslim edilemezse ücret iade edilir.' },
  ],
  en: [
    { q: 'What is a flight reservation for a visa?', a: 'A real flight booking created in the airline reservation system in your name, without the ticket being paid for. It has a PNR (booking) code and can be verified by the consulate.' },
    { q: 'Is this a fake ticket?', a: 'No. Edited or made-up documents can lead to a refusal and a ban. Our reservations are real bookings for real flights, registered in the system and verifiable by their PNR.' },
    { q: 'Do consulates accept a reservation?', a: 'Yes. Many consulates, including the Schengen countries, ask for a flight reservation rather than a purchased ticket and advise against buying tickets before the visa is approved.' },
    { q: 'How long is the reservation valid?', a: 'Up to 7 days, after which it is cancelled automatically. It only needs to be active on the day you apply.' },
    { q: 'When do I receive the documents?', a: 'Within 30 minutes after your payment is confirmed, as a PDF sent to the email you provide.' },
    { q: 'How much does it cost?', a: `You only pay a service fee: ${price.display}. You don’t pay the ticket price.` },
    { q: 'Can I fly with the reservation?', a: 'No. A reservation is not a ticket and cannot be used to travel. Buy a ticket from any airline once your visa is issued.' },
    { q: 'What information do I need to provide?', a: 'Your full name as in the passport, passport details, route and dates, and the email address for the documents.' },
    { q: 'What if my visa is refused?', a: 'You haven’t bought a ticket, so you lose no fare. The reservation is cancelled automatically when it expires.' },
    { q: 'Can I get a refund?', a: 'Because the service is performed immediately with your consent, the right of withdrawal no longer applies once the documents are sent. If we fail to deliver due to our error, the fee is refunded.' },
  ],
};
