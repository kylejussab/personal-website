const bttBtn = document.querySelector(".progress");
const bttProgress = document.querySelector(".progress-value");

let scrollPercentage = () => {
    let scrollProgress = document.getElementsByClassName("progress")[0];

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if(pos > 100){
        bttBtn.classList.remove("hide-btt-btn");
        bttProgress.classList.remove("hide-btt-btn");
        bttBtn.classList.remove("hide-on-start");
    }
    else{
        bttBtn.classList.add("hide-btt-btn");
        bttProgress.classList.add("hide-btt-btn");
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#800080, #FFC0CB, #EE82EE, #800080 ${scrollValue}%, var(--card-hover-color) ${scrollValue}%)`;
}

window.onscroll = scrollPercentage;