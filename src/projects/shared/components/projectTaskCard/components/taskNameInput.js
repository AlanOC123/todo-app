import ElementData from "../../../../../shared/utils/ElementData";
import setTaskName from "../utils/setTaskName";

export default function taskNameInput()
{
  const element = new ElementData
  (
    'input',
    'task-name-display',
    {
      type: 'text',
      minlength: 2,
      maxlength: 30,
      placeholder: 'Task Name',
    },
    []
  ).renderElement();

  function userMovedAway()
  {
    setTaskName(element);
  }

  element.addEventListener('blur', userMovedAway);

  return element;
};