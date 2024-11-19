import projectsEventsManager from "../../shared/utils/projectEventsManager";
import projectEvents from "../../shared/events/projectsEvents";

export default function deleteTask(taskClass)
{

  if (!taskClass)
  {
    return;
  }

  const component = taskClass.getComponentTaskIsRelatedTo()

  component.removeComponentTask(taskClass);

  projectsEventsManager.emit(projectEvents.projectComponentTaskViewportUpdated);
}