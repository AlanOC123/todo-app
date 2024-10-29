import ElementData from "../../../shared/utils/ElementData";

export default function timerDisplayContainer(...components)
{
  return new ElementData
  (
    'div',
    'timer-display-container',
    {},
    [...components]
  ).renderElement();
}