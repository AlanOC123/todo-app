import editTaskDateField from "../components/editTaskDate/editTaskDateField";
import editTaskDateInput from "../components/editTaskDate/editTaskDateInput";
import testTasks from "../../shared/utils/testTasks";
import isTaskDateValid from '../../shared/utils/isTaskDateValid';

export default function enableTaskDateEdit(event)
{
  const container = event.target.closest('.edit-task-date');
  const target = container.children.item(1);

  const id = container.closest('#form-modal').dataset.task;

  if (target.classList.contains('edit-task-date-input')) {
    const task = testTasks.find(task => task.id === id);
    const value = target.value;
    if (!value) return;
    if (isTaskDateValid(target).validFlag) {
      task.updateDueDate(value);
      target.replaceWith(editTaskDateField(task.dueDate));
    } else {
      target.replaceWith(editTaskDateField(task.dueDate));
      return;
    }
  } else {
    target.replaceWith(editTaskDateInput());
  }
}