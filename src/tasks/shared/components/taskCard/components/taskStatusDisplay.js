import ElementData from "../../../../../shared/utils/ElementData";
import taskStatusInput from "./taskStatusInput";
import taskViewportEventManager from "../../../../tasksViewportModule/events/taskViewportEventsManager";
import taskViewportEvents from "../../../../tasksViewportModule/events/taskViewportEvents";

export default function taskStatusDisplay(taskClass)
{
  const currentStatus = taskClass.getTaskStatus();

  const element = new ElementData
  (
    'p',
    'task-card-status-display',
    {},
    [`${currentStatus}`]
  ).renderElement();

  const classMap =
  {
    'Not Started': 'not-started',
    'In Progress': 'in-progress',
    Complete: 'complete',
    Overdue : 'overdue',
  };

  element.classList.add(classMap[currentStatus]);

  function elementClicked()
  {
    element.replaceWith(taskStatusInput(taskClass));
  };

  function statusChanged({ task })
  {
    if (task !== taskClass) return;

    const newElement = taskStatusDisplay(taskClass);

    element.replaceWith(newElement);
  }

  element.onclick = elementClicked;
  taskViewportEventManager.on(taskViewportEvents.taskStatusChanged, statusChanged);

  return element;
}