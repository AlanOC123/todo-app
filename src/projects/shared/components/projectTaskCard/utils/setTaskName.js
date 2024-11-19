import projectsState from '../../../../shared/utils/projectsState';
import projectTaskCard from '../projectTaskCard';

export default function setTaskName(inputElement)
{
  const taskCard = inputElement.closest('.project-task-card');

  if (!taskCard)
  {
    return;
  }

  const taskID = taskCard.dataset.id;

  if (!taskID)
  {
    return;
  }

  const tasksList = projectsState.getDraftTasks();

  const selectedTask = tasksList.find(task => task.getTaskID() === taskID);

  if (selectedTask)
  {
    const previousName = selectedTask.getTaskName();
    console.log(inputElement.value);
    selectedTask.setTaskName((inputElement.value === '' ? previousName : inputElement.value));
  }

  taskCard.replaceWith(projectTaskCard(selectedTask));
}