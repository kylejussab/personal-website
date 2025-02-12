const messages = {
    "brief-breakdown": "Hi! I’m Kyle, a passionate gameplay programmer whose journey began at 14. After completing The Last of Us and watching its “Making of” documentary, I discovered my calling to create meaningful and immersive video games. My path hasn’t been easy, but it's led me to California with a BSc in Computer Science, and an ASc in Games Design. Though I haven't broken into the video game industry yet, it's with Snap Inc. where I have been given the opportunity to grow and improve on my tech skills as a whole.",
    "fact": [
        "I can solve a rubiks cube, and my fastest solve time is 18 seconds!",
        "I’m a huge soccer fan—I love to play and watch the sport. Fair warning though, you’ll probably see me being really upset if my team loses.",
        "I write. I’ve been growing my skills as a storyteller and part of that has been writing short stories, blogs and many more.",
        "Coursera and I filmed a commercial advertising my BSc with them and University of London. I’m pretty much a movie star at this point.",
        "My most ordered Starbucks drink is a caramel frappuccino ☕",
        "This one is going to come as a complete surprise, but my favorite video game of all time is The Last of Us.",
        "What if it’s not about whether or not pineapple should be on pizza, and more about the friends we made along the way? (Pineapple can definitely be on pizza by the way).",
        "I’m slowly building a collection of board games and physical puzzles.",
        "Besides TLoU, the only other game I’ve personally scored as a 10/10 is Life is Strange: True Colors.",
        "I have a tattoo on my right arm, and it’s Ellie’s tattoo 🌿",
        "I have a completely irrational fear of grasshoppers.",
        "Even with goggles on, I cannot open my eyes under water.",
        "I do not like eating fish. Sea food is fine, but something about fish itself doesn’t sit well with me."
    ],
    "joke": [
        "Why don't skeletons fight each other? They don't have the guts!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised!",
        "I only know 25 letters of the alphabet. I don’t know y.",
        "Parallel lines have so much in common. It’s a shame they’ll never meet.",
        "I’m reading a book on anti-gravity. It’s impossible to put down!",
        "Did you hear about the claustrophobic astronaut? He needed a little space.",
        "I couldn’t figure out how to put my seatbelt on. Then it clicked.",
        "I had a joke about a broken pencil, but it’s pointless.",
        "I don’t trust stairs. They’re always up to something.",
        "Why did the mushroom go to the party? Because he was a fungi!",
        "Why did the bicycle fall over? Because it was two-tired!",
        "What did the grape do when it got stepped on? Nothing, it just let out a little wine."
    ],
    "game": "I’m currently playing A Plague Tale: Requiem. Initial thoughts are that the crossbow adds to the gameplay from Innocence and changes how I play the game. Really enjoying it so far and I’ll probably end up getting the platinum trophy in the near future.",
    "boredom-corner": "As of right now the Boredom Corner is still being built (blame school for taking up all my time). But when it is ready you would just click my logo in the top left of the page!",
};

const chatButton = document.querySelector('.chat-button');
const bitmojiIcon = chatButton.querySelector('.bitmoji-icon');
const defaultIcon = chatButton.querySelector('.default-icon');
const chatBox = document.querySelector('.chat-box');
const chatBubbleContainer = document.querySelector('.all-chat-bubbles');
const chatOptionsContainer = document.querySelector('.chat-options');
const chatOptions = document.querySelectorAll('.chat-option');
const chatMessage = document.querySelector('.chat-message');

let isChatOpen = false;

const SWITCHTIME = 17000;
const DELAYTIME = 9000;

const bitmojiExpressions = [
    'assets/bitmoji-one.png',
    'assets/bitmoji-two.png',
    'assets/bitmoji-three.png',
    'assets/bitmoji-four.png',
    'assets/bitmoji-five.png',
    'assets/bitmoji-six.png',
    'assets/bitmoji-seven.png',
    'assets/bitmoji-eight.png',
    'assets/bitmoji-nine.png',
    'assets/bitmoji-ten.png',
];

const closeIcon = 'assets/close-icon.png';

// Switch to a random Bitmoji
function switchToBitmoji() {
    if (isChatOpen) return;

    const randomExpression = bitmojiExpressions[Math.floor(Math.random() * bitmojiExpressions.length)];
    bitmojiIcon.src = randomExpression;

    defaultIcon.style.opacity = 0;
    bitmojiIcon.style.opacity = 1;

    setTimeout(() => {
        defaultIcon.style.opacity = 1;
        bitmojiIcon.style.opacity = 0;
    }, DELAYTIME);
}


function startCycling() {
    if (!isChatOpen) {
        setInterval(switchToBitmoji, SWITCHTIME);
    }
}

chatButton.addEventListener('click', () => {
    isChatOpen = !isChatOpen;
    chatBox.classList.toggle('hidden');
    chatButton.classList.toggle('chat-open');

    if (isChatOpen) {
        bitmojiIcon.src = closeIcon;
        defaultIcon.style.opacity = 0;
        bitmojiIcon.style.opacity = 1;
    } else {
        bitmojiIcon.style.opacity = 0;
        defaultIcon.style.opacity = 1;
        startCycling();
    }
});

// Handle chat bubble clicks to display corresponding message
chatOptions.forEach(option => {
    option.addEventListener('click', () => {
        const messageKey = option.getAttribute('data-message');

        let message = messages[messageKey];

        message = Array.isArray(message) ? message[Math.floor(Math.random() * message.length)] : message;

        chatOptionsContainer.classList.remove('show');
        addUserMessage(option.textContent);
        typeMessage(message);
    });
});

function typeMessage(message) {
    const bubble = document.createElement('div');
    bubble.classList.add('chat-bot-message-container');

    const img = document.createElement('img');
    img.src = 'assets/bitmoji-nine.png';
    bubble.appendChild(img);

    const messageText = document.createElement('p');
    messageText.classList.add('kyle-message');
    messageText.textContent = ''; // Start with an empty text content
    bubble.appendChild(messageText);

    chatBubbleContainer.appendChild(bubble);

    let index = 0;
    const typingSpeed = 10; // Milliseconds between characters
    const messageLength = message.length;

    function addCharacter() {
        if (index < messageLength) {
            messageText.textContent += message[index];
            index++;
            setTimeout(addCharacter, typingSpeed);
        }
        else{
            chatOptionsContainer.classList.add('show');
        }
    }

    addCharacter();
}

function addBotMessage(message){
    const bubble = document.createElement('div');
    bubble.classList.add('chat-bot-message-container');

    const img = document.createElement('img');
    img.src = 'assets/bitmoji-nine.png';
    bubble.appendChild(img);

    const messageText = document.createElement('p');
    messageText.classList.add('kyle-message');
    messageText.textContent = message;
    bubble.appendChild(messageText);

    chatBubbleContainer.appendChild(bubble);

    chatOptionsContainer.classList.add('show');
}

function addUserMessage(message){
    const bubble = document.createElement('div');
    bubble.classList.add('chat-user-message-container');

    const messageText = document.createElement('p');
    messageText.classList.add('user-message');
    messageText.textContent = message;
    bubble.appendChild(messageText);

    chatBubbleContainer.appendChild(bubble);
}

addBotMessage("Hi there! I’m Kyle, your personal chatbot, and I’m here to answer and tell you more about myself. Feel free to select any of the options below to get to know me better!");

startCycling();