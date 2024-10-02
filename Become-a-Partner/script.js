document.addEventListener("DOMContentLoaded", function () {
    const partnerBtn = document.getElementById("partnerButton");


    if (partnerBtn) {
        partnerBtn.addEventListener("click", function () {
            console.log("Hello");
            window.location.href='Become-a-Partner/index.html'
        });
    } else {
        console.log("Button not found!");
    }
});
