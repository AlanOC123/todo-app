import ElementData from "../../../../../shared/utils/ElementData";
import projectViewportEventsManager from "../../../events/projectViewportEventsManager";
import projectViewportEvents from "../../../events/projectViewportEvents";
import projectTaskNameInput from "./projectTaskCardNameInput";

export default function projectTaskName(projectTaskClass)
{
  const element = new ElementData
  (
    'p',
    'project-task-card-name',
    {},
    []
  ).renderElement();

  function setText({ projectTask })
  {
    if (projectTask !== projectTaskClass) return;
    element.textContent = projectTask.getTaskName();
  }

  function elementClicked(event)
  {
    event.stopPropagation();
    const inputElement = projectTaskNameInput(projectTaskClass);
    element.replaceWith(inputElement);
    inputElement.focus();
  };

  setText({ projectTask: projectTaskClass });
  projectViewportEventsManager.on(projectViewportEvents.projectTaskNameChanged, setText);
  element.onclick = elementClicked;
  return element;
}