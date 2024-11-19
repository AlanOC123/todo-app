import projectsEventsManager from "../../shared/utils/projectEventsManager";
import projectEvents from "../../shared/events/projectsEvents";
import projectViewportTaskCardName from "../components/projectViewportTaskCard/projectViewportTaskCardName";

export default function changeTaskName(inputElement, taskClass)
{
  if (!inputElement || ! taskClass)
  {
    return;
  }

  if (!inputElement.value)
  {
    inputElement.replaceWith(projectViewportTaskCardName(taskClass))
    return;
  }

  taskClass.setTaskName(inputElement.value);
  inputElement.replaceWith(projectViewportTaskCardName(taskClass))
  projectsEventsManager.emit(projectEvents.projectComponentTaskViewportUpdated);
}