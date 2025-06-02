// Toggle Mobile Menu
const menuButton = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    navLinks.classList.remove("open");
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});