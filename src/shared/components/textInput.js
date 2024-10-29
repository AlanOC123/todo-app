import createElement from "../utils/createElement";
import ElementData from "../utils/ElementData";
import label from "./label";

export function textInput(id, name, placeholder, maxlength) {
  return new ElementData
  (
    "input",
    "",
    {
      id: id,
      name: name,
      placeholder: placeholder,
      type: "text",
      maxlength: maxlength,
    },
    []
  ).renderElement()
}

export function textInputContainer(labelFor, labelText) {
  return createElement(
    new ElementData("div", "", {}, [
      label(labelText, labelFor),
    ]).createElementData()
  );
}
