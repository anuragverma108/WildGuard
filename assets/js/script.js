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

// Scroll To Top Button
// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// Show button on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to top
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// About section

let mission = document.querySelector('.mission')
let vision = document.querySelector('.vision')
let nextplan = document.querySelector('.nextplan')
let content = document.querySelector(".tab-content");

// Function to remove active class from all buttons
const removeActiveClass = () => {
  mission.classList.remove("active");
  vision.classList.remove("active");
  nextplan.classList.remove("active");
};

mission.addEventListener("click", () => {
  removeActiveClass(); // Remove active class from all
  mission.classList.add("active"); // Add active class to mission
  
  content.innerHTML = `
    <div>
      <p class="section-text">
        But I must explain to you how all this mistaken denouncing pleasure and praising pain was born and I
        will give you a complete account of the system expoundmaster.
      </p>

      <ul class="tab-list">
        <li class="tab-item">
          <div class="item-icon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
          <p class="tab-text">Charity For Foods</p>
        </li>
        <li class="tab-item">
          <div class="item-icon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
          <p class="tab-text">Charity For Education</p>
        </li>
        <li class="tab-item">
          <div class="item-icon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
          <p class="tab-text">Charity For Water</p>
        </li>
        <li class="tab-item">
          <div class="item-icon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
          <p class="tab-text">Charity For Medical</p>
        </li>
      </ul>

      <button class="btn btn-secondary">
        <span>Learn More Us</span>
        <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
      </button>
    </div>
  `;
});


vision.addEventListener("click",()=>{
  removeActiveClass(); // Remove active class from all
  vision.classList.add("active"); // Add active class to vision
  content.innerHTML =
      `<div>
      <p class="section-text">
        We envision a world where every animal thrives in a safe and natural environment, free from harm, neglect, and extinction. We strive to create a harmonious coexistence between humans and wildlife.
      </p>
      <ul class="tab-list">

        <li class="tab-item">
          <div class="item-icon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>

          <p class="tab-text">Safe Habitats for All Wildlife</p>
        </li>

        <li class="tab-item">
          <div class="item-icon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>

          <p class="tab-text">Coexistence with Nature</p>
        </li>

        <li class="tab-item">
          <div class="item-icon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>

          <p class="tab-text">Global Awareness</p>
        </li>

        <li class="tab-item">
          <div class="item-icon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>

          <p class="tab-text">A Future Free of Extinction</p>
        </li>

      </ul>
      <button class="btn btn-secondary">
        <span>Learn More Us</span>
        <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
      </button>
    </div>`
})

nextplan.addEventListener("click",()=>{
  removeActiveClass(); // Remove active class from all
  nextplan.classList.add("active"); // Add active class to nextPlan
  content.innerHTML =
      `<div>
      <p class="section-text">
        Our next plan is to organize international volunteering programs where people can work on the ground to aid in animal conservation efforts.
      </p>
      <ul class="tab-list">

        <li class="tab-item">
          <div class="item-icon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>

          <p class="tab-text">Expand Safe Shelters</p>
        </li>

        <li class="tab-item">
          <div class="item-icon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>

          <p class="tab-text">Clean Water Initiatives</p>
        </li>

        <li class="tab-item">
          <div class="item-icon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>

          <p class="tab-text">Educational Outreach</p>
        </li>

        <li class="tab-item">
          <div class="item-icon">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>

          <p class="tab-text">Medical Assistance</p>
        </li>

      </ul>
      <button class="btn btn-secondary">
        <span>Learn More Us</span>
        <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
      </button>
    </div>`
})