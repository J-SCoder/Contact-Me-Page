document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Create a mailto link with the form values
    var mailtoLink = "mailto:your-yashbochiwal@gmail.com" +
                     "?subject=Contact Us - Message from " + encodeURIComponent(name) +
                     "&body=" + encodeURIComponent(message + "\n\nFrom: " + name + "\nEmail: " + email);
    
    // Open the mail client with the mailto link
    window.location.href = mailtoLink;
  });
  