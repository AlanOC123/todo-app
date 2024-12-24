import ElementData from "../../../shared/utils/ElementData";
import iconsMap from "../../../shared/utils/iconsMap";
import iconContainer from '../../../shared/components/icon';

export default function emptyBubbleMessage(textMsg)
{
  return new ElementData
  (
    'div',
    'empty-bubble-message',
    {},
    [
      iconContainer(iconsMap.warning.icon, null),
      new ElementData
      (
        'p',
        '',
        {},
        [ textMsg ]
      ).renderElement(),
    ]
  ).renderElement();
}