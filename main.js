(function () {
  'use strict';

  var top = document.querySelector('.gh-top');
  var bur = document.querySelector('.gh-burger');
  var nav = document.getElementById('gh-nav');

  if (top && bur && nav) {
    bur.addEventListener('click', function () {
      var on = top.classList.toggle('gh-on');
      bur.setAttribute('aria-expanded', on);
      bur.setAttribute('aria-label', on ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        top.classList.remove('gh-on');
        bur.setAttribute('aria-expanded', 'false');
        bur.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (!id || id === '#') return;
      var el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  document.querySelectorAll('[data-gh-filter]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cat = btn.getAttribute('data-gh-filter') || 'all';
      document.querySelectorAll('[data-gh-filter]').forEach(function (b) {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      document.querySelectorAll('[data-gh-cat]').forEach(function (row) {
        var c = row.getAttribute('data-gh-cat') || '';
        row.style.display = cat === 'all' || c === cat ? '' : 'none';
      });
    });
  });
})();
