const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "Switch to Light Mode";
} else {
  toggleButton.textContent = "Switch to Dark Mode";
}

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "Switch to Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "Switch to Dark Mode";
  }
});
