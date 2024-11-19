import ElementData from "../../../shared/utils/ElementData"

export default function calendarDay(value, tasks)
{
  const valueElement = new ElementData
  (
    'div',
    'calendar-day-value',
    {},
    []
  ).renderElement();

  let tasksElement;

  if (tasks !== '0' && tasks !== 0)
  {
    if (Number(tasks) > 9)
    {
      tasks = '9+';
    }
    tasksElement = new ElementData
    (
      'div',
      'calendar-day-task-count',
      {},
      [tasks]
    ).renderElement();
  }

  const element = new ElementData
  (
    'div',
    'calendar-day',
    {},
    [
      valueElement,
    ]
  ).renderElement();


  if (value === 'null')
  {
    valueElement.tasksElement = '';
    element.classList.add('calendar-filler');
  } else 
  {
    valueElement.textContent = value;
  }

  if (tasksElement)
  {
    element.append(tasksElement);
  }

  if (['S', 'M', 'T', 'W', 'T', 'F', 'S'].includes(value))
  {
    valueElement.classList.add('calendar-day-header');
    element.classList.add('calendar-block-header');
  }

  return element;
}