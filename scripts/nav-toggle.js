let gameElements = document.getElementsByClassName('games-content');
let storyElements = document.getElementsByClassName('stories-content');
let blogElements = document.getElementsByClassName('blogs-content');

function selected(){
    if(document.getElementById('games').checked){
        for(let i = 0; i < gameElements.length; i++){
            gameElements[i].style.display = 'flex';
        }

        for(let i = 0; i < storyElements.length; i++){
            storyElements[i].style.display = 'none';
        }

        for(let i = 0; i < blogElements.length; i++){
            blogElements[i].style.display = 'none';
        }
    }
    else if(document.getElementById('stories').checked){
        for(let i = 0; i < gameElements.length; i++){
            gameElements[i].style.display = 'none';
        }

        for(let i = 0; i < storyElements.length; i++){
            storyElements[i].style.display = 'flex';
        }

        for(let i = 0; i < blogElements.length; i++){
            blogElements[i].style.display = 'none';
        }
    }
    else if(document.getElementById('blogs').checked){
        for(let i = 0; i < gameElements.length; i++){
            gameElements[i].style.display = 'none';
        }

        for(let i = 0; i < storyElements.length; i++){
            storyElements[i].style.display = 'none';
        }

        for(let i = 0; i < blogElements.length; i++){
            blogElements[i].style.display = 'flex';
        }
    }
}