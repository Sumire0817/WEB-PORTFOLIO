document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".autoType", {
    strings: ["DEVELOPER", "PROGRAMMER"], // Fixed typo: "PROGRAMER" -> "PROGRAMMER"
    typeSpeed: 40,
    backSpeed: 20,
    loop: true,
    backDelay: 1000,
    cursorChar: "|",
  });
});
