import ElementData from "../../../shared/utils/ElementData";
import populateCalendar from "../utils/populateCalendar";
import addCalendarDates from "../utils/addCalendarDates";
import calendarEventsManager from "../../shared/utils/calendarEventsManager";
import calendarEvents from "../../shared/events/calendarEvents";

export default function calendarDisplay(...components)
{
  const element = new ElementData
  (
    'div',
    'calendar-display',
    {},
    [ ...components ]
  ).renderElement();

  renderCalendar();

  function renderCalendar()
  {
    populateCalendar(element);
  }

  calendarEventsManager.on(calendarEvents.calendarDaysUpdated, renderCalendar)

  return element;
}