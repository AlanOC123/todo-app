import profilePicture from "../../../shared/components/profilePicture";
import updateToolTip from "../utils/updateToolTip";
import showToolTip from "../events/showToolTip";
import eventsManager from "../../../shared/utils/eventsManager";
import events from "../../../shared/events/events";

export default function navMenuPicture()
{
  const element = profilePicture('nav-menu-picture');
  element.dataset.tooltip = '';

  updateToolTip(element)

  element.addEventListener('mouseenter', showToolTip);
  element.addEventListener('mouseleave', showToolTip);
  eventsManager.on(events.nameChanged, () => updateToolTip(element));

  return element;
};