const headerMenu = document.getElementsByClassName("header__menu")[0];
const nav = document.getElementsByClassName("nav")[0];

headerMenu.addEventListener("click", (event) => {
  event.preventDefault();
  nav.classList.toggle("active");
});
