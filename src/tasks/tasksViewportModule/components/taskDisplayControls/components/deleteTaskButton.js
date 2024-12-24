import ElementData from "../../../../../shared/utils/ElementData";
import taskPageState from "../../../../shared/utils/taskPageState";
import taskViewportEvents from "../../../events/taskViewportEvents";
import taskViewportEventManager from "../../../events/taskViewportEventsManager";

export default function deleteTaskButton()
{
  const element = new ElementData
  (
    'button',
    'delete-task-button',
    {},
    ['Mark Tasks to Delete']
  ).renderElement();

  function elementClicked()
  {
    const isDeleting = taskPageState.getIsDeleting();

    if (!isDeleting)
    {
      const currentTaskCards = Array.from(document.querySelectorAll('.task-card'));
      if (!currentTaskCards.length) return;

      element.textContent = 'Delete Tasks';

      currentTaskCards.forEach(card => card.classList.add('mark-for-deletion'));
      taskPageState.setIsDeleting(true);
      taskViewportEventManager.emit(taskViewportEvents.deletingTasks, { state: true });
      return;
    }

    const currentTaskCards = Array.from(document.querySelectorAll('.task-card'));
    const tasksForDeletion = taskPageState.getTasksToDelete()

    taskPageState.deleteTask(tasksForDeletion);
    taskPageState.resetTasksToDelete();
    currentTaskCards.forEach(card => card.classList.remove('mark-for-deletion'));
    taskViewportEventManager.emit(taskViewportEvents.viewportRefreshed);
  }

  element.onclick = elementClicked;

  return element;
}