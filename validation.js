document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for now

    // Get the username input
    const username = document.getElementById('username').value;

    // RegEx pattern: Only alphanumeric characters allowed
    const usernamePattern = /^[a-zA-Z0-9]+$/;

    // Dummy username for testing
    const validUsername = 'TestUser123';

    if (!usernamePattern.test(username)) {
        alert("Invalid username! Only letters and numbers are allowed.");
    } else if (username !== validUsername) {
        alert("Username not found. Please try again.");
    } else {
        alert("Login successful!"); // Simulate successful login
        // You can redirect to another page after successful login
        // window.location.href = 'dashboard.html';
    }
});