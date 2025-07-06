// script.js
function checkPassword(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    const password = document.getElementById("password").value;
    const correctPassword = "2025"; // Contraseña cambiable
    if (password === correctPassword) {
        document.getElementById("password-protect").style.display = "none";
        document.getElementById("protected-content").style.display = "block";
    } else {
        document.getElementById("error-message").style.display = "block";
    }
}
