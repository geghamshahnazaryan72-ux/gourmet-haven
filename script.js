document.getElementById('resForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your table has been successfully reserved.');
    this.reset();
});