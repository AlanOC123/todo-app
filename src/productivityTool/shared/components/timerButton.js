import iconContainer from "../../../shared/components/icon";
import ElementData from "../../../shared/utils/ElementData";
import iconsMap from "../../../shared/utils/iconsMap";
import toggleModal from "../utils/toggleModal";
import toggleModule from "../utils/toggleModule";
import updateIcon from "../../timerModule/utils/updateIcon";
import productivityToolEventManager from "../utils/productivityToolEventManager";
import productivityToolEvents from "../events/productivityToolEvents";

export default function timerButton()
{
  const timerIcon = iconContainer(iconsMap.timer.icon);

  let element = new ElementData
  (
    'div',
    'timer-data open-module',
    {},
    [
      timerIcon
    ]
  ).renderElement()

  element.addEventListener('click', (e) => { toggleModal(e), toggleModule(e) });

  function updateIconStyle()
  {
    updateIcon(timerIcon)
  }

  productivityToolEventManager.on(productivityToolEvents.timerUpdated, updateIconStyle);
  productivityToolEventManager.on(productivityToolEvents.timerCompleted, updateIconStyle);
  element.addEventListener('mouseenter', () => productivityToolEventManager.emit(productivityToolEvents.buttonTextUpdated, { buttonText: 'Timer' }));
  element.addEventListener('mouseleave', () => productivityToolEventManager.emit(productivityToolEvents.buttonTextUpdated));
  return element;
}