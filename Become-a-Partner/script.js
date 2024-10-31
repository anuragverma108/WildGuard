document.addEventListener("DOMContentLoaded", function () {
    const partnerForm = document.getElementById("partnerForm");

    if (partnerForm) {
        partnerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Basic form validation
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();

            if (name === "" || email === "" || !validateEmail(email)) {
                alert("Please fill in all fields correctly.");
                return;
            }

            alert("Submitted successfully!");

            // Reset the form
            this.reset();
        });
    } else {
        console.log("Form not found!");
    }

    function validateEmail(email) {
        // Basic email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
