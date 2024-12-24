import taskNameDisplay from "../components/taskNameDisplay";

export default function changeNameInputElement(inputElement, taskClass)
{
  if (!inputElement || !taskClass) return;
  inputElement.replaceWith(taskNameDisplay(taskClass));
}