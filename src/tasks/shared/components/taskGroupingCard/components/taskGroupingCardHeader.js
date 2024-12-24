import ElementData from "../../../../../shared/utils/ElementData";

export default function taskGroupingCardHeader(header, count, colorScheme)
{
  const taskCountElement = new ElementData
  (
    'div',
    `task-grouping-card-header-count ${colorScheme}`,
    {},
    [ (count > 0 ? count : '') ]
  ).renderElement();

  const headerElement = new ElementData
  (
    'div',
    `task-grouping-card-header-text ${colorScheme}`,
    {},
    [header]
  ).renderElement();

  const element = new ElementData
  (
    'div',
    `task-grouping-card-header ${colorScheme}`,
    {},
    [
      headerElement,
      taskCountElement
    ]
  ).renderElement();

  return element;
}
