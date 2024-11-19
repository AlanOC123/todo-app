import projectEvents from "../../shared/events/projectsEvents";
import projectsEventsManager from "../../shared/utils/projectEventsManager";
import projectsState from "../../shared/utils/projectsState";

export default function deleteComponent(component)
{
  console.log(component);
  if (!component)
  {
    return;
  };

  console.log(1);

  const project = projectsState.getSelectedProject();

  if (!project)
  {
    return;
  }

  const projectComponents = project.getProjectComponents();

  if (!projectComponents || projectComponents.length === 0)
  {
    return
  }

  project.removeProjectComponent(component);
  projectsEventsManager.emit(projectEvents.projectChanged);
}