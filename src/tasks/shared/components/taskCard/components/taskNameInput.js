import ElementData from "../../../../../shared/utils/ElementData";
import changeTaskName from '../utils/changeTaskName';
import changeNameInputElement from '../utils/changeNameInputElement';
import taskViewportEventManager from "../../../../tasksViewportModule/events/taskViewportEventsManager";
import taskViewportEvents from "../../../../tasksViewportModule/events/taskViewportEvents";

export default function taskNameInput(taskClass)
{
  const element = new ElementData
  (
    'input',
    'task-card-name-input',
    {
      type:'text',
      min: '2',
      max: '30',
      placeholder: taskClass.getTaskName()
    }
  ).renderElement();

  function elementBlurred()
  {
    changeTaskName(element, taskClass);
  }

  function nameChanged({ task })
  {
    if (task !== taskClass) return;
    changeNameInputElement(element, taskClass);
  }

  element.onblur = elementBlurred;

  taskViewportEventManager.on(taskViewportEvents.taskNameChanged, nameChanged)

  return element;
}