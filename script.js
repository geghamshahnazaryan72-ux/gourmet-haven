document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('TRANSMISSION SUCCESSFUL: Your message has been sent, Gegham.');
    this.reset();
});