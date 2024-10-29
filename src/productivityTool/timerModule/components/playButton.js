import iconContainer from "../../../shared/components/icon";
import iconsMap from "../../../shared/utils/iconsMap";
import activateTimer from "../utils/activateTimer";
import productivityToolEventManager from "../../shared/utils/productivityToolEventManager";
import productivityToolEvents from "../../shared/events/productivityToolEvents";

export default function playButton()
{
  const element = iconContainer(iconsMap.play.icon, null);
  element.addEventListener('click', () => activateTimer(element));
  element.id = 'play-button';
  productivityToolEventManager.on(productivityToolEvents.timeSelected, () => element.firstChild.style.color = 'rgba(var(--complete-clr))');
  return element;
}