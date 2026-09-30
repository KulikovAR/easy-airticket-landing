# Семантическое ядро — Easy Airticket (TR + EN)

> **Схема адресов изменена:** английский — основной язык на `/`, турецкий — на `/tr/`.
> Страницы стран и городов — это статьи блога: `/blog/<slug>/` и `/tr/blog/<slug>/`.
> Ниже пути TR-страниц указаны без префикса `/tr` исторически: реальный адрес — `/tr/<путь>`, английские — без `/en`.
> Английские тексты стран переписаны нейтрально (для заявителей из любой страны), турецкие — под рынок Турции.
> Цена — $15 на всех языках.

Собрано по выдаче Google.com.tr и страницам конкурентов (сентябрь 2026):
seyahatmarket.com, visacenter.com.tr, vizegaranti.com, schengenvize.net, vizem.net, volticket.com,
dummyticket365.com, pnrbooking.com, bookforvisa.com, dummyflights.com.

Частотности не указаны: для них нужен доступ к Google Keyword Planner / Ahrefs / Semrush.
Приоритет (★★★ / ★★ / ★) — экспертная оценка по конкуренции в выдаче.

Правило формулировок: на **турецком** не используем «sahte» и «dummy» (в TR-выдаче конкуренты пишут,
что «sahte bilet» = отказ и запрет). Акцент — «gerçek», «doğrulanabilir», «PNR kodlu».
На **английском** «dummy ticket» — главный запрос, используем его.

---

## TR — главная `/`

| Кластер | Запросы | Приоритет |
|---|---|---|
| Основной | vize için uçak rezervasyonu · vize için uçak bileti rezervasyonu · vize başvurusu için uçak rezervasyonu · vize için uçuş rezervasyonu | ★★★ |
| PNR | PNR kodlu uçak rezervasyonu · PNR kodlu bilet · doğrulanabilir uçak rezervasyonu · live PNR rezervasyon | ★★★ |
| Без оплаты | ödemesiz uçak rezervasyonu · ücretsiz uçak rezervasyonu vize · bilet almadan vize başvurusu · uçak bileti almadan vize | ★★ |
| Опция/отмена | opsiyonlu uçak bileti · iptal edilebilir uçak bileti vize · rezervasyonlu bilet vize | ★★ |
| Информационные | vize başvurusunda uçak bileti gerekli mi · vize için uçak bileti almak zorunlu mu · vize çıkmadan uçak bileti almak · uçak rezervasyonu nasıl yapılır vize | ★★ (→ FAQ / будущий блог) |
| Коммерческие | vize uçak rezervasyonu fiyat · vize için uçak rezervasyonu ücreti · vize rezervasyonu online | ★★ |

## TR — страны (`/<ulke>-vizesi-icin-ucak-rezervasyonu/`)

Шаблон: `<ülke> vizesi için uçak rezervasyonu`, `<ülke> vizesi uçak bileti`, `<ülke> vizesi uçuş rezervasyonu`, `<ülke> vizesi PNR`, `<ülke> vize evrakları uçak rezervasyonu`.

| Страница | Ключевые запросы |
|---|---|
| Schengen | schengen vizesi için uçak rezervasyonu · schengen vizesi uçak bileti · schengen vize başvurusu uçuş rezervasyonu · schengen gidiş dönüş rezervasyon |
| Almanya | almanya vizesi için uçak rezervasyonu · almanya vizesi uçak bileti PNR · almanya vize evrakları uçak rezervasyonu |
| Fransa | fransa vizesi için uçak rezervasyonu · fransa vizesi uçak bileti |
| İtalya | italya vizesi için uçak rezervasyonu · italya vizesi uçak bileti |
| İspanya | ispanya vizesi için uçak rezervasyonu · ispanya vizesi uçak bileti |
| Hollanda | hollanda vizesi için uçak rezervasyonu · hollanda vizesi uçak bileti |
| Yunanistan | yunanistan vizesi için uçak rezervasyonu · yunanistan vizesi uçak bileti |
| İngiltere | ingiltere vizesi için uçak rezervasyonu · ingiltere vizesi uçak bileti gerekli mi · UK vize uçak rezervasyonu |
| Amerika | amerika vizesi için uçak rezervasyonu · ABD vizesi uçak bileti · amerika vize mülakatı uçak bileti |
| Dubai | dubai vizesi için uçak rezervasyonu · dubai vizesi dönüş bileti · BAE vizesi uçak bileti |

Кандидаты на следующие страницы: Belçika, Avusturya, İsviçre, Polonya, Çekya, Macaristan, Portekiz, Kanada, Rusya (у SeyahatMarket есть), Japonya.

## TR — города (`/<sehir>-vize-icin-ucak-rezervasyonu/`)

Шаблон: `<şehir> vize uçak rezervasyonu`, `<şehir>da vize için uçak bileti`, `<şehir> vize başvurusu uçak rezervasyonu`.

| Страница | Особенности |
|---|---|
| İstanbul | IST / SAW; больше всего консульств и визовых центров |
| Ankara | ESB; посольства |
| İzmir | ADB; консульства Германии, Италии, Греции |
| Antalya | AYT; консульство Германии, прямые рейсы в Европу |
| Bursa | через IST/SAW, YEI; деловые поездки |
| Gaziantep | GZT; региональный центр юго-востока |

Кандидаты: Adana, Konya, Kayseri, Trabzon, Samsun, Diyarbakır, Eskişehir, Mersin.

## EN — `/en/…`

| Кластер | Запросы | Страница |
|---|---|---|
| Основной | dummy ticket for visa · flight reservation for visa · flight itinerary for visa · dummy ticket Turkey · onward ticket | /en/ |
| PNR | verifiable PNR · dummy ticket with PNR · flight reservation with PNR | /en/ |
| Страны | schengen visa flight reservation · germany visa dummy ticket · UK visa flight reservation · US visa dummy ticket · dubai visa return ticket | /en/<country>-visa-flight-reservation/ |
| Города | flight reservation for visa Istanbul / Ankara / Izmir / Antalya | /en/<city>-visa-flight-reservation/ |
| Инфо | do I need a flight ticket for schengen visa · is dummy ticket legal · dummy ticket vs real ticket | /en/faq/ |

## Будущие кластеры (новые услуги у конкурентов)

- **Отель:** vize için otel rezervasyonu · ödemesiz otel rezervasyonu vize · hotel booking for visa
- **Страховка:** schengen seyahat sağlık sigortası · vize sigortası · travel insurance for schengen visa
- **Пакет:** vize için uçak ve otel rezervasyonu · vize evrak paketi

## Что уже сделано в коде

- Title / description / H1 каждой страницы собраны под ключевые запросы кластера.
- Schema.org: WebSite, Organization, Service + Offer ($15, USD), FAQPage, BreadcrumbList, Article (блог).
- hreflang для всех языков страницы + x-default (EN), реестр страниц в `src/data/routes.ts`, `sitemap.xml` генерируется автоматически.
- Внутренняя перелинковка: главная → 3 статьи + «Все статьи», страница блога `/blog/` со всеми статьями, в каждой статье — 4 похожие (сначала того же типа).
