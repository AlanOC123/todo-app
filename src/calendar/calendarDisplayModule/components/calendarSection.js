import ElementData from "../../../shared/utils/ElementData";

export default function calendarSection(...components)
{
  const element = new ElementData
  (
    'div',
    'calendar-section',
    {},
    [...components]
  ).renderElement();

  return element;
}