document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".game-sub-container, .opening");
  const navLinks = document.querySelectorAll(".page-navigation ul li a");

  function highlightNav() {
    let index = sections.length;

    while (--index && window.scrollY < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    if (index >= 0) {
      navLinks[index].classList.add("active");
    }
  }

  highlightNav();
  window.addEventListener("scroll", highlightNav);
});

(function () {
  const backButton = document.querySelector(".back-button");
  if (!backButton) return;

  let lastScrollY = window.pageYOffset;
  const revealAfter = 50;
  const deltaThreshold = 5;
  const initialDelay = 1500;
  let userHasScrolled = false;

  window.addEventListener(
    "scroll",
    () => {
      userHasScrolled = true;
      backButton.classList.add("visible");
    },
    { passive: true, once: true }
  );

  setTimeout(() => {
    if (!userHasScrolled) {
      backButton.classList.add("visible");
    }
  }, initialDelay);

  window.addEventListener(
    "scroll",
    () => {
      const currentY = window.pageYOffset;
      const diff = currentY - lastScrollY;

      if (diff > deltaThreshold && currentY > revealAfter) {
        backButton.classList.add("shrunk");
      } else if (diff < -deltaThreshold) {
        backButton.classList.remove("shrunk");
      }

      lastScrollY = currentY;
    },
    { passive: true }
  );
})();
