import taskStatusDisplay from "../components/taskStatusDisplay";

export default function changeStatusInputElement(inputElement, taskClass)
{
  if (!inputElement || !taskClass) return;
  inputElement.replaceWith(taskStatusDisplay(taskClass));
}