export default function changeTaskPriority(inputElement, taskClass)
{
  if (!inputElement || !taskClass) return;

  if (!inputElement.value) return;

  if (inputElement.value === '--Select Priority--') return;

  taskClass.setTaskPriority(inputElement.value);
}