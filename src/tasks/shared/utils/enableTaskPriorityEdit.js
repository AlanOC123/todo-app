import editTaskPriorityField from "../../shared/components/editTaskPriority/editTaskPriorityField";
import editTaskPriorityInput from "../../shared/components/editTaskPriority/editTaskPriorityInput";
import testTasks from "../../shared/utils/testTasks";

export default function enableTaskPriorityEdit(event) {
  const container = event.target.closest('.edit-task-priority');
  const target = container.children.item(1);

  const id = container.closest('#form-modal').dataset.task;

  if (target.classList.contains("edit-task-priority-input")) {
    const task = testTasks.find((task) => task.id === id);
    const value = target.value;
    if (!value) return;
    task.updatePriority(value);
    target.replaceWith(editTaskPriorityField(task.priority));
  } else {
    target.replaceWith(editTaskPriorityInput());
  }
}
