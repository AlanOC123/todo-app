import editTaskStatusField from "../../shared/components/editTaskStatus/editTaskStatusField";
import editTaskStatusInput from "../../shared/components/editTaskStatus/editTaskStatusInput";
import testTasks from "../../shared/utils/testTasks";

export default function enableTaskStatusEdit(event) {
  const container = event.target.closest('.edit-task-status');
  const target = container.children.item(1);

  const id = container.closest('#form-modal').dataset.task;

  if (target.classList.contains("edit-task-status-input")) {
    const task = testTasks.find((task) => task.id === id);
    const value = target.value;
    if (!value) return;
    task.updateStatus(value);
    target.replaceWith(editTaskStatusField(task.status));
  } else {
    target.replaceWith(editTaskStatusInput());
  }
}
