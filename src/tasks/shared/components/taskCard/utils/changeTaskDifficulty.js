export default function changeTaskDifficulty(inputElement, taskClass)
{
  if (!inputElement || !taskClass) return;

  if (!inputElement.value) return;

  if (inputElement.value === '--Select Difficulty--') return;

  taskClass.setTaskDifficulty(inputElement.value);
}