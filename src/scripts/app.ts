import flatpickr from 'flatpickr';
import { Turkish } from 'flatpickr/dist/l10n/tr.js';
import 'flatpickr/dist/flatpickr.min.css';

const lang = document.documentElement.lang || 'tr';
const modal = document.getElementById('soon-modal')!;
let lastTrigger: Element | null = null;

// Hook for analytics (GA4 / GTM / Metrica): lets you measure search intent before the real search exists.
function track(event: string, params: Record<string, unknown> = {}) {
  const w = window as unknown as { dataLayer: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, lang, ...params });
}

function openModal(source: string) {
  lastTrigger = document.activeElement;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  modal.querySelector<HTMLElement>('.modal__close')!.focus();
  track('search_intent', { source });
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  if (lastTrigger instanceof HTMLElement) lastTrigger.blur();
}

modal.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target === modal || target.closest('[data-close]')) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
});

// From / To: show the "coming soon" popup instead of an autocomplete for now.
document.querySelectorAll<HTMLInputElement>('[data-soon]').forEach((input) => {
  const source = input.dataset.soon!;
  input.closest('.field')!.addEventListener('click', () => openModal(source));
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' || e.key === 'Shift') return;
    e.preventDefault();
    openModal(source);
  });
});

// Dates: real range picker.
if (document.getElementById('dates')) {
  flatpickr('#dates', {
    mode: 'range',
    minDate: 'today',
    dateFormat: 'Y-m-d',
    altInput: true,
    altFormat: 'j M',
    locale: lang === 'tr' ? Turkish : 'default',
    showMonths: window.innerWidth > 760 ? 2 : 1,
    disableMobile: true,
  });
}

document.getElementById('search-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  openModal('submit');
});

// CTA on pages without a search form falls back to the popup.
document.querySelectorAll<HTMLAnchorElement>('[data-cta]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const form = document.getElementById('search-form');
    if (!form) {
      e.preventDefault();
      openModal('cta');
      return;
    }
    e.preventDefault();
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    track('cta_click');
  });
});
