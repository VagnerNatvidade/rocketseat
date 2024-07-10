let darkMode = true;
const btnToggle = document.getElementById("toggle-mode");

btnToggle.addEventListener("click", (event) => {
  document.documentElement.classList.toggle("light");

  const mode = darkMode ? "Light" : "Dark";
  event.currentTarget.querySelector("span").textContent = `${mode} ativado`;

  darkMode = !darkMode;
});
