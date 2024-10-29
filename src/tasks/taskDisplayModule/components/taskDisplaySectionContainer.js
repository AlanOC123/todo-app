import ElementData from "../../../shared/utils/ElementData";

export default function taskDisplaySectionContainer(id, ...components)
{
  return new ElementData
  (
    'div',
    'task-display-section',
    {
      id: id
    },
    [...components]
  ).renderElement()
}