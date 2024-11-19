import ElementData from "../../../../shared/utils/ElementData";
import projectsEventsManager from "../../../shared/utils/projectEventsManager";
import projectEvents from "../../../shared/events/projectsEvents";
import iconContainer from "../../../../shared/components/icon";
import iconsMap from "../../../../shared/utils/iconsMap";
import deleteTask from "../../utils/deleteTask";
import projectViewportTaskCardName from "./projectViewportTaskCardName";

export default function projectViewportTaskCard(taskClass)
{
  const markCompleteButton = iconContainer(iconsMap.complete.icon, null);
  markCompleteButton.classList.add('mark-task-complete-button');

  const nameDisplay = projectViewportTaskCardName(taskClass);

  const deleteButton = iconContainer(iconsMap.delete.icon, null);
  deleteButton.classList.add('delete-task');

  const element = new ElementData
  (
    'div',
    'project-viewport-task-card',
    {
      'data-id': taskClass.getTaskID()
    },
    [
      markCompleteButton,
      nameDisplay,
      deleteButton
    ]
  ).renderElement()

  function addOrRemoveComplete({ task })
  {
    if (task !== taskClass)
    {
      return;
    }

    if (task.getIsTaskComplete())
    {
      element.classList.add('mark-task-complete');
    } else
    {
      element.classList.remove('mark-task-complete')
    }

  }

  function deleteClicked()
  {
    deleteTask(taskClass)
  }

  function markComplete()
  {
    taskClass.setIsTaskComplete();
  }

  deleteButton.onclick = deleteClicked;

  markCompleteButton.onclick = markComplete;

  addOrRemoveComplete({ task: taskClass });
  projectsEventsManager.on(projectEvents.projectTaskUpdated, addOrRemoveComplete)

  return element;
}