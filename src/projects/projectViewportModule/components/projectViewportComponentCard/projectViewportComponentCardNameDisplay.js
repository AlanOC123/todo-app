import ElementData from "../../../../shared/utils/ElementData";
import projectViewportComponentCardNameInput from "./projectViewportComponentCardNameInput";

export default function projectViewportComponentCardNameDisplay(component)
{
  const element = new ElementData
  (
    'h4',
    'project-component-card-header-name',
    {},
    [component.getComponentName()]
  ).renderElement();

  function nameClicked()
  {
    const input = projectViewportComponentCardNameInput(component)
    element.replaceWith(input)
    input.focus();
  }

  element.onclick = nameClicked;
  return element;
}