let selectedStarIndex = -1;
const stars = document.querySelectorAll(".stars i");
let output = document.getElementById("output");

// Add click event listener to each star
stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        selectedStarIndex = index1;
        // Update star styling based on the selected index
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('active') : star.classList.remove('active');
        });
        updateRating(); // Update the rating output
    });
});

// Function to update rating display
function updateRating() {
    output.innerText = "Rating is: " + (selectedStarIndex + 1) + "/5";
}

// Make sure at least 1 star is selected on form submission
function validateRating() {
    if (selectedStarIndex < 0) {
        stars[0].click(); // Set at least one star as selected
    }
    return selectedStarIndex >= 0;
}

// Add event listener to the submit button
document.getElementById("ratingForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
    if (validateRating()) {
        let popup = document.getElementById("popup");
        popup.style.display = "block";
        setTimeout(() => {
            popup.style.display = "none";
            // Reset stars and clear output
            stars.forEach(star => star.classList.remove("active"));
            selectedStarIndex = -1;
            output.innerText = "Rating is: 0/5";
            document.getElementById("reviewInput").value = ""; // Clear review text
        }, 2000);
    }
});








//review section

const btns = document.querySelectorAll(".btn");
const slideRow = document.getElementById("slide-row");
const main = document.querySelector("main");

let currentIndex = 0;

function updateSlide() {
    const mainWidth = main.offsetWidth;
    const translateValue = currentIndex * -mainWidth;
    slideRow.style.transform = `translateX(${translateValue}px)`;

    btns.forEach((btn, index) => {
        btn.classList.toggle("active", index === currentIndex);
    });
}

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        currentIndex = index;
        updateSlide();
    });
});

window.addEventListener("resize", () => {
    updateSlide();
});

// Start the slideshow
let intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % btns.length;
    updateSlide();
}, 3000);
