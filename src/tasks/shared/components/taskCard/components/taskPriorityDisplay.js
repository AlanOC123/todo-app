import ElementData from "../../../../../shared/utils/ElementData";
import taskPriorityInput from "./taskPriorityInput";

export default function taskPriorityDisplay(taskClass)
{
  const currentPriority = taskClass.getTaskPriority();

  const element = new ElementData
  (
    'p',
    'task-card-priority-display',
    {},
    [`${currentPriority}`]
  ).renderElement();

  const classMap =
  {
    'Low': 'low',
    'Medium': 'medium',
    High: 'high',
  };

  element.classList.add(classMap[currentPriority]);

  function elementClicked()
  {
    element.replaceWith(taskPriorityInput(taskClass));
  };

  element.onclick = elementClicked;

  return element;
}