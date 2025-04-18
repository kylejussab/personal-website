let gameData = [
    // {
    //     "role": "00 | GAMEPLAY PROGRAMMER & GAME DESIGNER",
    //     "image": "assets/Absolute Minima.png",
    //     "alt": "Linea being held on puppet strings.",
    //     "title": "Absolute Minima",
    //     "description": "This minimalist roguelike follows Linea, a hand-drawn character, as she attempts to escape the sketchbook world her creator has trapped her in.",
    //     "release": "Coming soon",
    //     "genre1": "Roguelike",
    //     "genre2": "Dungeon Crawler",
    //     "genre3": "Adventure",
    //     "tech1": "Unity",
    //     "tech2": "C#",
    //     "link": "#"
    // },
    {
        "role": "01 | GAMEPLAY PROGRAMMER & TEAM LEAD",
        "image": "assets/CPU City.jpg",
        "alt": "Rhi standing in CPU City staring in the distance",
        "title": "CPU City",
        "description": "Guide Rhi Vyse through a vibrant city as you master Von Neumann Architecture and thwart the Pro-Krastor Nation's plans. Built in a team of 4.",
        "release": "August 2024",
        "genre1": "Third Person",
        "genre2": "Adventure",
        "genre3": "Education",
        "tech1": "Unity",
        "tech2": "C#",
        "link": "https://kylejussab.com/cpucity"
    },
    {
        "role": "02 | GAMEPLAY PROGRAMMER & GAME DESIGNER",
        "image": "assets/The Last of Us Between The Years Page Cover.png",
        "alt": "Joel looking in the distance",
        "title": "The Last of Us: Between The Years",
        "description": "This Gameboy game explores Joel's character and grief during the 20 years between Sarah's death and the main events of the first game.",
        "release": "June 2024",
        "genre1": "Side Scroller",
        "genre2": "Action",
        "genre3": "Adventure",
        "tech1": "GB Studio",
        "tech2": "GBVM",
        "link": "https://kylejussab.com/tloubty"
    },
    // {
    //     "techStack": "Unity, C#",
    //     "image": "assets/tah2.png",
    //     "alt": "Elian crouched over",
    //     "title": "The Architect Hestia",
    //     "subtitle": "Third Person Shooter / Survival / Adventure - Coming soon",
    //     "description": "Elian, a Rusthavener, is tired of the opression forced on him by Auravale. Little does he know, with each death he switches sides.",
    //     "link": "https://kylejussab.com/thearchitecthestia"
    // },
    {
        "role": "03 | GAMEPLAY PROGRAMMER & GAME DESIGNER",
        "image": "assets/pp2.png",
        "alt": "A ball on a tower",
        "title": "Project Phoebe",
        "description": "Master your skills getting through rooms by competing in 5 different modes, all of which challenge you in a different and unique way.",
        "release": "April 2023",
        "genre1": "Third Person",
        "genre2": "Platformer",
        "genre3": "Puzzler",
        "tech1": "Unity",
        "tech2": "C#",
        "link": "https://kylejussab.com/projectphoebe"
    }
]

const gameCardTemplate = document.querySelector("[data-game-template]");
const gameCardContainer = document.querySelector("[data-game-cards-container]");

posts = gameData.map(post => {
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

    title.innerHTML = post.title;
    role.innerHTML = post.role;
    description.textContent = post.description;
    image.innerHTML = '<img src="' + post.image + '" alt="' + post.alt + '">';
    link.href = post.link;
    release.innerHTML = post.release;
    genre1.innerHTML = post.genre1;
    genre2.innerHTML = post.genre2;
    genre3.innerHTML = post.genre3;
    tech1.innerHTML = post.tech1;
    tech2.innerHTML = post.tech2;

    gameCardContainer.append(card);
});