export default function changeTaskDueDate(inputElement, taskClass)
{
  if (!taskClass || !inputElement) return;

  if (!inputElement.value || !inputElement.checkValidity())
  {
    inputElement.classList.add('error');
    inputElement.focus();
    return;
  }

  if (inputElement.value === 'dd-mm-yyyy')
  {
    inputElement.classList.add('error');
    inputElement.focus();
    return;
  }

  console.log(inputElement.value);

  taskClass.setTaskDueDate(new Date(inputElement.value));
}