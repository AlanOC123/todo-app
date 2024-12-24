export default function changeTaskName(inputElement, taskClass)
{
  if (!taskClass || !inputElement) return;

  if (!inputElement.value)
  {
    inputElement.classList.add('error');
    inputElement.focus();
    return;
  }

  if (inputElement.value === 'Type Task Name')
  {
    inputElement.classList.add('error');
    inputElement.focus();
    return;
  }

  taskClass.setTaskName(inputElement.value);

  if (taskClass.getTaskName() === 'Type Task Name')
  {
    inputElement.classList.add('error');
    inputElement.focus();
    return;
  }
}