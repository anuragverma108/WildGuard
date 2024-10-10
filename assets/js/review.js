// To access the stars
let stars =
    document.getElementsByClassName("star");
let output =
    document.getElementById("output");

// Funtion to update rating
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}

// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}


// Make 1 star compulsory
function validateRating() {
    let rating = parseInt(output.innerText.split("/")[0].split(": ")[1]);
    if (rating < 1) {
        gfg(1); // Select 1 star if no rating is selected
    }
    return rating >= 1; // Return true if rating is valid
}

// Add event listener to the submit button
document.getElementById("ratingForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting
    if (validateRating()) {
        // Show a "Done" popup for 3 seconds
        let popup = document.getElementById("popup");
        popup.style.display = "block";
        setTimeout(() => {
            popup.style.display = "none";
            // Clear stars
            remove();
            output.innerText = "";
            // Clear the text area
            document.getElementById("reviewInput").value = "";
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
