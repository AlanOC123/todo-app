import ElementData from "../../../shared/utils/ElementData";
import deleteProject from "../utils/deleteProject";

export default function projectViewportHeader()
{
  const deleteProjectButton = new ElementData
  (
    'button',
    'delete-project',
    {},
    ['Delete Project']
  ).renderElement();

  const buttonsElement = new ElementData
  (
    'div',
    'project-viewport-header-buttons',
    {},
    [
      deleteProjectButton
    ]
  ).renderElement();

  const headerElement = new ElementData
  (
    'h2',
    'project-viewport-header-text',
    {},
    ['Components']
  ).renderElement();

  const element = new ElementData
  (
    'div',
    'project-viewport-header',
    {},
    [
      headerElement,
      buttonsElement
    ]
  ).renderElement();

  function buttonClicked()
  {
    deleteProject();
  }

  deleteProjectButton.onclick = buttonClicked;

  return element;
}