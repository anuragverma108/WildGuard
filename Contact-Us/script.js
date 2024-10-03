document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  const modal = document.getElementById("thankYouModal");
  const closeModal = document.querySelector(".close-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission for now

    let isValid = true;

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // Validate name (only letters)
    const namePattern = /^[A-Za-z\s]+$/;
    if (name.value.trim() === "") {
      nameError.textContent = "Name is required";
      isValid = false;
    } else if (!name.value.match(namePattern)) {
      nameError.textContent = "Name should contain letters only";
      isValid = false;
    }

    // Validate email (basic regex check)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      emailError.textContent = "Please enter a valid email";
      isValid = false;
    }

    // Validate message
    if (message.value.trim() === "") {
      messageError.textContent = "Message is required";
      isValid = false;
    }

    // If all fields are valid, show thank you pop-up
    if (isValid) {
      modal.style.display = "block";

      // Clear the form after submission
      form.reset();

      setTimeout(() => {
        window.location.pathname = "../index.html";
      }, 2000);
    }
  });

  // Close the modal when the user clicks on the close button
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    window.location.pathname = "../index.html";
  });
});
