import iconsMap from "../../../../../shared/utils/iconsMap";
import iconContainer from "../../../../../shared/components/icon";

export default function taskCardCategory({ category })
{
  const iconClass = Object.keys(iconsMap).find(icon => iconsMap[icon].label === category);
  const element = iconContainer(iconsMap[iconClass].icon, null);
  element.classList.add('category-icon');
  return element;
}