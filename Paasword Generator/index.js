const generateBtn = document.getElementById("generate")
const passwordField = document.getElementById("password")

generateBtn.addEventListener("click", () => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let password = " ";
    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex]
    }

    passwordField.value = password;




})
