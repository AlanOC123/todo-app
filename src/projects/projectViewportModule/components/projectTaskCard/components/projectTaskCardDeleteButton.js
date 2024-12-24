import iconContainer from "../../../../../shared/components/icon";
import iconsMap from "../../../../../shared/utils/iconsMap";
import ElementData from "../../../../../shared/utils/ElementData";

export default function projectTaskCardDeleteButton(projectTaskClass)
{
  const component = projectTaskClass.getTaskParent('Component');

  if (!component) return;

  const deleteIcon = iconContainer(iconsMap.delete.icon, null);
  deleteIcon.classList.add('delete-project-task-icon');

  const element = new ElementData
  (
    'div',
    'delete-project-task-button',
    {},
    [deleteIcon]
  ).renderElement();

  function elementClicked(event)
  {
    event.stopPropagation();
    component.deleteTask(projectTaskClass);
  };

  element.onclick = elementClicked;
  return element;
}