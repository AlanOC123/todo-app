import iconsMap from "../../../shared/utils/iconsMap";
import iconContainer from "../../../shared/components/icon";
import setDaySelected from "../utils/setDaySelected";

export default function prevButton()
{
  const element = iconContainer(iconsMap.arrowLeft.icon, null);

  element.id = 'prev-button';

  element.addEventListener('click', setDaySelected);

  return element
}