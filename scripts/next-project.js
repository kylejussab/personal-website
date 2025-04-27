function renderNextCard({ type, currentTitle }) {
    const nextContainer = document.querySelector('.next-case-study'); // Your container
    const chronologicalOrder = localStorage.getItem("chronologicalOrder") === "true";

    let dataList = type === "game" ? gameData : projectData;
    let sortedList = sortData(dataList, chronologicalOrder);

    const currentIndex = sortedList.findIndex(item => item.title === currentTitle);

    if (currentIndex === -1) {
        console.error("Current title not found in data!");
        return;
    }

    // Check if it's the last project in the list
    const isLastProject = currentIndex === sortedList.length - 1;

    const endHeading = document.querySelector('.end-case-study-heading');
    const nextProjectHeading = document.querySelector('.next-case-study-heading');
    const nextProjectNavigation = document.querySelector('.case-study-navigation');


    if (isLastProject) {
        nextContainer.style.display = 'none';
        endHeading.style.display = 'flex';
        nextProjectHeading.remove();
        nextProjectNavigation.remove();
        return;
    } 
    else {
        nextContainer.style.display = 'flex';
        endHeading.style.display = 'none';
    }

    // Find the next item, or wrap around if at the end
    const nextIndex = (currentIndex + 1) % sortedList.length;
    const nextItem = sortedList[nextIndex];

    // Build dynamic role number
    const roleText = nextItem.role.split("|")[1]?.trim() || nextItem.role;
    const newRoleNumber = String(nextIndex + 1).padStart(2, "0");
    const formattedRole = `${newRoleNumber} | ${roleText}`;

    // Build the innerHTML
    const isGame = type === "game";
    const isCollection = nextItem.isCollection === true;

    let disciplinesHTML = "";

    if (isGame) {
        disciplinesHTML = `
            <div>
                <p class="meta-heading">Genre</p>
                <p class="meta-text">${nextItem.genre1}</p>
                <p class="meta-text">${nextItem.genre2}</p>
                <p class="meta-text">${nextItem.genre3}</p>
            </div>
        `;
    } 
    else {
        disciplinesHTML = `
            <div>
                <p class="meta-heading">Disciplines</p>
                <p class="meta-text">${nextItem.discipline1}</p>
                <p class="meta-text">${nextItem.discipline2}</p>
                <p class="meta-text">${nextItem.discipline3}</p>
            </div>
        `;
    }
    console.log(nextItem.link)

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
                                <div class="card-meta">
                                    <div>
                                        <p class="meta-heading">Date</p>
                                        <p class="meta-text">${isGame ? nextItem.release : nextItem.date}</p>
                                    </div>
                                    ${disciplinesHTML}
                                    <div>
                                        <p class="meta-heading">Tech</p>
                                        <p class="meta-text">${nextItem.tech1}</p>
                                        <p class="meta-text">${nextItem.tech2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    `;

    nextContainer.innerHTML = nextHTML;

    if(isCollection){   
        const nextCardContainer = document.querySelector('.card-container');     
        nextCardContainer.classList.add("collection-card");

        // Add the collection ribbon
        const cardWrapper = document.querySelector(".card-wrapper");
        const ribbon = document.createElement('div');
        ribbon.classList.add('collection-ribbon');
        ribbon.innerText = 'COLLECTION';
        cardWrapper.prepend(ribbon);

        // Update the meta section for the collection card
        const meta = nextCardContainer.querySelector('.card-meta');
        meta.classList.add("card-meta-collection");
        meta.innerHTML = "";

        const collectionProject = sortedList[currentIndex + 1];
        collectionProject.projects.forEach((project) => {
            const container = document.createElement("div");

            const heading = document.createElement("p");
            heading.className = "meta-heading";
            heading.textContent = project.name;

            const text = document.createElement("p");
            text.className = "meta-text";
            text.textContent = project.description;

            container.appendChild(heading);
            container.appendChild(text);
            meta.appendChild(container);
        });

    }
}

let type = document.body.dataset.type;
let currentTitle = document.body.dataset.project;

renderNextCard({ type, currentTitle });