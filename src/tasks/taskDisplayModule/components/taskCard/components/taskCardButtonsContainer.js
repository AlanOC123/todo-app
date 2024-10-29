import taskCardEditButton from './taskCardEditButton';
import taskCardDeleteButton from './taskCardDeleteButton';
import taskCardMarkCompleteButton from './taskCardMarkCompleteButton';
import ElementData from '../../../../../shared/utils/ElementData';

export default function taskCardButtonsContainer()
{
  return new ElementData
  (
    'div',
    'task-card-buttons-container',
    {},
    [
      taskCardMarkCompleteButton(),
      taskCardEditButton(),
      taskCardDeleteButton()
    ],
  ).renderElement();
};