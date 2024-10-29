import editTaskTitleField from "../../shared/components/editTaskTitle/editTaskTitleField";
import editTaskTitleInput from "../../shared/components/editTaskTitle/editTaskTitleInput";
import testTasks from "../../shared/utils/testTasks";
import isTaskTitleValid from "../utils/isTaskTitleValid";

export default function enableTaskTitleEdit(event) {
  const container = event.target.closest(".edit-task-title");
  const target = container.children.item(1);

  const modal = container.closest("#form-modal");
  const id = modal.dataset.task;

  if (target.classList.contains("edit-task-title-input")) {
    const task = testTasks.find((task) => task.id === id);
    const value = target.value;
    if (!value) return;
    if (isTaskTitleValid(value)) {
      task.updateTitle(value);
      modal.dataset.task = task.id;
      target.replaceWith(editTaskTitleField(task.title));
    } else {
      target.replaceWith(editTaskTitleField(task.title));
      return;
    }
  } else {
    target.replaceWith(editTaskTitleInput());
  }
}
