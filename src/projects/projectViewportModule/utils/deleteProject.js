import projectEvents from '../../shared/events/projectsEvents';
import projectsEventsManager from '../../shared/utils/projectEventsManager';
import projectsState from '../../shared/utils/projectsState';
import testProjects from '../../shared/utils/testProjects';

export default function deleteProject()
{
  const selectedProject = projectsState.getSelectedProject();

  const projectIndex = testProjects.findIndex(project => project === selectedProject);

  if (projectIndex === -1)
  {
    return;
  }

  testProjects.splice(projectIndex, 1);
  projectsState.setSelectedProject();
  projectsEventsManager.emit(projectEvents.projectDeleted);
}