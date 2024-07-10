import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";

export const toggleRunning = () => {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countDown();
};

export const reset = () => {
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  timer.updateDisplay();
};

export const moreFiveMinutes = () => {
  state.minutes = Number(state.minutes) + 5;
  state.isRunning = false;

  timer.updateDisplay();
};

export const minusFiveMinutes = () => {
  state.minutes = Number(state.minutes) - 5;
  state.isRunning = false;

  if (state.minutes < 0) {
    state.minutes = 0;
    return;
  }

  timer.updateDisplay();
};

export const toggleMusic = () => {
  let btnSound = event.target.id;
  state[btnSound].isMute = !state[btnSound].isMute;

  Array.from(document.querySelectorAll(".sound")).map((x) => {
    let btn = x.id;
    console.log(x.id);

    state[btn].isMute;
    console.log(state[btn].isMute);

    if (state[btnSound].isMute == false) {
      if (btnSound == "tree") {
        sounds.tree.play();
      } else if (btnSound == "cloudRain") {
        sounds.cloudRain.play();
      } else if (btnSound == "storeFront") {
        sounds.storeFront.play();
      } else if (btnSound == "flame") {
        sounds.flame.play();
      }
    } else if (state[btnSound].isMute == true) {
      if (btnSound == "tree") {
        sounds.tree.pause();
      } else if (btnSound == "cloudRain") {
        sounds.cloudRain.pause();
      } else if (btnSound == "storeFront") {
        sounds.storeFront.pause();
      } else if (btnSound == "flame") {
        sounds.flame.pause();
      }
    }
  });

  document.getElementById(btnSound).classList.toggle("sound-on");
};
