let xOffset = 0;
let isMouseIn = false;
const slides = document.getElementById("slides");

setInterval(translate, 0);

function translate() {
  let offsetIncrementor = isMouseIn ? 0.05 : 0.2;
  if (xOffset >= 258 * 3) xOffset = 0;
  else xOffset = xOffset + offsetIncrementor;
  slides.style.transform = "translateX(-" + xOffset + "px)";
}

slides.addEventListener("mouseover", function (event) {
  isMouseIn = true;
});

slides.addEventListener("mouseout", function (event) {
  isMouseIn = false;
});

const textElement = document.querySelector(".text--dynamic");
const wordsArray = ["Innovative ICT Solutions...", "training...", "hosting services...", "call center mangement.."];
let arrayLength = wordsArray.length;

let currentLetterCount = 0,
  currentWordCount = 0,
  currentText = [],
  currentWord = "",
  currentLetter = "",
  reverse = false;

function typeWriting() {
  if (currentWordCount <= arrayLength) {
    if (currentWordCount == arrayLength) {
      currentWordCount = 0;
    }

    let letterCount = wordsArray[currentWordCount].length;
    currentWord = wordsArray[currentWordCount];

    if (!reverse && currentLetterCount < letterCount) {
      currentLetter = currentWord[currentLetterCount];
      currentText.push(currentLetter);

      textElement.textContent = currentText.join("");
      currentLetterCount++;
    }

    if (reverse && currentLetterCount <= letterCount) {
      currentText.pop();
      textElement.textContent = currentText.join("");
      currentLetterCount--;
    }

    if (currentLetterCount == letterCount) {
      reverse = true;
    }

    if (reverse && currentLetterCount == 0) {
      currentText = [];
      currentWordCount++;
      reverse = false;
    }
  }
  setTimeout(typeWriting, 100);
}

window.addEventListener("load", typeWriting);

