import ElementData from "../../../shared/utils/ElementData";
import calendarState from "../../shared/utils/calendarState";
import monthSelected from "../utils/monthSelected";

export default function selectMonthButton({ textValue, monthIndex })
{
  const element = new ElementData
  (
    'li',
    'select-month-button',
    {},
    [ ...textValue ]
  ).renderElement();

  if (monthIndex === calendarState.currentMonth)
  {
    element.classList.add('active-month-button');
  }

  function monthClicked()
  {
    monthSelected(element, monthIndex);
  }

  element.addEventListener('click', monthClicked);

  return element;
}