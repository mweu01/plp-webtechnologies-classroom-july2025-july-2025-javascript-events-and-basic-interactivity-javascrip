//DOM property
document.getElementById("myInput").oninput = function() {
    console.log("Input changed to: " + this.value);
}  

// FAQ Toggle Functionality
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

//form validation
document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission for demonstration

    //fetch form values
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    //clear previous errors
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    let isValid = true;

    //validate username
    if (username === "") {
        document.getElementById("usernameError").innerText = "Username is required.";
        isValid = false;
    } else if (username.length < 3) {
        document.getElementById("usernameError").innerText = "Username must be at least 3 characters.";
        isValid = false;
    }

    //validate email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    //validate password
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters, including letters and numbers.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully! And that marks the end of week 6.");
        document.getElementById("myForm").reset();
    }

}
