import ElementData from "../../../../../shared/utils/ElementData";
import projectsPageEventsManager from "../../../../shared/events/projectsPageEventsManager";
import projectPageEvents from "../../../../shared/events/projectsPageEvents";

export default function projectTaskCardDuration(projectTaskClass)
{
  const element = new ElementData
  (
    'p',
    'project-task-card-duration',
    {},
    []
  ).renderElement();

  function setText()
  {
    element.textContent = projectTaskClass.getTaskDuration();
  }

  setText();
  projectsPageEventsManager.on(projectPageEvents.viewportRefreshed, setText);
  return element;
}