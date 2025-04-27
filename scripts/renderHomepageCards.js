const gameCardTemplate = document.querySelector("[data-game-template]");
const gameCardContainer = document.querySelector("[data-game-cards-container]");

const projectCardTemplate = document.querySelector("[data-project-template]");
const projectCardContainer = document.querySelector("[data-project-cards-container]");

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
        const release = card.querySelector("[data-release]");
        const genre1 = card.querySelector("[data-genre1]");
        const genre2 = card.querySelector("[data-genre2]");
        const genre3 = card.querySelector("[data-genre3]");
        const tech1 = card.querySelector("[data-tech1]");
        const tech2 = card.querySelector("[data-tech2]");

        const roleText = post.role.split("|")[1]?.trim() || post.role;
        const newRoleNumber = String(index + 1).padStart(2, "0");
        role.innerHTML = `${newRoleNumber} | ${roleText}`;
  
        title.innerHTML = post.title;
        description.textContent = post.description;
        image.innerHTML = `<img src="${post.image}" alt="${post.alt}">`;
        link.href = post.link;
        release.innerHTML = post.release;
        genre1.innerHTML = post.genre1;
        genre2.innerHTML = post.genre2;
        genre3.innerHTML = post.genre3;
        tech1.innerHTML = post.tech1;
        tech2.innerHTML = post.tech2;

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
        const date = card.querySelector("[data-date]");
        const discipline1 = card.querySelector("[data-discipline1]");
        const discipline2 = card.querySelector("[data-discipline2]");
        const discipline3 = card.querySelector("[data-discipline3]");
        const tech1 = card.querySelector("[data-tech1]");
        const tech2 = card.querySelector("[data-tech2]");

        const roleText = post.role.split("|")[1]?.trim() || post.role;
        const newRoleNumber = String(index + 1).padStart(2, "0");
        role.innerHTML = `${newRoleNumber} | ${roleText}`;

        title.innerHTML = post.title;
        description.textContent = post.description;
        image.innerHTML = '<img src="' + post.image + '" alt="' + post.alt + '">';
        link.href = post.link;
        date.innerHTML = post.date;
        discipline1.innerHTML = post.discipline1;
        discipline2.innerHTML = post.discipline2;
        discipline3.innerHTML = post.discipline3;
        tech1.innerHTML = post.tech1;
        tech2.innerHTML = post.tech2;

        // For collection cards
        const cardContainer = card.querySelector(".card-container");
        
        if(post.isCollection && cardContainer) {
            const cardWrapper = card.querySelector(".card-wrapper");
            const ribbon = document.createElement('div');
            ribbon.classList.add('collection-ribbon');
            ribbon.innerText = 'COLLECTION';
            cardWrapper.prepend(ribbon);

            const meta = card.querySelector('.card-meta');
            meta.classList.add("card-meta-collection");
            meta.innerHTML = "";

            post.projects.forEach((project) => {
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

            cardContainer.classList.add("collection-card");
        }

        projectCardContainer.append(card);
    });
}

renderGameCards();
renderProjectCards();