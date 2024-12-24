import ElementData from "../../../../../shared/utils/ElementData";
import projectsPageEventsManager from "../../../../shared/events/projectsPageEventsManager";
import projectPageEvents from "../../../../shared/events/projectsPageEvents";

export default function nameDisplay(projectClass)
{
  const element = new ElementData
  (
    'p',
    'project-card-name',
    {},
    []
  ).renderElement();

  function setName({ project })
  {
    if (!project || project !== projectClass)
    {
      return;
    };

    element.textContent = projectClass.getProjectName()
  }

  setName({ project: projectClass });
  projectsPageEventsManager.on(projectPageEvents.projectNameChanged, setName);
  return element;
}