import createHomeTasksCard from "../../../utils/classes/createHomeTasksCard";
import events from '../../../utils/events/common/events';
import EventsManager from '../../../utils/events/common/EventsManager';
import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";
import storageModule from "../../../utils/dataProcessing/storageModule";

export default function tasksCompleteCard() {
  if (!storageModule.getSettings('init')) {
    return;
  }

  const currentDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][ new Date().getDay() ];

  function setValues() {
    const { completeTasks } = storageModule.getSettings('stats');
    value.textContent = completeTasks.length
  };

  const containerData = new ElementData(
    'div',
    'home-card',
    {},
    [
      createHomeTasksCard(),
    ]
  ).createElementData();

  const element = createElement(containerData);
  const body = element.firstChild;
  const [ header, value ] = Array.from(body.children);

  element.onclick = () => EventsManager.emit(events.renderTasks);

  header.textContent = 'Completed Tasks';

  setValues();
  EventsManager.on(events.tasksUpdated, setValues);

  return element;
}