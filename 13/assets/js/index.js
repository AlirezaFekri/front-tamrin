const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
togglePassword.style.cursor = "pointer";
togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    togglePassword.className = password.getAttribute("type") === "password"? "fa-solid fa-eye-slash right" : "fa-solid fa-eye right";
});
