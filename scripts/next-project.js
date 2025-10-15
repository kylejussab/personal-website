function renderNextCard({ type, currentTitle }) {
  const nextContainer = document.querySelector(".next-case-study"); // Your container
  const chronologicalOrder =
    localStorage.getItem("chronologicalOrder") === "true";

  let dataList = type === "game" ? gameData : projectData;
  let sortedList = sortData(dataList, chronologicalOrder);

  const currentIndex = sortedList.findIndex(
    (item) => item.title === currentTitle
  );

  if (currentIndex === -1) {
    console.error("Current title not found in data!");
    return;
  }

  // Check if it's the last project in the list
  const isLastProject = currentIndex === sortedList.length - 1;

  const endHeading = document.querySelector(".end-case-study-heading");
  const nextProjectHeading = document.querySelector(".next-case-study-heading");
  const nextProjectNavigation = document.querySelector(
    ".case-study-navigation"
  );

  if (isLastProject) {
    nextContainer.style.display = "none";
    endHeading.style.display = "flex";
    nextProjectHeading.remove();
    nextProjectNavigation.remove();
    return;
  } else {
    nextContainer.style.display = "flex";
    endHeading.style.display = "none";
  }

  // Find the next item, or wrap around if at the end
  const nextIndex = (currentIndex + 1) % sortedList.length;
  const nextItem = sortedList[nextIndex];

  // Build dynamic role number
  const roleText = nextItem.role.split("|")[1]?.trim() || nextItem.role;
  const newRoleNumber = String(nextIndex + 1).padStart(2, "0");
  const formattedRole = `${newRoleNumber} | ${roleText}`;

  // Build the innerHTML
  const isCollection = nextItem.isCollection === true;

  let additionalTextHTML = "";

  if (nextItem.stats) {
    additionalTextHTML = `
    <div class="stats-container">
      <div class="stat">
        <p class="stat-number" data-stat1>${nextItem.stats.stat1}</p>
        <p class="stat-text" data-stat1supporting>${nextItem.stats.stat1supporting}</p>
      </div>
      <div class="stat">
        <p class="stat-number" data-stat2>${nextItem.stats.stat2}</p>
        <p class="stat-text" data-stat2supporting>${nextItem.stats.stat2supporting}</p>
      </div>
      <div class="stat">
        <p class="stat-number" data-stat3>${nextItem.stats.stat3}</p>
        <p class="stat-text" data-stat3supporting>${nextItem.stats.stat3supporting}</p>
      </div>
    </div>
  `;
  } else {
    additionalTextHTML = `
    <div class="additional-description-container">
      <p class="additional-description">${nextItem.description2}</p>
    </div>
  `;
  }

  const nextHTML = `
        <a href="${nextItem.link}">
            <div class="card-wrapper">
                <div class="card-container">
                    <div class="card-content">
                        <p class="card-role">${formattedRole}</p>
                        <img src="assets/arrow-right.svg" class="card-arrow">
                        <div class="card-details">
                            <div class="card-image">
                                <img src="${nextItem.image}" alt="${nextItem.alt}" />
                            </div>
                            <div class="card-text">
                                <h2>${nextItem.title}</h2>
                                <p class="card-description">${nextItem.description}</p>

                                ${additionalTextHTML}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    `;

  nextContainer.innerHTML = nextHTML;

  if (isCollection) {
    const nextCardContainer = document.querySelector(".card-container");
    nextCardContainer.classList.add("collection-card");

    // Add the collection ribbon
    const cardWrapper = document.querySelector(".card-wrapper");
    const ribbon = document.createElement("div");
    ribbon.classList.add("collection-ribbon");
    ribbon.innerText = "COLLECTION";
    cardWrapper.prepend(ribbon);
  }
}

let type = document.body.dataset.type;
let currentTitle = document.body.dataset.project;

renderNextCard({ type, currentTitle });
