document.addEventListener("DOMContentLoaded", () => {
    // Get references to elements
    const inputText = document.getElementById("inputtext");
    const result = document.getElementById("result");
    const button = document.querySelector("button");

    // Function to count vowels
    const countVowels = () => {
        const text = inputText.value.toLowerCase(); // Convert input to lowercase
        const vowels = "aeiou";
        let vowelCount = 0;

        for (const char of text) {
            if (vowels.includes(char)) {
                vowelCount++;
            }
        }

        result.textContent = `Number of vowels: ${vowelCount}`;
    };

    // Attach event listener to the button
    button.addEventListener("click", countVowels);
});
