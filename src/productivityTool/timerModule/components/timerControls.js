import ElementData from "../../../shared/utils/ElementData";

export default function timerControls(...nodes)
{
  return new ElementData
  (
    'div',
    'timer-controls',
    {},
    [...nodes]
  ).renderElement();
};