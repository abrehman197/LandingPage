// Smooth scroll for nav links and explore button
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Toggle mobile nav
const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Contact form feedback
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  formMessage.textContent = "Message sent successfully!";
  contactForm.reset();
});