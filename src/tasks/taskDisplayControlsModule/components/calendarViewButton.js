import iconContainer from "../../../shared/components/icon";
import iconsMap from "../../../shared/utils/iconsMap";
import dashboardEventsManager from "../../../dashboard/shared/utils/dashboardEventsManager";
import dashboardEvents from "../../../dashboard/shared/events/dashboardEvents";

export default function calendarViewButton()
{
  const element = iconContainer(iconsMap.calendar.icon, 'Calendar View');

  element.addEventListener('click', () => dashboardEventsManager.emit(dashboardEvents.renderCalendar));

  return element;
}