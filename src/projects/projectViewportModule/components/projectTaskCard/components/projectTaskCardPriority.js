import ElementData from "../../../../../shared/utils/ElementData";
import projectViewportEventsManager from "../../../events/projectViewportEventsManager";
import projectViewportEvents from "../../../events/projectViewportEvents";
import projectTaskCardPriorityInput from "./projectTaskCardPriorityInput";

export default function projectTaskCardPriority(projectTaskClass)
{
  const element = new ElementData
  (
    'p',
    'project-task-card-priority',
    {},
    []
  ).renderElement();

  function setText({ projectTask })
  {
    if (projectTask !== projectTaskClass) return;

    element.textContent = projectTask.getTaskPriority();
  }

  function elementClicked()
  {
    const inputElement = projectTaskCardPriorityInput(projectTaskClass)
    element.replaceWith(inputElement);
    inputElement.focus();
    inputElement.click();
  };

  setText({ projectTask: projectTaskClass });
  element.onclick = elementClicked;
  projectViewportEventsManager.on(projectViewportEvents.projectTaskPriorityChanged, setText);
  return element;
}