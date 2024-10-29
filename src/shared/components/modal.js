import createElement from "../utils/createElement";
import ElementData from "../utils/ElementData";

export default function modal(...sections) {
  const element = createElement(
    new ElementData(
      "div",
      "modal",
      {
        id: "modal",
      },
      [
        createElement(
          new ElementData("section", "modal-form", {}, [...sections])
        ),
      ]
    )
  );

  element.addEventListener("click", closeModal);
  return element;
}

function closeModal(event) {
  const parent = document.querySelector("#dashboard");
  if (event.target.id === "modal") {
    if (Array.from(parent.children).includes(event.target)) {
      parent.removeChild(event.target);
    }
  } else {
    return;
  }
}
