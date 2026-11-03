/* =========================================================
   FlowKat Character — main.js
   스크롤하면 .reveal 요소가 아래에서 올라오며 나타납니다.
   ========================================================= */

(function () {
  var items = document.querySelectorAll('.reveal');

  // IntersectionObserver를 지원하지 않는 브라우저: 바로 전부 보이기
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target); // 한 번만 실행
      }
    });
  }, {
    threshold: 0.12 // 요소가 12% 보이면 실행
  });

  items.forEach(function (el) { observer.observe(el); });
})();
