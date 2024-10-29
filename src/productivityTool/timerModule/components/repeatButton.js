import iconContainer from "../../../shared/components/icon";
import iconsMap from "../../../shared/utils/iconsMap";
import productivityToolEventManager from "../../shared/utils/productivityToolEventManager";
import productivityToolEvents from "../../shared/events/productivityToolEvents";
import productivityState from "../../shared/utils/productivityToolState";

export default function repeatButton()
{
  const element = iconContainer(iconsMap.repeat.icon, null);

  element.classList.add('disabled');

  element.addEventListener
  (
    'click', () =>
    {
      element.classList.toggle('repeat-active');
      if (element.classList.contains('repeat-active'))
      {
        productivityState.timer.isRepeated = true;
      } else
      {
        productivityState.timer.isRepeated = false;
      }
    }
  )

  productivityToolEventManager.on(productivityToolEvents.startTimer, () => element.classList.remove('disabled'));
  productivityToolEventManager.on(productivityToolEvents.falseStart, () => element.classList.add('disabled'));
  productivityToolEventManager.on(productivityToolEvents.stopTimer, () => element.classList.add('disabled'));

  return element;
}