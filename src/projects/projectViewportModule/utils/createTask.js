import ProjectTaskClass from "../../shared/utils/ProjectTaskClass";
import projectsEventsManager from "../../shared/utils/projectEventsManager";
import projectEvents from "../../shared/events/projectsEvents";

export default function createTask(componentClass)
{
  const task = new ProjectTaskClass();

  componentClass.addComponentTask(task);

  projectsEventsManager.emit(projectEvents.projectComponentTaskViewportUpdated);
}