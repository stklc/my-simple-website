// Scroll to specific section on button click
function scrollToSection(id) {
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for reaching out to stklc! We will get back to you soon.");
  document.getElementById("contactForm").reset();
});
