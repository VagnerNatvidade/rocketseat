import { controls, sounds } from "./elements.js";
import * as actions from "./actions.js";

export const registerControls = () => {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }

    actions[action]();
  });
};

export const registerSounds = () => {
  sounds.addEventListener("click", () => {
    const sound = event.target.dataset.sound;

    if (typeof actions[sound] != "function") {
      return;
    }

    actions[sound]();
  });
};
