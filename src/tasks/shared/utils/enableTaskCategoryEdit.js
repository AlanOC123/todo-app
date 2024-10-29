import editTaskCategoryField from "../components/editTaskCategory/editTaskCategoryField";
import editTaskCategoryInput from "../components/editTaskCategory/editTaskCategoryInput";
import testTasks from "../../shared/utils/testTasks";

export default function enableTaskCategoryEdit(event) {
  const container = event.target.closest('.edit-task-category');
  const target = container.children.item(1);

  const id = container.closest('#form-modal').dataset.task;

  if (target.classList.contains("edit-task-category-input")) {
    const task = testTasks.find((task) => task.id === id);
    const value = target.value;
    if (!value) return;
    task.updateCategory(value);
    target.replaceWith(editTaskCategoryField(task.category));
  } else {
    target.replaceWith(editTaskCategoryInput());
  }
}
