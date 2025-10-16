//Smooth Animations 
window.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({
    distance: "50px",
    duration: 1200,
    easing: "ease-in-out",
    interval: 150,
    cleanup: true,
    reset: true,
  });

  // Add the reveal-hidden class to elements (without hiding too early)
  const animatedEls = document.querySelectorAll(
    "#home h2, #home h1, #home p, #home a, #home img, \
     .bg-primary-beige .grid > div, \
     #services h4, #services h2, #services-container, \
     #about img, #about h4, #about h1, #about p, #about a, \
     #contact img, #contact h1, #contact p, #contact a, \
     footer div"
  );

  animatedEls.forEach((el) => el.classList.add("reveal-hidden"));

  // Define reveal helper
  const reveal = (selector, options = {}) => {
    sr.reveal(selector, {
      origin: "bottom",
      ...options,
      afterReveal: (el) => {
        el.classList.remove("reveal-hidden");
      },
    });
  };

  // Apply reveals
  reveal("#home h2, #home h1, #home p, #home a, #home img");
  reveal(".bg-primary-beige .grid > div", { interval: 120 });
  reveal("#services h4, #services h2, #services-container", { interval: 120 });
  reveal("#about img, #about h4, #about h1, #about p, #about a", { interval: 120 });
  reveal("#contact img, #contact h1, #contact p, #contact a", { interval: 120 });
  reveal("footer div", { interval: 100 });
});
