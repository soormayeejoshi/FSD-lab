document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    const errors = [];

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const reason = document.getElementById("reason").value;
    const message = document.getElementById("message").value.trim();
    const terms = document.getElementById("terms").checked;

    const status = document.getElementById("formStatus");

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/;

    if(name.length < 3){
        errors.push("• Name must be at least 3 characters.");
    }

    if(!emailPattern.test(email)){
        errors.push("• Enter a valid email address.");
    }

    if(!phonePattern.test(phone)){
        errors.push("• Phone number must be exactly 10 digits.");
    }

    if(subject.length < 5){
        errors.push("• Subject must be at least 5 characters.");
    }

    if(reason === ""){
        errors.push("• Please select a reason for contact.");
    }

    if(message.length < 15){
        errors.push("• Message should be at least 15 characters.");
    }

    if(!terms){
        errors.push("• You must agree to be contacted.");
    }

    if(errors.length > 0){
        status.style.color = "red";
        status.innerHTML = errors.join("<br>");
        return;
    }

    status.style.color = "green";
    status.textContent = "Message sent successfully!";
    document.getElementById("contactForm").reset();
});
