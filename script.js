function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === "" || password === "") {
        errorMessage.textContent = "Username and password are required.";
        return false;
    }

    if (username !== "user" || password !== "pass") {
        errorMessage.textContent = "Invalid username or password.";
        return false;
    }

    alert("Login successful!");
    return true;
}
