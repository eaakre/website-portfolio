// hide/show nav links on mobile menu click
const headerMenu = document.getElementsByClassName("header__menu")[0];
const nav = document.getElementsByClassName("nav")[0];

headerMenu.addEventListener("click", (event) => {
  event.preventDefault();
  nav.classList.toggle("active");
});

// hide/show header on scroll
const header = document.querySelector(".header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }

  lastScrollY = window.scrollY;
});

// Add fullscreen option to gallery
const fullscreenImageContainer = document.getElementById(
  "fullscreen-container"
);
const fullscreenImage = document.getElementById("fullscreen-image");

function openFullImg(img) {
  fullscreenImage.src = img;
  fullscreenImageContainer.style.display = "flex";
}

function closeFullImg() {
  fullscreenImageContainer.style.display = "none";
}

// Toggle dark/light mode
const icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};
