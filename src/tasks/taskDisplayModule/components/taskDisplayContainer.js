import ElementData from "../../../shared/utils/ElementData";

export default function textDisplayContainer(...components)
{
  return new ElementData
  (
    'section',
    'tasks-display',
    {
      id: 'tasks-display',
    },
    [...components]
  ).renderElement()
}