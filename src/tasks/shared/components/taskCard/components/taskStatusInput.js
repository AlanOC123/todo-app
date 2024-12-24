import ElementData from "../../../../../shared/utils/ElementData";
import taskViewportEventManager from "../../../../tasksViewportModule/events/taskViewportEventsManager";
import taskViewportEvents from "../../../../tasksViewportModule/events/taskViewportEvents";
import changeTaskStatus from "../utils/changeTaskStatus";
import changeStatusInputElement from "../utils/changeStatusInputElement";

export default function taskStatusInput(taskClass)
{
  function optionElement(option)
  {
    return new ElementData
    (
      'option',
      'task-card-status-option',
      { value: option },
      [ option]
    ).renderElement();
  };

  const element = new ElementData
  (
    'select',
    'task-card-status-input',
    {},
    []
  ).renderElement();

  ['--Select Status--' ,'Not Started', 'In Progress', 'Complete'].forEach
  (
    option => element.append(optionElement(option))
  );

  element.value = '--Select Status--';

  function elementChanged()
  {
    changeTaskStatus(element, taskClass);
  }

  function statusChanged({ task })
  {
    if (task !== taskClass) return;
    changeStatusInputElement(element, taskClass);
  }

  element.onchange = elementChanged;

  taskViewportEventManager.on(taskViewportEvents.taskStatusChanged, statusChanged);
  return element;
}