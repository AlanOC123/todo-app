import projectsState from "../../../utils/projectsState";
import taskNameDisplay from "../components/taskNameDisplay";
import relatedToProjectInput from "../components/relateToProjectInput";

export default function showChangeProjectInput(buttonElement)
{
  const taskCard = buttonElement.closest('.project-task-card');

  const informationDisplay = taskCard.querySelector('.task-name-display');

  if (informationDisplay.parentElement.classList.contains('relate-task-to-container'))
  {
    const task = projectsState.getDraftTasks().find(task => task.getTaskID() === taskCard.dataset.id);
    if (task)
    {
      informationDisplay.parentElement.replaceWith(taskNameDisplay(task.getTaskName()));
    }
  }

  if (!informationDisplay)
  {
    console.warn('Display Element not found');
    return;
  }

  informationDisplay.replaceWith(relatedToProjectInput());
}