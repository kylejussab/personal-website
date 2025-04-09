let projectData = [
    {
        "role": "01 | FRONTEND DEVELOPER",
        "image": "assets/Give Fund.png",
        "alt": "A title screen showing the text Give Fund",
        "title": "Give Fund",
        "description": "A fundraising feature to help foster youth non-profits raise funds from Snap users, built off a mock up of the Snapchat App. Built in a cross-functional team of 7 and presented to over 300 Snap executives.",
        "date": "August 2024",
        "tech1": "React Native",
        "tech2": "Supabase",
        "discipline1": "Mobile Dev",
        "discipline2": "UI / UX",
        "discipline3": "Product Design",
        "link": "https://kylejussab.com/givefund"
    },
    {
        "role": "02 | RESEARCHER",
        "image": "assets/The Last of Us Part 2.png",
        "alt": "The promotional image for The Last of Us Part 2. I do not claim to own this image.",
        "title": "Analyzing The Last of Us Part 2",
        "description": "An exploratory data analysis evaluating the 'success' of The Last of Us Part 2 using various metrics such as sales, reviews, and comparisons with similar games.",
        "date": "January 2024",
        "tech1": "Python",
        "tech2": "NLTK",
        "discipline1": "Data Science",
        "discipline2": "Engineering",
        "discipline3": "Automation",
        "link": "https://kylejussab.com/tlou2analysis"
    },
    {
        "role": "03 | FRONTEND DEVELOPER",
        "image": "assets/PixelPulse.png",
        "alt": "The homepage of the PixelPulse application",
        "title": "PixelPulse",
        "description": "A 'social media' platform for UoL Computer Science students to share their coding projects. Used for inspiration and revision. Built in a team of 4 using Agile methodologies.",
        "date": "September 2023",
        "tech1": "HTML / CSS",
        "tech2": "JavaScript",
        "discipline1": "Web Dev",
        "discipline2": "UI / UX",
        "discipline3": "Research",
        "link": "https://kylejussab.com/pixelpulse"
    },
    {
        "role": "04 | APPLICATION DEVELOPER",
        "image": "assets/DJ Application.png",
        "alt": "The GUI of my DJ application",
        "title": "DJ Application",
        "description": "Utilized OOP techniques throughout. Improved the application by adding data persistence and spinning records.",
        "date": "March 2023",
        "tech1": "JUCE",
        "tech2": "C++",
        "discipline1": "DSP",
        "discipline2": "UI / UX",
        "discipline3": "Testing",
        "link": "https://kylejussab.com/djapplication"
    }
]

const projectCardTemplate = document.querySelector("[data-project-template]");
const projectCardContainer = document.querySelector("[data-project-cards-container]");

posts = projectData.map(post => {
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

    role.innerHTML = post.role;
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

    projectCardContainer.append(card);
});