import ElementData from "../../../shared/utils/ElementData";
import iconContainer from "../../../shared/components/icon";
import iconsMap from "../../../shared/utils/iconsMap";
import createProject from "../utils/createProject";

export default function addProjectButton()
{
  const addProjectButton = iconContainer(iconsMap.create.icon, null);

  const element = new ElementData
  (
    'li',
    'select-project-card',
    {},
    [
      addProjectButton
    ]
  ).renderElement();

  function cardClicked()
  {
    createProject();
    const mainPage = document.querySelector('#projects');

    if (!mainPage)
    {
      return;
    }

    mainPage.classList.add('sub-menu-open');
  }

  element.onclick = cardClicked;

  return element;
};