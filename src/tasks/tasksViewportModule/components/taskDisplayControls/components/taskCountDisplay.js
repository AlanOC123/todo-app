import ElementData from "../../../../../shared/utils/ElementData";
import taskPageState from "../../../../shared/utils/taskPageState";
import taskViewportEventManager from "../../../events/taskViewportEventsManager";
import taskViewportEvents from "../../../events/taskViewportEvents";

export default function taskCountDisplay()
{
  const element = new ElementData
  (
    'p',
    'task-count-display',
    {},
    []
  ).renderElement();

  function setText({ taskCount })
  {
    if (taskCount === 0)
    {
      element.textContent = 'No Tasks';
      return;
    };
    const text = taskCount.toString();
    element.textContent = `${text} Task${taskCount !== 1 ? 's' : ''}`;
  }

  function setForDeleting({ state })
  {
    if (state)
    {
      element.dataset.oldValue = element.textContent;
      element.textContent = 'Click Tasks to Delete';
      return;
    }

    element.textContent = element.dataset.oldValue;
    element.removeAttribute('data-old-value');
  }

  function taskMarked()
  {
    const currentlyMarked = taskPageState.getTasksToDelete().length;

    if (currentlyMarked === 0) return;

    element.textContent = `Delete ${currentlyMarked} Task${currentlyMarked !== 1 ? 's' : ''}`
  }

  setText({ taskCount: 0 });
  taskViewportEventManager.on(taskViewportEvents.viewportUpdated, setText);
  taskViewportEventManager.on(taskViewportEvents.deletingTasks, setForDeleting);
  taskViewportEventManager.on(taskViewportEvents.taskMarked, taskMarked)
  return element;
}