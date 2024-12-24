import ElementData from '../../../../../shared/utils/ElementData';
import taskPriorityDisplay from "./taskPriorityDisplay";
import taskPriorityInput from "./taskPriorityInput";
import taskDifficultyDisplay from "./taskDifficultyDisplay";
import taskDifficultyInput from "./taskDifficultyInput";

export default function taskCardAdditionalInfoSection(taskClass)
{
  const isDraft = taskClass.getIsTaskEditing();

  return new ElementData
  (
    'div',
    'task-card-add-info-section',
    {},
    [
      (isDraft ? taskPriorityInput(taskClass) : taskPriorityDisplay(taskClass)),
      (isDraft ? taskDifficultyInput(taskClass) : taskDifficultyDisplay(taskClass)),
    ]
  ).renderElement();
}