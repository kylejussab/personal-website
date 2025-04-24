const navButton = document.querySelector('.nav-button');
const primaryNav = document.querySelector(".primary-navigation");

navButton.addEventListener('click', () => {
    const isOpened = navButton.getAttribute('aria-expanded');
    if(isOpened === "false"){
        navButton.setAttribute('aria-expanded', 'true');
    }
    else{
        navButton.setAttribute('aria-expanded', 'false');
    }
    primaryNav.toggleAttribute("data-visible");
    primaryNav.classList.remove("hide-on-start")
});

const homeIcon = document.getElementById('homeIcon');
const tooltip = document.getElementById('kyle-click');
let isAnimating = false;

const phrases = [
    "did you just click me?",
    "sup",
    "what it do",
    "i'm listening",
    "still here, yes",
    "clicked again, huh?",
  ];

homeIcon.addEventListener('click', () => {
    if (isAnimating) return;

    isAnimating = true;

    let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    tooltip.textContent = randomPhrase;

    tooltip.style.animation = 'tooltipFloat 1.2s ease-in-out forwards';
  
    setTimeout(() => {
      tooltip.style.animation = 'none';
      isAnimating = false;
    }, 1200);
  });