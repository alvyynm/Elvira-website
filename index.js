"use strict";

const navToggle = document.querySelector(".mobile-nav-toggle");
const listMenu = document.querySelector(".nav__box-links");
const hambugerIcon = document.querySelector(".icon-hamburger");
const closeHamburgerIcon = document.querySelector(".icon-close");

navToggle.addEventListener("click", () => {
  listMenu.classList.toggle("nav__box-links--show");
  hambugerIcon.classList.toggle("hidden");
  closeHamburgerIcon.classList.toggle("hidden");
});
