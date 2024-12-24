import taskDueDateDisplay from "../components/taskDueDateDisplay";

export default function changeDueDateInputElement(inputElement, taskClass)
{
  if (!inputElement || !taskClass) return;
  inputElement.replaceWith(taskDueDateDisplay(taskClass));
}