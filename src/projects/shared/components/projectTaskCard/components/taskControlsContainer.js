import ElementData from "../../../../../shared/utils/ElementData";

export default function taskControlsContainer(...components)
{
  return new ElementData
  (
    'div',
    'task-controls',
    {},
    [...components]
  ).renderElement()
};