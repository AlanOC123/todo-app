import ElementData from "../../utils/classes/ElementData";
import createElement from "../../utils/classes/createElement";

export default function submitButton() {
  const elementData = new ElementData(
    'button',
    'flex flex-center button shadow',
    {},
    ['Submit']
  ).createElementData();

  return createElement(elementData);
};