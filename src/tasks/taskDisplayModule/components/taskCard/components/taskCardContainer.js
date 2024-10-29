import ElementData from "../../../../../shared/utils/ElementData";
import setTaskCardClass from "../utils/setTaskCardClass";

export default function taskCardContainer(task, ...components)
{
  return new ElementData
  (
    'li',
    `task-card-wrapper ${setTaskCardClass(task)}`,
    {},
    [
      new ElementData
      (
        "div", 
        'task-card', 
        {
          id: task.id,
        }, 
        [...components]
      ).renderElement()
    ]
  ).renderElement()
}