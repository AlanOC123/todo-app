import ElementData from "../../../../shared/utils/ElementData";
import iconContainer from '../../../../shared/components/icon';
import iconsMap from '../../../../shared/utils/iconsMap';
import ProjectsClass from "../../../shared/utils/ProjectsClass";
import projectsPageEventsManager from "../../../shared/events/projectsPageEventsManager";
import projectPageEvents from "../../../shared/events/projectsPageEvents";
import selectProjectEventsManager from "../../events/selectProjectEventsManager";
import selectProjectEvents from "../../events/selectProjectEvents";
import projectsState from "../../../shared/utils/projectsState";
import nameInput from "../projectCard/components/nameInput";
import dueDateInput from '../projectCard/components/dueDateInput';

export default function newProjectCard()
{
  const iconElement = iconContainer(iconsMap.create.icon);
  iconElement.classList.add('add-project-button-icon');

  const element = new ElementData
  (
    'div',
    'new-project',
    {},
    [
      iconElement,
      'Create New Project'
    ]
  ).renderElement();
  
  function elementClicked()
  {
    const newProject = new ProjectsClass();
    const isFirst = projectsState.getProjects().length === 0;
    const projectCard = newProject.getProjectCard();

    if (isFirst) newProject.setIsProjectActive(true);

    projectsPageEventsManager.emit
    (
      projectPageEvents.projectAdded, 
      {
        newProject: newProject,
      }
    );

    selectProjectEventsManager.emit
    (
      selectProjectEvents.projectCardAdded, 
      {
        cardElement: projectCard,
        addCardElement: element,
      }
    )

    const nameDisplay = projectCard.querySelector('.project-card-name');
    const dateDisplay = projectCard.querySelector('.project-card-due-date');

    const nameInputElement = nameInput(newProject);
    const dateInputElement = dueDateInput(newProject);

    nameDisplay.replaceWith(nameInputElement);

    if (!dateDisplay)
    {
      const viewport = Array.from(projectCard.children)[projectCard.children.length - 1];
      projectCard.insertBefore(dateInputElement, viewport);
    } else
    {
      dateDisplay.replaceWith(dateInputElement);
    }

    nameInputElement.focus();
  }

  element.onclick = elementClicked;
  return element;
} 