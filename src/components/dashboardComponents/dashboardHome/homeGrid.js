import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";
import storageModule from "../../../utils/dataProcessing/storageModule";

export default function homeGrid() {

  const tasksTotalCardData = new ElementData(
    'div',
    'home-total-tasks-card',
    {},
    []
  ).createElementData();

  const tasksTotalCardContainer = createElement(tasksTotalCardData);

  const tasksOverdueCardData = new ElementData(
    'div',
    'home-overdue-tasks-card',
    {},
    []
  ).createElementData();

  const tasksOverdueCardContainer = createElement(tasksOverdueCardData);

  const tasksCompleteCardData = new ElementData(
    'div',
    'home-complete-tasks-card',
    {},
    []
  ).createElementData();

  const tasksCompleteCardContainer = createElement(tasksCompleteCardData);

  const projectsCardData = new ElementData(
    'div',
    'home-projects-card',
    {},
    []
  ).createElementData();

  const projectsCardContainer = createElement(projectsCardData);


  const containerData = new ElementData(
    'section',
    'home-page-grid',
    {},
    [
      projectsCardContainer,
      tasksTotalCardContainer,
      tasksOverdueCardContainer,
      tasksCompleteCardContainer
    ]
  ).createElementData();

  return createElement(containerData);
}