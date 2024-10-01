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

const apiKey = `d1df68819c67613829c5b5a8596405e4`;  // Replace with your Mediastack API key
const newsContainer = document.getElementById('news-container');

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
