import ElementData from "../../../shared/utils/ElementData";
import calendarEventsManager from "../../shared/utils/calendarEventsManager";
import calendarEvents from "../../shared/events/calendarEvents";
import expandMenu from "../utils/expandMenu";

export default function selectMonthSection(...nodes)
{
  const element = new ElementData
  (
    'div',
    'select-month-container',
    {},
    [
      new ElementData
      (
        'ul',
        'select-month-list',
        {},
        [ ...nodes ]
      ).renderElement()
    ]
  ).renderElement();

  function openMenu()
  {
    expandMenu(element);
  }

  calendarEventsManager.on(calendarEvents.selectMenuExpanded, openMenu);

  return element;
}