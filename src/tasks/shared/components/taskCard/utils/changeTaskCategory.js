import taskPageState from "../../../../shared/utils/taskPageState";

export default function changeTaskCategory(inputElement, taskClass)
{
  if (!inputElement || !taskClass) return;

  if (inputElement.value === '--Select Category--') return;

  const categories = taskPageState.getCategories();

  const selectedCategory = categories.find
  (
    category => category.getCategoryName() === inputElement.value
  );

  if (!selectedCategory) return;

  selectedCategory.addCategoryTask(taskClass);
  taskClass.setTaskCategory(selectedCategory);
}