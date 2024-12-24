import ElementData from "../../../../../shared/utils/ElementData";
import iconContainer from "../../../../../shared/components/icon";
import iconsMap from "../../../../../shared/utils/iconsMap";
import ProjectsComponentClass from '../../../../shared/utils/ProjectsComponentClass';
import projectsPageEventsManager from "../../../../shared/events/projectsPageEventsManager";
import projectPageEvents from "../../../../shared/events/projectsPageEvents";
import nameInput from "../../componentCard/components/nameInput";

export default function newComponentButton(projectClass)
{
  const buttonIcon = iconContainer(iconsMap.create.icon, null);
  buttonIcon.classList.add('new-component-icon');

  const element = new ElementData
  (
    'div',
    'new-component',
    {},
    [
      buttonIcon,
      'Create New Component',
    ]
  ).renderElement();

  function elementClicked(event)
  {
    event.stopPropagation();
    const newComponent = new ProjectsComponentClass(projectClass);
    const cardElement = newComponent.getComponentCard();
    projectClass.addComponent(newComponent);

    const nameDisplayElement = cardElement.querySelector('.component-card-name');
    const nameInputElement = nameInput(newComponent);
    nameDisplayElement.replaceWith(nameInputElement);
    nameInputElement.focus();
  }; 

  element.onclick = elementClicked;

  return element;
}