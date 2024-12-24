import ElementData from "../../../../../shared/utils/ElementData";
import taskPageState from "../../../utils/taskPageState";
import TaskClass from '../../../utils/TaskClass';
import iconContainer from "../../../../../shared/components/icon";
import iconsMap from "../../../../../shared/utils/iconsMap";

export default function createTaskCard()
{
  const buttonIcon = iconContainer(iconsMap.create.icon, null);
  buttonIcon.classList.add('create-task-card-icon');

  const element = new ElementData
  (
    'div',
    'create-task-card',
    {},
    [ 
      buttonIcon,
      new ElementData
      (
        'p',
        'create-task-card-text',
        {},
        'Create New Task'
      ).renderElement(),
    ]
  ).renderElement();

  function elementClicked()
  {
    const isDeleting = taskPageState.getIsDeleting();
    if (isDeleting) return;

    const parentElement = element.closest('.task-display-grouping-card');
    const viewport = parentElement.querySelector('.task-grouping-card-task-display');

    const { sortingKey, sortingVal } = parentElement.dataset;

    viewport.classList.remove('empty');

    const newTask = new TaskClass();

    newTask.setIsTaskEditing(true);

    if (sortingKey !== 'All')
    {
      newTask[`setTask${sortingKey}`](sortingVal);
    }

    taskPageState.addTask(newTask);
  }

  element.onclick = elementClicked;

  return element;
}