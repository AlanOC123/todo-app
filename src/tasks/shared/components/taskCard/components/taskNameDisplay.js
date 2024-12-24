import ElementData from "../../../../../shared/utils/ElementData";
import taskNameInput from "./taskNameInput";

export default function taskNameDisplay(taskClass)
{
  const element = new ElementData
  (
    'p',
    'task-card-name-display',
    {},
    [ taskClass.getTaskName() ]
  ).renderElement();

  function elementClicked()
  {
    element.replaceWith(taskNameInput(taskClass));
  }

  element.onclick = elementClicked;

  return element;
}