import ElementData from "../../../shared/utils/ElementData";

export default function calculatorBody(...components)
{
  return new ElementData
  (
    'div',
    'calculator',
    {
      id: 'calculator'
    },
    [...components]
  ).renderElement();
}