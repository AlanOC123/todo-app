import calendarState from "../../shared/utils/calendarState";
import calendarEventsManager from '../../shared/utils/calendarEventsManager';
import calendarEvents from "../../shared/events/calendarEvents";

export default function monthSelected(monthButton, monthIndex)
{
  const selectedButton = document.querySelector('.active-month-button');

  if (selectedButton)
  {
    if (selectedButton !== monthButton)
    {
      selectedButton.classList.remove('active-month-button');
      monthButton.classList.add('active-month-button');
      calendarState.currentMonth = monthIndex;
      calendarEventsManager.emit(calendarEvents.calendarDaysUpdated);
      return;
    }
  };

  monthButton.classList.add('active-month-button');
  calendarState.currentMonth = monthIndex;
  calendarEventsManager.emit(calendarEvents.calendarDaysUpdated);
}