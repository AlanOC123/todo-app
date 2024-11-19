import projectsState from "../../shared/utils/projectsState";
import ProjectComponentsClass from "../../shared/utils/ProjectsComponentClass";
import projectsEventsManager from "../../shared/utils/projectEventsManager";
import projectEvents from "../../shared/events/projectsEvents";

export default function createComponent(sectionName)
{
  const project = projectsState.getSelectedProject();

  const newComponent = new ProjectComponentsClass(sectionName);

  project.addProjectComponent(newComponent);
  projectsEventsManager.emit(projectEvents.projectChanged);
}