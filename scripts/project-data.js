let projectData = [
    {
        "icon": "assets/c++.png",
        "image": "assets/DJ Application.png",
        "alt": "The GUI of my DJ application",
        "title": "DJ Application",
        "subtitle": "Built with the JUCE framework",
        "description": "A description on the DJ application made for OOP",
        "link": "djapplication.html"
    },
    {
        "icon": "assets/blog.png",
        "image": "assets/Blog8.png",
        "alt": "Multiple hands pointing at one lady",
        "title": "What is it like to experience social anxiety?",
        "subtitle": "16th May 2023",
        "description": "How am I supposed to act normal when it’s pretty obvious that they’re talking about me, laughing at me. Why else would they be whispering to each other?",
        "link": "blog8.html"
    },
    {
        "icon": "assets/blog.png",
        "image": "assets/Blog7.png",
        "alt": "A desk with a laptop, coffee cup and notebook",
        "title": "Being a better coder",
        "subtitle": "17th February 2023",
        "description": "You shouldn't want to improve to be the best, you should want to improve to be better.",
        "link": "blog7.html"
    },
    {
        "icon": "assets/blog.png",
        "image": "assets/Blog6.png",
        "alt": "Man staring at computer",
        "title": "Making the most out of your time with UoL",
        "subtitle": "16th December 2022",
        "description": "Are you wondering how to make the most of your time at the University of London?",
        "link": "blog6.html"
    },
    {
        "icon": "assets/blog.png",
        "image": "assets/Blog5.png",
        "alt": "Kids cheering infront of computer",
        "title": "Can video games help with your mental health?",
        "subtitle": "7th October 2022",
        "description": "When prompted with the question of how I deal with it, I say 'play a video game', but is there something behind it?",
        "link": "blog5.html"
    },
    {
        "icon": "assets/blog.png",
        "image": "assets/Blog4.png",
        "alt": "Go up and never stop",
        "title": "Reflecting on my first year of university",
        "subtitle": "27th June 2022",
        "description": "Reflection is a great tool, not only to see what can be improved, but also to celebrate what went well.",
        "link": "blog4.html"
    },
    {
        "icon": "assets/blog.png",
        "image": "assets/Blog3.png",
        "alt": "Reaching out hand",
        "title": "Loneliness and finding comfort in things I enjoy",
        "subtitle": "29th April 2022",
        "description": "Autophobia: the fear of being alone. My biggest fear, and what gives me hope.",
        "link": "blog3.html"
    },
    {
        "icon": "assets/blog.png",
        "image": "assets/Blog2.png",
        "alt": "Multiple words such as hopeless, inferior and worthless",
        "title": "Overcoming imposter syndrome",
        "subtitle": "20th April 2022",
        "description": "I've been overwhelmed by just how good other students are, and that maybe I shouldn't be here, or even be in the same conversation as these students.",
        "link": "blog2.html"
    },
    {
        "icon": "assets/blog.png",
        "image": "assets/Blog1.png",
        "alt": "A computer with laptop, tablet and keyboard",
        "title": "Creativity in computing",
        "subtitle": "11th February 2022",
        "description": "No one likes buggy code, but what if not all bugs are bad?",
        "link": "blog1.html"
    }
]

const projectCardTemplate = document.querySelector("[data-project-template]");
const projectCardContainer = document.querySelector("[data-project-cards-container]");

posts = projectData.map(post => {
    const card = projectCardTemplate.content.cloneNode(true).children[0]
    
    const title = card.querySelector("[data-title]")
    const subtitle = card.querySelector("[data-subtitle]")
    const description = card.querySelector("[data-description]")
    const img = card.querySelector("[data-img]")
    const link = card.querySelector("[data-link]")
    const icon = card.querySelector("[data-icon]")

    const image = '<img src="' + post.image + '" alt="' + post.alt + '">';
    const iconImage = '<img src="' + post.icon + '" class="card-icon">';
    const linkElement = '<div class="card-button-container"><a href="' + post.link + '" class="card-button"><p>See more</p><img src="assets/right-arrow.png"></a></div>';

    title.textContent = post.title
    subtitle.textContent = post.subtitle
    description.textContent = post.description
    img.innerHTML = image;
    icon.innerHTML = iconImage;
    link.innerHTML = linkElement;

    projectCardContainer.append(card);
})