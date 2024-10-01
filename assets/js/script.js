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


const apiKey = `d1df68819c67613829c5b5a8596405e4`;  // Replace with your Mediastack API key
const newsContainer = document.getElementById('news-container');

// fetching news
async function fetchNews() {
    try {
        const response = await fetch(`https://api.mediastack.com/v1/news?access_key=${apiKey}&keywords=animal&limit=3`);
        const data = await response.json();
        console.log(data);
        if (data.data.length === 0) {
            newsContainer.innerHTML = '<p>No news articles found.</p>';
        } else {
            displayNews(data.data);
        }
    } catch (error) {
        newsContainer.innerHTML = `<p>Failed to fetch news: ${error.message}</p>`;
    }
}

// displaying news
function displayNews(articles) {
    newsContainer.innerHTML = '';  // Clear the container

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');

        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        newsContainer.appendChild(articleElement);
    });
}

fetchNews();