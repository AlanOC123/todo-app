import iconContainer from "../../../../../shared/components/icon";
import iconsMap from "../../../../../shared/utils/iconsMap";
import ElementData from "../../../../../shared/utils/ElementData";
import projectViewportEventsManager from "../../../events/projectViewportEventsManager";
import projectViewportEvents from "../../../events/projectViewportEvents";

export default function projectTaskCardCompleteButton(projectTaskClass)
{
  const completeIcon = iconContainer(iconsMap.confirm.icon, null);
  completeIcon.classList.add('project-task-complete-button');

  const inCompleteIcon = iconContainer(iconsMap.emptySquare.icon, null);
  inCompleteIcon.classList.add('project-task-incomplete-button');

  const element = new ElementData
  (
    'div',
    'mark-project-task-status-button',
    {},
    [ (projectTaskClass.getIsTaskComplete() ? completeIcon : inCompleteIcon) ]
  ).renderElement();

  function elementClicked()
  {
    const button = element.firstChild;

    if (!button) return;

    if (button.classList.contains('project-task-complete-button'))
    {
      projectTaskClass.setIsTaskComplete(false);
      projectViewportEventsManager.emit(projectViewportEvents.projectTaskStatusChanged);
      return;
    }

    projectTaskClass.setIsTaskComplete(true);
    projectViewportEventsManager.emit(projectViewportEvents.projectTaskStatusChanged);
    return;
  }

  function swapIcon()
  {
    const button = element.firstChild;

    if (!button) return;

    if (projectTaskClass.getIsTaskComplete())
    {
      button.replaceWith(completeIcon);
      return;
    }

    button.replaceWith(inCompleteIcon);
    return;
  }

  element.onclick = elementClicked;
  projectViewportEventsManager.on(projectViewportEvents.projectTaskStatusChanged, swapIcon);
  return element;
}