import ElementData from "../../../../shared/utils/ElementData";
import iconContainer from "../../../../shared/components/icon";
import iconsMap from "../../../../shared/utils/iconsMap";
import createComponent from "../../utils/createComponent";

export default function createComponentCard(sectionName)
{
  const addButton = iconContainer(iconsMap.create.icon, null);

  const element = new ElementData
  (
    'div',
    'create-project-viewport-component',
    {},
    [
      new ElementData
      (
        'h3',
        'create-project-viewport-component-text',
        {},
        ['Add Component']
      ).renderElement(),
      addButton,
    ]
  ).renderElement();

  function buttonClicked()
  {
    createComponent(sectionName);
  }

  element.onclick = buttonClicked;

  return element;
}