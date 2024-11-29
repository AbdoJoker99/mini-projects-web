document.addEventListener('DOMContentLoaded', () => {
    const passBox = document.getElementById('passBox');
    const inputSlider = document.getElementById('inputSlider');
    const sliderValue = document.getElementById('sliderValue');
    const lowerCase = document.getElementById('lowercase');
    const upperCase = document.getElementById('uppercse');
    const numbers = document.getElementById('numbers');
    const symbols = document.getElementById('symbols');
    const generateBtn = document.getElementById('getBtn');
    const copyIcon = document.querySelector('.fa-copy');

    sliderValue.textContent = inputSlider.value;

    inputSlider.addEventListener('input', () => {
        sliderValue.textContent = inputSlider.value;
    });

    const generatePassword = () => {
        const length = inputSlider.value;
        let characters = '';
        let password = '';

        if (lowerCase.checked) characters += 'abcdefghijklmnopqrstuvwxyz';
        if (upperCase.checked) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (numbers.checked) characters += '0123456789';
        if (symbols.checked) characters += '!@#$%^&*()_+[]{}|;:,.<>?';

        if (!characters) {
            alert('Please select at least one option!');
            return;
        }

        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        passBox.value = password;
    };

    const copyToClipboard = () => {
        if (passBox.value) {
            navigator.clipboard.writeText(passBox.value);
            alert('Password copied to clipboard!');
        } else {
            alert('Generate a password first!');
        }
    };

    generateBtn.addEventListener('click', generatePassword);
    copyIcon.addEventListener('click', copyToClipboard);
});
