import ElementData from "../../../shared/utils/ElementData";
import productivityToolEvents from "../../shared/events/productivityToolEvents";
import productivityToolEventManager from "../../shared/utils/productivityToolEventManager";
import productivityState from '../../shared/utils/productivityToolState';
import updateInput from "../utils/updateInput";

export default function calculatorInputDisplay(...components)
{
  const element = new ElementData
  (
    'div',
    'calculator-input-display',
    {},
    [...components]
  ).renderElement();

  element.textContent = updateInput();

  function updateText()
  {
    element.textContent = updateInput()
  }

  productivityToolEventManager.on(productivityToolEvents.calculatorInputUpdated, updateText);
  return element;
}