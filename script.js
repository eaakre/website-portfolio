const headerMenu = document.getElementsByClassName("header__menu")[0];
const nav = document.getElementsByClassName("nav")[0];

headerMenu.addEventListener("click", (event) => {
  event.preventDefault();
  nav.classList.toggle("active");
});

const header = document.querySelector(".header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    header.classList.add("header--hidden");
    console.log("we are going down");
  } else {
    header.classList.remove("header--hidden");
    console.log("we are going up");
  }

  lastScrollY = window.scrollY;
});
