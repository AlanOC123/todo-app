import ElementData from "../../../shared/utils/ElementData";
import iconContainer from '../../../shared/components/icon';
import productivityToolEventManager from "../../shared/utils/productivityToolEventManager";
import productivityToolEvents from "../../shared/events/productivityToolEvents";

export default function calculatorKey({ value, type, icon })
{
  const element = new ElementData
  (
    'div',
    'calculator-key',
    {
      'data-value': value,
      'data-type': type,
    },
    [iconContainer(icon, null)]
  ).renderElement();

  element.addEventListener
  (
    'click', () => 
    productivityToolEventManager.emit
    (
      productivityToolEvents.calculatorUpdated, { value: value, type: type }
    )
  )

  return element;
}