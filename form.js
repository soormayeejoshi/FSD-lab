document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let msg = document.getElementById("formMsg");

    // Email pattern
    let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === "" || email === "" || message === ""){
        msg.style.color = "red";
        msg.textContent = "Please fill all fields.";
        return;
    }

    if(!emailCheck.test(email)){
        msg.style.color = "red";
        msg.textContent = "Enter a valid email.";
        return;
    }

    msg.style.color = "green";
    msg.textContent = "Message sent successfully!";

    document.getElementById("contactForm").reset();
});
