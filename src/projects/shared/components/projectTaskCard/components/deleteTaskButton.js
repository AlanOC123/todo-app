import iconContainer from "../../../../../shared/components/icon";
import iconsMap from "../../../../../shared/utils/iconsMap";
import deleteSelectedTask from "../utils/deleteSelectedTask";

export default function deleteTaskButton()
{
  const element = iconContainer(iconsMap.delete.icon, null);

  function buttonClicked()
  {
    deleteSelectedTask(element);
  }

  element.addEventListener('click', buttonClicked);

  return element;
}