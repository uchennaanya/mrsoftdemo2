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
  setTimeout(typeWriting, 150);
}

window.addEventListener("load", typeWriting);


particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);
