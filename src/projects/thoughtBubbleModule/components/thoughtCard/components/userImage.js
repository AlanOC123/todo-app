import ElementData from "../../../../../shared/utils/ElementData";
import events from "../../../../../shared/events/events";
import eventsManager from '../../../../../shared/utils/eventsManager';
import thoughtBubbleEventsManager from "../../../events/thoughtBubbleEventsManager";
import thoughtBubbleEvents from "../../../events/thoughtBubbleEvents";

export default function userImage(thoughtClass)
{
  if (!thoughtClass)
  {
    return;
  };

  const imageElement = new ElementData
  (
    'div',
    'thought-card-user-image',
    {},
    []
  ).renderElement();

  const element = new ElementData
  (
    'div',
    'thought-card-user-image-wrapper',
    {},
    [ imageElement ]
  ).renderElement();

  function setImage({ thought })
  {
    if (thought !== thoughtClass) return;

    const user = thoughtClass.getThoughtUser();
    imageElement.style.backgroundImage = `url(${user.picture})`;
  };

  function imageChanged()
  {
    if (thoughtClass.getIsThoughtSystemGenerated())
    {
      return;
    }

    const user = thoughtClass.getThoughtUser();
    imageElement.style.backgroundImage = `url(${user.picture})`;
  }

  setImage({ thought: thoughtClass });
  eventsManager.on(events.pictureChanged, imageChanged);
  thoughtBubbleEventsManager.on(thoughtBubbleEvents.messageEdited, setImage);
  return element;
}