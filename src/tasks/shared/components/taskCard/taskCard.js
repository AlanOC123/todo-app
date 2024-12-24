import ElementData from "../../../../shared/utils/ElementData";
import taskCategoryInput from "./components/taskCategoryInput";
import newTaskButtons from './components/newTaskButtons';
import taskPageEventsManager from '../../events/taskPageEventsManager';
import taskPageEvents from "../../events/taskPageEvents";
import selectCategoryEventsManager from '../../../selectCategoryModule/events/selectCategoryEventsManager'
import selectCategoryEvents from "../../../selectCategoryModule/events/selectCategoryEvents";
import taskCardStatusSection from "./components/taskCardStatusSection";
import taskCardNameSection from "./components/taskCardNameSection";
import taskCardCoreInfoSection from "./components/taskCardCoreInfoSection";
import taskCardAdditionalInfoSection from "./components/taskCardAdditionalnfoSection";
import taskPageState from "../../../shared/utils/taskPageState";
import taskViewportEventManager from '../../../tasksViewportModule/events/taskViewportEventsManager'
import taskViewportEvents from '../../../tasksViewportModule/events/taskViewportEvents';

export default function taskCard(taskClass)
{
  const element = new ElementData
  (
    'div',
    'task-card',
    {},
    [
      taskCardStatusSection(taskClass),
      taskCardNameSection(taskClass),
      taskCardCoreInfoSection(taskClass),
      taskCardAdditionalInfoSection(taskClass),
      newTaskButtons(taskClass),
    ],
  ).renderElement();

  function categoriesUpdated()
  {
    const categoryInputElement = element.querySelector('.task-card-category-input');
    if (!categoryInputElement) return;

    const newElement = taskCategoryInput(taskClass);

    categoryInputElement.replaceWith(newElement);
  };

  function elementClicked()
  {
    if (!taskPageState.getIsDeleting()) return;
    const isMarked = element.classList.contains('marked-for-deletion');

    if (isMarked)
    {
      console.log(`${taskClass.getTaskName()} is wont be deleted`);
      element.classList.remove('marked-for-deletion');
      taskPageState.removeTaskFromDeletion(taskClass);
    } else
    {
      console.log(`${taskClass.getTaskName()} is will be deleted`);
      element.classList.add('marked-for-deletion');
      taskPageState.addTaskToDelete(taskClass);
    };

    taskViewportEventManager.emit(taskViewportEvents.taskMarked);
  }

  function elementDoubleClicked()
  {
    if (taskPageState.getIsDeleting()) return;

    const currentStatus = taskClass.getIsTaskComplete();

    taskClass.setIsTaskComplete(!currentStatus);
  }

  element.onclick = elementClicked;

  element.ondblclick = elementDoubleClicked;

  selectCategoryEventsManager.on(selectCategoryEvents.categoryNameChanged, categoriesUpdated);
  taskPageEventsManager.on(taskPageEvents.categoryAdded, categoriesUpdated);
  taskPageEventsManager.on(taskPageEvents.categoryDeleted, categoriesUpdated);
  return element;
};