'use strict';

// Login
const popup = document.getElementById('popup');

// Get the icon element to open the popup
const openPopup = document.getElementById('openPopup');

// Get the close button element
const closePopup = document.getElementById('closePopup');

// Function to open the popup
openPopup.addEventListener('click', () => {
    popup.style.display = 'flex'; // Show the popup
});

// Function to close the popup
closePopup.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the popup
});

// Close the popup when clicking outside the popup content
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none'; // Hide the popup
    }
});

// Optional: Switch between login and signup forms
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Event listener for login tab
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});

// Event listener for signup tab
signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

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


const filled = document.querySelector('.filled');

function update() {
    filled.style.width = `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`;
    requestAnimationFrame(update);
}

update();


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

/**
*search-bar with functionality
 */
const searchIcon = document.getElementById("searchIcon");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const searchableElements = document.querySelectorAll("h2, p,div"); // Search within headings and paragraphs

// Elements for navigating between matches
const nextMatchBtn = document.getElementById("nextMatch");
const prevMatchBtn = document.getElementById("prevMatch");
const clearSearchBtn = document.getElementById("clearSearch");
const matchCounter = document.getElementById("matchCounter");

let matchedElements = []; // To store matched elements
let currentMatchIndex = 0; // To keep track of the current match

// Toggle search input visibility when clicking the search icon
searchIcon.addEventListener("click", function () {
  searchBar.style.display = searchBar.style.display === "block" ? "none" : "flex";
  searchInput.focus();
});

// Close search bar when ESC key is pressed
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeSearchBar();
  }
});

// Close search bar when clicked outside
document.addEventListener("click", function(event) {
  if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
    closeSearchBar();
  }
});

// Close search bar function
function closeSearchBar() {
  searchBar.style.display = "none";
  hideNavigationButtons(); // Hide buttons and counter when search is closed
}

// Scroll to and highlight the matching element
searchInput.addEventListener("input", function (event) {
  const query = event.target.value.toLowerCase();
  matchedElements = []; // Reset the matches array
  currentMatchIndex = 0; // Reset current match index

  // Reset previously highlighted elements
  searchableElements.forEach(element => {
    element.classList.remove("highlight");
  });

  if (query) {
    // Find all matches
    searchableElements.forEach(element => {
      const text = element.textContent.toLowerCase();
      if (text.includes(query)) {
        matchedElements.push(element); // Add match to array
      }
    });

    if (matchedElements.length > 0) {
      highlightMatch(currentMatchIndex); // Highlight the first match
      updateMatchCounter(); // Update match counter
      showNavigationButtons(); // Show navigation buttons and match counter
    } else {
      // No matches found, show 0/0 or "No items found"
      matchCounter.textContent = "0/0 - No items found";
      hideNavigationButtons(); // Hide navigation buttons since there's nothing to navigate
      matchCounter.style.display = "inline"; // Ensure counter is visible even with no results
    }
  } else {
    hideNavigationButtons(); // Hide navigation buttons if search is cleared
  }
});

// Highlight the current match
function highlightMatch(index) {
  // Clear previous highlights
  searchableElements.forEach(element => {
    element.classList.remove("highlight");
  });

  const element = matchedElements[index];
  element.scrollIntoView({ behavior: "smooth", block: "center" });
  element.classList.add("highlight");
}

// Navigate to next match
nextMatchBtn.addEventListener("click", function () {
  if (matchedElements.length > 0) {
    currentMatchIndex = (currentMatchIndex + 1) % matchedElements.length; // Loop through matches
    highlightMatch(currentMatchIndex);
    updateMatchCounter();
  }
});

// Navigate to previous match
prevMatchBtn.addEventListener("click", function () {
  if (matchedElements.length > 0) {
    currentMatchIndex = (currentMatchIndex - 1 + matchedElements.length) % matchedElements.length; // Loop through matches
    highlightMatch(currentMatchIndex);
    updateMatchCounter();
  }
});

// Clear search input and highlights
clearSearchBtn.addEventListener("click", function () {
  searchInput.value = ""; // Clear the input
  hideNavigationButtons(); // Hide navigation buttons
  matchedElements = []; // Clear matches
  searchableElements.forEach(element => element.classList.remove("highlight")); // Remove highlights
});

// Update match counter (e.g., "1/3")
function updateMatchCounter() {
  matchCounter.textContent = `${currentMatchIndex + 1}/${matchedElements.length}`;
}

// Show navigation buttons and match counter
function showNavigationButtons() {
  nextMatchBtn.style.display = "inline";
  prevMatchBtn.style.display = "inline";
  clearSearchBtn.style.display = "inline";
  matchCounter.style.display = "inline";
}

// Hide navigation buttons and match counter
function hideNavigationButtons() {
  nextMatchBtn.style.display = "none";
  prevMatchBtn.style.display = "none";
  clearSearchBtn.style.display = "none";
  matchCounter.style.display = "none";
}

// Dynamically update the year in the footer
document.getElementById("currentYear").textContent = new Date().getFullYear();


// Google Translate Element Initialization
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    includedLanguages: 'en,fr,es' // Supported languages
  }, 'google_translate_element');
}

// Wait for the page to fully load before initializing Google Translate
window.addEventListener('load', function() {
  googleTranslateElementInit();
});

