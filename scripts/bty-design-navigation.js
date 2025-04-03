document.addEventListener("DOMContentLoaded", () => {
    const designBlocks = document.querySelectorAll(".design-block");
    const contentParagraphs = document.querySelectorAll(".design-description p");
    const designIndicators = document.querySelectorAll(".design-indicator");
    const designGif = document.querySelector(".design-gif img");

    const gifSources = [
        "assets/familiar.gif",
        "assets/in-game.gif",
        "assets/world-interactions.gif",
        "assets/accessibility.gif",
        "assets/cutscenes.gif",
        "assets/tutorials.gif"
    ];

    function updateActiveState(index) {
        designBlocks.forEach(b => b.classList.remove("active"));
        designBlocks[index].classList.add("active");

        designIndicators.forEach(indicator => indicator.classList.remove("active"));
        designIndicators[index].classList.add("active");

        contentParagraphs.forEach(p => p.style.display = "none");
        contentParagraphs[index].style.display = "block";

        designGif.src = gifSources[index];
    }

    designBlocks.forEach((block, index) => {
        block.addEventListener("click", () => updateActiveState(index));
    });

    designIndicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => updateActiveState(index));
    });

    updateActiveState(0);
});