import iconContainer from "../../../shared/components/icon";
import iconsMap from "../../../shared/utils/iconsMap";

export default function viewDraftTasksButton()
{
  const element = iconContainer(iconsMap.options.icon, null);

  function buttonClicked()
  {
    const projectPageElement = document.getElementById('projects');

    if (projectPageElement)
    {
      projectPageElement.classList.toggle('draft-tasks-shown');
    };
  }

  element.addEventListener('click', buttonClicked);

  return element;
};