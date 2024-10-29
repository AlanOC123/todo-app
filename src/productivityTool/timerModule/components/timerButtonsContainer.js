import ElementData from "../../../shared/utils/ElementData";

export default function timerButtonsContainer(...components)
{
  return new ElementData
  (
    'div',
    'timer-buttons-container',
    {},
    [...components]
  ).renderElement();
}