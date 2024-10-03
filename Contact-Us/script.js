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

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  const suggestionsDropdown = document.getElementById('suggestions');

  // Sample data for demonstration; replace with your own API or local storage data
  const recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
  const popularSearches = ["JavaScript", "Python", "React", "Node.js"]; // Example popular searches

  function fetchSuggestions(query) {
    // Combine recent and popular searches
    const allSuggestions = [...recentSearches, ...popularSearches]
      .filter(suggestion => suggestion.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5); // Limit suggestions to 5

    return allSuggestions;
  }

  searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    if (query.length > 0) {
      const suggestions = fetchSuggestions(query);
      displaySuggestions(suggestions);
    } else {
      suggestionsDropdown.style.display = 'none';
    }
  });

  function displaySuggestions(suggestions) {
    suggestionsDropdown.innerHTML = ''; // Clear previous suggestions
    if (suggestions.length > 0) {
      suggestionsDropdown.style.display = 'block';
      suggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.textContent = suggestion;
        suggestionItem.onclick = () => selectSuggestion(suggestion);
        suggestionsDropdown.appendChild(suggestionItem);
      });
    } else {
      suggestionsDropdown.style.display = 'none'; // Hide if no suggestions
    }
  }

  function selectSuggestion(suggestion) {
    searchInput.value = suggestion; // Set the search bar value
    suggestionsDropdown.style.display = 'none'; // Hide dropdown
    saveRecentSearch(suggestion); // Save to local storage
  }

  function saveRecentSearch(suggestion) {
    if (!recentSearches.includes(suggestion)) {
      recentSearches.push(suggestion);
      localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    }
  }

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
        modal.style.display = "none"; // Close modal after 2 seconds
      }, 2000);
    }
  });

  // Close the modal when the user clicks on the close button
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
