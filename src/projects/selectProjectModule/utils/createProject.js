import testProjects from "../../shared/utils/testProjects";
import projectsState from "../../shared/utils/projectsState";
import ProjectsClass from "../../shared/utils/ProjectsClass";
import projectsEventsManager from "../../shared/utils/projectEventsManager";
import projectEvents from "../../shared/events/projectsEvents";

export default function createProject()
{
  const newProject = new ProjectsClass();

  testProjects.push(newProject);
  projectsState.setSelectedProject(newProject);
  projectsEventsManager.emit(projectEvents.projectAdded);
  projectsEventsManager.emit(projectEvents.projectViewportUpdated);
}