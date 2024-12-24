import changeStatusInputElement from './changeStatusInputElement';

export default function changeTaskStatus(inputElement, taskClass)
{
  if (!inputElement || !taskClass) return;

  if (inputElement.value === '--Select Status--') return;

  taskClass.setTaskStatus(inputElement.value);

  changeStatusInputElement(inputElement, taskClass);
}