import iconContainer from "../../../../../shared/components/icon";
import iconsMap from "../../../../../shared/utils/iconsMap";
import projectsState from "../../../utils/projectsState";
import showChangeProjectInput from "../utils/showChangeProjectInput";

export default function relateTaskToProjectButton()
{
  const element = iconContainer(iconsMap.link.icon, null);

  function buttonClicked()
  {
    showChangeProjectInput(element);
  }

  element.onclick = buttonClicked;

  return element;
}