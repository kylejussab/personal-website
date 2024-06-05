let projectData = [
    {
        "techStack": "HTML, CSS",
        "image": "assets/PixelPulse.png",
        "alt": "The homepage of the PixelPulse application",
        "title": "PixelPulse",
        "subtitle": "View and Share Coding Sketches - September 2023",
        "description": "A 'social media' platform for UoL Computer Science students to share their coding projects. Used for inspiration and revision. Built in a team of 4 using Agile methodologies.",
        "link": "https://kylejussab.com/pixelpulse"
    },
    {
        "techStack": "HTML, CSS, SQLite3",
        "image": "assets/Microblogger.png",
        "alt": "The homepage of my microblogger application",
        "title": "Microblogger",
        "subtitle": "A Gaming Microblog - September 2023",
        "description": "A dynamic website for my gaming blogs. Used SQLite3 to store and retrieve relevant information. Improved the styling with vanilla CSS.",
        "link": "https://kylejussab.com/microblogger"
    },
    {
        "techStack": "JUCE, C++",
        "image": "assets/DJ Application.png",
        "alt": "The GUI of my DJ application",
        "title": "DJ Application",
        "subtitle": "Built with the JUCE Framework - March 2023",
        "description": "Utilized OOP techniques throughout. Improved the application by adding data persistence and spinning records.",
        "link": "https://kylejussab.com/djapplication"
    },
    {
        "techStack": "p5.js, JavaScript",
        "image": "assets/Music Visualizer.png",
        "alt": "A visualizer from the music visualizer application",
        "title": "Music Visualizer",
        "subtitle": "Built with the p5.js Framework - September 2022",
        "description": "Created a range of creative audio visualizations, including one that utilizes the built in camera. All visualizations react to the music being played.",
        "link": "https://kylejussab.com/musicvisualizer"
    }
]

const projectCardTemplate = document.querySelector("[data-project-template]");
const projectCardContainer = document.querySelector("[data-project-cards-container]");

posts = projectData.map(post => {
    const card = projectCardTemplate.content.cloneNode(true).children[0];

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

    projectCardContainer.append(card);
});