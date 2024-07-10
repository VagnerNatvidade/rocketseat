export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector("h2.title"),
  btnClose: document.getElementById("close"),

  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  },
};

Modal.btnClose.onclick = () => {
  Modal.close();
  weight.value = "";
  height.value = "";
};

const handleKeydown = (event) => {
  if (event.key === "Escape") {
    Modal.close();
  }
};

window.addEventListener("keydown", handleKeydown);
