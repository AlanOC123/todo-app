import ElementData from "../../../shared/utils/ElementData";
import productivityToolEventManager from '../utils/productivityToolEventManager';
import productivityToolEvents from '../events/productivityToolEvents';
import changeButtonText from '../utils/changeButtonText';

export default function toolButtonText()
{
  const element = new ElementData
  (
    'p',
    'productivity-tool-text',
    {},
    []
  ).renderElement();

  function updateText(textObject)
  {
    element.textContent = changeButtonText(textObject);
  }

  element.textContent = changeButtonText();
  productivityToolEventManager.on(productivityToolEvents.timerUpdated, updateText);
  productivityToolEventManager.on(productivityToolEvents.timerCompleted, updateText);
  productivityToolEventManager.on(productivityToolEvents.buttonTextUpdated, updateText);
  return element;
}