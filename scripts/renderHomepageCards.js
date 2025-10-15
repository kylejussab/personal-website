const gameCardTemplate = document.querySelector("[data-game-template]");
const gameCardContainer = document.querySelector("[data-game-cards-container]");

const projectCardTemplate = document.querySelector("[data-project-template]");
const projectCardContainer = document.querySelector(
  "[data-project-cards-container]"
);

function renderGameCards() {
  gameCardContainer.innerHTML = "";

  const sortedData = sortData(gameData, chronologicalOrder);

  sortedData.forEach((post, index) => {
    const card = gameCardTemplate.content.cloneNode(true).children[0];

    const title = card.querySelector("[data-title]");
    const role = card.querySelector("[data-role]");
    const description = card.querySelector("[data-description]");
    const image = card.querySelector("[data-img]");
    const link = card.querySelector("[data-link]");

    const additionalDescriptionContainer = card.querySelector(
      ".additional-description-container"
    );
    const additionalDescription = card.querySelector(".additional-description");
    const stats = card.querySelector(".stats-container");
    const stat1 = card.querySelector("[data-stat1]");
    const stat1supporting = card.querySelector("[data-stat1supporting]");
    const stat2 = card.querySelector("[data-stat2]");
    const stat2supporting = card.querySelector("[data-stat2supporting]");
    const stat3 = card.querySelector("[data-stat3]");
    const stat3supporting = card.querySelector("[data-stat3supporting]");

    const roleText = post.role.split("|")[1]?.trim() || post.role;
    const newRoleNumber = String(index + 1).padStart(2, "0");
    role.innerHTML = `${newRoleNumber} | ${roleText}`;

    title.innerHTML = post.title;
    description.textContent = post.description;
    image.innerHTML = `<img src="${post.image}" alt="${post.alt}">`;
    link.href = post.link;

    if (stats && post.stats) {
      stat1.innerHTML = post.stats.stat1;
      stat1supporting.innerHTML = post.stats.stat1supporting;
      stat2.innerHTML = post.stats.stat2;
      stat2supporting.innerHTML = post.stats.stat2supporting;
      stat3.innerHTML = post.stats.stat3;
      stat3supporting.innerHTML = post.stats.stat3supporting;

      additionalDescriptionContainer.remove();
    } else {
      additionalDescription.innerHTML = post.description2;

      stats.remove();
    }

    gameCardContainer.append(card);
  });
}

function renderProjectCards() {
  projectCardContainer.innerHTML = "";

  const sortedData = sortData(projectData, chronologicalOrder);

  sortedData.forEach((post, index) => {
    const card = projectCardTemplate.content.cloneNode(true).children[0];

    const role = card.querySelector("[data-role]");
    const title = card.querySelector("[data-title]");
    const description = card.querySelector("[data-description]");
    const image = card.querySelector("[data-img]");
    const link = card.querySelector("[data-link]");

    const additionalDescriptionContainer = card.querySelector(
      ".additional-description-container"
    );
    const additionalDescription = card.querySelector(".additional-description");
    const stats = card.querySelector(".stats-container");
    const stat1 = card.querySelector("[data-stat1]");
    const stat1supporting = card.querySelector("[data-stat1supporting]");
    const stat2 = card.querySelector("[data-stat2]");
    const stat2supporting = card.querySelector("[data-stat2supporting]");
    const stat3 = card.querySelector("[data-stat3]");
    const stat3supporting = card.querySelector("[data-stat3supporting]");

    const roleText = post.role.split("|")[1]?.trim() || post.role;
    const newRoleNumber = String(index + 1).padStart(2, "0");
    role.innerHTML = `${newRoleNumber} | ${roleText}`;

    title.innerHTML = post.title;
    description.textContent = post.description;
    image.innerHTML = '<img src="' + post.image + '" alt="' + post.alt + '">';
    link.href = post.link;

    if (stats && post.stats) {
      stat1.innerHTML = post.stats.stat1;
      stat1supporting.innerHTML = post.stats.stat1supporting;
      stat2.innerHTML = post.stats.stat2;
      stat2supporting.innerHTML = post.stats.stat2supporting;
      stat3.innerHTML = post.stats.stat3;
      stat3supporting.innerHTML = post.stats.stat3supporting;

      additionalDescriptionContainer.remove();
    } else {
      additionalDescription.innerHTML = post.description2;

      stats.remove();
    }

    // For collection cards
    const cardContainer = card.querySelector(".card-container");

    if (post.isCollection && cardContainer) {
      const cardWrapper = card.querySelector(".card-wrapper");
      const ribbon = document.createElement("div");
      ribbon.classList.add("collection-ribbon");
      ribbon.innerText = "COLLECTION";
      cardWrapper.prepend(ribbon);

      additionalDescription.style.color = "rgba(255, 255, 255, 0.5)";
      additionalDescription.style.borderColor = "rgba(255, 255, 255, 0.5)";

      cardContainer.classList.add("collection-card");
    }

    projectCardContainer.append(card);
  });
}

renderGameCards();
renderProjectCards();
