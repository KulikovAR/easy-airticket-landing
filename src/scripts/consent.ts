// Cookie consent (KVKK): analytics scripts are injected only after the visitor accepts.
const KEY = 'cookie-consent';
const banner = document.getElementById('consent');

function readConsent(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function saveConsent(value: 'all' | 'necessary') {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    /* storage blocked — consent applies to this page view only */
  }
}

function loadScript(src: string) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function loadAnalytics(ga4: string, ym: string) {
  const w = window as any;
  if (ga4) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${ga4}`);
    w.dataLayer = w.dataLayer || [];
    w.gtag = function () {
      w.dataLayer.push(arguments);
    };
    w.gtag('js', new Date());
    w.gtag('config', ga4, { anonymize_ip: true });
  }
  if (ym) {
    w.ym =
      w.ym ||
      function () {
        (w.ym.a = w.ym.a || []).push(arguments);
      };
    w.ym.l = Date.now();
    loadScript('https://mc.yandex.ru/metrika/tag.js');
    w.ym(Number(ym), 'init', { clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: false });
  }
}

if (banner) {
  const ga4 = banner.dataset.ga4 ?? '';
  const ym = banner.dataset.ym ?? '';
  const consent = readConsent();

  if (consent === 'all') loadAnalytics(ga4, ym);
  else if (!consent) banner.hidden = false;

  banner.addEventListener('click', (e) => {
    const choice = (e.target as HTMLElement).closest<HTMLElement>('[data-consent]')?.dataset.consent;
    if (choice !== 'all' && choice !== 'necessary') return;
    saveConsent(choice);
    banner.hidden = true;
    if (choice === 'all') loadAnalytics(ga4, ym);
  });
}
