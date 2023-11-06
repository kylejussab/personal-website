let gameElements = document.getElementsByClassName('games-content');
let storyElements = document.getElementsByClassName('stories-content');
let projectElements = document.getElementsByClassName('projects-content');

function selected(){
    if(document.getElementById('games').checked){
        for(let i = 0; i < gameElements.length; i++){
            gameElements[i].style.display = 'flex';
        }

        for(let i = 0; i < storyElements.length; i++){
            storyElements[i].style.display = 'none';
        }

        for(let i = 0; i < projectElements.length; i++){
            projectElements[i].style.display = 'none';
        }
    }
    else if(document.getElementById('stories').checked){
        for(let i = 0; i < gameElements.length; i++){
            gameElements[i].style.display = 'none';
        }

        for(let i = 0; i < storyElements.length; i++){
            storyElements[i].style.display = 'flex';
        }

        for(let i = 0; i < projectElements.length; i++){
            projectElements[i].style.display = 'none';
        }
    }
    else if(document.getElementById('projects').checked){
        for(let i = 0; i < gameElements.length; i++){
            gameElements[i].style.display = 'none';
        }

        for(let i = 0; i < storyElements.length; i++){
            storyElements[i].style.display = 'none';
        }

        for(let i = 0; i < projectElements.length; i++){
            projectElements[i].style.display = 'flex';
        }
    }
}