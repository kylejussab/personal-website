let gameElements = document.getElementsByClassName('games-content');
let storyElements = document.getElementsByClassName('stories-content');
let projectElements = document.getElementsByClassName('projects-content');

let aboutContent = document.getElementsByClassName('about-content');

function selected(){
    if(document.getElementById('games').checked){
        for(let i = 0; i < gameElements.length; i++){
            gameElements[i].style.display = 'flex';
        }

        for(let i = 0; i < projectElements.length; i++){
            projectElements[i].style.display = 'none';
        }

        for(let i = 0; i < aboutContent.length; i++){
            aboutContent[i].style.display = 'none';
        }
    }
    else if(document.getElementById('about').checked){
        for(let i = 0; i < gameElements.length; i++){
            gameElements[i].style.display = 'none';
        }

        for(let i = 0; i < projectElements.length; i++){
            projectElements[i].style.display = 'none';
        }

        for(let i = 0; i < aboutContent.length; i++){
            aboutContent[i].style.display = 'flex';
        }
    }
    else if(document.getElementById('projects').checked){
        for(let i = 0; i < gameElements.length; i++){
            gameElements[i].style.display = 'none';
        }

        for(let i = 0; i < projectElements.length; i++){
            projectElements[i].style.display = 'flex';
        }

        for(let i = 0; i < aboutContent.length; i++){
            aboutContent[i].style.display = 'none';
        }
    }
}