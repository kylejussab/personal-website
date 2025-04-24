document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.game-sub-container, .opening');
    const navLinks = document.querySelectorAll('.page-navigation ul li a');

    function highlightNav() {
      let index = sections.length;

      while (--index && window.scrollY < sections[index].offsetTop) {}

      navLinks.forEach((link) => link.classList.remove('active'));
      if (index >= 0) {
        navLinks[index].classList.add('active');
      }
    }

    highlightNav();
    window.addEventListener('scroll', highlightNav);
});