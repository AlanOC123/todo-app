import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";

export default (function homeCard() {
  const textData = new ElementData(
    'p',
    'card-text font-body', 
    {},
    ['Calendar']
  ).createElementData();

  const iconData = new ElementData(
    'i', 
    'fa-solid fa-calendar fa-lg',
    {},
    []
  ).createElementData();

  const iconContainerData = new ElementData(
    'div',
    'card-icon',
    {},
    [ createElement(iconData) ]
  )

  const containerData = new ElementData(
    'li',
    'nav-card',
    {
      id: 'calendar-card'
    },
    [ 
      createElement(iconContainerData),
      createElement(textData) 
    ],
  ).createElementData();

  function render() {
    return createElement(containerData);
  }

  return {
    containerData,
    render
  }
})()