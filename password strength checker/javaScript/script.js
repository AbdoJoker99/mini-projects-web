// Selecting elements
const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const submitBtn = document.querySelector("button");

// Event listener for password input
password.addEventListener("input", function () {
    const passwordValue = password.value; // Fix: Use `.value` instead of `.value()`
    const passwordLength = passwordValue.length; // Fix: Correct `.length` spelling

    let strengthValue = ""; // Fix: Correct spelling of "strengthValue"

    // Determine password strength
    if (passwordLength === 0) {
        strengthValue = '';
    } else if (passwordLength < 6) {
        strengthValue = 'Weak';
    } else if (passwordLength < 10) {
        strengthValue = 'Medium'; // Fix: Correct spelling from "mediem" to "Medium"
    } else {
        strengthValue = 'Strong';
    }

    // Update strength message
    strength.textContent = strengthValue; // Set the text content of the "strength" span
    message.style.display = "block"; // Show the message container
});

// Event listener for button click to toggle password visibility
submitBtn.addEventListener("click", function () {
    const passwordType = password.getAttribute("type"); // Get the current input type

    // Toggle password input type
    if (passwordType === 'password') {
        password.setAttribute("type", "text"); // Change to text type
    } else {
        password.setAttribute("type", "password"); // Change back to password type
    }
});
