let gameData = [
    {
        "icon": "assets/unity.png",
        "icon2": "assets/c-sharp.png",
        "image": "assets/The Architect Hestia.png",
        "alt": "C Sharp code",
        "title": "The Architect Hestia",
        "subtitle": "Third Person Shooter / Survival / Adventure - Coming soon",
        "description": "Elian, a Rusthavener, is tired of the opression forced on them by Auravale. Little does he know, with each death he switches sides.",
        "link": "thearchitecthestia.html"
    },
    {
        "icon": "assets/unity.png",
        "icon2": "assets/c-sharp.png",
        "image": "assets/Project Phoebe.png",
        "alt": "C Sharp code",
        "title": "Project Phoebe",
        "subtitle": "Third Person Platformer / Puzzler - April 2023",
        "description": "Master your skills getting through rooms by competing in 5 different modes, all of which challenge you in a different and unique way.",
        "link": "projectphoebe.html"
    },
    {
        "icon": "assets/p5js.png",
        "icon2": "assets/js.png",
        "image": "assets/itp1project.png",
        "alt": "2d platformer showing character facing right, looking at collectable",
        "title": "ITP1 Project",
        "subtitle": "2D Platformer - September 2021",
        "description": "The game project I submitted for University of London in their Introduction to Programming 1 module.",
        "link": "itp1project.html"
    }
]

const gameCardTemplate = document.querySelector("[data-game-template]");
const gameCardContainer = document.querySelector("[data-game-cards-container]");

posts = gameData.map(post => {
    const card = gameCardTemplate.content.cloneNode(true).children[0]
    
    const title = card.querySelector("[data-title]")
    const subtitle = card.querySelector("[data-subtitle]")
    const description = card.querySelector("[data-description]")
    const img = card.querySelector("[data-img]")
    const link = card.querySelector("[data-link]")
    const icon = card.querySelector("[data-icon]")
    const icon2 = card.querySelector("[data-icon2]")

    const image = '<img src="' + post.image + '" alt="' + post.alt + '">';
    const iconImage = '<img src="' + post.icon + '" class="card-icon">';
    const icon2Image = '<img src="' + post.icon2 + '" class="card-icon">';
    const linkElement = '<div class="card-button-container"><a href="' + post.link + '" class="card-button"><p>See more</p><img src="assets/right-arrow.png"></a></div>';

    title.textContent = post.title
    subtitle.textContent = post.subtitle
    description.textContent = post.description
    img.innerHTML = image;
    icon.innerHTML = iconImage;
    icon2.innerHTML = icon2Image;
    link.innerHTML = linkElement;

    gameCardContainer.append(card);
})