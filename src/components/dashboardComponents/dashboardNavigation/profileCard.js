import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";

export default (function profileCard() {
  const iconData = new ElementData(
    'i', 
    'profile-picture',
    {},
    []
  ).createElementData();

  const containerData = new ElementData(
    'li',
    'nav-card',
    {
      id: 'profile-card'
    },
    [ createElement(iconData) ],
  ).createElementData();

  function render() {
    return createElement(containerData);
  }

  return {
    containerData,
    render
  }
})()