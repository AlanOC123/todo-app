import projectEvents from "../../shared/events/projectsEvents";
import projectsEventsManager from "../../shared/utils/projectEventsManager";
import testProjects from "../../shared/utils/testProjects";

export default function changeProject(inputElement, component)
{
  if (!inputElement || !component)
  {
    return;
  }

  const currentProject = component.getProjectComponentIsRelatedTo();

  if (!currentProject)
  {
    return;
  }
  
  if (currentProject.getProjectID() === inputElement.value)
  {
    return;
  }

  const newProject = testProjects.find(project => project.getProjectID() === inputElement.value);

  if (!newProject)
  {
    return;
  }

  component.setProjectComponentIsRelatedTo(newProject);
  currentProject.removeProjectComponent(component);
  newProject.addProjectComponent(component);

  projectsEventsManager.emit(projectEvents.projectComponentUpdated, { change: 'componentSwitched', component: component });
}