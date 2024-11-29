function calculateAge() {
    const today = new Date();
    const birthdateInput = document.getElementById("birthdate").value;

    // Validate the input format and ensure it's in DD-MM-YYYY format
    const birthdateParts = birthdateInput.split("-");
    if (birthdateParts.length !== 3 || !/^\d{2}-\d{2}-\d{4}$/.test(birthdateInput)) {
        alert("Invalid Date Format: Please enter the date in DD-MM-YYYY format.");
        return;
    }

    const birthDay = parseInt(birthdateParts[0], 10);
    const birthMonth = parseInt(birthdateParts[1], 10) - 1; // JavaScript months are 0-indexed
    const birthYear = parseInt(birthdateParts[2], 10);

    // Create a Date object for the birth date
    const birthDate = new Date(birthYear, birthMonth, birthDay);

    // Check if the birth date is valid
    if (isNaN(birthDate.getTime()) || birthDate > today) {
        alert("Invalid Date: Please enter a valid birthdate that is not in the future.");
        return;
    }

    // Calculate age in years, months, and days
    let ageInYears = today.getFullYear() - birthDate.getFullYear();
    let ageInMonths = today.getMonth() - birthDate.getMonth();
    let ageInDays = today.getDate() - birthDate.getDate();

    // Adjust if the current month/day is before the birth month/day
    if (ageInMonths < 0 || (ageInMonths === 0 && ageInDays < 0)) {
        ageInYears--;
        ageInMonths += 12;
    }

    // Adjust age in days if the current day hasn't reached the birth day
    if (ageInDays < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthDate.getDate());
        ageInDays = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));
        ageInMonths--;
    }

    // Ensure ageInDays is between 0–30 (valid days in a month)
    if (ageInDays > 30) {
        alert("Invalid day calculation: The number of days should not exceed 30 in the current month.");
        return;
    }

    // Calculate total age in days, weeks, and seconds
    const totalAgeInDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
    const ageInWeeks = Math.floor(totalAgeInDays / 7);
    const ageInMinutes = Math.floor((today - birthDate) / (1000 * 60));
    const ageInHours = Math.floor((today - birthDate) / (1000 * 60 * 60));
    const ageInSeconds = Math.floor((today - birthDate) / 1000);

    // Display the result
    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");

    result.innerHTML = `
        <div class="result-item">
            <h3>Age:</h3>
            <p>${ageInYears} Years ${ageInMonths} Months ${ageInDays} Days</p>
        </div>
        <div class="result-item">
            <h3>Months Passed:</h3>
            <p>${ageInYears * 12 + ageInMonths}</p>
        </div>
        <div class="result-item">
            <h3>Weeks Passed:</h3>
            <p>${ageInWeeks}</p>
        </div>
        <div class="result-item">
            <h3>Days Passed:</h3>
            <p>${totalAgeInDays}</p>
        </div>
        <div class="result-item">
            <h3>Hours Passed:</h3>
            <p>${ageInHours}</p>
        </div>
        <div class="result-item">
            <h3>Minutes Passed:</h3>
            <p>${ageInMinutes}</p>
        </div>
        <div class="result-item">
            <h3>Seconds Passed:</h3>
            <p>${ageInSeconds}</p>
        </div>
    `;

    resultContainer.style.display = "block";
}

const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAge();
});
