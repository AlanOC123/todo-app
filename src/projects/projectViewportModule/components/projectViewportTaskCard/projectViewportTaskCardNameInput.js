import ElementData from '../../../../shared/utils/ElementData';
import changeTaskName from '../../utils/changeTaskName';

export default function projectViewportTaskCardNameInput(task)
{
  const element = new ElementData
  (
    'input',
    'task-name-input',
    {
      type: 'text',
      minlength: '3',
      maxlength: '30',
      placeholder: task.getTaskName() || '',
    },
    []
  ).renderElement();

  function elementChanged()
  {
    changeTaskName(element, task);
  }

  element.onblur = elementChanged;


  return element;
}