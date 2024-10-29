import deleteButton from '../../../../../shared/components/deleteButton';
import deleteTask from '../utils/deleteTask';

export default function taskCardDeleteButton()
{
  const element = deleteButton(null);
  element.addEventListener('click', deleteTask);
  element.classList.add('delete');
  return element
}