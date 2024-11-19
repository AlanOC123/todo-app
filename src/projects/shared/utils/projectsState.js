import testProjects from './testProjects';
import projectsEventsManager from '../utils/projectEventsManager';
import projectsEvents from '../events/projectsEvents';

export default (function projectState()
{
  let _selectedProject = null;

  const _sortedProjectComponents = 
  (() => 
    {
      return {
        'Not-Started': [],
        'In-Progress': [],
        'Complete': [],
        'Overdue': [],
      }
    }
  )();

  let _notStartedComponents = [];
  let _inProgressComponents = [];
  let _completeComponents = [];
  let _overdueComponents = [];

  function setSelectedProject(selectedProject)
  {
    _selectedProject = 
    selectedProject
    ? selectedProject 
    : testProjects.length > 0
    ? testProjects[0]
    : null;

    _setComponents();
    projectsEventsManager.emit(projectsEvents.projectChanged);
  }

  function _setEvents()
  {
    function projectUpdated({ project })
    {
      if (project !== _selectedProject)
      {
        return;
      }

      setSelectedProject(project);
    }

    projectsEventsManager.on(projectsEvents.projectUpdated, projectUpdated);
    projectsEventsManager.on(projectsEvents.projectDeleted, setSelectedProject);
  }

  function _setComponents()
  {
    if (!_selectedProject)
    {
      return;
    }

    for (const status in _sortedProjectComponents)
    {
      _sortedProjectComponents[status] = [];
    }

    const components = _selectedProject.getProjectComponents();

    components.forEach
    (
      component =>
      {
        _sortedProjectComponents[component.getComponentStatus()].push(component);
      }
    )
  }

  function getSelectedProject()
  {
    return _selectedProject;
  }

  function getSortedComponents()
  {
    return _sortedProjectComponents;
  }

  _setEvents();
  setSelectedProject();

  return {
    setSelectedProject,
    getSelectedProject,
    getSortedComponents
  };
})()