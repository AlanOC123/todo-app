import ElementData from "../../../../shared/utils/ElementData";
import tasksState from '../../../shared/utils/tasksState';

export default function editTaskDateField(date) {
  if (date === tasksState.date) {
    date = 'Today';
  }
  return new ElementData
  (
    "div", 
    "edit-task-date-container", 
    {}, 
    [
      new ElementData
      (
        "p", 
        "edit-task-date-field", 
        {}, 
        [date]
      ).renderElement(),
    ]
  ).renderElement();
}
