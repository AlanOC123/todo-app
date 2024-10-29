import ElementData from "../../../shared/utils/ElementData";
import productivityToolState from '../../shared/utils/productivityToolState';
import productivityEventsManager from '../../shared/utils/productivityToolEventManager';
import productivityToolEvents from "../../shared/events/productivityToolEvents";
import updateTimerDisplay from '../utils/updateTimerDisplay';

export default function timeDisplay()
{
  const element = new ElementData
  (
    'p',
    'timer-time-display',
    {},
    []
  ).renderElement();

  function updateDisplay(textObject)
  {
    element.textContent = updateTimerDisplay(textObject)
  }

  element.textContent = updateTimerDisplay({ displayText: 'Select Time' });

  productivityEventsManager.on(productivityToolEvents.startTimer, updateDisplay);
  productivityEventsManager.on(productivityToolEvents.falseStart, updateDisplay);
  productivityEventsManager.on(productivityToolEvents.timeSelected, updateDisplay);
  productivityEventsManager.on(productivityToolEvents.timerCompleted, updateDisplay);
  productivityEventsManager.on(productivityToolEvents.timerUpdated, updateDisplay);


  return element;
};