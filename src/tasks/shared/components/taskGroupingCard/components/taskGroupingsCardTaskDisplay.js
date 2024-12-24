import ElementData from "../../../../../shared/utils/ElementData";

export default function taskGroupingsCardTaskDisplay(tasks)
{
  const viewportElement = new ElementData
  (
    'div',
    'task-grouping-card-task-display',
    {},
    [],
  ).renderElement();

  const element = new ElementData
  (
    'div',
    'task-grouping-card-task-display-wrapper',
    {},
    [ viewportElement ]
  ).renderElement();

  function renderElement()
  {
    viewportElement.classList.remove('empty');

    while(viewportElement.firstChild)
    {
      viewportElement.removeChild(viewportElement.firstChild);
    };

    if (tasks.length === 0)
    {
      viewportElement.classList.add('empty');
      return;
    };

    tasks.forEach(task => viewportElement.append(task.getTaskCard()))
  }

  renderElement();

  return element;
}