import iconsMap from "../../../shared/utils/iconsMap";
import iconContainer from "../../../shared/components/icon";
import setDaySelected from "../utils/setDaySelected";

export default function nextButton()
{
  const element = iconContainer(iconsMap.arrowRight.icon, null);

  element.id = 'next-button';

  element.addEventListener('click', setDaySelected);

  return element
}