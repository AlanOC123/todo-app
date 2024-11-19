import iconContainer from "../../../../../shared/components/icon";
import iconsMap from "../../../../../shared/utils/iconsMap";
import projectsState from "../../../utils/projectsState";

export default function markTaskCompleteButton()
{
  const element = iconContainer(iconsMap.confirm.icon, null);

  return element;
}