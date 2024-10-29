import iconContainer from "../../../shared/components/icon";
import ElementData from "../../../shared/utils/ElementData";
import iconsMap from "../../../shared/utils/iconsMap";
import toggleModal from "../utils/toggleModal";
import toggleModule from "../utils/toggleModule";
import productivityState from "../utils/productivityToolState";
import productivityToolEventManager from "../utils/productivityToolEventManager";
import productivityToolEvents from "../events/productivityToolEvents";

export default function calculatorButton()
{
  const iconElement = iconContainer(iconsMap.calculator.icon);
  const lastValueDisplay = new ElementData
  (
    'p',
    '',
    {},
    []
  ).renderElement();

  const element = new ElementData
  (
    'div',
    'calculator-data open-module',
    {},
    [
      iconElement,
      lastValueDisplay,
    ]
  ).renderElement();



  element.addEventListener('click', (e) => {  toggleModal(e), toggleModule(e) });
  element.addEventListener('mouseenter', () => productivityToolEventManager.emit(productivityToolEvents.buttonTextUpdated, { buttonText: iconsMap.calculator.label }));
  element.addEventListener('mouseleave', () => productivityToolEventManager.emit(productivityToolEvents.buttonTextUpdated));

  updateLastValueDisplay();
  productivityToolEventManager.on(productivityToolEvents.calculatorDisplayHistoryUpdated, updateLastValueDisplay);

  function updateLastValueDisplay()
  {
    let value;
    let isActiveModal;

    const modal = document.querySelector('#productivity-tool-modal');

    if (modal)
    {
      isActiveModal = modal.classList.contains('active');
    } else {
      return;
    }

    if (isActiveModal)
    {
      value = '';
      lastValueDisplay.textContent = value;
      return;
    }

    const { lastValue } = productivityState.calculator;
    lastValueDisplay.textContent = lastValue === '0' ? '' : lastValue;
  }

  return element;
}