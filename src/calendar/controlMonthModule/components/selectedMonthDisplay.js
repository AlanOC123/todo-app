import ElementData from "../../../shared/utils/ElementData";
import calendarEventsManager from '../../shared/utils/calendarEventsManager';
import calendarEvents from '../../shared/events/calendarEvents';
import updateMonthDisplay from "../utils/updateMonthDisplay";

export default function selectedMonthDisplay()
{
  const element = new ElementData
  (
    'p',
    'current-month-display',
    {},
    []
  ).renderElement();

  monthChanged();

  function monthChanged()
  {
    updateMonthDisplay(element);
  }

  calendarEventsManager.on(calendarEvents.calendarDaysUpdated, monthChanged);

  return element;
}