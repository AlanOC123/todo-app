import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";
import storageModule from "../../../utils/dataProcessing/storageModule";
import events from "../../../utils/events/common/events";
import EventsManager from "../../../utils/events/common/EventsManager";

export default function projectsHomeCard() {
  if (!storageModule.getSettings('init')) {
    return;
  }

  function setCardValues() {
  
    const projects = storageModule.getSettings('projects');
    let title = 'No Project in Progress', completion = '0%', numberOfTasks = 0;
    let currentProject = projects.find(project => project.inProgress) || null;

    if (currentProject) {
      title = currentProject.title;
      completion = currentProject.completion;
      numberOfTasks = currentProject.numberOfTasks;
    };

    projectsHeader.textContent = title;
    projectCompletionCardValue.textContent = completion;
    projectNumberofTasksCardValue.textContent = numberOfTasks;
  }

  const projectNumberofTasksCardHeaderData = new ElementData(
    'p',
    '',
    {},
    []
  ).createElementData();

  const projectNumberofTasksCardValueData = new ElementData(
    'p',
    '',
    {},
    []
  ).createElementData();

  const projectNumberofTasksCardHeader = createElement(projectNumberofTasksCardHeaderData);
  const projectNumberofTasksCardValue = createElement(projectNumberofTasksCardValueData);
  projectNumberofTasksCardHeader.textContent = 'Number of Tasks';

  const projectNumberofTasksCardData = new ElementData(
    'div',
    'projects-card-sub-item',
    {},
    [
      projectNumberofTasksCardHeader,
      projectNumberofTasksCardValue
    ]
  ).createElementData();

  const projectNumberofTasksCard = createElement(projectNumberofTasksCardData);

  const projectCompletionCardHeaderData = new ElementData(
    'p',
    'projects-card-sub-header',
    {},
    []
  ).createElementData();

  const projectCompletionCardValueData = new ElementData(
    'p',
    'projects-card-sub-value',
    {},
    []
  ).createElementData();

  const projectCompletionCardHeader = createElement(projectCompletionCardHeaderData);
  const projectCompletionCardValue = createElement(projectCompletionCardValueData);

  projectCompletionCardHeader.textContent = 'Project Completion';

  const projectCompletionCardData = new ElementData(
    'div',
    'projects-card-sub-item',
    {},
    [
      projectCompletionCardHeader,
      projectCompletionCardValue
    ]
  ).createElementData();

  const projectCompletionCard = createElement(projectCompletionCardData);

  const projectsHeaderData = new ElementData(
    'h2',
    'projects-card-header',
    {},
    [
      projectCompletionCard,
      projectNumberofTasksCard
    ]
  ).createElementData();

  const projectsHeader = createElement(projectsHeaderData);

  const projectsCardBodyData = new ElementData(
    'div',
    'home-card-body',
    {},
    [
      projectsHeader,
      projectCompletionCard,
      projectNumberofTasksCard
    ]
  )

  const containerData = new ElementData(
    'div',
    'home-card',
    {},
    [ 
      createElement(projectsCardBodyData)
    ]
  ).createElementData();

  const element = createElement(containerData);

  setCardValues();
  EventsManager.on(events.projectsUpdated, setCardValues);

  return element;
}