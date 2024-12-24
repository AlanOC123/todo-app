import ElementData from '../../../../../shared/utils/ElementData';
import taskCategoryDisplay from "./taskCategoryDisplay";
import taskCategoryInput from "./taskCategoryInput";
import taskDueDateInput from "./taskDueDateInput";
import taskDueDateDisplay from "./taskDueDateDisplay";

export default function taskCardCoreInfoSection(taskClass)
{
  const isDraft = taskClass.getIsTaskEditing();

  return new ElementData
  (
    'div',
    'task-card-other-section',
    {},
    [
      (isDraft ? taskDueDateInput(taskClass) : taskDueDateDisplay(taskClass)),
      (isDraft ? taskCategoryInput(taskClass) : taskCategoryDisplay(taskClass)),
    ]
  ).renderElement();
}