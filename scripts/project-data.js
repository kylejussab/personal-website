let projectData = [
    {
        "icon": "assets/html.png",
        "icon2": "assets/css.png",
        "image": "assets/PixelPulse.png",
        "alt": "The homepage of the PixelPulse application",
        "title": "PixelPulse",
        "subtitle": "View and Share Coding Sketches - September 2023",
        "description": "A 'social media' platform for UoL Computer Science students to share their coding projects. Used for inspiration and revision. Built in a team of 4 using Agile methodologies.\n\nContributions:\n- Crafted an appealing and user-friendly interface achieving an 82.5 SUS score.\n- Created an interactive prototype for iterative and user-centered design.\n- Conducted market research, analyzing trends and user expectations.",
        "link": "https://kylejussab.com/pixelpulse",
        "recommend": "yes"
    },
    {
        "icon": "assets/html.png",
        "icon2": "assets/css.png",
        "image": "assets/Microblogger.png",
        "alt": "The homepage of my microblogger application",
        "title": "Microblogger",
        "subtitle": "A Gaming Microblog - September 2023",
        "description": "A dynamic website for my gaming blogs. Used SQLite3 to store and retrieve relevant information. Improved the styling with vanilla CSS.\n\nContributions:\n- Crafted front-end components using HTML/CSS focusing on layout, styling, and responsiveness.\n- Designed and implemented the back-end with SQLite3, handling database schema and user authentication.\n- Integrated interactive features like post liking and comments.",
        "link": "https://kylejussab.com/microblogger"
    },
    {
        "icon": "assets/c++.png",
        "icon2": "assets/apple.png",
        "image": "assets/DJ Application.png",
        "alt": "The GUI of my DJ application",
        "title": "DJ Application",
        "subtitle": "Built with the JUCE Framework - March 2023",
        "description": "Utilized OOP techniques throughout. Improved the application by adding data persistence and spinning records.\n\nContributions:\n- Utilized C++ to build core logic, incorporating audio manipulation tools like high/low pass filters and playback controls.\n- Implemented data persistence for efficient song library management.\n- Conducted extensive testing to ensure stability and functionality, rigorously examining features and performance.",
        "link": "https://kylejussab.com/djapplication",
        "recommend": "yes"
    },
    {
        "icon": "assets/p5js.png",
        "icon2": "assets/js.png",
        "image": "assets/Music Visualizer.png",
        "alt": "A visualizer from the music visualizer application",
        "title": "Music Visualizer",
        "subtitle": "Built with the p5.js Framework - September 2022",
        "description": "Created a range of creative audio visualizations, including one that utilizes the built in camera. All visualizations react to the music being played.\n\nContributions:\n- Integrated audio features enabling track looping, scrubbing, and selection for enhanced user engagement.\n- Empowered users with customization options for visuals.\n- Strategically planned project timelines via Gantt Chart and conducted thorough usability testing with end users.",
        "link": "https://kylejussab.com/musicvisualizer"
    }
]

const projectCardTemplate = document.querySelector("[data-project-template]");
const projectCardContainer = document.querySelector("[data-project-cards-container]");

posts = projectData.map(post => {
    const card = projectCardTemplate.content.cloneNode(true).children[0]

    const recommendFront = card.querySelector("[data-recommend-front]")
    const recommendBack = card.querySelector("[data-recommend-back]")

    if(post.recommend == "yes"){
        recommendFront.innerHTML = '<span class="ribbon-front"><p class="ribbon-text">Kyle&apos;s recommendation</p></span>';
        recommendBack.innerHTML = '<span class="ribbon-back"></span>';
    }

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
    description.innerHTML = post.description.replace(/\n/g, '<br>');
    img.innerHTML = image;
    icon.innerHTML = iconImage;
    icon2.innerHTML = icon2Image;
    link.innerHTML = linkElement;

    projectCardContainer.append(card);
})

