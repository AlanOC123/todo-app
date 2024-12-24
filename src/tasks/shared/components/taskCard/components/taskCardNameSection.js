import ElementData from '../../../../../shared/utils/ElementData';
import taskNameInput from "./taskNameInput";
import taskNameDisplay from "./taskNameDisplay";

export default function taskCardNameSection(taskClass)
{
  const isDraft = taskClass.getIsTaskEditing();

  return new ElementData
  (
    'div',
    'task-card-name-section',
    {},
    [ (isDraft ? taskNameInput(taskClass) : taskNameDisplay(taskClass)) ]
  ).renderElement();
}