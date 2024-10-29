import iconContainer from "../../../shared/components/icon";
import iconsMap from "../../../shared/utils/iconsMap";
import productivityToolEvents from "../../shared/events/productivityToolEvents";
import productivityToolEventManager from "../../shared/utils/productivityToolEventManager";
import productivityState from "../../shared/utils/productivityToolState";

export default function stopButton()
{
  const element = iconContainer(iconsMap.stop.icon, null);

  element.classList.add('disabled');

  element.addEventListener
  (
    'click', () => 
    {
      productivityState.timer.isActive = false;
      productivityState.timer.isPaused = false;
      productivityState.timer.isRepeated = false;
      productivityState.timer.isResting = false;

      productivityToolEventManager.emit(productivityToolEvents.stopTimer);
    }
  )

  productivityToolEventManager.on(productivityToolEvents.startTimer, () => element.classList.remove('disabled'));
  productivityToolEventManager.on(productivityToolEvents.falseStart, () => element.classList.add('disabled'));
  productivityToolEventManager.on(productivityToolEvents.stopTimer, () => element.classList.add('disabled'));

  return element;
}