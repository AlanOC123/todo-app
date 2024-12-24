import ElementData from '../../../../../shared/utils/ElementData';
import taskStatusInput from "./taskStatusInput";
import taskStatusDisplay from "./taskStatusDisplay";
import isDraftMessage from "../components/isDraftMessage";

export default function taskCardStatusSection(taskClass)
{
  const isDraft = taskClass.getIsTaskEditing();

  return new ElementData
  (
    'div',
    'task-card-status-section',
    {},
    [ 
      (isDraft ? taskStatusInput(taskClass) : taskStatusDisplay(taskClass)),
      (isDraft ? isDraftMessage() : null) 
    ]
  ).renderElement();
}