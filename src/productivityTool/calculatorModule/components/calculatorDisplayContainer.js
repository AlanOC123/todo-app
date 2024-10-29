import ElementData from "../../../shared/utils/ElementData";

export default function calculatorDisplayContainer(...components)
{
  return new ElementData
  (
    'div',
    'calculator-display-container',
    {},
    [...components]
  ).renderElement();
}