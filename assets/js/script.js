'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}





/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});



/**
 * adding functionality to about section
 */

const sectionText1 = document.getElementById("section-text-1");
const sectionText2 = document.getElementById("section-text-2");
const sectionText3 = document.getElementById("section-text-3");
const ourMission = document.getElementById("ourMission");
const ourVision = document.getElementById("ourVision");
const nextPlan = document.getElementById("nextPlan");

sectionText1.style.display = "block";
sectionText2.style.display = "none";
sectionText3.style.display = "none";

function our_mission(){
  ourMission.classList.add("active");
  ourMission.classList.remove("active");
  ourMission.classList.remove("active");

  sectionText1.style.display = "block";
  sectionText2.style.display = "none";
  sectionText3.style.display = "none";
}

function our_vision(){
  ourVision.classList.add("active");
  ourVision.classList.remove("active");
  ourVision.classList.remove("active");

  sectionText1.style.display = "none";
  sectionText2.style.display = "block";
  sectionText3.style.display = "none";
}

function next_plan(){
  nextPlan.classList.add("active");
  nextPlan.classList.remove("active");
  nextPlan.classList.remove("active");

  sectionText1.style.display = "none";
  sectionText2.style.display = "none";
  sectionText3.style.display = "block";
}
