// Variáveis
const btnTry = document.getElementById("btnTry");
const btnReset = document.getElementById("btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Callback
function handleTryClick(event) {
  event.preventDefault();

  const inNumber = document.getElementById("inNumber");

  if (Number(inNumber.value) == randomNumber) {
    toggleScreen();

    document.querySelector(
      "h2"
    ).innerHTML = `Você acertou em ${xAttempts} tentativas`;
  } else if (xAttempts >= 10) {
    toggleScreen();
    document.querySelector(
      "h2"
    ).innerHTML = `Numero de tentativas excedido(${xAttempts}). Tente novamente!`;
  }

  inNumber.value = "";
  inNumber.focus();
  xAttempts++;
  console.log(randomNumber);
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  inNumber.focus();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

// Event
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
