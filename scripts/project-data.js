let projectData = [
    // {
    //     "techStack": "React Native, Supabase",
    //     "image": "assets/Give Fund.png",
    //     "alt": "A title screen showing the text Give Fund",
    //     "title": "Give Fund",
    //     "subtitle": "Built for the Snap Engineering Academy - August 2024",
    //     "description": "A fundraising feature to help foster youth non-profits raise funds from Snap users, built off a mock up of the Snapchat App. Built in a cross-functional team of 7 and presented to over 300 Snap executives.",
    //     "link": "https://kylejussab.com/givefund"
    // },
    {
        "techStack": "Python",
        "image": "assets/The Last of Us Part 2.png",
        "alt": "The promotional image for The Last of Us Part 2. I do not claim to own this image.",
        "title": "The Last of Us Part 2",
        "subtitle": "Just how good was The Last of Us Part 2? - January 2024",
        "description": "An exploratory data analysis evaluating the 'success' of The Last of Us Part 2 using various metrics such as sales, reviews, and comparisons with similar games.",
        "link": "https://kylejussab.com/tlou2analysis"
    },
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
        "techStack": "JUCE, C++",
        "image": "assets/DJ Application.png",
        "alt": "The GUI of my DJ application",
        "title": "DJ Application",
        "subtitle": "Built with the JUCE Framework - March 2023",
        "description": "Utilized OOP techniques throughout. Improved the application by adding data persistence and spinning records.",
        "link": "https://kylejussab.com/djapplication"
    },
    // {
    //     "techStack": "p5.js, JavaScript",
    //     "image": "assets/Music Visualizer.png",
    //     "alt": "A visualizer from the music visualizer application",
    //     "title": "Music Visualizer",
    //     "subtitle": "Built with the p5.js Framework - September 2022",
    //     "description": "Created a range of creative audio visualizations, including one that utilizes the built in camera. All visualizations react to the music being played.",
    //     "link": "https://kylejussab.com/musicvisualizer"
    // }
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