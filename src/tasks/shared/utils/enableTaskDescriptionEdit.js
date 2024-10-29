import editTaskDescriptionField from "../../shared/components/editTaskDescription/editTaskDescriptionField";
import editTaskDescriptionInput from "../../shared/components/editTaskDescription/editTaskDescriptionInput";
import testTasks from "../../shared/utils/testTasks";

export default function enableTaskDescriptionEdit(event) {
  const container = event.target.closest('.edit-task-description');
  const target = container.children.item(1);

  const id = container.closest('#form-modal').dataset.task;

  if (target.classList.contains("edit-task-description-input")) {
    const task = testTasks.find((task) => task.id === id);
    const value = target.value;
    if (!value) return;
    task.updateDescription(value);
    target.replaceWith(editTaskDescriptionField(task.description));
  } else {
    target.replaceWith(editTaskDescriptionInput());
  }
}
