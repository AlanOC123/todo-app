import ElementData from "../../../../../shared/utils/ElementData";
import projectViewportEventsManager from "../../../events/projectViewportEventsManager";
import projectViewportEvents from "../../../events/projectViewportEvents";
import projectsPageEventsManager from "../../../../shared/events/projectsPageEventsManager";
import projectPageEvents from "../../../../shared/events/projectsPageEvents";
import projectsState from "../../../../shared/utils/projectsState";

export default function projectNameDisplay()
{
  const element = new ElementData
  (
    'h2',
    'project-name-display',
    {},
    []
  ).renderElement();

  function setName()
  {
    const activeProject = projectsState.getActiveProject();
    let text = 'No Project Selected';

    if (activeProject)
    {
      if (activeProject.getProjectName() === 'Type Project Name')
      {
        return;
      };

      text = activeProject.getProjectName();
    };

    element.textContent = text;
  }

  function nameChanged({ project })
  {
    const activeProject = projectsState.getActiveProject();
    if (activeProject === project)
    {
      element.textContent = project.getProjectName();
    };
  }

  setName();
  projectsPageEventsManager.on(projectPageEvents.projectSelected, setName);
  projectsPageEventsManager.on(projectPageEvents.projectNameChanged, nameChanged);

  return element;
}