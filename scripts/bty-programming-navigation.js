document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".window-tab");
    const codeBlocks = document.querySelectorAll(".code-block");
    const progGif = document.querySelector(".output-image img");
    const descriptionTexts = document.querySelectorAll(".description-text");

    function updateActiveState(index) {
        tabs.forEach(tab => tab.classList.remove("active"));
        codeBlocks.forEach(block => block.classList.remove("active"));
        descriptionTexts.forEach(block => block.classList.remove("active"));

        const gifSources = [
            "assets/between the years/attack.gif",
            "assets/between the years/inventory.gif",
            "assets/between the years/upgrade.gif"
        ];

        tabs[index].classList.add("active");
        codeBlocks[index].classList.add("active");
        descriptionTexts[index].classList.add("active");

        progGif.src = gifSources[index];
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => updateActiveState(index));
    });

    updateActiveState(0);
});