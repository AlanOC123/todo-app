import ElementData from "../../../../shared/utils/ElementData";

export default function projectDetailsCardDisplay(textValue)
{
  const element = new ElementData
  (
    'p',
    'project-details-card-display',
    {},
    [textValue]
  ).renderElement();

  function elementClicked()
  {
    element.replaceWith(projectDueDateInput())
  }

  element.onclick = elementClicked;

  return element;
}