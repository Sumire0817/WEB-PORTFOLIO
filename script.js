document.addEventListener("DOMContentLoaded", function () {
  // Typed.js
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

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
  // Contact form
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("fullname").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const mailtoLink = `mailto:${email}?subject=Contact from ${name}&body=${encodeURIComponent(
        message
      )}`;
      window.location.href = mailtoLink;
    });
});
