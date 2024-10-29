import ElementData from "../../../../../shared/utils/ElementData";

export default function taskCardHeader({ title })
{
  const element = new ElementData
  (
    "p", 
    "task-card-header", 
    {}, 
    [title]
  ).renderElement()

  return element;
}