const fortuneCoockie = document.getElementById("fortuneCoockie");
const button = document.getElementById("reset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const message = document.getElementById("message");

const messages = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
];

const toggleScreen = () => {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
};

const randomMessage = () => {
  toggleScreen();

  const num = Math.round((Math.random() * 10) / 2);
  message.innerText = messages[num];
};

fortuneCoockie.addEventListener("click", randomMessage);
button.addEventListener("click", toggleScreen);
