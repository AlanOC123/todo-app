import ElementData from "../../../shared/utils/ElementData";
import projectsState from '../../shared/utils/projectsState';
import projectsPageEventsManager from "../../shared/events/projectsPageEventsManager";
import projectPageEvents from "../../shared/events/projectsPageEvents";

export default function thoughtBubbleHeader()
{
  const element = new ElementData
  (
    'h3',
    'thought-bubble-header',
    {},
    []
  ).renderElement();

  function setText()
  {
    const activeProject = projectsState.getActiveProject();

    let text = 'Thought Bubble';

    if (activeProject)
    {
      const projectName = activeProject.getProjectName();

      if (projectName === 'Type Project Name')
      {
        return;
      };

      text = `Thoughts on ${activeProject.getProjectName()}`;
    };

    element.textContent = text;
  }

  setText();
  projectsPageEventsManager.on(projectPageEvents.projectSelected, setText);
  projectsPageEventsManager.on(projectPageEvents.projectNameChanged, setText);
  return element;
}