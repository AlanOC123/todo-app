import ElementData from "../../../../../shared/utils/ElementData";
import changeTaskPriority from "../utils/changeTaskPriority";
import changePriorityInputElement from '../utils/changePriorityInputElement';
import taskViewportEventManager from "../../../../tasksViewportModule/events/taskViewportEventsManager";
import taskViewportEvents from "../../../../tasksViewportModule/events/taskViewportEvents";

export default function taskPriorityInput(taskClass)
{
  function optionElement(option)
  {
    return new ElementData
    (
      'option',
      'task-priority-option',
      { value: option },
      [ option]
    ).renderElement();
  };

  const element = new ElementData
  (
    'select',
    'task-card-priority-input',
    {},
    []
  ).renderElement();

  ['--Select Priority--' ,'High', 'Medium', 'Low'].forEach
  (
    option => element.append(optionElement(option))
  );

  element.value = '--Select Priority--';

  function elementChanged()
  {
    changeTaskPriority(element, taskClass);
  };

  function priorityChanged({ task })
  {
    if (task !== taskClass) return;
    changePriorityInputElement(element, taskClass);
  }

  element.onchange = elementChanged;

  taskViewportEventManager.on(taskViewportEvents.taskPriorityChanged, priorityChanged);

  return element;
}