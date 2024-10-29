import ElementData from "../../../shared/utils/ElementData";

export default function tasksControlsContainer(...components)
{
  return new ElementData
  (
    'section',
    'task-viewport-controls',
    {},
    [...components]
  ).renderElement();
};