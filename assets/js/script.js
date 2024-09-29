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
  learn more about us 
 **/
const learnBtn=document.querySelector("#second-btn");
const learnSection=document.querySelector(".section-lmas");
learnBtn.addEventListener('click',()=>{
  if(learnSection.style.display==='none'){
    learnSection.style.display='block';
  }
  else{
    learnSection.style.display='none';
  }
});

const firstBtn=document.querySelector("#first-btn");
const secondBtn=document.querySelector("#second-btn");
firstBtn.addEventListener('click', () => {
  secondBtn.scrollIntoView({ behavior: 'smooth' });
});

const testiBtn=document.querySelector(".testimonial-btn");
const testiSection=document.querySelector(".testi");
testiBtn.addEventListener('click', () => {
  testiSection.scrollIntoView({ behavior: 'smooth' });
});

const eventBtn=document.querySelector(".event-btn");
const eventSection=document.getElementById('event');
eventBtn.addEventListener('click', () => {
  eventSection.scrollIntoView({ behavior: 'smooth' });
});