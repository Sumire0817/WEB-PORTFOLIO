document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".autoType", {
    strings: ["DEVELOPER", "PROGRAMMER"],
    typeSpeed: 40,
    backSpeed: 20,
    loop: true,
    backDelay: 1000,
    cursorChar: "|",
  });

  // Menu button and the nav links
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("nav ul");

  // Toggle the navigation links on hamburger icon click
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
