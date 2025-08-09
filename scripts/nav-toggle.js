let gameElements = document.getElementsByClassName("games-content");
let storyElements = document.getElementsByClassName("stories-content");
let projectElements = document.getElementsByClassName("projects-content");

let aboutContent = document.getElementsByClassName("about-content");

function selected() {
  const selectedTab = document.querySelector(
    'input[name="toggle"]:checked'
  ).value;
  localStorage.setItem("selectedTab", selectedTab);
  localStorage.setItem("selectedTabTime", Date.now());

  let toggleContent = document.getElementById("switch-content");

  if (document.getElementById("games").checked) {
    for (let i = 0; i < gameElements.length; i++) {
      gameElements[i].style.display = "flex";
    }

    for (let i = 0; i < projectElements.length; i++) {
      projectElements[i].style.display = "none";
    }

    for (let i = 0; i < aboutContent.length; i++) {
      aboutContent[i].style.display = "none";
    }

    toggleContent.style.display = "flex";
  } else if (document.getElementById("about").checked) {
    for (let i = 0; i < gameElements.length; i++) {
      gameElements[i].style.display = "none";
    }

    for (let i = 0; i < projectElements.length; i++) {
      projectElements[i].style.display = "none";
    }

    for (let i = 0; i < aboutContent.length; i++) {
      aboutContent[i].style.display = "flex";
    }

    toggleContent.style.display = "none";
  } else if (document.getElementById("projects").checked) {
    for (let i = 0; i < gameElements.length; i++) {
      gameElements[i].style.display = "none";
    }

    for (let i = 0; i < projectElements.length; i++) {
      projectElements[i].style.display = "flex";
    }

    for (let i = 0; i < aboutContent.length; i++) {
      aboutContent[i].style.display = "none";
    }

    toggleContent.style.display = "flex";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTab = localStorage.getItem("selectedTab");
  const savedTime = localStorage.getItem("selectedTabTime");

  if (savedTab && savedTime) {
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;

    if (now - savedTime < oneHour) {
      const radioButton = document.querySelector(`input[value="${savedTab}"]`);
      if (radioButton) {
        radioButton.checked = true;
        selected();
      }
    } else {
      localStorage.removeItem("selectedTab");
      localStorage.removeItem("selectedTabTime");
    }
  }
});

let lastScrollY = window.pageYOffset;
const threshold = 150; // pixels to scroll before toggling
const navToggle = document.querySelector(".nav-toggle");

window.addEventListener("scroll", () => {
  const currentScrollY = window.pageYOffset;
  const scrollDiff = currentScrollY - lastScrollY;

  if (scrollDiff > threshold) {
    // Scrolled down more than threshold
    navToggle.classList.add("collapsed");
    lastScrollY = currentScrollY;
  } else if (scrollDiff < -threshold) {
    // Scrolled up more than threshold
    navToggle.classList.remove("collapsed");
    lastScrollY = currentScrollY;
  }
});
