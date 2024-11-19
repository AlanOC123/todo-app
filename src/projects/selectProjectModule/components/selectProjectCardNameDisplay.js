import ElementData from "../../../shared/utils/ElementData";
import selectProjectCardProjectNameInput from "./selectProjectCardProjectNameInput";

export default function selectProjectCardNameDisplay(projectName)
{
  const element = new ElementData
  (
    'h4',
    'select-project-card-name-display',
    {},
    [projectName]
  ).renderElement();

  function elementClicked()
  {
    const input = selectProjectCardProjectNameInput(projectName);
    element.replaceWith(input);
    input.focus();
  }

  element.onclick = elementClicked;

  return element;
}