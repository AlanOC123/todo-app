import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";

export default function createNavListItem(icon, text, id) {

  const textData = new ElementData(
    'p',
    'nav-item-text',
    {},
    [ text ]
  ).createElementData();

  const iconData = new ElementData(
    'div',
    `icon ${icon}`,
    {},
    []
  ).createElementData();

  const iconContainerData = new ElementData(
    'div',
    'icon-container',
    {
      id: `${id}-icon`
    },
    [ createElement(iconData) ]
  ).createElementData();

  const containerData = new ElementData(
    'li',
    'nav-item',
    {
      id: `${id}-card`
    },
    [
      createElement(iconContainerData),
      createElement(textData)
    ]
  ).createElementData();

  return createElement(containerData);
};