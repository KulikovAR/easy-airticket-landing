(function () {
  var lang = document.documentElement.lang || 'tr';
  var modal = document.getElementById('soon-modal');
  var lastTrigger = null;

  // Hook for analytics (GA4 / GTM / Metrica): lets you measure search intent before the real search exists.
  function track(event, params) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: event, lang: lang }, params || {}));
  }

  function openModal(source) {
    lastTrigger = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('.modal__close').focus();
    track('search_intent', { source: source });
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    if (lastTrigger && lastTrigger.blur) lastTrigger.blur();
  }

  modal.addEventListener('click', function (e) {
    if (e.target === modal || e.target.closest('[data-close]')) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

  // From / To: show the "coming soon" popup instead of an autocomplete for now.
  document.querySelectorAll('[data-soon]').forEach(function (input) {
    var source = input.getAttribute('data-soon');
    input.closest('.field').addEventListener('click', function () { openModal(source); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Shift') return;
      e.preventDefault();
      openModal(source);
    });
  });

  // Dates: real range picker.
  if (window.flatpickr) {
    var locale = lang === 'tr' && flatpickr.l10ns.tr ? flatpickr.l10ns.tr : 'default';
    flatpickr('#dates', {
      mode: 'range',
      minDate: 'today',
      dateFormat: 'Y-m-d',
      altInput: true,
      altFormat: 'j M',
      locale: locale,
      showMonths: window.innerWidth > 760 ? 2 : 1,
      disableMobile: true
    });
  }

  document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    openModal('submit');
  });
})();
