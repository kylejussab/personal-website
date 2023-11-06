let projectData = [
    {
        "icon": "assets/html.png",
        "icon2": "assets/css.png",
        "image": "assets/PixelPulse.png",
        "alt": "The homepage of the PixelPulse application",
        "title": "PixelPulse",
        "subtitle": "Built with the SQLite3 - 2023",
        "description": "A description on the PixelPulse made for ASP",
        "link": "pixelpulse.html"
    },
    {
        "icon": "assets/html.png",
        "icon2": "assets/css.png",
        "image": "assets/Microblogger.png",
        "alt": "The homepage of my microblogger application",
        "title": "Microblogger",
        "subtitle": "Built with the SQLite3 - 2023",
        "description": "A description on the Microblogger made for DNW",
        "link": "microblogger.html"
    },
    {
        "icon": "assets/c++.png",
        "icon2": "assets/apple.png",
        "image": "assets/DJ Application.png",
        "alt": "The GUI of my DJ application",
        "title": "DJ Application",
        "subtitle": "Built with the JUCE framework - 2022",
        "description": "A description on the DJ application made for OOP",
        "link": "djapplication.html"
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

    projectCardContainer.append(card);
})