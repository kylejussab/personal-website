let storyData = [
    {
        "icon": "assets/open-book.png",
        "image": "assets/Kayleigh (Head in Knees).png",
        "alt": "Kayleigh head in knees",
        "title": "Kaleidoscope - Kayleigh",
        "subtitle": "2020 - Present",
        "description": "Kayleigh; an eager but mindful individual with the desire to speak up, but lacks the courage to do so, navigates the world of Kaleidoscope cautiously but significantly. Her actions, unbeknownst to her, have repercussions to all those around her.",
        "link": "kaleidoscope.html"
    }
]

const storyCardTemplate = document.querySelector("[data-story-template]");
const storyCardContainer = document.querySelector("[data-story-cards-container]");

posts = storyData.map(post => {
    const card = storyCardTemplate.content.cloneNode(true).children[0]
    
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

    storyCardContainer.append(card);
})