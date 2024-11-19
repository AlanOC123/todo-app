import ElementData from "../../../shared/utils/ElementData";

export default function controlMonthBackground(...components)
{
  return new ElementData
  (
    'div',
    'month-controller',
    {},
    [ ...components ]
  ).renderElement()
};