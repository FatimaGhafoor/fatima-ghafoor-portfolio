const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li a");

function closeNavigation() {
  if (!hamburger || !navMenu) return;

  hamburger.classList.remove("active");
  navMenu.classList.remove("show");
  hamburger.setAttribute("aria-expanded", "false");
}

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    const isExpanded = hamburger.classList.toggle("active");

    navMenu.classList.toggle("show", isExpanded);
    hamburger.setAttribute("aria-expanded", String(isExpanded));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });
}

const scrollIndicator = document.getElementById("scroll-indicator");

if (scrollIndicator) {
  let ticking = false;

  function updateScrollIndicator() {
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercent =
      scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

    scrollIndicator.style.width = `${Math.min(scrollPercent, 100)}%`;
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(updateScrollIndicator);
    },
    { passive: true },
  );

  updateScrollIndicator();
}
