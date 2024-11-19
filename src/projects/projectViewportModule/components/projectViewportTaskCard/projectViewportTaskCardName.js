import ElementData from "../../../../shared/utils/ElementData";
import projectsEventsManager from "../../../shared/utils/projectEventsManager";
import projectEvents from "../../../shared/events/projectsEvents";
import projectViewportTaskCardNameInput from "./projectViewportTaskCardNameInput";

export default function projectViewportTaskCardName(taskClass)
{
  const element = new ElementData
  (
    'p',
    'project-viewport-task-card-name',
    {},
    [taskClass.getTaskName()]
  ).renderElement()

  function changeName({ task })
  {
    if (task !== taskClass)
    {
      return;
    }

    element.textContent = task.getTaskName();
  };

  function nameClicked()
  {
    const input = projectViewportTaskCardNameInput(taskClass)
    element.replaceWith(input);
    input.focus();
  }

  element.onclick = nameClicked;
  projectsEventsManager.on(projectEvents.projectTaskUpdated, changeName);

  return element;
}