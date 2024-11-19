import ElementData from "../../../../shared/utils/ElementData";
import deleteComponent from "../../utils/deleteComponent";
import projectViewportComponentCardProjectOptionsInput from "./projectViewportComponentCardProjectOptionsInput";

export default function projectViewportComponentCardHeaderSubMenu(component)
{
  const changeProjectButton = new ElementData
  (
    'button',
    'change-project-button',
    {},
    ['Change Project']
  ).renderElement();

  const deleteButton = new ElementData
  (
    'button',
    'delete-component-button',
    {},
    ['Delete Component']
  ).renderElement();

  const element = new ElementData
  (
    'div',
    'project-viewport-component-card-header-sub-menu',
    {},
    [
      changeProjectButton,
      deleteButton
    ]
  ).renderElement()

  function deleteClicked()
  {
    deleteComponent(component);
  }

  function projectChangeClicked()
  {
    changeProjectButton.replaceWith(projectViewportComponentCardProjectOptionsInput(component))
  }

  deleteButton.onclick = deleteClicked;

  changeProjectButton.onclick = projectChangeClicked;

  return element;
}