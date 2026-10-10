/* FRAME & FORM — Website interactions */

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for links to sections on this page
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
            ? "auto"
            : "smooth",
          block: "start",
        });
      }
    });
  });

  // Reveal the page smoothly as images finish loading
  document.querySelectorAll(".work-image img, .philosophy-image img").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.opacity = "0.65";
    });
  });
});