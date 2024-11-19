import ElementData from "../../../shared/utils/ElementData";

export default function currentMonthControl(...components)
{
  return new ElementData
  (
    'div',
    'current-month-control',
    {},
    [ ...components ]
  ).renderElement();
}