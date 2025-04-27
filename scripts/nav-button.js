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
  "touché",
  "are we... bonding?",
  "at this rate, we're besties"
];

let availablePhrases = [...phrases];

homeIcon.addEventListener('click', () => {
  if (isAnimating) return;

  isAnimating = true;

  if (availablePhrases.length === 0) {
    availablePhrases = [...phrases];
  }

  const randomIndex = Math.floor(Math.random() * availablePhrases.length);
  const randomPhrase = availablePhrases[randomIndex];

  tooltip.textContent = randomPhrase;
  availablePhrases.splice(randomIndex, 1);

  tooltip.style.animation = 'tooltipFloat 1.2s ease-in-out forwards';

  setTimeout(() => {
    tooltip.style.animation = 'none';
    isAnimating = false;
  }, 1200);
});