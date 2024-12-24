import iconContainer from "../../../../../shared/components/icon";
import iconsMap from "../../../../../shared/utils/iconsMap";
import projectsState from "../../../../shared/utils/projectsState";

export default function deleteButton(componentClass)
{
  const element = iconContainer(iconsMap.delete.icon, null);
  element.classList.add('delete-component');

  function elementClicked(event)
  {
    event.stopPropagation();
    const projectClass = componentClass.getComponentParentProject();
    const cardElement = componentClass.getComponentCard();

    if (!projectClass) return;

    const isEditing = cardElement.querySelector('.component-card-name-input') !== null;

    if (isEditing) return;

    projectClass.deleteComponent(componentClass);
    const activeComponent = projectsState.getActiveComponent();
    if (activeComponent === componentClass) projectsState.setActiveComponent(null);
  };

  element.onclick = elementClicked;
  return element;
}