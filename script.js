 let menu = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');

 menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 }

 window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
 }

 const typed = new Typed('.multiple-text', {
      strings: ['Frontend Developer', 'Backend Developer','.Net Developer'],
      typeSpeed: 80,
      backspeed: 80,
      backdelay: 1200,
      loop: true,
    });

 
    (function(){
        emailjs.init("19Yzj8e5gPs-k7arH");
      })();
      
      document.getElementById("contact-form1").addEventListener("submit", function(e) {
        e.preventDefault();
        emailjs.sendForm("service_1fqps88", "template_xpokdwf", this)
          .then(() => {
            alert("Message sent successfully!");
            this.reset();
          }, (error) => {
            console.log("FAILED...", error);
            alert("Failed to send. Try again.");
          });
      });

 
