const form = document.getElementById("form");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorText = password.parentElement.querySelector(".error");


form.addEventListener("submit", e => {
    e.preventDefault();
    
    validateInputs();
});

function validateInputs() {
    if (password.value !== confirmPassword.value) {
        errorText.textContent = "* Passwords do not match";
    } else {
        errorText.textContent = "";
    }
}

