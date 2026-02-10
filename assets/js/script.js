// Minimal enhancements only.
// 1) Reveal on scroll
// 2) Close mobile nav on click

(function () {
  const revealEls = Array.from(document.querySelectorAll(".reveal"));

  const onReveal = () => {
    const vh = window.innerHeight || 800;
    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh - 80) el.classList.add("is-visible");
    });
  };

  window.addEventListener("scroll", onReveal, { passive: true });
  window.addEventListener("resize", onReveal);
  onReveal();

  const navToggle = document.getElementById("nav-toggle");
  const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
  navLinks.forEach((a) => {
    a.addEventListener("click", () => {
      if (navToggle) navToggle.checked = false;
    });
  });
})();