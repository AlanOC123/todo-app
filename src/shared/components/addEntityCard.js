import ElementData from '../../utils/ElementData';
import iconContainer from './icon';
import iconsMap from '../utils/iconsMap';

export default function addEntityCard(text, className)
{
  return new ElementData
  (
    'li',
    className,
    {},
    [
      iconContainer(iconsMap.create.icon, null),
      text
    ]
  ).renderElement();
};
