import ElementData from "../../../../shared/utils/ElementData";
import iconContainer from "../../../../shared/components/icon";
import iconsMap from "../../../../shared/utils/iconsMap";
import projectViewportComponentCardHeaderSubMenu from "./projectViewportComponentCardHeaderSubMenu";
import projectViewportComponentCardNameDisplay from "./projectViewportComponentCardNameDisplay";

export default function projectViewportComponentCardHeader(componentClass)
{
  const subMenuElement = projectViewportComponentCardHeaderSubMenu(componentClass);

  subMenuElement.classList.add('show-component-options-button');

  const componentNameElement = projectViewportComponentCardNameDisplay(componentClass);

  const moreOptionsButton = iconContainer(iconsMap.ellipses.icon, null);

  const element = new ElementData
  (
    'div',
    'project-component-card-header',
    {},
    [
      componentNameElement,
      moreOptionsButton,
      subMenuElement
    ]
  ).renderElement()

  function buttonClicked()
  {
    element.classList.toggle('options-shown');
  }

  moreOptionsButton.onclick = buttonClicked;

  return element;
}