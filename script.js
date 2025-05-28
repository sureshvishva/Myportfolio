// Toggle navbar on menu icon click
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// Remove active class on scroll
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// Typed.js animation
const typed = new Typed('.multiple-text', {
  strings: ['.Net Full Stack Developer'],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true
});

// EmailJS initialization
(function () {
  emailjs.init("19Yzj8e5gPs-k7arH");
})();

// Contact form submission
const form = document.getElementById("contact-form1");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("service_1fqps88", "template_xpokdwf", this)
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      }, (error) => {
        console.error("FAILED...", error);
        alert("Failed to send. Try again.");
      });
  });
} else {
  console.warn("Form with ID 'contact-form1' not found.");
}
