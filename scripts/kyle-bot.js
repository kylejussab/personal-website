const messages = {
  "brief-breakdown":
    "Hi! I’m Kyle, a passionate gameplay programmer whose journey began at 14. After completing The Last of Us and watching its 'Making of' documentary, I discovered my calling to create meaningful and immersive video games. My path has led me to California, where I’m completing a BSc in Computer Science and an ASc in Game Design. At Snap Inc., I’ve had the opportunity to contribute to production-ready projects and further develop my technical skills, preparing me to create engaging, high-quality gameplay experiences.",
  fact: [
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
    "I do not like eating fish. Sea food is fine, but something about fish itself doesn’t sit well with me.",
    "Every year I celebrate a personal holiday on April 7th, it is known as 'Inspiration Day' and it is the day I knew I wanted to become a Game Developer.",
  ],
  joke: [
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
    "What did the grape do when it got stepped on? Nothing, it just let out a little wine.",
  ],
  game: "A mix of Hades and Brotato, a weird combination but I've really been enjoying Roguelikes.",
  contact:
    "The quickest way to reach me is through my email, but LinkedIn works just as well! I’m pretty quick with replies so expect to hear back the same day or by the next one.",
};

const chatButton = document.querySelector(".chat-button");
const bitmojiIcon = chatButton.querySelector(".bitmoji-icon");
const defaultIcon = chatButton.querySelector(".default-icon");
const chatBox = document.querySelector(".chat-box-content");
const chatBubbleContainer = document.querySelector(".all-chat-bubbles");
const chatOptionsContainer = document.querySelector(".chat-options");
const chatOptions = document.querySelectorAll(".chat-option");
const chatMessage = document.querySelector(".chat-message");

let isChatOpen = false;

const SWITCHTIME = 17000;
const DELAYTIME = 9000;

const bitmojiExpressions = [
  "assets/kyle bot/bitmoji-one.png",
  "assets/kyle bot/bitmoji-two.png",
  "assets/kyle bot/bitmoji-three.png",
  "assets/kyle bot/bitmoji-four.png",
  "assets/kyle bot/bitmoji-five.png",
  "assets/kyle bot/bitmoji-six.png",
  "assets/kyle bot/bitmoji-seven.png",
  "assets/kyle bot/bitmoji-eight.png",
  "assets/kyle bot/bitmoji-nine.png",
  "assets/kyle bot/bitmoji-ten.png",
  "assets/kyle bot/bitmoji-eleven.png",
  "assets/kyle bot/bitmoji-twelve.png",
  "assets/kyle bot/bitmoji-thirteen.png",
];

let availableBitmojis = [...bitmojiExpressions];

const closeIcon = "assets/kyle bot/close-icon.png";
let isSwitching = false;
let switchInterval = null;

// Switch to a random Bitmoji
function switchToBitmoji() {
  if (isChatOpen || isSwitching) return;

  isSwitching = true;

  // Shuffle without repeats
  if (availableBitmojis.length === 0) {
    availableBitmojis = [...bitmojiExpressions];
  }

  const randomIndex = Math.floor(Math.random() * availableBitmojis.length);
  const nextBitmoji = availableBitmojis.splice(randomIndex, 1)[0];

  bitmojiIcon.src = nextBitmoji;

  defaultIcon.style.opacity = 0;
  bitmojiIcon.style.opacity = 1;

  setTimeout(() => {
    defaultIcon.style.opacity = 1;
    bitmojiIcon.style.opacity = 0;
    isSwitching = false;

    if (isChatOpen) {
      bitmojiIcon.src = closeIcon;
      defaultIcon.style.opacity = 0;
      bitmojiIcon.style.opacity = 1;
    }
  }, DELAYTIME);
}

function startCycling() {
  if (!isChatOpen && !switchInterval) {
    switchInterval = setInterval(switchToBitmoji, SWITCHTIME);
  }
}

function stopCycling() {
  if (switchInterval) {
    clearInterval(switchInterval);
    switchInterval = null;
  }
}

chatButton.addEventListener("click", () => {
  isChatOpen = !isChatOpen;
  switchInterval = null;
  isSwitching = false;
  clearInterval(switchInterval);

  chatBox.classList.toggle("hidden");
  chatButton.classList.toggle("chat-open");

  if (isChatOpen) {
    bitmojiIcon.src = closeIcon;
    bitmojiIcon.style.width = "40px";
    bitmojiIcon.style.height = "40px";
    defaultIcon.style.opacity = 0;
    bitmojiIcon.style.opacity = 1;
    stopCycling();
  } else {
    bitmojiIcon.style.opacity = 0;
    bitmojiIcon.style.width = "55px";
    bitmojiIcon.style.height = "55px";
    defaultIcon.style.opacity = 1;
    startCycling();
  }
});

// Handle chat bubble clicks to display corresponding message
chatOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const messageKey = option.getAttribute("data-message");
    let message;

    if (messageKey === "fact") {
      const allFacts = messages.fact;
      let seenFacts = getSeenFacts();

      if (seenFacts.length === allFacts.length) {
        seenFacts = [];
      }

      const unseenFacts = allFacts.filter((fact) => !seenFacts.includes(fact));
      const randomFact =
        unseenFacts[Math.floor(Math.random() * unseenFacts.length)];
      seenFacts.push(randomFact);
      saveSeenFacts(seenFacts);

      message = randomFact;
    } else if (messageKey === "joke") {
      const allJokes = messages.joke;
      let seenJokes = getSeenJokes();

      if (seenJokes.length === allJokes.length) {
        seenJokes = [];
      }

      const unseenJokes = allJokes.filter((joke) => !seenJokes.includes(joke));
      const randomJoke =
        unseenJokes[Math.floor(Math.random() * unseenJokes.length)];
      seenJokes.push(randomJoke);
      saveSeenJokes(seenJokes);

      message = randomJoke;
    } else {
      message = Array.isArray(message)
        ? message[Math.floor(Math.random() * message.length)]
        : messages[messageKey];
    }

    chatOptionsContainer.classList.remove("show");
    addUserMessage(option.textContent);
    typeMessage(message);
  });
});

function typeMessage(message) {
  const bubble = document.createElement("div");
  bubble.classList.add("chat-bot-message-container");

  const img = document.createElement("img");
  img.src = "assets/main-icon.png";
  bubble.appendChild(img);

  const messageText = document.createElement("p");
  messageText.classList.add("kyle-message");
  messageText.textContent = ""; // Start with an empty text content
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
    } else {
      let updatedMessage = messageText.innerHTML;
      updatedMessage = updatedMessage.replace(
        /email/g,
        '<a class="kyle-bot-link" href="mailto:kylejussab@gmail.com">email</a>'
      );
      updatedMessage = updatedMessage.replace(
        /LinkedIn/g,
        '<a class="kyle-bot-link" href="https://www.linkedin.com/in/kylejussab/" target="_blank">LinkedIn</a>'
      );
      messageText.innerHTML = updatedMessage;

      chatOptionsContainer.classList.add("show");
    }
  }

  addCharacter();
}

function addBotMessage(message) {
  const bubble = document.createElement("div");
  bubble.classList.add("chat-bot-message-container");

  const img = document.createElement("img");
  img.src = "assets/main-icon.png";
  bubble.appendChild(img);

  const messageText = document.createElement("p");
  messageText.classList.add("kyle-message");
  messageText.textContent = message;
  bubble.appendChild(messageText);

  chatBubbleContainer.appendChild(bubble);

  chatOptionsContainer.classList.add("show");
}

function addUserMessage(message) {
  const bubble = document.createElement("div");
  bubble.classList.add("chat-user-message-container");

  const messageText = document.createElement("p");
  messageText.classList.add("user-message");
  messageText.textContent = message;
  bubble.appendChild(messageText);

  chatBubbleContainer.appendChild(bubble);

  const chatBoxContent = document.querySelector(".chat-box-content");

  chatBoxContent.scrollTo({
    top: chatBoxContent.scrollHeight,
    behavior: "smooth",
  });
}

function getSeenFacts() {
  const seen = localStorage.getItem("seenFacts");
  return seen ? JSON.parse(seen) : [];
}

function saveSeenFacts(seen) {
  localStorage.setItem("seenFacts", JSON.stringify(seen));
}

function getSeenJokes() {
  const seen = localStorage.getItem("seenJokes");
  return seen ? JSON.parse(seen) : [];
}

function saveSeenJokes(seen) {
  localStorage.setItem("seenJokes", JSON.stringify(seen));
}

function checkFirstVisit() {
  const hasVisited = localStorage.getItem("hasVisited");
  if (!hasVisited) {
    localStorage.setItem("hasVisited", "true");
    return "Hi there! I’m Kyle, your personal chatbot, and I’m here to answer and tell you more about myself. Feel free to select any of the options below to get to know me better!";
  } else {
    return "It's good to have you back! I’m Kyle, and I see you might be starting to like me! Ready to learn more fun facts or hear a new joke?";
  }
}

//For later, this will add quirky messages when a user selects the same options multiple times.
const quirkyMessages = {
  joke: [
    "Are you really here to learn about me, or are you only here for the jokes? I wouldn't blame you either way. Here's another one for you.",
    "You know, they do say my middle name is 'comedy'. Enough about me though, here's another joke.",
    "Dang if I had a dollar for every time you asked me for a joke... it wouldn't actually be that much but it's flattering that you're asking for more. Here's another one.",

    "I think I’m starting to see a pattern here... More jokes, huh? Okay, here's another!",
    "You can't get enough of me, can you? Don't worry, I’ve got a fresh one for you!",
  ],
  fact: [
    "Wow, you must really like these facts! You’re like a trivia master now!",
    "I see you’re into facts! Keep it up, I’ve got plenty more where that came from!",
    "It seems you’re a fan of knowledge! Let's see what this fact blows your mind!",
    "Getting smarter by the minute, huh? Let’s see what other cool facts I’ve got!",
    "Wow, you're a fact-finding machine! Let's keep this trivia train rolling!",
  ],
};

const greetingMessage = checkFirstVisit();
addBotMessage(greetingMessage);

startCycling();

// Shrinks the size of the chat if you start scrolling
(function () {
  const chatButton = document.querySelector(".chat-button");

  let lastScrollY = window.pageYOffset;
  const revealAfter = 150;
  const deltaThreshold = 5;

  window.addEventListener(
    "scroll",
    () => {
      if (!isChatOpen) {
        const currentY = window.pageYOffset;
        const diff = currentY - lastScrollY;

        if (diff > deltaThreshold && currentY > revealAfter) {
          chatButton.classList.add("shrunk");
        } else if (diff < -deltaThreshold) {
          chatButton.classList.remove("shrunk");
        }

        lastScrollY = currentY;
      }
    },
    { passive: true }
  );
})();
