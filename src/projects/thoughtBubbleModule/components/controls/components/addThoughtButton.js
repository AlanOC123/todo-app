import iconContainer from '../../../../../shared/components/icon';
import iconsMap from '../../../../../shared/utils/iconsMap';
import addThought from '../utils/addThought';

export default function addThoughtButton()
{
  const element = iconContainer(iconsMap.comments.icon, null);
  element.classList.add('add-thought-button');
  element.onclick = addThought;
  return element
}