import ElementData from "../../../../../shared/utils/ElementData";
import thoughtBubbleEventsManager from "../../../events/thoughtBubbleEventsManager";
import thoughtBubbleEvents from "../../../events/thoughtBubbleEvents";

export default function thoughtContent(thoughtClass)
{
  if (!thoughtClass) { return };

  const element = new ElementData
  (
    'p',
    'thought-card-content',
    {},
    []
  ).renderElement();

  function setText({ thought })
  {
    if (thought !== thoughtClass) return;
    element.textContent = thought.getThoughtContent();
  }

  setText({ thought: thoughtClass });
  thoughtBubbleEventsManager.on(thoughtBubbleEvents.messageEdited, setText);
  return element;
}