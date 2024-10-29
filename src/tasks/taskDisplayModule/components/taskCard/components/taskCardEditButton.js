import editButton from '../../../../../shared/components/editButton';
import editTaskModule from '../../../../editTaskModule';

export default function taskCardEditButton()
{
  const element = editButton(null);

  element.addEventListener('click', editTaskModule)
  return element
}