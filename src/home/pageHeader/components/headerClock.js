import updateClock from "../utils/updateClock";
import eventsManager from "../../../shared/utils/eventsManager";
import events from "../../../shared/events/events";
import ElementData from "../../../shared/utils/ElementData";

export default function headerClock()
{
  const element = new ElementData
  (
    'p',
    'header-clock',
    {},
    []
  ).renderElement();

  updateClock(element);

  eventsManager.on(events.updateTime, () => updateClock(element));

  return element;
}