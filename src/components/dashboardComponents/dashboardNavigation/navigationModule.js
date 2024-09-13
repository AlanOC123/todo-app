import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";
import homeCard from "./homeCard";
import tasksCard from "./tasksCard";
import projectsCard from './projectsCard';
import statsCard from './statsCard';
import calendarCard from './calendarCard';
import profileCard from './profileCard';

export default (function navigationModule() {

  const listData = new ElementData(
    'ul',
    'nav-list',
    {},
    [ 
      homeCard.render(),
      tasksCard.render(),
      projectsCard.render(),
      statsCard.render(),
      calendarCard.render(),
    ]
  )
  const containerData = new ElementData(
    "nav",
    "navigation",
    {
      id: "navigation",
    },
    [ createElement(listData) ]
  ).createElementData();

  function render() {
    return createElement(containerData);
  }

  return {
    containerData,
    render,
  };
})()
