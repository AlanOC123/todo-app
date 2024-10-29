import ElementData from "../../../shared/utils/ElementData";

export default function timerBody(...components)
{
  return new ElementData
  (
    'div',
    'timer',
    {
      id: 'timer'
    },
    [...components]
  ).renderElement();
}