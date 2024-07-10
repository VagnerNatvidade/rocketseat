import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { IMC, notANumber } from "./utils.js";

const frm = document.getElementById("form");
const inWeigth = document.querySelector("#weight");
const inHeigth = document.querySelector("#height");

frm.onsubmit = (event) => {
  event.preventDefault();

  const weight = inWeigth.value;
  const height = inHeigth.value;

  const showAlertError = notANumber(weight) || notANumber(height);

  if (showAlertError) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};

inWeigth.oninput = () => AlertError.close();
inHeigth.oninput = () => AlertError.close();
