import ElementData from "../../../shared/utils/ElementData";
import iconContainer from '../../../shared/components/icon';
import iconsMap from "../../../shared/utils/iconsMap";
import projectsState from "../../shared/utils/projectsState";

export default function selectProjectHeader()
{
  const moreOptionsButton = iconContainer(iconsMap.options.icon, null);

  const headerElement = new ElementData
  (
    'h3',
    'select-project-header-text',
    {},
    ['Projects']
  ).renderElement()

  const element = new ElementData
  (
    'div',
    'select-project-header',
    {},
    [
      headerElement,
      moreOptionsButton
    ]
  ).renderElement();

  function buttonClicked()
  {
    if (!projectsState.getSelectedProject())
    {
      const newProjectCard = document.querySelector('.select-project-card');
      if (newProjectCard)
      {
        newProjectCard.classList.add('animate-card');
      }
      headerElement.textContent = 'No Projects';
      headerElement.classList.add('no-projects-error');
      setTimeout(changeText, 5000);
      return;
    };

    const mainPage = document.querySelector('#projects');
    if (!mainPage)
    {
      return;
    }
    mainPage.classList.toggle('sub-menu-open');
  }

  function changeText()
  {
    headerElement.textContent = 'Projects';
    headerElement.classList.remove('no-projects-error');
    const newProjectCard = document.querySelector('.select-project-card');
    if (newProjectCard)
    {
      newProjectCard.classList.remove('animate-card');
    }
  }

  moreOptionsButton.onclick = buttonClicked;

  return element;
}