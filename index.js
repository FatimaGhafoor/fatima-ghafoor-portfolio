// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li a");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("show");

    hamburger.setAttribute(
      "aria-expanded",
      hamburger.classList.contains("active"),
    );
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== SCROLL INDICATOR =====
const scrollIndicator = document.getElementById("scroll-indicator");

let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollIndicator) {
        scrollIndicator.style.width = scrollPercent + "%";
      }

      ticking = false;
    });

    ticking = true;
  }
});
