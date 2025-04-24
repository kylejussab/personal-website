document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".window-tab");
    const codeBlocks = document.querySelectorAll(".code-block");
    const progGif = document.querySelector(".output-image img");

    function updateActiveState(index) {
        tabs.forEach(tab => tab.classList.remove("active"));
        codeBlocks.forEach(block => block.classList.remove("active"));

        const gifSources = [
            "assets/give fund/profile.gif",
            "assets/give fund/nonprofit.gif",
            "assets/give fund/confirmation.gif"
        ];

        tabs[index].classList.add("active");
        codeBlocks[index].classList.add("active");

        progGif.src = gifSources[index];
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => updateActiveState(index));
    });

    updateActiveState(0);
});