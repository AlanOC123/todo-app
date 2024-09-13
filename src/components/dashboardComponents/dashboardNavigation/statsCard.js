import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";

export default (function homeCard() {
  const textData = new ElementData(
    'p',
    'card-text font-body', 
    {},
    ['Stats']
  ).createElementData();

  const iconData = new ElementData(
    'i', 
    'fa-solid fa-chart-pie fa-lg',
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
      id: 'stats-card'
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