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

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal || e.target.closest('[data-close]')) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  }

  // Language dropdown: close on outside click / Escape.
  var langMenu = document.querySelector('.lang');
  if (langMenu) {
    document.addEventListener('click', function (e) {
      if (langMenu.open && !langMenu.contains(e.target)) langMenu.open = false;
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && langMenu.open) {
        langMenu.open = false;
        langMenu.querySelector('summary').focus();
      }
    });
  }

  // From / To: searchable dropdown (test data from places.js for now).
  var places = window.TEST_PLACES || [];

  function norm(str) {
    return str.toLowerCase().replace(/ı/g, 'i').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  var placeFields = [];

  document.querySelectorAll('.field--place').forEach(function (field) {
    var key = field.getAttribute('data-place');
    var input = field.querySelector('input[type="text"]');
    var hidden = field.querySelector('input[type="hidden"]');
    var list = field.querySelector('.place-list');
    var emptyText = field.getAttribute('data-empty') || 'Nothing found';
    var results = [];
    var active = -1;

    function render() {
      var q = norm(input.value.trim());
      // When the field shows an already chosen value, list everything.
      if (hidden.value && input.value === labelOf(findPlace(hidden.value))) q = '';
      results = places.filter(function (p) {
        return !q || [p.city, p.airport, p.code, p.country].some(function (v) { return norm(v).indexOf(q) !== -1; });
      });
      active = results.length ? 0 : -1;
      list.innerHTML = results.length
        ? results.map(function (p, i) {
            return '<li role="option" id="' + key + '-opt-' + i + '" data-i="' + i + '">' +
              '<span class="place-list__main"><strong>' + escapeHtml(p.city) + '</strong>' +
              '<small>' + escapeHtml(p.airport) + ', ' + escapeHtml(p.country) + '</small></span>' +
              '<span class="place-list__code">' + p.code + '</span></li>';
          }).join('')
        : '<li class="place-list__empty">' + escapeHtml(emptyText) + '</li>';
      highlight();
    }

    function highlight() {
      list.querySelectorAll('[role="option"]').forEach(function (li, i) {
        li.classList.toggle('is-active', i === active);
        li.setAttribute('aria-selected', i === active ? 'true' : 'false');
        if (i === active) li.scrollIntoView({ block: 'nearest' });
      });
      if (active >= 0) input.setAttribute('aria-activedescendant', key + '-opt-' + active);
      else input.removeAttribute('aria-activedescendant');
    }

    function open() {
      placeFields.forEach(function (f) { if (f !== api) f.close(); });
      render();
      list.hidden = false;
      field.classList.add('is-open');
      input.setAttribute('aria-expanded', 'true');
    }

    function close() {
      list.hidden = true;
      field.classList.remove('is-open');
      input.setAttribute('aria-expanded', 'false');
      // Restore the chosen value if the user typed something and left.
      var chosen = findPlace(hidden.value);
      input.value = chosen ? labelOf(chosen) : '';
    }

    function choose(i) {
      var p = results[i];
      if (!p) return;
      hidden.value = p.code;
      input.value = labelOf(p);
      close();
      track('place_select', { field: key, code: p.code });
      // Move on to the next step of the form.
      if (key === 'from') {
        var to = document.getElementById('to');
        if (to && !to.value) to.focus();
      } else if (key === 'to' && datePicker && !datePicker.selectedDates.length) {
        input.blur();
        datePicker.open();
      }
    }

    input.addEventListener('focus', function () { open(); input.select(); });
    input.addEventListener('input', function () { hidden.value = ''; open(); });
    input.addEventListener('blur', function () { close(); });
    input.addEventListener('keydown', function (e) {
      if (list.hidden && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) { open(); return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); if (results.length) { active = (active + 1) % results.length; highlight(); } }
      else if (e.key === 'ArrowUp') { e.preventDefault(); if (results.length) { active = (active - 1 + results.length) % results.length; highlight(); } }
      else if (e.key === 'Enter') { if (!list.hidden) { e.preventDefault(); choose(active); } }
      else if (e.key === 'Escape') { close(); }
    });

    // Keep focus in the input while clicking an option.
    list.addEventListener('mousedown', function (e) { e.preventDefault(); });
    list.addEventListener('click', function (e) {
      var li = e.target.closest('[role="option"]');
      if (li) choose(+li.getAttribute('data-i'));
    });

    field.addEventListener('mousedown', function (e) {
      if (list.contains(e.target) || e.target === input) return;
      e.preventDefault();
      if (document.activeElement === input) { list.hidden ? open() : close(); }
      else input.focus();
    });

    var api = { close: close };
    placeFields.push(api);
  });

  function findPlace(code) {
    for (var i = 0; i < places.length; i++) if (places[i].code === code) return places[i];
    return null;
  }

  function labelOf(p) {
    return p ? p.city + ' (' + p.code + ')' : '';
  }

  // Dates: real range picker.
  var datePicker = null;
  if (window.flatpickr && document.getElementById('dates')) {
    var locale = flatpickr.l10ns[lang] || 'default';
    datePicker = flatpickr('#dates', {
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

  // FAQ accordion: one item open at a time.
  var faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq__q button');
    btn.addEventListener('click', function () {
      var willOpen = !item.classList.contains('is-open');
      faqItems.forEach(function (other) {
        other.classList.remove('is-open');
        other.querySelector('.faq__q button').setAttribute('aria-expanded', 'false');
      });
      if (willOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        track('faq_open', { question: btn.id });
      }
    });
  });

  // Footer "notify me" form. NOTE: nothing is stored yet — hook up a real endpoint before launch.
  var notifyForm = document.getElementById('notify-form');
  if (notifyForm) {
    var notifyMsg = document.getElementById('notify-msg');
    notifyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = notifyForm.elements.email;
      if (!email.checkValidity() || !email.value.trim()) {
        notifyForm.classList.add('is-invalid');
        email.focus();
        return;
      }
      notifyForm.classList.remove('is-invalid');
      notifyForm.reset();
      notifyMsg.textContent = notifyMsg.getAttribute('data-ok');
      notifyMsg.classList.add('is-ok');
      track('notify_submit');
    });
    notifyForm.elements.email.addEventListener('input', function () {
      notifyForm.classList.remove('is-invalid');
    });
  }

  // Back to top.
  var toTop = document.querySelector('.footer__top');
  if (toTop) {
    toTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll reveal with a small stagger inside the bento grid.
  document.querySelectorAll('.bento .reveal, .blog__grid .reveal, .faq__list .reveal').forEach(function (el, i) {
    el.style.setProperty('--reveal-delay', (i % 3) * 0.1 + 's');
  });
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -80px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  var searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      openModal('submit');
    });
  }
})();
