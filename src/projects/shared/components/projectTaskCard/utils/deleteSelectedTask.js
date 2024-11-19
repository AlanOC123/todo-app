import projectsState from "../../../utils/projectsState";

export default function deleteSelectedTask(deleteButton)
{
  const taskCard = deleteButton.closest('.project-task-card');

  if (!taskCard)
  {
    return;
  }

  const taskID = taskCard.dataset.id;

  if (!taskID)
  {
    return;
  }

  projectsState.removeDraftTask(taskID);
}