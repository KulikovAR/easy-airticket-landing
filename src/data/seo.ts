// Search engine verification, analytics and indexing settings.
// Empty values are simply not rendered.
export const seo = {
  // Google Search Console → "HTML tag" method: the content="…" value
  googleSiteVerification: '',
  // Yandex Webmaster → "Meta tag" method
  yandexVerification: '',
  // Bing Webmaster Tools → "Meta tag" method (msvalidate.01)
  bingVerification: '',

  // Analytics — loaded only after the visitor accepts cookies (KVKK)
  ga4Id: '', // e.g. G-XXXXXXXXXX
  yandexMetrikaId: '', // e.g. 12345678

  // IndexNow (Bing, Yandex, Seznam, Naver…): public/<key>.txt must contain the same key
  indexNowKey: '0c193ac303811d814a6ef423eac5d11e',
};
