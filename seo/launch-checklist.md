# Чек-лист запуска и продвижения — Easy Airticket

## Уже сделано в коде

| Что | Где | Зачем |
|---|---|---|
| `llms.txt` и `llms-full.txt` | генерируются из `src/lib/llms.ts` | Описание сервиса для ChatGPT, Claude, Perplexity, Gemini — чтобы ИИ-поиск цитировал сайт |
| `robots.txt` | `public/robots.txt` | Разрешены Google, Bing, Яндекс и ИИ-боты (GPTBot, ClaudeBot, PerplexityBot…), указан sitemap |
| `sitemap.xml` с hreflang | генерируется автоматически | Все 50 страниц TR/EN с парами языков |
| Мета-теги подтверждения | `src/data/seo.ts` | Google Search Console, Яндекс Вебмастер, Bing Webmaster |
| Аналитика + баннер cookie (KVKK) | `src/data/seo.ts`, `src/scripts/consent.ts` | GA4 и Яндекс Метрика грузятся только после «Kabul et» |
| IndexNow | ключ в `src/data/seo.ts` и `public/<ключ>.txt`, скрипт `npm run indexnow` | Мгновенная переиндексация в Bing и Яндексе |
| Open Graph-картинки | `public/og/og-tr.png`, `og-en.png` (`npm run images`) | Красивое превью ссылок в WhatsApp, Telegram, Facebook, X |
| Иконки и manifest | `favicon.svg/.ico`, `apple-touch-icon.png`, `icon-192/512.png`, `site.webmanifest` | Иконка в браузере, на iPhone/Android |
| `security.txt` | `public/.well-known/security.txt` | Стандарт контакта по безопасности (сигнал доверия) |
| Schema.org | в каждой странице | WebSite, Organization, Service + цена, FAQPage, BreadcrumbList |

## Что сделать снаружи (по порядку)

### 1. Хостинг и SSL-сертификат
- Выложить папку `dist/` (после `npm run build`) на хостинг: Cloudflare Pages, Netlify или Vercel — все бесплатно выдают **SSL-сертификат (HTTPS)** автоматически.
- Направить домен `easy-airticket.com` на хостинг, включить редирект `http → https` и `www → без www`.
- Проверить, что `https://easy-airticket.com/llms.txt`, `/robots.txt`, `/sitemap.xml` открываются.

### 2. Google Search Console — https://search.google.com/search-console
1. Добавить ресурс «Префикс URL»: `https://easy-airticket.com/`.
2. Способ «HTML-тег» → скопировать значение `content="…"` в `googleSiteVerification` в `src/data/seo.ts` → пересобрать и выложить → «Подтвердить».
3. «Файлы Sitemap» → отправить `sitemap.xml`.
4. «Проверка URL» → запросить индексирование главной и 5–10 ключевых страниц (Шенген, Германия, Стамбул…).

### 3. Яндекс Вебмастер — https://webmaster.yandex.com
1. Добавить сайт, способ «Мета-тег» → значение в `yandexVerification`.
2. «Индексирование → Файлы Sitemap» → добавить sitemap.
3. «Регион сайта» → Türkiye.

### 4. Bing Webmaster Tools — https://www.bing.com/webmasters
- Можно импортировать сайт из Google Search Console одной кнопкой, либо мета-тег → `bingVerification`.
- Bing питает поиск ChatGPT и Copilot — важно для ИИ-выдачи.

### 5. IndexNow (после каждого обновления сайта)
```bash
npm run build && npm run indexnow
```
Отправит все URL из sitemap в Bing/Яндекс. Запускать только после выкладки на хостинг.

### 6. Аналитика
- **GA4:** https://analytics.google.com → создать ресурс → ID вида `G-XXXXXXXXXX` → `ga4Id`.
- **Яндекс Метрика:** https://metrika.yandex.com → номер счётчика → `yandexMetrikaId`.
- После заполнения баннер cookie появится автоматически.

### 7. Юридическое и доверие (Турция)
- **ETBİS** — регистрация на https://www.eticaret.gov.tr (обязательна для интернет-продаж в Турции; уточнить у юриста) → ссылку на проверку вписать в `etbis` в `src/data/company.ts`.
- **TÜRSAB** — выяснить, нужна ли лицензия для этой модели; если есть — номер в `tursab`.
- **VERBİS** (реестр операторов персональных данных) — уточнить у юриста, обязана ли компания регистрироваться.
- Юридические тексты согласовать с юристом.

### 8. Локальное продвижение и отзывы
- **Google Business Profile** — https://business.google.com (если есть офис/адрес в Турции).
- **Şikayetvar** — https://www.sikayetvar.com — завести профиль компании и отвечать на отзывы.
- Собирать отзывы в Google после каждого заказа (ссылка в письме с документами).

### 9. Реклама на старте
- **Google Ads** по запросам из `seo/semantic-core.md` (кластеры ★★★), таргет Türkiye, языки TR и EN.
- SEO даёт трафик через 3–6 месяцев, реклама — сразу.

### 10. Ссылки
- Гостевые статьи на визовых и тревел-блогах, ответы на форумах (ekşi sözlük, vizebp.org), каталоги турагентств.
