import ElementData from "../../../shared/utils/ElementData";
import timeManager from "../../../shared/utils/timeManager";

export default function selectDayListTextNode(dayText)
{
  const element = new ElementData
  (
    'li',
    'select-day-list-item',
    {},
    [dayText]
  ).renderElement();

  if (timeManager.day === dayText) {
    element.classList.add('day-selected');
  }

  return element;
}