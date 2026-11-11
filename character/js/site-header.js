/* =========================================================
   FlowKat 사이트 헤더 — 968px 미만 메뉴 열고 닫기
   ========================================================= */
(function () {
  var btn = document.querySelector('.fk-menu-btn');
  var menu = document.getElementById('fk-mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    menu.hidden = !open;
  });
})();
