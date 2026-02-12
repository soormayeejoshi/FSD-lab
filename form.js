document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const reason = document.getElementById("reason").value;
    const message = document.getElementById("message").value.trim();
    const terms = document.getElementById("terms").checked;
    const status = document.getElementById("formStatus");

    // Regex patterns
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10}$/;

    // Name validation
    if (name.length < 3) {
        showError("Name must be at least 3 characters.");
        return;
    }

    // Email validation
    if (!emailPattern.test(email)) {
        showError("Enter a valid email.");
        return;
    }

    // Phone validation
    if (!phonePattern.test(phone)) {
        showError("Phone must be exactly 10 digits.");
        return;
    }

    // Subject validation
    if (subject.length < 5) {
        showError("Subject must be at least 5 characters.");
        return;
    }

    // Dropdown validation
    if (reason === "") {
        showError("Please select a reason for contact.");
        return;
    }

    // Message validation
    if (message.length < 15) {
        showError("Message should be at least 15 characters.");
        return;
    }

    // Checkbox validation
    if (!terms) {
        showError("You must agree before submitting.");
        return;
    }

    // Success
    status.style.color = "green";
    status.textContent = "Message sent successfully!";
    document.getElementById("contactForm").reset();
});


function showError(message){
    const status = document.getElementById("formStatus");
    status.style.color = "red";
    status.textContent = message;
}
