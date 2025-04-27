const orderToggle = document.getElementById("orderToggle");
const toggleLabel = document.getElementById("toggleLabel");

const toggleContent = document.getElementById("switch-content");

let chronologicalOrder = localStorage.getItem("chronologicalOrder") === "true";

if(orderToggle) {
    orderToggle.checked = chronologicalOrder;
}

if(toggleLabel) {
    toggleLabel.textContent = chronologicalOrder ? "ON" : "OFF";
}

// Hide the toggle in the beginning so it doesn't show it changes on load
document.addEventListener("DOMContentLoaded", () => {
    if (toggleContent) {
        toggleContent.classList.remove("preload-toggle");
    }
});

if(orderToggle) {
    orderToggle.addEventListener("change", () => {
        chronologicalOrder = orderToggle.checked;
        localStorage.setItem("chronologicalOrder", chronologicalOrder);

        if(toggleLabel) {
            toggleLabel.textContent = orderToggle.checked ? "ON" : "OFF";
        }

        renderGameCards();
        renderProjectCards();
        selected();
    });
}

function sortData(data, isChronological) {
    return data.slice().sort((a, b) => {
        if (isChronological) {
            return (a.dateOrder ?? 0) - (b.dateOrder ?? 0);
        } 
        else {
            return (a.customOrder ?? 0) - (b.customOrder ?? 0);
        }
    });
}