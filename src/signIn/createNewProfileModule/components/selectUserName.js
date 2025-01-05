import ElementData from "../../../utils/ElementData";
import errorHandler from "../../../utils/errorHandler";

export default function selectUserName(newUser) {
  const inputElement = new ElementData(
    "input",
    "select-name-input",
    {
      min: 2,
      max: 30,
      placeholder: newUser.name,
      id: "select-name-input",
    },
    []
  ).renderElement();

  const labelElement = new ElementData(
    "label",
    "select-name-label",
    {
      for: "select-name-input",
    },
    ["Name:"]
  ).renderElement();

  const element = new ElementData("div", "select-name", {}, [
    labelElement,
    inputElement,
  ]).renderElement();

  function elementBlurred()
  {
    const min = 2;
    const max = 30;
    const val = inputElement.value;
    if (!val || val.length < min || val.length > max)
    {
      inputElement.classList.add('error');
      return errorHandler({ message: `Invalid name. Must be longer than ${min} and shorter than ${max}`, variables: { val } })
    }
    newUser.name = val;
  }

  inputElement.onblur = elementBlurred;

  return element;
}
