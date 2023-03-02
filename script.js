const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/";

function generatePassword() {
    const passwordLength = document.getElementById("password-length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    let characters = lowercaseLetters;
    let password = "";

    if (includeUppercase) {
        characters += uppercaseLetters;
    }
    if (includeNumbers) {
        characters += numbers;
    }
    if (includeSymbols) {
        characters += symbols;
    }

    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("password").textContent = password;
}

document.getElementById("generate-password").addEventListener("click", generatePassword);
