function validateForm() {
    let isValid = true;
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email";
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        isValid = false;
    }

    return isValid;
}
