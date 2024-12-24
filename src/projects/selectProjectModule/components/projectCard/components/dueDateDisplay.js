import ElementData from "../../../../../shared/utils/ElementData";
import projectPageEvents from "../../../../shared/events/projectsPageEvents";
import projectsPageEventsManager from "../../../../shared/events/projectsPageEventsManager";

export default function dueDateDisplay(projectClass)
{
  if (!projectClass.getProjectDueDate()) return;

  const element = new ElementData
  (
    'p',
    'project-card-due-date',
    {},
    [ `Due: ${projectClass.getProjectDueDate()}` ]
  ).renderElement();

  function setDate({ project })
  {
    if (!project || projectClass !== project)
    {
      return;
    };

    element.textContent = `Due: ${project.getProjectDueDate()}`;
  }

  setDate({ project: projectClass });
  projectsPageEventsManager.on(projectPageEvents.projectDueDateChanged, setDate);
  return element;
}