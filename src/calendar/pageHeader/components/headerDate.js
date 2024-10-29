import updateDate from "../utils/updateDate";
import eventsManager from "../../../shared/utils/eventsManager";
import events from "../../../shared/events/events";
import ElementData from "../../../shared/utils/ElementData";

export default function headerDate()
{
  const element = new ElementData
  (
    'p',
    'header-date',
    {},
    []
  ).renderElement();

  updateDate(element);

  eventsManager.on(events.updateTime, () => updateDate(element));

  return element;
}