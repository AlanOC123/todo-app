import ElementData from '../../../shared/utils/ElementData';
import setTimer from '../utils/setTimer';

export default function selectTimerButton({ textValue })
{
  const element = new ElementData
  (
    'button',
    'select-time-button',
    {},
    [
      textValue
    ]
  ).renderElement();

  element.addEventListener('click', (event) => setTimer(event, element));

  return element;
};