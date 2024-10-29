import ElementData from "../../../shared/utils/ElementData";
import productivityToolEvents from "../../shared/events/productivityToolEvents";
import productivityToolEventManager from "../../shared/utils/productivityToolEventManager";
import updateTotal from "../utils/updateTotal";

export default function calculatorTotalDisplay(...components)
{
  const element = new ElementData
  (
    'div',
    'calculator-total-display',
    {},
    [...components]
  ).renderElement();

  productivityToolEventManager.on(productivityToolEvents.calculatorDisplayUpdated, updateTotal);

  return element;
}