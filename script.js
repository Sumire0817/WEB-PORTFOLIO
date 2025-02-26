document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".autoType", {
    strings: ["DEVELOPER", "PROGRAMMER"], // Fixed typo: "PROGRAMER" -> "PROGRAMMER"
    typeSpeed: 40,
    backSpeed: 20,
    loop: true,
    backDelay: 1000,
    cursorChar: "|",
  });
  // Get the hamburger menu button and the nav links
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("nav ul");
  const sidebar = document.querySelector("aside");

  // Toggle the navigation links on hamburger icon click
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    sidebar.style.display =
      sidebar.style.display === "none" || sidebar.style.display === ""
        ? "block"
        : "none"; // Toggle sidebar
  });

  // Close the sidebar when the close button is clicked
  const closeButton = document.querySelector(".close-btn");
  closeButton.addEventListener("click", () => {
    sidebar.style.display = "none"; // Hide sidebar
  });
});
