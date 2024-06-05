let gameData = [
    {
        "techStack": "Unity, C#",
        "image": "assets/The Architect Hestia.png",
        "alt": "C Sharp code",
        "title": "The Architect Hestia",
        "subtitle": "Third Person Shooter / Survival / Adventure - Coming soon",
        "description": "Elian, a Rusthavener, is tired of the opression forced on him by Auravale. Little does he know, with each death he switches sides.",
        "link": "https://kylejussab.com/thearchitecthestia"
    },
    {
        "techStack": "Unity, C#",
        "image": "assets/Project Phoebe.png",
        "alt": "C Sharp code",
        "title": "Project Phoebe",
        "subtitle": "Third Person Platformer / Puzzler - April 2023",
        "description": "Master your skills getting through rooms by competing in 5 different modes, all of which challenge you in a different and unique way.",
        "link": "https://kylejussab.com/projectphoebe"
    },
    {
        "techStack": "p5.js, JavaScript",
        "image": "assets/itp1project.png",
        "alt": "2d platformer showing character facing right, looking at collectable",
        "title": "ITP1 Project",
        "subtitle": "2D Platformer - September 2021",
        "description": "The game project I submitted for University of London in their Introduction to Programming 1 module.",
        "link": "https://kylejussab.com/itp1project"
    }
]

const gameCardTemplate = document.querySelector("[data-game-template]");
const gameCardContainer = document.querySelector("[data-game-cards-container]");

posts = gameData.map(post => {
    const card = gameCardTemplate.content.cloneNode(true).children[0];

    const title = card.querySelector("[data-title]");
    const subtitle = card.querySelector("[data-subtitle]");
    const description = card.querySelector("[data-description]");
    const image = card.querySelector("[data-img]");
    const link = card.querySelector("[data-link]");

    title.innerHTML = post.title + ' <span>' + post.techStack + '</span>';
    subtitle.textContent = post.subtitle;
    description.textContent = post.description;
    image.innerHTML = '<img src="' + post.image + '" alt="' + post.alt + '">';
    link.href = post.link;

    gameCardContainer.append(card);
});