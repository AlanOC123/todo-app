import taskCategoryDisplay from "../components/taskCategoryDisplay";

export default function changeCategoryInputElement(inputElement, taskClass)
{
  if (!inputElement || !taskClass) return;
  inputElement.replaceWith(taskCategoryDisplay(taskClass));
}