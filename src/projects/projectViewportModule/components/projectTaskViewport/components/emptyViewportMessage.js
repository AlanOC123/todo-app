import ElementData from '../../../../../shared/utils/ElementData';
import iconContainer from '../../../../../shared/components/icon';
import iconsMap from '../../../../../shared/utils/iconsMap';

export default function emptyViewportMessage(txtMsg)
{
  const warningIcon = iconContainer(iconsMap.warning.icon);
  warningIcon.classList.add('empty-message-icon');
  return new ElementData
  (
    'div',
    'empty-viewport-message',
    {},
    [
      warningIcon,
      new ElementData
      (
        'p',
        'empty-viewport-message-text',
        {},
        [ txtMsg ]
      ).renderElement(),
    ]
  ).renderElement();
}