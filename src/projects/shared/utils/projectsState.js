import projectsPageEventsManager from "../events/projectsPageEventsManager";
import projectPageEvents from "../events/projectsPageEvents";

export default (function projectState()
{
  let _currentState = null;
  let _currentProjects = [];
  let _activeProject = null;
  let _activeComponent = null;

  function _findDefaultProject()
  {
    if (_currentProjects.length > 0)
    {
      _currentProjects[0].setIsProjectActive(true);
      return _currentProjects[0];
    } else
    {
      return null;
    }
  }

  function _findActiveProject()
  {
    if (_currentProjects.length === 0)
    {
      return null;
    }

    const activeProject = _currentProjects.find(project => project.getIsProjectActive() === 'Yes');

    return activeProject ? activeProject : null;
  }

  function _findActiveComponent()
  {
    if (!_activeProject)
    {
      return null;
    };

    const activeProjectComponents = _activeProject.getProjectComponents();

    if (activeProjectComponents.length === 0)
    {
      return null;
    }
  
    const activeComponent = activeProjectComponents.find(component => component.getIsComponentActive() === 'Yes');

    return activeComponent ? activeComponent : null;
  }

  function _findDefaultComponent()
  {
    if (!_activeProject)
    {
      return null;
    };

    const activeProjectComponents = _activeProject.getProjectComponents();

    if (activeProjectComponents.length > 0)
    {
      console.log('Finding Default');
      activeProjectComponents[0].setIsComponentActive(true);
      return activeProjectComponents[0]
    } else
    {
      return null;
    }
  }

  function _deactiveProjects()
  {
    if (_currentProjects.length === 0)
    {
      return;
    };

    const activeProject = _currentProjects.find
    (
      project => project.getIsProjectActive() === 'Yes',
    );

    if (activeProject)
    {
      activeProject.setIsProjectActive(false);
    };

  }

  function _deactivateComponents()
  {
    if (!_activeProject)
    {
      return;
    };

    const activeProjectComponents = _activeProject.getProjectComponents();

    const activeComponent = activeProjectComponents.find
    (
      component => component.getIsComponentActive() === 'Yes',
    );

    if (activeComponent)
    {
      activeComponent.setIsComponentActive(false);
    };
  }

  function setActiveProject(selectedProject)
  {
    if (selectedProject)
    {
      _deactiveProjects();
      _activeProject = selectedProject;
      projectsPageEventsManager.emit(projectPageEvents.projectSelected);
      selectedProject.setIsProjectActive(true);
      setActiveComponent(null)
      return;
    };

    _activeProject = _findActiveProject() || _findDefaultProject();
    projectsPageEventsManager.emit(projectPageEvents.projectSelected);
    setActiveComponent(null)
  }

  function setActiveComponent(selectedComponent)
  {
    if (!_activeProject)
    {
      _activeComponent = null;
      projectsPageEventsManager.emit(projectPageEvents.componentSelected);
      return;
    }

    if (selectedComponent)
    {
      _deactivateComponents();
      _activeComponent = selectedComponent;
      projectsPageEventsManager.emit(projectPageEvents.componentSelected);
      selectedComponent.setIsComponentActive(true);
      return;
    };

    if (!selectedComponent)
    {
      _activeComponent = _findActiveComponent() || _findDefaultComponent();
      projectsPageEventsManager.emit(projectPageEvents.componentSelected);
      return;
    }
  }

  function _addProject({ newProject })
  {
    if (!newProject) return;

    _currentProjects.push(newProject);

    if (newProject.getIsProjectActive() === 'Yes') setActiveProject(newProject);
  }

  function _deleteProject({ selectedProject })
  {
    if (!selectedProject) return;

    const index = _currentProjects.findIndex(project => project === selectedProject);

    if (index === -1)
    {
      return;
    };

    _currentProjects.splice(index, 1);

    if (_activeProject === selectedProject) setActiveProject(null);
  }

  const getProjects = () => _currentProjects;

  const getActiveProject = () => _activeProject;

  const getActiveComponent = () => _activeComponent;

  const getState = () => _currentState;

  setActiveProject(null);
  projectsPageEventsManager.on(projectPageEvents.projectAdded, _addProject);
  projectsPageEventsManager.on(projectPageEvents.projectDeleted, _deleteProject);

  return {
    setActiveProject,
    setActiveComponent,
    getProjects,
    getActiveProject,
    getActiveComponent,
    getState,
  }

})()