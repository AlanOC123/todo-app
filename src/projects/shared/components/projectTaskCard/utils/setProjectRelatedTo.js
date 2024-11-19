import testProjects from "../../../utils/testProjects";
import projectsState from "../../../utils/projectsState";
import projectsEventsManager from "../../../utils/projectEventsManager";
import projectEvents from "../../../events/projectsEvents";

export default function setProjectRelatedTo(inputElement)
{
  if (!inputElement)
  {
    return;
  }

  const taskCard = inputElement.closest('.project-task-card');

  if (!taskCard)
  {
    return;
  }

  const taskID = taskCard.dataset.id;

  const taskToRelate = projectsState.getDraftTasks().find(task => task.getTaskID() === taskID);

  if (!taskToRelate)
  {
    return;
  }

  const selectedProject = testProjects.find(project => project.getProjectName() === inputElement.value);

  if (selectedProject)
  {
    projectsState.removeDraftTask(taskToRelate.getTaskID());
    taskToRelate.setTaskRelatedTo(selectedProject);
    selectedProject.addProjectTask(taskToRelate);
    projectsEventsManager.emit(projectEvents.projectViewportUpdated);
  };
}