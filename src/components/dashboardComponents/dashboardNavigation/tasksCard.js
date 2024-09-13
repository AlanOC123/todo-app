import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";
import userSettings from "../../../utils/stateManagement/common/userSettings";

export default (function tasksCard() {
  const subMenuElementData = new ElementData(
    'li',
    'font-body sub-menu-item', 
    {},
    []
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
    ['Tasks']
  ).createElementData();

  const iconData = new ElementData(
    'i', 
    'fa-solid fa-list-check fa-lg',
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
      id: 'tasks-card'
    },
    [ 
      createElement(cardData),
      createElement(subMenuData)
    ],
  ).createElementData();

  function render() {
    const element = createElement(containerData);
    const card = element.firstChild;
    const subMenu = element.closest('.expandable-card').querySelector('.sub-menu');
    
    const { tasks } = userSettings;

    tasks.forEach(task => {
      const taskElement = createElement(subMenuElementData);
      taskElement.textContent = Object.keys(task);
      subMenu.appendChild(taskElement);
    });

    if (tasks.length === 0) {
      const button = card.appendChild(createElement(addButtonContainerData));
    } else {
      const button = card.appendChild(createElement(expandButtonContainerData));
      button.addEventListener('click', () => {
        const navigation = button.closest('.navigation');
        subMenu.classList.toggle('active')
        navigation.addEventListener('mouseleave', () => {
          subMenu.classList.remove('active');
        }) 
      })
    }
    return element;
  }

  return {
    containerData,
    render
  }
})()