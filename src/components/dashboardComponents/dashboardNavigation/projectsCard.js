import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";
import userSettings from "../../../utils/stateManagement/common/userSettings";

export default (function tasksCard() {
  const subMenuElementData = new ElementData(
    'li',
    'sub-menu-item'
  ).createElementData();

  const expandButtonData = new ElementData(
    'i',
    'fa-solid fa-angle-down'
  ).createElementData();

  const addButtonData = new ElementData(
    'i',
    'fa-solid fa-plus'
  ).createElementData();

  const expandButtonContainerData = new ElementData(
    'div',
    'card-button',
    {},
    [ createElement(expandButtonData) ]
  ).createElementData()

  const addButtonContainerData = new ElementData(
    'div',
    'card-button',
    {},
    [ createElement(addButtonData) ]
  ).createElementData()

  const textData = new ElementData(
    'p',
    'card-text font-body', 
    {},
    ['Projects']
  ).createElementData();

  const iconData = new ElementData(
    'i', 
    'fa-solid fa-diagram-project fa-lg',
    {},
    []
  ).createElementData();

  const iconContainerData = new ElementData(
    'div',
    'card-icon', 
    {},
    [ createElement(iconData) ]
  )

  const subMenuData = new ElementData(
    'ul',
    'sub-menu', 
    {}, 
    []
  ).createElementData()

  const cardData = new ElementData(
    'div',
    'expandable-card-item',
    {},
    [ 
      createElement(iconContainerData),
      createElement(textData)
    ],
  ).createElementData();

  const containerData = new ElementData(
    'li',
    'expandable-card',
    {
      id: 'projects-card'
    },
    [ 
      createElement(cardData),
      createElement(subMenuData)
    ],
  ).createElementData();

  function render() {
    const element = createElement(containerData);
    const card = element.firstChild;
    
    const { projects } = userSettings;

    if (projects.length === 0) {
      const button = card.appendChild(createElement(addButtonContainerData));
    } else {
      const button = card.appendChild(createElement(expandButtonContainerData));
    }
    return element;
  }

  return {
    containerData,
    render
  }
})()