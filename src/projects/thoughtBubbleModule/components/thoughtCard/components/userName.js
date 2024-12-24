import ElementData from "../../../../../shared/utils/ElementData";
import events from "../../../../../shared/events/events";
import eventsManager from '../../../../../shared/utils/eventsManager';
import thoughtBubbleEventsManager from "../../../events/thoughtBubbleEventsManager";
import thoughtBubbleEvents from "../../../events/thoughtBubbleEvents";

export default function userName(thoughtClass)
{
  if (!thoughtClass)
  {
    return;
  };

  const element = new ElementData
  (
    'div',
    'thought-card-user-name',
    {},
    []
  ).renderElement();

  if (thoughtClass.getIsThoughtSystemGenerated())
  {
    element.classList.add('system');
  }

  function setName({ thought })
  {
    if (thought !== thoughtClass) return;
    const user = thoughtClass.getThoughtUser();
    element.textContent = user.name;
  };

  function nameChanged()
  {
    if (thoughtClass.getIsThoughtSystemGenerated()) return;

    const user = thoughtClass.getThoughtUser();
    element.textContent = user.name;
  }

  setName({ thought: thoughtClass });
  eventsManager.on(events.nameChanged, nameChanged);
  thoughtBubbleEventsManager.on(thoughtBubbleEvents.messageEdited, setName);

  return element;
}