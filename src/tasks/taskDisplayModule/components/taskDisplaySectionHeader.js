import ElementData from "../../../shared/utils/ElementData";

export default function taskDisplaySectionHeader(headerText)
{
  return new ElementData
  (
    'div',
    'task-display-section-header',
    {},
    [headerText]
  ).renderElement()
}