import ElementData from "../../../shared/utils/ElementData";

export default function calculatorButtonsContainer(...components)
{
  return new ElementData
  (
    'div',
    'calculator-buttons-container',
    {},
    [...components]
  ).renderElement();
}