import iconContainer from "../../../shared/components/icon";
import iconsMap from "../../../shared/utils/iconsMap";
import productivityToolEventManager from "../../shared/utils/productivityToolEventManager";
import productivityToolEvents from "../../shared/events/productivityToolEvents";
import productivityState from "../../shared/utils/productivityToolState";
import playButton from "./playButton";

export default function pauseButton()
{
  const element = iconContainer(iconsMap.pause.icon, null);
  element.id = 'pause-button';
  element.addEventListener('click', () => 
  {
    productivityState.timer.isPaused = true;
    productivityState.timer.isActive = false;
    element.replaceWith(playButton());
    productivityToolEventManager.emit(productivityToolEvents.pauseTimer);
  })

  return element;
}