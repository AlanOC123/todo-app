import ElementData from '../../../shared/utils/ElementData';
import taskPageState from '../../shared/utils/taskPageState';
import taskViewportEventManager from '../../tasksViewportModule/events/taskViewportEventsManager';
import taskViewportEvents from '../../tasksViewportModule/events/taskViewportEvents';
import taskDateControlsEventsManager from '../events/taskDateControlsEventsManager';
import taskDateControlsEvents from '../events/taskDateControlsEvents';

export default function taskDateControlsDateSelect()
{
  const textElement = new ElementData
  (
    'p',
    'task-date-controls-date-select-text',
    {},
    [ 'Change Date:' ]
  ).renderElement();

  const inputElement = new ElementData
  (
    'input',
    'task-date-controls-date-select-input',
    {
      type: 'date',
      value: new Date().toISOString().split('T')[0],
    },
    []
  ).renderElement();

  const element = new ElementData
  (
    'div',
    'task-date-controls-date-select',
    {},
    [ 
      textElement,
      inputElement 
    ]
  ).renderElement();

  function elementChanged()
  {
    taskPageState.setDate(new Date(inputElement.value));
    taskDateControlsEventsManager.emit(taskDateControlsEvents.dayChanged);
    taskViewportEventManager.emit(taskViewportEvents.viewportRefreshed);
  }

  inputElement.onchange = elementChanged;

  return element;
}
