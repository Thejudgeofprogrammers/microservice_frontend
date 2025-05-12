const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active')
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active')
});

const toggleButton = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    toggleButton.textContent = "☀️";
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "🌙";
    }
});