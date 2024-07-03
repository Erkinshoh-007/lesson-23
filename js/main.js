const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);

//dark made
let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "image/sun2.svg";
  } else {
    this.firstElementChild.src = "image/moon.svg";
  }
  document.body.classList.toggle("dark");
});
//til
document.getElementById("uzbekBtn").addEventListener("click", function () {
  document.getElementById("title").textContent = "Salom Dunyo!";
  document.getElementById("description").textContent =
    "Bu sahifa tilini o'zgartiradi.";
});

document.getElementById("russianBtn").addEventListener("click", function () {
  document.getElementById("title").textContent = "Привет мир!";
  document.getElementById("description").textContent =
    "Эта страница изменяет язык.";
});

document.getElementById("englishBtn").addEventListener("click", function () {
  document.getElementById("title").textContent = "Hello World!";
  document.getElementById("description").textContent =
    "This page changes the language.";
});
