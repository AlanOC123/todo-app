import ElementData from "../../../../../shared/utils/ElementData";
import taskNameInput from "./taskNameInput";

export default function taskNameDisplay(taskName)
{
  const element = new ElementData
  (
    'p',
    'task-name-display',
    {},
    [taskName]
  ).renderElement();

  function elementClicked()
  {
    element.replaceWith(taskNameInput());
  }

  element.addEventListener('click', elementClicked);

  return element;
};