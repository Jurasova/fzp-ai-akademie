/**
 * sidebar.js — FŽP AI Akademie
 *
 * Každá podstránka nastaví před načtením tohoto skriptu:
 *   window.PORTAL_PATH_PREFIX = '../';   // nebo '' pro root
 *
 * Každá <body> má atribut data-nav="<klíč>" odpovídající data-nav na odkazech v sidebaru.
 *
 * Sidebar je vložen jako inline template literal — funguje přes file:// i GitHub Pages.
 */

(function () {
  'use strict';

  var p = window.PORTAL_PATH_PREFIX || '';

  /* ── Sidebar HTML ────────────────────────────────────────────── */

  var html = '\
<nav class="sidebar-inner">\
\
  <a class="sidebar-brand" href="' + p + 'index.html">\
    <span class="sidebar-dot" aria-hidden="true"></span>\
    F\u017dP AI Akademie\
  </a>\
\
  <details class="sidebar-section" data-section="jak">\
    <summary>Jak pracovat s AI</summary>\
    <div class="sidebar-links">\
      <a href="' + p + 'navody/jak-zacit.html"      data-nav="navody-zacit">    <span class="dot"></span>Jak za\u010d\u00edt s AI</a>\
      <a href="' + p + 'navody/ai-mindset.html"     data-nav="navody-mindset">  <span class="dot"></span>AI mindset</a>\
      <a href="' + p + 'navody/technicke-tipy.html" data-nav="navody-technicke"><span class="dot"></span>Tipy a triky</a>\
    </div>\
  </details>\
\
  <details class="sidebar-section" data-section="aplikace">\
    <summary>Aplikace</summary>\
    <div class="sidebar-links">\
      <a href="' + p + 'aplikace/copilot-pruvodce.html" data-nav="app-copilot">\
        <span class="dot" style="background:#1D9E75"></span>Copilot pr\u016fvodce\
      </a>\
      <a href="' + p + 'aplikace/promjena-vyuky.html" data-nav="app-promjenavyuky">\
        <span class="dot" style="background:#7F77DD"></span>Prom\u011bna v\u00fduky s AI\
      </a>\
      <a href="' + p + 'aplikace/galerie-nastroju.html" data-nav="app-galerie">\
        <span class="dot" style="background:#888780"></span>Galerie n\u00e1stroj\u016f\
      </a>\
    </div>\
  </details>\
\
  <details class="sidebar-section" data-section="vpraxi">\
    <summary>AI v praxi</summary>\
    <div class="sidebar-links">\
      <a href="' + p + 'v-praxi/vedecky-clanek.html" data-nav="vpraxi-clanek"> <span class="dot"></span>P\u00ed\u0161u v\u011bdeck\u00fd \u010dl\u00e1nek</a>\
      <a href="' + p + 'v-praxi/reserse.html"         data-nav="vpraxi-reserse"><span class="dot"></span>D\u011bl\u00e1m re\u0161er\u0161i</a>\
      <a href="' + p + 'v-praxi/priprava-vyuky.html"  data-nav="vpraxi-vyuka">  <span class="dot"></span>P\u0159ipravuji v\u00fduku</a>\
      <a href="' + p + 'v-praxi/administrativa.html"  data-nav="vpraxi-admin">  <span class="dot"></span>\u0158e\u0161\u00edm administrativu</a>\
      <a href="' + p + 'v-praxi/grant-zprava.html"    data-nav="vpraxi-grant">  <span class="dot"></span>P\u00ed\u0161u grant nebo zpr\u00e1vu</a>\
      <a href="' + p + 'v-praxi/analyza-dat.html"     data-nav="vpraxi-data">   <span class="dot"></span>Analyzuji data</a>\
    </div>\
  </details>\
\
  <details class="sidebar-section" data-section="bezpecnost">\
    <summary>Bezpe\u010dnost &amp; etika</summary>\
    <div class="sidebar-links">\
      <a href="' + p + 'bezpecnost/pravidla-czu.html"  data-nav="bezpecnost-czu">      <span class="dot"></span>Pravidla \u010cZU</a>\
      <a href="' + p + 'bezpecnost/eu-ai-act.html"     data-nav="bezpecnost-ai-act">   <span class="dot"></span>EU AI Act \u2014 co v\u011bd\u011bt</a>\
      <a href="' + p + 'bezpecnost/co-nesdilet.html"   data-nav="bezpecnost-nesdilet"> <span class="dot"></span>Co nesdílet s AI</a>\
    </div>\
  </details>\
\
  <details class="sidebar-section" data-section="agenti">\
    <summary>Agenti a asistenti</summary>\
    <div class="sidebar-links">\
      <a href="' + p + 'agenti/prehled.html" data-nav="agenti-prehled"><span class="dot"></span>P\u0159ehled agent\u016f</a>\
    </div>\
  </details>\
\
  <details class="sidebar-section" data-section="komunita">\
    <summary>Komunita</summary>\
    <div class="sidebar-links">\
      <a href="' + p + 'komunita/novinky.html" data-nav="komunita-novinky"><span class="dot"></span>Novinky a aktuality</a>\
    </div>\
  </details>\
\
  <div class="sidebar-version">v1.0 beta \u00b7 F\u017dP \u010cZU</div>\
\
</nav>';

  /* ── Vložení do DOM ──────────────────────────────────────────── */

  var aside = document.getElementById('sidebar');
  if (!aside) return;
  aside.innerHTML = html;

  /* ── Označení aktivní stránky ────────────────────────────────── */

  function markActive() {
    var current = document.body.getAttribute('data-nav');
    if (!current) return;

    aside.querySelectorAll('a[data-nav]').forEach(function (a) {
      if (a.getAttribute('data-nav') === current) {
        a.classList.add('sidebar-link-active');
      }
    });
  }

  /* ── Otevření aktivní sekce ──────────────────────────────────── */

  function openActiveSection() {
    var current = document.body.getAttribute('data-nav');
    if (!current) return;

    var link = aside.querySelector('a[data-nav="' + current + '"]');
    if (!link) return;

    var section = link.closest('details.sidebar-section');
    if (section) {
      section.open = true;
      try { localStorage.setItem('fzp-sidebar-' + section.dataset.section, 'open'); } catch (e) {}
    }
  }

  /* ── Obnova stavu sekcí z localStorage ──────────────────────── */

  function restoreSections() {
    aside.querySelectorAll('details.sidebar-section').forEach(function (det) {
      var key = 'fzp-sidebar-' + det.dataset.section;
      var stored;
      try { stored = localStorage.getItem(key); } catch (e) {}

      if (stored === 'open')   det.open = true;
      if (stored === 'closed') det.open = false;

      det.addEventListener('toggle', function () {
        try { localStorage.setItem(key, det.open ? 'open' : 'closed'); } catch (e) {}
      });
    });
  }

  /* ── Spuštění ────────────────────────────────────────────────── */

  restoreSections();    // nejdřív obnov uložený stav
  openActiveSection();  // aktivní sekce přebije uložený stav
  markActive();         // zvýrazni aktivní odkaz

})();
