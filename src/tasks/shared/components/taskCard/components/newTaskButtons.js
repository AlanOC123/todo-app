import ElementData from '../../../../../shared/utils/ElementData';
import taskPageState from "../../../../shared/utils/taskPageState";
import taskViewportEvents from '../../../../tasksViewportModule/events/taskViewportEvents'
import taskViewportEventManager from "../../../../tasksViewportModule/events/taskViewportEventsManager";

export default function stagingAreaButtons(taskClass)
{
  const confirmButton = new ElementData
  (
    'button',
    'task-card-button',
    {},
    [ 'Confirm' ]
  ).renderElement();

  const deleteButton = new ElementData
  (
    'button',
    'task-card-button',
    {},
    [ 'Delete' ]
  ).renderElement();

  const element = new ElementData
  (
    'div',
    'task-card-buttons',
    {},
    [ confirmButton, deleteButton ]
  ).renderElement();

  function confirmButtonClicked()
  {
    const currentTaskName = taskClass.getTaskName();
    const taskCard = taskClass.getTaskCard();

    const isValid = currentTaskName !== 'Type Task Name';

    const isNameDisplay = taskCard.querySelector('.task-card-name-display');
    const isNameInput = taskCard.querySelector('.task-card-name-input');

    if (isNameDisplay && !isValid) isNameDisplay.classList.add('error');
    if (isNameInput && !isValid) isNameInput.classList.add('error');

    if (!isValid) return;

    const defaultMap =
    {
      Status: 'Not Started',
      Priority: 'Low',
      Difficulty: 'Easy',
      DueDate: new Date(),
      Category: 'General',
    }

    for (const prop in defaultMap)
    {
      if (!taskClass[`getTask${prop}`]()) taskClass[`setTask${prop}`](defaultMap[prop])
    };

    const isDraftMessage = taskCard.querySelector('.task-card-draft-message');
    const draftMessageParent = isDraftMessage ? isDraftMessage.parentElement : null;

    if (isDraftMessage && draftMessageParent) draftMessageParent.removeChild(isDraftMessage);

    taskClass.setIsTaskEditing(false);
    taskViewportEventManager.emit(taskViewportEvents.viewportRefreshed);

    const parentElement = taskClass.getTaskCard();
    parentElement.removeChild(element);
  };

  function deleteButtonClicked()
  {
    const parent = document.querySelector('.task-staging-area');
    parent.firstChild.replaceWith(createTaskButton());
    const master = taskPageState.getMasterCategory();
    master.deleteCategoryTask(taskClass);
  };

  confirmButton.onclick = confirmButtonClicked;
  deleteButton.onclick = deleteButtonClicked;
  return element;
}