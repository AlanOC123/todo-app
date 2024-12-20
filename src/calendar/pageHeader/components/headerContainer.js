import ElementData from "../../../shared/utils/ElementData";

export default function headerContainer(...components)
{
  return new ElementData
  (
    'div',
    'calendar-header',
    {},
    [...components]
  ).renderElement();
};