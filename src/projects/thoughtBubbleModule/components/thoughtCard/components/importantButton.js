import ElementData from '../../../../../shared/utils/ElementData';
import iconsMap from '../../../../../shared/utils/iconsMap';
import iconContainer from '../../../../../shared/components/icon';

export default function importantButton(thoughtClass)
{
  const buttonIcon = iconContainer(iconsMap.star.icon, null);

  const element = new ElementData
  (
    'div',
    'mark-important-button',
    {},
    [ buttonIcon ]
  ).renderElement();

  if (thoughtClass.getIsThoughtImportant())
  {
    element.classList.add('important-thought');
  }

  function elementClicked()
  {
    const isThoughtImportant = thoughtClass.getIsThoughtImportant();

    if (isThoughtImportant)
    {
      thoughtClass.setIsThoughtImportant(false);
      element.classList.remove('important-thought');
    } else
    {
      thoughtClass.setIsThoughtImportant(true);
      element.classList.add('important-thought');
    }
  }

  element.onclick = elementClicked;

  return element;
}