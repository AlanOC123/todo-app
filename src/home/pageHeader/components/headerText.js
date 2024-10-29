import updateWelcomeMessage from "../utils/updateWelcomeMessage";
import header from "../../../shared/components/header";
import eventsManager from "../../../shared/utils/eventsManager";
import events from "../../../shared/events/events";

export default function headerText()
{
  const element = header('');

  updateWelcomeMessage(element);
  eventsManager.on(events.updateTime, () => updateWelcomeMessage(element));
  eventsManager.on(events.nameChanged, () => updateWelcomeMessage(element));

  return element;
}