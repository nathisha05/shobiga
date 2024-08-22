document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.querySelector('input[name="Firstname"]').value.trim();
    const lastName = document.querySelector('input[name="Lastname"]').value.trim();
    const email = document.querySelector('input[name="Email"]').value.trim();
    const contact = document.querySelector('input[name="Contact"]').value.trim();
    const address = document.querySelector('input[name="Address"]').value.trim();
    const city = document.querySelector('input[name="City"]').value.trim();

    if (!firstName || !lastName || !email || !contact || !address || !city) {
      alert("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const contactRegex = /^[0-9]{10,15}$/; // Accepts 10 to 15 digits
    if (!contactRegex.test(contact)) {
      alert("Please enter a valid contact number (10-15 digits).");
      return;
    }

    alert("Submitted successfully!");
    
    
    setTimeout(function() {
        location.reload(); 
    }, 1000); 
});







