(function () {

  // 1) Reveal on scroll
  var revealEls = Array.from(document.querySelectorAll('.reveal'));

  function onReveal() {
    var vh = window.innerHeight || 800;
    revealEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < vh - 60) el.classList.add('is-visible');
    });
  }

  window.addEventListener('scroll', onReveal, { passive: true });
  window.addEventListener('resize', onReveal);
  onReveal();

  // 2) Close mobile nav on link click
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = Array.from(document.querySelectorAll('.site-nav a'));
  navLinks.forEach(function (a) {
    a.addEventListener('click', function () {
      if (navToggle) navToggle.checked = false;
    });
  });

  // 3) Active nav link based on current path
  var currentPath = window.location.pathname;
  navLinks.forEach(function (a) {
    var href = a.getAttribute('href');
    if (href && href !== '/' && currentPath.indexOf(href) === 0) {
      a.classList.add('active');
    }
  });

  // 4) Scroll-to-top button
  var scrollBtn = document.createElement('button');
  scrollBtn.className = 'scroll-top-btn';
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  scrollBtn.innerHTML = '&#8679;';
  document.body.appendChild(scrollBtn);

  function onScroll() {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

})();
