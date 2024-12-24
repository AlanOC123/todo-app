import iconContainer from "../../../../../shared/components/icon";
import iconsMap from "../../../../../shared/utils/iconsMap";
import projectsPageEventsManager from "../../../../shared/events/projectsPageEventsManager";
import projectPageEvents from "../../../../shared/events/projectsPageEvents";
import selectProjectEventsManager from "../../../events/selectProjectEventsManager";
import selectProjectEvents from "../../../events/selectProjectEvents";

export default function deleteButton(projectClass)
{
  const element = iconContainer(iconsMap.delete.icon, null);
  element.classList.add('delete-project');

  function elementClicked(event)
  {
    event.stopPropagation();
    const cardElement = projectClass.getProjectCard();
    const nameInputElement = cardElement.querySelector('.project-card-name-input');
    const dueDateInputElement = cardElement.querySelector('.project-card-due-date-input');

    const isEditing = nameInputElement || dueDateInputElement ? true : false;

    if (isEditing) return;

    projectsPageEventsManager.emit
    (
      projectPageEvents.projectDeleted, { selectedProject: projectClass }
    );

    selectProjectEventsManager.emit
    (
      selectProjectEvents.projectCardDeleted, { cardElement: projectClass.getProjectCard() }
    );
  }

  element.onclick = elementClicked;
  return element;
}