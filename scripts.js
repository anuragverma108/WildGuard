// Get the toggle button
const themeToggleBtn = document.getElementById("theme-toggle");

// Check the current theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
}

// Add event listener for the toggle button
themeToggleBtn.addEventListener("click", () => {
  // Toggle the dark theme class
  document.body.classList.toggle("dark-theme");

  // Save the current theme in localStorage
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    themeToggleBtn.querySelector("span").innerText = "Toggle Light Theme"; // Update button text
    themeToggleBtn.querySelector("ion-icon").setAttribute("name", "sunny-outline"); // Change icon
  } else {
    localStorage.setItem("theme", "light");
    themeToggleBtn.querySelector("span").innerText = "Toggle Dark Theme"; // Update button text
    themeToggleBtn.querySelector("ion-icon").setAttribute("name", "moon-outline"); // Change icon
  }
});
