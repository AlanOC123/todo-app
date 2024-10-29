import productivityToolState from '../../shared/utils/productivityToolState';
import timerButtonValues from './timerButtonValues';
import productivityToolEventManager from '../../shared/utils/productivityToolEventManager';
import productivityToolEvents from '../../shared/events/productivityToolEvents';

export default function setTimer(e, element)
{
  const value = e.target.textContent;
  let stateObject = [...timerButtonValues.values()].find(object => object.textValue === value);

  if (!e || !value)
  {
    return;
  }

  const selectedElement = document.querySelector('.time-selected');

  if (selectedElement)
  {
    if (selectedElement !== element)
    {
      selectedElement.classList.remove('time-selected');
      element.classList.add('time-selected');
    }
  } else
  {
    element.classList.add('time-selected');
  }

  productivityToolState.timer.currentTimeSet = stateObject.totalTime;
  productivityToolState.timer.currentTotalTime = stateObject.totalTime;
  productivityToolState.timer.currentTimeOn = stateObject.timeOn;
  productivityToolState.timer.currentTimeOff = stateObject.timeOff;
  productivityToolState.timer.currentTimeIndex = value;

  productivityToolEventManager.emit(productivityToolEvents.timeSelected);
}