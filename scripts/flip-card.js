const cards = document.querySelectorAll('.flip-card-inner');

cards.forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });
});

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const previousButton = document.querySelector('.carousel-button-left');

const slideWidth = slides[0].getBoundingClientRect().width;

//Arrange slides
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const hideShowArrows = (slides, previousButton, nextButton, targetIndex) => {
    if(targetIndex === 0){
        previousButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
    else if(targetIndex === slides.length - 1){
        previousButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }
    else {
        previousButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

//Click left
previousButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const previousSlide = currentSlide.previousElementSibling;
    const previousIndex = slides.findIndex(slide => slide === previousSlide);
    
    moveToSlide(track, currentSlide, previousSlide);
    hideShowArrows(slides, previousButton, nextButton, previousIndex);
});

//Click right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    
    moveToSlide(track, currentSlide, nextSlide);
    hideShowArrows(slides, previousButton, nextButton, nextIndex);
});