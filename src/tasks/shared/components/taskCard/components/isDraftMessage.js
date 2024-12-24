import ElementData from '../../../../../shared/utils/ElementData';

export default function isDraftMessage()
{
  return new ElementData
  (
    'p',
    'task-card-draft-message',
    {},
    ['Draft']
  ).renderElement()
}