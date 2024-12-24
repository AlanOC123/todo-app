import taskPriorityDisplay from "../components/taskPriorityDisplay";

export default function changePriorityInputElement(inputElement, taskClass)
{
  if (!inputElement || !taskClass) return;
  inputElement.replaceWith(taskPriorityDisplay(taskClass));
}