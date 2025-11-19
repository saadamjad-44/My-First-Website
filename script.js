// Handle mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navToggle.classList.remove("active");
      navLinks.classList.remove("open");
    }
  });
}

// IntersectionObserver for fade-in sections
const observedElements = document.querySelectorAll(".observe");
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -10% 0px",
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

observedElements.forEach((element) => observer.observe(element));

// Contact form handler
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you! We will reach out shortly.");
    contactForm.reset();
  });
}

// Set current year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

